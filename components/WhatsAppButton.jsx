import { site, whatsappLink } from '../data/site';

// Floating WhatsApp chat button, fixed to the bottom-right corner of every page.
// It sits below the mobile menu (z-49) and header (z-50) so they still cover it when open.
export default function WhatsAppButton() {
	return (
		<a
			href={whatsappLink(`Hi ${site.name}, I'd like to know more about your gym.`)}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`Chat with ${site.name} on WhatsApp`}
			className="group fixed z-[45] right-[16px] bottom-[16px] md:right-[30px] md:bottom-[30px]"
		>
			<span className="relative flex items-center justify-center w-[60px] h-[60px] md:w-[68px] md:h-[68px] rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] group-hover:scale-110 transition-transform duration-[.3s]">
				<span className="absolute inset-0 rounded-full bg-[#25D366] animate-[wa-pulse_2.4s_ease-out_infinite] motion-reduce:hidden" aria-hidden="true"></span>
				<i className="fa-brands fa-whatsapp relative text-[34px] md:text-[38px]" aria-hidden="true"></i>
			</span>
		</a>
	);
}
