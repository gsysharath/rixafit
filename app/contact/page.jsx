import PageBanner from '../../components/PageBanner';
import ContactForm from '../../components/forms/ContactForm';
import { site } from '../../data/site';

export const metadata = {
	title: 'Contact Us',
	description: `Contact ${site.name} in Mahabubnagar. Call ${site.phoneDisplay} or ${site.altPhoneDisplay}, WhatsApp us or send an enquiry about memberships, classes and personal training.`,
	alternates: { canonical: '/contact' },
};

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
