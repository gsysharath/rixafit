import Script from 'next/script';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OffcanvasMenu from '../components/OffcanvasMenu';
import TemplateScripts from '../components/TemplateScripts';
import './globals.css';

export const metadata = {
	title: 'RIXA FIT',
	description: "RIXA Fit - Mahabubnagar's premier fitness studio. Moves You.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="scroll-smooth">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Teko:wght@300..700&family=Vazirmatn:wght@100..900&display=swap" rel="stylesheet" />
				<link rel="stylesheet" href="https://ajax.cdnjs.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
				<link rel="stylesheet" href="https://ajax.cdnjs.com/ajax/libs/odometer.js/0.4.8/themes/odometer-theme-minimal.min.css" />
				<link rel="stylesheet" href="https://ajax.cdnjs.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.min.css" />
			</head>
			<body className="text-[18px] leading-[1.5] font-[Vazirmatn]">
				<Header />
				{children}
				<Footer />
				<OffcanvasMenu />
				<TemplateScripts />
				<Script src="https://ajax.cdnjs.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="beforeInteractive" />
				<Script src="https://ajax.cdnjs.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" strategy="beforeInteractive" />
				<Script src="https://ajax.cdnjs.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js" strategy="beforeInteractive" />
				<Script src="https://ajax.cdnjs.com/ajax/libs/odometer.js/0.4.8/odometer.min.js" strategy="beforeInteractive" />
			</body>
		</html>
	);
}
