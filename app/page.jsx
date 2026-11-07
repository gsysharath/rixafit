import HomeBmiForm from '../components/forms/HomeBmiForm';
import NewsletterForm from '../components/forms/NewsletterForm';
import PlanCard from '../components/cards/PlanCard';
import WeeklyTimetable from '../components/WeeklyTimetable';
import HeroVideo from '../components/HeroVideo';
import Reveal from '../components/Reveal';
import Testimonials from '../components/Testimonials';
import { classes } from '../data/classes';
import { formatPrice, plans } from '../data/plans';
import { videoLink } from '../data/site';
import { pageMetadata } from '../lib/seo';

export const metadata = pageMetadata({
	title: 'RIXA FIT | Best Gym & Fitness Studio in Mahabubnagar',
	absoluteTitle: true,
	description: `RIXA FIT is a modern gym in Padmavathi Colony, Mahabubnagar - strength, cardio, kickboxing and HIIT classes, expert trainers and memberships from ${formatPrice(Math.min(...plans.map((p) => p.price)))}.`,
	path: '/',
	keywords: ['gym Mahabubnagar', 'fitness gym Telangana', 'personal training Mahabubnagar'],
});

const homePlans = ['fit-30', 'fit-365'].map((slug) => plans.find((p) => p.slug === slug));

