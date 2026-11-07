// Main navigation. An item with `href` is a direct link; an item with `links` opens a dropdown
// (desktop) or a sub-menu (mobile).
export const navItems = [
	{ key: 'classes', label: 'CLASSES', mobileLabel: 'CLASSES', href: '/classes' },
	{ key: 'services', label: 'SERVICES', mobileLabel: 'SERVICES', href: '/services' },
	{ key: 'membership', label: 'MEMBERSHIP', mobileLabel: 'MEMBERSHIP', href: '/pricing' },
	// Blog is switched off for now. To bring it back, rename app/_blog to app/blog,
	// restore the blog lines in app/sitemap.js and uncomment this item.
	// { key: 'blog', label: 'BLOG', mobileLabel: 'BLOG', href: '/blog' },
	{
		key: 'pages',
		label: 'PAGES',
		mobileLabel: 'PAGES',
		links: [
			{ label: 'About Us', mobileLabel: 'ABOUT US', href: '/about' },
			{ label: 'BMI Calculator', mobileLabel: 'BMI CALCULATOR', href: '/bmi' },
			{ label: 'Schedule', mobileLabel: 'SCHEDULE', href: '/schedule' },
			{ label: 'Gallery', mobileLabel: 'GALLERY', href: '/gallery' },
			{ label: 'Contact Us', mobileLabel: 'CONTACT US', href: '/contact' },
			{ label: 'Terms & Conditions', mobileLabel: 'TERMS & CONDITIONS', href: '/terms' },
		],
	},
	{ key: 'trainer', label: 'TRAINERS', mobileLabel: 'TRAINERS', href: '/trainer' },
];
