'use client';

import { navGroups } from './navData';

function ArrowRow({ label, dataCToggle, href = '#m' }) {
	return (
		<div className="">
			<a className="flex items-center gap-[10px]" data-c-toggle={dataCToggle} href={href}>
				<div className="">{label}</div>
				<div className="flex-1 flex items-center gap-[5px]">
					<div className="flex-1 border-t-[10px] border-[#D5BDA2] border-opacity-50"></div>
					<div className="flex-1 border-t-[7px] border-[#D5BDA2] border-opacity-50"></div>
					<div className="flex-1 border-t-[4px] border-[#D5BDA2] border-opacity-50"></div>
					<div className="flex-1 border-t-[3px] border-[#D5BDA2] border-opacity-50"></div>
					<div className="flex-1 border-t-[1px] border-[#D5BDA2] border-opacity-50"></div>
				</div>
				<div className="">
					<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt="" />
				</div>
			</a>
		</div>
	);
}

const Divider = () => <div className="border-t-[1px] border-[#D5BDA2] border-opacity-20"></div>;

// Tailwind's JIT scanner only detects complete, literal class strings in source -
// these must stay fully spelled out per key rather than built via template interpolation.
const submenuVisibilityClass = {
	classes: "absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not([data-t='oclasses'])]/m:invisible",
	services: "absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not([data-t='oservices'])]/m:invisible",
	blog: "absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not([data-t='oblog'])]/m:invisible",
	pages: "absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not([data-t='opages'])]/m:invisible",
	trainer: "absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not([data-t='otrainer'])]/m:invisible",
};

export default function OffcanvasMenu() {
	return (
		<div id="offcanvas" className="group">
			<div className="fixed z-[49] top-0 right-0 bottom-0 left-0 group-[:not([data-t='a'])]:invisible">
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[[data-t='a']]:scale-y-0 group-[[data-t='a']]:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not([data-t='a'])]:scale-y-0 group-[:not([data-t='a'])]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not([data-t='a'])]:scale-y-0 group-[:not([data-t='a'])]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not([data-t='a'])]:scale-y-0 group-[:not([data-t='a'])]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-10 group-[:not([data-t='a'])]:scale-y-0 group-[:not([data-t='a'])]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center group-[:not([data-t='a'])]:scale-y-0 group-[:not([data-t='a'])]:delay-0 delay-[.3s] transition-all duration-[.3s]">
					<div className="">
						<div className="pt-[90px]"></div>
						<div id="m" className="relative group/m">
							<div className="">
								<div className="grid grid-cols-1 gap-[20px] w-[300px]">
									<ArrowRow label="HOME" href="/" dataCToggle={undefined} />
									{navGroups.map((g) => (
										<div key={g.key}>
											<Divider />
											<ArrowRow label={g.mobileLabel} dataCToggle={`o${g.key}`} />
										</div>
									))}
								</div>
							</div>
							{navGroups.map((g) => (
								<div key={g.key}>
									{/* section */}
									<div className={submenuVisibilityClass[g.key]}>
										<div className="grid grid-cols-1 gap-[20px] w-[300px]">
											<ArrowRow label="ALL PAGES" dataCToggle="" />
											{g.links.map((link) => (
												<div key={link.href}>
													<Divider />
													<ArrowRow label={link.mobileLabel} href={link.href} dataCToggle={undefined} />
												</div>
											))}
										</div>
									</div>
								</div>
							))}
							{/* section */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
