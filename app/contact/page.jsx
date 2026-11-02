import { pageMetadata } from '../../lib/seo';
import PageBanner from '../../components/PageBanner';
import ContactForm from '../../components/forms/ContactForm';
import { site } from '../../data/site';

export const metadata = pageMetadata({
	title: 'Contact Us - Gym in Padmavathi Colony, Mahabubnagar',
	description: `Visit RIXA FIT at ${site.address.line1}, ${site.address.line2}. Call ${site.phoneDisplay} or WhatsApp us about memberships, classes and personal training.`,
	path: '/contact',
	keywords: ['RIXA FIT contact', 'gym phone number Mahabubnagar', 'gym address Mahabubnagar'],
});

export default function ContactPage() {
	return (
		<div className="bg-[#01010F] text-[#E7E7E7]">
			<PageBanner title="Contact" gradient={true} />
		<div className="">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<iframe className="w-full h-[500px] grayscale" title={`${site.name} location on Google Maps`} src={site.mapEmbedUrl} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</div>

		{/* section */}
		<div className="pt-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<ContactForm />
			</div>
		</div>

		</div>
	);
}
