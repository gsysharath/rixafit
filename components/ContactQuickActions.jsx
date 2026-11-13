import Link from 'next/link';
import { site, whatsappLink } from '../data/site';

// Four one-tap ways to reach the gym: call, WhatsApp, directions and timings.
// Used at the top of /contact and as the "Visit Us" strip on the home page.

const BUTTON = 'inline-flex items-center gap-[8px] font-teko text-[20px] uppercase bg-[#971A1E] text-white px-[20px] py-[6px] hover:bg-white hover:text-[#971A1E] transition-colors duration-[.3s]';

function Card({ icon, title, children, action }) {
	return (
		<div className="relative flex flex-col border-[1px] border-[#D4D4D4]/30 p-[25px] md:p-[30px]">
			<div className="absolute top-[-1px] left-[-1px] w-[80px] border-t-[4px] border-[#E22C32]"></div>
			<div className="flex items-center gap-[12px]">
				<span className="flex items-center justify-center w-[46px] h-[46px] rounded-full bg-[#971A1E]/30 text-[#E22C32] text-[20px]">
					<i className={icon} aria-hidden="true"></i>
				</span>
				<h3 className="font-teko font-semibold text-[28px] leading-[1] uppercase">{title}</h3>
			</div>
			<div className="flex-1 pt-[20px]">{children}</div>
			<div className="pt-[20px]">{action}</div>
		</div>
	);
}

export default function ContactQuickActions({ heading = 'Get In Touch', label = 'Contact' }) {
	return (
		<div className="max-w-[1320px] mx-auto px-[15px]">
			<div className="font-teko flex items-center gap-[15px] uppercase">
				<h2 className="font-semibold text-[48px] md:text-[60px] leading-[1]">{heading}</h2>
				<div className="font-medium text-[12px] text-[#E22C32] relative top-[-5px] border-r-[2px] border-l-[2px] border-[#E22C32] px-[5px] [writing-mode:tb]">{label}</div>
			</div>
			<div className="pt-[50px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] md:gap-[30px]">
				<Card
					icon="fa-solid fa-phone"
					title="Call Us"
					action={
						<a className={BUTTON} href={`tel:${site.phone}`}>
							<i className="fa-solid fa-phone text-[14px]" aria-hidden="true"></i>Call now
						</a>
					}
				>
					<a className="block text-[20px] hover:text-[#E22C32]" href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
					<a className="block text-[20px] hover:text-[#E22C32]" href={`tel:${site.altPhone}`}>{site.altPhoneDisplay}</a>
				</Card>
				<Card
					icon="fa-brands fa-whatsapp"
					title="WhatsApp"
					action={
						<a className={BUTTON} href={whatsappLink(`Hi ${site.name}, I'd like to know more about your gym.`)} target="_blank" rel="noopener noreferrer">
							<i className="fa-brands fa-whatsapp text-[16px]" aria-hidden="true"></i>Chat now
						</a>
					}
				>
					<div className="text-[20px]">{site.whatsappDisplay}</div>
					<div className="pt-[5px] text-[16px] text-[#D4D4D4]">Message us for plans, prices and timings.</div>
				</Card>
				<Card
					icon="fa-solid fa-location-dot"
					title="Visit Us"
					action={
						<a className={BUTTON} href={site.directionsUrl} target="_blank" rel="noopener noreferrer">
							<i className="fa-solid fa-diamond-turn-right text-[14px]" aria-hidden="true"></i>Get directions
						</a>
					}
				>
					<div className="">{site.address.line1}</div>
					<div className="">{site.address.line2}</div>
				</Card>
				<Card
					icon="fa-regular fa-clock"
					title="Timings"
					action={
						<Link className={BUTTON} href="/#schedule">
							<i className="fa-solid fa-calendar-days text-[14px]" aria-hidden="true"></i>Full schedule
						</Link>
					}
				>
					<div className="text-[14px] uppercase text-[#D4D4D4]">{site.hours.weekdays.label.replace(':', '')}</div>
					<div className="font-teko font-medium text-[22px] leading-[1.2]">{site.hours.weekdays.value}</div>
					<div className="pt-[8px] text-[14px] uppercase text-[#D4D4D4]">{site.hours.sunday.label.replace(':', '')}</div>
					<div className="font-teko font-medium text-[22px] leading-[1.2]">{site.hours.sunday.value}</div>
				</Card>
			</div>
		</div>
	);
}
