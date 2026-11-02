import { NextResponse } from 'next/server';
import { validateEnquiry } from '../../../lib/enquiry';
import { isMailConfigured, sendEnquiryEmails } from '../../../lib/mailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const SUCCESS_MESSAGES = {
	contact: 'Thank you! Your message has been sent. A confirmation email is on its way to your inbox.',
	booking: 'Your class booking request is received! Check your inbox for the confirmation - we will contact you shortly.',
	newsletter: 'You are subscribed! A welcome email is on its way.',
	comment: 'Thanks! Your comment has been received and will appear after review.',
};

// Best-effort, per-instance rate limit: 5 submissions per IP every 10 minutes.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map();

function rateLimited(ip) {
	const now = Date.now();
	const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
	recent.push(now);
	hits.set(ip, recent);
	if (hits.size > 5000) {
		for (const [key, times] of hits) {
			if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
		}
	}
	return recent.length > MAX_PER_WINDOW;
}

function clientIp(request) {
	const forwarded = request.headers.get('x-forwarded-for');
	if (forwarded) return forwarded.split(',')[0].trim();
	return request.headers.get('x-real-ip') || 'unknown';
}

function sameOrigin(request) {
	const origin = request.headers.get('origin');
	if (!origin) return true;
	try {
		return new URL(origin).host === request.headers.get('host');
	} catch {
		return false;
	}
}

function json(body, status = 200) {
	return NextResponse.json(body, { status, headers: { 'Cache-Control': 'no-store' } });
}

export async function POST(request) {
	if (!sameOrigin(request)) {
		return json({ ok: false, error: 'Forbidden.' }, 403);
	}

	let payload;
	try {
		payload = await request.json();
	} catch {
		return json({ ok: false, error: 'Invalid request.' }, 400);
	}

	const type = typeof payload?.type === 'string' ? payload.type : '';
	const fields = payload?.fields && typeof payload.fields === 'object' ? payload.fields : {};

	// Honeypot: real visitors never see or fill this field.
	if (typeof fields.company === 'string' && fields.company.trim()) {
		return json({ ok: true, message: SUCCESS_MESSAGES[type] || 'Thank you!' });
	}

	const result = validateEnquiry(type, fields);
	if (!result.ok) {
		return json({ ok: false, error: result.error, fieldErrors: result.fieldErrors }, 422);
	}

	if (rateLimited(clientIp(request))) {
		return json({ ok: false, error: 'Too many submissions. Please wait a few minutes and try again.' }, 429);
	}

	const meta = {
		page: typeof payload.page === 'string' ? payload.page.slice(0, 200) : '',
		receivedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST',
	};

	if (!isMailConfigured()) {
		if (process.env.NODE_ENV !== 'production') {
			console.info(`[enquiry] SMTP not configured - ${type} submission (dev only, not emailed):`, result.data);
			return json({ ok: true, message: SUCCESS_MESSAGES[type], dev: true });
		}
		console.error('[enquiry] SMTP_USER / SMTP_PASS are not set; cannot deliver form submissions.');
		return json({ ok: false, error: 'Our form service is temporarily unavailable. Please call or WhatsApp us instead.' }, 503);
	}

	try {
		await sendEnquiryEmails({ type, form: result.form, data: result.data, meta });
	} catch (error) {
		console.error('[enquiry] failed to send notification:', error?.message || error);
		return json({ ok: false, error: 'We could not send your message right now. Please try again or WhatsApp us.' }, 502);
	}

	return json({ ok: true, message: SUCCESS_MESSAGES[type] });
}

export function GET() {
	return json({ ok: false, error: 'Method not allowed.' }, 405);
}
