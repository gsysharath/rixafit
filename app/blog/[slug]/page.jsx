import { pageMetadata } from '../../../lib/seo';
import { notFound } from 'next/navigation';
import NewsletterForm from '../../../components/forms/NewsletterForm';
import CommentForm from '../../../components/forms/CommentForm';
import BlogSearchForm from '../../../components/BlogSearch';
import PageBanner from '../../../components/PageBanner';
import { formatPostDate, getPost, posts } from '../../../data/posts';
import { site } from '../../../data/site';

export const dynamicParams = false;

export function generateStaticParams() {
	return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const post = getPost(slug);
	if (!post) return {};
	return pageMetadata({
		title: post.title,
		description: post.body[0].text.length > 155 ? `${post.body[0].text.slice(0, 152).trimEnd()}...` : post.body[0].text,
		path: `/blog/${post.slug}`,
		type: 'article',
		publishedTime: post.date,
	});
}

function DecoratedHeading({ children }) {
	return (
		<div className="">
			<div className="flex items-center gap-[5px]">
				<div className="flex-1 border-t-[10px] border-[#E22C32] border-opacity-50"></div>
				<div className="flex-1 border-t-[7px] border-[#E22C32] border-opacity-50"></div>
				<div className="flex-1 border-t-[4px] border-[#E22C32] border-opacity-50"></div>
				<div className="flex-1 border-t-[3px] border-[#E22C32] border-opacity-50"></div>
				<div className="flex-1 border-t-[1px] border-[#E22C32] border-opacity-50"></div>
			</div>
			<div className="pt-[10px]"></div>
			<h2 className="font-teko font-semibold text-[24px] uppercase text-[#E22C32]">{children}</h2>
			<div className="pt-[10px]"></div>
			<div className="flex items-center gap-[5px]">
				<div className="flex-1 border-t-[10px] border-[#E22C32] border-opacity-50"></div>
				<div className="flex-1 border-t-[7px] border-[#E22C32] border-opacity-50"></div>
				<div className="flex-1 border-t-[4px] border-[#E22C32] border-opacity-50"></div>
				<div className="flex-1 border-t-[3px] border-[#E22C32] border-opacity-50"></div>
				<div className="flex-1 border-t-[1px] border-[#E22C32] border-opacity-50"></div>
			</div>
			<div className="pt-[20px]"></div>
		</div>
	);
}

