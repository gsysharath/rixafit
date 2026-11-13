import { site } from '../data/site';
// Blog is switched off for now (see components/navData.js) - restore with the blog lines below.
// import { posts } from '../data/posts';
import { services } from '../data/services';
import { trainers } from '../data/trainers';

const staticRoutes = [
	['', 1.0, 'weekly'],
	['/about', 0.8, 'monthly'],
	['/services', 0.9, 'monthly'],
	['/pricing', 0.9, 'monthly'],
	['/trainer', 0.7, 'monthly'],
	['/gallery', 0.6, 'monthly'],
	// ['/blog', 0.7, 'weekly'],
	['/bmi', 0.6, 'yearly'],
	['/contact', 0.8, 'yearly'],
	['/terms', 0.3, 'yearly'],
];

export default function sitemap() {
	const now = new Date();
	return [
		...staticRoutes.map(([path, priority, changeFrequency]) => ({ url: `${site.url}${path}`, lastModified: now, changeFrequency, priority })),
		...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 })),
		...trainers.map((t) => ({ url: `${site.url}/trainer/${t.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 })),
		// ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: new Date(`${p.date}T00:00:00Z`), changeFrequency: 'yearly', priority: 0.6 })),
	];
}
