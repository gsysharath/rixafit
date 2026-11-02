import { trainers } from '../../data/trainers';
import NewsletterForm from '../../components/forms/NewsletterForm';
import PageBanner from '../../components/PageBanner';

export const metadata = {
	title: 'Our Trainers',
	description: 'Meet the coaches and fitness experts at RIXA FIT Mahabubnagar - strength, HIIT, nutrition and mobility specialists.',
	alternates: { canonical: '/trainer' },
};

export default function TrainerPage() {
	return (
		<div className="bg-[#01010F] text-[#E7E7E7]">
			<PageBanner title="Trainer" gradient={true} />
		<div className="">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[50px]">
					<div className="">
						<div className="border-[1px] border-[#D4D4D4] border-opacity-30">
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
											<img className="" src={trainers[0].image} alt={`${trainers[0].name}, ${trainers[0].role}`}/>
										</div>
									</div>
								</div>
							</div>
							<div className="flex items-center gap-[50px] p-[30px]">
								<div className="">
									<div className="font-teko font-semibold text-[28px] text-[#D4D4D4]">{trainers[0].name}</div>
									<div className="text-[16px]">{trainers[0].role}</div>
								</div>
								<div className="hidden xl:block flex-1">
									<div className="flex items-center">
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
						<div className="border-[1px] border-[#D4D4D4] border-opacity-30">
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
											<img className="" src={trainers[1].image} alt={`${trainers[1].name}, ${trainers[1].role}`}/>
										</div>
									</div>
								</div>
							</div>
							<div className="flex items-center gap-[50px] p-[30px]">
								<div className="">
									<div className="font-teko font-semibold text-[28px] text-[#D4D4D4]">{trainers[1].name}</div>
									<div className="text-[16px]">{trainers[1].role}</div>
								</div>
								<div className="hidden xl:block flex-1">
									<div className="flex items-center">
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
						<div className="border-[1px] border-[#D4D4D4] border-opacity-30">
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
											<img className="" src={trainers[2].image} alt={`${trainers[2].name}, ${trainers[2].role}`}/>
										</div>
									</div>
								</div>
							</div>
							<div className="flex items-center gap-[50px] p-[30px]">
								<div className="">
									<div className="font-teko font-semibold text-[28px] text-[#D4D4D4]">{trainers[2].name}</div>
									<div className="text-[16px]">{trainers[2].role}</div>
								</div>
								<div className="hidden xl:block flex-1">
									<div className="flex items-center">
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
					<div className="">
						<div className="border-[1px] border-[#D4D4D4] border-opacity-30">
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
											<img className="" src={trainers[3].image} alt={`${trainers[3].name}, ${trainers[3].role}`}/>
										</div>
									</div>
								</div>
							</div>
							<div className="flex items-center gap-[50px] p-[30px]">
								<div className="">
									<div className="font-teko font-semibold text-[28px] text-[#D4D4D4]">{trainers[3].name}</div>
									<div className="text-[16px]">{trainers[3].role}</div>
								</div>
								<div className="hidden xl:block flex-1">
									<div className="flex items-center">
										<div className="px-[10px] border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
										<div className="px-[10px] border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
										<div className="px-[10px] border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
										<div className="px-[10px] border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
										<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
										<a className="group relative" href={`/trainer/${trainers[3].slug}`} aria-label={`${trainers[3].name} profile`}>
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
						<div className="border-[1px] border-[#D4D4D4] border-opacity-30">
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
											<img className="" src={trainers[4].image} alt={`${trainers[4].name}, ${trainers[4].role}`}/>
										</div>
									</div>
								</div>
							</div>
							<div className="flex items-center gap-[50px] p-[30px]">
								<div className="">
									<div className="font-teko font-semibold text-[28px] text-[#D4D4D4]">{trainers[4].name}</div>
									<div className="text-[16px]">{trainers[4].role}</div>
								</div>
								<div className="hidden xl:block flex-1">
									<div className="flex items-center">
										<div className="px-[10px] border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
										<div className="px-[10px] border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
										<div className="px-[10px] border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
										<div className="px-[10px] border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
										<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
										<a className="group relative" href={`/trainer/${trainers[4].slug}`} aria-label={`${trainers[4].name} profile`}>
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
						<div className="border-[1px] border-[#D4D4D4] border-opacity-30">
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
											<img className="" src={trainers[5].image} alt={`${trainers[5].name}, ${trainers[5].role}`}/>
										</div>
									</div>
								</div>
							</div>
							<div className="flex items-center gap-[50px] p-[30px]">
								<div className="">
									<div className="font-teko font-semibold text-[28px] text-[#D4D4D4]">{trainers[5].name}</div>
									<div className="text-[16px]">{trainers[5].role}</div>
								</div>
								<div className="hidden xl:block flex-1">
									<div className="flex items-center">
										<div className="px-[10px] border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
										<div className="px-[10px] border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
										<div className="px-[10px] border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
										<div className="px-[10px] border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
										<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
										<a className="group relative" href={`/trainer/${trainers[5].slug}`} aria-label={`${trainers[5].name} profile`}>
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
						<div className="origin-left bg-[#D4D4D4] text-[#01010F] overflow-hidden py-[20px] transition-all duration-[.3s]">
							<div className="flex whitespace-nowrap items-center justify-center gap-[30px] font-teko font-semibold text-[28px] uppercase">
								<div className="">Rise up</div>
								<img className="" src="/images/home/sliding.svg" alt=""/>
								<div className="">show up</div>
								<img className="" src="/images/home/sliding.svg" alt=""/>
								<div className="">never give up</div>
								<img className="" src="/images/home/sliding.svg" alt=""/>
								<div className="">Stronger every rep</div>
								<img className="" src="/images/home/sliding.svg" alt=""/>
								<div className="">prouder every step</div>
								<img className="" src="/images/home/sliding.svg" alt=""/>
								<div className="">Push your limits</div>
								<img className="" src="/images/home/sliding.svg" alt=""/>
								<div className="">stay humble</div>
								<img className="" src="/images/home/sliding.svg" alt=""/>
								<div className="">exceed your expectations</div>
								<img className="" src="/images/home/sliding.svg" alt=""/>
								<div className="">be proud</div>
								<img className="" src="/images/home/sliding.svg" alt=""/>
								<div className="">Believe in yourself</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="origin-left bg-[#D4D4D4] text-[#01010F] overflow-hidden py-[20px] transition-all duration-[.3s]">
							<div className="flex whitespace-nowrap items-center justify-center gap-[30px] font-teko font-semibold text-[28px] uppercase">
								<div className="">Rise up</div>
								<img className="" src="/images/home/sliding.svg" alt=""/>
								<div className="">show up</div>
								<img className="" src="/images/home/sliding.svg" alt=""/>
								<div className="">never give up</div>
								<img className="" src="/images/home/sliding.svg" alt=""/>
								<div className="">Stronger every rep</div>
								<img className="" src="/images/home/sliding.svg" alt=""/>
								<div className="">prouder every step</div>
								<img className="" src="/images/home/sliding.svg" alt=""/>
								<div className="">Push your limits</div>
								<img className="" src="/images/home/sliding.svg" alt=""/>
								<div className="">stay humble</div>
								<img className="" src="/images/home/sliding.svg" alt=""/>
								<div className="">exceed your expectations</div>
								<img className="" src="/images/home/sliding.svg" alt=""/>
								<div className="">be proud</div>
								<img className="" src="/images/home/sliding.svg" alt=""/>
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
				<div className="font-teko font-semibold leading-[1] uppercase text-center">
					<div className="text-[150px]">Contact With OUR</div>
					<div className="flex justify-center items-center gap-[10px]">
						<div className="font-oswald text-[185px] text-transparent [-webkit-text-stroke:1px_#D4D4D4]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">T</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">T</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">T</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">T</div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													T
												</div>
											</div>
										</div>
										<div className="">
											<div className="relative">
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">r</div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													r
												</div>
											</div>
										</div>
										<div className="">
											<div className="relative">
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">a</div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													a
												</div>
											</div>
										</div>
										<div className="">
											<div className="relative">
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">i</div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													i
												</div>
											</div>
										</div>
										<div className="">
											<div className="relative">
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">n</div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													n
												</div>
											</div>
										</div>
										<div className="">
											<div className="relative">
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">e</div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													e
												</div>
											</div>
										</div>
										<div className="">
											<div className="relative">
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">r</div>
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
						<a className="w-[126px] h-[126px] text-[24px] text-[#01010F] bg-white hover:bg-[#D4D4D4] rounded-full flex items-center justify-center" href="/contact">
							<div className="">
								<div className="">CONTACT</div>
								<div className="flex items-center gap-[10px]">
									<div className="">US</div>
									<div className="">
										<img className="brightness-0" src="/images/home/hero-next.svg" alt=""/>
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
