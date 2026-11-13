// Main navigation. An item with `href` is a direct link; an item with `links` opens a dropdown
// (desktop) or a sub-menu (mobile).
export const navItems = [
	{ key: 'about', label: 'ABOUT US', mobileLabel: 'ABOUT US', href: '/about' },
	{ key: 'services', label: 'SERVICES', mobileLabel: 'SERVICES', href: '/services' },
	{ key: 'membership', label: 'MEMBERSHIP', mobileLabel: 'MEMBERSHIP', href: '/pricing' },
	// Blog is switched off for now. To bring it back, rename app/_blog to app/blog,
	// restore the blog lines in app/sitemap.js and uncomment this item.
	// { key: 'blog', label: 'BLOG', mobileLabel: 'BLOG', href: '/blog' },
	{
		key: 'pages',
		label: 'MORE',
		mobileLabel: 'MORE',
		links: [
			{ label: 'BMI Calculator', mobileLabel: 'BMI CALCULATOR', href: '/bmi' },
			{ label: 'Gallery', mobileLabel: 'GALLERY', href: '/gallery' },
		],
	},
	{ key: 'trainer', label: 'TRAINERS', mobileLabel: 'TRAINERS', href: '/trainer' },
	{ key: 'contact', label: 'CONTACT', mobileLabel: 'CONTACT US', href: '/contact' },
];

// True when `pathname` is the page `href` or one of its sub-pages (e.g. /services/fitness-boxing
// counts as /services). Home only matches itself.
export function isActivePath(pathname, href) {
	if (!pathname || !href) return false;
	if (href === '/') return pathname === '/';
	return pathname === href || pathname.startsWith(href + '/');
}
