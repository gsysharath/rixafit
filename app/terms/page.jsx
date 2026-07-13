import PageBanner from '../../components/PageBanner';

function SectionHeading({ eyebrow, title }) {
	return (
		<div className="font-[Teko] flex items-center gap-[15px] uppercase">
			<div className="font-semibold text-[40px] md:text-[60px] leading-[1]">{title}</div>
			<div className="font-medium text-[12px] text-[#F67A45] relative top-[-5px] border-r-[2px] border-l-[2px] border-[#F67A45] px-[5px] [writing-mode:tb]">{eyebrow}</div>
		</div>
	);
}

function Bullet({ children }) {
	return (
		<div className="flex items-start gap-[10px]">
			<div className="text-[#F67A45] pt-[6px]"><i className="fa fa-caret-right"></i></div>
			<div className="flex-1">{children}</div>
		</div>
	);
}

function TermItem({ number, title, points }) {
	return (
		<div className="pt-[40px]">
			<div className="flex items-center gap-[10px]">
				<div className="font-[Teko] font-semibold text-[28px] text-[#D5BDA2]">{number}.</div>
				<div className="font-[Teko] font-semibold text-[28px] uppercase">{title}</div>
				<div className="flex-1 border-t-[1px] border-[#F67A45] border-opacity-30"></div>
			</div>
			<div className="pt-[20px] grid gap-[10px]">
				{points.map((p, i) => <Bullet key={i}>{p}</Bullet>)}
			</div>
		</div>
	);
}

function GuidelineItem({ emoji, title, children }) {
	return (
		<div className="flex items-start gap-[15px] py-[20px] border-t-[1px] border-[#F67A45] border-opacity-30">
			<div className="text-[24px] leading-[1]">{emoji}</div>
			<div className="flex-1">
				<span className="font-semibold text-[#D5BDA2]">{title} </span>
				<span>{children}</span>
			</div>
		</div>
	);
}

const terms = [
	{
		title: 'Membership & Fees',
		points: [
			'Membership is non-transferable and non-refundable.',
			'Fees must be paid in advance as per the chosen plan (Monthly, Quarterly, Half-Yearly, Yearly).',
			'Membership will expire automatically at the end of the plan unless renewed.',
			'Management reserves the right to revise membership fees.',
		],
	},
	{
		title: 'Access & Timings',
		points: [
			'Entry is allowed only with a valid membership.',
			'Members may use the gym during official working hours only.',
			'Timings, holidays, or class schedules may change with prior notice.',
		],
	},
	{
		title: 'Health & Safety',
		points: [
			'Members are advised to consult a doctor before starting workouts.',
			'RIXA Fit is not responsible for injuries, illness, or health conditions arising during workouts.',
			'All exercises must be performed under trainer guidance and with safe usage of equipment.',
		],
	},
	{
		title: 'Code of Conduct',
		points: [
			'Members must wear proper gym attire and clean shoes.',
			'Misbehavior, offensive language, or harassment will lead to membership cancellation.',
			'Smoking, alcohol, or drugs are strictly prohibited.',
		],
	},
	{
		title: 'Facilities & Services',
		points: [
			'Lockers are for temporary use only; management is not responsible for lost items.',
			'Group classes, PT sessions, or special programs may have extra charges.',
		],
	},
	{
		title: 'Suspension & Termination',
		points: [
			'Management can suspend or cancel membership without refund for violation of rules.',
			'Members may request temporary holds (freeze) only in genuine cases (medical/travel) - subject to management approval.',
		],
	},
	{
		title: 'Liability Waiver',
		points: [
			'Members participate in workouts at their own risk.',
			'RIXA Fit, its owners, or staff are not liable for accidents, injuries, or health issues caused during workouts.',
		],
	},
	{
		title: 'Legal',
		points: [
			'CCTV surveillance is maintained for safety.',
			'Any disputes are subject to Mahabubnagar jurisdiction.',
		],
	},
];

const guidelines = [
	{ emoji: '🏋️', title: 'Use Equipment Safely -', children: 'Return weights and wipe down machines after use.' },
	{ emoji: '⏰', title: 'Be On Time -', children: 'Respect gym timings and class schedules.' },
	{ emoji: '👕', title: 'Dress Code -', children: 'Sportswear & clean gym shoes only.' },
	{ emoji: '🚫', title: 'Avoid Prohibited Items -', children: 'No smoking, alcohol, or drugs.' },
	{ emoji: '💡', title: 'Health First -', children: 'Warm up, cool down, and inform trainers of medical issues.' },
	{ emoji: '🛡️', title: 'Personal Belongings -', children: 'Use lockers for temporary storage only.' },
	{ emoji: '🙌', title: 'Respect Others -', children: 'Share equipment, minimize mobile use, and maintain discipline.' },
];

export default function TermsPage() {
	return (
		<div className="bg-[#01010F] text-[#E7E7E7]">
			<PageBanner title="Terms &amp; Conditions" gradient={false} />
			<div className="py-[100px] md:py-[150px]">
				<div className="max-w-[1320px] mx-auto px-[15px]">
					<SectionHeading title="Membership Terms" eyebrow="Terms &amp; Conditions" />
					<div className="pt-[10px] text-[#D5BDA2]">RIXA Fit - Membership Terms &amp; Conditions</div>

					{terms.map((t, i) => (
						<TermItem key={t.title} number={String(i + 1).padStart(2, '0')} title={t.title} points={t.points} />
					))}

					<div className="pt-[100px]"></div>
					<SectionHeading title="Member Guidelines" eyebrow="Please Follow" />
					<div className="pt-[10px] text-[#D5BDA2]">To ensure a safe and enjoyable environment for everyone:</div>
					<div className="pt-[30px]">
						{guidelines.map((g) => (
							<GuidelineItem key={g.title} emoji={g.emoji} title={g.title}>{g.children}</GuidelineItem>
						))}
						<div className="border-t-[1px] border-[#F67A45] border-opacity-30"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
