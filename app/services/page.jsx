import PageBanner from '../../components/PageBanner';

export default function ServicesPage() {
	return (
		<div className="bg-[#01010F] text-[#E7E7E7]">
			<PageBanner title="SERVICES" gradient={true} />
		<div className="pb-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-[100px]">
					<div className="">
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
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
												<img className="w-full" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/services/bg1s.png" alt=""/>
											</div>
										</div>
									</div>
								</div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-30"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-10 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 flex items-end p-[10px] md:p-[50px]">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
												<div className="flex gap-[30px]">
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[7px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[4px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[3px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[1px] border-[#D5BDA2]"></div>
													</div>
													<div className="pb-[20px]">
														<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/services/s1.svg" alt=""/>
													</div>
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[7px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[4px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[3px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[1px] border-[#D5BDA2]"></div>
													</div>
													<div className="font-[Teko] font-semibold text-[28px] leading-[1.1] uppercase">
														<div className="">Personal</div>
														<div className="">Training</div>
													</div>
												</div>
												<div className="border-t-[2px] border-[#D5BDA2]"></div>
												<div className="pt-[20px]"></div>
												<div className="opacity-0 md:opacity-100">
													<div className="">Lorem Ipsum is simply dummy text of</div>
													<div className="">the printing and typesetting.</div>
												</div>
											</div>
											<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
												<div className="flex gap-[30px]">
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[7px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[4px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[3px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[1px] border-[#F67A45]"></div>
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
																	<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
																	<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
																	<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
																	<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
																	<div className="group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
																		<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/services/s1.svg" alt=""/>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[7px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[4px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[3px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[1px] border-[#F67A45]"></div>
													</div>
													<div className="font-[Teko] font-semibold text-[28px] leading-[1.1] uppercase">
														<div className="">Personal</div>
														<div className="">Training</div>
													</div>
												</div>
												<div className="border-t-[2px] border-[#F67A45]"></div>
												<div className="pt-[20px]"></div>
												<div className="">
													<div className="inline md:block">Lorem Ipsum is simply dummy text of</div>
													<div className="hidden md:block">the printing and typesetting.</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="absolute right-0 bottom-0">
								<div className="font-[Teko] font-semibold text-[200px] h-[200px] uppercase group-[:not(:hover)]:opacity-20 transition-all duration-[.3s]">01</div>
							</div>
						</div>
					</div>
					<div className="">
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
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
												<img className="w-full" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/services/bg2s.png" alt=""/>
											</div>
										</div>
									</div>
								</div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-30"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-10 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 flex items-end p-[10px] md:p-[50px]">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
												<div className="flex gap-[30px]">
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[7px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[4px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[3px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[1px] border-[#D5BDA2]"></div>
													</div>
													<div className="pb-[20px]">
														<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/services/s2.svg" alt=""/>
													</div>
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[7px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[4px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[3px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[1px] border-[#D5BDA2]"></div>
													</div>
													<div className="font-[Teko] font-semibold text-[28px] leading-[1.1] uppercase">
														<div className="">Fitness</div>
														<div className="">Classes</div>
													</div>
												</div>
												<div className="border-t-[2px] border-[#D5BDA2]"></div>
												<div className="pt-[20px]"></div>
												<div className="opacity-0 md:opacity-100">
													<div className="">Lorem Ipsum is simply dummy text of</div>
													<div className="">the printing and typesetting.</div>
												</div>
											</div>
											<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
												<div className="flex gap-[30px]">
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[7px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[4px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[3px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[1px] border-[#F67A45]"></div>
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
																	<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
																	<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
																	<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
																	<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
																	<div className="group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
																		<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/services/s2.svg" alt=""/>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[7px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[4px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[3px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[1px] border-[#F67A45]"></div>
													</div>
													<div className="font-[Teko] font-semibold text-[28px] leading-[1.1] uppercase">
														<div className="">Fitness</div>
														<div className="">Classes</div>
													</div>
												</div>
												<div className="border-t-[2px] border-[#F67A45]"></div>
												<div className="pt-[20px]"></div>
												<div className="">
													<div className="">Lorem Ipsum is simply dummy text of</div>
													<div className="hidden md:block">the printing and typesetting.</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="absolute right-0 bottom-0">
								<div className="font-[Teko] font-semibold text-[200px] h-[200px] uppercase group-[:not(:hover)]:opacity-20 transition-all duration-[.3s]">02</div>
							</div>
						</div>
					</div>
					<div className="">
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
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
												<img className="w-full" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/services/bg4s.png" alt=""/>
											</div>
										</div>
									</div>
								</div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-30"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-10 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 flex items-end p-[10px] md:p-[50px]">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
												<div className="flex gap-[30px]">
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[7px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[4px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[3px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[1px] border-[#D5BDA2]"></div>
													</div>
													<div className="pb-[20px]">
														<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/services/s3.svg" alt=""/>
													</div>
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[7px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[4px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[3px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[1px] border-[#D5BDA2]"></div>
													</div>
													<div className="font-[Teko] font-semibold text-[28px] leading-[1.1] uppercase">
														<div className="">Strength</div>
														<div className="">Training</div>
													</div>
												</div>
												<div className="border-t-[2px] border-[#D5BDA2]"></div>
												<div className="pt-[20px]"></div>
												<div className="opacity-0 md:opacity-100">
													<div className="">Lorem Ipsum is simply dummy text of</div>
													<div className="">the printing and typesetting.</div>
												</div>
											</div>
											<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
												<div className="flex gap-[30px]">
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[7px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[4px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[3px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[1px] border-[#F67A45]"></div>
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
																	<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
																	<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
																	<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
																	<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
																	<div className="group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
																		<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/services/s3.svg" alt=""/>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[7px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[4px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[3px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[1px] border-[#F67A45]"></div>
													</div>
													<div className="font-[Teko] font-semibold text-[28px] leading-[1.1] uppercase">
														<div className="">Strength</div>
														<div className="">Training</div>
													</div>
												</div>
												<div className="border-t-[2px] border-[#F67A45]"></div>
												<div className="pt-[20px]"></div>
												<div className="">
													<div className="">Lorem Ipsum is simply dummy text of</div>
													<div className="hidden md:block">the printing and typesetting.</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="absolute right-0 bottom-0">
								<div className="font-[Teko] font-semibold text-[200px] h-[200px] uppercase group-[:not(:hover)]:opacity-20 transition-all duration-[.3s]">03</div>
							</div>
						</div>
					</div>
					<div className="">
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
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
												<img className="w-full" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/services/bg5s.png" alt=""/>
											</div>
										</div>
									</div>
								</div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-30"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-10 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 flex items-end p-[10px] md:p-[50px]">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
												<div className="flex gap-[30px]">
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[7px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[4px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[3px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[1px] border-[#D5BDA2]"></div>
													</div>
													<div className="pb-[20px]">
														<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/services/s5.svg" alt=""/>
													</div>
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[7px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[4px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[3px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[1px] border-[#D5BDA2]"></div>
													</div>
													<div className="font-[Teko] font-semibold text-[28px] leading-[1.1] uppercase">
														<div className="">Nutritional</div>
														<div className="">Guidance</div>
													</div>
												</div>
												<div className="border-t-[2px] border-[#D5BDA2]"></div>
												<div className="pt-[20px]"></div>
												<div className="opacity-0 md:opacity-100">
													<div className="">Lorem Ipsum is simply dummy text of</div>
													<div className="">the printing and typesetting.</div>
												</div>
											</div>
											<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
												<div className="flex gap-[30px]">
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[7px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[4px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[3px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[1px] border-[#F67A45]"></div>
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
																	<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
																	<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
																	<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
																	<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
																	<div className="group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
																		<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/services/s5.svg" alt=""/>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[7px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[4px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[3px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[1px] border-[#F67A45]"></div>
													</div>
													<div className="font-[Teko] font-semibold text-[28px] leading-[1.1] uppercase">
														<div className="">Nutritional</div>
														<div className="">Guidance</div>
													</div>
												</div>
												<div className="border-t-[2px] border-[#F67A45]"></div>
												<div className="pt-[20px]"></div>
												<div className="">
													<div className="">Lorem Ipsum is simply dummy text of</div>
													<div className="hidden md:block">the printing and typesetting.</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="absolute right-0 bottom-0">
								<div className="font-[Teko] font-semibold text-[200px] h-[200px] uppercase group-[:not(:hover)]:opacity-20 transition-all duration-[.3s]">04</div>
							</div>
						</div>
					</div>
					<div className="">
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
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
												<img className="w-full" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/services/bg6s.png" alt=""/>
											</div>
										</div>
									</div>
								</div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-30"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-10 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 flex items-end p-[10px] md:p-[50px]">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
												<div className="flex gap-[30px]">
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[7px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[4px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[3px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[1px] border-[#D5BDA2]"></div>
													</div>
													<div className="pb-[20px]">
														<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/services/s6.svg" alt=""/>
													</div>
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[7px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[4px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[3px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[1px] border-[#D5BDA2]"></div>
													</div>
													<div className="font-[Teko] font-semibold text-[28px] leading-[1.1] uppercase">
														<div className="">CALISTHENICS</div>
														<div className="">CHALLENGE</div>
													</div>
												</div>
												<div className="border-t-[2px] border-[#D5BDA2]"></div>
												<div className="pt-[20px]"></div>
												<div className="opacity-0 md:opacity-100">
													<div className="">Lorem Ipsum is simply dummy text of</div>
													<div className="">the printing and typesetting.</div>
												</div>
											</div>
											<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
												<div className="flex gap-[30px]">
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[7px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[4px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[3px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[1px] border-[#F67A45]"></div>
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
																	<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
																	<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
																	<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
																	<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
																	<div className="group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
																		<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/services/s6.svg" alt=""/>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[7px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[4px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[3px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[1px] border-[#F67A45]"></div>
													</div>
													<div className="font-[Teko] font-semibold text-[28px] leading-[1.1] uppercase">
														<div className="">CALISTHENICS</div>
														<div className="">CHALLENGE</div>
													</div>
												</div>
												<div className="border-t-[2px] border-[#F67A45]"></div>
												<div className="pt-[20px]"></div>
												<div className="">
													<div className="">Lorem Ipsum is simply dummy text of</div>
													<div className="hidden md:block">the printing and typesetting.</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="absolute right-0 bottom-0">
								<div className="font-[Teko] font-semibold text-[200px] h-[200px] uppercase group-[:not(:hover)]:opacity-20 transition-all duration-[.3s]">05</div>
							</div>
						</div>
					</div>
					<div className="">
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
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
												<img className="w-full" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/services/bg1s.png" alt=""/>
											</div>
										</div>
									</div>
								</div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-30"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-10 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 flex items-end p-[10px] md:p-[50px]">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
												<div className="flex gap-[30px]">
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[7px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[4px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[3px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[1px] border-[#D5BDA2]"></div>
													</div>
													<div className="pb-[20px]">
														<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/services/s4.svg" alt=""/>
													</div>
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[7px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[4px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[3px] border-[#D5BDA2]"></div>
														<div className="flex-1 border-l-[1px] border-[#D5BDA2]"></div>
													</div>
													<div className="font-[Teko] font-semibold text-[28px] leading-[1.1] uppercase">
														<div className="">Fitness</div>
														<div className="">Assessments</div>
													</div>
												</div>
												<div className="border-t-[2px] border-[#D5BDA2]"></div>
												<div className="pt-[20px]"></div>
												<div className="opacity-0 md:opacity-100">
													<div className="">Lorem Ipsum is simply dummy text of</div>
													<div className="">the printing and typesetting.</div>
												</div>
											</div>
											<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
												<div className="flex gap-[30px]">
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[7px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[4px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[3px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[1px] border-[#F67A45]"></div>
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
																	<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
																	<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
																	<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
																	<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
																	<div className="group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
																		<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/services/s4.svg" alt=""/>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="flex flex-col items-center gap-[5px]">
														<div className="flex-1 border-l-[10px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[7px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[4px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[3px] border-[#F67A45]"></div>
														<div className="flex-1 border-l-[1px] border-[#F67A45]"></div>
													</div>
													<div className="font-[Teko] font-semibold text-[28px] leading-[1.1] uppercase">
														<div className="">Fitness</div>
														<div className="">Assessments</div>
													</div>
												</div>
												<div className="border-t-[2px] border-[#F67A45]"></div>
												<div className="pt-[20px]"></div>
												<div className="">
													<div className="">Lorem Ipsum is simply dummy text of</div>
													<div className="hidden md:block">the printing and typesetting.</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="absolute right-0 bottom-0">
								<div className="font-[Teko] font-semibold text-[200px] h-[200px] uppercase group-[:not(:hover)]:opacity-20 transition-all duration-[.3s]">06</div>
							</div>
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
						<div className="absolute top-0 right-0 bottom-0 w-1/2 border-[1px] border-[#F67A45] rounded-bl-full rounded-tl-full"></div>
						<div className="absolute top-0 right-0 bottom-0 m-auto h-3/4 w-1/2 border-[1px] border-[#F67A45] rounded-bl-full rounded-tl-full"></div>
						<div className="absolute top-0 right-0 bottom-0 m-auto h-2/4 w-1/2 border-[1px] border-[#F67A45] rounded-bl-full rounded-tl-full"></div>
						<div className="relative bg-[#F67A45] py-[10px] px-[30px]">Whether you're a beginner</div>
						<div className="flex-1 border-t-[1px] border-[#F67A45]"></div>
						<div className="flex-1 border-t-[3px] border-[#F67A45]"></div>
						<div className="flex-1 border-t-[4px] border-[#F67A45]"></div>
						<div className="flex-1 border-t-[7px] border-[#F67A45]"></div>
						<div className="flex-1 border-t-[10px] border-[#F67A45]"></div>
					</div>
					<div className="border-[10px] border-[#F67A45] bg-[#D5BDA2] text-[#01010F]">
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
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
										<div className="p-[50px]">
											<div className="text-center pb-[10px]">
												<div className="font-[Teko] font-semibold text-[36px]">SUBSCRIBE TO OUR NEWSLETTER</div>
											</div>
											<form action="#" className="h-[100px] flex items-center gap-[10px]">
												<div className="">Enter your email</div>
												<div className="flex-1">
													<div className="group/c relative">
														<div className="absolute top-0 right-0 bottom-0 left-0 border-l-[1px] border-[#D5BDA2] border-opacity-50 group-hover/c:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
														<div className="relative">
															<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.4s] transition-all duration-[.3s]">
																<input className="w-full h-[30px] px-[10px] group-[:not(:hover)]/c:bg-transparent"/>
															</div>
															<div className="group-hover/c:scale-y-0 group-hover/c:delay-0 delay-[.4s] transition-all duration-[.3s]">
																<div className="relative h-[30px] flex items-center">
																	<div className="flex-1 border-t-[2px] border-dotted border-[#01010F]"></div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<button className="">
													<img className="brightness-0" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/newsletter.svg" alt=""/>
												</button>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex-1 relative hidden xl:flex items-center">
						<div className="absolute top-0 left-0 bottom-0 w-1/2 border-[1px] border-[#F67A45] rounded-br-full rounded-tr-full"></div>
						<div className="absolute top-0 left-0 bottom-0 m-auto h-3/4 w-1/2 border-[1px] border-[#F67A45] rounded-br-full rounded-tr-full"></div>
						<div className="absolute top-0 left-0 bottom-0 m-auto h-2/4 w-1/2 border-[1px] border-[#F67A45] rounded-br-full rounded-tr-full"></div>
						<div className="flex-1 border-t-[10px] border-[#F67A45]"></div>
						<div className="flex-1 border-t-[7px] border-[#F67A45]"></div>
						<div className="flex-1 border-t-[4px] border-[#F67A45]"></div>
						<div className="flex-1 border-t-[3px] border-[#F67A45]"></div>
						<div className="flex-1 border-t-[1px] border-[#F67A45]"></div>
						<div className="relative bg-[#F67A45] py-[10px] px-[30px]">Seasoned fitness enthusiast</div>
					</div>
				</div>
			</div>
		</div>

		</div>
	);
}
