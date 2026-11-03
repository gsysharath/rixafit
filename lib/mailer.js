import nodemailer from 'nodemailer';
import { site, whatsappLink } from '../data/site';
import { displayName } from './enquiry';

let transporter;

export function isMailConfigured() {
	return Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);
}

function getTransporter() {
	if (transporter) return transporter;
	const port = Number(process.env.SMTP_PORT || 465);
	transporter = nodemailer.createTransport({
		// GoDaddy Professional Email (powered by Titan) - the server GoDaddy specifies for
		// websites; the domain's SPF record only authorises secureserver.net senders.
		host: process.env.SMTP_HOST || 'smtpout.secureserver.net',
		port,
		secure: port === 465,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
	});
	return transporter;
}

function escapeHtml(value) {
	return String(value)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

function formatValue(key, value) {
	if (key === 'day' && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
		return new Date(`${value}T00:00:00Z`).toLocaleDateString('en-IN', {
			weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
		});
	}
	return value;
}

function rows(form, data) {
	return Object.entries(form.fields)
		.filter(([key]) => data[key])
		.map(([key, rule]) => ({ label: rule.label, value: formatValue(key, data[key]) }));
}

function layout(title, bodyHtml) {
	return `<!doctype html>
<html><body style="margin:0;padding:0;background:#01010F;font-family:Arial,Helvetica,sans-serif;color:#E7E7E7;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#01010F;padding:24px 12px;">
<tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#0B0B1A;border:1px solid #971A1E;">
<tr><td style="background:#971A1E;padding:14px 24px;color:#FFFFFF;font-size:24px;font-weight:bold;letter-spacing:1px;">
<img src="${site.url}/images/logo-email.png" width="40" height="40" alt="" style="vertical-align:middle;margin-right:10px;border:0;">${escapeHtml(site.name)}
</td></tr>
<tr><td style="padding:24px;">
<h1 style="margin:0 0 16px;font-size:22px;color:#D4D4D4;text-transform:uppercase;">${escapeHtml(title)}</h1>
${bodyHtml}
</td></tr>
<tr><td style="padding:16px 24px;border-top:1px solid #333;font-size:12px;color:#9a9a9a;line-height:1.6;">
${escapeHtml(site.address.line1)}, ${escapeHtml(site.address.line2)}<br>
${escapeHtml(site.hours.weekdays.label)} ${escapeHtml(site.hours.weekdays.value)} &middot; ${escapeHtml(site.hours.sunday.label)} ${escapeHtml(site.hours.sunday.value)}<br>
<a href="tel:${site.phone}" style="color:#E22C32;">${escapeHtml(site.phoneDisplay)}</a> &middot;
<a href="tel:${site.altPhone}" style="color:#E22C32;">${escapeHtml(site.altPhoneDisplay)}</a> &middot;
<a href="mailto:${site.email}" style="color:#E22C32;">${escapeHtml(site.email)}</a> &middot;
<a href="${site.instagram}" style="color:#E22C32;">Instagram</a>
</td></tr>
</table>
</td></tr>
</table>
</body></html>`;
}

function table(items) {
	const body = items
		.map(
			(r) => `<tr>
<td style="padding:10px 12px;border-bottom:1px solid #2a2a3a;color:#E22C32;white-space:nowrap;vertical-align:top;width:150px;">${escapeHtml(r.label)}</td>
<td style="padding:10px 12px;border-bottom:1px solid #2a2a3a;color:#E7E7E7;white-space:pre-wrap;">${escapeHtml(r.value)}</td>
</tr>`
		)
		.join('');
	return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background:#01010F;">${body}</table>`;
}

function textTable(items) {
	return items.map((r) => `${r.label}: ${r.value}`).join('\n');
}

export async function sendEnquiryEmails({ type, form, data, meta }) {
	const items = rows(form, data);
	// Single-line name keeps subject headers clean.
	const name = displayName(data).replace(/\s+/g, ' ');
	const from = `"${process.env.MAIL_FROM_NAME || site.name}" <${process.env.SMTP_USER}>`;
	const to = process.env.MAIL_TO || site.email;

	const adminSubject = `[${site.name}] New ${form.title.toLowerCase()}${name ? ` - ${name}` : ''}`;
	const adminHtml = layout(
		`New ${form.title}`,
		`<p style="margin:0 0 16px;line-height:1.6;">A new <strong>${escapeHtml(form.title.toLowerCase())}</strong> was submitted on the website. Reply to this email to respond directly to the visitor.</p>
${table(items)}
<p style="margin:16px 0 0;font-size:12px;color:#9a9a9a;">Page: ${escapeHtml(meta.page || 'n/a')} &middot; Received: ${escapeHtml(meta.receivedAt)}</p>`
	);

	const replySubject = `${form.replySubject} - ${site.name}`;
	const greeting = name ? `Hi ${escapeHtml(name)},` : 'Hi there,';
	const replyHtml = layout(
		form.replySubject,
		`<p style="margin:0 0 12px;line-height:1.6;">${greeting}</p>
<p style="margin:0 0 20px;line-height:1.6;">${escapeHtml(form.replyIntro)}</p>
${type === 'newsletter' ? '' : `<p style="margin:0 0 8px;color:#D4D4D4;">Here is a copy of what you sent us:</p>${table(items)}`}
<p style="margin:24px 0 0;line-height:1.6;">Need a faster answer? Chat with us on
<a href="${whatsappLink()}" style="color:#E22C32;">WhatsApp</a> or call
<a href="tel:${site.phone}" style="color:#E22C32;">${escapeHtml(site.phoneDisplay)}</a>.</p>
<p style="margin:16px 0 0;line-height:1.6;">Stay strong,<br>Team ${escapeHtml(site.name)}</p>`
	);

	const mailer = getTransporter();

	// The notification to the gym must succeed; the auto-reply is best effort.
	await mailer.sendMail({
		from,
		to,
		replyTo: data.email,
		subject: adminSubject,
		html: adminHtml,
		text: `New ${form.title}\n\n${textTable(items)}\n\nPage: ${meta.page || 'n/a'}\nReceived: ${meta.receivedAt}`,
	});

	if (data.email) {
		try {
			await mailer.sendMail({
				from,
				to: data.email,
				replyTo: site.email,
				subject: replySubject,
				html: replyHtml,
				text: `${name ? `Hi ${name},` : 'Hi there,'}\n\n${form.replyIntro}\n\n${type === 'newsletter' ? '' : `${textTable(items)}\n\n`}WhatsApp: ${whatsappLink()}\nPhone: ${site.phoneDisplay}, ${site.altPhoneDisplay}\n\nTeam ${site.name}`,
			});
		} catch (error) {
			console.error('[enquiry] auto-reply failed:', error?.message || error);
		}
	}
}
