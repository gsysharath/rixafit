import Link from 'next/link';
import { personalTrainingNote } from '../../data/schedule';
import { site, whatsappLink } from '../../data/site';

// Two extra cards shown alongside the membership plans on /pricing so the grid has no empty
// slots: personal training (priced on request) and help choosing a plan. No prices are shown
// here on purpose - only plans in data/plans.js carry prices.

const PRIMARY = 'inline-flex items-center gap-[8px] font-teko text-[20px] uppercase bg-[#971A1E] text-white px-[20px] py-[6px] hover:bg-white hover:text-[#971A1E] transition-colors duration-[.3s]';
const SECONDARY = 'inline-flex items-center gap-[8px] font-teko text-[20px] uppercase border-[1px] border-[#E22C32] px-[20px] py-[6px] hover:bg-[#971A1E] transition-colors duration-[.3s]';

function HelpCard({ icon, title, children, actions }) {
	return (
		<div className="relative h-full min-h-[420px] flex flex-col items-center justify-center border-[1px] border-[#D4D4D4]/30 px-[25px] py-[50px]">
			<div className="absolute top-[-1px] left-[-1px] w-[80px] border-t-[4px] border-[#E22C32]"></div>
			<span className="flex items-center justify-center w-[64px] h-[64px] rounded-full bg-[#971A1E]/30 text-[#E22C32] text-[28px]">
				<i className={icon} aria-hidden="true"></i>
			</span>
			<h3 className="pt-[20px] font-teko font-semibold text-[36px] leading-[1.1] uppercase">{title}</h3>
			<div className="pt-[15px] max-w-[300px]">{children}</div>
			<div className="pt-[30px] flex flex-wrap justify-center gap-[12px]">{actions}</div>
		</div>
	);
}

export function PersonalTrainingCard() {
	return (
		<HelpCard
			icon="fa-solid fa-user-check"
			title="Personal Training"
			actions={
				<>
					<a className={PRIMARY} href={whatsappLink(`Hi ${site.name}, please share personal training pricing.`)} target="_blank" rel="noopener noreferrer">
						<i className="fa-brands fa-whatsapp text-[16px]" aria-hidden="true"></i>Ask for pricing
					</a>
					<Link className={SECONDARY} href="/services/personal-training">Learn more</Link>
				</>
			}
		>
			<p className="">One-on-one coaching with a RIXA FIT trainer, planned around your goal.</p>
			<p className="pt-[10px] text-[14px] text-[#D4D4D4]">{personalTrainingNote}</p>
		</HelpCard>
	);
}

export function ChoosePlanHelpCard() {
	return (
		<HelpCard
			icon="fa-regular fa-comments"
			title="Not sure which plan?"
			actions={
				<>
					<a className={PRIMARY} href={`tel:${site.phone}`}>
						<i className="fa-solid fa-phone text-[14px]" aria-hidden="true"></i>Call us
					</a>
					<a className={SECONDARY} href={whatsappLink(`Hi ${site.name}, can you help me choose a membership plan?`)} target="_blank" rel="noopener noreferrer">
						<i className="fa-brands fa-whatsapp text-[16px]" aria-hidden="true"></i>WhatsApp
					</a>
				</>
			}
		>
			<p className="">Tell us your goal and timings, and our team will suggest the plan that suits you best.</p>
		</HelpCard>
	);
}
