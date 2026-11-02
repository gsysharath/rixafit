import { site } from '../data/site';
import { classes } from '../data/classes';
import { posts } from '../data/posts';
import { services } from '../data/services';
import { trainers } from '../data/trainers';

const staticRoutes = [
	['', 1.0, 'weekly'],
	['/about', 0.8, 'monthly'],
	['/classes', 0.9, 'weekly'],
	['/services', 0.9, 'monthly'],
	['/pricing', 0.9, 'monthly'],
	['/schedule', 0.8, 'weekly'],
	['/trainer', 0.7, 'monthly'],
	['/gallery', 0.6, 'monthly'],
	['/blog', 0.7, 'weekly'],
	['/bmi', 0.6, 'yearly'],
	['/contact', 0.8, 'yearly'],
	['/terms', 0.3, 'yearly'],
];

export default function sitemap() {
	const now = new Date();
	return [
		...staticRoutes.map(([path, priority, changeFrequency]) => ({ url: `${site.url}${path}`, lastModified: now, changeFrequency, priority })),
		...classes.map((c) => ({ url: `${site.url}/classes/${c.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 })),
		...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 })),
		...trainers.map((t) => ({ url: `${site.url}/trainer/${t.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 })),
		...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: new Date(`${p.date}T00:00:00Z`), changeFrequency: 'yearly', priority: 0.6 })),
	];
}
