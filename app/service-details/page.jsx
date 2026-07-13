import PageBanner from '../../components/PageBanner';

export default function ServiceDetailsPage() {
	return (
		<div className="bg-[#01010F] text-[#E7E7E7]">
			<PageBanner title="SERVICES" gradient={false} />
		<div className="py-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="flex">
					<div className="">
						<div className="font-[Teko] font-semibold text-[28px] uppercase">BOXING Tips and Techniques:</div>
						<div className="flex items-center gap-[5px] pt-[10px] pb-[30px]">
							<div className="flex-1 border-t-[10px] border-[#F67A45] border-opacity-50"></div>
							<div className="flex-1 border-t-[7px] border-[#F67A45] border-opacity-50"></div>
							<div className="flex-1 border-t-[4px] border-[#F67A45] border-opacity-50"></div>
							<div className="flex-1 border-t-[3px] border-[#F67A45] border-opacity-50"></div>
							<div className="flex-1 border-t-[1px] border-[#F67A45] border-opacity-50"></div>
						</div>
					</div>
				</div>
				<div className="">
					<div className="">Achieving your fitness goals can sometimes feel daunting, but fear not – our team of certified personal trainers is here to guide and support you every</div>
					<div className="hidden xl:block">step of the way. Whether you're looking to lose weight, build muscle, or improve your overall fitness, our trainers will work closely with you to</div>
					<div className="hidden xl:block">develop a customized workout plan tailored to your specific goals and abilities.</div>
				</div>
				<div className="pt-[50px]"></div>
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
					<div className="hidden xl:block">
						<div className="flex flex-col gap-[20px]">
							<div className="flex items-center gap-[10px]">
								<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#F67A45] bg-opacity-50 rounded-full">
									<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/check.svg" alt=""/>
								</div>
								<div className="">Use of cardio & strength equipment</div>
							</div>
							<div className="flex items-center gap-[10px]">
								<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#F67A45] bg-opacity-50 rounded-full">
									<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/check.svg" alt=""/>
								</div>
								<div className="">Access to locker rooms</div>
							</div>
							<div className="flex items-center gap-[10px]">
								<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#F67A45] bg-opacity-50 rounded-full">
									<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/check.svg" alt=""/>
								</div>
								<div className="">Discounted rates on group fitness</div>
							</div>
						</div>
					</div>
					<div className="hidden md:block">
						<div className="flex flex-col gap-[20px]">
							<div className="flex items-center gap-[10px]">
								<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#F67A45] bg-opacity-50 rounded-full">
									<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/check.svg" alt=""/>
								</div>
								<div className="">Goal setting session with a trainer</div>
							</div>
							<div className="flex items-center gap-[10px]">
								<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#F67A45] bg-opacity-50 rounded-full">
									<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/check.svg" alt=""/>
								</div>
								<div className="">Gym facilities during hours</div>
							</div>
							<div className="flex items-center gap-[10px]">
								<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#F67A45] bg-opacity-50 rounded-full">
									<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/check.svg" alt=""/>
								</div>
								<div className="">Use of cardio &amp; strength equipment</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="flex flex-col gap-[20px]">
							<div className="flex items-center gap-[10px]">
								<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#F67A45] bg-opacity-50 rounded-full">
									<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/check.svg" alt=""/>
								</div>
								<div className="">Access to locker rooms</div>
							</div>
							<div className="flex items-center gap-[10px]">
								<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#F67A45] bg-opacity-50 rounded-full">
									<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/check.svg" alt=""/>
								</div>
								<div className="">Discounted rates on group fitness</div>
							</div>
							<div className="flex items-center gap-[10px]">
								<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#F67A45] bg-opacity-50 rounded-full">
									<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/check.svg" alt=""/>
								</div>
								<div className="">Goal setting session with a trainer</div>
							</div>
						</div>
					</div>
				</div>
				<div className="pt-[50px]"></div>
				<div className="">
					<div className="">Thank you for taking the time to learn more about RIXA FIT and how we can help you achieve your fitness goals. With our state-of-the-art facilities,</div>
					<div className="">expert personal training services, diverse group fitness classes, nutritional guidance, and supportive community, there's no limit to what you can</div>
					<div className="hidden xl:block">accomplish. So why wait?. Join us today and take the first step towards a healthier, happier you!</div>
				</div>
				<div className="pt-[100px]"></div>
				<div className="md:flex gap-[30px]">
					<div className="hidden xl:block flex-1">
						<div className="relative">
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
											<img className="w-full h-[451px] object-cover object-center" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/trainer1.png" alt=""/>
										</div>
									</div>
								</div>
							</div>
							<div className="absolute right-0 bottom-0 left-0">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-30"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-30"></div>
								<div className="relative flex items-center gap-[50px] p-[30px]">
									<div className="">
										<div className="font-[Teko] font-semibold text-[28px] text-[#D5BDA2]">John Wick C.</div>
										<div className="text-[16px]">Co-Founder</div>
									</div>
									<div className="flex-1">
										<div className="flex items-center gap-[5px]">
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
						<div className="pt-[30px]"></div>
						<div className="relative">
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
											<img className="w-full h-[451px] object-cover object-center" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/trainer2.png" alt=""/>
										</div>
									</div>
								</div>
							</div>
							<div className="absolute right-0 bottom-0 left-0">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-30"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-30"></div>
								<div className="relative flex items-center gap-[50px] p-[30px]">
									<div className="">
										<div className="font-[Teko] font-semibold text-[28px] text-[#D5BDA2]">Ily Thompson</div>
										<div className="text-[16px]">Head Trainer</div>
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
					</div>
					<div className="">
						<div className="sticky top-0">
							<div className="grid grid-cols-2 gap-[10px] text-center">
								<div className="">
									<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
										<div className=" font-[Teko] font-semibold text-[24px]">BOXING</div>
										<div className="text-[16px]">Sat - 2.00-8.00</div>
									</div>
								</div>
								<div className="">
									<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
										<div className=" font-[Teko] font-semibold text-[24px]">YOGA</div>
										<div className="text-[16px]">Sat - 4.00-6.00</div>
									</div>
								</div>
								<div className="">
									<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
										<div className=" font-[Teko] font-semibold text-[24px]">YOGA</div>
										<div className="text-[16px]">Sun - 1.00-3.00</div>
									</div>
								</div>
								<div className=""></div>
								<div className=""></div>
								<div className="">
									<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
										<div className=" font-[Teko] font-semibold text-[24px]">BOXING</div>
										<div className="text-[16px]">Mon - 2.00-8.00</div>
									</div>
								</div>
								<div className="">
									<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
										<div className=" font-[Teko] font-semibold text-[24px]">BOXING</div>
										<div className="text-[16px]">Thu - 2.00-8.00</div>
									</div>
								</div>
								<div className=""></div>
								<div className="">
									<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
										<div className=" font-[Teko] font-semibold text-[24px]">BOXING</div>
										<div className="text-[16px]">Wed - 2.00-4.00</div>
									</div>
								</div>
								<div className="">
									<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
										<div className=" font-[Teko] font-semibold text-[24px]">KICKBOXING</div>
										<div className="text-[16px]">Wed - 2.00-8.00</div>
									</div>
								</div>
								<div className="">
									<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
										<div className=" font-[Teko] font-semibold text-[24px]">BOXING</div>
										<div className="text-[16px]">Thu - 4.00-6.00</div>
									</div>
								</div>
								<div className="">
									<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
										<div className=" font-[Teko] font-semibold text-[24px]">BOXING</div>
										<div className="text-[16px]">Sat - 4.00-6.00</div>
									</div>
								</div>
								<div className="">
									<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
										<div className=" font-[Teko] font-semibold text-[24px]">KICKBOXING</div>
										<div className="text-[16px]">Wed - 6.00-8.00</div>
									</div>
								</div>
								<div className="">
									<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
										<div className=" font-[Teko] font-semibold text-[24px]">BOXING</div>
										<div className="text-[16px]">Fri - 1.00-3.00</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="hidden md:block flex-1">
						<div className="relative">
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
											<img className="w-full h-[451px] object-cover object-center" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/class1.png" alt=""/>
										</div>
									</div>
								</div>
							</div>
							<div className="absolute right-0 bottom-0 left-0">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#01010F] from-70% to-transparent to-70% opacity-30"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#F67A45] from-70% to-transparent to-70% opacity-30"></div>
								<div className="relative p-[30px] ">
									<div className="font-[Teko] font-semibold text-[28px]">Kickboxing</div>
									<div className="flex justify-start">
										<div className="">
											<div className="border-t-[2px] border-[#01010F]"></div>
											<div className="border-t-[2px] border-[#01010F] mr-[10px] mt-[3px]"></div>
											<div className="border-t-[2px] border-[#01010F] mr-[20px] mt-[3px]"></div>
											<div className="mt-[10px]"></div>
											<div className="">Stadium</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pt-[30px]"></div>
						<div className="relative">
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
											<img className="w-full h-[451px] object-cover object-center" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/class2.png" alt=""/>
										</div>
									</div>
								</div>
							</div>
							<div className="absolute right-0 bottom-0 left-0">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#01010F] from-70% to-transparent to-70% opacity-30"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#F67A45] from-70% to-transparent to-70% opacity-30"></div>
								<div className="relative p-[30px] ">
									<div className="font-[Teko] font-semibold text-[28px]">Body Pump</div>
									<div className="flex justify-start">
										<div className="">
											<div className="border-t-[2px] border-[#01010F]"></div>
											<div className="border-t-[2px] border-[#01010F] mr-[10px] mt-[3px]"></div>
											<div className="border-t-[2px] border-[#01010F] mr-[20px] mt-[3px]"></div>
											<div className="mt-[10px]"></div>
											<div className="">Gym Center</div>
										</div>
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
				<div className="relative">
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
									<img className="w-full" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/service-details/kickboxing.png" alt=""/>
								</div>
							</div>
						</div>
					</div>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-50"></div>
					<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center">
						<div className="p-[10px] md:p-[50px]">
							<div className="font-[Teko] font-semibold text-[60px] uppercase">Kickboxing</div>
							<div className="">
								<div className="">Welcome to our gym's official blog! We're thrilled</div>
								<div className="hidden md:block">to have you here as we embark on a journey</div>
								<div className="hidden md:block">towards better health, strength, and vitality.</div>
							</div>
							<div className="md:pt-[50px]"></div>
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
