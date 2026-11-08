import Link from 'next/link';
import Reveal from '../Reveal';

// One service on /services: photo with the service name, icon and summary over it, and a large
// number in the corner. Hovering swaps the red accents for light ones.

function Bars({ color }) {
	return (
		<div className="flex flex-col items-center gap-[5px]">
			<div className={`flex-1 border-l-[10px] ${color}`}></div>
			<div className={`flex-1 border-l-[7px] ${color}`}></div>
			<div className={`flex-1 border-l-[4px] ${color}`}></div>
			<div className={`flex-1 border-l-[3px] ${color}`}></div>
			<div className={`flex-1 border-l-[1px] ${color}`}></div>
		</div>
	);
}

function Heading({ service, barColor }) {
	return (
		<div className="flex gap-[20px] md:gap-[30px]">
			<Bars color={barColor} />
			<div className="pb-[20px] flex items-end">
				<i className={`${service.icon} text-[40px] md:text-[48px] w-[56px] text-center`} aria-hidden="true"></i>
			</div>
			<Bars color={barColor} />
			<div className="font-teko font-semibold text-[24px] md:text-[28px] leading-[1.1] uppercase">
				<div className="">{service.titleLines[0]}</div>
				<div className="">{service.titleLines[1]}</div>
			</div>
		</div>
	);
}

export default function ServiceCard({ service, index }) {
	const number = String(index + 1).padStart(2, '0');
	return (
		<Link className="block" href={`/services/${service.slug}`} aria-label={`${service.name} details`}>
			<div className="group relative pr-[50px] pb-[50px]">
				<div className="relative">
					<Reveal>
						<img className="w-full aspect-[20/13] object-cover" src={service.image} alt={`${service.name} at RIXA FIT`} />
					</Reveal>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-[#01010F]/90 via-[#01010F]/40 to-[#01010F]/10"></div>
					<div className="absolute top-0 right-0 bottom-0 left-0">
						<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
						<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
						<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
						<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
						<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-10 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
						<div className="absolute top-0 right-0 bottom-0 left-0 flex items-end p-[15px] md:p-[40px]">
							<div className="relative">
								{/* hover state */}
								<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
									<Heading service={service} barColor="border-[#D4D4D4]" />
									<div className="border-t-[2px] border-[#D4D4D4]"></div>
									<div className="pt-[15px] hidden md:block">
										<div className="">{service.summaryLines[0]}</div>
										<div className="">{service.summaryLines[1]}</div>
									</div>
								</div>
								{/* default state */}
								<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
									<Heading service={service} barColor="border-[#E22C32]" />
									<div className="border-t-[2px] border-[#E22C32]"></div>
									<div className="pt-[15px] hidden md:block">
										<div className="">{service.summaryLines[0]}</div>
										<div className="">{service.summaryLines[1]}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="absolute right-0 bottom-0 pointer-events-none" aria-hidden="true">
					<div className="font-teko font-semibold text-[120px] md:text-[200px] leading-[1] uppercase group-[:not(:hover)]:opacity-20 transition-all duration-[.3s]">{number}</div>
				</div>
			</div>
		</Link>
	);
}
