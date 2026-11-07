// Scroll-triggered "swipe" reveal used across the template: four colour bars collapse
// and the content scales in once TemplateScripts marks the item `c-active`.
// Uses the named group `rv` so it never reacts to an unrelated `.group` ancestor.

const SCROLL_COG = JSON.stringify({ scrollTrigger: { trigger: '[data-scroll-item]' } });

export default function Reveal({ children, className = '' }) {
	return (
		<div data-scroll="[data-scroll-item]" className={className}>
			<div data-scroll-cog="" className="hidden">{SCROLL_COG}</div>
			<div data-scroll-item="" className="group/rv h-full">
				<div className="relative h-full">
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]/rv:scale-y-0 group-[.c-active]/rv:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]/rv:scale-y-0 group-[.c-active]/rv:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/rv:scale-y-0 group-[.c-active]/rv:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]/rv:scale-y-0 group-[.c-active]/rv:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
					<div className="h-full group-[:not(.c-active)]/rv:scale-y-0 group-[:not(.c-active)]/rv:delay-0 delay-[.4s] transition-all duration-[.3s]">
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}
