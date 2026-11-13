'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LogoMark from './LogoMark';
import { site, whatsappLink } from '../data/site';

const quickLinks = [
	{ label: 'About Us', href: '/about' },
	{ label: 'Our Services', href: '/services' },
	{ label: 'Membership', href: '/pricing' },
	{ label: 'Contact Us', href: '/contact' },
	{ label: 'Terms & Conditions', href: '/terms' },
];
const socialLinks = [
	{ label: 'Instagram', href: site.instagram },
	{ label: 'WhatsApp', href: whatsappLink() },
];

function FooterColumnHeading({ children }) {
	return (
		<div className="flex items-center gap-[5px]">
			<div className="font-teko font-semibold text-[24px]">{children}</div>
			<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
			<div className="flex-1 border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
			<div className="flex-1 border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
			<div className="flex-1 border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
			<div className="flex-1 border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
		</div>
	);
}

function PlusLink({ href = '#', children }) {
	const external = href.startsWith('http');
	return (
		<div className="flex items-center gap-[10px]">
			<div className="text-[#E22C32]"><i className="fa fa-plus"></i></div>
			{external ? (
				<a className="hover:text-[#E22C32]" href={href} target="_blank" rel="noopener noreferrer">{children}</a>
			) : (
				<Link className="hover:text-[#E22C32]" href={href}>{children}</Link>
			)}
		</div>
	);
}

function usesPlainTopPad(pathname) {
	return pathname === '/' || pathname === '/about' || pathname === '/services' || pathname.startsWith('/services/');
}

