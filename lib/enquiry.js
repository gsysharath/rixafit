// Shared definitions for every website form: which fields each form accepts,
// how they are validated, and how they are labelled in emails.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[0-9][0-9\s-]{8,16}$/;

const text = (max, { required = true, min = 1 } = {}) => ({ kind: 'text', max, min, required });
const email = ({ required = true } = {}) => ({ kind: 'email', max: 254, required });
const phone = ({ required = true } = {}) => ({ kind: 'phone', max: 20, required });

export const FORMS = {
	contact: {
		title: 'Contact enquiry',
		replySubject: 'We received your message',
		replyIntro: 'Thanks for reaching out to RIXA FIT. Our team will get back to you within 24 hours.',
		// Only name and phone are required, so the form is quick to send from a phone.
		fields: {
			name: { label: 'Name', ...text(80, { min: 2 }) },
			phone: { label: 'Phone', ...phone() },
			email: { label: 'Email', ...email({ required: false }) },
			interest: { label: 'Interested in', ...text(80, { required: false }) },
			callTime: { label: 'Best time to call', ...text(40, { required: false }) },
			message: { label: 'Message', ...text(2000, { required: false, min: 2 }) },
			plan: { label: 'Interested plan', ...text(80, { required: false }) },
		},
	},
	newsletter: {
		title: 'Newsletter subscription',
		replySubject: 'You are subscribed to the RIXA FIT newsletter',
		replyIntro: 'Welcome to the RIXA FIT community! You will now receive our latest workout tips, offers and class updates.',
		fields: {
			email: { label: 'Email', ...email() },
		},
	},
	comment: {
		title: 'Blog comment',
		replySubject: 'Thanks for your comment',
		replyIntro: 'Thanks for joining the conversation on the RIXA FIT blog. Your comment has been received and will appear after a quick review by our team.',
		fields: {
			firstName: { label: 'First name', ...text(60) },
			lastName: { label: 'Last name', ...text(60) },
			phone: { label: 'Phone', ...phone() },
			email: { label: 'Email', ...email() },
			comment: { label: 'Comment', ...text(2000, { min: 2 }) },
			post: { label: 'Blog post', ...text(200, { required: false }) },
		},
	},
};

function clean(value) {
	if (typeof value !== 'string') return '';
	// Collapse control characters (except newlines/tabs) and trim.
	return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim();
}

export function validateEnquiry(type, input) {
	const form = FORMS[type];
	if (!form) return { ok: false, error: 'Unknown form.' };

	const data = {};
	const fieldErrors = {};

	for (const [key, rule] of Object.entries(form.fields)) {
		const value = clean(input?.[key]);
		if (!value) {
			if (rule.required) fieldErrors[key] = `${rule.label} is required.`;
			continue;
		}
		if (value.length > rule.max) {
			fieldErrors[key] = `${rule.label} must be at most ${rule.max} characters.`;
			continue;
		}
		if (rule.kind === 'text' && value.length < rule.min) {
			fieldErrors[key] = `${rule.label} is too short.`;
			continue;
		}
		if (rule.kind === 'email' && !EMAIL_RE.test(value)) {
			fieldErrors[key] = 'Enter a valid email address.';
			continue;
		}
		if (rule.kind === 'phone' && !PHONE_RE.test(value)) {
			fieldErrors[key] = 'Enter a valid phone number.';
			continue;
		}
		if (rule.kind === 'date') {
			const parsed = /^\d{4}-\d{2}-\d{2}$/.test(value) ? new Date(`${value}T00:00:00Z`) : null;
			if (!parsed || Number.isNaN(parsed.getTime())) {
				fieldErrors[key] = 'Choose a valid date.';
				continue;
			}
			const today = new Date();
			today.setUTCHours(0, 0, 0, 0);
			// Allow "today" across time zones by tolerating one day in the past.
			if (parsed.getTime() < today.getTime() - 86400000) {
				fieldErrors[key] = 'Choose today or a future date.';
				continue;
			}
		}
		data[key] = value;
	}

	if (Object.keys(fieldErrors).length) {
		return { ok: false, error: 'Please check the highlighted fields.', fieldErrors };
	}
	return { ok: true, data, form };
}

export function displayName(data) {
	if (data.name) return data.name;
	if (data.firstName) return [data.firstName, data.lastName].filter(Boolean).join(' ');
	return '';
}
