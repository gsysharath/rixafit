import Link from 'next/link';
import { jsonLdScript, pageMetadata, serviceJsonLd } from '../../../lib/seo';
import { notFound } from 'next/navigation';
import { site, whatsappLink } from '../../../data/site';
import { getService, services } from '../../../data/services';
import NewsletterForm from '../../../components/forms/NewsletterForm';
import PageBanner from '../../../components/PageBanner';
import Reveal from '../../../components/Reveal';

export const dynamicParams = false;

export function generateStaticParams() {
	return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const service = getService(slug);
	if (!service) return {};
	return pageMetadata({
		title: `${service.name} in Mahabubnagar`,
		description: `${service.description.split('. ')[0]}. ${service.name} at RIXA FIT gym, Padmavathi Colony, Mahabubnagar.`,
		path: `/services/${service.slug}`,
		keywords: [`${service.name.toLowerCase()} Mahabubnagar`],
	});
}

export default async function ServiceDetailsPage({ params }) {
	const { slug } = await params;
	const service = getService(slug);
	if (!service) notFound();

	return (
		<div className="bg-[#01010F] text-[#E7E7E7]">
			<PageBanner title={service.name} gradient={false} crumbs={[{ label: 'Services', href: '/services' }, { label: service.name }]} />
			<script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(serviceJsonLd({ name: service.name, description: service.description, path: `/services/${service.slug}`, serviceType: service.name }))} />
		<div className="py-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-[60px] xl:gap-[80px] items-start">
					<div className="">
						<Reveal>
							<img className="w-full aspect-[20/13] object-cover" src={service.image} alt={service.imageAlt} />
						</Reveal>
						<div className="pt-[50px] flex items-center gap-[15px]">
							<i className={`${service.icon} text-[34px] md:text-[40px] text-[#E22C32]`} aria-hidden="true"></i>
							<h2 className="font-teko font-semibold text-[36px] md:text-[44px] leading-[1] uppercase">{service.name}</h2>
						</div>
						<div className="flex items-center gap-[5px] pt-[15px] pb-[30px]">
							<div className="flex-1 border-t-[10px] border-[#E22C32] border-opacity-50"></div>
							<div className="flex-1 border-t-[7px] border-[#E22C32] border-opacity-50"></div>
							<div className="flex-1 border-t-[4px] border-[#E22C32] border-opacity-50"></div>
							<div className="flex-1 border-t-[3px] border-[#E22C32] border-opacity-50"></div>
							<div className="flex-1 border-t-[1px] border-[#E22C32] border-opacity-50"></div>
						</div>
						<p className="text-[20px] leading-[1.6]">{service.description}</p>

						<h3 className="pt-[50px] font-teko font-semibold text-[28px] uppercase">What you get</h3>
						<ul className="pt-[20px] grid grid-cols-1 md:grid-cols-2 gap-[15px]">
							{service.highlights.map((item) => (
								<li key={item} className="flex items-start gap-[10px]">
									<span className="flex shrink-0 justify-center items-center w-[26px] h-[26px] mt-[2px] bg-[#971A1E] bg-opacity-50 rounded-full">
										<img className="" src="/images/home/check.svg" alt="" />
									</span>
									<span className="">{item}</span>
								</li>
							))}
						</ul>

						{service.note && (
							<div className="mt-[40px] flex items-start gap-[12px] border-l-[4px] border-[#E22C32] bg-[#D4D4D4]/5 px-[20px] py-[15px]">
								<i className="fa-solid fa-circle-info text-[#E22C32] pt-[5px]" aria-hidden="true"></i>
								<p className="">{service.note}</p>
							</div>
						)}

						<div className="pt-[40px] flex flex-wrap gap-[15px]">
							<a className="font-teko text-[20px] uppercase bg-[#971A1E] text-white px-[25px] py-[8px] hover:bg-white hover:text-[#971A1E] transition-colors duration-[.3s]" href={site.joinUrl} target="_blank" rel="noopener noreferrer">
								Join Now
							</a>
							<a className="font-teko text-[20px] uppercase border-[1px] border-[#E22C32] px-[25px] py-[8px] hover:bg-[#971A1E] transition-colors duration-[.3s]" href={whatsappLink(`Hi ${site.name}, I'd like to know more about ${service.name}.`)} target="_blank" rel="noopener noreferrer">
								<i className="fa-brands fa-whatsapp mr-[8px]"></i>Ask on WhatsApp
							</a>
							<button type="button" data-app-download="" aria-haspopup="dialog" className="font-teko text-[20px] uppercase border-[1px] border-[#E22C32] px-[25px] py-[8px] hover:bg-[#971A1E] transition-colors duration-[.3s]">
								<i className="fa-solid fa-mobile-screen-button mr-[8px]"></i>Get the App
							</button>
						</div>
					</div>

					<aside className="flex flex-col gap-[30px] xl:sticky xl:top-[120px]">
						<nav aria-label="All services" className="border-[1px] border-[#D4D4D4]/30 p-[30px]">
							<h3 className="font-teko font-semibold text-[28px] uppercase">All Services</h3>
							<ul className="pt-[10px]">
								{services.map((s) => {
									const current = s.slug === service.slug;
									return (
										<li key={s.slug}>
											<Link
												href={`/services/${s.slug}`}
												aria-current={current ? 'page' : undefined}
												className={`flex items-center gap-[12px] py-[10px] border-b-[1px] border-[#D4D4D4]/15 hover:text-[#E22C32] transition-colors duration-[.3s] ${current ? 'text-[#E22C32]' : ''}`}
											>
												<i className={`${s.icon} w-[20px] text-center text-[#E22C32]`} aria-hidden="true"></i>
												<span className="">{s.name}</span>
											</Link>
										</li>
									);
								})}
							</ul>
						</nav>

						<div className="bg-[#971A1E] text-white p-[30px]">
							<h3 className="font-teko font-semibold text-[28px] uppercase">Gym Timings</h3>
							<div className="pt-[10px]">
								<div className="text-[14px] uppercase opacity-80">{site.hours.weekdays.label.replace(':', '')}</div>
								<div className="font-teko font-medium text-[24px]">{site.hours.weekdays.value}</div>
							</div>
							<div className="pt-[10px]">
								<div className="text-[14px] uppercase opacity-80">{site.hours.sunday.label.replace(':', '')}</div>
								<div className="font-teko font-medium text-[24px]">{site.hours.sunday.value}</div>
							</div>
							<Link className="inline-block pt-[15px] underline underline-offset-4 hover:no-underline" href="/#schedule">
								Full schedule<i className="fa-solid fa-arrow-right ml-[8px] text-[13px]"></i>
							</Link>
						</div>

						<div className="border-[1px] border-[#D4D4D4]/30 p-[30px]">
							<h3 className="font-teko font-semibold text-[28px] uppercase">Have a question?</h3>
							<p className="pt-[10px]">Call or WhatsApp us and our team will help you choose the right plan.</p>
							<div className="pt-[15px] flex flex-col gap-[8px]">
								<a className="flex items-center gap-[10px] hover:text-[#E22C32]" href={`tel:${site.phone}`}>
									<i className="fa-solid fa-phone text-[#E22C32] w-[20px] text-center" aria-hidden="true"></i>{site.phoneDisplay}
								</a>
								<a className="flex items-center gap-[10px] hover:text-[#E22C32]" href={whatsappLink(`Hi ${site.name}, I have a question about ${service.name}.`)} target="_blank" rel="noopener noreferrer">
									<i className="fa-brands fa-whatsapp text-[#E22C32] w-[20px] text-center" aria-hidden="true"></i>Chat on WhatsApp
								</a>
							</div>
						</div>
					</aside>
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