export default function Footer() {
	const pathname = usePathname() || '/';
	const home = pathname === '/';
	const topPad = usesPlainTopPad(pathname) ? 'pt-[150px]' : 'xl:pt-[150px]';
	const isContact = pathname === '/contact';
	const year = new Date().getFullYear();

	return (
		<footer className={topPad}>
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="border-t-[1px] border-[#E22C32] border-opacity-50"></div>
				<div className="flex justify-between">
					<div className="py-[50px]">
						<FooterColumnHeading>LOCATION &amp; CONTACT</FooterColumnHeading>
						<div className="pt-[30px]"></div>
						<div className="flex gap-[10px]">
							<div className="w-[102px] shrink-0 text-[#E22C32] text-[20px] font-medium">Address:</div>
							<a className="hover:text-[#E22C32]" href={site.mapUrl} target="_blank" rel="noopener noreferrer">
								<div className="">{site.address.line1}</div>
								<div className="">{site.address.line2}</div>
							</a>
						</div>
						<div className="pt-[30px]"></div>
						<div className="flex gap-[10px]">
							<div className="w-[102px] shrink-0 text-[#E22C32] text-[20px] font-medium">Email:</div>
							<div className="">
								<a className="hover:text-[#E22C32] break-all" href={`mailto:${site.email}`}>{site.email}</a>
							</div>
						</div>
						<div className="pt-[30px]"></div>
						<div className="flex gap-[10px]">
							<div className="w-[102px] shrink-0 text-[#E22C32] text-[20px] font-medium">{isContact ? 'Phone:' : 'Timings:'}</div>
							<div className="">
								{isContact ? (
									<>
										<a className="block hover:text-[#E22C32]" href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
										<a className="block hover:text-[#E22C32]" href={`tel:${site.altPhone}`}>{site.altPhoneDisplay}</a>
									</>
								) : (
									<div className="">{site.hours.short}</div>
								)}
							</div>
						</div>
					</div>
					<div className="hidden xl:block border-l-[1px] border-[#E22C32] border-opacity-50"></div>
					<div className="hidden xl:block py-[50px]">
						<FooterColumnHeading>LINK</FooterColumnHeading>
						<div className="pt-[30px]"></div>
						<div className="flex flex-col gap-[22px]">
							{quickLinks.map((l) => <PlusLink key={l.href} href={l.href}>{l.label}</PlusLink>)}
						</div>
					</div>
					<div className="hidden xl:block border-l-[1px] border-[#E22C32] border-opacity-50"></div>
					<div className="hidden xl:block py-[50px]">
						<FooterColumnHeading>SOCIAL</FooterColumnHeading>
						<div className="pt-[30px]"></div>
						<div className="flex flex-col gap-[22px]">
							{socialLinks.map((l) => <PlusLink key={l.href} href={l.href}>{l.label}</PlusLink>)}
							<div className="flex items-center gap-[10px]">
								<div className="text-[#E22C32]"><i className="fa fa-plus"></i></div>
								<button type="button" data-app-download="" aria-haspopup="dialog" className="hover:text-[#E22C32]">Download App</button>
							</div>
						</div>
					</div>
					<div className="hidden md:block border-l-[1px] border-[#E22C32] border-opacity-50"></div>
					<div className="hidden md:block py-[50px]">
						<Link className="flex items-center gap-[5px]" href="/" aria-label={`${site.name} home`}>
							<LogoMark className="w-[52px] h-[53px] shrink-0" />
							<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
							<div className="flex-1 border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
							<div className="flex-1 border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
							<div className="flex-1 border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
							<div className="flex-1 border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
						</Link>
						<div className="pt-[30px]"></div>
						<div className="">
							<div className="">Mahabubnagar's premier fitness studio -</div>
							<div className="">modern equipment, expert trainers, and</div>
							<div className="">a community that moves you forward.</div>
						</div>
						<div className="pt-[30px]"></div>
						<a className="flex items-center gap-[10px]" href={`tel:${site.phone}`} aria-label={`Call ${site.phoneDisplay}`}>
							<div className="bg-[#971A1E] w-[40px] h-[40px] flex items-center justify-center rounded-full">
								<img className="" src="/images/home/phone.svg" alt="" />
							</div>
							<div className="flex-1 flex items-center gap-[5px]">
								<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="flex-1 border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="flex-1 border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="flex-1 border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="flex-1 border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
							</div>
							{home ? (
								<div className="font-teko text-[28px] font-semibold">
									<div data-scroll="[data-scroll-item]" className="">
										<div data-scroll-cog="" className="hidden">
											{JSON.stringify({ scrollTrigger: { trigger: "[data-scroll-item]" } })}
										</div>
										<div data-scroll-item="odometer" className="group">
											<div className="flex">
												<div className="">(</div>
												<div className="odometer" data-v="80966" data-format="d"></div>
												<div className="">)&nbsp;</div>
												<div className="odometer" data-v="69901" data-format="d"></div>
											</div>
										</div>
									</div>
								</div>
							) : (
								<div className="font-teko text-[28px] font-semibold">{site.phoneDisplay}</div>
							)}
						</a>
					</div>
				</div>
				<div className="border-t-[1px] border-[#E22C32] border-opacity-50"></div>
				{/* Extra bottom padding keeps this row clear of the floating WhatsApp button. */}
				<div className="pt-[50px] pb-[120px] md:pb-[130px] flex justify-between items-center gap-[20px]">
					<div className="">
						<button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-[10px] hover:text-[#E22C32]">
							<img className="rotate-90" src="/images/home/hero-prev.svg" alt="" />
							<span className="">TOP</span>
						</button>
					</div>
					<div className="flex flex-col md:flex-row items-center gap-[4px] md:gap-[12px] text-center">
						<span className="hidden md:inline" suppressHydrationWarning>&copy;{year} All Rights Reserved - {site.name}</span>
						<span className="hidden md:inline text-[#E22C32]" aria-hidden="true">|</span>
						<Link className="hover:text-[#E22C32] underline md:no-underline underline-offset-4" href="/terms">Terms &amp; Conditions</Link>
					</div>
					<a className="flex items-center gap-[10px] hover:text-[#E22C32]" href={whatsappLink(`Hi ${site.name}, I'd like to know more about your memberships.`)} target="_blank" rel="noopener noreferrer">
						<div className="">WhatsApp Us</div>
						<div className="">
							<img className="" src="/images/home/hero-arrow.svg" alt="" />
						</div>
					</a>
				</div>
			</div>
		</footer>
	);
}
