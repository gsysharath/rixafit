import Reveal from '../Reveal';

// All trainers: one column on phones, two on tablets, four on desktop.
export function TrainerGrid({ trainers }) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[30px]">
			{trainers.map((trainer) => (
				<TrainerCard key={trainer.slug} trainer={trainer} />
			))}
		</div>
	);
}

// Trainer photo with name, role and an arrow link to the trainer's profile.
// Sized to fit four across on desktop.
export default function TrainerCard({ trainer }) {
	const profile = `/trainer/${trainer.slug}`;
	return (
		<div className="border-[1px] border-[#D4D4D4] border-opacity-30">
			<a className="block" href={profile} tabIndex={-1} aria-hidden="true">
				<Reveal>
					<img className="w-full" src={trainer.image} alt="" />
				</Reveal>
			</a>
			<div className="flex items-center gap-[15px] p-[20px]">
				<div className="min-w-0">
					<a className="block font-teko font-semibold text-[28px] leading-[1.2] text-[#D4D4D4] hover:text-[#E22C32]" href={profile}>{trainer.name}</a>
					<div className="text-[16px]">{trainer.role}</div>
				</div>
				<div className="flex-1 flex items-center gap-[5px]">
					<div className="flex-1 border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
					<div className="flex-1 border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
					<div className="flex-1 border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
					<div className="flex-1 border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
					<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
				</div>
				<a className="group relative shrink-0" href={profile} aria-label={`${trainer.name} profile`}>
					<div className="absolute top-0 right-0 bottom-0 left-0 border-l-[1px] border-[#D4D4D4] border-opacity-50 group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-50 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
					<div className="relative h-[60px] w-[60px] flex justify-center items-center">
						<div className="relative font-teko font-medium text-[20px]">
							<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
								<img className="" src="/images/home/trainer-arrow.svg" alt="" />
							</div>
							<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]">
								<img className="" src="/images/home/hero-arrow.svg" alt="" />
							</div>
						</div>
					</div>
				</a>
			</div>
		</div>
	);
}
