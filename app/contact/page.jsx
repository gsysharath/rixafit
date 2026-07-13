import PageBanner from '../../components/PageBanner';

export default function ContactPage() {
	return (
		<div className="bg-[#01010F] text-[#E7E7E7]">
			<PageBanner title="Contact" gradient={true} />
		<div className="">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<iframe className="w-full h-[500px] grayscale" src="https://www.google.com/maps?q=RIXA+FIT+Mahabubnagar&output=embed" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</div>

		{/* section */}
		<div className="pt-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<form action="#">
					<div className="xl:grid grid-cols-3">
						<div className="relative flex items-center">
							<div className="hidden xl:block absolute top-0 right-0 bottom-0 w-1/2 border-[1px] border-[#F67A45] rounded-bl-full rounded-tl-full"></div>
							<div className="hidden xl:block absolute top-0 right-0 bottom-0 m-auto h-3/4 w-1/2 border-[1px] border-[#F67A45] rounded-bl-full rounded-tl-full"></div>
							<div className="hidden xl:block absolute top-0 right-0 bottom-0 m-auto h-2/4 w-1/2 border-[1px] border-[#F67A45] rounded-bl-full rounded-tl-full"></div>
							<div className="relative bg-[#F67A45] py-[10px] px-[30px]">
								<div className="">Monday to Saturday:</div>
								<div className="my-[10px] border-t-[2px] border-[#01010F]"></div>
								<div className="">5-10 AM &amp; 5-10 PM</div>
							</div>
							<div className="hidden xl:block flex-1 border-t-[1px] border-[#F67A45]"></div>
							<div className="hidden xl:block flex-1 border-t-[3px] border-[#F67A45]"></div>
							<div className="hidden xl:block flex-1 border-t-[4px] border-[#F67A45]"></div>
							<div className="hidden xl:block flex-1 border-t-[7px] border-[#F67A45]"></div>
							<div className="hidden xl:block flex-1 border-t-[10px] border-[#F67A45]"></div>
						</div>
						<div className="border-[10px] border-[#F67A45] bg-[#D5BDA2] text-[#01010F] p-[50px]">
							<div className="text-center pb-[10px]">
								<div className="font-[Teko] font-semibold text-[30px] md:text-[36px] uppercase">How can we help?</div>
							</div>
							<div className="h-[100px] flex items-center gap-[10px]">
								<div className="">Write your name</div>
								<div className="flex-1">
									<div className="group/c relative">
										<div className="absolute top-0 right-0 bottom-0 left-0 group-hover/c:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.4s] transition-all duration-[.3s]">
												<input className="w-full h-[27px] px-[10px] bg-[#F67A45] group-[:not(:hover)]/c:bg-transparent"/>
											</div>
											<div className="group-hover/c:scale-y-0 group-hover/c:delay-0 delay-[.4s] transition-all duration-[.3s]">
												<div className="relative h-[27px] flex items-center">
													<div className="flex-1 border-t-[2px] border-dotted border-[#01010F]"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="">
									<i className="fa fa-user"></i>
								</div>
							</div>
							<div className="h-[100px] flex items-center gap-[10px]">
								<div className="">Enter your email</div>
								<div className="flex-1">
									<div className="group/c relative">
										<div className="absolute top-0 right-0 bottom-0 left-0 group-hover/c:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.4s] transition-all duration-[.3s]">
												<input className="w-full h-[27px] px-[10px] bg-[#F67A45] group-[:not(:hover)]/c:bg-transparent"/>
											</div>
											<div className="group-hover/c:scale-y-0 group-hover/c:delay-0 delay-[.4s] transition-all duration-[.3s]">
												<div className="relative h-[27px] flex items-center">
													<div className="flex-1 border-t-[2px] border-dotted border-[#01010F]"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="">
									<i className="fa fa-envelope"></i>
								</div>
							</div>
							<div className="h-[100px] flex items-center gap-[10px]">
								<div className="">Enter your phone</div>
								<div className="flex-1">
									<div className="group/c relative">
										<div className="absolute top-0 right-0 bottom-0 left-0 group-hover/c:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.4s] transition-all duration-[.3s]">
												<input className="w-full h-[27px] px-[10px] bg-[#F67A45] group-[:not(:hover)]/c:bg-transparent"/>
											</div>
											<div className="group-hover/c:scale-y-0 group-hover/c:delay-0 delay-[.4s] transition-all duration-[.3s]">
												<div className="relative h-[27px] flex items-center">
													<div className="flex-1 border-t-[2px] border-dotted border-[#01010F]"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="">
									<i className="fa fa-phone"></i>
								</div>
							</div>
							<div className="h-[100px] flex items-center gap-[10px]">
								<div className="">Write your message</div>
								<div className="flex-1">
									<div className="group/c relative">
										<div className="absolute top-0 right-0 bottom-0 left-0 group-hover/c:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.4s] transition-all duration-[.3s]">
												<input className="w-full h-[27px] px-[10px] bg-[#F67A45] group-[:not(:hover)]/c:bg-transparent"/>
											</div>
											<div className="group-hover/c:scale-y-0 group-hover/c:delay-0 delay-[.4s] transition-all duration-[.3s]">
												<div className="relative h-[27px] flex items-center">
													<div className="flex-1 border-t-[2px] border-dotted border-[#01010F]"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="">
									<i className="fa fa-pen"></i>
								</div>
							</div>
						</div>
						<div className="relative hidden xl:flex items-center">
							<div className="absolute top-0 left-0 bottom-0 w-1/2 border-[1px] border-[#F67A45] rounded-br-full rounded-tr-full"></div>
							<div className="absolute top-0 left-0 bottom-0 m-auto h-3/4 w-1/2 border-[1px] border-[#F67A45] rounded-br-full rounded-tr-full"></div>
							<div className="absolute top-0 left-0 bottom-0 m-auto h-2/4 w-1/2 border-[1px] border-[#F67A45] rounded-br-full rounded-tr-full"></div>
							<div className="flex-1 border-t-[10px] border-[#F67A45]"></div>
							<div className="flex-1 border-t-[7px] border-[#F67A45]"></div>
							<div className="flex-1 border-t-[4px] border-[#F67A45]"></div>
							<div className="flex-1 border-t-[3px] border-[#F67A45]"></div>
							<div className="flex-1 border-t-[1px] border-[#F67A45]"></div>
							<div className="relative bg-[#F67A45] py-[10px] px-[30px]">
								<div className="">Sunday:</div>
								<div className="my-[10px] border-t-[2px] border-[#01010F]"></div>
								<div className="">5:00 AM - 10:00 AM</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<div className="p-[50px] border-r-[1px] border-l-[1px] border-[#F67A45]"></div>
						<button className="group relative">
							<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-10 border-[1px] border-[#F67A45] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></span>
							<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></span>
							<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></span>
							<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></span>
							<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></span>
							<span className="relative h-[54px] w-[175px] flex justify-center items-center text-[12px] leading-[1]">
								<span className="relative font-[Teko] font-semibold text-[20px]">
									<span className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
										<span className="flex items-center gap-[10px]">
											<span className="">SEND MESSAGE</span>
											<span className="">
												<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
											</span>
										</span>
									</span>
									<span className="block group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
										<span className="flex items-center gap-[10px]">
											<span className="">SEND MESSAGE</span>
											<span className="">
												<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
											</span>
										</span>
									</span>
								</span>
							</span>
						</button>
					</div>
				</form>
			</div>
		</div>

		</div>
	);
}
