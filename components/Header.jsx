'use client';

import { usePathname } from 'next/navigation';
import { navGroups } from './navData';
import LogoMark from './LogoMark';
import { site, whatsappLink } from '../data/site';

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

function NavLabel({ label }) {
	return (
		<div className="relative">
			<div className="absolute top-0 right-0 bottom-0 left-0 group-hover:text-[#E22C32] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.06s] transition-all duration-[.3s]">{label}</div>
			<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.06s] transition-all duration-[.3s]">{label}</div>
		</div>
	);
}

function NavHomeLink({ href, label }) {
	return (
		<a href={href} className="relative h-[90px] flex items-center gap-[5px] px-[20px]">
			<NavLabel label={label} />
		</a>
	);
}

function NavTrigger({ label }) {
	return (
		<div className="relative h-[90px] flex items-center gap-[5px] px-[20px]">
			<NavLabel label={label} />
			<div className="text-[12px]"><i className="fa fa-angle-down"></i></div>
		</div>
	);
}

function DropdownLink({ href, label, index }) {
	const originClass = index % 2 === 0 ? 'origin-top' : 'origin-bottom';
	return (
		<a className="" href={href}>
			<div className="group/c relative">
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
		</a>
	);
}

function NavGroup({ label, links, home }) {
	return (
		<div className="group relative">
			<div className="relative">
				<NavSwipeBg />
				<NavTrigger label={label} />
			</div>
			<div className="absolute w-[230px] group-[:not(:hover)]:invisible">
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-10"></div>
				<div className={home ? 'relative text-white' : 'relative'}>
					<div className="border-t-[1px] border-[#E22C32] border-opacity-40"></div>
					{links.map((link, i) => (
						<div key={link.href}>
							<DropdownLink href={link.href} label={link.label} index={i} />
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
	const pathname = usePathname();
	const home = pathname === '/';
	const groups = home ? navGroups.filter((g) => g.key !== 'blog') : navGroups;

	const navRow = (
		<div className="flex justify-between items-center h-[90px] font-teko">
			<div className="">
				<a className="flex items-center gap-[5px]" href="/" aria-label={`${site.name} home`}>
					<LogoMark className="w-[60px] h-[61px]" />
				</a>
			</div>
			<div className="hidden xl:block">
				<div className="flex text-[20px] font-medium">
					<div className="group relative">
						<div className="relative">
							<NavSwipeBg />
							<NavHomeLink href="/" label="HOME" />
						</div>
					</div>
					{groups.map((g) => (
						<NavGroup key={g.key} label={g.label} links={g.links} home={home} />
					))}
				</div>
			</div>
			<div className="">
				<div className={home ? 'flex items-center text-white' : 'flex items-center'}>
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
					<a className="hidden md:block group relative" href="/pricing">
						<CtaSwipeBg />
						<div className="relative h-[54px] w-[144px] flex justify-center items-center">
							<div className="relative">
								<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">JOIN NOW</div>
								<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">JOIN NOW</div>
							</div>
						</div>
					</a>
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
					<div className="hidden md:block px-[5px] border-t-[1px] border-[#E22C32]"></div>
					<a className="hidden md:block group relative" href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat with RIXA FIT on WhatsApp">
						<CtaSwipeBg />
						<div className="relative h-[30px] w-[30px] flex justify-center items-center text-[12px] leading-[1]">
							<div className="relative">
								<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
									<i className="fa-brands fa-whatsapp"></i>
								</div>
								<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
									<i className="fa-brands fa-whatsapp"></i>
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
			<div className={home ? 'pt-[40px] bg-white' : 'pt-[40px]'}></div>
			{home ? (
				<div className="sticky z-50 top-0 bg-white text-[#01010F]">
					<div className="max-w-[1320px] mx-auto px-[15px]">{navRow}</div>
				</div>
			) : (
				<>
					<div className="fixed top-0 right-0 left-0 z-[49] bg-[#01010F] h-[90px]"></div>
					<div className="sticky top-0 z-50">
						<div className="relative max-w-[1320px] mx-auto px-[15px]">
							<div className="bg-[#D4D4D4] bg-opacity-20 px-[30px]">{navRow}</div>
						</div>
					</div>
				</>
			)}
		</>
	);
}
