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
	email: 'info@rixafit.com',
	phone: '+918096669901',
	phoneDisplay: '+91 80966 69901',
	altPhone: '+919052507670',
	altPhoneDisplay: '+91 90525 07670',
	whatsapp: '918019980205',
	whatsappDisplay: '+91 80199 80205',
	instagram: 'https://www.instagram.com/rixafit_mahabubnagar/',
	// Google Tag Manager container (manage tags at tagmanager.google.com). Loads only on the live
	// domain, so local testing and Vercel preview links don't send visits to analytics.
	gtmId: 'GTM-5WN3TZ8T',
	liveHosts: ['rixafit.com', 'www.rixafit.com'],
	// Every "Join Now" button opens this online enquiry form.
	joinUrl: 'https://www.yourdigitallift.com/external-tab-customer-enquiry-form/NDQ3MQ--/',
	// Member app. "Download App" buttons ask the visitor which phone they use, then open the matching store.
	app: {
		ios: 'https://apps.apple.com/in/app/rixa-fit/id6717586654',
		android: 'https://play.google.com/store/apps/details?id=com.ydl.rixafitapp',
	},
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
		weekdays: { label: 'Monday to Saturday:', value: '5-11 AM & 5-10 PM' },
		sunday: { label: 'Sunday:', value: '5:00 AM - 11:00 AM' },
		short: 'Mon-Sat 5-11 AM & 5-10 PM, Sun 5-11 AM',
	},
	// Machine-readable opening hours for search engines (schema.org format).
	// The full timetable (home page, #schedule) lives in data/schedule.js - keep the two in sync.
	openingHours: [
		{ days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '05:00', closes: '11:00' },
		{ days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '17:00', closes: '22:00' },
		{ days: ['Sunday'], opens: '05:00', closes: '11:00' },
	],
	mapEmbedUrl: 'https://www.google.com/maps?q=RIXA+FIT+Mahabubnagar&output=embed',
	// The RIXA FIT Google Business listing (address links and the "Read our Google reviews" button).
	mapUrl: 'https://www.google.com/maps/place/RIXA+FIT/@16.7530687,78.016798,17z/data=!3m1!4b1!4m6!3m5!1s0x3bca290078267b61:0xd49659a221c3c919!8m2!3d16.7530687!4d78.016798!16s%2Fg%2F11w9b8gqnj',
	geo: { latitude: 16.7530687, longitude: 78.016798 },
	// Opens turn-by-turn directions to the gym in Google Maps (the app on phones).
	directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=RIXA+FIT%2C+Padmavathi+Colony%2C+Mahabubnagar',
	// Optional: paste a YouTube/Instagram video URL to make the play buttons open it.
	// When empty, play buttons open the Instagram profile instead.
	videoUrl: '',
};

export function whatsappLink(message) {
	const base = `https://wa.me/${site.whatsapp}`;
	return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const videoLink = site.videoUrl || site.instagram;
