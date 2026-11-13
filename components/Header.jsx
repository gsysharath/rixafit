'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { isActivePath, navItems } from './navData';
import LogoFull from './LogoFull';
import { site } from '../data/site';

function NavSwipeBg() {
	return (
		<>
			<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.06s] delay-0 transition-all duration-[.3s]"></div>
			<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.04s] delay-[.02s] transition-all duration-[.3s]"></div>
			<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.02s] delay-[.04s] transition-all duration-[.3s]"></div>
			<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-10 border-r-[1px] border-[#E22C32] border-opacity-40 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.06s] transition-all duration-[.3s]"></div>
		</>
	);
}

function NavLabel({ label, active }) {
	return (
		<div className="relative">
			<div className="absolute top-0 right-0 bottom-0 left-0 group-hover:text-[#E22C32] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.06s] transition-all duration-[.3s]">{label}</div>
			<div className={`${active ? 'text-[#E22C32]' : ''} group-hover:scale-y-0 group-hover:delay-0 delay-[.06s] transition-all duration-[.3s]`}>{label}</div>
		</div>
	);
}

// Red bar along the bottom of the current page's menu item.
function ActiveBar({ active }) {
	return active ? <span className="absolute left-[20px] right-[20px] bottom-[18px] h-[3px] bg-[#E22C32]" aria-hidden="true"></span> : null;
}

function NavHomeLink({ href, label, active }) {
	return (
		<Link href={href} aria-current={active ? 'page' : undefined} className="relative h-[90px] flex items-center gap-[5px] px-[20px]">
			<NavLabel label={label} active={active} />
			<ActiveBar active={active} />
		</Link>
	);
}

function NavTrigger({ label, active }) {
	return (
		<div className="relative h-[90px] flex items-center gap-[5px] px-[20px]">
			<NavLabel label={label} active={active} />
			<div className={`text-[12px] ${active ? 'text-[#E22C32]' : ''}`}><i className="fa fa-angle-down"></i></div>
			<ActiveBar active={active} />
		</div>
	);
}

function DropdownLink({ href, label, index, active }) {
	const originClass = index % 2 === 0 ? 'origin-top' : 'origin-bottom';
	return (
		<Link className="" href={href} aria-current={active ? 'page' : undefined}>
			<div className={`group/c relative ${active ? 'text-[#E22C32] border-l-[3px] border-[#E22C32]' : ''}`}>
				<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.06s] delay-0 transition-all duration-[.3s]"></div>
				<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.04s] delay-[.02s] transition-all duration-[.3s]"></div>
				<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.02s] delay-[.04s] transition-all duration-[.3s]"></div>
				<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-10 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.06s] transition-all duration-[.3s]"></div>
				<div className="relative py-[15px] px-[20px]">
					<div className="relative">
						<div className="absolute top-0 right-0 bottom-0 left-0 group-hover/c:text-[#E22C32] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.06s] transition-all duration-[.3s]">{label}</div>
						<div className={`${originClass} group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-[.06s] transition-all duration-[.3s]`}>{label}</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

function NavLink({ href, label, active }) {
	return (
		<div className="group relative">
			<div className="relative">
				<NavSwipeBg />
				<NavHomeLink href={href} label={label} active={active} />
			</div>
		</div>
	);
}

