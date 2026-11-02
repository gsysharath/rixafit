import { trainers } from '../../data/trainers';
import { videoLink } from '../../data/site';
import NewsletterForm from '../../components/forms/NewsletterForm';
import PageBanner from '../../components/PageBanner';

export const metadata = {
	title: 'About Us',
	description: "Learn about RIXA FIT - Mahabubnagar's premier fitness studio with modern equipment, expert coaches and a supportive training community.",
	alternates: { canonical: '/about' },
};

export default function AboutPage() {
	return (
		<div className="bg-[#01010F] text-[#E7E7E7]">
			<PageBanner title="ABOUT US" gradient={false} />
		<div className="py-[150px]">
			<div className="relative max-w-[1320px] mx-auto px-[15px]">
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-[100px]">
					<div className="">
						<div className="grid grid-cols-2 gap-[30px]">
							<div className="">
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
												<img className="" src="/images/home/about1.webp" alt=""/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="relative">
									<div className="pt-[75px]"></div>
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
													<img className="" src="/images/home/about2.webp" alt=""/>
												</div>
											</div>
										</div>
									</div>
									<div className="absolute top-0 left-0">
										<img className="bg-[#01010F] rounded-full animate-spin [animation:spin_10s_linear_infinite]" src="/images/home/Circle.svg" alt=""/>
										<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
											<img className="w-[54px] h-[55px]" src="/images/logo-mark-light.svg" alt=""/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="hidden xl:block">
						<div className="font-teko flex items-center gap-[15px] uppercase">
							<div className="font-semibold text-[60px] leading-[1]">GYM Fitness Meets</div>
							<div className="font-medium text-[12px] text-[#E22C32] relative top-[-5px] border-r-[2px] border-l-[2px] border-[#E22C32] px-[5px] [writing-mode:tb]">About Us</div>
							<div className="font-semibold text-[60px] leading-[1]">Here</div>
						</div>
						<div className="pt-[50px]"></div>
						<div className="text-[20px]">
							<div className="border-t-[2px] border-[#E22C32] border-opacity-30 h-[2px]"></div>
							<div className="flex items-center gap-[10px] py-[20px]">
								<div className="text-[#D4D4D4]">01.</div>
								<div className="">How do I know if my brakes need to be replaced?</div>
								<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="flex-1 border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="flex-1 border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="flex-1 border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="flex-1 border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="text-[#E22C32]"><i className="fa fa-plus"></i></div>
							</div>
							<div className="border-t-[2px] border-[#E22C32] border-opacity-30 h-[2px]"></div>
							<div className="flex items-center gap-[10px] py-[20px]">
								<div className="text-[#D4D4D4]">02.</div>
								<div className="">How do I know which gym class is right for me?</div>
								<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="flex-1 border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="flex-1 border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="flex-1 border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="flex-1 border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="text-[#E22C32]"><i className="fa fa-plus"></i></div>
							</div>
							<div className="border-t-[2px] border-[#E22C32] border-opacity-30 h-[2px]"></div>
							<div className="flex items-center gap-[10px] py-[20px]">
								<div className="text-[#D4D4D4]">03.</div>
								<div className="">Do I need to bring any equipment to a gym class?</div>
								<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="flex-1 border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="flex-1 border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="flex-1 border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="flex-1 border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="text-[#E22C32]"><i className="fa fa-plus"></i></div>
							</div>
							<div className="border-t-[2px] border-[#E22C32] border-opacity-30 h-[2px]"></div>
							<div className="flex items-center gap-[10px] py-[20px]">
								<div className="text-[#D4D4D4]">04.</div>
								<div className="">Can I join a gym any type of class if I'm a beginner?</div>
								<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="flex-1 border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="flex-1 border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="flex-1 border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="flex-1 border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="text-[#E22C32]"><i className="fa fa-plus"></i></div>
							</div>
							<div className="border-t-[2px] border-[#E22C32] border-opacity-30 h-[2px]"></div>
							<div className="flex items-center gap-[10px] py-[20px]">
								<div className="text-[#D4D4D4]">05.</div>
								<div className="">Expert Tips for Maximizing Your Gym Experience</div>
								<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="flex-1 border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="flex-1 border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="flex-1 border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="flex-1 border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="text-[#E22C32]"><i className="fa fa-plus"></i></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="flex justify-between">
					<div className="">
						<div className="font-teko flex items-center gap-[15px] uppercase">
							<div className="hidden xl:block font-semibold text-[60px] leading-[1]">Our Upcoming</div>
							<div className="hidden xl:block font-medium text-[12px] text-[#E22C32] relative top-[-5px] border-r-[2px] border-l-[2px] border-[#E22C32] px-[5px] [writing-mode:tb]">Top Ten</div>
							<div className="font-semibold text-[60px] leading-[1]">Trainer</div>
						</div>
					</div>
					<div className="hidden md:block">
						<div className="flex items-center">
							<div className="group relative classes-prev">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
								<div className="relative h-[60px] w-[60px] flex justify-center items-center">
									<div className="relative font-teko font-medium text-[20px]">
										<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
											<img className="" src="/images/home/hero-prev.svg" alt=""/>
										</div>
										<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
											<img className="" src="/images/home/hero-prev.svg" alt=""/>
										</div>
									</div>
								</div>
							</div>
							<div className="px-[50px] bg-white bg-opacity-25 h-[10px]"></div>
							<div className="group relative classes-next">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
								<div className="relative h-[60px] w-[60px] flex justify-center items-center">
									<div className="relative font-teko font-medium text-[20px]">
										<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
											<img className="" src="/images/home/hero-next.svg" alt=""/>
										</div>
										<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
											<img className="" src="/images/home/hero-next.svg" alt=""/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="pt-[50px]"></div>
				<div className="grid grid-cols-2 xl:grid-cols-3 gap-[50px]">
					<div className="hidden xl:block">
						<div className="">
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
											<img className="" src="/images/home/trainer1.webp" alt=""/>
										</div>
									</div>
								</div>
							</div>
							<div className="flex items-center gap-[50px] pt-[30px]">
								<div className="">
									<div className="font-teko font-semibold text-[28px] text-[#D4D4D4]">{trainers[0].name}</div>
									<div className="text-[16px]">{trainers[0].role}</div>
								</div>
								<div className="flex-1">
									<div className="flex items-center gap-[10px]">
										<div className="px-[10px] border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
										<div className="px-[10px] border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
										<div className="px-[10px] border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
										<div className="px-[10px] border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
										<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
										<a className="group relative" href={`/trainer/${trainers[0].slug}`} aria-label={`${trainers[0].name} profile`}>
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
					<div className="">
						<div className="">
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
											<img className="" src="/images/home/trainer2.webp" alt=""/>
										</div>
									</div>
								</div>
							</div>
							<div className="flex items-center gap-[50px] pt-[30px]">
								<div className="">
									<div className="font-teko font-semibold text-[28px] text-[#D4D4D4]">{trainers[1].name}</div>
									<div className="text-[16px]">{trainers[1].role}</div>
								</div>
								<div className="hidden xl:block flex-1">
									<div className="flex items-center gap-[10px]">
										<div className="px-[10px] border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
										<div className="px-[10px] border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
										<div className="px-[10px] border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
										<div className="px-[10px] border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
										<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
										<a className="group relative" href={`/trainer/${trainers[1].slug}`} aria-label={`${trainers[1].name} profile`}>
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
					<div className="">
						<div className="">
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
											<img className="" src="/images/home/trainer3.webp" alt=""/>
										</div>
									</div>
								</div>
							</div>
							<div className="flex items-center gap-[50px] pt-[30px]">
								<div className="">
									<div className="font-teko font-semibold text-[28px] text-[#D4D4D4]">{trainers[2].name}</div>
									<div className="text-[16px]">{trainers[2].role}</div>
								</div>
								<div className="hidden xl:block flex-1">
									<div className="flex items-center gap-[10px]">
										<div className="px-[10px] border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
										<div className="px-[10px] border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
										<div className="px-[10px] border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
										<div className="px-[10px] border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
										<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
										<a className="group relative" href={`/trainer/${trainers[2].slug}`} aria-label={`${trainers[2].name} profile`}>
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
				</div>
			</div>
		</div>

		{/* section */}
		<div className="pb-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="my-[100px] border-t-[1px] border-[#D4D4D4]"></div>
				<div className="relative font-teko leading-[1] font-semibold text-[60px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[100px] uppercase">
					<div className="">
						<div className="flex gap-[30px]">
							<div className="w-[105px] flex justify-end items-center leading-[.8]">
								<div data-scroll="[data-scroll-item]" className="">
									<div data-scroll-cog="" className="hidden">{`
										{
											"scrollTrigger": {
												"trigger": "[data-scroll-item]"
												
											}
										}
									`}</div>
									<div data-scroll-item="odometer" className="group">
										<div className="odometer" data-v="17"></div>
									</div>
								</div>
								<div className="">+</div>
							</div>
							<div className="border-l-[2px] border-[#E22C32]"></div>
							<div className="text-[24px]">
								<div className="">YEARS OF</div>
								<div className="">SERVICE</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="flex gap-[30px]">
							<div className="w-[105px] flex justify-end items-center leading-[.8]">
								<div data-scroll="[data-scroll-item]" className="">
									<div data-scroll-cog="" className="hidden">{`
										{
											"scrollTrigger": {
												"trigger": "[data-scroll-item]"
												
											}
										}
									`}</div>
									<div data-scroll-item="odometer" className="group">
										<div className="odometer" data-v="29"></div>
									</div>
								</div>
								<div className="">+</div>
							</div>
							<div className="border-l-[2px] border-[#E22C32]"></div>
							<div className="text-[24px]">
								<div className="">FITNESS</div>
								<div className="">TRAINEE</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="flex gap-[30px]">
							<div className="w-[105px] flex justify-end items-center leading-[.8]">
								<div data-scroll="[data-scroll-item]" className="">
									<div data-scroll-cog="" className="hidden">{`
										{
											"scrollTrigger": {
												"trigger": "[data-scroll-item]"
												
											}
										}
									`}</div>
									<div data-scroll-item="odometer" className="group">
										<div className="odometer" data-v="3"></div>
									</div>
								</div>
								<div className="">k</div>
							</div>
							<div className="border-l-[2px] border-[#E22C32]"></div>
							<div className="text-[24px]">
								<div className="">Hours</div>
								<div className="">Trained</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="flex gap-[30px]">
							<div className="w-[105px] flex justify-end items-center leading-[.8]">
								<div data-scroll="[data-scroll-item]" className="">
									<div data-scroll-cog="" className="hidden">{`
										{
											"scrollTrigger": {
												"trigger": "[data-scroll-item]"
												
											}
										}
									`}</div>
									<div data-scroll-item="odometer" className="group">
										<div className="odometer" data-v="69"></div>
									</div>
								</div>
								<div className="">+</div>
							</div>
							<div className="border-l-[2px] border-[#E22C32]"></div>
							<div className="text-[24px]">
								<div className="">Happy</div>
								<div className="">Clients</div>
							</div>
						</div>
					</div>
				</div>
				<div className="my-[100px] border-t-[1px] border-[#D4D4D4]"></div>
				<div className="flex">
					<div className="flex-1">
						<div className="">
							<div className="flex">
								<div className="flex items-center border-r-[1px] border-[#D4D4D4] border-opacity-50">
									<div className="font-teko font-semibold text-[36px] pr-[20px] uppercase [writing-mode:tb]">2013</div>
								</div>
								<div className="">
									<div className="flex">
										<div className="">
											<div className="font-teko font-semibold text-[24px] text-[#E22C32] ps-[30px]">Building Foundations</div>
											<div className="flex items-center gap-[5px] py-[20px]">
												<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
											</div>
										</div>
									</div>
									<div className="ps-[30px]">
										<div className="">Strong basics first - correct form,</div>
										<div className="">mobility and safe technique.</div>
									</div>
								</div>
							</div>
							<div className="my-[100px] border-t-[1px] border-[#D4D4D4]"></div>
							<div className="flex">
								<div className="flex items-center border-r-[1px] border-[#D4D4D4] border-opacity-50">
									<div className="font-teko font-semibold text-[36px] pr-[20px] uppercase [writing-mode:tb]">2017</div>
								</div>
								<div className="">
									<div className="flex">
										<div className="">
											<div className="font-teko font-semibold text-[24px] text-[#E22C32] ps-[30px]">Enhancing Engagement</div>
											<div className="flex items-center gap-[5px] py-[20px]">
												<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
											</div>
										</div>
									</div>
									<div className="ps-[30px]">
										<div className="">Group classes and challenges</div>
										<div className="">that keep you motivated.</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="hidden md:block">
						<div className="flex flex-col items-center gap-[50px] px-[30px] xl:border-r-[1px] border-l-[1px] border-[#D4D4D4]">
							<div className="">
								<img className="-rotate-90" src="/images/about/arrow.svg" alt=""/>
							</div>
							<div className="font-teko font-semibold text-[60px] uppercase pr-[10px] [writing-mode:tb]">Our Journey</div>
							<div className="">
								<img className="rotate-90" src="/images/about/arrow.svg" alt=""/>
							</div>
						</div>
					</div>
					<div className="hidden xl:block flex-1">
						<div className="">
							<div className="flex justify-end">
								<div className="">
									<div className="flex justify-end">
										<div className="">
											<div className="font-teko font-semibold text-[24px] text-[#E22C32] pr-[30px]">Improved Experience</div>
											<div className="flex items-center gap-[5px] py-[20px]">
												<div className="flex-1 border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
											</div>
										</div>
									</div>
									<div className="pr-[30px] text-right">
										<div className="">Clean, modern facilities with</div>
										<div className="">a welcoming atmosphere.</div>
									</div>
								</div>
								<div className="flex items-center border-l-[1px] border-[#D4D4D4] border-opacity-50">
									<div className="font-teko font-semibold text-[36px] pl-[20px] uppercase [writing-mode:tb]">2019</div>
								</div>
							</div>
							<div className="my-[100px] border-t-[1px] border-[#D4D4D4]"></div>
							<div className="flex justify-end">
								<div className="">
									<div className="flex justify-end">
										<div className="">
											<div className="font-teko font-semibold text-[24px] text-[#E22C32] pr-[30px]">Technological Integration</div>
											<div className="flex items-center gap-[5px] py-[20px]">
												<div className="flex-1 border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
											</div>
										</div>
									</div>
									<div className="pr-[30px] text-right">
										<div className="">Modern equipment and progress</div>
										<div className="">tracking for better results.</div>
									</div>
								</div>
								<div className="flex items-center border-l-[1px] border-[#D4D4D4] border-opacity-50">
									<div className="font-teko font-semibold text-[36px] pl-[20px] uppercase [writing-mode:tb]">2024</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="relative">
			<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
				<div className="hidden xl:block">
					<div className="group relative">
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
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="origin-bottom group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
										<img className="w-full h-[350px] object-cover object-center" src="/images/about/gallery1.webp" alt=""/>
									</div>
								</div>
							</div>
						</div>
						<div className="absolute top-[30px] right-[30px] bottom-[30px] left-[30px]">
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
							<div className="w-[70px] h-[70px] flex items-center justify-center bg-white rounded-[20px] text-[70px] text-[#E22C32]">
								<i className="fa-brands fa-instagram"></i>
							</div>
						</div>
						</div>
					</div>
				</div>
				<div className="hidden xl:block">
					<div className="group relative">
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
									<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="origin-top group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
										<img className="w-full h-[350px] object-cover object-center" src="/images/about/gallery2.webp" alt=""/>
									</div>
								</div>
							</div>
						</div>
						<div className="absolute top-[30px] right-[30px] bottom-[30px] left-[30px]">
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
							<div className="w-[70px] h-[70px] flex items-center justify-center bg-white rounded-[20px] text-[70px] text-[#E22C32]">
								<i className="fa-brands fa-instagram"></i>
							</div>
						</div>
						</div>
					</div>
				</div>
				<div className="hidden md:block">
					<div className="group relative">
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
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="origin-bottom group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
										<img className="w-full h-[350px] object-cover object-center" src="/images/about/gallery3.webp" alt=""/>
									</div>
								</div>
							</div>
						</div>
						<div className="absolute top-[30px] right-[30px] bottom-[30px] left-[30px]">
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
							<div className="w-[70px] h-[70px] flex items-center justify-center bg-white rounded-[20px] text-[70px] text-[#E22C32]">
								<i className="fa-brands fa-instagram"></i>
							</div>
						</div>
						</div>
					</div>
				</div>
				<div className="">
					<div className="group relative">
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
									<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="origin-top group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
										<img className="w-full h-[350px] object-cover object-center" src="/images/about/gallery4.webp" alt=""/>
									</div>
								</div>
							</div>
						</div>
						<div className="absolute top-[30px] right-[30px] bottom-[30px] left-[30px]">
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
							<div className="w-[70px] h-[70px] flex items-center justify-center bg-white rounded-[20px] text-[70px] text-[#E22C32]">
								<i className="fa-brands fa-instagram"></i>
							</div>
						</div>
						</div>
					</div>
				</div>
				<div className="">
					<div className="group relative">
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
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="origin-bottom group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
										<img className="w-full h-[350px] object-cover object-center" src="/images/about/gallery5.webp" alt=""/>
									</div>
								</div>
							</div>
						</div>
						<div className="absolute top-[30px] right-[30px] bottom-[30px] left-[30px]">
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
							<div className="w-[70px] h-[70px] flex items-center justify-center bg-white rounded-[20px] text-[70px] text-[#E22C32]">
								<i className="fa-brands fa-instagram"></i>
							</div>
						</div>
						</div>
					</div>
				</div>
			</div>
			<div className="group absolute top-0 bottom-0 left-[50px] my-auto h-[60px] w-[60px] hidden md:flex justify-center items-center gallery-prev">
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
				<div className="relative">
					<div className="relative font-teko font-medium text-[20px]">
						<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
							<img className="" src="/images/home/hero-prev.svg" alt=""/>
						</div>
						<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
							<img className="" src="/images/home/hero-prev.svg" alt=""/>
						</div>
					</div>
				</div>
			</div>
			<div className="group absolute top-0 right-[50px] bottom-0 my-auto h-[60px] w-[60px] hidden md:flex justify-center items-center gallery-prev">
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
				<div className="relative">
					<div className="relative font-teko font-medium text-[20px]">
						<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
							<img className="" src="/images/home/hero-next.svg" alt=""/>
						</div>
						<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
							<img className="" src="/images/home/hero-next.svg" alt=""/>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="hidden md:block pt-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="flex justify-between">
					<div className="">
						<div className="font-teko font-semibold text-[60px] leading-[1] uppercase text-[#E22C32]">
							<div className="">Trusted</div>
							<div className="">Client</div>
						</div>
					</div>
					<div className="hidden xl:block">
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
										<img className="brightness-0 invert" src="/images/home/client1.svg" alt=""/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="hidden xl:block">
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
										<img className="brightness-0 invert" src="/images/home/client2.svg" alt=""/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="">
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
										<img className="brightness-0 invert" src="/images/home/client3.svg" alt=""/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="">
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
										<img className="brightness-0 invert" src="/images/home/client4.svg" alt=""/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="">
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
										<img className="brightness-0 invert" src="/images/home/client5.svg" alt=""/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="py-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="xl:flex justify-center gap-[100px]">
					<div className="hidden xl:block">
						<div className="relative">
							<img className="" src="/images/about/testimonial.svg" alt=""/>
							<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
								<div className="">
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
													<img className="" src="/images/about/avatar.png" alt=""/>
												</div>
											</div>
										</div>
									</div>
									<div className="my-[10px] border-t-[2px] border-[#E22C32]"></div>
									<div className="font-teko font-semibold text-[24px]">Mask Elon</div>
									<div className="text-[#D4D4D4]">From USA</div>
								</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="flex items-center gap-[50px]">
							<div className="">
								<div className="font-teko font-semibold text-[36px] text-[#E22C32]">Video Feedback</div>
							</div>
							<div className="hidden md:block flex-1">
								<div className="flex items-center gap-[10px]">
									<div className="flex-1 border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
									<div className="flex-1 border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
									<div className="flex-1 border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
									<div className="flex-1 border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
									<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
									<a className="group relative" href={videoLink} target="_blank" rel="noopener noreferrer" aria-label="Watch our video">
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-50 group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-50 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
										<div className="relative h-[60px] w-[60px] flex justify-center items-center">
											<div className="relative font-teko font-medium text-[20px]">
												<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<i className="fa-solid fa-play"></i>
												</div>
												<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<i className="fa-solid fa-play"></i>
												</div>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
						<div className="pt-[50px]"></div>
						<div className="leading-[1.8]">
							<div className="inline xl:block">"Joining this gym changed my life. The trainers are top-notch, the </div>
							<div className="inline xl:block">classes are diverse and challenging, and the community is like family.</div>
							<div className="inline xl:block">I've never felt stronger or more confident. Highly recommend! and the</div>
							<div className="inline xl:block">community is like family. I've never felt stronger or more confident. </div>
							<div className="inline xl:block">Highly recommend, they are awesome!"</div>
						</div>
						<div className="pt-[30px]"></div>
						<div className="flex items-center gap-[10px] text-[#D4D4D4]">
							<div className=""><i className="fa-solid fa-star"></i></div>
							<div className=""><i className="fa-solid fa-star"></i></div>
							<div className=""><i className="fa-solid fa-star"></i></div>
							<div className=""><i className="fa-solid fa-star"></i></div>
							<div className=""><i className="fa-regular fa-star-half-stroke"></i></div>
							<div className="px-[10px] border-t-[1px] border-[#D4D4D4]"></div>
							<div className="">(4.95 stars)</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="xl:flex">
					<div className="flex-1 relative hidden xl:flex items-center">
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
					<div className="flex-1 relative hidden xl:flex items-center">
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
