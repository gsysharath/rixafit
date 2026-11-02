import NewsletterForm from '../../components/forms/NewsletterForm';
import PageBanner from '../../components/PageBanner';

export const metadata = {
	title: 'Class Schedule',
	description: "Weekly class timetable at RIXA FIT Mahabubnagar - boxing, cardio, HIIT, strength and more. Open Mon-Sat 5-10 AM & 5-10 PM.",
	alternates: { canonical: '/schedule' },
};

export default function SchedulePage() {
	return (
		<div className="bg-[#01010F] text-[#E7E7E7]">
			<PageBanner title="Schedule" gradient={false} />
		<div className="">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="relative">
					<div className="absolute top-0 right-0 bottom-0 left-0 hidden xl:grid grid-cols-8">
						<div className="border-r-[1px] border-[#D4D4D4] border-opacity-30"></div>
						<div className="border-r-[1px] border-[#D4D4D4] border-opacity-30"></div>
						<div className="border-r-[1px] border-[#D4D4D4] border-opacity-30"></div>
						<div className="border-r-[1px] border-[#D4D4D4] border-opacity-30"></div>
						<div className="border-r-[1px] border-[#D4D4D4] border-opacity-30"></div>
						<div className="border-r-[1px] border-[#D4D4D4] border-opacity-30"></div>
						<div className="border-r-[1px] border-[#D4D4D4] border-opacity-30"></div>
						<div className=""></div>
					</div>
					<div className="relative">
						<div className="pt-[150px]"></div>
						<div className="hidden xl:grid grid-cols-8 font-teko font-medium text-[20px] text-center">
							<div className=""></div>
							<div className="">Monday</div>
							<div className="">Tuesday</div>
							<div className="">Wednesday</div>
							<div className="">Thursday</div>
							<div className="">Friday</div>
							<div className="">Saturday</div>
							<div className="">Sunday</div>
						</div>
						<div className="xl:mt-[50px] border-t-[1px] border-[#D4D4D4] border-opacity-30"></div>
						<div className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-8 text-center">
							<div className="flex items-center">
								<div className=" font-teko font-medium text-[20px]">06.00 - 08.00</div>
							</div>
							<div className="hidden xl:block">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
														<div className=" font-teko font-semibold text-[24px]">BOXING</div>
														<div className="text-[16px]">Professor Smith</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden xl:block"></div>
							<div className="hidden xl:block">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
														<div className=" font-teko font-semibold text-[24px]">Cardio</div>
														<div className="text-[16px]">Robert Cage</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden md:block">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
														<div className=" font-teko font-semibold text-[24px]">BOXING</div>
														<div className="text-[16px]">Robert Cage</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden md:block"></div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
														<div className=" font-teko font-semibold text-[24px]">CRAZE</div>
														<div className="text-[16px]">Robert Cage</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden md:block"></div>
						</div>
						<div className="border-t-[1px] border-[#D4D4D4] border-opacity-30"></div>
						<div className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-8 text-center">
							<div className="flex items-center">
								<div className=" font-teko font-medium text-[20px]">08.00 - 10.00</div>
							</div>
							<div className="hidden xl:block">
								
							</div>
							<div className="hidden xl:block">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
														<div className=" font-teko font-semibold text-[24px]">BOXING</div>
														<div className="text-[16px]">Robert Cage</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden xl:block">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
														<div className=" font-teko font-semibold text-[24px]">BOXING</div>
														<div className="text-[16px]">Robert Cage</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden md:block">
								
							</div>
							<div className="hidden md:block"></div>
							<div className="hidden md:block">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
														<div className=" font-teko font-semibold text-[24px]">BOOTCAMP</div>
														<div className="text-[16px]">Robert Cage</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
														<div className=" font-teko font-semibold text-[24px]">BOXING</div>
														<div className="text-[16px]">Ms. Garcia</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="border-t-[1px] border-[#D4D4D4] border-opacity-30"></div>
						<div className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-8 text-center">
							<div className="flex items-center">
								<div className=" font-teko font-medium text-[20px]">10.00 - 12.00</div>
							</div>
							<div className="hidden xl:block">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
														<div className=" font-teko font-semibold text-[24px]">YOGA</div>
														<div className="text-[16px]">Robert Cage</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden xl:block">
								
							</div>
							<div className="hidden xl:block">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
														<div className=" font-teko font-semibold text-[24px]">ZUMBA</div>
														<div className="text-[16px]">Mrs. Johnson</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
														<div className=" font-teko font-semibold text-[24px]">BOXING</div>
														<div className="text-[16px]">Ms. Garcia</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden md:block">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
														<div className=" font-teko font-semibold text-[24px]">SCULPT</div>
														<div className="text-[16px]">Robert Cage</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden md:block">
								
							</div>
							<div className="hidden md:block">
								
							</div>
						</div>
						<div className="border-t-[1px] border-[#D4D4D4] border-opacity-30"></div>
						<div className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-8 text-center">
							<div className="flex items-center">
								<div className=" font-teko font-medium text-[20px]">12.00 - 02.00</div>
							</div>
							<div className="hidden xl:block">
								
							</div>
							<div className="hidden xl:block">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
														<div className=" font-teko font-semibold text-[24px]">BOXING</div>
														<div className="text-[16px]">Robert Cage</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden xl:block">
								
							</div>
							<div className="hidden md:block">
								
							</div>
							<div className="hidden md:block">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
														<div className=" font-teko font-semibold text-[24px]">SPIN</div>
														<div className="text-[16px]">Robert Cage</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
														<div className=" font-teko font-semibold text-[24px]">TONE UP</div>
														<div className="text-[16px]">Mrs. Johnson</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden md:block">
								
							</div>
						</div>
						<div className="border-t-[1px] border-[#D4D4D4] border-opacity-30"></div>
						<div className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-8 text-center">
							<div className="flex items-center">
								<div className=" font-teko font-medium text-[20px]">02.00 - 04.00</div>
							</div>
							<div className="hidden xl:block">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
														<div className=" font-teko font-semibold text-[24px]">CARDIO</div>
														<div className="text-[16px]">Robert Cage</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden xl:block">
								
							</div>
							<div className="hidden xl:block">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
														<div className=" font-teko font-semibold text-[24px]">Mr. Rodriguez</div>
														<div className="text-[16px]">Robert Cage</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden md:block">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
														<div className=" font-teko font-semibold text-[24px]">BOXING</div>
														<div className="text-[16px]">Robert Cage</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden md:block">
								
							</div>
							<div className="hidden md:block">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
														<div className=" font-teko font-semibold text-[24px]">MUSCLE</div>
														<div className="text-[16px]">Mrs. Johnson</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
														<div className=" font-teko font-semibold text-[24px]">STRETCH</div>
														<div className="text-[16px]">Ms. Garcia</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="border-t-[1px] border-[#D4D4D4] border-opacity-30"></div>
						<div className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-8 text-center">
							<div className="flex items-center">
								<div className=" font-teko font-medium text-[20px]">04.00 - 06.00</div>
							</div>
							<div className="hidden xl:block">
								
							</div>
							<div className="hidden xl:block">
								
							</div>
							<div className="hidden xl:block">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
														<div className=" font-teko font-semibold text-[24px]">WORKOUT</div>
														<div className="text-[16px]">Ms. Thompson</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden md:block">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
														<div className=" font-teko font-semibold text-[24px]">CARDIO</div>
														<div className="text-[16px]">Robert Cage</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
														<div className=" font-teko font-semibold text-[24px]">HIIT</div>
														<div className="text-[16px]">Mrs. White</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden md:block">
								
							</div>
							<div className="hidden md:block">
								
							</div>
						</div>
						<div className="border-t-[1px] border-[#D4D4D4] border-opacity-30"></div>
						<div className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-8 text-center">
							<div className="flex items-center">
								<div className=" font-teko font-medium text-[20px]">06.00 - 08.00</div>
							</div>
							<div className="hidden xl:block">
								
							</div>
							<div className="hidden xl:block">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
														<div className=" font-teko font-semibold text-[24px]">RHYTHM</div>
														<div className="text-[16px]">Dr. Patel</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden xl:block">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
														<div className=" font-teko font-semibold text-[24px]">SCULPT</div>
														<div className="text-[16px]">Mrs. Khan</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden md:block">
								
							</div>
							<div className="hidden md:block">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
														<div className=" font-teko font-semibold text-[24px]">POWER</div>
														<div className="text-[16px]">Ms. Wilson</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden md:block">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
														<div className=" font-teko font-semibold text-[24px]">FITNESS</div>
														<div className="text-[16px]">Mr. Clark</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
														<div className="font-teko font-semibold text-[24px]">MAYHEM</div>
														<div className="text-[16px]">Coach Taylor</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="border-t-[1px] border-[#D4D4D4] border-opacity-30"></div>
					</div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="hidden xl:block py-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="flex justify-center font-teko font-semibold text-[225px] leading-[1]">
					<div className="font-oswald text-[185px] leading-[1] text-transparent [-webkit-text-stroke:1px_#D4D4D4]">
						<div data-scroll="[data-scroll-item]" className="">
							<div data-scroll-cog="" className="hidden">{`
								{
									"scrollTrigger": {
										"trigger": "[data-scroll-item]"
										
									}
								}
							`}</div>
							<div data-scroll-item="" className="group">
								<div className="flex">
									<div className="">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">C</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">C</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">C</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">C</div>
											<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
												C
											</div>
										</div>
									</div>
									<div className="">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">H</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">H</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">H</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">H</div>
											<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
												H
											</div>
										</div>
									</div>
									<div className="">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">O</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">O</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">O</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">O</div>
											<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
												O
											</div>
										</div>
									</div>
									<div className="">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">O</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">O</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">O</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">O</div>
											<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
												O
											</div>
										</div>
									</div>
									<div className="">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">S</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">S</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">S</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">S</div>
											<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
												S
											</div>
										</div>
									</div>
									<div className="">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">E</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">E</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">E</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">E</div>
											<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
												E
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="">&nbsp;</div>
					<div className="">PLAN</div>
				</div>
				<div className="flex justify-center items-center gap-[30px]">
					<div className="">
						<div className="">Let’s improve your mental health. Let’s</div>
						<div className="">improve your mental health</div>
					</div>
					<div className="">
						<img className="" src="/images/classes/animated-element.svg" alt=""/>
					</div>
					<div className="">
						<div className="flex items-center gap-[10px] pr-[120px]">
							<div className="px-[10px] border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
							<div className="px-[10px] border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
							<div className="px-[10px] border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
							<div className="px-[10px] border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
							<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
							<a className="group relative" href="/pricing" aria-label="View membership plans">
								<div className="absolute top-0 right-0 bottom-0 left-0 border-l-[1px] border-[#D4D4D4] border-opacity-50 group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-50 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
								<div className="relative h-[60px] w-[60px] flex justify-center items-center">
									<div className="relative font-teko font-medium text-[20px]">
										<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
											<img className="" src="/images/home/trainer-arrow.svg" alt=""/>
										</div>
										<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]">
											<img className="" src="/images/home/hero-arrow.svg" alt=""/>
										</div>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="pt-[150px] xl:pt-0 pb-[150px]">
			<div data-slider="" className="relative">
				<div data-slider-cog="" className="hidden">{`
					{
						"container": ".sliding",
						"items": 1,
						"nav": 0,
						"controls": 0,
						"speed": 80000,
						"autoplay": 1,
						"autoplayButtonOutput": 0
					}
				`}</div>
				<div className="sliding">
					<div className="">
						<div className="origin-left bg-[#D4D4D4] bg-opacity-80 text-[#01010F] overflow-hidden py-[20px] transition-all duration-[.3s]">
							<div className="flex whitespace-nowrap items-center justify-center gap-[30px] font-teko font-semibold text-[28px] uppercase">
								<div className="">Rise up</div>
								<div className="">&#128170;</div>
								<div className="">show up</div>
								<div className="">&#128170;</div>
								<div className="">never give up</div>
								<div className="">&#128170;</div>
								<div className="">Stronger every rep</div>
								<div className="">&#128170;</div>
								<div className="">prouder every step</div>
								<div className="">&#128170;</div>
								<div className="">Push your limits</div>
								<div className="">&#128170;</div>
								<div className="">stay humble</div>
								<div className="">&#128170;</div>
								<div className="">exceed your expectations</div>
								<div className="">&#128170;</div>
								<div className="">be proud</div>
								<div className="">&#128170;</div>
								<div className="">Believe in yourself</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="origin-left bg-[#D4D4D4] bg-opacity-80 text-[#01010F] overflow-hidden py-[20px] transition-all duration-[.3s]">
							<div className="flex whitespace-nowrap items-center justify-center gap-[30px] font-teko font-semibold text-[28px] uppercase">
								<div className="">Rise up</div>
								<div className="">&#128170;</div>
								<div className="">show up</div>
								<div className="">&#128170;</div>
								<div className="">never give up</div>
								<div className="">&#128170;</div>
								<div className="">Stronger every rep</div>
								<div className="">&#128170;</div>
								<div className="">prouder every step</div>
								<div className="">&#128170;</div>
								<div className="">Push your limits</div>
								<div className="">&#128170;</div>
								<div className="">stay humble</div>
								<div className="">&#128170;</div>
								<div className="">exceed your expectations</div>
								<div className="">&#128170;</div>
								<div className="">be proud</div>
								<div className="">&#128170;</div>
								<div className="">Believe in yourself</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="hidden xl:block">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="flex">
					<div className="flex-1 relative flex items-center">
						<div className="absolute top-0 right-0 bottom-0 w-1/2 border-[1px] border-[#E22C32] rounded-bl-full rounded-tl-full"></div>
						<div className="absolute top-0 right-0 bottom-0 m-auto h-3/4 w-1/2 border-[1px] border-[#E22C32] rounded-bl-full rounded-tl-full"></div>
						<div className="absolute top-0 right-0 bottom-0 m-auto h-2/4 w-1/2 border-[1px] border-[#E22C32] rounded-bl-full rounded-tl-full"></div>
						<div className="relative bg-[#971A1E] py-[10px] px-[30px]">Whether you're a beginner</div>
						<div className="flex-1 border-t-[1px] border-[#E22C32]"></div>
						<div className="flex-1 border-t-[3px] border-[#E22C32]"></div>
						<div className="flex-1 border-t-[4px] border-[#E22C32]"></div>
						<div className="flex-1 border-t-[7px] border-[#E22C32]"></div>
						<div className="flex-1 border-t-[10px] border-[#E22C32]"></div>
					</div>
					<div className="border-[10px] border-[#E22C32] bg-[#D4D4D4] text-[#01010F]">
						<div data-scroll="[data-scroll-item]" className="">
							<div data-scroll-cog="" className="hidden">{`
								{
									"scrollTrigger": {
										"trigger": "[data-scroll-item]"
										
									}
								}
							`}</div>
							<div data-scroll-item="" className="group/i">
								<div className="relative">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
										<div className="p-[50px]">
											<div className="text-center pb-[10px]">
												<div className="font-teko font-semibold text-[36px]">SUBSCRIBE TO OUR NEWSLETTER</div>
											</div>
											<NewsletterForm />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex-1 relative flex items-center">
						<div className="absolute top-0 left-0 bottom-0 w-1/2 border-[1px] border-[#E22C32] rounded-br-full rounded-tr-full"></div>
						<div className="absolute top-0 left-0 bottom-0 m-auto h-3/4 w-1/2 border-[1px] border-[#E22C32] rounded-br-full rounded-tr-full"></div>
						<div className="absolute top-0 left-0 bottom-0 m-auto h-2/4 w-1/2 border-[1px] border-[#E22C32] rounded-br-full rounded-tr-full"></div>
						<div className="flex-1 border-t-[10px] border-[#E22C32]"></div>
						<div className="flex-1 border-t-[7px] border-[#E22C32]"></div>
						<div className="flex-1 border-t-[4px] border-[#E22C32]"></div>
						<div className="flex-1 border-t-[3px] border-[#E22C32]"></div>
						<div className="flex-1 border-t-[1px] border-[#E22C32]"></div>
						<div className="relative bg-[#971A1E] py-[10px] px-[30px]">Seasoned fitness enthusiast</div>
					</div>
				</div>
			</div>
		</div>

		</div>
	);
}
