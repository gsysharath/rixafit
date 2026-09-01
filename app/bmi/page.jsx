import PageBanner from '../../components/PageBanner';
import BmiCalculator from '../../components/BmiCalculator';

export default function BmiPage() {
	return (
		<div className="bg-[#01010F] text-[#E7E7E7]">
			<PageBanner title="BMI" gradient={true} />
			<BmiCalculator />

		{/* section */}
		<div className="hidden xl:block py-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="flex justify-center font-[Teko] font-semibold text-[225px] leading-[1]">
					<div className="font-[Oswald] text-[185px] leading-[1] text-transparent [-webkit-text-stroke:1px_#D5BDA2]">
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
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">C</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">C</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">C</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">C</div>
											<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
												C
											</div>
										</div>
									</div>
									<div className="">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">H</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">H</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">H</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">H</div>
											<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
												H
											</div>
										</div>
									</div>
									<div className="">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">O</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">O</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">O</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">O</div>
											<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
												O
											</div>
										</div>
									</div>
									<div className="">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">O</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">O</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">O</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">O</div>
											<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
												O
											</div>
										</div>
									</div>
									<div className="">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">S</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">S</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">S</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">S</div>
											<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
												S
											</div>
										</div>
									</div>
									<div className="">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">E</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">E</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">E</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">E</div>
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
						<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/classes/animated-element.svg" alt=""/>
					</div>
					<div className="">
						<div className="flex items-center gap-[10px] pr-[120px]">
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
						<div className="origin-left bg-[#D5BDA2] bg-opacity-80 text-[#01010F] overflow-hidden py-[20px] transition-all duration-[.3s]">
							<div className="flex whitespace-nowrap items-center justify-center gap-[30px] font-[Teko] font-semibold text-[28px] uppercase">
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
						<div className="origin-left bg-[#D5BDA2] bg-opacity-80 text-[#01010F] overflow-hidden py-[20px] transition-all duration-[.3s]">
							<div className="flex whitespace-nowrap items-center justify-center gap-[30px] font-[Teko] font-semibold text-[28px] uppercase">
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
