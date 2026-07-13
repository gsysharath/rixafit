import PageBanner from '../../components/PageBanner';

export default function TrainerDetailsPage() {
	return (
		<div className="bg-[#01010F] text-[#E7E7E7]">
			<PageBanner title="Trainer" gradient={false} />
		<div className="pt-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-[50px]">
					<div className="">
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
											<img className="w-full" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/trainer-details/t.png" alt=""/>
										</div>
									</div>
								</div>
							</div>
							<div className="absolute top-[50px] left-[30px]">
								<div className="flex flex-col items-center gap-[10px]">
									<a className="group relative" href="#">
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] animate-ping"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
										<div className="relative h-[60px] w-[60px] flex justify-center items-center">
											<div className="relative font-[Teko] font-medium text-[20px]">
												<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<i className="fa fa-play"></i>
												</div>
												<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<i className="fa fa-play"></i>
												</div>
											</div>
										</div>
									</a>
									<div className="py-[10px] border-l-[10px] border-[#F67A45]"></div>
									<div className="py-[10px] border-l-[7px] border-[#F67A45]"></div>
									<div className="py-[10px] border-l-[4px] border-[#F67A45]"></div>
									<div className="py-[10px] border-l-[3px] border-[#F67A45]"></div>
									<div className="py-[10px] border-l-[1px] border-[#F67A45]"></div>
									<div className="hidden md:block [writing-mode:tb]">Video Introduction</div>
								</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="font-[Teko] font-semibold text-[36px] uppercase">About John Wick C.</div>
						<div className="pt-[30px]"></div>
						<div className="flex justify-between">
							<div className="">
								<img className="w-[50px] md:w-auto" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/trainer-details/b1.svg" alt=""/>
							</div>
							<div className="">
								<img className="w-[50px] md:w-auto" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/trainer-details/b2.svg" alt=""/>
							</div>
							<div className="">
								<img className="w-[50px] md:w-auto" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/trainer-details/b3.svg" alt=""/>
							</div>
							<div className="">
								<img className="w-[50px] md:w-auto" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/trainer-details/b4.svg" alt=""/>
							</div>
						</div>
						<div className="pt-[50px]"></div>
						<div className="">
							<div className="">We're thrilled to have you here as we embark on a journey towards better</div>
							<div className="">health, strength, and vitality. At our gym, we believe that fitness is</div>
							<div className="">not just a hobby but a way of life. Whether you're a seasoned athlete</div>
							<div className=""> or a beginner taking the first steps towards your fitness journey.</div>
						</div>
						<div className="pt-[50px]"></div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
							<div className="">
								<div className="flex gap-[10px]">
									<div className="w-[72px] text-[#F67A45]">Address:</div>
									<div className="">
										<div className="">901 N Pitt Str., Suite 170</div>
										<div className="">Alexandria, NY, USA</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="flex gap-[10px]">
									<div className="w-[72px] text-[#F67A45]">Website:</div>
									<div className="">www.gymfito.com</div>
								</div>
							</div>
							<div className="">
								<div className="flex gap-[10px]">
									<div className="w-[72px] text-[#F67A45]">Email:</div>
									<div className="">example@email.com</div>
								</div>
							</div>
							<div className="">
								<div className="flex gap-[10px]">
									<div className="w-[72px] text-[#F67A45]">Phone:</div>
									<div className="">(406) 555-0120</div>
								</div>
							</div>
						</div>
						<div className="hidden md:block pt-[50px]"></div>
						<div className="hidden md:flex items-center gap-[20px]">
							<div className="text-[#F67A45]">Specialized Area:</div>
							<div className="px-[10px] py-[5px] border-[1px] border-[#D5BDA2] rounded-full">Cardio</div>
							<div className="px-[10px] py-[5px] border-[1px] border-[#D5BDA2] rounded-full">Fitness</div>
							<div className="px-[10px] py-[5px] border-[1px] border-[#D5BDA2] rounded-full">Wellness</div>
							<div className="px-[10px] py-[5px] border-[1px] border-[#D5BDA2] rounded-full">Boxing</div>
						</div>
						<div className="pt-[50px]"></div>
						<div className="flex items-center gap-[20px]">
							<div className="text-[#F67A45]">Follow:</div>
							<div className=""><i className="fa-brands fa-facebook-f"></i></div>
							<div className=""><i className="fa-brands fa-linkedin"></i></div>
							<div className=""><i className="fa-brands fa-x-twitter"></i></div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="py-[150px]">
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
						<div className="origin-left bg-[#D5BDA2] text-[#01010F] overflow-hidden py-[20px] transition-all duration-[.3s]">
							<div className="flex whitespace-nowrap items-center justify-center gap-[30px] font-[Teko] font-semibold text-[28px] uppercase">
								<div className="">Rise up</div>
								<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding.svg" alt=""/>
								<div className="">show up</div>
								<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding.svg" alt=""/>
								<div className="">never give up</div>
								<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding.svg" alt=""/>
								<div className="">Stronger every rep</div>
								<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding.svg" alt=""/>
								<div className="">prouder every step</div>
								<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding.svg" alt=""/>
								<div className="">Push your limits</div>
								<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding.svg" alt=""/>
								<div className="">stay humble</div>
								<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding.svg" alt=""/>
								<div className="">exceed your expectations</div>
								<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding.svg" alt=""/>
								<div className="">be proud</div>
								<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding.svg" alt=""/>
								<div className="">Believe in yourself</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="origin-left bg-[#D5BDA2] text-[#01010F] overflow-hidden py-[20px] transition-all duration-[.3s]">
							<div className="flex whitespace-nowrap items-center justify-center gap-[30px] font-[Teko] font-semibold text-[28px] uppercase">
								<div className="">Rise up</div>
								<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding.svg" alt=""/>
								<div className="">show up</div>
								<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding.svg" alt=""/>
								<div className="">never give up</div>
								<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding.svg" alt=""/>
								<div className="">Stronger every rep</div>
								<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding.svg" alt=""/>
								<div className="">prouder every step</div>
								<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding.svg" alt=""/>
								<div className="">Push your limits</div>
								<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding.svg" alt=""/>
								<div className="">stay humble</div>
								<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding.svg" alt=""/>
								<div className="">exceed your expectations</div>
								<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding.svg" alt=""/>
								<div className="">be proud</div>
								<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding.svg" alt=""/>
								<div className="">Believe in yourself</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="hidden xl:block pb-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="font-[Teko] font-semibold leading-[1] uppercase text-center">
					<div className="text-[150px]">Contact With OUR</div>
					<div className="flex justify-center items-center gap-[10px]">
						<div className="font-[Oswald] text-[185px] text-transparent [-webkit-text-stroke:1px_#D5BDA2]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">T</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">T</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">T</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">T</div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													T
												</div>
											</div>
										</div>
										<div className="">
											<div className="relative">
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">r</div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													r
												</div>
											</div>
										</div>
										<div className="">
											<div className="relative">
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">a</div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													a
												</div>
											</div>
										</div>
										<div className="">
											<div className="relative">
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">i</div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													i
												</div>
											</div>
										</div>
										<div className="">
											<div className="relative">
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">n</div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													n
												</div>
											</div>
										</div>
										<div className="">
											<div className="relative">
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">e</div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													e
												</div>
											</div>
										</div>
										<div className="">
											<div className="relative">
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">r</div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													r
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="text-[142px]">&#128170;</div>
						<a className="w-[126px] h-[126px] text-[24px] text-[#01010F] bg-white hover:bg-[#D5BDA2] rounded-full flex items-center justify-center" href="#">
							<div className="">
								<div className="">CONTACT</div>
								<div className="flex items-center gap-[10px]">
									<div className="">US</div>
									<div className="">
										<img className="brightness-0" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-next.svg" alt=""/>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="hidden xl:block">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="flex">
					<div className="flex-1 relative flex items-center">
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
					<div className="flex-1 relative flex items-center">
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
