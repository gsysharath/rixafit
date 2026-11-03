// Central business details for RIXA FIT. Update values here and every page,
// the footer, contact page, SEO metadata and enquiry emails pick them up.

// The live domain. Production builds (including Vercel previews) always point canonical
// URLs, the sitemap and social tags here; NEXT_PUBLIC_SITE_URL can override it.
const PRODUCTION_URL = 'https://rixafit.com';

function resolveSiteUrl() {
	if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '');
	return process.env.NODE_ENV === 'production' ? PRODUCTION_URL : 'http://localhost:3000';
}

export const site = {
	name: 'RIXA FIT',
	legalName: 'RIXA Fit',
	tagline: 'Moves You.',
	description:
		"RIXA Fit is Mahabubnagar's premier fitness studio - modern equipment, expert trainers, group classes and personal training for every fitness level.",
	url: resolveSiteUrl(),
	email: 'rixafit2024@gmail.com',
	phone: '+918096669901',
	phoneDisplay: '+91 80966 69901',
	altPhone: '+919052507670',
	altPhoneDisplay: '+91 90525 07670',
	whatsapp: '918096669901',
	instagram: 'https://www.instagram.com/rixafit_mahabubnagar/',
	instagramHandle: '@rixafit_mahabubnagar',
	address: {
		line1: '3rd Floor, H No 8-6-237/c, Padmavathi Colony',
		line2: 'Mahabubnagar, Telangana 509001',
		street: '3rd Floor, H No 8-6-237/c, Padmavathi Colony',
		city: 'Mahabubnagar',
		region: 'Telangana',
		postalCode: '509001',
		country: 'IN',
	},
	hours: {
		weekdays: { label: 'Monday to Saturday:', value: '5-10 AM & 5-10 PM' },
		sunday: { label: 'Sunday:', value: '5:00 AM - 10:00 AM' },
		short: 'Mon-Sat 5-10 AM & 5-10 PM',
	},
	// Machine-readable opening hours for search engines (schema.org format).
	openingHours: [
		{ days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '05:00', closes: '10:00' },
		{ days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '17:00', closes: '22:00' },
		{ days: ['Sunday'], opens: '05:00', closes: '10:00' },
	],
	mapEmbedUrl: 'https://www.google.com/maps?q=RIXA+FIT+Mahabubnagar&output=embed',
	mapUrl: 'https://www.google.com/maps/search/?api=1&query=RIXA+FIT+Mahabubnagar',
	// Optional: paste a YouTube/Instagram video URL to make the play buttons open it.
	// When empty, play buttons open the Instagram profile instead.
	videoUrl: '',
};

export function whatsappLink(message) {
	const base = `https://wa.me/${site.whatsapp}`;
	return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const videoLink = site.videoUrl || site.instagram;
