import { jsonLdScript, pageMetadata, serviceJsonLd } from '../../../lib/seo';
import { notFound } from 'next/navigation';
import NewsletterForm from '../../../components/forms/NewsletterForm';
import BookingForm from '../../../components/forms/BookingForm';
import PageBanner from '../../../components/PageBanner';
import { classes, getClass } from '../../../data/classes';

export const dynamicParams = false;

export function generateStaticParams() {
	return classes.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const item = getClass(slug);
	if (!item) return {};
	return pageMetadata({
		title: `${item.name} Classes in Mahabubnagar`,
		description: `${item.intro} ${item.schedule}, ${item.duration}. Book your class at RIXA FIT, Mahabubnagar.`,
		path: `/classes/${item.slug}`,
		keywords: [`${item.name.toLowerCase()} classes Mahabubnagar`, `${item.name.toLowerCase()} near me`],
	});
}

export default async function ClassDetailsPage({ params }) {
	const { slug } = await params;
	const item = getClass(slug);
	if (!item) notFound();

	return (
		<div className="bg-[#01010F] text-[#E7E7E7]">
			<PageBanner title={item.name} gradient={false} crumbs={[{ label: 'Classes', href: '/classes' }, { label: item.name }]} />
			<script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(serviceJsonLd({ name: `${item.name} Classes`, description: item.description, path: `/classes/${item.slug}`, serviceType: 'Group fitness class' }))} />
		<div className="pt-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-[30px]">
					<div className="col-span-2">
						<div className="font-teko text-[28px] font-semibold uppercase">{item.name}</div>
						<div className="flex gap-[30px]">
							<div className="hidden md:block flex-1">
								<div className="">
									<div className="">{item.intro}</div>
								</div>
							</div>
							<div className="hidden md:block border-l-[1px] border-[#D4D4D4] border-opacity-50"></div>
							<div className="">
								<div className="">Schedule</div>
								<div className="border-t-[1px] border-[#D4D4D4] border-opacity-50 my-[10px]"></div>
								<div className="font-teko text-[24px] font-semibold">{item.schedule}</div>
							</div>
							<div className="border-l-[1px] border-[#D4D4D4] border-opacity-50"></div>
							<div className="">
								<div className="">Duration</div>
								<div className="border-t-[1px] border-[#D4D4D4] border-opacity-50 my-[10px]"></div>
								<div className="font-teko text-[24px] font-semibold">{item.duration}</div>
							</div>
						</div>
						<div className="pt-[50px]"></div>
						<div className="font-teko text-[28px] font-semibold uppercase">{item.name} Class</div>
						<div className="">
							<div className="">{item.description}</div>
						</div>
						<div className="pt-[50px]"></div>
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
											<img className="w-full" src="/images/class-details/i.webp" alt={`${item.name} class at RIXA FIT`}/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pt-[50px]"></div>
						<div className="font-teko text-[28px] font-semibold uppercase">Workout Tips and Techniques:</div>
						<div className="">
							<div className="inline xl:block">Achieving your fitness goals can sometimes feel daunting, but fear not – our team of certified personal</div>
							<div className="inline xl:block">trainers is here to guide and support you every step of the way. Whether you're looking to lose weight,</div>
							<div className="inline xl:block">build muscle, or improve your overall fitness, our trainers will work closely with you to develop a </div>
							<div className="hidden xl:block">customized workout plan tailored to your specific goals and abilities.</div>
						</div>
						<div className="pt-[50px]"></div>
						<div className="font-teko text-[28px] font-semibold uppercase">Nutrition and Diet Advice:</div>
						<div className="">
							<div className="">We believe that nutrition plays a crucial role in achieving optimal fitness and overall well-being. That's why we offer nutritional guidance and support to help you make informed choices about your diet - whether you're looking to lose weight, gain muscle or simply feel more energetic.</div>
						</div>
						<div className="pt-[50px]"></div>
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
											<img className="w-full" src="/images/class-details/d.webp" alt="Members training at RIXA FIT"/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pt-[50px]"></div>
						<div className="">
							<div className="inline xl:block">Thank you for taking the time to learn more about RIXA FIT and how we can help you achieve your </div>
							<div className="inline xl:block">fitness goals. With our state-of-the-art facilities, expert personal training services, diverse group fitness </div>
							<div className="inline xl:block">classes, nutritional guidance, and supportive community, there's no limit to what you can accomplish. So</div>
							<div className="inline xl:block">why wait? Join us today and take the first step towards a healthier, happier you!</div>
						</div>
					</div>
					<div className="">
						<div className="sticky top-[90px]">
							<div className="xl:hidden pt-[50px]"></div>
							<BookingForm defaultClass={item.name} />
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="py-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="flex justify-center font-teko font-semibold text-[70px] md:text-[130px] xl:text-[225px] leading-[1]">
					<div className="font-oswald text-[55px] md:text-[100px] xl:text-[185px] leading-[1] text-transparent [-webkit-text-stroke:1px_#D4D4D4]">
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
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">C</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">C</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">C</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">C</div>
											<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
												C
											</div>
										</div>
									</div>
									<div className="">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">H</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">H</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">H</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">H</div>
											<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
												H
											</div>
										</div>
									</div>
									<div className="">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">O</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">O</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">O</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">O</div>
											<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
												O
											</div>
										</div>
									</div>
									<div className="">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">O</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">O</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">O</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">O</div>
											<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
												O
											</div>
										</div>
									</div>
									<div className="">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">S</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">S</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">S</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">S</div>
											<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
												S
											</div>
										</div>
									</div>
									<div className="">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">E</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">E</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">E</div>
											<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">E</div>
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
					<div className="hidden xl:block">
						<div className="">Let’s improve your mental health. Let’s</div>
						<div className="">improve your mental health</div>
					</div>
					<div className="">
						<img className="" src="/images/classes/animated-element.svg" alt=""/>
					</div>
					<div className="">
						<div className="flex items-center gap-[10px]">
							<div className="px-[10px] border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
							<div className="px-[10px] border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
							<div className="px-[10px] border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
							<div className="px-[10px] border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
							<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
							<a className="group relative" href="/pricing" aria-label="View membership plans">
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

		{/* section */}
		<div className="pb-[150px]">
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
						<div className="origin-left bg-[#D4D4D4] bg-opacity-80 text-[#01010F] overflow-hidden py-[20px] transition-all duration-[.3s]">
							<div className="flex whitespace-nowrap items-center justify-center gap-[30px] font-teko font-semibold text-[28px] uppercase">
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
						<div className="origin-left bg-[#D4D4D4] bg-opacity-80 text-[#01010F] overflow-hidden py-[20px] transition-all duration-[.3s]">
							<div className="flex whitespace-nowrap items-center justify-center gap-[30px] font-teko font-semibold text-[28px] uppercase">
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
