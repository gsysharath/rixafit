import { notFound } from 'next/navigation';
import { trainers } from '../../../data/trainers';
import { classes } from '../../../data/classes';
import { getService, services } from '../../../data/services';
import NewsletterForm from '../../../components/forms/NewsletterForm';
import PageBanner from '../../../components/PageBanner';

export const dynamicParams = false;

export function generateStaticParams() {
	return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const service = getService(slug);
	if (!service) return {};
	return {
		title: service.name,
		description: service.description,
		alternates: { canonical: `/services/${service.slug}` },
		openGraph: { title: `${service.name} | RIXA FIT`, description: service.summary, images: [service.image] },
	};
}

export default async function ServiceDetailsPage({ params }) {
	const { slug } = await params;
	const service = getService(slug);
	if (!service) notFound();

	return (
		<div className="bg-[#01010F] text-[#E7E7E7]">
			<PageBanner title={service.name} gradient={false} crumbs={[{ label: 'Services', href: '/services' }, { label: service.name }]} />
		<div className="py-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="flex">
					<div className="">
						<h2 className="font-teko font-semibold text-[28px] uppercase">{service.name}:</h2>
						<div className="flex items-center gap-[5px] pt-[10px] pb-[30px]">
							<div className="flex-1 border-t-[10px] border-[#E22C32] border-opacity-50"></div>
							<div className="flex-1 border-t-[7px] border-[#E22C32] border-opacity-50"></div>
							<div className="flex-1 border-t-[4px] border-[#E22C32] border-opacity-50"></div>
							<div className="flex-1 border-t-[3px] border-[#E22C32] border-opacity-50"></div>
							<div className="flex-1 border-t-[1px] border-[#E22C32] border-opacity-50"></div>
						</div>
					</div>
				</div>
				<div className="">
					<div className="">{service.description}</div>
				</div>
				<div className="pt-[50px]"></div>
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
					<div className="hidden xl:block">
						<div className="flex flex-col gap-[20px]">
							<div className="flex items-center gap-[10px]">
								<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#971A1E] bg-opacity-50 rounded-full">
									<img className="" src="/images/home/check.svg" alt=""/>
								</div>
								<div className="">Use of cardio & strength equipment</div>
							</div>
							<div className="flex items-center gap-[10px]">
								<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#971A1E] bg-opacity-50 rounded-full">
									<img className="" src="/images/home/check.svg" alt=""/>
								</div>
								<div className="">Access to locker rooms</div>
							</div>
							<div className="flex items-center gap-[10px]">
								<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#971A1E] bg-opacity-50 rounded-full">
									<img className="" src="/images/home/check.svg" alt=""/>
								</div>
								<div className="">Discounted rates on group fitness</div>
							</div>
						</div>
					</div>
					<div className="hidden md:block">
						<div className="flex flex-col gap-[20px]">
							<div className="flex items-center gap-[10px]">
								<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#971A1E] bg-opacity-50 rounded-full">
									<img className="" src="/images/home/check.svg" alt=""/>
								</div>
								<div className="">Goal setting session with a trainer</div>
							</div>
							<div className="flex items-center gap-[10px]">
								<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#971A1E] bg-opacity-50 rounded-full">
									<img className="" src="/images/home/check.svg" alt=""/>
								</div>
								<div className="">Gym facilities during hours</div>
							</div>
							<div className="flex items-center gap-[10px]">
								<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#971A1E] bg-opacity-50 rounded-full">
									<img className="" src="/images/home/check.svg" alt=""/>
								</div>
								<div className="">Use of cardio &amp; strength equipment</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="flex flex-col gap-[20px]">
							<div className="flex items-center gap-[10px]">
								<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#971A1E] bg-opacity-50 rounded-full">
									<img className="" src="/images/home/check.svg" alt=""/>
								</div>
								<div className="">Access to locker rooms</div>
							</div>
							<div className="flex items-center gap-[10px]">
								<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#971A1E] bg-opacity-50 rounded-full">
									<img className="" src="/images/home/check.svg" alt=""/>
								</div>
								<div className="">Discounted rates on group fitness</div>
							</div>
							<div className="flex items-center gap-[10px]">
								<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#971A1E] bg-opacity-50 rounded-full">
									<img className="" src="/images/home/check.svg" alt=""/>
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
					<div className="hidden xl:block">accomplish. So why wait? Join us today and take the first step towards a healthier, happier you!</div>
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
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
										<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
											<img className="w-full h-[451px] object-cover object-center" src="/images/home/trainer1.webp" alt=""/>
										</div>
									</div>
								</div>
							</div>
							<div className="absolute right-0 bottom-0 left-0">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-30"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-30"></div>
								<div className="relative flex items-center gap-[50px] p-[30px]">
									<div className="">
										<div className="font-teko font-semibold text-[28px] text-[#D4D4D4]">{trainers[0].name}</div>
										<div className="text-[16px]">{trainers[0].role}</div>
									</div>
									<div className="flex-1">
										<div className="flex items-center gap-[5px]">
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
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
										<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
											<img className="w-full h-[451px] object-cover object-center" src="/images/home/trainer2.webp" alt=""/>
										</div>
									</div>
								</div>
							</div>
							<div className="absolute right-0 bottom-0 left-0">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-30"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-30"></div>
								<div className="relative flex items-center gap-[50px] p-[30px]">
									<div className="">
										<div className="font-teko font-semibold text-[28px] text-[#D4D4D4]">{trainers[1].name}</div>
										<div className="text-[16px]">{trainers[1].role}</div>
									</div>
									<div className="flex-1">
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
					</div>
					<div className="">
						<div className="sticky top-0">
							<div className="grid grid-cols-2 gap-[10px] text-center">
								<div className="">
									<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
										<div className=" font-teko font-semibold text-[24px]">BOXING</div>
										<div className="text-[16px]">Sat - 2.00-8.00</div>
									</div>
								</div>
								<div className="">
									<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
										<div className=" font-teko font-semibold text-[24px]">YOGA</div>
										<div className="text-[16px]">Sat - 4.00-6.00</div>
									</div>
								</div>
								<div className="">
									<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
										<div className=" font-teko font-semibold text-[24px]">YOGA</div>
										<div className="text-[16px]">Sun - 1.00-3.00</div>
									</div>
								</div>
								<div className=""></div>
								<div className=""></div>
								<div className="">
									<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
										<div className=" font-teko font-semibold text-[24px]">BOXING</div>
										<div className="text-[16px]">Mon - 2.00-8.00</div>
									</div>
								</div>
								<div className="">
									<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
										<div className=" font-teko font-semibold text-[24px]">BOXING</div>
										<div className="text-[16px]">Thu - 2.00-8.00</div>
									</div>
								</div>
								<div className=""></div>
								<div className="">
									<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
										<div className=" font-teko font-semibold text-[24px]">BOXING</div>
										<div className="text-[16px]">Wed - 2.00-4.00</div>
									</div>
								</div>
								<div className="">
									<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
										<div className=" font-teko font-semibold text-[24px]">KICKBOXING</div>
										<div className="text-[16px]">Wed - 2.00-8.00</div>
									</div>
								</div>
								<div className="">
									<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
										<div className=" font-teko font-semibold text-[24px]">BOXING</div>
										<div className="text-[16px]">Thu - 4.00-6.00</div>
									</div>
								</div>
								<div className="">
									<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
										<div className=" font-teko font-semibold text-[24px]">BOXING</div>
										<div className="text-[16px]">Sat - 4.00-6.00</div>
									</div>
								</div>
								<div className="">
									<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
										<div className=" font-teko font-semibold text-[24px]">KICKBOXING</div>
										<div className="text-[16px]">Wed - 6.00-8.00</div>
									</div>
								</div>
								<div className="">
									<div className="bg-[#D4D4D4] text-[#01010F] p-[10px]">
										<div className=" font-teko font-semibold text-[24px]">BOXING</div>
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
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
										<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
											<img className="w-full h-[451px] object-cover object-center" src="/images/home/class1.webp" alt={classes[0].name}/>
										</div>
									</div>
								</div>
							</div>
							<div className="absolute right-0 bottom-0 left-0">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#01010F] from-70% to-transparent to-70% opacity-30"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#971A1E] from-70% to-transparent to-70% opacity-30"></div>
								<div className="relative p-[30px] ">
									<div className="font-teko font-semibold text-[28px]">{classes[0].name}</div>
									<div className="flex justify-start">
										<div className="">
											<div className="border-t-[2px] border-[#01010F]"></div>
											<div className="border-t-[2px] border-[#01010F] mr-[10px] mt-[3px]"></div>
											<div className="border-t-[2px] border-[#01010F] mr-[20px] mt-[3px]"></div>
											<div className="mt-[10px]"></div>
											<div className="">{classes[0].tag}</div>
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
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
										<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
											<img className="w-full h-[451px] object-cover object-center" src="/images/home/class2.webp" alt={classes[1].name}/>
										</div>
									</div>
								</div>
							</div>
							<div className="absolute right-0 bottom-0 left-0">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#01010F] from-70% to-transparent to-70% opacity-30"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#971A1E] from-70% to-transparent to-70% opacity-30"></div>
								<div className="relative p-[30px] ">
									<div className="font-teko font-semibold text-[28px]">{classes[1].name}</div>
									<div className="flex justify-start">
										<div className="">
											<div className="border-t-[2px] border-[#01010F]"></div>
											<div className="border-t-[2px] border-[#01010F] mr-[10px] mt-[3px]"></div>
											<div className="border-t-[2px] border-[#01010F] mr-[20px] mt-[3px]"></div>
											<div className="mt-[10px]"></div>
											<div className="">{classes[1].tag}</div>
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
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
								<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
									<img className="w-full" src="/images/service-details/kickboxing.webp" alt={`${classes[0].name} class at RIXA FIT`}/>
								</div>
							</div>
						</div>
					</div>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-50"></div>
					<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center">
						<div className="p-[10px] md:p-[50px]">
							<div className="font-teko font-semibold text-[60px] uppercase">{classes[0].name}</div>
							<div className="">
								<div className="max-w-[420px]">{classes[0].intro}</div>
							</div>
							<div className="md:pt-[50px]"></div>
							<div className="flex items-center gap-[10px]">
								<div className="px-[10px] border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="px-[10px] border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="px-[10px] border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="px-[10px] border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
								<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
								<a className="group relative" href={`/classes/${classes[0].slug}`} aria-label={`${classes[0].name} class`}>
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
