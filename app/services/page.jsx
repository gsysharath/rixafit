import { pageMetadata } from '../../lib/seo';
import NewsletterForm from '../../components/forms/NewsletterForm';
import PageBanner from '../../components/PageBanner';
import { services } from '../../data/services';

export const metadata = pageMetadata({
	title: 'Gym Services in Mahabubnagar - Training & Nutrition',
	description: 'Personal training, group fitness classes, strength training, nutrition guidance, calisthenics and fitness assessments at RIXA FIT gym, Mahabubnagar.',
	path: '/services',
	keywords: ['personal trainer Mahabubnagar', 'strength training', 'nutrition guidance'],
});

export default function ServicesPage() {
	return (
		<div className="bg-[#01010F] text-[#E7E7E7]">
			<PageBanner title="SERVICES" gradient={true} />
		<div className="pb-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-[100px]">
					<a className="block" href={`/services/${services[0].slug}`} aria-label={`${services[0].name} details`}>
						<div className="group relative pr-[50px] pb-[50px]">
							<div className="relative">
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
												<img className="w-full" src={services[0].image} alt={services[0].name}/>
											</div>
										</div>
									</div>
								</div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-30"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-10 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 flex items-end p-[10px] md:p-[50px]">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
												<div className="flex gap-[30px]">
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[7px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[4px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[3px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[1px] border-[#D4D4D4]"></div>
													</div>
													<div className="pb-[20px]">
														<img className="" src={services[0].icon} alt=""/>
													</div>
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[7px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[4px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[3px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[1px] border-[#D4D4D4]"></div>
													</div>
													<div className="font-teko font-semibold text-[28px] leading-[1.1] uppercase">
														<div className="">{services[0].titleLines[0]}</div>
														<div className="">{services[0].titleLines[1]}</div>
													</div>
												</div>
												<div className="border-t-[2px] border-[#D4D4D4]"></div>
												<div className="pt-[20px]"></div>
												<div className="opacity-0 md:opacity-100">
													<div className="">{services[0].summaryLines[0]}</div>
													<div className="">{services[0].summaryLines[1]}</div>
												</div>
											</div>
											<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
												<div className="flex gap-[30px]">
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[7px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[4px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[3px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[1px] border-[#E22C32]"></div>
													</div>
													<div className="pb-[20px]">
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
																		<img className="" src={services[0].icon} alt=""/>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[7px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[4px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[3px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[1px] border-[#E22C32]"></div>
													</div>
													<div className="font-teko font-semibold text-[28px] leading-[1.1] uppercase">
														<div className="">{services[0].titleLines[0]}</div>
														<div className="">{services[0].titleLines[1]}</div>
													</div>
												</div>
												<div className="border-t-[2px] border-[#E22C32]"></div>
												<div className="pt-[20px]"></div>
												<div className="">
													<div className="inline md:block">{services[0].summaryLines[0]}</div>
													<div className="hidden md:block">{services[0].summaryLines[1]}</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="absolute right-0 bottom-0">
								<div className="font-teko font-semibold text-[200px] h-[200px] uppercase group-[:not(:hover)]:opacity-20 transition-all duration-[.3s]">01</div>
							</div>
						</div>
					</a>
					<a className="block" href={`/services/${services[1].slug}`} aria-label={`${services[1].name} details`}>
						<div className="group relative pr-[50px] pb-[50px]">
							<div className="relative">
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
												<img className="w-full" src={services[1].image} alt={services[1].name}/>
											</div>
										</div>
									</div>
								</div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-30"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-10 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 flex items-end p-[10px] md:p-[50px]">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
												<div className="flex gap-[30px]">
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[7px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[4px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[3px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[1px] border-[#D4D4D4]"></div>
													</div>
													<div className="pb-[20px]">
														<img className="" src={services[1].icon} alt=""/>
													</div>
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[7px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[4px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[3px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[1px] border-[#D4D4D4]"></div>
													</div>
													<div className="font-teko font-semibold text-[28px] leading-[1.1] uppercase">
														<div className="">{services[1].titleLines[0]}</div>
														<div className="">{services[1].titleLines[1]}</div>
													</div>
												</div>
												<div className="border-t-[2px] border-[#D4D4D4]"></div>
												<div className="pt-[20px]"></div>
												<div className="opacity-0 md:opacity-100">
													<div className="">{services[1].summaryLines[0]}</div>
													<div className="">{services[1].summaryLines[1]}</div>
												</div>
											</div>
											<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
												<div className="flex gap-[30px]">
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[7px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[4px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[3px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[1px] border-[#E22C32]"></div>
													</div>
													<div className="pb-[20px]">
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
																		<img className="" src={services[1].icon} alt=""/>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[7px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[4px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[3px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[1px] border-[#E22C32]"></div>
													</div>
													<div className="font-teko font-semibold text-[28px] leading-[1.1] uppercase">
														<div className="">{services[1].titleLines[0]}</div>
														<div className="">{services[1].titleLines[1]}</div>
													</div>
												</div>
												<div className="border-t-[2px] border-[#E22C32]"></div>
												<div className="pt-[20px]"></div>
												<div className="">
													<div className="">{services[1].summaryLines[0]}</div>
													<div className="hidden md:block">{services[1].summaryLines[1]}</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="absolute right-0 bottom-0">
								<div className="font-teko font-semibold text-[200px] h-[200px] uppercase group-[:not(:hover)]:opacity-20 transition-all duration-[.3s]">02</div>
							</div>
						</div>
					</a>
					<a className="block" href={`/services/${services[2].slug}`} aria-label={`${services[2].name} details`}>
						<div className="group relative pr-[50px] pb-[50px]">
							<div className="relative">
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
												<img className="w-full" src={services[2].image} alt={services[2].name}/>
											</div>
										</div>
									</div>
								</div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-30"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-10 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 flex items-end p-[10px] md:p-[50px]">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
												<div className="flex gap-[30px]">
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[7px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[4px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[3px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[1px] border-[#D4D4D4]"></div>
													</div>
													<div className="pb-[20px]">
														<img className="" src={services[2].icon} alt=""/>
													</div>
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[7px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[4px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[3px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[1px] border-[#D4D4D4]"></div>
													</div>
													<div className="font-teko font-semibold text-[28px] leading-[1.1] uppercase">
														<div className="">{services[2].titleLines[0]}</div>
														<div className="">{services[2].titleLines[1]}</div>
													</div>
												</div>
												<div className="border-t-[2px] border-[#D4D4D4]"></div>
												<div className="pt-[20px]"></div>
												<div className="opacity-0 md:opacity-100">
													<div className="">{services[2].summaryLines[0]}</div>
													<div className="">{services[2].summaryLines[1]}</div>
												</div>
											</div>
											<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
												<div className="flex gap-[30px]">
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[7px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[4px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[3px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[1px] border-[#E22C32]"></div>
													</div>
													<div className="pb-[20px]">
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
																		<img className="" src={services[2].icon} alt=""/>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[7px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[4px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[3px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[1px] border-[#E22C32]"></div>
													</div>
													<div className="font-teko font-semibold text-[28px] leading-[1.1] uppercase">
														<div className="">{services[2].titleLines[0]}</div>
														<div className="">{services[2].titleLines[1]}</div>
													</div>
												</div>
												<div className="border-t-[2px] border-[#E22C32]"></div>
												<div className="pt-[20px]"></div>
												<div className="">
													<div className="">{services[2].summaryLines[0]}</div>
													<div className="hidden md:block">{services[2].summaryLines[1]}</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="absolute right-0 bottom-0">
								<div className="font-teko font-semibold text-[200px] h-[200px] uppercase group-[:not(:hover)]:opacity-20 transition-all duration-[.3s]">03</div>
							</div>
						</div>
					</a>
					<a className="block" href={`/services/${services[3].slug}`} aria-label={`${services[3].name} details`}>
						<div className="group relative pr-[50px] pb-[50px]">
							<div className="relative">
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
												<img className="w-full" src={services[3].image} alt={services[3].name}/>
											</div>
										</div>
									</div>
								</div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-30"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-10 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 flex items-end p-[10px] md:p-[50px]">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
												<div className="flex gap-[30px]">
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[7px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[4px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[3px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[1px] border-[#D4D4D4]"></div>
													</div>
													<div className="pb-[20px]">
														<img className="" src={services[3].icon} alt=""/>
													</div>
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[7px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[4px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[3px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[1px] border-[#D4D4D4]"></div>
													</div>
													<div className="font-teko font-semibold text-[28px] leading-[1.1] uppercase">
														<div className="">{services[3].titleLines[0]}</div>
														<div className="">{services[3].titleLines[1]}</div>
													</div>
												</div>
												<div className="border-t-[2px] border-[#D4D4D4]"></div>
												<div className="pt-[20px]"></div>
												<div className="opacity-0 md:opacity-100">
													<div className="">{services[3].summaryLines[0]}</div>
													<div className="">{services[3].summaryLines[1]}</div>
												</div>
											</div>
											<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
												<div className="flex gap-[30px]">
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[7px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[4px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[3px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[1px] border-[#E22C32]"></div>
													</div>
													<div className="pb-[20px]">
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
																		<img className="" src={services[3].icon} alt=""/>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[7px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[4px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[3px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[1px] border-[#E22C32]"></div>
													</div>
													<div className="font-teko font-semibold text-[28px] leading-[1.1] uppercase">
														<div className="">{services[3].titleLines[0]}</div>
														<div className="">{services[3].titleLines[1]}</div>
													</div>
												</div>
												<div className="border-t-[2px] border-[#E22C32]"></div>
												<div className="pt-[20px]"></div>
												<div className="">
													<div className="">{services[3].summaryLines[0]}</div>
													<div className="hidden md:block">{services[3].summaryLines[1]}</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="absolute right-0 bottom-0">
								<div className="font-teko font-semibold text-[200px] h-[200px] uppercase group-[:not(:hover)]:opacity-20 transition-all duration-[.3s]">04</div>
							</div>
						</div>
					</a>
					<a className="block" href={`/services/${services[4].slug}`} aria-label={`${services[4].name} details`}>
						<div className="group relative pr-[50px] pb-[50px]">
							<div className="relative">
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
												<img className="w-full" src={services[4].image} alt={services[4].name}/>
											</div>
										</div>
									</div>
								</div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-30"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-10 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 flex items-end p-[10px] md:p-[50px]">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
												<div className="flex gap-[30px]">
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[7px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[4px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[3px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[1px] border-[#D4D4D4]"></div>
													</div>
													<div className="pb-[20px]">
														<img className="" src={services[4].icon} alt=""/>
													</div>
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[7px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[4px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[3px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[1px] border-[#D4D4D4]"></div>
													</div>
													<div className="font-teko font-semibold text-[28px] leading-[1.1] uppercase">
														<div className="">{services[4].titleLines[0]}</div>
														<div className="">{services[4].titleLines[1]}</div>
													</div>
												</div>
												<div className="border-t-[2px] border-[#D4D4D4]"></div>
												<div className="pt-[20px]"></div>
												<div className="opacity-0 md:opacity-100">
													<div className="">{services[4].summaryLines[0]}</div>
													<div className="">{services[4].summaryLines[1]}</div>
												</div>
											</div>
											<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
												<div className="flex gap-[30px]">
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[7px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[4px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[3px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[1px] border-[#E22C32]"></div>
													</div>
													<div className="pb-[20px]">
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
																		<img className="" src={services[4].icon} alt=""/>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[7px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[4px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[3px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[1px] border-[#E22C32]"></div>
													</div>
													<div className="font-teko font-semibold text-[28px] leading-[1.1] uppercase">
														<div className="">{services[4].titleLines[0]}</div>
														<div className="">{services[4].titleLines[1]}</div>
													</div>
												</div>
												<div className="border-t-[2px] border-[#E22C32]"></div>
												<div className="pt-[20px]"></div>
												<div className="">
													<div className="">{services[4].summaryLines[0]}</div>
													<div className="hidden md:block">{services[4].summaryLines[1]}</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="absolute right-0 bottom-0">
								<div className="font-teko font-semibold text-[200px] h-[200px] uppercase group-[:not(:hover)]:opacity-20 transition-all duration-[.3s]">05</div>
							</div>
						</div>
					</a>
					<a className="block" href={`/services/${services[5].slug}`} aria-label={`${services[5].name} details`}>
						<div className="group relative pr-[50px] pb-[50px]">
							<div className="relative">
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
												<img className="w-full" src={services[5].image} alt={services[5].name}/>
											</div>
										</div>
									</div>
								</div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-30"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-10 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 flex items-end p-[10px] md:p-[50px]">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
												<div className="flex gap-[30px]">
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[7px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[4px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[3px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[1px] border-[#D4D4D4]"></div>
													</div>
													<div className="pb-[20px]">
														<img className="" src={services[5].icon} alt=""/>
													</div>
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[7px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[4px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[3px] border-[#D4D4D4]"></div>
														<div className="flex-1 border-l-[1px] border-[#D4D4D4]"></div>
													</div>
													<div className="font-teko font-semibold text-[28px] leading-[1.1] uppercase">
														<div className="">{services[5].titleLines[0]}</div>
														<div className="">{services[5].titleLines[1]}</div>
													</div>
												</div>
												<div className="border-t-[2px] border-[#D4D4D4]"></div>
												<div className="pt-[20px]"></div>
												<div className="opacity-0 md:opacity-100">
													<div className="">{services[5].summaryLines[0]}</div>
													<div className="">{services[5].summaryLines[1]}</div>
												</div>
											</div>
											<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
												<div className="flex gap-[30px]">
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[7px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[4px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[3px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[1px] border-[#E22C32]"></div>
													</div>
													<div className="pb-[20px]">
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
																		<img className="" src={services[5].icon} alt=""/>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[7px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[4px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[3px] border-[#E22C32]"></div>
														<div className="flex-1 border-l-[1px] border-[#E22C32]"></div>
													</div>
													<div className="font-teko font-semibold text-[28px] leading-[1.1] uppercase">
														<div className="">{services[5].titleLines[0]}</div>
														<div className="">{services[5].titleLines[1]}</div>
													</div>
												</div>
												<div className="border-t-[2px] border-[#E22C32]"></div>
												<div className="pt-[20px]"></div>
												<div className="">
													<div className="">{services[5].summaryLines[0]}</div>
													<div className="hidden md:block">{services[5].summaryLines[1]}</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="absolute right-0 bottom-0">
								<div className="font-teko font-semibold text-[200px] h-[200px] uppercase group-[:not(:hover)]:opacity-20 transition-all duration-[.3s]">06</div>
							</div>
						</div>
					</a>
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
