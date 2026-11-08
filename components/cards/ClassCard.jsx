import Link from 'next/link';
// Class tile used on /classes. Even and odd tiles reveal from opposite edges,
// matching the original template. Class names stay literal for Tailwind.
const REVEAL = {
	even: {
		layer: 'origin-top',
		image: 'origin-bottom',
	},
	odd: {
		layer: 'origin-bottom',
		image: 'origin-top',
	},
};

export default function ClassCard({ item, index }) {
	const r = index % 2 === 0 ? REVEAL.even : REVEAL.odd;
	return (
		<div className="">
			<Link className="block relative group/card" href={`/classes/${item.slug}`} aria-label={`${item.name} class details`}>
				<div data-scroll="[data-scroll-item]" className="">
					<div data-scroll-cog="" className="hidden">{`
						{
							"scrollTrigger": {
								"trigger": "[data-scroll-item]"
							}
						}
					`}</div>
					<div data-scroll-item="" className="group">
						<div className="relative">
							<div className={`${r.layer} absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]`}></div>
							<div className={`${r.layer} absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]`}></div>
							<div className={`${r.layer} absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]`}></div>
							<div className={`${r.layer} absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]`}></div>
							<div className={`${r.image} group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]`}>
								<img className="" src={item.image} alt={`${item.name} class`} />
							</div>
						</div>
					</div>
				</div>
				<div className="absolute right-0 bottom-0 left-0">
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#01010F] from-70% to-transparent to-70%"></div>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#971A1E] from-70% to-transparent to-70% opacity-50"></div>
					<div className="relative p-[30px] ">
						<div className="font-teko font-semibold text-[28px] group-hover/card:text-[#E22C32] transition-colors duration-[.3s]">{item.name}</div>
						<div className="flex justify-start">
							<div className="">
								<div className="border-t-[2px] border-[#01010F]"></div>
								<div className="border-t-[2px] border-[#01010F] mr-[10px] mt-[3px]"></div>
								<div className="border-t-[2px] border-[#01010F] mr-[20px] mt-[3px]"></div>
								<div className="mt-[10px]"></div>
								<div className="">{item.tag}</div>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}