export default function Home() {
	return (
		<div className="bg-[#01010F] text-[#E7E7E7]">
		<h1 className="sr-only">RIXA FIT - Gym &amp; Fitness Studio in Mahabubnagar</h1>
		{/* Small gap between the header and the hero (the hero height accounts for it). */}
		<div className="pt-[20px]"></div>
		<div data-slider="" className="relative">
			<div data-slider-cog="" className="hidden">{`
				{
					"container": ".hero",
					"items": 1,
					"nav": 0,
					"controls": 0
				}
			`}</div>
			{/* Gym tour video, shared by both hero slides (desktop only, like the photo it replaces) */}
			<div className="absolute top-0 right-0 bottom-0 left-0 hidden xl:grid grid-cols-2 gap-[200px] pointer-events-none">
				<div className=""></div>
				<Reveal className="relative h-full">
					<HeroVideo src="/videos/hero/gym-tour.mp4" poster="/videos/hero/gym-tour.webp" />
				</Reveal>
			</div>
			<div className="hero">
				<div className="group/s">
					<div className="relative">
						<div className="relative max-w-[1320px] mx-auto px-[15px] py-[100px] xl:py-0 xl:h-[calc(100vh-110px)] xl:min-h-[560px] xl:flex xl:flex-col xl:justify-center">
							<div className="font-bold leading-[1] uppercase">
								<div className="font-oswald">
									<div className="text-[80px] md:text-[160px] text-transparent">
										<div className="flex">
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.04s] delay-0 transition-all duration-[.3s]">I</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.03s] delay-[.01s] transition-all duration-[.3s]">I</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.02s] delay-[.02s] transition-all duration-[.3s]">I</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.01s] delay-[.03s] transition-all duration-[.3s]">I</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-0 delay-[.04s] transition-all duration-[.3s]">I</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.08s] delay-[.04s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.07s] delay-[.05s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.06s] delay-[.06s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.05s] delay-[.07s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.04s] delay-[.08s] transition-all duration-[.3s]">g</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.12s] delay-[.08s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.11s] delay-[.09s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.1s] delay-[.1s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.09s] delay-[.11s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.08s] delay-[.12s] transition-all duration-[.3s]">n</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.16s] delay-[.12s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.15s] delay-[.13s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.14s] delay-[.14s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.13s] delay-[.15s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.12s] delay-[.16s] transition-all duration-[.3s]">i</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.2s] delay-[.16s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.19s] delay-[.17s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.18s] delay-[.18s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.17s] delay-[.19s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.16s] delay-[.2s] transition-all duration-[.3s]">t</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.24s] delay-[.2s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.23s] delay-[.21s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.22s] delay-[.22s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.21s] delay-[.23s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.2s] delay-[.24s] transition-all duration-[.3s]">e</div>
											</div>
										</div>
									</div>
									<div className="text-[40px] md:text-[92px] text-transparent">
										<div className="flex">
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.28s] delay-[.24s] transition-all duration-[.3s]">T</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.27s] delay-[.25s] transition-all duration-[.3s]">T</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.26s] delay-[.26s] transition-all duration-[.3s]">T</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.25s] delay-[.27s] transition-all duration-[.3s]">T</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.24s] delay-[.28s] transition-all duration-[.3s]">T</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.32s] delay-[.28s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.31s] delay-[.29s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.30s] delay-[.30s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.29s] delay-[.31s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.28s] delay-[.32s] transition-all duration-[.3s]">r</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.36s] delay-[.32s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.35s] delay-[.33s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.34s] delay-[.34s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.33s] delay-[.35s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.32s] delay-[.36s] transition-all duration-[.3s]">a</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.40s] delay-[.36s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.39s] delay-[.37s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.38s] delay-[.38s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.37s] delay-[.39s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.36s] delay-[.40s] transition-all duration-[.3s]">n</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.44s] delay-[.40s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.43s] delay-[.41s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.42s] delay-[.42s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.41s] delay-[.43s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.40s] delay-[.44s] transition-all duration-[.3s]">s</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.48s] delay-[.44s] transition-all duration-[.3s]">f</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.47s] delay-[.45s] transition-all duration-[.3s]">f</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.46s] delay-[.46s] transition-all duration-[.3s]">f</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.45s] delay-[.47s] transition-all duration-[.3s]">f</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.44s] delay-[.48s] transition-all duration-[.3s]">f</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.52s] delay-[.48s] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.51s] delay-[.49] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.50s] delay-[.50] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.49s] delay-[.51] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.48s] delay-[.52] transition-all duration-[.3s]">o</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.56s] delay-[.52s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.55s] delay-[.53s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.54s] delay-[.54s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.53s] delay-[.55s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.52s] delay-[.56s] transition-all duration-[.3s]">r</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.60s] delay-[.56s] transition-all duration-[.3s]">m</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.59s] delay-[.57s] transition-all duration-[.3s]">m</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.58s] delay-[.58s] transition-all duration-[.3s]">m</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.57s] delay-[.59s] transition-all duration-[.3s]">m</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.56s] delay-[.60s] transition-all duration-[.3s]">m</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.64s] delay-[.60s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.63s] delay-[.61s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.62s] delay-[.62s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.61s] delay-[.63s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.6s] delay-[.64s] transition-all duration-[.3s]">a</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.68s] delay-[.64s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.67s] delay-[.65s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.66s] delay-[.66s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.65s] delay-[.67s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.64s] delay-[.68s] transition-all duration-[.3s]">t</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.72s] delay-[.68s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.71s] delay-[.69s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.70s] delay-[.70s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.69s] delay-[.71s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.68s] delay-[.72s] transition-all duration-[.3s]">i</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.76s] delay-[.72s] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.75s] delay-[.73s] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.74s] delay-[.74s] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.73s] delay-[.75s] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.72s] delay-[.76s] transition-all duration-[.3s]">o</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.80s] delay-[.76s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.79s] delay-[.77s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.78s] delay-[.78s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.77s] delay-[.79s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.76s] delay-[.80s] transition-all duration-[.3s]">n</div>
											</div>
										</div>
									</div>
								</div>
								<div className="font-teko pt-[10px] md:pt-[30px]">
									<div className="text-[30px] md:text-[73px]">
										<div className="flex">
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.84s] delay-[.80s] transition-all duration-[.3s]">&amp;</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.83s] delay-[.81s] transition-all duration-[.3s]">&amp;</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.82s] delay-[.82s] transition-all duration-[.3s]">&amp;</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.81s] delay-[.83s] transition-all duration-[.3s]">&amp;</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.80s] delay-[.84s] transition-all duration-[.3s]">&amp;</div>
											</div>
											<div className="">&nbsp;</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.88s] delay-[.84s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.87s] delay-[.85s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.86s] delay-[.86s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.85s] delay-[.87s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.84s] delay-[.88s] transition-all duration-[.3s]">U</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.92s] delay-[.88s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.91s] delay-[.89s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.9s] delay-[.9s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.89s] delay-[.91s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.88s] delay-[.92s] transition-all duration-[.3s]">n</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.96s] delay-[.92s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.95s] delay-[.93s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.94s] delay-[.94s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.93s] delay-[.95s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.92s] delay-[.96s] transition-all duration-[.3s]">i</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1s] delay-[.96s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.99s] delay-[.97s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.98s] delay-[.98s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.97s] delay-[.99s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.96s] delay-[1s] transition-all duration-[.3s]">t</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.05s] delay-[1.01s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.04s] delay-[1.02s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.03s] delay-[1.03s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.02s] delay-[1.04s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.01s] delay-[1.05s] transition-all duration-[.3s]">e</div>
											</div>
											<div className="">&nbsp;</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.09s] delay-[1.05s] transition-all duration-[.3s]">Y</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.08s] delay-[1.06s] transition-all duration-[.3s]">Y</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.07s] delay-[1.07s] transition-all duration-[.3s]">Y</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.06s] delay-[1.08s] transition-all duration-[.3s]">Y</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.05s] delay-[1.09s] transition-all duration-[.3s]">Y</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.14s] delay-[1.10s] transition-all duration-[.3s]">O</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.13s] delay-[1.11s] transition-all duration-[.3s]">O</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.12s] delay-[1.12s] transition-all duration-[.3s]">O</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.11s] delay-[1.13s] transition-all duration-[.3s]">O</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.10s] delay-[1.14s] transition-all duration-[.3s]">O</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.18s] delay-[1.14s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.17s] delay-[1.15s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.16s] delay-[1.16s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.15s] delay-[1.17s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.14s] delay-[1.18s] transition-all duration-[.3s]">U</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.22s] delay-[1.18s] transition-all duration-[.3s]">R</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.21s] delay-[1.19s] transition-all duration-[.3s]">R</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.20s] delay-[1.20s] transition-all duration-[.3s]">R</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.19s] delay-[1.21s] transition-all duration-[.3s]">R</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.18s] delay-[1.22s] transition-all duration-[.3s]">R</div>
											</div>
											<div className="">&nbsp;</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.26s] delay-[1.22s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.25s] delay-[1.23s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.24s] delay-[1.24s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.23s] delay-[1.25s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.22s] delay-[1.26s] transition-all duration-[.3s]">s</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.30s] delay-[1.26s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.29s] delay-[1.27s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.28s] delay-[1.28s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.29s] delay-[1.29s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.30s] delay-[1.30s] transition-all duration-[.3s]">t</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.35s] delay-[1.30s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.34s] delay-[1.32] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.33s] delay-[1.33] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.32s] delay-[1.34] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.31s] delay-[1.35] transition-all duration-[.3s]">r</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.39s] delay-[1.35s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.38s] delay-[1.36s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.37s] delay-[1.37s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.36s] delay-[1.38s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.35s] delay-[1.39s] transition-all duration-[.3s]">e</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.43s] delay-[1.39s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.42s] delay-[1.40s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.41s] delay-[1.41s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.40s] delay-[1.42s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.39s] delay-[1.43s] transition-all duration-[.3s]">n</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.47s] delay-[1.43s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.46s] delay-[1.44s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.45s] delay-[1.45s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.44s] delay-[1.46s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.43s] delay-[1.47s] transition-all duration-[.3s]">g</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.51s] delay-[1.47s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.50s] delay-[1.48s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.49s] delay-[1.49s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.48s] delay-[1.50s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.47s] delay-[1.51s] transition-all duration-[.3s]">t</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.55s] delay-[1.51s] transition-all duration-[.3s]">h</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.54s] delay-[1.52s] transition-all duration-[.3s]">h</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.53s] delay-[1.53s] transition-all duration-[.3s]">h</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.52s] delay-[1.54s] transition-all duration-[.3s]">h</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.51s] delay-[1.55s] transition-all duration-[.3s]">h</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="pt-[50px]"></div>
							<div className="">
								<div className="">Discover fitness excellence at our premier gym. With top equipment, expert trainers,</div>
								<div className="md:flex gap-[20px] pt-[10px]">
									<div className="">
										<div className="flex items-center">
											<a className="group relative" href={`/classes/${classes[0].slug}#book`}>
												<div className="absolute top-0 right-0 bottom-0 left-0 border-[1px] border-[#E22C32] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="relative h-[54px] w-[175px] flex justify-center items-center">
													<div className="relative font-teko font-medium text-[20px]">
														<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
															<div className="flex items-center gap-[10px]">
																<div className="text-white">JOIN CLASS</div>
																<div className="">
																	<img className="" src="/images/home/hero-arrow.svg" alt=""/>
																</div>
															</div>
														</div>
														<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]">
															<div className="flex items-center gap-[10px]">
																<div className="">JOIN CLASS</div>
																<div className="">
																	<img className="" src="/images/home/hero-arrow.svg" alt=""/>
																</div>
															</div>
														</div>
													</div>
												</div>
											</a>
										</div>
									</div>
									<div className="hidden md:block">
										<div className="relative top-[-5px]">and dynamic classes, we're committed to helping you reach</div>
										<div className="">your goals. Join us today and unleash your full potential!</div>
									</div>
								</div>
							</div>
							<div className="pt-[100px]"></div>
						</div>
					</div>
				</div>
				<div className="group/s">
					<div className="relative">
						<div className="relative max-w-[1320px] mx-auto px-[15px] py-[100px] xl:py-0 xl:h-[calc(100vh-110px)] xl:min-h-[560px] xl:flex xl:flex-col xl:justify-center">
							<div className="font-bold leading-[1] uppercase">
								<div className="font-oswald">
									<div className="text-[80px] md:text-[160px] text-transparent">
										<div className="flex">
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.04s] delay-0 transition-all duration-[.3s]">I</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.03s] delay-[.01s] transition-all duration-[.3s]">I</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.02s] delay-[.02s] transition-all duration-[.3s]">I</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.01s] delay-[.03s] transition-all duration-[.3s]">I</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-0 delay-[.04s] transition-all duration-[.3s]">I</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.08s] delay-[.04s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.07s] delay-[.05s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.06s] delay-[.06s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.05s] delay-[.07s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.04s] delay-[.08s] transition-all duration-[.3s]">g</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.12s] delay-[.08s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.11s] delay-[.09s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.1s] delay-[.1s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.09s] delay-[.11s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.08s] delay-[.12s] transition-all duration-[.3s]">n</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.16s] delay-[.12s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.15s] delay-[.13s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.14s] delay-[.14s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.13s] delay-[.15s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.12s] delay-[.16s] transition-all duration-[.3s]">i</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.2s] delay-[.16s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.19s] delay-[.17s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.18s] delay-[.18s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.17s] delay-[.19s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.16s] delay-[.2s] transition-all duration-[.3s]">t</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.24s] delay-[.2s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.23s] delay-[.21s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.22s] delay-[.22s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.21s] delay-[.23s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.2s] delay-[.24s] transition-all duration-[.3s]">e</div>
											</div>
										</div>
									</div>
									<div className="text-[40px] md:text-[92px] text-transparent">
										<div className="flex">
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.28s] delay-[.24s] transition-all duration-[.3s]">T</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.27s] delay-[.25s] transition-all duration-[.3s]">T</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.26s] delay-[.26s] transition-all duration-[.3s]">T</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.25s] delay-[.27s] transition-all duration-[.3s]">T</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.24s] delay-[.28s] transition-all duration-[.3s]">T</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.32s] delay-[.28s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.31s] delay-[.29s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.30s] delay-[.30s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.29s] delay-[.31s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.28s] delay-[.32s] transition-all duration-[.3s]">r</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.36s] delay-[.32s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.35s] delay-[.33s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.34s] delay-[.34s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.33s] delay-[.35s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.32s] delay-[.36s] transition-all duration-[.3s]">a</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.40s] delay-[.36s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.39s] delay-[.37s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.38s] delay-[.38s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.37s] delay-[.39s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.36s] delay-[.40s] transition-all duration-[.3s]">n</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.44s] delay-[.40s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.43s] delay-[.41s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.42s] delay-[.42s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.41s] delay-[.43s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.40s] delay-[.44s] transition-all duration-[.3s]">s</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.48s] delay-[.44s] transition-all duration-[.3s]">f</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.47s] delay-[.45s] transition-all duration-[.3s]">f</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.46s] delay-[.46s] transition-all duration-[.3s]">f</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.45s] delay-[.47s] transition-all duration-[.3s]">f</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.44s] delay-[.48s] transition-all duration-[.3s]">f</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.52s] delay-[.48s] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.51s] delay-[.49] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.50s] delay-[.50] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.49s] delay-[.51] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.48s] delay-[.52] transition-all duration-[.3s]">o</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.56s] delay-[.52s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.55s] delay-[.53s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.54s] delay-[.54s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.53s] delay-[.55s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.52s] delay-[.56s] transition-all duration-[.3s]">r</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.60s] delay-[.56s] transition-all duration-[.3s]">m</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.59s] delay-[.57s] transition-all duration-[.3s]">m</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.58s] delay-[.58s] transition-all duration-[.3s]">m</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.57s] delay-[.59s] transition-all duration-[.3s]">m</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.56s] delay-[.60s] transition-all duration-[.3s]">m</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.64s] delay-[.60s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.63s] delay-[.61s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.62s] delay-[.62s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.61s] delay-[.63s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.6s] delay-[.64s] transition-all duration-[.3s]">a</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.68s] delay-[.64s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.67s] delay-[.65s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.66s] delay-[.66s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.65s] delay-[.67s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.64s] delay-[.68s] transition-all duration-[.3s]">t</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.72s] delay-[.68s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.71s] delay-[.69s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.70s] delay-[.70s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.69s] delay-[.71s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.68s] delay-[.72s] transition-all duration-[.3s]">i</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.76s] delay-[.72s] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.75s] delay-[.73s] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.74s] delay-[.74s] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.73s] delay-[.75s] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.72s] delay-[.76s] transition-all duration-[.3s]">o</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#E22C32] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.80s] delay-[.76s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.79s] delay-[.77s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.78s] delay-[.78s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.77s] delay-[.79s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.76s] delay-[.80s] transition-all duration-[.3s]">n</div>
											</div>
										</div>
									</div>
								</div>
								<div className="font-teko pt-[10px] md:pt-[30px]">
									<div className="text-[30px] md:text-[73px]">
										<div className="flex">
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.84s] delay-[.80s] transition-all duration-[.3s]">&amp;</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.83s] delay-[.81s] transition-all duration-[.3s]">&amp;</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.82s] delay-[.82s] transition-all duration-[.3s]">&amp;</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.81s] delay-[.83s] transition-all duration-[.3s]">&amp;</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.80s] delay-[.84s] transition-all duration-[.3s]">&amp;</div>
											</div>
											<div className="">&nbsp;</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.88s] delay-[.84s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.87s] delay-[.85s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.86s] delay-[.86s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.85s] delay-[.87s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.84s] delay-[.88s] transition-all duration-[.3s]">U</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.92s] delay-[.88s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.91s] delay-[.89s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.9s] delay-[.9s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.89s] delay-[.91s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.88s] delay-[.92s] transition-all duration-[.3s]">n</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.96s] delay-[.92s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.95s] delay-[.93s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.94s] delay-[.94s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.93s] delay-[.95s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.92s] delay-[.96s] transition-all duration-[.3s]">i</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1s] delay-[.96s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.99s] delay-[.97s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.98s] delay-[.98s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.97s] delay-[.99s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.96s] delay-[1s] transition-all duration-[.3s]">t</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.05s] delay-[1.01s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.04s] delay-[1.02s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.03s] delay-[1.03s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.02s] delay-[1.04s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.01s] delay-[1.05s] transition-all duration-[.3s]">e</div>
											</div>
											<div className="">&nbsp;</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.09s] delay-[1.05s] transition-all duration-[.3s]">Y</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.08s] delay-[1.06s] transition-all duration-[.3s]">Y</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.07s] delay-[1.07s] transition-all duration-[.3s]">Y</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.06s] delay-[1.08s] transition-all duration-[.3s]">Y</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.05s] delay-[1.09s] transition-all duration-[.3s]">Y</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.14s] delay-[1.10s] transition-all duration-[.3s]">O</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.13s] delay-[1.11s] transition-all duration-[.3s]">O</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.12s] delay-[1.12s] transition-all duration-[.3s]">O</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.11s] delay-[1.13s] transition-all duration-[.3s]">O</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.10s] delay-[1.14s] transition-all duration-[.3s]">O</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.18s] delay-[1.14s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.17s] delay-[1.15s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.16s] delay-[1.16s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.15s] delay-[1.17s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.14s] delay-[1.18s] transition-all duration-[.3s]">U</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.22s] delay-[1.18s] transition-all duration-[.3s]">R</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.21s] delay-[1.19s] transition-all duration-[.3s]">R</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.20s] delay-[1.20s] transition-all duration-[.3s]">R</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.19s] delay-[1.21s] transition-all duration-[.3s]">R</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.18s] delay-[1.22s] transition-all duration-[.3s]">R</div>
											</div>
											<div className="">&nbsp;</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.26s] delay-[1.22s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.25s] delay-[1.23s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.24s] delay-[1.24s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.23s] delay-[1.25s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.22s] delay-[1.26s] transition-all duration-[.3s]">s</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.30s] delay-[1.26s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.29s] delay-[1.27s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.28s] delay-[1.28s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.29s] delay-[1.29s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.30s] delay-[1.30s] transition-all duration-[.3s]">t</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.35s] delay-[1.30s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.34s] delay-[1.32] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.33s] delay-[1.33] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.32s] delay-[1.34] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.31s] delay-[1.35] transition-all duration-[.3s]">r</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.39s] delay-[1.35s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.38s] delay-[1.36s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.37s] delay-[1.37s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.36s] delay-[1.38s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.35s] delay-[1.39s] transition-all duration-[.3s]">e</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.43s] delay-[1.39s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.42s] delay-[1.40s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.41s] delay-[1.41s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.40s] delay-[1.42s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.39s] delay-[1.43s] transition-all duration-[.3s]">n</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.47s] delay-[1.43s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.46s] delay-[1.44s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.45s] delay-[1.45s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.44s] delay-[1.46s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.43s] delay-[1.47s] transition-all duration-[.3s]">g</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.51s] delay-[1.47s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.50s] delay-[1.48s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.49s] delay-[1.49s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.48s] delay-[1.50s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.47s] delay-[1.51s] transition-all duration-[.3s]">t</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.55s] delay-[1.51s] transition-all duration-[.3s]">h</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.54s] delay-[1.52s] transition-all duration-[.3s]">h</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.53s] delay-[1.53s] transition-all duration-[.3s]">h</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.52s] delay-[1.54s] transition-all duration-[.3s]">h</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.51s] delay-[1.55s] transition-all duration-[.3s]">h</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="pt-[50px]"></div>
							<div className="">
								<div className="">Discover fitness excellence at our premier gym. With top equipment, expert trainers,</div>
								<div className="md:flex gap-[20px] pt-[10px]">
									<div className="">
										<div className="flex items-center">
											<a className="group relative" href={`/classes/${classes[0].slug}#book`}>
												<div className="absolute top-0 right-0 bottom-0 left-0 border-[1px] border-[#E22C32] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="relative h-[54px] w-[175px] flex justify-center items-center">
													<div className="relative font-teko font-medium text-[20px]">
														<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
															<div className="flex items-center gap-[10px]">
																<div className="text-white">JOIN CLASS</div>
																<div className="">
																	<img className="" src="/images/home/hero-arrow.svg" alt=""/>
																</div>
															</div>
														</div>
														<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]">
															<div className="flex items-center gap-[10px]">
																<div className="">JOIN CLASS</div>
																<div className="">
																	<img className="" src="/images/home/hero-arrow.svg" alt=""/>
																</div>
															</div>
														</div>
													</div>
												</div>
											</a>
										</div>
									</div>
									<div className="hidden md:block">
										<div className="relative top-[-5px]">and dynamic classes, we're committed to helping you reach</div>
										<div className="">your goals. Join us today and unleash your full potential!</div>
									</div>
								</div>
							</div>
							<div className="pt-[100px]"></div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="overflow-hidden pb-[50px] mt-[-100px]">
			<div data-scroll="[data-scroll-item]" className="">
				<div data-scroll-cog="" className="hidden">{`
					{
						"scrollTrigger": {
							"trigger": "[data-scroll-item]"
							
						}
					}
				`}</div>
				<div data-scroll-item="" className="group">
					<div className="origin-left relative top-[50px] text-[#01010F] overflow-hidden py-[20px] group-[.c-active]:rotate-[3deg] transition-all duration-[.3s]">
						<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-[.09s] delay-0 transition-all duration-[.3s]"></div>
						<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-[.06s] delay-[.03s] transition-all duration-[.3s]"></div>
						<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-[.03s] delay-[.06s] transition-all duration-[.3s]"></div>
						<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.09s] transition-all duration-[.3s]"></div>
						<div className="relative flex whitespace-nowrap items-center justify-center gap-[30px] font-teko font-semibold text-[28px] uppercase">
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-0 delay-0 transition-all duration-[.3s]">Rise up</div>
							<img className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.03s] delay-0 transition-all duration-[.3s]" src="/images/home/sliding.svg" alt=""/>
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.06s] delay-0 transition-all duration-[.3s]">show up</div>
							<img className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.09s] delay-0 transition-all duration-[.3s]" src="/images/home/sliding.svg" alt=""/>
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.12s] delay-0 transition-all duration-[.3s]">never give up</div>
							<img className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.15s] delay-0 transition-all duration-[.3s]" src="/images/home/sliding.svg" alt=""/>
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.16s] delay-0 transition-all duration-[.3s]">Train hard</div>
							<img className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.19s] delay-0 transition-all duration-[.3s]" src="/images/home/sliding.svg" alt=""/>
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.22s] delay-0 transition-all duration-[.3s]">Train hard</div>
							<img className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.25s] delay-0 transition-all duration-[.3s]" src="/images/home/sliding.svg" alt=""/>
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.28s] delay-0 transition-all duration-[.3s]">Train hard</div>
							<img className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.31s] delay-0 transition-all duration-[.3s]" src="/images/home/sliding.svg" alt=""/>
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.33s] delay-0 transition-all duration-[.3s]">stay humble</div>
							<img className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.36s] delay-0 transition-all duration-[.3s]" src="/images/home/sliding.svg" alt=""/>
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.39s] delay-0 transition-all duration-[.3s]">stay humble</div>
							<img className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.42s] delay-0 transition-all duration-[.3s]" src="/images/home/sliding.svg" alt=""/>
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.45s] delay-0 transition-all duration-[.3s]">be proud</div>
							<img className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.48s] delay-0 transition-all duration-[.3s]" src="/images/home/sliding.svg" alt=""/>
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.51s] delay-0 transition-all duration-[.3s]">Believe in yourself</div>
						</div>
					</div>
					<div className="relative overflow-hidden py-[20px] text-white group-[.c-active]:rotate-[-3deg]">
						<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-[.09s] delay-0 transition-all duration-[.3s]"></div>
						<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-[.06s] delay-[.03s] transition-all duration-[.3s]"></div>
						<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-[.03s] delay-[.06s] transition-all duration-[.3s]"></div>
						<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.09s] transition-all duration-[.3s]"></div>
						<div className="relative flex whitespace-nowrap items-center justify-center gap-[30px] font-teko font-semibold text-[28px] uppercase">
							<div className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-0 delay-0 transition-all duration-[.3s]">Sweat now, shine later</div>
							<img className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.03s] delay-0 transition-all duration-[.3s]" src="/images/home/sliding-black.svg" alt=""/>
							<div className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.06s] delay-0 transition-all duration-[.3s]">Stronger every rep</div>
							<img className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.09s] delay-0 transition-all duration-[.3s]" src="/images/home/sliding-black.svg" alt=""/>
							<div className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.12s] delay-0 transition-all duration-[.3s]">prouder every step</div>
							<img className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.15s] delay-0 transition-all duration-[.3s]" src="/images/home/sliding-black.svg" alt=""/>
							<div className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.18s] delay-0 transition-all duration-[.3s]">Push your limits</div>
							<img className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.21s] delay-0 transition-all duration-[.3s]" src="/images/home/sliding-black.svg" alt=""/>
							<div className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.24s] delay-0 transition-all duration-[.3s]">exceed your expectations</div>
							<img className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.25s] delay-0 transition-all duration-[.3s]" src="/images/home/sliding-black.svg" alt=""/>
							<div className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.28s] delay-0 transition-all duration-[.3s]">Rise up, show up, never give up</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="py-[150px]">
			<div className="relative max-w-[1320px] mx-auto px-[15px]">
				<div className="xl:grid grid-cols-2 gap-[100px]">
					<div className="hidden xl:block">
						<div className="grid grid-cols-2 gap-[30px]">
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
											<img className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]" src="/images/home/about1.webp" alt=""/>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="relative">
									<div className="pt-[75px]"></div>
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
												<img className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]" src="/images/home/about2.webp" alt=""/>
											</div>
											<div className="absolute top-0 left-0">
												<img className="bg-[#01010F] rounded-full group-[.c-active]:animate-spin group-[.c-active]:[animation:spin_10s_linear_infinite]" src="/images/home/Circle.svg" alt=""/>
												<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
													<img className="w-[54px] h-[55px]" src="/images/logo-mark-light.svg" alt=""/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="font-teko flex items-center gap-[15px] uppercase">
							<div className="font-semibold text-[40px] md:text-[60px] leading-[1]">GYM Fitness Meets</div>
							<div className="hidden md:block font-medium text-[12px] text-[#E22C32] relative top-[-5px] border-r-[2px] border-l-[2px] border-[#E22C32] px-[5px] [writing-mode:tb]">About Us</div>
							<div className="hidden md:block font-semibold text-[60px] leading-[1]">Here</div>
						</div>
						<div className="md:flex gap-[10px]">
							<div className="">
								<div className="font-oswald font-semibold text-[60px] leading-[1] uppercase">
									<div data-scroll="[data-scroll-item]" className="">
										<div data-scroll-cog="" className="hidden">{`
											{
												"scrollTrigger": {
													"trigger": "[data-scroll-item]"
													
												}
											}
										`}</div>
										<div data-scroll-item="odometer" className="group">
											<div className="flex">
												<div className="relative">
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">E</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">E</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">E</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">E</div>
													<div className="text-transparent [-webkit-text-stroke:1px_#E22C32] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">E</div>
												</div>
												<div className="relative">
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">x</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">x</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">x</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">x</div>
													<div className="text-transparent [-webkit-text-stroke:1px_#E22C32] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">x</div>
												</div>
												<div className="relative">
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">c</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">c</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">c</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">c</div>
													<div className="text-transparent [-webkit-text-stroke:1px_#E22C32] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">c</div>
												</div>
												<div className="relative">
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">e</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">e</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">e</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">e</div>
													<div className="text-transparent [-webkit-text-stroke:1px_#E22C32] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">e</div>
												</div>
												<div className="relative">
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">l</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">l</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">l</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">l</div>
													<div className="text-transparent [-webkit-text-stroke:1px_#E22C32] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">l</div>
												</div>
												<div className="relative">
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">l</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">l</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">l</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">l</div>
													<div className="text-transparent [-webkit-text-stroke:1px_#E22C32] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">l</div>
												</div>
												<div className="relative">
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">e</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">e</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">e</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">e</div>
													<div className="text-transparent [-webkit-text-stroke:1px_#E22C32] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">e</div>
												</div>
												<div className="relative">
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">n</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">n</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">n</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">n</div>
													<div className="text-transparent [-webkit-text-stroke:1px_#E22C32] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">n</div>
												</div>
												<div className="relative">
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">c</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">c</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">c</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">c</div>
													<div className="text-transparent [-webkit-text-stroke:1px_#E22C32] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">c</div>
												</div>
												<div className="relative">
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">e</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">e</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">e</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">e</div>
													<div className="text-transparent [-webkit-text-stroke:1px_#E22C32] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">e</div>
												</div>
												<div className="relative">
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">!</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">!</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">!</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#E22C32] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">!</div>
													<div className="text-transparent [-webkit-text-stroke:1px_#E22C32] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">!</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden md:block">
								<div className="pt-[5px]"></div>
								<div className="">Modern equipment, expert coaches</div>
								<div className="pt-[5px]"></div>
								<div className="">and a community that moves you.</div>
							</div>
						</div>
						<div className="pt-[5px]"></div>
						<div className="leading-[1.8]">
							<div className="">At RIXA FIT Mahabubnagar we combine strength, cardio and combat training</div>
							<div className="">with personal coaching and nutrition guidance to help you reach your goals.</div>
						</div>
						<div className="pt-[70px]"></div>
						<div className="relative">
							<div className="absolute top-0 right-0 bottom-0 left-0 border-t-[2px] border-[#E22C32] m-auto h-[2px]"></div>
							<div className="relative font-teko leading-[1] font-semibold text-[60px] grid grid-cols-1 md:grid-cols-2 gap-[100px] uppercase">
								<div className="hidden md:block">
									<div className="flex gap-[30px]">
										<div className="w-[105px] flex justify-end items-center leading-[.8]">
											<div data-scroll="[data-scroll-item]" className="">
												<div data-scroll-cog="" className="hidden">{`
													{
														"scrollTrigger": {
															"trigger": "[data-scroll-item]"
															
														}
													}
												`}</div>
												<div data-scroll-item="odometer" className="group">
													<div className="odometer" data-v="17">0</div>
												</div>
											</div>
											<div className="">+</div>
										</div>
										<div className="border-l-[2px] border-[#E22C32]"></div>
										<div className="text-[24px]">
											<div className="">YEARS OF</div>
											<div className="">SERVICE</div>
										</div>
									</div>
								</div>
								<div className="hidden md:block">
									<div className="flex gap-[30px]">
										<div className="w-[105px] flex justify-end items-center leading-[.8]">
											<div data-scroll="[data-scroll-item]" className="">
												<div data-scroll-cog="" className="hidden">{`
													{
														"scrollTrigger": {
															"trigger": "[data-scroll-item]"
															
														}
													}
												`}</div>
												<div data-scroll-item="odometer" className="group">
													<div className="odometer" data-v="29">0</div>
												</div>
											</div>
											<div className="">+</div>
										</div>
										<div className="border-l-[2px] border-[#E22C32]"></div>
										<div className="text-[24px]">
											<div className="">FITNESS</div>
											<div className="">TRAINEE</div>
										</div>
									</div>
								</div>
								<div className="">
									<div className="flex gap-[30px]">
										<div className="w-[105px] flex justify-end items-center leading-[.8]">
											<div data-scroll="[data-scroll-item]" className="">
												<div data-scroll-cog="" className="hidden">{`
													{
														"scrollTrigger": {
															"trigger": "[data-scroll-item]"
															
														}
													}
												`}</div>
												<div data-scroll-item="odometer" className="group">
													<div className="odometer" data-v="3">0</div>
												</div>
											</div>
											<div className="">k</div>
										</div>
										<div className="border-l-[2px] border-[#E22C32]"></div>
										<div className="text-[24px]">
											<div className="">Hours</div>
											<div className="">Trained</div>
										</div>
									</div>
								</div>
								<div className="">
									<div className="flex gap-[30px]">
										<div className="w-[105px] flex justify-end items-center leading-[.8]">
											<div data-scroll="[data-scroll-item]" className="">
												<div data-scroll-cog="" className="hidden">{`
													{
														"scrollTrigger": {
															"trigger": "[data-scroll-item]"
															
														}
													}
												`}</div>
												<div data-scroll-item="odometer" className="group">
													<div className="odometer" data-v="42">0</div>
												</div>
											</div>
											<div className="">+</div>
										</div>
										<div className="border-l-[2px] border-[#E22C32]"></div>
										<div className="text-[24px]">
											<div className="">Happy</div>
											<div className="">Clients</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="flex justify-between">
					<div className="">
						<div className="font-teko flex items-center gap-[15px] uppercase">
							<div className="font-semibold text-[60px] leading-[1]">Our Upcoming</div>
							<div className="hidden md:block font-medium text-[12px] text-[#E22C32] relative top-[-5px] border-r-[2px] border-l-[2px] border-[#E22C32] px-[5px] [writing-mode:tb]">Top Ten</div>
							<div className="hidden md:block font-semibold text-[60px] leading-[1]">Classes</div>
						</div>
					</div>
					<div className="hidden xl:block">
						<div className="flex items-center">
							<div className="group relative classes-prev">
								<div className="absolute top-0 right-0 bottom-0 left-0 border-[2px] border-white border-opacity-0 rounded-full group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
								<div className="relative h-[60px] w-[60px] flex justify-center items-center">
									<div className="relative font-teko font-medium text-[20px]">
										<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
											<img className="" src="/images/home/hero-prev.svg" alt=""/>
										</div>
										<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
											<img className="" src="/images/home/hero-prev.svg" alt=""/>
										</div>
									</div>
								</div>
							</div>
							<div className="px-[50px] bg-white bg-opacity-25 h-[10px]"></div>
							<div className="group relative classes-next">
								<div className="absolute top-0 right-0 bottom-0 left-0 border-[2px] border-white border-opacity-0 rounded-full group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
								<div className="relative h-[60px] w-[60px] flex justify-center items-center">
									<div className="relative font-teko font-medium text-[20px]">
										<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
											<img className="" src="/images/home/hero-next.svg" alt=""/>
										</div>
										<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
											<img className="" src="/images/home/hero-next.svg" alt=""/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="pt-[50px]"></div>
				<div data-slider="" className="relative">
					<div data-slider-cog="" className="hidden">{`
						{
							"container": ".classes",
							"items": 1,
							"nav": 0,
							"prevButton": ".classes-prev",
							"nextButton": ".classes-next"
						}
					`}</div>
					<div className="classes text-white">
						<div className="group/s">
							<div className="flex gap-[30px]">
								<div className="hidden xl:block">
									<div className="relative">
										<div className="relative">
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<img className="origin-bottom group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-0 delay-[.4s] transition-all duration-[.3s]" src="/images/home/class1.webp" alt={classes[0].name}/>
										</div>
										<div className="absolute right-0 bottom-0 left-0">
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#01010F] from-70% to-transparent to-70%"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#971A1E] from-70% to-transparent to-70% opacity-50"></div>
											<div className="relative p-[30px] ">
												<div className="font-teko font-semibold text-[28px]"><a className="hover:text-[#E22C32] after:absolute after:inset-0" href={`/classes/${classes[0].slug}`}>{classes[0].name}</a></div>
												<div className="flex justify-start">
													<div className="">
														<div className="border-t-[2px] border-[#01010F]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[10px] mt-[3px]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[20px] mt-[3px]"></div>
														<div className="mt-[10px]"></div>
														<div className="">{classes[0].tag}</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="hidden xl:block">
									<div className="relative">
										<div className="relative">
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<img className="origin-bottom group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-0 delay-[.4s] transition-all duration-[.3s]" src="/images/home/class2.webp" alt={classes[1].name}/>
										</div>
										<div className="absolute right-0 bottom-0 left-0">
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#01010F] from-70% to-transparent to-70%"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#971A1E] from-70% to-transparent to-70% opacity-50"></div>
											<div className="relative p-[30px] ">
												<div className="font-teko font-semibold text-[28px]"><a className="hover:text-[#E22C32] after:absolute after:inset-0" href={`/classes/${classes[1].slug}`}>{classes[1].name}</a></div>
												<div className="flex justify-start">
													<div className="">
														<div className="border-t-[2px] border-[#01010F]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[10px] mt-[3px]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[20px] mt-[3px]"></div>
														<div className="mt-[10px]"></div>
														<div className="">{classes[1].tag}</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="hidden md:block">
									<div className="relative">
										<div className="relative">
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<img className="origin-bottom group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-0 delay-[.4s] transition-all duration-[.3s]" src="/images/home/class3.webp" alt={classes[2].name}/>
										</div>
										<div className="absolute right-0 bottom-0 left-0">
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#01010F] from-70% to-transparent to-70%"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#971A1E] from-70% to-transparent to-70% opacity-50"></div>
											<div className="relative p-[30px] ">
												<div className="font-teko font-semibold text-[28px]"><a className="hover:text-[#E22C32] after:absolute after:inset-0" href={`/classes/${classes[2].slug}`}>{classes[2].name}</a></div>
												<div className="flex justify-start">
													<div className="">
														<div className="border-t-[2px] border-[#01010F]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[10px] mt-[3px]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[20px] mt-[3px]"></div>
														<div className="mt-[10px]"></div>
														<div className="">{classes[2].tag}</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="">
									<div className="relative">
										<div className="relative">
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<img className="origin-bottom group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-0 delay-[.4s] transition-all duration-[.3s]" src="/images/home/class4.webp" alt={classes[3].name}/>
										</div>
										<div className="absolute right-0 bottom-0 left-0">
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#01010F] from-70% to-transparent to-70%"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#971A1E] from-70% to-transparent to-70% opacity-50"></div>
											<div className="relative p-[30px] ">
												<div className="font-teko font-semibold text-[28px]"><a className="hover:text-[#E22C32] after:absolute after:inset-0" href={`/classes/${classes[3].slug}`}>{classes[3].name}</a></div>
												<div className="flex justify-start">
													<div className="">
														<div className="border-t-[2px] border-[#01010F]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[10px] mt-[3px]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[20px] mt-[3px]"></div>
														<div className="mt-[10px]"></div>
														<div className="">{classes[3].tag}</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="group/s">
							<div className="flex gap-[30px]">
								<div className="hidden xl:block">
									<div className="relative">
										<div className="relative">
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<img className="origin-bottom group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-0 delay-[.4s] transition-all duration-[.3s]" src="/images/home/class1.webp" alt={classes[0].name}/>
										</div>
										<div className="absolute right-0 bottom-0 left-0">
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#01010F] from-70% to-transparent to-70%"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#971A1E] from-70% to-transparent to-70% opacity-50"></div>
											<div className="relative p-[30px] ">
												<div className="font-teko font-semibold text-[28px]"><a className="hover:text-[#E22C32] after:absolute after:inset-0" href={`/classes/${classes[0].slug}`}>{classes[0].name}</a></div>
												<div className="flex justify-start">
													<div className="">
														<div className="border-t-[2px] border-[#01010F]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[10px] mt-[3px]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[20px] mt-[3px]"></div>
														<div className="mt-[10px]"></div>
														<div className="">{classes[0].tag}</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="hidden xl:block">
									<div className="relative">
										<div className="relative">
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<img className="origin-bottom group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-0 delay-[.4s] transition-all duration-[.3s]" src="/images/home/class2.webp" alt={classes[1].name}/>
										</div>
										<div className="absolute right-0 bottom-0 left-0">
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#01010F] from-70% to-transparent to-70%"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#971A1E] from-70% to-transparent to-70% opacity-50"></div>
											<div className="relative p-[30px] ">
												<div className="font-teko font-semibold text-[28px]"><a className="hover:text-[#E22C32] after:absolute after:inset-0" href={`/classes/${classes[1].slug}`}>{classes[1].name}</a></div>
												<div className="flex justify-start">
													<div className="">
														<div className="border-t-[2px] border-[#01010F]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[10px] mt-[3px]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[20px] mt-[3px]"></div>
														<div className="mt-[10px]"></div>
														<div className="">{classes[1].tag}</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="hidden md:block">
									<div className="relative">
										<div className="relative">
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<img className="origin-bottom group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-0 delay-[.4s] transition-all duration-[.3s]" src="/images/home/class3.webp" alt={classes[2].name}/>
										</div>
										<div className="absolute right-0 bottom-0 left-0">
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#01010F] from-70% to-transparent to-70%"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#971A1E] from-70% to-transparent to-70% opacity-50"></div>
											<div className="relative p-[30px] ">
												<div className="font-teko font-semibold text-[28px]"><a className="hover:text-[#E22C32] after:absolute after:inset-0" href={`/classes/${classes[2].slug}`}>{classes[2].name}</a></div>
												<div className="flex justify-start">
													<div className="">
														<div className="border-t-[2px] border-[#01010F]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[10px] mt-[3px]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[20px] mt-[3px]"></div>
														<div className="mt-[10px]"></div>
														<div className="">{classes[2].tag}</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="">
									<div className="relative">
										<div className="relative">
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<img className="origin-bottom group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-0 delay-[.4s] transition-all duration-[.3s]" src="/images/home/class4.webp" alt={classes[3].name}/>
										</div>
										<div className="absolute right-0 bottom-0 left-0">
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#01010F] from-70% to-transparent to-70%"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#971A1E] from-70% to-transparent to-70% opacity-50"></div>
											<div className="relative p-[30px] ">
												<div className="font-teko font-semibold text-[28px]"><a className="hover:text-[#E22C32] after:absolute after:inset-0" href={`/classes/${classes[3].slug}`}>{classes[3].name}</a></div>
												<div className="flex justify-start">
													<div className="">
														<div className="border-t-[2px] border-[#01010F]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[10px] mt-[3px]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[20px] mt-[3px]"></div>
														<div className="mt-[10px]"></div>
														<div className="">{classes[3].tag}</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="pt-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="flex flex-wrap justify-between items-end gap-[30px]">
					<div className="font-teko flex items-center gap-[15px] uppercase">
						<div className="font-semibold text-[48px] md:text-[60px] leading-[1]">Gym</div>
						<div className="font-medium text-[12px] text-[#E22C32] relative top-[-5px] border-r-[2px] border-l-[2px] border-[#E22C32] px-[5px] [writing-mode:tb]">Timings</div>
						<div className="font-semibold text-[48px] md:text-[60px] leading-[1]">Schedule</div>
					</div>
					<a className="font-teko text-[20px] uppercase border-[1px] border-[#E22C32] px-[25px] py-[8px] hover:bg-[#971A1E] transition-colors duration-[.3s]" href="/schedule">
						Full schedule<i className="fa-solid fa-arrow-right ml-[10px] text-[14px]"></i>
					</a>
				</div>
				<div className="pt-[50px]"></div>
				<WeeklyTimetable />
			</div>
		</div>

		{/* section */}
		<div className="pt-[150px]">
			<Testimonials />
		</div>

		{/* section */}
		<div className="py-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="font-teko flex justify-center items-center gap-[15px] uppercase">
					<div className="font-semibold text-[40px] md:text-[60px] leading-[1]">Calculator Form</div>
					<div className="hidden xl:block font-medium text-[12px] text-[#E22C32] relative top-[-5px] border-r-[2px] border-l-[2px] border-[#E22C32] px-[5px] [writing-mode:tb]">Next To</div>
					<div className="hidden xl:block font-semibold text-[60px] leading-[1]">Membership</div>
				</div>
				<div className="pt-[50px]"></div>
				<HomeBmiForm />
				<div className="pt-[100px]"></div>
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-[30px] text-center">
					<div className="">
						<PlanCard plan={homePlans[0]} />
					</div>
					<div className="hidden xl:block">
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
										<img className="" src="/images/home/pricing.webp" alt="Train at RIXA FIT"/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="">
						<PlanCard plan={homePlans[1]} featured />
					</div>
				</div>
				<div className="pt-[50px] flex justify-center">
					<a className="font-teko text-[22px] uppercase border-[1px] border-[#E22C32] px-[30px] py-[10px] hover:bg-[#971A1E] hover:text-white transition-colors duration-[.3s]" href="/pricing">
						View all {plans.length} membership plans <i className="fa fa-arrow-right ml-[8px]"></i>
					</a>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="text-white">
			<div className="grid xl:grid-cols-2">
				<div className="hidden xl:block relative">
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F]"></div>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-30"></div>
					<div className="relative grid grid-cols-2">
						<div className="">
							<div className="flex justify-end">
								<div className="p-[50px]">
									<div className="font-teko font-semibold text-[28px] text-[#D4D4D4] uppercase">Member Centric Approach</div>
									<div className="pt-[10px]"></div>
									<div className="flex items-center gap-[20px]">
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
															<img className="" src="/images/home/skills1.svg" alt=""/>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="flex-1 text-[14px]">
											<div className="">Every programme is built</div>
											<div className="">around your goals and</div>
											<div className="">your schedule.</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="">
							<div className="relative">
								<div className="relative p-[50px]">
									<div className="font-teko font-semibold text-[28px] text-[#D4D4D4] uppercase">Health and Wellness</div>
									<div className="pt-[10px]"></div>
									<div className="flex items-center gap-[20px]">
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
															<img className="" src="/images/home/skill2.svg" alt=""/>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="flex-1 text-[14px]">
											<div className="">Balanced training, rest</div>
											<div className="">and nutrition for a</div>
											<div className="">healthier lifestyle.</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="">
							<div className="flex justify-end">
								<div className="relative p-[50px]">
									<div className="font-teko font-semibold text-[28px] text-[#D4D4D4] uppercase">Knowledgeable Coaches</div>
									<div className="pt-[10px]"></div>
									<div className="flex items-center gap-[20px]">
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
															<img className="" src="/images/home/skill3.svg" alt=""/>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="flex-1 text-[14px]">
											<div className="">Experienced coaches who</div>
											<div className="">guide your form and</div>
											<div className="">track your progress.</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="">
							<div className="relative">
								<div className="relative p-[50px]">
									<div className="font-teko font-semibold text-[28px] text-[#D4D4D4] uppercase">Facilities & Equipment</div>
									<div className="pt-[10px]"></div>
									<div className="flex items-center gap-[20px]">
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
															<img className="" src="/images/home/skill4.svg" alt=""/>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="flex-1 text-[14px]">
											<div className="">Modern cardio, strength</div>
											<div className="">and boxing zones in a</div>
											<div className="">clean, safe space.</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="absolute top-0 bottom-0 left-0 m-auto h-[2px] w-1/2 flex items-center">
						<div className="flex-1 bg-[#01010F] border-t-[1px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-t-[3px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-t-[4px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-t-[7px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-t-[10px] border-[#E22C32] border-opacity-50"></div>
					</div>
					<div className="absolute top-0 right-0 bottom-0 m-auto h-[2px] w-1/2 flex items-center">
						<div className="flex-1 bg-[#01010F] border-t-[10px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-t-[7px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-t-[4px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-t-[3px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-t-[1px] border-[#E22C32] border-opacity-50"></div>
					</div>
					<div className="absolute top-0 right-0 left-0 m-auto h-1/2 w-[10px] flex flex-col items-center">
						<div className="flex-1 bg-[#01010F] border-l-[1px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-l-[3px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-l-[4px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-l-[7px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-l-[10px] border-[#E22C32] border-opacity-50"></div>
					</div>
					<div className="absolute right-0 bottom-0 left-0 m-auto h-1/2 w-[10px] flex flex-col items-center">
						<div className="flex-1 bg-[#01010F] border-l-[10px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-l-[7px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-l-[4px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-l-[3px] border-[#E22C32] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-l-[1px] border-[#E22C32] border-opacity-50"></div>
					</div>
				</div>
				<div className="relative flex justify-center items-center h-[400px] xl:h-auto">
					<div data-scroll="[data-scroll-item]" className="">
						<div data-scroll-cog="" className="hidden">{`
							{
								"scrollTrigger": {
									"trigger": "[data-scroll-item]"
									
								}
							}
						`}</div>
						<div data-scroll-item="" className="group">
							<div className="">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
								<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
									<img className="absolute top-0 left-0 w-full h-full object-cover object-center" src="/images/home/video.webp" alt=""/>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center items-center">
						<a className="group relative" href={videoLink} target="_blank" rel="noopener noreferrer" aria-label="Watch our video">
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-transparent rounded-full group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
							<div className="relative h-[101px] w-[101px] flex justify-center items-center">
								<div className="relative font-teko">
									<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
										<img className="" src="/images/home/play1.svg" alt=""/>
									</div>
									<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
										<img className="" src="/images/home/play1.svg" alt=""/>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="pt-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="xl:flex">
					<div className="flex-1 relative hidden xl:flex items-center">
						<div className="absolute top-0 right-0 bottom-0 w-1/2 border-[1px] border-[#E22C32] rounded-bl-full rounded-tl-full"></div>
						<div className="absolute top-0 right-0 bottom-0 m-auto h-3/4 w-1/2 border-[1px] border-[#E22C32] rounded-bl-full rounded-tl-full"></div>
						<div className="absolute top-0 right-0 bottom-0 m-auto h-2/4 w-1/2 border-[1px] border-[#E22C32] rounded-bl-full rounded-tl-full"></div>
						<div className="relative bg-[#971A1E] text-white py-[10px] px-[30px]">Whether you're a beginner</div>
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
						<div className="relative bg-[#971A1E] text-white py-[10px] px-[30px]">Seasoned fitness enthusiast</div>
					</div>
				</div>
			</div>
		</div>

		</div>
	);
}
