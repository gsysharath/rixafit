/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const csp = [
	"default-src 'self'",
	// Next.js injects small inline bootstrap scripts; dev mode also needs eval for fast refresh
	// and loads Vercel Analytics' debug script (production serves it from /_vercel/insights).
	`script-src 'self' 'unsafe-inline'${isProd ? '' : " 'unsafe-eval' https://va.vercel-scripts.com"}`,
	"style-src 'self' 'unsafe-inline'",
	"img-src 'self' data: blob:",
	"font-src 'self' data:",
	"connect-src 'self'",
	'frame-src https://www.google.com https://maps.google.com',
	"frame-ancestors 'self'",
	"base-uri 'self'",
	"form-action 'self'",
	"object-src 'none'",
].join('; ');

const securityHeaders = [
	{ key: 'Content-Security-Policy', value: csp },
	{ key: 'X-Content-Type-Options', value: 'nosniff' },
	{ key: 'X-Frame-Options', value: 'SAMEORIGIN' },
	{ key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
	{ key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
	{ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
];

// Old template URLs (including the original .html pages) keep working after launch.
const legacyRedirects = [
	['/index.html', '/'],
	['/about.html', '/about'],
	['/blog.html', '/blog'],
	['/blog-details', '/blog/expert-tips-for-maximizing-your-fitness'],
	['/blog-details.html', '/blog/expert-tips-for-maximizing-your-fitness'],
	['/bmi.html', '/bmi'],
	['/classes.html', '/services'],
	['/class-details', '/services/fitness-boxing'],
	['/class-details.html', '/services/fitness-boxing'],
	['/contact.html', '/contact'],
	['/gallery.html', '/gallery'],
	['/pricing.html', '/pricing'],
	// The Schedule page was removed; the timetable lives on the home page.
	['/schedule.html', '/#schedule'],
	['/schedule', '/#schedule'],
	['/services.html', '/services'],
	['/service-details', '/services/personal-training'],
	['/service-details.html', '/services/personal-training'],
	['/trainer.html', '/trainer'],
	['/trainer-details', '/trainer'],
	['/trainer-details.html', '/trainer'],
	// Template services replaced by RIXA FIT's real services (data/services.js).
	['/services/fitness-classes', '/services/group-fitness-cardio'],
	// The template's Classes section was removed; its pages point to the closest real service.
	['/classes', '/services'],
	['/classes/kickboxing', '/services/fitness-boxing'],
	['/classes/body-pump', '/services/strength-conditioning'],
	['/classes/hiit-havoc', '/services/functional-circuit-training'],
	['/classes/muscle', '/services/weight-gain-muscle-development'],
	['/classes/muscular', '/services/weight-gain-muscle-development'],
	['/classes/cardio', '/services/group-fitness-cardio'],
	['/classes/:slug', '/services'],
	// Service photos moved into /images/services/activity/; pages saved before that still work.
	['/images/services/:file((?!activity)[a-z-]+\\.webp)', '/images/services/activity/:file'],
	['/services/strength-training', '/services/strength-conditioning'],
	['/services/calisthenics-challenge', '/services'],
];

const nextConfig = {
	poweredByHeader: false,
	reactStrictMode: true,
	turbopack: {
		root: __dirname,
	},
	async headers() {
		return [
			{ source: '/:path*', headers: securityHeaders },
			{
				// One day, so a photo replaced under the same file name reaches every visitor within a day.
				source: '/:dir(images|gym|videos)/:path*',
				headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }],
			},
		];
	},
	async redirects() {
		return legacyRedirects.map(([source, destination]) => ({ source, destination, permanent: true }));
	},
};

module.exports = nextConfig;