export default async function BlogDetailsPage({ params }) {
	const { slug } = await params;
	const post = getPost(slug);
	if (!post) notFound();
	const [intro, ...sections] = post.body;
	const recent = posts.filter((p) => p.slug !== post.slug);
	const articleLd = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: post.title,
		datePublished: post.date,
		author: { '@type': 'Organization', name: post.author },
		dateModified: post.date,
		publisher: { '@type': 'Organization', name: site.name, logo: { '@type': 'ImageObject', url: `${site.url}/images/logo-full.png` } },
		image: `${site.url}${post.image}`,
		mainEntityOfPage: `${site.url}/blog/${post.slug}`,
	};

	return (
		<div className="bg-[#01010F] text-[#E7E7E7]">
			<PageBanner title="Blog" titleAs="div" gradient={true} crumbs={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd).replace(/</g, '\\u003c') }} />
		<div className="">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="xl:grid grid-cols-3 gap-[50px]">
					<div className="col-span-2">
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
											<img className="w-full" src={post.image} alt={post.title}/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pt-[30px]"></div>
						<article className="">
							<h1 className="font-teko font-semibold text-[28px] xl:text-[36px] leading-[1] uppercase">{post.title}</h1>
							<div className="pt-[10px] flex flex-wrap items-center gap-[10px] font-teko text-[20px] uppercase">
								<time dateTime={post.date} className="border-t-[1px] border-b-[1px] border-[#E22C32] text-[#E22C32] text-[16px] pt-[6px] pb-[3px]">{formatPostDate(post.date)}</time>
								<div className="">By {post.author}</div>
							</div>
							<div className="pt-[30px]"></div>
							<p className="">{intro.text}</p>
							{sections.map((section, i) => (
								<div key={section.heading || i} className="pt-[50px]">
									{section.heading && <DecoratedHeading>{section.heading}</DecoratedHeading>}
									<p className="">{section.text}</p>
								</div>
							))}
						</article>
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
											<img className="w-full" src="/images/blog-details/d1.webp" alt="Training session at RIXA FIT"/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pt-[50px]"></div>
						<p className="">Thank you for taking the time to learn more about RIXA FIT and how we can help you achieve your fitness goals. With our modern facilities, expert personal training, diverse group fitness classes, nutritional guidance and supportive community, there's no limit to what you can accomplish. So why wait? Join us today and take the first step towards a healthier, happier you!</p>
						<div className="pt-[100px]"></div>
						<div className="flex justify-center">
							<div className="p-[50px] border-r-[1px] border-l-[1px] border-[#D4D4D4] border-opacity-50"></div>
						</div>
						<div className="flex justify-center">
							<div className="border-r-[1px] border-l-[1px] border-[#D4D4D4] border-opacity-50">
								<div className="flex items-center gap-[5px]">
									<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
									<div className="flex-1 border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
									<div className="flex-1 border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
									<div className="flex-1 border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
									<div className="flex-1 border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
								</div>
								<div className="pt-[20px]"></div>
								<div className="font-teko font-semibold text-[24px] uppercase px-[50px] md:px-[100px]">Post A Comment</div>
								<div className="pt-[20px]"></div>
								<div className="flex items-center gap-[5px]">
									<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
									<div className="flex-1 border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
									<div className="flex-1 border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
									<div className="flex-1 border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
									<div className="flex-1 border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
								</div>
							</div>
						</div>
						<div className="pt-[100px]"></div>
						<div className="">
							<CommentForm postTitle={post.title} />
						</div>
					</div>
					<div className="hidden xl:block">
						<div className="sticky top-[90px]">
							<div className="">
								<div className="relative">
									<img className="" src="/images/about/testimonial.svg" alt=""/>
									<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
										<div className="">
											<div className="">
												<div className="text-[#D4D4D4]">Tips &amp; Guides</div>
												<div className="font-teko font-semibold text-[24px]">RIXA FIT Blog</div>
												<div className="my-[10px] border-t-[2px] border-[#E22C32]"></div>
												<div className="flex justify-center">
													<img className="w-[81px] h-[81px]" src="/images/logo-mark-light.svg" alt=""/>
												</div>
												<div className="my-[10px] border-t-[2px] border-[#E22C32]"></div>
												<div className="font-teko font-semibold text-[24px]">{post.author}</div>
												<div className="text-[#D4D4D4]">{posts.length} Posts</div>
											</div>
										</div>
									</div>
								</div>
								<div className="pt-[100px]"></div>
								<BlogSearchForm />
								<div className="pt-[100px]"></div>
								<div className="border-[2px] border-[#D4D4D4] border-opacity-50 p-[30px]">
									<div className="font-teko font-semibold text-[28px] uppercase">Recent Article</div>
									<div className="pt-[20px]"></div>
									{recent.map((p) => (
										<div key={p.slug}>
											<div className="border-t-[2px] border-[#D4D4D4] border-opacity-50"></div>
											<div className="pt-[30px]"></div>
											<a className="flex gap-[20px] group/r" href={`/blog/${p.slug}`}>
												<div className="text-[10px] flex flex-col items-center gap-[5px]">
													<div className="text-[#E22C32]"><i className="fa fa-calendar"></i></div>
													<div className="flex-1 border-l-[1px] border-[#D4D4D4] border-opacity-50"></div>
													<div className="text-[#E22C32]"><i className="fa fa-book-open"></i></div>
												</div>
												<div className="shrink-0 w-[95px]">
													<img className="w-[95px] h-[86px] object-cover" src={p.image} alt=""/>
												</div>
												<div className="">
													<div className="font-teko font-semibold leading-[1.2] group-hover/r:text-[#E22C32] transition-colors duration-[.3s]">{p.title}</div>
													<div className="pt-[10px]"></div>
													<time dateTime={p.date} className="text-[14px] text-[#E22C32]">{formatPostDate(p.date)}</time>
												</div>
											</a>
											<div className="pt-[30px]"></div>
										</div>
									))}
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
