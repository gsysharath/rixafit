import { durationLabel, formatPrice, monthlyCost, planEnquiryHref, planHighlights } from '../../data/plans';

// Membership card from the template's pricing table. `featured` renders the red
// highlighted card.
// Tailwind needs literal class names, so both variants are spelled out in full.

function Bars({ featured }) {
	const color = featured ? 'border-[#D4D4D4]' : 'border-[#E22C32]';
	return (
		<div className="flex justify-center items-center">
			{[1, 3, 4, 7, 10, 7, 4, 3, 1].map((w, i) => (
				<div key={i} className={`px-[10px] border-opacity-50 ${color} ${{ 1: 'border-t-[1px]', 3: 'border-t-[3px]', 4: 'border-t-[4px]', 7: 'border-t-[7px]', 10: 'border-t-[10px]' }[w]}`}></div>
			))}
		</div>
	);
}

function InfoBox({ children, featured }) {
	return (
		<div className="group relative">
			{featured ? (
				<>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
				</>
			) : (
				<>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
				</>
			)}
			<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
			<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-10 border-[1px] border-[#E22C32] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
			<div className={`relative h-[30px] min-w-[50px] px-[8px] flex justify-center items-center text-[12px] leading-[1] whitespace-nowrap`}>
				<div className="relative">
					<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E7E7E7] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
						{children}
					</div>
					<div className={`${featured ? 'text-[#01010F]' : ''} group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]`}>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}

function ChoosePlan({ plan, featured }) {
	return (
		<a className="group relative" href={planEnquiryHref(plan)} aria-label={`Choose the ${plan.name} plan`}>
			{featured ? (
				<>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-10 border-[1px] border-[#D4D4D4] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
				</>
			) : (
				<>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-10 border-[1px] border-[#E22C32] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
				</>
			)}
			<div className="relative h-[54px] w-[144px] flex justify-center items-center">
				<div className="relative font-teko">
					<div className={`absolute top-0 right-0 bottom-0 left-0 ${featured ? 'text-[#01010F]' : ''} group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]`}>CHOOSE PLAN</div>
					<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">CHOOSE PLAN</div>
				</div>
			</div>
		</a>
	);
}

export default function PlanCard({ plan, featured = false }) {
	const lineColor = featured ? 'border-[#D4D4D4]' : 'border-[#E22C32]';
	const checkBg = featured ? 'bg-white bg-opacity-20' : 'bg-[#971A1E] bg-opacity-50';
	const note = plan.months > 1
		? `${formatPrice(plan.price)} for ${durationLabel(plan.months).toLowerCase()} - about ${formatPrice(monthlyCost(plan))}/month`
		: 'Billed monthly, paid in advance';

	return (
		<div className={featured ? 'bg-[#971A1E] text-white py-[50px] px-[15px]' : 'py-[50px] px-[15px]'}>
			{featured && <div className="font-teko font-medium text-[18px] uppercase tracking-[2px] text-white">Best value</div>}
			<h3 className="font-teko font-semibold text-[36px] uppercase">{plan.name}</h3>
			<Bars featured={featured} />
			<div className="pt-[50px]"></div>
			<div className="flex justify-center">
				<ul className="text-left">
					{planHighlights(plan).map((item, i) => (
						<li key={item} className={`flex items-center gap-[10px] ${i ? 'pt-[20px]' : ''}`}>
							<span className={`shrink-0 flex justify-center items-center w-[26px] h-[26px] rounded-full ${checkBg}`}>
								<img className="" src="/images/home/check.svg" alt="" />
							</span>
							<span className="">{item}</span>
						</li>
					))}
				</ul>
			</div>
			<div className="pt-[50px]"></div>
			<div className="flex justify-center items-center">
				<InfoBox featured={featured}>{formatPrice(plan.price)}</InfoBox>
				<div className={`px-[12px] sm:px-[20px] border-t-[1px] ${lineColor}`}></div>
				<ChoosePlan plan={plan} featured={featured} />
				<div className={`px-[12px] sm:px-[20px] border-t-[1px] ${lineColor}`}></div>
				<InfoBox featured={featured}>{durationLabel(plan.months)}</InfoBox>
			</div>
			<div className="pt-[30px]"></div>
			<div className="text-[12px]">{note}</div>
		</div>
	);
}
