import PageBanner from '../../components/PageBanner';

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
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
												<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/about1.png" alt=""/>
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/about2.png" alt=""/>
												</div>
											</div>
										</div>
									</div>
									<div className="absolute top-0 left-0">
										<img className="bg-[#01010F] rounded-full animate-spin [animation:spin_10s_linear_infinite]" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/Circle.svg" alt=""/>
										<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
											<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/logo.svg" alt=""/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="hidden xl:block">
						<div className="font-[Teko] flex items-center gap-[15px] uppercase">
							<div className="font-semibold text-[60px] leading-[1]">GYM Fitness Meets</div>
							<div className="font-medium text-[12px] text-[#F67A45] relative top-[-5px] border-r-[2px] border-l-[2px] border-[#F67A45] px-[5px] [writing-mode:tb]">About Us</div>
							<div className="font-semibold text-[60px] leading-[1]">Here</div>
						</div>
						<div className="pt-[50px]"></div>
						<div className="text-[20px]">
							<div className="border-t-[2px] border-[#F67A45] border-opacity-30 h-[2px]"></div>
							<div className="flex items-center gap-[10px] py-[20px]">
								<div className="text-[#D5BDA2]">01.</div>
								<div className="">How do I know if my brakes need to be replaced?</div>
								<div className="flex-1 border-t-[10px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="flex-1 border-t-[7px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="flex-1 border-t-[4px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="flex-1 border-t-[3px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="flex-1 border-t-[1px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="text-[#F67A45]"><i className="fa fa-plus"></i></div>
							</div>
							<div className="border-t-[2px] border-[#F67A45] border-opacity-30 h-[2px]"></div>
							<div className="flex items-center gap-[10px] py-[20px]">
								<div className="text-[#D5BDA2]">02.</div>
								<div className="">How do I know which gym class is right for me?</div>
								<div className="flex-1 border-t-[10px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="flex-1 border-t-[7px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="flex-1 border-t-[4px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="flex-1 border-t-[3px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="flex-1 border-t-[1px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="text-[#F67A45]"><i className="fa fa-plus"></i></div>
							</div>
							<div className="border-t-[2px] border-[#F67A45] border-opacity-30 h-[2px]"></div>
							<div className="flex items-center gap-[10px] py-[20px]">
								<div className="text-[#D5BDA2]">03.</div>
								<div className="">Do I need to bring any equipment to a gym class?</div>
								<div className="flex-1 border-t-[10px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="flex-1 border-t-[7px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="flex-1 border-t-[4px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="flex-1 border-t-[3px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="flex-1 border-t-[1px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="text-[#F67A45]"><i className="fa fa-plus"></i></div>
							</div>
							<div className="border-t-[2px] border-[#F67A45] border-opacity-30 h-[2px]"></div>
							<div className="flex items-center gap-[10px] py-[20px]">
								<div className="text-[#D5BDA2]">04.</div>
								<div className="">Can I join a gym any type of class if I'm a beginner?</div>
								<div className="flex-1 border-t-[10px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="flex-1 border-t-[7px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="flex-1 border-t-[4px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="flex-1 border-t-[3px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="flex-1 border-t-[1px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="text-[#F67A45]"><i className="fa fa-plus"></i></div>
							</div>
							<div className="border-t-[2px] border-[#F67A45] border-opacity-30 h-[2px]"></div>
							<div className="flex items-center gap-[10px] py-[20px]">
								<div className="text-[#D5BDA2]">05.</div>
								<div className="">Expert Tips for Maximizing Your Gym Experience</div>
								<div className="flex-1 border-t-[10px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="flex-1 border-t-[7px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="flex-1 border-t-[4px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="flex-1 border-t-[3px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="flex-1 border-t-[1px] border-[#D5BDA2] border-opacity-50"></div>
								<div className="text-[#F67A45]"><i className="fa fa-plus"></i></div>
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
						<div className="font-[Teko] flex items-center gap-[15px] uppercase">
							<div className="hidden xl:block font-semibold text-[60px] leading-[1]">Our Upcoming</div>
							<div className="hidden xl:block font-medium text-[12px] text-[#F67A45] relative top-[-5px] border-r-[2px] border-l-[2px] border-[#F67A45] px-[5px] [writing-mode:tb]">Top Ten</div>
							<div className="font-semibold text-[60px] leading-[1]">Trainer</div>
						</div>
					</div>
					<div className="hidden md:block">
						<div className="flex items-center">
							<div className="group relative classes-prev">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
								<div className="relative h-[60px] w-[60px] flex justify-center items-center">
									<div className="relative font-[Teko] font-medium text-[20px]">
										<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
											<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-prev.svg" alt=""/>
										</div>
										<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
											<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-prev.svg" alt=""/>
										</div>
									</div>
								</div>
							</div>
							<div className="px-[50px] bg-white bg-opacity-25 h-[10px]"></div>
							<div className="group relative classes-next">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
								<div className="relative h-[60px] w-[60px] flex justify-center items-center">
									<div className="relative font-[Teko] font-medium text-[20px]">
										<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
											<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-next.svg" alt=""/>
										</div>
										<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
											<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-next.svg" alt=""/>
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
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
										<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
											<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/trainer1.png" alt=""/>
										</div>
									</div>
								</div>
							</div>
							<div className="flex items-center gap-[50px] pt-[30px]">
								<div className="">
									<div className="font-[Teko] font-semibold text-[28px] text-[#D5BDA2]">John Wick C.</div>
									<div className="text-[16px]">Co-Founder</div>
								</div>
								<div className="flex-1">
									<div className="flex items-center gap-[10px]">
										<div className="px-[10px] border-t-[1px] border-[#D5BDA2] border-opacity-50"></div>
										<div className="px-[10px] border-t-[3px] border-[#D5BDA2] border-opacity-50"></div>
										<div className="px-[10px] border-t-[4px] border-[#D5BDA2] border-opacity-50"></div>
										<div className="px-[10px] border-t-[7px] border-[#D5BDA2] border-opacity-50"></div>
										<div className="flex-1 border-t-[10px] border-[#D5BDA2] border-opacity-50"></div>
										<a className="group relative" href="#">
											<div className="absolute top-0 right-0 bottom-0 left-0 border-l-[1px] border-[#D5BDA2] border-opacity-50 group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-50 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="relative h-[60px] w-[60px] flex justify-center items-center">
												<div className="relative font-[Teko] font-medium text-[20px]">
													<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
														<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/trainer-arrow.svg" alt=""/>
													</div>
													<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]">
														<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
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
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
										<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
											<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/trainer2.png" alt=""/>
										</div>
									</div>
								</div>
							</div>
							<div className="flex items-center gap-[50px] pt-[30px]">
								<div className="">
									<div className="font-[Teko] font-semibold text-[28px] text-[#D5BDA2]">Ily Thompson</div>
									<div className="text-[16px]">Head Trainer</div>
								</div>
								<div className="hidden xl:block flex-1">
									<div className="flex items-center gap-[10px]">
										<div className="px-[10px] border-t-[1px] border-[#D5BDA2] border-opacity-50"></div>
										<div className="px-[10px] border-t-[3px] border-[#D5BDA2] border-opacity-50"></div>
										<div className="px-[10px] border-t-[4px] border-[#D5BDA2] border-opacity-50"></div>
										<div className="px-[10px] border-t-[7px] border-[#D5BDA2] border-opacity-50"></div>
										<div className="flex-1 border-t-[10px] border-[#D5BDA2] border-opacity-50"></div>
										<a className="group relative" href="#">
											<div className="absolute top-0 right-0 bottom-0 left-0 border-l-[1px] border-[#D5BDA2] border-opacity-50 group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-50 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="relative h-[60px] w-[60px] flex justify-center items-center">
												<div className="relative font-[Teko] font-medium text-[20px]">
													<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
														<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/trainer-arrow.svg" alt=""/>
													</div>
													<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]">
														<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
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
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
										<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
											<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/trainer3.png" alt=""/>
										</div>
									</div>
								</div>
							</div>
							<div className="flex items-center gap-[50px] pt-[30px]">
								<div className="">
									<div className="font-[Teko] font-semibold text-[28px] text-[#D5BDA2]">Alex Ramirez</div>
									<div className="text-[16px]">Nutrition Consultant</div>
								</div>
								<div className="hidden xl:block flex-1">
									<div className="flex items-center gap-[10px]">
										<div className="px-[10px] border-t-[1px] border-[#D5BDA2] border-opacity-50"></div>
										<div className="px-[10px] border-t-[3px] border-[#D5BDA2] border-opacity-50"></div>
										<div className="px-[10px] border-t-[4px] border-[#D5BDA2] border-opacity-50"></div>
										<div className="px-[10px] border-t-[7px] border-[#D5BDA2] border-opacity-50"></div>
										<div className="flex-1 border-t-[10px] border-[#D5BDA2] border-opacity-50"></div>
										<a className="group relative" href="#">
											<div className="absolute top-0 right-0 bottom-0 left-0 border-l-[1px] border-[#D5BDA2] border-opacity-50 group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-50 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="relative h-[60px] w-[60px] flex justify-center items-center">
												<div className="relative font-[Teko] font-medium text-[20px]">
													<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
														<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/trainer-arrow.svg" alt=""/>
													</div>
													<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]">
														<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
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
				<div className="my-[100px] border-t-[1px] border-[#D5BDA2]"></div>
				<div className="relative font-[Teko] leading-[1] font-semibold text-[60px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[100px] uppercase">
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
							<div className="border-l-[2px] border-[#F67A45]"></div>
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
							<div className="border-l-[2px] border-[#F67A45]"></div>
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
							<div className="border-l-[2px] border-[#F67A45]"></div>
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
							<div className="border-l-[2px] border-[#F67A45]"></div>
							<div className="text-[24px]">
								<div className="">Happy</div>
								<div className="">Clients</div>
							</div>
						</div>
					</div>
				</div>
				<div className="my-[100px] border-t-[1px] border-[#D5BDA2]"></div>
				<div className="flex">
					<div className="flex-1">
						<div className="">
							<div className="flex">
								<div className="flex items-center border-r-[1px] border-[#D5BDA2] border-opacity-50">
									<div className="font-[Teko] font-semibold text-[36px] pr-[20px] uppercase [writing-mode:tb]">2013</div>
								</div>
								<div className="">
									<div className="flex">
										<div className="">
											<div className="font-[Teko] font-semibold text-[24px] text-[#F67A45] ps-[30px]">Building Foundations</div>
											<div className="flex items-center gap-[5px] py-[20px]">
												<div className="flex-1 border-t-[10px] border-[#D5BDA2] border-opacity-50"></div>
												<div className="flex-1 border-t-[7px] border-[#D5BDA2] border-opacity-50"></div>
												<div className="flex-1 border-t-[4px] border-[#D5BDA2] border-opacity-50"></div>
												<div className="flex-1 border-t-[3px] border-[#D5BDA2] border-opacity-50"></div>
												<div className="flex-1 border-t-[1px] border-[#D5BDA2] border-opacity-50"></div>
											</div>
										</div>
									</div>
									<div className="ps-[30px]">
										<div className="">Lorem Ipsum is simply dummy text of</div>
										<div className="">the printing and typesetting.</div>
									</div>
								</div>
							</div>
							<div className="my-[100px] border-t-[1px] border-[#D5BDA2]"></div>
							<div className="flex">
								<div className="flex items-center border-r-[1px] border-[#D5BDA2] border-opacity-50">
									<div className="font-[Teko] font-semibold text-[36px] pr-[20px] uppercase [writing-mode:tb]">2017</div>
								</div>
								<div className="">
									<div className="flex">
										<div className="">
											<div className="font-[Teko] font-semibold text-[24px] text-[#F67A45] ps-[30px]">Enhancing Engagement</div>
											<div className="flex items-center gap-[5px] py-[20px]">
												<div className="flex-1 border-t-[10px] border-[#D5BDA2] border-opacity-50"></div>
												<div className="flex-1 border-t-[7px] border-[#D5BDA2] border-opacity-50"></div>
												<div className="flex-1 border-t-[4px] border-[#D5BDA2] border-opacity-50"></div>
												<div className="flex-1 border-t-[3px] border-[#D5BDA2] border-opacity-50"></div>
												<div className="flex-1 border-t-[1px] border-[#D5BDA2] border-opacity-50"></div>
											</div>
										</div>
									</div>
									<div className="ps-[30px]">
										<div className="">Lorem Ipsum is simply dummy text of</div>
										<div className="">the printing and typesetting.</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="hidden md:block">
						<div className="flex flex-col items-center gap-[50px] px-[30px] xl:border-r-[1px] border-l-[1px] border-[#D5BDA2]">
							<div className="">
								<img className="-rotate-90" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/about/arrow.svg" alt=""/>
							</div>
							<div className="font-[Teko] font-semibold text-[60px] uppercase pr-[10px] [writing-mode:tb]">Our Journey</div>
							<div className="">
								<img className="rotate-90" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/about/arrow.svg" alt=""/>
							</div>
						</div>
					</div>
					<div className="hidden xl:block flex-1">
						<div className="">
							<div className="flex justify-end">
								<div className="">
									<div className="flex justify-end">
										<div className="">
											<div className="font-[Teko] font-semibold text-[24px] text-[#F67A45] pr-[30px]">Improved Experience</div>
											<div className="flex items-center gap-[5px] py-[20px]">
												<div className="flex-1 border-t-[1px] border-[#D5BDA2] border-opacity-50"></div>
												<div className="flex-1 border-t-[3px] border-[#D5BDA2] border-opacity-50"></div>
												<div className="flex-1 border-t-[4px] border-[#D5BDA2] border-opacity-50"></div>
												<div className="flex-1 border-t-[7px] border-[#D5BDA2] border-opacity-50"></div>
												<div className="flex-1 border-t-[10px] border-[#D5BDA2] border-opacity-50"></div>
											</div>
										</div>
									</div>
									<div className="pr-[30px] text-right">
										<div className="">Lorem Ipsum is simply dummy text of</div>
										<div className="">the printing and typesetting.</div>
									</div>
								</div>
								<div className="flex items-center border-l-[1px] border-[#D5BDA2] border-opacity-50">
									<div className="font-[Teko] font-semibold text-[36px] pl-[20px] uppercase [writing-mode:tb]">2019</div>
								</div>
							</div>
							<div className="my-[100px] border-t-[1px] border-[#D5BDA2]"></div>
							<div className="flex justify-end">
								<div className="">
									<div className="flex justify-end">
										<div className="">
											<div className="font-[Teko] font-semibold text-[24px] text-[#F67A45] pr-[30px]">Technological Integration</div>
											<div className="flex items-center gap-[5px] py-[20px]">
												<div className="flex-1 border-t-[1px] border-[#D5BDA2] border-opacity-50"></div>
												<div className="flex-1 border-t-[3px] border-[#D5BDA2] border-opacity-50"></div>
												<div className="flex-1 border-t-[4px] border-[#D5BDA2] border-opacity-50"></div>
												<div className="flex-1 border-t-[7px] border-[#D5BDA2] border-opacity-50"></div>
												<div className="flex-1 border-t-[10px] border-[#D5BDA2] border-opacity-50"></div>
											</div>
										</div>
									</div>
									<div className="pr-[30px] text-right">
										<div className="">Lorem Ipsum is simply dummy text of</div>
										<div className="">the printing and typesetting.</div>
									</div>
								</div>
								<div className="flex items-center border-l-[1px] border-[#D5BDA2] border-opacity-50">
									<div className="font-[Teko] font-semibold text-[36px] pl-[20px] uppercase [writing-mode:tb]">2024</div>
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
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="origin-bottom group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
										<img className="w-full h-[350px] object-cover object-center" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/about/gallery1.png" alt=""/>
									</div>
								</div>
							</div>
						</div>
						<div className="absolute top-[30px] right-[30px] bottom-[30px] left-[30px]">
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
							<div className="w-[70px] h-[70px] flex items-center justify-center bg-white rounded-[20px] text-[70px] text-[#F67A45]">
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
									<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="origin-top group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
										<img className="w-full h-[350px] object-cover object-center" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/about/gallery2.png" alt=""/>
									</div>
								</div>
							</div>
						</div>
						<div className="absolute top-[30px] right-[30px] bottom-[30px] left-[30px]">
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
							<div className="w-[70px] h-[70px] flex items-center justify-center bg-white rounded-[20px] text-[70px] text-[#F67A45]">
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
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="origin-bottom group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
										<img className="w-full h-[350px] object-cover object-center" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/about/gallery3.png" alt=""/>
									</div>
								</div>
							</div>
						</div>
						<div className="absolute top-[30px] right-[30px] bottom-[30px] left-[30px]">
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
							<div className="w-[70px] h-[70px] flex items-center justify-center bg-white rounded-[20px] text-[70px] text-[#F67A45]">
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
									<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="origin-top group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
										<img className="w-full h-[350px] object-cover object-center" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/about/gallery4.png" alt=""/>
									</div>
								</div>
							</div>
						</div>
						<div className="absolute top-[30px] right-[30px] bottom-[30px] left-[30px]">
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
							<div className="w-[70px] h-[70px] flex items-center justify-center bg-white rounded-[20px] text-[70px] text-[#F67A45]">
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
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="origin-bottom group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
										<img className="w-full h-[350px] object-cover object-center" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/about/gallery5.png" alt=""/>
									</div>
								</div>
							</div>
						</div>
						<div className="absolute top-[30px] right-[30px] bottom-[30px] left-[30px]">
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
							<div className="w-[70px] h-[70px] flex items-center justify-center bg-white rounded-[20px] text-[70px] text-[#F67A45]">
								<i className="fa-brands fa-instagram"></i>
							</div>
						</div>
						</div>
					</div>
				</div>
			</div>
			<div className="group absolute top-0 bottom-0 left-[50px] my-auto h-[60px] w-[60px] hidden md:flex justify-center items-center gallery-prev">
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
				<div className="relative">
					<div className="relative font-[Teko] font-medium text-[20px]">
						<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
							<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-prev.svg" alt=""/>
						</div>
						<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
							<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-prev.svg" alt=""/>
						</div>
					</div>
				</div>
			</div>
			<div className="group absolute top-0 right-[50px] bottom-0 my-auto h-[60px] w-[60px] hidden md:flex justify-center items-center gallery-prev">
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
				<div className="relative">
					<div className="relative font-[Teko] font-medium text-[20px]">
						<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
							<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-next.svg" alt=""/>
						</div>
						<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
							<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-next.svg" alt=""/>
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
						<div className="font-[Teko] font-semibold text-[60px] leading-[1] uppercase text-[#F67A45]">
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
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
										<img className="brightness-0 invert" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/client1.svg" alt=""/>
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
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
										<img className="brightness-0 invert" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/client2.svg" alt=""/>
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
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
										<img className="brightness-0 invert" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/client3.svg" alt=""/>
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
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
										<img className="brightness-0 invert" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/client4.svg" alt=""/>
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
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
										<img className="brightness-0 invert" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/client5.svg" alt=""/>
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
							<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/about/testimonial.svg" alt=""/>
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/about/avatar.png" alt=""/>
												</div>
											</div>
										</div>
									</div>
									<div className="my-[10px] border-t-[2px] border-[#F67A45]"></div>
									<div className="font-[Teko] font-semibold text-[24px]">Mask Elon</div>
									<div className="text-[#D5BDA2]">From USA</div>
								</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="flex items-center gap-[50px]">
							<div className="">
								<div className="font-[Teko] font-semibold text-[36px] text-[#F67A45]">Video Feedback</div>
							</div>
							<div className="hidden md:block flex-1">
								<div className="flex items-center gap-[10px]">
									<div className="flex-1 border-t-[1px] border-[#D5BDA2] border-opacity-50"></div>
									<div className="flex-1 border-t-[3px] border-[#D5BDA2] border-opacity-50"></div>
									<div className="flex-1 border-t-[4px] border-[#D5BDA2] border-opacity-50"></div>
									<div className="flex-1 border-t-[7px] border-[#D5BDA2] border-opacity-50"></div>
									<div className="flex-1 border-t-[10px] border-[#D5BDA2] border-opacity-50"></div>
									<a className="group relative" href="#">
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-50 group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-50 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
										<div className="relative h-[60px] w-[60px] flex justify-center items-center">
											<div className="relative font-[Teko] font-medium text-[20px]">
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
						<div className="flex items-center gap-[10px] text-[#D5BDA2]">
							<div className=""><i className="fa-solid fa-star"></i></div>
							<div className=""><i className="fa-solid fa-star"></i></div>
							<div className=""><i className="fa-solid fa-star"></i></div>
							<div className=""><i className="fa-solid fa-star"></i></div>
							<div className=""><i className="fa-regular fa-star-half-stroke"></i></div>
							<div className="px-[10px] border-t-[1px] border-[#D5BDA2]"></div>
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
