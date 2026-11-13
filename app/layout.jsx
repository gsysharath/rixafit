import { Oswald, Teko, Vazirmatn } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import GoogleAnalytics, { GoogleTagManagerNoScript } from '../components/GoogleAnalytics';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OffcanvasMenu from '../components/OffcanvasMenu';
import AppDownloadDialog from '../components/AppDownloadDialog';
import WhatsAppButton from '../components/WhatsAppButton';
import TemplateScripts from '../components/TemplateScripts';
import ScrollToTop from '../components/ScrollToTop';
import { site } from '../data/site';
import { priceRange } from '../data/plans';
import { DEFAULT_OG_IMAGE, LOCAL_KEYWORDS, jsonLdScript } from '../lib/seo';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/odometer-theme-minimal.css';
import 'tiny-slider/dist/tiny-slider.css';
import './globals.css';

const teko = Teko({ subsets: ['latin'], variable: '--font-teko', display: 'swap' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald', display: 'swap' });
const vazirmatn = Vazirmatn({ subsets: ['latin'], variable: '--font-vazirmatn', display: 'swap' });

// Optional search-console ownership tokens (Settings → Ownership verification → HTML tag).
const verification = {
	...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } : {}),
	...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? { other: { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } } : {}),
};

// Site-wide defaults; every page overrides title, description, canonical and social tags
// through pageMetadata() in lib/seo.js.
export const metadata = {
	metadataBase: new URL(site.url),
	title: {
		default: `${site.name} | Best Gym & Fitness Studio in Mahabubnagar`,
		template: `%s | ${site.name}`,
	},
	description: site.description,
	applicationName: site.name,
	authors: [{ name: site.name, url: site.url }],
	creator: site.name,
	publisher: site.name,
	category: 'fitness',
	keywords: LOCAL_KEYWORDS,
	openGraph: {
		type: 'website',
		locale: 'en_IN',
		siteName: site.name,
		title: `${site.name} | Best Gym & Fitness Studio in Mahabubnagar`,
		description: site.description,
		url: '/',
		images: [DEFAULT_OG_IMAGE],
	},
	twitter: {
		card: 'summary_large_image',
		title: `${site.name} | Best Gym & Fitness Studio in Mahabubnagar`,
		description: site.description,
		images: [DEFAULT_OG_IMAGE.url],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
	},
	formatDetection: { telephone: true, email: true, address: true },
	other: {
		'geo.region': 'IN-TG',
		'geo.placename': site.address.city,
	},
	...(Object.keys(verification).length ? { verification } : {}),
};

export const viewport = {
	width: 'device-width',
	initialScale: 1,
	themeColor: '#01010F',
};

// Local business data search engines use for "gym near me" style results and the map pack.
const localBusiness = {
	'@context': 'https://schema.org',
	'@type': ['HealthClub', 'ExerciseGym'],
	'@id': `${site.url}/#gym`,
	name: site.name,
	alternateName: site.legalName,
	slogan: site.tagline,
	description: site.description,
	url: site.url,
	telephone: site.phone,
	email: site.email,
	priceRange,
	currenciesAccepted: 'INR',
	image: [`${site.url}/images/og-image.jpg`, `${site.url}/gym/gym-floor-strength-zone.webp`, `${site.url}/gym/reception-desk-1.webp`],
	logo: `${site.url}/images/logo-full.png`,
	hasMap: site.mapUrl,
	geo: { '@type': 'GeoCoordinates', latitude: site.geo.latitude, longitude: site.geo.longitude },
	address: {
		'@type': 'PostalAddress',
		streetAddress: site.address.street,
		addressLocality: site.address.city,
		addressRegion: site.address.region,
		postalCode: site.address.postalCode,
		addressCountry: site.address.country,
	},
	areaServed: [
		{ '@type': 'City', name: 'Mahabubnagar' },
		{ '@type': 'AdministrativeArea', name: 'Telangana' },
	],
	contactPoint: [site.phone, site.altPhone].map((telephone) => ({
		'@type': 'ContactPoint',
		telephone,
		contactType: 'customer service',
		areaServed: 'IN',
	})),
	openingHoursSpecification: site.openingHours.map((h) => ({
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: h.days,
		opens: h.opens,
		closes: h.closes,
	})),
	sameAs: [site.instagram],
};

const website = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	'@id': `${site.url}/#website`,
	name: site.name,
	url: site.url,
	inLanguage: 'en-IN',
	publisher: { '@id': `${site.url}/#gym` },
};

export default function RootLayout({ children }) {
	return (
		// data-scroll-behavior lets Next.js switch smooth scrolling off while it changes pages.
		<html lang="en-IN" data-scroll-behavior="smooth" className={`scroll-smooth ${teko.variable} ${oswald.variable} ${vazirmatn.variable}`}>
			<body className="bg-[#01010F] text-[#E7E7E7] text-[18px] leading-[1.5] font-vazirmatn">
				<GoogleTagManagerNoScript />
				<a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-[10px] focus:left-[10px] focus:z-[100] focus:bg-[#971A1E] focus:text-white focus:px-[16px] focus:py-[8px]">
					Skip to content
				</a>
				<Header />
				<main id="main">{children}</main>
				<Footer />
				<WhatsAppButton />
				<OffcanvasMenu />
				<AppDownloadDialog />
				<ScrollToTop />
				<TemplateScripts />
				<Analytics />
				<GoogleAnalytics />
				<script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(localBusiness)} />
				<script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(website)} />
			</body>
		</html>
	);
}
