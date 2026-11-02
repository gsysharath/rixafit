import { Oswald, Teko, Vazirmatn } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OffcanvasMenu from '../components/OffcanvasMenu';
import TemplateScripts from '../components/TemplateScripts';
import { site } from '../data/site';
import { priceRange } from '../data/plans';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/odometer-theme-minimal.css';
import 'tiny-slider/dist/tiny-slider.css';
import './globals.css';

const teko = Teko({ subsets: ['latin'], variable: '--font-teko', display: 'swap' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald', display: 'swap' });
const vazirmatn = Vazirmatn({ subsets: ['latin'], variable: '--font-vazirmatn', display: 'swap' });

export const metadata = {
	metadataBase: new URL(site.url),
	title: {
		default: `${site.name} | Best Gym & Fitness Studio in Mahabubnagar`,
		template: `%s | ${site.name}`,
	},
	description: site.description,
	applicationName: site.name,
	keywords: ['gym in Mahabubnagar', 'fitness studio', 'personal training', 'kickboxing', 'HIIT', 'strength training', 'RIXA FIT'],
	alternates: { canonical: '/' },
	openGraph: {
		type: 'website',
		locale: 'en_IN',
		siteName: site.name,
		title: `${site.name} - ${site.tagline}`,
		description: site.description,
		url: '/',
		images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: `${site.name} - ${site.tagline}` }],
	},
	twitter: {
		card: 'summary_large_image',
		title: `${site.name} - ${site.tagline}`,
		description: site.description,
		images: ['/images/og-image.jpg'],
	},
	robots: { index: true, follow: true },
	formatDetection: { telephone: true, email: true, address: true },
};

export const viewport = {
	width: 'device-width',
	initialScale: 1,
	themeColor: '#01010F',
};

const localBusiness = {
	'@context': 'https://schema.org',
	'@type': 'HealthClub',
	name: site.name,
	description: site.description,
	url: site.url,
	telephone: site.phone,
	priceRange,
	email: site.email,
	image: `${site.url}/images/og-image.jpg`,
	logo: `${site.url}/images/logo-full.png`,
	address: {
		'@type': 'PostalAddress',
		streetAddress: site.address.street,
		addressLocality: site.address.city,
		addressRegion: site.address.region,
		postalCode: site.address.postalCode,
		addressCountry: site.address.country,
	},
	openingHoursSpecification: site.openingHours.map((h) => ({
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: h.days,
		opens: h.opens,
		closes: h.closes,
	})),
	sameAs: [site.instagram],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`scroll-smooth ${teko.variable} ${oswald.variable} ${vazirmatn.variable}`}>
			<body className="bg-[#01010F] text-[#E7E7E7] text-[18px] leading-[1.5] font-vazirmatn">
				<a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-[10px] focus:left-[10px] focus:z-[100] focus:bg-[#971A1E] focus:text-white focus:px-[16px] focus:py-[8px]">
					Skip to content
				</a>
				<Header />
				<main id="main">{children}</main>
				<Footer />
				<OffcanvasMenu />
				<TemplateScripts />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, '\\u003c') }}
				/>
			</body>
		</html>
	);
}
