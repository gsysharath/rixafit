import Link from 'next/link';
import ContactQuickActions from '../components/ContactQuickActions';
import HomeBmiForm from '../components/forms/HomeBmiForm';
import NewsletterForm from '../components/forms/NewsletterForm';
import PlanCard from '../components/cards/PlanCard';
import WeeklyTimetable from '../components/WeeklyTimetable';
import HeroContent from '../components/HeroContent';
import HeroVideo from '../components/HeroVideo';
import Reveal from '../components/Reveal';
import Testimonials from '../components/Testimonials';
import { formatPrice, plans } from '../data/plans';
import { services } from '../data/services';
import { videoLink } from '../data/site';
import { pageMetadata } from '../lib/seo';

export const metadata = pageMetadata({
	title: 'RIXA FIT | Best Gym & Fitness Studio in Mahabubnagar',
	absoluteTitle: true,
	description: `RIXA FIT is a premium fitness studio in Padmavathi Colony, Mahabubnagar - personal training, weight loss, strength, group cardio, Zumba and fitness boxing with expert trainers. Memberships from ${formatPrice(Math.min(...plans.map((p) => p.price)))}.`,
	path: '/',
	keywords: ['gym timings Mahabubnagar', 'gym Mahabubnagar', 'fitness gym Telangana', 'personal training Mahabubnagar'],
});

const homePlans = ['fit-30', 'fit-90', 'fit-365'].map((slug) => plans.find((p) => p.slug === slug));

