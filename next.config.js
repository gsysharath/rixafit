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
	['/classes.html', '/classes'],
	['/class-details', '/classes/kickboxing'],
	['/class-details.html', '/classes/kickboxing'],
	['/contact.html', '/contact'],
	['/gallery.html', '/gallery'],
	['/pricing.html', '/pricing'],
	['/schedule.html', '/schedule'],
	['/services.html', '/services'],
	['/service-details', '/services/personal-training'],
	['/service-details.html', '/services/personal-training'],
	['/trainer.html', '/trainer'],
	['/trainer-details', '/trainer/john-wick-c'],
	['/trainer-details.html', '/trainer/john-wick-c'],
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
				source: '/:dir(images|gym)/:path*',
				headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' }],
			},
		];
	},
	async redirects() {
		return legacyRedirects.map(([source, destination]) => ({ source, destination, permanent: true }));
	},
};

module.exports = nextConfig;
