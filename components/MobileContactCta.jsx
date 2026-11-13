import Link from 'next/link';
import { site, whatsappLink } from '../data/site';

// Phone/tablet version of the large "Contact With Our Trainer" call-to-action, which is
// desktop-only because of its oversized lettering. Hidden on desktop.
export default function MobileContactCta() {
	return (
		<div className="xl:hidden pb-[100px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="relative border-[1px] border-[#D4D4D4]/30 p-[30px] text-center">
					<div className="absolute top-[-1px] left-[-1px] w-[80px] border-t-[4px] border-[#E22C32]"></div>
					<h2 className="font-teko font-semibold text-[40px] leading-[1] uppercase">
						Have a <span className="text-[#E22C32]">question?</span>
					</h2>
					<p className="pt-[15px]">Talk to our team about plans, timings or personal training.</p>
					<div className="pt-[25px] flex flex-wrap justify-center gap-[12px]">
						<a className="inline-flex items-center gap-[8px] font-teko text-[20px] uppercase bg-[#971A1E] text-white px-[20px] py-[6px]" href={`tel:${site.phone}`}>
							<i className="fa-solid fa-phone text-[14px]" aria-hidden="true"></i>Call now
						</a>
						<a className="inline-flex items-center gap-[8px] font-teko text-[20px] uppercase border-[1px] border-[#E22C32] px-[20px] py-[6px]" href={whatsappLink(`Hi ${site.name}, I have a question.`)} target="_blank" rel="noopener noreferrer">
							<i className="fa-brands fa-whatsapp text-[16px]" aria-hidden="true"></i>WhatsApp
						</a>
						<Link className="inline-flex items-center gap-[8px] font-teko text-[20px] uppercase border-[1px] border-[#E22C32] px-[20px] py-[6px]" href="/contact">
							Contact us<i className="fa-solid fa-arrow-right text-[14px]" aria-hidden="true"></i>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
