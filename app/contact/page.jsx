import { pageMetadata } from '../../lib/seo';
import PageBanner from '../../components/PageBanner';
import ContactQuickActions from '../../components/ContactQuickActions';
import ContactForm from '../../components/forms/ContactForm';
import { site } from '../../data/site';

export const metadata = pageMetadata({
	title: 'Contact Us - Gym in Padmavathi Colony, Mahabubnagar',
	description: `Visit RIXA FIT at ${site.address.line1}, ${site.address.line2}. Call ${site.phoneDisplay} or WhatsApp us about memberships, personal training and fitness programmes.`,
	path: '/contact',
	keywords: ['RIXA FIT contact', 'gym phone number Mahabubnagar', 'gym address Mahabubnagar'],
});

// Order matters on phones: one-tap call / WhatsApp / directions first, then the form, then the map.
export default function ContactPage() {
	return (
		<div className="bg-[#01010F] text-[#E7E7E7]">
			<PageBanner title="Contact" gradient={true} />

		{/* section: quick contact */}
		<div className="">
			<ContactQuickActions heading="Get In Touch" label="Contact" />
		</div>

		{/* section: enquiry form */}
		<div className="pt-[120px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="font-teko flex justify-center items-center gap-[15px] uppercase pb-[50px]">
					<h2 className="font-semibold text-[40px] md:text-[60px] leading-[1] text-center">Send Us a Message</h2>
				</div>
				<ContactForm />
			</div>
		</div>

		{/* section: map */}
		<div className="pt-[120px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="flex flex-wrap items-end justify-between gap-[20px] pb-[30px]">
					<div className="">
						<h2 className="font-teko font-semibold text-[40px] md:text-[60px] leading-[1] uppercase">Find Us</h2>
						<p className="pt-[10px]">{site.address.line1}, {site.address.line2}</p>
					</div>
					<a className="inline-flex items-center gap-[8px] font-teko text-[20px] uppercase bg-[#971A1E] text-white px-[20px] py-[6px] hover:bg-white hover:text-[#971A1E] transition-colors duration-[.3s]" href={site.directionsUrl} target="_blank" rel="noopener noreferrer">
						<i className="fa-solid fa-diamond-turn-right text-[14px]" aria-hidden="true"></i>Get directions
					</a>
				</div>
				<iframe className="w-full h-[320px] md:h-[450px] grayscale" title={`${site.name} location on Google Maps`} src={site.mapEmbedUrl} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</div>

		</div>
	);
}
