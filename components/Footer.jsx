'use client';

import { usePathname } from 'next/navigation';

const quickLinks = [
	{ label: 'About Us', href: '/about' },
	{ label: 'Our Services', href: '/services' },
	{ label: 'Pricing Table', href: '/pricing' },
	{ label: 'Contact Us', href: '/contact' },
	{ label: 'Terms & Conditions', href: '/terms' },
];
const socialLinks = [
	{ label: 'Instagram', href: 'https://www.instagram.com/rixafit_mahabubnagar/' },
	{ label: 'WhatsApp', href: 'https://wa.me/918096669901' },
];

function FooterColumnHeading({ children }) {
	return (
		<div className="flex items-center gap-[5px]">
			<div className="font-[Teko] font-semibold text-[24px]">{children}</div>
			<div className="flex-1 border-t-[10px] border-[#D5BDA2] border-opacity-50"></div>
			<div className="flex-1 border-t-[7px] border-[#D5BDA2] border-opacity-50"></div>
			<div className="flex-1 border-t-[4px] border-[#D5BDA2] border-opacity-50"></div>
			<div className="flex-1 border-t-[3px] border-[#D5BDA2] border-opacity-50"></div>
			<div className="flex-1 border-t-[1px] border-[#D5BDA2] border-opacity-50"></div>
		</div>
	);
}

function PlusLink({ href = '#', children }) {
	return (
		<div className="flex items-center gap-[10px]">
			<div className="text-[#F67A45]"><i className="fa fa-plus"></i></div>
			<a className="hover:text-[#F67A45]" href={href}>{children}</a>
		</div>
	);
}

const plainTopPadRoutes = new Set(['/', '/about', '/services', '/service-details']);

export default function Footer() {
	const pathname = usePathname();
	const home = pathname === '/';
	const topPad = plainTopPadRoutes.has(pathname) ? 'pt-[150px]' : 'xl:pt-[150px]';
	const thirdRowLabel = pathname === '/contact' ? 'Phone:' : 'Timings:';
	const thirdRowValue = pathname === '/contact' ? '+91 80966 69901' : 'Mon-Sat 5-10 AM & 5-10 PM';
	const dividerFix = pathname !== '/schedule';

	return (
		<div className={topPad}>
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="border-t-[1px] border-[#F67A45] border-opacity-50"></div>
				<div className="flex justify-between">
					<div className="py-[50px]">
						<FooterColumnHeading>LOCATION &amp; CONTACT</FooterColumnHeading>
						<div className="pt-[30px]"></div>
						<div className="flex gap-[10px]">
							<div className="w-[102px] text-[#F67A45] text-[20px] font-medium">Address:</div>
							<div className="">
								<div className="">3rd Floor, H No 8-6-237/c, Padmavathi Colony</div>
								<div className="">Mahabubnagar, Telangana 509001</div>
							</div>
						</div>
						<div className="pt-[30px]"></div>
						<div className="flex gap-[10px]">
							<div className="w-[102px] text-[#F67A45] text-[20px] font-medium">Email:</div>
							<div className="">
								<a className="hover:text-[#F67A45]" href="mailto:rixafit2024@gmail.com">rixafit2024@gmail.com</a>
							</div>
						</div>
						<div className="pt-[30px]"></div>
						<div className="flex gap-[10px]">
							<div className="w-[102px] text-[#F67A45] text-[20px] font-medium">{thirdRowLabel}</div>
							<div className="">
								<div className="">{thirdRowValue}</div>
							</div>
						</div>
					</div>
					<div className={dividerFix ? 'hidden xl:block border-l-[1px] border-[#F67A45] border-opacity-50' : 'hidden xl:blockborder-l-[1px] border-[#F67A45] border-opacity-50'}></div>
					<div className="hidden xl:block py-[50px]">
						<FooterColumnHeading>LINK</FooterColumnHeading>
						<div className="pt-[30px]"></div>
						<div className="flex flex-col gap-[22px]">
							{quickLinks.map((l) => <PlusLink key={l.href} href={l.href}>{l.label}</PlusLink>)}
						</div>
					</div>
					<div className="hidden xl:block border-l-[1px] border-[#F67A45] border-opacity-50"></div>
					<div className="hidden xl:block py-[50px]">
						<FooterColumnHeading>SOCIAL</FooterColumnHeading>
						<div className="pt-[30px]"></div>
						<div className="flex flex-col gap-[22px]">
							{socialLinks.map((l) => <PlusLink key={l.href} href={l.href}>{l.label}</PlusLink>)}
						</div>
					</div>
					<div className="hidden md:block border-l-[1px] border-[#F67A45] border-opacity-50"></div>
					<div className="hidden md:block py-[50px]">
						<a className="flex items-center gap-[5px]" href="/">
							<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/logo.svg" alt="" />
							<div className="flex-1 border-t-[10px] border-[#D5BDA2] border-opacity-50"></div>
							<div className="flex-1 border-t-[7px] border-[#D5BDA2] border-opacity-50"></div>
							<div className="flex-1 border-t-[4px] border-[#D5BDA2] border-opacity-50"></div>
							<div className="flex-1 border-t-[3px] border-[#D5BDA2] border-opacity-50"></div>
							<div className="flex-1 border-t-[1px] border-[#D5BDA2] border-opacity-50"></div>
							<div className="font-[Teko] text-[28px] font-semibold">RIXA FIT</div>
						</a>
						<div className="pt-[30px]"></div>
						<div className="">
							<div className="">Mahabubnagar's premier fitness studio -</div>
							<div className="">modern equipment, expert trainers, and</div>
							<div className="">a community that moves you forward.</div>
						</div>
						<div className="pt-[30px]"></div>
						<div className="flex items-center gap-[10px]">
							<div className="bg-[#F67A45] w-[40px] h-[40px] flex items-center justify-center rounded-full">
								<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/phone.svg" alt="" />
							</div>
							<div className="flex-1 flex items-center gap-[5px]">
								<div className="flex-1 border-t-[10px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="flex-1 border-t-[7px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="flex-1 border-t-[4px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="flex-1 border-t-[3px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="flex-1 border-t-[1px] border-[#D5BDA2] border-opacity-50"></div>
							</div>
							{home ? (
								<div className="font-[Teko] text-[28px] font-semibold">
									<div data-scroll="[data-scroll-item]" className="">
										<div data-scroll-cog="" className="hidden">
											{JSON.stringify({ scrollTrigger: { trigger: "[data-scroll-item]" } })}
										</div>
										<div data-scroll-item="odometer" className="group">
											<div className="flex">
												<div className="">(</div>
												<div className="odometer" data-v="80966"></div>
												<div className="">)&nbsp;</div>
												<div className="odometer" data-v="69901"></div>
											</div>
										</div>
									</div>
								</div>
							) : (
								<div className="font-[Teko] text-[28px] font-semibold">+91 80966 69901</div>
							)}
						</div>
					</div>
				</div>
				<div className="border-t-[1px] border-[#F67A45] border-opacity-50"></div>
				<div className="py-[50px] flex justify-between items-center">
					<div className="">
						<a className="flex items-center gap-[10px] hover:text-[#F67A45]" href="#">
							<img className={home ? 'rotate-90 invert' : 'rotate-90'} src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-prev.svg" alt="" />
							<div className="">TOP</div>
						</a>
					</div>
					<div className="hidden md:block">&copy;2024 All Rights Reserved - RIXA FIT</div>
					<a className="flex items-center gap-[10px] hover:text-[#F67A45]" href="#">
						<div className="">Languages</div>
						<div className="">
							<img className={home ? 'invert' : ''} src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt="" />
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}
