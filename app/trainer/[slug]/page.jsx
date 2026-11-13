import Link from 'next/link';
import MobileContactCta from '../../../components/MobileContactCta';
import { pageMetadata } from '../../../lib/seo';
import { notFound } from 'next/navigation';
import { site, videoLink, whatsappLink } from '../../../data/site';
import { getTrainer, trainers } from '../../../data/trainers';
import NewsletterForm from '../../../components/forms/NewsletterForm';
import PageBanner from '../../../components/PageBanner';

export const dynamicParams = false;

export function generateStaticParams() {
	return trainers.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const trainer = getTrainer(slug);
	if (!trainer) return {};
	return pageMetadata({
		title: `${trainer.name} - ${trainer.role}`,
		description: `${trainer.bio} Train with ${trainer.name} at RIXA FIT, Mahabubnagar.`,
		path: `/trainer/${trainer.slug}`,
	});
}

export default async function TrainerDetailsPage({ params }) {
	const { slug } = await params;
	const trainer = getTrainer(slug);
	if (!trainer) notFound();

	return (
		<div className="bg-[#01010F] text-[#E7E7E7]">
			<PageBanner title="Trainer" gradient={false} crumbs={[{ label: 'Trainers', href: '/trainer' }, { label: trainer.name }]} />
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
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
										<div className="group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
											<img className="w-full" src={trainer.image} alt={`${trainer.name}, ${trainer.role} at RIXA FIT`}/>
										</div>
									</div>
								</div>
							</div>
							<div className="absolute top-[50px] left-[30px]">
								<div className="flex flex-col items-center gap-[10px]">
									<a className="group relative" href={videoLink} target="_blank" rel="noopener noreferrer" aria-label="Watch our video">
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] animate-ping"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
										<div className="relative h-[60px] w-[60px] flex justify-center items-center">
											<div className="relative font-teko font-medium text-[20px]">
												<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<i className="fa fa-play"></i>
												</div>
												<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<i className="fa fa-play"></i>
												</div>
											</div>
										</div>
									</a>
									<div className="py-[10px] border-l-[10px] border-[#E22C32]"></div>
									<div className="py-[10px] border-l-[7px] border-[#E22C32]"></div>
									<div className="py-[10px] border-l-[4px] border-[#E22C32]"></div>
									<div className="py-[10px] border-l-[3px] border-[#E22C32]"></div>
									<div className="py-[10px] border-l-[1px] border-[#E22C32]"></div>
									<div className="hidden md:block [writing-mode:tb]">Video Introduction</div>
								</div>
							</div>
						</div>
					</div>
					<div className="">
						<h2 className="font-teko font-semibold text-[36px] uppercase">About {trainer.name}</h2>
						<div className="text-[#E22C32]">{trainer.role}</div>
						<div className="pt-[30px]"></div>
						<div className="flex justify-between">
							<div className="">
								<img className="w-[50px] md:w-auto" src="/images/trainer-details/b1.svg" alt=""/>
							</div>
							<div className="">
								<img className="w-[50px] md:w-auto" src="/images/trainer-details/b2.svg" alt=""/>
							</div>
							<div className="">
								<img className="w-[50px] md:w-auto" src="/images/trainer-details/b3.svg" alt=""/>
							</div>
							<div className="">
								<img className="w-[50px] md:w-auto" src="/images/trainer-details/b4.svg" alt=""/>
							</div>
						</div>
						<div className="pt-[50px]"></div>
						<div className="">
							<div className="">{trainer.bio}</div>
						</div>
						<div className="pt-[50px]"></div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
							<div className="">
								<div className="flex gap-[10px]">
									<div className="w-[72px] text-[#E22C32]">Address:</div>
									<div className="">
										<div className="">{site.address.line1}</div>
										<div className="">{site.address.line2}</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="flex gap-[10px]">
									<div className="w-[72px] text-[#E22C32]">Book:</div>
									<a className="hover:text-[#E22C32]" href={whatsappLink(`Hi, I'd like to book a session with ${trainer.name}.`)} target="_blank" rel="noopener noreferrer">
										<i className="fa-brands fa-whatsapp mr-[6px]" aria-hidden="true"></i>WhatsApp {site.whatsappDisplay}
									</a>
								</div>
							</div>
							<div className="">
								<div className="flex gap-[10px]">
									<div className="w-[72px] text-[#E22C32]">Email:</div>
									<a className="hover:text-[#E22C32] break-all" href={`mailto:${site.email}`}>{site.email}</a>
								</div>
							</div>
							<div className="">
								<div className="flex gap-[10px]">
									<div className="w-[72px] text-[#E22C32]">Phone:</div>
									<div className="">
										<a className="block hover:text-[#E22C32]" href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
										<a className="block hover:text-[#E22C32]" href={`tel:${site.altPhone}`}>{site.altPhoneDisplay}</a>
									</div>
								</div>
							</div>
						</div>
						<div className="hidden md:block pt-[50px]"></div>
						<div className="hidden md:flex items-center gap-[20px]">
							<div className="text-[#E22C32]">Specialized Area:</div>
							{trainer.specialties.map((s) => (
								<div key={s} className="px-[10px] py-[5px] border-[1px] border-[#D4D4D4] rounded-full">{s}</div>
							))}
						</div>
						<div className="pt-[50px]"></div>
						<div className="flex items-center gap-[20px]">
							<div className="text-[#E22C32]">Follow:</div>
							<a className="hover:text-[#E22C32]" href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
							<a className="hover:text-[#E22C32]" href={whatsappLink(`Hi, I'd like to book a session with ${trainer.name}.`)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
							<a className="hover:text-[#E22C32]" href={`mailto:${site.email}`} aria-label="Email"><i className="fa fa-envelope"></i></a>
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

		<MobileContactCta />

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
						<Link className="w-[126px] h-[126px] text-[24px] text-[#01010F] bg-white hover:bg-[#D4D4D4] rounded-full flex items-center justify-center" href="/contact">
							<div className="">
								<div className="">CONTACT</div>
								<div className="flex items-center gap-[10px]">
									<div className="">US</div>
									<div className="">
										<img className="brightness-0" src="/images/home/hero-next.svg" alt=""/>
									</div>
								</div>
							</div>
						</Link>
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