export default function Home() {
	return (
		<div className="bg-[#01010F] text-[#E7E7E7]">
		<h1 className="sr-only">RIXA FIT - Gym &amp; Fitness Studio in Mahabubnagar</h1>
		{/* Small gap between the header and the hero (the hero height accounts for it). */}
		<div className="pt-[20px]"></div>
		{/* Gym tour video for phones and tablets (lighter file), shown above the hero text */}
		<div className="xl:hidden max-w-[1320px] mx-auto px-[15px]">
			<div className="relative aspect-video overflow-hidden">
				<HeroVideo src="/videos/hero/gym-tour-mobile.mp4" poster="/videos/hero/gym-tour.webp" media="(max-width: 1279.98px)" />
			</div>
		</div>
		<div data-slider="" className="relative">
			<div data-slider-cog="" className="hidden">{`
				{
					"container": ".hero",
					"items": 1,
					"nav": 0,
					"controls": 0
				}
			`}</div>
			{/* Gym tour video on desktop, shared by both hero slides (phones/tablets get the copy above) */}
			<div className="absolute top-0 right-0 bottom-0 left-0 hidden xl:grid grid-cols-2 gap-[200px] pointer-events-none">
				<div className=""></div>
				<Reveal className="relative h-full">
					<HeroVideo src="/videos/hero/gym-tour.mp4" poster="/videos/hero/gym-tour.webp" media="(min-width: 1280px)" />
				</Reveal>
			</div>
			<div className="hero">
				<div className="group/s">
					<div className="relative">
						<div className="relative max-w-[1320px] mx-auto px-[15px] pt-[50px] pb-[100px] xl:py-0 xl:h-[calc(100vh-110px)] xl:min-h-[560px] xl:flex xl:flex-col xl:justify-center">
							<HeroContent />
							<div className="pt-[100px]"></div>
						</div>
					</div>
				</div>
				<div className="group/s">
					<div className="relative">
						<div className="relative max-w-[1320px] mx-auto px-[15px] pt-[50px] pb-[100px] xl:py-0 xl:h-[calc(100vh-110px)] xl:min-h-[560px] xl:flex xl:flex-col xl:justify-center">
							<HeroContent />
							<div className="pt-[100px]"></div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="overflow-hidden pb-[50px] mt-[-100px]">
			<div data-scroll="[data-scroll-item]" className="">
				<div data-scroll-cog="" className="hidden">{`
					{
						"scrollTrigger": {
							"trigger": "[data-scroll-item]"
							
						}
					}
				`}</div>
				<div data-scroll-item="" className="group">
					<div className="origin-left relative top-[50px] text-[#01010F] overflow-hidden py-[20px] group-[.c-active]:rotate-[3deg] transition-all duration-[.3s]">
						<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-[.09s] delay-0 transition-all duration-[.3s]"></div>
						<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-[.06s] delay-[.03s] transition-all duration-[.3s]"></div>
						<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-[.03s] delay-[.06s] transition-all duration-[.3s]"></div>
						<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.09s] transition-all duration-[.3s]"></div>
						<div className="relative flex whitespace-nowrap items-center justify-center gap-[30px] font-teko font-semibold text-[28px] uppercase">
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-0 delay-0 transition-all duration-[.3s]">Rise up</div>
							<img className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.03s] delay-0 transition-all duration-[.3s]" src="/images/home/sliding.svg" alt=""/>
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.06s] delay-0 transition-all duration-[.3s]">show up</div>
							<img className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.09s] delay-0 transition-all duration-[.3s]" src="/images/home/sliding.svg" alt=""/>
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.12s] delay-0 transition-all duration-[.3s]">never give up</div>
							<img className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.15s] delay-0 transition-all duration-[.3s]" src="/images/home/sliding.svg" alt=""/>
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.16s] delay-0 transition-all duration-[.3s]">Train hard</div>
							<img className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.19s] delay-0 transition-all duration-[.3s]" src="/images/home/sliding.svg" alt=""/>
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.22s] delay-0 transition-all duration-[.3s]">Train hard</div>
							<img className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.25s] delay-0 transition-all duration-[.3s]" src="/images/home/sliding.svg" alt=""/>
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.28s] delay-0 transition-all duration-[.3s]">Train hard</div>
							<img className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.31s] delay-0 transition-all duration-[.3s]" src="/images/home/sliding.svg" alt=""/>
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.33s] delay-0 transition-all duration-[.3s]">stay humble</div>
							<img className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.36s] delay-0 transition-all duration-[.3s]" src="/images/home/sliding.svg" alt=""/>
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.39s] delay-0 transition-all duration-[.3s]">stay humble</div>
							<img className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.42s] delay-0 transition-all duration-[.3s]" src="/images/home/sliding.svg" alt=""/>
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.45s] delay-0 transition-all duration-[.3s]">be proud</div>
							<img className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.48s] delay-0 transition-all duration-[.3s]" src="/images/home/sliding.svg" alt=""/>
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.51s] delay-0 transition-all duration-[.3s]">Believe in yourself</div>
						</div>
					</div>
					<div className="relative overflow-hidden py-[20px] text-white group-[.c-active]:rotate-[-3deg]">
						<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-[.09s] delay-0 transition-all duration-[.3s]"></div>
						<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-[.06s] delay-[.03s] transition-all duration-[.3s]"></div>
						<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-[.03s] delay-[.06s] transition-all duration-[.3s]"></div>
						<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.09s] transition-all duration-[.3s]"></div>
						<div className="relative flex whitespace-nowrap items-center justify-center gap-[30px] font-teko font-semibold text-[28px] uppercase">
							<div className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-0 delay-0 transition-all duration-[.3s]">Sweat now, shine later</div>
							<img className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.03s] delay-0 transition-all duration-[.3s]" src="/images/home/sliding-black.svg" alt=""/>
							<div className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.06s] delay-0 transition-all duration-[.3s]">Stronger every rep</div>
							<img className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.09s] delay-0 transition-all duration-[.3s]" src="/images/home/sliding-black.svg" alt=""/>
							<div className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.12s] delay-0 transition-all duration-[.3s]">prouder every step</div>
							<img className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.15s] delay-0 transition-all duration-[.3s]" src="/images/home/sliding-black.svg" alt=""/>
							<div className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.18s] delay-0 transition-all duration-[.3s]">Push your limits</div>
							<img className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.21s] delay-0 transition-all duration-[.3s]" src="/images/home/sliding-black.svg" alt=""/>
							<div className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.24s] delay-0 transition-all duration-[.3s]">exceed your expectations</div>
							<img className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.25s] delay-0 transition-all duration-[.3s]" src="/images/home/sliding-black.svg" alt=""/>
							<div className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.28s] delay-0 transition-all duration-[.3s]">Rise up, show up, never give up</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* section: about RIXA FIT */}
		<div className="py-[150px]">
			<div className="relative max-w-[1320px] mx-auto px-[15px]">
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-[60px] xl:gap-[100px] items-center">
					<div className="grid grid-cols-2 gap-[20px] md:gap-[30px]">
						<Reveal>
							<img className="w-full aspect-[3/4] object-cover" src="/gym/reception-desk-1.webp" alt="RIXA FIT reception in Padmavathi Colony, Mahabubnagar" loading="lazy" />
						</Reveal>
						<div className="relative pt-[60px] md:pt-[75px]">
							<Reveal>
								<img className="w-full aspect-[3/4] object-cover" src="/gym/gym-floor-strength-zone.webp" alt="Strength training area at RIXA FIT" loading="lazy" />
							</Reveal>
							<div className="absolute top-0 left-0 -translate-x-1/2 w-[100px] md:w-[151px]">
								<img className="w-full bg-[#01010F] rounded-full animate-spin [animation:spin_10s_linear_infinite] motion-reduce:animate-none" src="/images/home/Circle.svg" alt="" />
								<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
									<img className="w-[36px] h-[37px] md:w-[54px] md:h-[55px]" src="/images/logo-mark-light.svg" alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="font-teko uppercase">
							<div className="flex items-center gap-[15px]">
								<h2 className="font-semibold text-[40px] md:text-[60px] leading-[1]">More Than a Gym.</h2>
								<div className="font-medium text-[12px] text-[#E22C32] relative top-[-5px] border-r-[2px] border-l-[2px] border-[#E22C32] px-[5px] [writing-mode:tb]">About Us</div>
							</div>
							<div className="font-semibold text-[40px] md:text-[60px] leading-[1] text-[#E22C32]">A Better Way to Live.</div>
						</div>
						<div className="pt-[30px] flex flex-col gap-[20px]">
							<p className="">Welcome to <span className="text-white font-semibold">RIXA FIT – Premium Fitness Studio, Mahabubnagar</span>, where fitness meets motivation, dedication and professional guidance.</p>
							<p className="">At RIXA FIT, we believe that fitness is not just about building muscles or losing weight. It is about building strength, improving health, developing confidence and creating a healthier lifestyle.</p>
							<p className="">Our goal is to provide a premium and motivating fitness environment where individuals of all fitness levels can work towards their personal goals with the right guidance and support.</p>
						</div>
						<div className="pt-[40px] flex flex-wrap items-center gap-[20px]">
							<Link className="font-teko text-[20px] uppercase bg-[#971A1E] text-white px-[25px] py-[8px] hover:bg-white hover:text-[#971A1E] transition-colors duration-[.3s]" href="/about">
								More about us<i className="fa-solid fa-arrow-right ml-[10px] text-[14px]"></i>
							</Link>
							<div className="font-teko font-semibold text-[22px] uppercase">RIXA FIT – Moves You</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="flex justify-between items-end gap-[30px]">
					<div className="font-teko flex items-center gap-[15px] uppercase">
						<div className="font-semibold text-[48px] md:text-[60px] leading-[1]">Our</div>
						<div className="font-medium text-[12px] text-[#E22C32] relative top-[-5px] border-r-[2px] border-l-[2px] border-[#E22C32] px-[5px] [writing-mode:tb]">RIXA FIT</div>
						<div className="font-semibold text-[48px] md:text-[60px] leading-[1]">Services</div>
					</div>
					<div className="hidden xl:block">
						<div className="flex items-center">
							<button type="button" className="group relative services-prev" aria-label="Previous services">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
								<div className="relative h-[60px] w-[60px] flex justify-center items-center">
									<img className="" src="/images/home/hero-prev.svg" alt="" />
								</div>
							</button>
							<div className="px-[50px] bg-white bg-opacity-25 h-[10px]"></div>
							<button type="button" className="group relative services-next" aria-label="Next services">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
								<div className="relative h-[60px] w-[60px] flex justify-center items-center">
									<img className="" src="/images/home/hero-next.svg" alt="" />
								</div>
							</button>
						</div>
					</div>
				</div>
				<div className="pt-[50px]"></div>
				<div data-slider="" className="relative">
					<div data-slider-cog="" className="hidden">{`
						{
							"container": ".services-slider",
							"items": 1,
							"gutter": 30,
							"slideBy": 1,
							"nav": 0,
							"mouseDrag": 1,
							"prevButton": ".services-prev",
							"nextButton": ".services-next",
							"responsive": { "768": { "items": 2 }, "1280": { "items": 4 } }
						}
					`}</div>
					<div className="services-slider text-white">
						{services.map((service) => (
							<div key={service.slug} className="group/s">
								<div className="relative">
									<div className="relative overflow-hidden">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
										<img className="w-full aspect-[22/25] object-cover origin-bottom group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-0 delay-[.4s] transition-all duration-[.3s]" src={service.image} alt={service.imageAlt} loading="lazy" />
									</div>
									<div className="absolute right-0 bottom-0 left-0">
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#01010F] from-70% to-transparent to-70%"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#971A1E] from-70% to-transparent to-70% opacity-50"></div>
										<div className="relative p-[30px]">
											<div className="font-teko font-semibold text-[28px] leading-[1.1]">
												<Link className="hover:text-[#E22C32] after:absolute after:inset-0" href={`/services/${service.slug}`}>{service.titleLines.join(' ')}</Link>
											</div>
											<div className="flex justify-start pt-[8px]">
												<div className="">
													<div className="border-t-[2px] border-[#01010F]"></div>
													<div className="border-t-[2px] border-[#01010F] mr-[10px] mt-[3px]"></div>
													<div className="border-t-[2px] border-[#01010F] mr-[20px] mt-[3px]"></div>
													<div className="mt-[10px]"></div>
													<div className="">{service.tag}</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="pt-[40px] flex justify-center">
					<Link className="font-teko text-[20px] uppercase border-[1px] border-[#E22C32] px-[25px] py-[8px] hover:bg-[#971A1E] transition-colors duration-[.3s]" href="/services">
						All services<i className="fa-solid fa-arrow-right ml-[10px] text-[14px]"></i>
					</Link>
				</div>
			</div>
		</div>

		{/* section: membership */}
		<div className="pt-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="font-teko flex justify-center items-center gap-[15px] uppercase">
					<h2 className="font-semibold text-[48px] md:text-[60px] leading-[1]">Membership</h2>
					<div className="font-medium text-[12px] text-[#E22C32] relative top-[-5px] border-r-[2px] border-l-[2px] border-[#E22C32] px-[5px] [writing-mode:tb]">Plans</div>
				</div>
				<div className="pt-[50px]"></div>
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-[30px] text-center">
					<div className="">
						<PlanCard plan={homePlans[0]} />
					</div>
					<div className="">
						<PlanCard plan={homePlans[1]} />
					</div>
					<div className="md:col-span-2 xl:col-span-1">
						<PlanCard plan={homePlans[2]} featured />
					</div>
				</div>
				<div className="pt-[50px] flex justify-center">
					<Link className="font-teko text-[22px] uppercase border-[1px] border-[#E22C32] px-[30px] py-[10px] hover:bg-[#971A1E] hover:text-white transition-colors duration-[.3s]" href="/pricing">
						View all {plans.length} membership plans <i className="fa fa-arrow-right ml-[8px]"></i>
					</Link>
				</div>
			</div>
		</div>

		{/* section: BMI calculator */}
		<div className="pt-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<h2 className="font-teko flex justify-center items-center gap-[15px] uppercase">
					<span className="font-semibold text-[48px] md:text-[60px] leading-[1]">BMI</span>
					<span className="font-medium text-[12px] text-[#E22C32] relative top-[-5px] border-r-[2px] border-l-[2px] border-[#E22C32] px-[5px] [writing-mode:tb]" aria-hidden="true">Check</span>
					<span className="font-semibold text-[48px] md:text-[60px] leading-[1]">Calculator</span>
				</h2>
				<div className="pt-[50px]"></div>
				<HomeBmiForm />
			</div>
		</div>

		{/* section: gym schedule - "Full schedule" links across the site point here (/#schedule) */}
		<div id="schedule" className="pt-[150px] scroll-mt-[-30px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="flex flex-wrap justify-between items-end gap-[30px]">
					<h2 className="font-teko flex items-center gap-[15px] uppercase">
						<span className="font-semibold text-[48px] md:text-[60px] leading-[1]">Gym</span>
						<span className="font-medium text-[12px] text-[#E22C32] relative top-[-5px] border-r-[2px] border-l-[2px] border-[#E22C32] px-[5px] [writing-mode:tb]" aria-hidden="true">Timings</span>
						<span className="font-semibold text-[48px] md:text-[60px] leading-[1]">Schedule</span>
					</h2>
				</div>
				<div className="pt-[50px]"></div>
				<WeeklyTimetable />
			</div>
		</div>

		{/* section */}
		<div className="pt-[150px]">
			<Testimonials />
		</div>

		{/* section */}
		<div className="text-white mt-[150px]">
			<div className="grid xl:grid-cols-2">
				<div className="hidden xl:block relative">
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F]"></div>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-30"></div>
					<div className="relative grid grid-cols-2">
						<div className="">
							<div className="flex justify-end">
								<div className="p-[50px]">
									<div className="font-teko font-semibold text-[28px] text-[#D4D4D4] uppercase">Member Centric Approach</div>
									<div className="pt-[10px]"></div>
									<div className="flex items-center gap-[20px]">
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
															<img className="" src="/images/home/skills1.svg" alt=""/>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="flex-1 text-[14px]">
											<div className="">Every programme is built</div>
											<div className="">around your goals and</div>
											<div className="">your schedule.</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="">
							<div className="relative">
								<div className="relative p-[50px]">
									<div className="font-teko font-semibold text-[28px] text-[#D4D4D4] uppercase">Health and Wellness</div>
									<div className="pt-[10px]"></div>
									<div className="flex items-center gap-[20px]">
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
															<img className="" src="/images/home/skill2.svg" alt=""/>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="flex-1 text-[14px]">
											<div className="">Balanced training, rest</div>
											<div className="">and nutrition for a</div>
											<div className="">healthier lifestyle.</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="">
							<div className="flex justify-end">
								<div className="relative p-[50px]">
									<div className="font-teko font-semibold text-[28px] text-[#D4D4D4] uppercase">Knowledgeable Coaches</div>
									<div className="pt-[10px]"></div>
									<div className="flex items-center gap-[20px]">
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
															<img className="" src="/images/home/skill3.svg" alt=""/>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="flex-1 text-[14px]">
											<div className="">Experienced coaches who</div>
											<div className="">guide your form and</div>
											<div className="">track your progress.</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="">
							<div className="relative">
								<div className="relative p-[50px]">
									<div className="font-teko font-semibold text-[28px] text-[#D4D4D4] uppercase">Facilities & Equipment</div>
									<div className="pt-[10px]"></div>
									<div className="flex items-center gap-[20px]">
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
															<img className="" src="/images/home/skill4.svg" alt=""/>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="flex-1 text-[14px]">
											<div className="">Modern cardio, strength</div>
											<div className="">and boxing zones in a</div>
											<div className="">clean, safe space.</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="absolute top-0 bottom-0 left-0 m-auto h-[2px] w-1/2 flex items-center">
						<div className="flex-1 bg-[#01010F] border-t-[1px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-t-[3px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-t-[4px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-t-[7px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-t-[10px] border-[#E22C32] border-opacity-50"></div>
					</div>
					<div className="absolute top-0 right-0 bottom-0 m-auto h-[2px] w-1/2 flex items-center">
						<div className="flex-1 bg-[#01010F] border-t-[10px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-t-[7px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-t-[4px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-t-[3px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-t-[1px] border-[#E22C32] border-opacity-50"></div>
					</div>
					<div className="absolute top-0 right-0 left-0 m-auto h-1/2 w-[10px] flex flex-col items-center">
						<div className="flex-1 bg-[#01010F] border-l-[1px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-l-[3px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-l-[4px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-l-[7px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-l-[10px] border-[#E22C32] border-opacity-50"></div>
					</div>
					<div className="absolute right-0 bottom-0 left-0 m-auto h-1/2 w-[10px] flex flex-col items-center">
						<div className="flex-1 bg-[#01010F] border-l-[10px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-l-[7px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-l-[4px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-l-[3px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-l-[1px] border-[#E22C32] border-opacity-50"></div>
					</div>
				</div>
				<div className="relative flex justify-center items-center h-[400px] xl:h-auto">
					<div data-scroll="[data-scroll-item]" className="">
						<div data-scroll-cog="" className="hidden">{`
							{
								"scrollTrigger": {
									"trigger": "[data-scroll-item]"
									
								}
							}
						`}</div>
						<div data-scroll-item="" className="group">
							<div className="">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
								<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
									<img className="absolute top-0 left-0 w-full h-full object-cover object-center" src="/images/home/video.webp" alt=""/>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center items-center">
						<a className="group relative" href={videoLink} target="_blank" rel="noopener noreferrer" aria-label="Watch our video">
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-transparent rounded-full group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
							<div className="relative h-[101px] w-[101px] flex justify-center items-center">
								<div className="relative font-teko">
									<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
										<img className="" src="/images/home/play1.svg" alt=""/>
									</div>
									<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
										<img className="" src="/images/home/play1.svg" alt=""/>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>

		{/* section: visit us */}
		<div className="pt-[150px]">
			<ContactQuickActions heading="Visit Us" label="Contact" />
		</div>

		{/* section */}
		<div className="pt-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="xl:flex">
					<div className="flex-1 relative hidden xl:flex items-center">
						<div className="absolute top-0 right-0 bottom-0 w-1/2 border-[1px] border-[#E22C32] rounded-bl-full rounded-tl-full"></div>
						<div className="absolute top-0 right-0 bottom-0 m-auto h-3/4 w-1/2 border-[1px] border-[#E22C32] rounded-bl-full rounded-tl-full"></div>
						<div className="absolute top-0 right-0 bottom-0 m-auto h-2/4 w-1/2 border-[1px] border-[#E22C32] rounded-bl-full rounded-tl-full"></div>
						<div className="relative bg-[#971A1E] text-white py-[10px] px-[30px]">Whether you're a beginner</div>
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
						<div className="relative bg-[#971A1E] text-white py-[10px] px-[30px]">Seasoned fitness enthusiast</div>
					</div>
				</div>
			</div>
		</div>

		</div>
	);
}
