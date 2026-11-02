import { site } from '../data/site';

// Local-search phrases people use to find a gym in the area. Search engines rely mostly
// on titles, descriptions, headings and structured data; keywords are a light extra hint.
export const LOCAL_KEYWORDS = [
	'gym in Mahabubnagar',
	'best gym in Mahabubnagar',
	'fitness centre Mahabubnagar',
	'gym near me',
	'gym Padmavathi Colony',
	'fitness studio Telangana',
	'RIXA FIT',
];

export const DEFAULT_OG_IMAGE = {
	url: '/images/og-image.jpg',
	width: 1200,
	height: 630,
	alt: `${site.name} - Gym & Fitness Studio in Mahabubnagar`,
};

// Search results show roughly 60 characters of a title and 155-160 of a description.
const MAX_TITLE = 65;
const MAX_DESCRIPTION = 160;

function clip(text, max) {
	if (text.length <= max) return text;
	const cut = text.slice(0, max - 1);
	return `${cut.slice(0, cut.lastIndexOf(' ')).replace(/[\s,.;:-]+$/, '')}…`;
}

// Builds complete, consistent metadata for a page: <title>, description, canonical URL,
// Open Graph (WhatsApp / Facebook / LinkedIn previews) and Twitter card.
// The "| RIXA FIT" suffix is dropped when it would push a long title past MAX_TITLE.
export function pageMetadata({ title, description: rawDescription, path, keywords = [], type = 'website', publishedTime, absoluteTitle = false, noindex = false }) {
	const suffixed = `${title} | ${site.name}`;
	const useAbsolute = absoluteTitle || suffixed.length > MAX_TITLE;
	const fullTitle = useAbsolute ? title : suffixed;
	const description = clip(rawDescription, MAX_DESCRIPTION);
	return {
		title: useAbsolute ? { absolute: title } : title,
		description,
		keywords: [...keywords, ...LOCAL_KEYWORDS],
		alternates: { canonical: path },
		openGraph: {
			type,
			url: path,
			siteName: site.name,
			locale: 'en_IN',
			title: fullTitle,
			description,
			images: [DEFAULT_OG_IMAGE],
			...(publishedTime ? { publishedTime } : {}),
		},
		twitter: {
			card: 'summary_large_image',
			title: fullTitle,
			description,
			images: [DEFAULT_OG_IMAGE.url],
		},
		...(noindex ? { robots: { index: false, follow: true } } : {}),
	};
}

// BreadcrumbList structured data so search results can show the page trail.
export function breadcrumbJsonLd(crumbs) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [{ label: 'Home', href: '/' }, ...crumbs].map((c, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: c.label,
			...(c.href ? { item: `${site.url}${c.href === '/' ? '' : c.href}` } : {}),
		})),
	};
}

export function jsonLdScript(data) {
	return { __html: JSON.stringify(data).replace(/</g, '\\u003c') };
}

// Service structured data for a class or service page, linked to the gym entity.
export function serviceJsonLd({ name, description, path, serviceType }) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name,
		description,
		serviceType,
		url: `${site.url}${path}`,
		provider: { '@id': `${site.url}/#gym` },
		areaServed: { '@type': 'City', name: 'Mahabubnagar' },
	};
}
