import { site } from '../data/site';

export default function manifest() {
	return {
		name: `${site.name} - Gym & Fitness Studio in Mahabubnagar`,
		short_name: site.name,
		description: site.description,
		start_url: '/',
		display: 'standalone',
		background_color: '#01010F',
		theme_color: '#01010F',
		lang: 'en-IN',
		categories: ['fitness', 'health', 'sports'],
		icons: [
			{ src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
			{ src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
			{ src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
		],
	};
}