function NavGroup({ label, links, pathname }) {
	const active = links.some((l) => isActivePath(pathname, l.href));
	return (
		<div className="group relative">
			<div className="relative">
				<NavSwipeBg />
				<NavTrigger label={label} active={active} />
			</div>
			<div className="absolute w-[230px] group-[:not(:hover)]:invisible">
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-10"></div>
				<div className="relative">
					<div className="border-t-[1px] border-[#E22C32] border-opacity-40"></div>
					{links.map((link, i) => (
						<div key={link.href}>
							<DropdownLink href={link.href} label={link.label} index={i} active={isActivePath(pathname, link.href)} />
							<div className="border-t-[1px] border-[#E22C32] border-opacity-40"></div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

function CtaSwipeBg() {
	return (
		<>
			<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
			<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
			<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
			<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
			<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-10 border-[1px] border-[#E22C32] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
		</>
	);
}

export default function Header() {
	const pathname = usePathname() || '/';
	const navRow = (
		<div className="flex justify-between items-center h-[90px] font-teko">
			<div className="">
				<Link className="flex items-center gap-[5px]" href="/" aria-label={`${site.name} home`}>
					<LogoFull className="w-[96px] h-[75px]" />
				</Link>
			</div>
			<div className="hidden xl:block">
				<div className="flex text-[20px] font-medium">
					<NavLink href="/" label="HOME" active={isActivePath(pathname, '/')} />
					{navItems.map((item) =>
						item.href ? (
							<NavLink key={item.key} href={item.href} label={item.label} active={isActivePath(pathname, item.href)} />
						) : (
							<NavGroup key={item.key} label={item.label} links={item.links} pathname={pathname} />
						),
					)}
				</div>
			</div>
			<div className="">
				<div className="flex items-center">
					{/* Phones: one-tap call button next to the menu button */}
					<a className="md:hidden group relative" href={`tel:${site.phone}`} aria-label={`Call ${site.name} on ${site.phoneDisplay}`}>
						<CtaSwipeBg />
						<div className="relative h-[54px] w-[54px] flex justify-center items-center">
							<div className="relative">
								<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
									<i className="fa-solid fa-phone"></i>
								</div>
								<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
									<i className="fa-solid fa-phone"></i>
								</div>
							</div>
						</div>
					</a>
					<div className="md:hidden px-[5px] border-t-[1px] border-[#E22C32]"></div>
					<a className="xl:hidden group relative" data-c-toggle="a" href="#offcanvas" role="button" aria-label="Open menu" aria-controls="offcanvas" aria-expanded="false">
						<CtaSwipeBg />
						<div className="relative h-[54px] w-[54px] flex justify-center items-center">
							<div className="relative">
								<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
									<i className="fa-solid fa-bars"></i>
								</div>
								<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
									<i className="fa-solid fa-bars"></i>
								</div>
							</div>
						</div>
					</a>
					<div className="xl:hidden md:px-[20px] border-t-[1px] border-[#E22C32]"></div>
					<a className="hidden md:block group relative" href={site.joinUrl} target="_blank" rel="noopener noreferrer">
						<CtaSwipeBg />
						<div className="relative h-[54px] w-[124px] flex justify-center items-center">
							<div className="relative">
								<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">JOIN NOW</div>
								<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">JOIN NOW</div>
							</div>
						</div>
					</a>
					<div className="hidden md:block px-[5px] border-t-[1px] border-[#E22C32]"></div>
					<button type="button" data-app-download="" className="hidden md:block group relative" aria-haspopup="dialog">
						<CtaSwipeBg />
						<div className="relative h-[54px] w-[124px] flex justify-center items-center">
							<div className="relative">
								<div className="absolute top-0 right-0 bottom-0 left-0 whitespace-nowrap group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
									<i className="fa-solid fa-mobile-screen-button mr-[6px]"></i>GET APP
								</div>
								<div className="whitespace-nowrap group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
									<i className="fa-solid fa-mobile-screen-button mr-[6px]"></i>GET APP
								</div>
							</div>
						</div>
					</button>
					<div className="hidden md:block px-[20px] border-t-[1px] border-[#E22C32]"></div>
					<a className="hidden md:block group relative" href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="RIXA FIT on Instagram">
						<CtaSwipeBg />
						<div className="relative h-[30px] w-[30px] flex justify-center items-center text-[12px] leading-[1]">
							<div className="relative">
								<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
									<i className="fa-brands fa-instagram"></i>
								</div>
								<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
									<i className="fa-brands fa-instagram"></i>
								</div>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	);

	return (
		<>
			<div className="fixed top-0 right-0 left-0 z-[49] bg-[#01010F] h-[90px]"></div>
			<div className="sticky top-0 z-50">
				<div className="relative max-w-[1320px] mx-auto px-[15px]">
					<div className="bg-[#D4D4D4] bg-opacity-20 px-[30px]">{navRow}</div>
				</div>
			</div>
		</>
	);
}
