import { site, whatsappLink } from '../data/site';
import { testimonials, videoTestimonials } from '../data/testimonials';
import ReviewMarquee from './ReviewMarquee';
import VideoTestimonials from './VideoTestimonials';

// Member reviews from data/testimonials.js: written reviews in one auto-scrolling row, then
// member videos, then links to Google, Instagram and WhatsApp.

function ReviewLinks() {
	return (
		<div className="flex flex-wrap gap-[15px]">
			<a className="font-teko text-[20px] uppercase bg-[#971A1E] text-white px-[25px] py-[8px] hover:bg-white hover:text-[#971A1E] transition-colors duration-[.3s]" href={site.mapUrl} target="_blank" rel="noopener noreferrer">
				{testimonials.length > 0 ? 'Read all reviews on Google' : 'Read our Google reviews'}
			</a>
			<a className="font-teko text-[20px] uppercase border-[1px] border-[#E22C32] px-[25px] py-[8px] hover:bg-[#971A1E] transition-colors duration-[.3s]" href={site.instagram} target="_blank" rel="noopener noreferrer">
				<i className="fa-brands fa-instagram mr-[8px]"></i>{site.instagramHandle}
			</a>
			<a className="font-teko text-[20px] uppercase border-[1px] border-[#E22C32] px-[25px] py-[8px] hover:bg-[#971A1E] transition-colors duration-[.3s]" href={whatsappLink(`Hi ${site.name}, I'd like to share my feedback.`)} target="_blank" rel="noopener noreferrer">
				Share your feedback
			</a>
		</div>
	);
}

function VideoBlock() {
	return (
		<div className="pt-[70px] md:pt-[40px] xl:grid xl:grid-cols-[1fr_2fr] xl:gap-[50px] items-start">
			<div className="pb-[30px] xl:pb-0">
				<h3 className="font-teko font-semibold text-[36px] md:text-[44px] leading-[1] uppercase">
					Watch Their <span className="text-[#E22C32]">Stories</span>
				</h3>
				<p className="pt-[20px]">Prefer to watch? Hear our members talk about their {site.name} journey in their own words.</p>
			</div>
			<VideoTestimonials videos={videoTestimonials} />
		</div>
	);
}

export default function Testimonials() {
	return (
		<div className="max-w-[1320px] mx-auto px-[15px]">
			<div className="font-teko flex items-center gap-[15px] uppercase">
				<div className="font-semibold text-[48px] md:text-[60px] leading-[1]">What Our</div>
				<div className="font-medium text-[12px] text-[#E22C32] relative top-[-5px] border-r-[2px] border-l-[2px] border-[#E22C32] px-[5px] [writing-mode:tb]">Members</div>
				<div className="font-semibold text-[48px] md:text-[60px] leading-[1]">Say</div>
			</div>
			<div className="pt-[50px]"></div>
			{testimonials.length > 0 ? (
				<>
					<ReviewMarquee reviews={testimonials} />
					{videoTestimonials.length > 0 && <VideoBlock />}
					<div className="pt-[50px]">
						<ReviewLinks />
					</div>
				</>
			) : (
				<div className="relative border-[1px] border-[#D4D4D4]/30 p-[30px] md:p-[50px]">
					<div className="absolute top-[-1px] left-[-1px] w-[80px] border-t-[4px] border-[#E22C32]"></div>
					<p className="max-w-[760px]">
						Hear it from the people who train with us. Read what our members say about {site.name} on Google, see life at the gym on Instagram, or message us on WhatsApp to share your own experience.
					</p>
					<div className="pt-[30px]">
						<ReviewLinks />
					</div>
				</div>
			)}
		</div>
	);
}
