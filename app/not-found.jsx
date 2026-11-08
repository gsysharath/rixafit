import Link from 'next/link';
import PageBanner from '../components/PageBanner';

export const metadata = {
	title: 'Page Not Found',
	robots: { index: false, follow: true },
};

const links = [
	{ label: 'Home', href: '/' },
	{ label: 'Classes', href: '/classes' },
	{ label: 'Membership', href: '/pricing' },
	{ label: 'Contact Us', href: '/contact' },
];

export default function NotFound() {
	return (
		<div className="bg-[#01010F] text-[#E7E7E7]">
			<PageBanner title="404" gradient={true} crumbs={[{ label: 'Page not found' }]} />
			<div className="pb-[150px]">
				<div className="max-w-[1320px] mx-auto px-[15px] text-center">
					<div className="font-teko font-semibold text-[40px] md:text-[60px] uppercase leading-[1]">This page skipped leg day</div>
					<div className="pt-[20px]">The page you are looking for doesn&apos;t exist or has been moved.</div>
					<div className="pt-[50px] flex flex-wrap justify-center gap-[20px]">
						{links.map((l) => (
							<Link key={l.href} className="font-teko text-[22px] uppercase border-[1px] border-[#E22C32] px-[25px] py-[8px] hover:bg-[#971A1E] hover:text-white transition-colors duration-[.3s]" href={l.href}>
								{l.label}
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
