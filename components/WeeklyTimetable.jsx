import { scheduleDays, scheduleNote, scheduleSlots, scheduleSummary } from '../data/schedule';
import Reveal from './Reveal';

// Gym timings from data/schedule.js: a day-by-day grid on desktop, grouped cards on
// smaller screens, followed by the "timings may vary" note. Used on the home page.
export default function WeeklyTimetable() {
	return (
		<>
			{/* weekly timetable (desktop) */}
			<div className="hidden xl:block relative">
				<div className="absolute top-0 right-0 bottom-0 left-0 grid grid-cols-8">
					{scheduleDays.map((day) => (
						<div key={day} className="border-r-[1px] border-[#D4D4D4] border-opacity-30"></div>
					))}
					<div className=""></div>
				</div>
				<div className="relative">
					<div className="grid grid-cols-8 font-teko font-medium text-[20px] text-center pb-[20px]">
						<div className=""></div>
						{scheduleDays.map((day) => (
							<div key={day} className="">{day}</div>
						))}
					</div>
					<div className="border-t-[1px] border-[#D4D4D4] border-opacity-30"></div>
					{scheduleSlots.map((slot) => (
						<div key={slot.key}>
							<div className="grid grid-cols-8 text-center">
								<div className="flex flex-col justify-center p-[10px]">
									<div className="font-teko font-semibold text-[24px] uppercase text-[#E22C32]">{slot.label}</div>
									<div className="text-[14px]">{slot.time}</div>
								</div>
								{scheduleDays.map((day) => (
									<div key={day} className="p-[10px]">
										{slot.days.includes(day) ? (
											<Reveal className="h-full">
												<div className={slot.special ? 'h-full bg-[#971A1E] text-white p-[10px]' : 'h-full bg-[#D4D4D4] text-[#01010F] p-[10px]'}>
													<div className="font-teko font-semibold text-[22px] uppercase leading-[1.1] whitespace-nowrap">{slot.title}</div>
													<div className="text-[14px] whitespace-nowrap">{slot.shortTime}</div>
												</div>
											</Reveal>
										) : (
											<div className="h-full flex items-center justify-center font-teko text-[20px] uppercase text-[#D4D4D4]/40">
												{slot.special ? '' : 'Closed'}
											</div>
										)}
									</div>
								))}
							</div>
							<div className="border-t-[1px] border-[#D4D4D4] border-opacity-30"></div>
						</div>
					))}
				</div>
			</div>

			{/* grouped timings (mobile & tablet) */}
			<div className="xl:hidden grid grid-cols-1 md:grid-cols-3 gap-[30px]">
				{scheduleSummary.map((group) => (
					<div key={group.title} className="border-[1px] border-[#D4D4D4]/30">
						<div className="bg-[#971A1E] text-white px-[20px] py-[10px] font-teko font-semibold text-[24px] leading-[1.2] uppercase">{group.title}</div>
						<div className="p-[20px] flex flex-col gap-[15px]">
							{group.rows.map((row) => (
								<div key={row.label} className="">
									<div className="text-[14px] uppercase text-[#E22C32]">{row.label}</div>
									<div className="font-teko font-medium text-[24px] leading-[1.2]">{row.time}</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>

			<div className="pt-[30px] flex items-start gap-[10px]">
				<div className="text-[#E22C32]"><i className="fa-solid fa-circle-info"></i></div>
				<div className="">{scheduleNote}</div>
			</div>
		</>
	);
}
