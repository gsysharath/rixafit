import { site } from '../data/site';

// Home hero text and buttons, shown inside each hero slide (the slide element is the `group/s`
// ancestor). Each headline line reveals with the template's colour swipe when its slide is active.
// Tailwind only sees literal class names, so the per-line delays are spelled out in full.

const LINES = [
	{
		text: 'Move Better.',
		color: 'text-white',
		layers: [
			'group-[.tns-slide-active]/s:delay-[.30s] delay-[.00s]',
			'group-[.tns-slide-active]/s:delay-[.20s] delay-[.10s]',
			'group-[.tns-slide-active]/s:delay-[.10s] delay-[.20s]',
			'group-[.tns-slide-active]/s:delay-[.00s] delay-[.30s]',
		],
		text_delay: 'delay-[.40s]',
	},
	{
		text: 'Feel Stronger.',
		color: 'text-white',
		layers: [
			'group-[.tns-slide-active]/s:delay-[.45s] delay-[.00s]',
			'group-[.tns-slide-active]/s:delay-[.35s] delay-[.10s]',
			'group-[.tns-slide-active]/s:delay-[.25s] delay-[.20s]',
			'group-[.tns-slide-active]/s:delay-[.15s] delay-[.30s]',
		],
		text_delay: 'delay-[.55s]',
	},
	{
		text: 'Live Healthier.',
		color: 'text-[#E22C32]',
		layers: [
			'group-[.tns-slide-active]/s:delay-[.60s] delay-[.00s]',
			'group-[.tns-slide-active]/s:delay-[.50s] delay-[.10s]',
			'group-[.tns-slide-active]/s:delay-[.40s] delay-[.20s]',
			'group-[.tns-slide-active]/s:delay-[.30s] delay-[.30s]',
		],
		text_delay: 'delay-[.70s]',
	},
];

const LAYER_COLORS = ['bg-[#D4D4D4]', 'bg-[#971A1E]', 'bg-[#01010F]', 'bg-[#971A1E]'];

export default function HeroContent() {
	return (
		<div className="">
			<div className="font-teko font-medium text-[18px] md:text-[22px] uppercase tracking-[2px] text-[#E22C32]">
				Premium Fitness Studio · Mahabubnagar
			</div>
			<div className="pt-[10px] font-oswald font-bold uppercase leading-[1.05] text-[40px] md:text-[72px] xl:text-[84px]">
				{LINES.map((line) => (
					<div key={line.text} className="">
						<div className="relative inline-block">
							{LAYER_COLORS.map((bg, i) => (
								<span
									key={bg + i}
									aria-hidden="true"
									className={`origin-top absolute top-0 right-0 bottom-0 left-0 ${bg} group-[.tns-slide-active]/s:scale-y-0 ${line.layers[i]} transition-all duration-[.3s]`}
								></span>
							))}
							<span className={`block ${line.color} group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-0 ${line.text_delay} transition-all duration-[.3s]`}>
								{line.text}
							</span>
						</div>
					</div>
				))}
			</div>
			<p className="pt-[25px] max-w-[540px]">
				Join RIXA FIT and take the first step towards a stronger, healthier and more confident you.
			</p>
			<div className="pt-[30px] flex flex-wrap gap-[15px]">
				<a
					className="group/b flex items-center gap-[10px] font-teko font-medium text-[20px] uppercase bg-[#971A1E] text-white px-[28px] h-[54px] hover:bg-white hover:text-[#971A1E] transition-colors duration-[.3s]"
					href={site.joinUrl}
					target="_blank"
					rel="noopener noreferrer"
				>
					Join Class
					<i className="fa-solid fa-arrow-right text-[14px] group-hover/b:translate-x-[3px] transition-transform duration-[.3s]" aria-hidden="true"></i>
				</a>
				<a
					className="flex items-center gap-[10px] font-teko font-medium text-[20px] uppercase border-[1px] border-[#E22C32] px-[28px] h-[54px] hover:bg-[#971A1E] transition-colors duration-[.3s]"
					href={`tel:${site.phone}`}
					aria-label={`Call RIXA FIT on ${site.phoneDisplay}`}
				>
					<i className="fa-solid fa-phone text-[14px]" aria-hidden="true"></i>
					<span className="md:hidden">Call Now</span>
					<span className="hidden md:inline">Call {site.phoneDisplay}</span>
				</a>
			</div>
		</div>
	);
}
