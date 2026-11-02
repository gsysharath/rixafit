import { Fragment } from 'react';
import { breadcrumbJsonLd, jsonLdScript } from '../lib/seo';

// Pages that render their own <h1> (e.g. blog articles) pass titleAs="div" to keep a single h1.
export default function PageBanner({ title, gradient = false, crumbs, titleAs: TitleTag = 'h1' }) {
	const trail = crumbs || [{ label: title }];
	return (
		<div className="relative z-[49] mt-[-130px]">
			<script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(trail))} />
			<div className="absolute top-0 right-0 bottom-0 left-0">
				<img className="absolute top-0 left-0 w-full h-full object-cover object-fit" src="/images/about/pagetitle.webp" alt="" fetchPriority="high" />
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-70"></div>
				{gradient && <div className="absolute right-0 bottom-0 left-0 h-1/2 bg-gradient-to-b from-transparent to-[#01010F]"></div>}
			</div>
			<div className="relative max-w-[1320px] mx-auto px-[15px]">
				<div className="pt-[280px] pb-[150px]">
					<div className="flex justify-center">
						<div className="">
							<div className="font-teko text-[60px] font-semibold text-center uppercase">
								<div className="flex items-center gap-[5px]">
									<div className="flex-1 border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
									<div className="flex-1 border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
									<div className="flex-1 border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
									<div className="flex-1 border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
									<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
									<TitleTag className="">{title}</TitleTag>
									<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
									<div className="flex-1 border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
									<div className="flex-1 border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
									<div className="flex-1 border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
									<div className="flex-1 border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
								</div>
							</div>
							<nav aria-label="Breadcrumb" className="flex flex-wrap justify-center items-center gap-[20px]">
								<div className="">You are here:</div>
								<div className="">
									<img className="" src="/images/home/hero-arrow.svg" alt="" />
								</div>
								<a className="hover:text-[#E22C32]" href="/">Home</a>
								{trail.map((c) => (
									<Fragment key={c.label}>
										<div className="">
											<img className="" src="/images/home/hero-arrow.svg" alt="" />
										</div>
										{c.href ? <a className="hover:text-[#E22C32]" href={c.href}>{c.label}</a> : <div className="" aria-current="page">{c.label}</div>}
									</Fragment>
								))}
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
