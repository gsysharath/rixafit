export default function Home() {
	return (
		<div className="bg-white text-[#01010F]">
		<div className="hidden xl:block pt-[50px]"></div>
		<div data-slider="" className="relative">
			<div data-slider-cog="" className="hidden">{`
				{
					"container": ".hero",
					"items": 1,
					"nav": 0,
					"prevButton": ".hero-prev",
					"nextButton": ".hero-next"
				}
			`}</div>
			<div className="hero">
				<div className="group/s">
					<div className="relative">
						<div className="absolute top-0 right-0 bottom-0 left-0 hidden xl:grid grid-cols-2 gap-[200px]">
							<div className=""></div>
							<div className="relative">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.7s] delay-[.3s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.6s] delay-[.4s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.5s] delay-[.5s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.4s] delay-[.6s] transition-all duration-[.3s]"></div>
								<img className="absolute top-0 left-0 w-full h-full object-cover object-center group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.3s] delay-[.7s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/image-slider.png" alt=""/>
							</div>
						</div>
						<div className="relative max-w-[1320px] mx-auto px-[15px] py-[100px]">
							<div className="font-bold leading-[1] uppercase">
								<div className="font-[Oswald]">
									<div className="text-[80px] md:text-[160px] text-transparent">
										<div className="flex">
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.04s] delay-0 transition-all duration-[.3s]">I</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.03s] delay-[.01s] transition-all duration-[.3s]">I</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.02s] delay-[.02s] transition-all duration-[.3s]">I</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.01s] delay-[.03s] transition-all duration-[.3s]">I</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-0 delay-[.04s] transition-all duration-[.3s]">I</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.08s] delay-[.04s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.07s] delay-[.05s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.06s] delay-[.06s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.05s] delay-[.07s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.04s] delay-[.08s] transition-all duration-[.3s]">g</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.12s] delay-[.08s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.11s] delay-[.09s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.1s] delay-[.1s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.09s] delay-[.11s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.08s] delay-[.12s] transition-all duration-[.3s]">n</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.16s] delay-[.12s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.15s] delay-[.13s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.14s] delay-[.14s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.13s] delay-[.15s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.12s] delay-[.16s] transition-all duration-[.3s]">i</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.2s] delay-[.16s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.19s] delay-[.17s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.18s] delay-[.18s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.17s] delay-[.19s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.16s] delay-[.2s] transition-all duration-[.3s]">t</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.24s] delay-[.2s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.23s] delay-[.21s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.22s] delay-[.22s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.21s] delay-[.23s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.2s] delay-[.24s] transition-all duration-[.3s]">e</div>
											</div>
										</div>
									</div>
									<div className="text-[40px] md:text-[92px] text-transparent">
										<div className="flex">
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.28s] delay-[.24s] transition-all duration-[.3s]">T</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.27s] delay-[.25s] transition-all duration-[.3s]">T</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.26s] delay-[.26s] transition-all duration-[.3s]">T</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.25s] delay-[.27s] transition-all duration-[.3s]">T</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.24s] delay-[.28s] transition-all duration-[.3s]">T</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.32s] delay-[.28s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.31s] delay-[.29s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.30s] delay-[.30s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.29s] delay-[.31s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.28s] delay-[.32s] transition-all duration-[.3s]">r</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.36s] delay-[.32s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.35s] delay-[.33s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.34s] delay-[.34s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.33s] delay-[.35s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.32s] delay-[.36s] transition-all duration-[.3s]">a</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.40s] delay-[.36s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.39s] delay-[.37s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.38s] delay-[.38s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.37s] delay-[.39s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.36s] delay-[.40s] transition-all duration-[.3s]">n</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.44s] delay-[.40s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.43s] delay-[.41s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.42s] delay-[.42s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.41s] delay-[.43s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.40s] delay-[.44s] transition-all duration-[.3s]">s</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.48s] delay-[.44s] transition-all duration-[.3s]">f</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.47s] delay-[.45s] transition-all duration-[.3s]">f</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.46s] delay-[.46s] transition-all duration-[.3s]">f</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.45s] delay-[.47s] transition-all duration-[.3s]">f</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.44s] delay-[.48s] transition-all duration-[.3s]">f</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.52s] delay-[.48s] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.51s] delay-[.49] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.50s] delay-[.50] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.49s] delay-[.51] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.48s] delay-[.52] transition-all duration-[.3s]">o</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.56s] delay-[.52s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.55s] delay-[.53s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.54s] delay-[.54s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.53s] delay-[.55s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.52s] delay-[.56s] transition-all duration-[.3s]">r</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.60s] delay-[.56s] transition-all duration-[.3s]">m</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.59s] delay-[.57s] transition-all duration-[.3s]">m</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.58s] delay-[.58s] transition-all duration-[.3s]">m</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.57s] delay-[.59s] transition-all duration-[.3s]">m</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.56s] delay-[.60s] transition-all duration-[.3s]">m</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.64s] delay-[.60s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.63s] delay-[.61s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.62s] delay-[.62s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.61s] delay-[.63s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.6s] delay-[.64s] transition-all duration-[.3s]">a</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.68s] delay-[.64s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.67s] delay-[.65s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.66s] delay-[.66s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.65s] delay-[.67s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.64s] delay-[.68s] transition-all duration-[.3s]">t</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.72s] delay-[.68s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.71s] delay-[.69s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.70s] delay-[.70s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.69s] delay-[.71s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.68s] delay-[.72s] transition-all duration-[.3s]">i</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.76s] delay-[.72s] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.75s] delay-[.73s] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.74s] delay-[.74s] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.73s] delay-[.75s] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.72s] delay-[.76s] transition-all duration-[.3s]">o</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.80s] delay-[.76s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.79s] delay-[.77s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.78s] delay-[.78s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.77s] delay-[.79s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.76s] delay-[.80s] transition-all duration-[.3s]">n</div>
											</div>
										</div>
									</div>
								</div>
								<div className="font-[Teko] pt-[10px] md:pt-[30px]">
									<div className="text-[30px] md:text-[73px]">
										<div className="flex">
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.84s] delay-[.80s] transition-all duration-[.3s]">&amp;</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.83s] delay-[.81s] transition-all duration-[.3s]">&amp;</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.82s] delay-[.82s] transition-all duration-[.3s]">&amp;</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.81s] delay-[.83s] transition-all duration-[.3s]">&amp;</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.80s] delay-[.84s] transition-all duration-[.3s]">&amp;</div>
											</div>
											<div className="">&nbsp;</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.88s] delay-[.84s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.87s] delay-[.85s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.86s] delay-[.86s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.85s] delay-[.87s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.84s] delay-[.88s] transition-all duration-[.3s]">U</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.92s] delay-[.88s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.91s] delay-[.89s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.9s] delay-[.9s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.89s] delay-[.91s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.88s] delay-[.92s] transition-all duration-[.3s]">n</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.96s] delay-[.92s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.95s] delay-[.93s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.94s] delay-[.94s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.93s] delay-[.95s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.92s] delay-[.96s] transition-all duration-[.3s]">i</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1s] delay-[.96s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.99s] delay-[.97s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.98s] delay-[.98s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.97s] delay-[.99s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.96s] delay-[1s] transition-all duration-[.3s]">t</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.05s] delay-[1.01s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.04s] delay-[1.02s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.03s] delay-[1.03s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.02s] delay-[1.04s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.01s] delay-[1.05s] transition-all duration-[.3s]">e</div>
											</div>
											<div className="">&nbsp;</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.09s] delay-[1.05s] transition-all duration-[.3s]">Y</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.08s] delay-[1.06s] transition-all duration-[.3s]">Y</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.07s] delay-[1.07s] transition-all duration-[.3s]">Y</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.06s] delay-[1.08s] transition-all duration-[.3s]">Y</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.05s] delay-[1.09s] transition-all duration-[.3s]">Y</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.14s] delay-[1.10s] transition-all duration-[.3s]">O</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.13s] delay-[1.11s] transition-all duration-[.3s]">O</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.12s] delay-[1.12s] transition-all duration-[.3s]">O</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.11s] delay-[1.13s] transition-all duration-[.3s]">O</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.10s] delay-[1.14s] transition-all duration-[.3s]">O</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.18s] delay-[1.14s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.17s] delay-[1.15s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.16s] delay-[1.16s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.15s] delay-[1.17s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.14s] delay-[1.18s] transition-all duration-[.3s]">U</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.22s] delay-[1.18s] transition-all duration-[.3s]">R</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.21s] delay-[1.19s] transition-all duration-[.3s]">R</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.20s] delay-[1.20s] transition-all duration-[.3s]">R</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.19s] delay-[1.21s] transition-all duration-[.3s]">R</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.18s] delay-[1.22s] transition-all duration-[.3s]">R</div>
											</div>
											<div className="">&nbsp;</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.26s] delay-[1.22s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.25s] delay-[1.23s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.24s] delay-[1.24s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.23s] delay-[1.25s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.22s] delay-[1.26s] transition-all duration-[.3s]">s</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.30s] delay-[1.26s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.29s] delay-[1.27s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.28s] delay-[1.28s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.29s] delay-[1.29s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.30s] delay-[1.30s] transition-all duration-[.3s]">t</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.35s] delay-[1.30s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.34s] delay-[1.32] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.33s] delay-[1.33] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.32s] delay-[1.34] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.31s] delay-[1.35] transition-all duration-[.3s]">r</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.39s] delay-[1.35s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.38s] delay-[1.36s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.37s] delay-[1.37s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.36s] delay-[1.38s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.35s] delay-[1.39s] transition-all duration-[.3s]">e</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.43s] delay-[1.39s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.42s] delay-[1.40s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.41s] delay-[1.41s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.40s] delay-[1.42s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.39s] delay-[1.43s] transition-all duration-[.3s]">n</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.47s] delay-[1.43s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.46s] delay-[1.44s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.45s] delay-[1.45s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.44s] delay-[1.46s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.43s] delay-[1.47s] transition-all duration-[.3s]">g</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.51s] delay-[1.47s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.50s] delay-[1.48s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.49s] delay-[1.49s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.48s] delay-[1.50s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.47s] delay-[1.51s] transition-all duration-[.3s]">t</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.55s] delay-[1.51s] transition-all duration-[.3s]">h</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.54s] delay-[1.52s] transition-all duration-[.3s]">h</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.53s] delay-[1.53s] transition-all duration-[.3s]">h</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.52s] delay-[1.54s] transition-all duration-[.3s]">h</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.51s] delay-[1.55s] transition-all duration-[.3s]">h</div>
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
											<a className="group relative" href="#">
												<div className="absolute top-0 right-0 bottom-0 left-0 border-[1px] border-[#F67A45] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="relative h-[54px] w-[175px] flex justify-center items-center">
													<div className="relative font-[Teko] font-medium text-[20px]">
														<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
															<div className="flex items-center gap-[10px]">
																<div className="text-white">JOIN CLASS</div>
																<div className="">
																	<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
																</div>
															</div>
														</div>
														<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]">
															<div className="flex items-center gap-[10px]">
																<div className="">JOIN CLASS</div>
																<div className="">
																	<img className="invert" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
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
						<div className="absolute top-0 right-0 bottom-0 left-0 hidden xl:grid grid-cols-2 gap-[200px]">
							<div className=""></div>
							<div className="relative">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.7s] delay-[.3s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.6s] delay-[.4s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.5s] delay-[.5s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.4s] delay-[.6s] transition-all duration-[.3s]"></div>
								<img className="absolute top-0 left-0 w-full h-full object-cover object-center group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.3s] delay-[.7s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/image-slider.png" alt=""/>
							</div>
						</div>
						<div className="relative max-w-[1320px] mx-auto px-[15px] py-[100px]">
							<div className="font-bold leading-[1] uppercase">
								<div className="font-[Oswald]">
									<div className="text-[80px] md:text-[160px] text-transparent">
										<div className="flex">
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.04s] delay-0 transition-all duration-[.3s]">I</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.03s] delay-[.01s] transition-all duration-[.3s]">I</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.02s] delay-[.02s] transition-all duration-[.3s]">I</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.01s] delay-[.03s] transition-all duration-[.3s]">I</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-0 delay-[.04s] transition-all duration-[.3s]">I</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.08s] delay-[.04s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.07s] delay-[.05s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.06s] delay-[.06s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.05s] delay-[.07s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.04s] delay-[.08s] transition-all duration-[.3s]">g</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.12s] delay-[.08s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.11s] delay-[.09s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.1s] delay-[.1s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.09s] delay-[.11s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.08s] delay-[.12s] transition-all duration-[.3s]">n</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.16s] delay-[.12s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.15s] delay-[.13s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.14s] delay-[.14s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.13s] delay-[.15s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.12s] delay-[.16s] transition-all duration-[.3s]">i</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.2s] delay-[.16s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.19s] delay-[.17s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.18s] delay-[.18s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.17s] delay-[.19s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.16s] delay-[.2s] transition-all duration-[.3s]">t</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.24s] delay-[.2s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.23s] delay-[.21s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.22s] delay-[.22s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.21s] delay-[.23s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.2s] delay-[.24s] transition-all duration-[.3s]">e</div>
											</div>
										</div>
									</div>
									<div className="text-[40px] md:text-[92px] text-transparent">
										<div className="flex">
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.28s] delay-[.24s] transition-all duration-[.3s]">T</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.27s] delay-[.25s] transition-all duration-[.3s]">T</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.26s] delay-[.26s] transition-all duration-[.3s]">T</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.25s] delay-[.27s] transition-all duration-[.3s]">T</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.24s] delay-[.28s] transition-all duration-[.3s]">T</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.32s] delay-[.28s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.31s] delay-[.29s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.30s] delay-[.30s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.29s] delay-[.31s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.28s] delay-[.32s] transition-all duration-[.3s]">r</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.36s] delay-[.32s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.35s] delay-[.33s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.34s] delay-[.34s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.33s] delay-[.35s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.32s] delay-[.36s] transition-all duration-[.3s]">a</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.40s] delay-[.36s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.39s] delay-[.37s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.38s] delay-[.38s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.37s] delay-[.39s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.36s] delay-[.40s] transition-all duration-[.3s]">n</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.44s] delay-[.40s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.43s] delay-[.41s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.42s] delay-[.42s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.41s] delay-[.43s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.40s] delay-[.44s] transition-all duration-[.3s]">s</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.48s] delay-[.44s] transition-all duration-[.3s]">f</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.47s] delay-[.45s] transition-all duration-[.3s]">f</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.46s] delay-[.46s] transition-all duration-[.3s]">f</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.45s] delay-[.47s] transition-all duration-[.3s]">f</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.44s] delay-[.48s] transition-all duration-[.3s]">f</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.52s] delay-[.48s] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.51s] delay-[.49] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.50s] delay-[.50] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.49s] delay-[.51] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.48s] delay-[.52] transition-all duration-[.3s]">o</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.56s] delay-[.52s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.55s] delay-[.53s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.54s] delay-[.54s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.53s] delay-[.55s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.52s] delay-[.56s] transition-all duration-[.3s]">r</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.60s] delay-[.56s] transition-all duration-[.3s]">m</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.59s] delay-[.57s] transition-all duration-[.3s]">m</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.58s] delay-[.58s] transition-all duration-[.3s]">m</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.57s] delay-[.59s] transition-all duration-[.3s]">m</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.56s] delay-[.60s] transition-all duration-[.3s]">m</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.64s] delay-[.60s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.63s] delay-[.61s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.62s] delay-[.62s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.61s] delay-[.63s] transition-all duration-[.3s]">a</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.6s] delay-[.64s] transition-all duration-[.3s]">a</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.68s] delay-[.64s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.67s] delay-[.65s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.66s] delay-[.66s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.65s] delay-[.67s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.64s] delay-[.68s] transition-all duration-[.3s]">t</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.72s] delay-[.68s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.71s] delay-[.69s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.70s] delay-[.70s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.69s] delay-[.71s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.68s] delay-[.72s] transition-all duration-[.3s]">i</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.76s] delay-[.72s] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.75s] delay-[.73s] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.74s] delay-[.74s] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.73s] delay-[.75s] transition-all duration-[.3s]">o</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.72s] delay-[.76s] transition-all duration-[.3s]">o</div>
											</div>
											<div className="relative">
												<div className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.80s] delay-[.76s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.79s] delay-[.77s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.78s] delay-[.78s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.77s] delay-[.79s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.76s] delay-[.80s] transition-all duration-[.3s]">n</div>
											</div>
										</div>
									</div>
								</div>
								<div className="font-[Teko] pt-[10px] md:pt-[30px]">
									<div className="text-[30px] md:text-[73px]">
										<div className="flex">
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.84s] delay-[.80s] transition-all duration-[.3s]">&amp;</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.83s] delay-[.81s] transition-all duration-[.3s]">&amp;</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.82s] delay-[.82s] transition-all duration-[.3s]">&amp;</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.81s] delay-[.83s] transition-all duration-[.3s]">&amp;</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.80s] delay-[.84s] transition-all duration-[.3s]">&amp;</div>
											</div>
											<div className="">&nbsp;</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.88s] delay-[.84s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.87s] delay-[.85s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.86s] delay-[.86s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.85s] delay-[.87s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.84s] delay-[.88s] transition-all duration-[.3s]">U</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.92s] delay-[.88s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.91s] delay-[.89s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.9s] delay-[.9s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.89s] delay-[.91s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.88s] delay-[.92s] transition-all duration-[.3s]">n</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.96s] delay-[.92s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.95s] delay-[.93s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.94s] delay-[.94s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.93s] delay-[.95s] transition-all duration-[.3s]">i</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.92s] delay-[.96s] transition-all duration-[.3s]">i</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1s] delay-[.96s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.99s] delay-[.97s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.98s] delay-[.98s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.97s] delay-[.99s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.96s] delay-[1s] transition-all duration-[.3s]">t</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.05s] delay-[1.01s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.04s] delay-[1.02s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.03s] delay-[1.03s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.02s] delay-[1.04s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.01s] delay-[1.05s] transition-all duration-[.3s]">e</div>
											</div>
											<div className="">&nbsp;</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.09s] delay-[1.05s] transition-all duration-[.3s]">Y</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.08s] delay-[1.06s] transition-all duration-[.3s]">Y</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.07s] delay-[1.07s] transition-all duration-[.3s]">Y</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.06s] delay-[1.08s] transition-all duration-[.3s]">Y</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.05s] delay-[1.09s] transition-all duration-[.3s]">Y</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.14s] delay-[1.10s] transition-all duration-[.3s]">O</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.13s] delay-[1.11s] transition-all duration-[.3s]">O</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.12s] delay-[1.12s] transition-all duration-[.3s]">O</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.11s] delay-[1.13s] transition-all duration-[.3s]">O</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.10s] delay-[1.14s] transition-all duration-[.3s]">O</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.18s] delay-[1.14s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.17s] delay-[1.15s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.16s] delay-[1.16s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.15s] delay-[1.17s] transition-all duration-[.3s]">U</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.14s] delay-[1.18s] transition-all duration-[.3s]">U</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.22s] delay-[1.18s] transition-all duration-[.3s]">R</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.21s] delay-[1.19s] transition-all duration-[.3s]">R</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.20s] delay-[1.20s] transition-all duration-[.3s]">R</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.19s] delay-[1.21s] transition-all duration-[.3s]">R</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.18s] delay-[1.22s] transition-all duration-[.3s]">R</div>
											</div>
											<div className="">&nbsp;</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.26s] delay-[1.22s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.25s] delay-[1.23s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.24s] delay-[1.24s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.23s] delay-[1.25s] transition-all duration-[.3s]">s</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.22s] delay-[1.26s] transition-all duration-[.3s]">s</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.30s] delay-[1.26s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.29s] delay-[1.27s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.28s] delay-[1.28s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.29s] delay-[1.29s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.30s] delay-[1.30s] transition-all duration-[.3s]">t</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.35s] delay-[1.30s] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.34s] delay-[1.32] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.33s] delay-[1.33] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.32s] delay-[1.34] transition-all duration-[.3s]">r</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.31s] delay-[1.35] transition-all duration-[.3s]">r</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.39s] delay-[1.35s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.38s] delay-[1.36s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.37s] delay-[1.37s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.36s] delay-[1.38s] transition-all duration-[.3s]">e</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.35s] delay-[1.39s] transition-all duration-[.3s]">e</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.43s] delay-[1.39s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.42s] delay-[1.40s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.41s] delay-[1.41s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.40s] delay-[1.42s] transition-all duration-[.3s]">n</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.39s] delay-[1.43s] transition-all duration-[.3s]">n</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.47s] delay-[1.43s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.46s] delay-[1.44s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.45s] delay-[1.45s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.44s] delay-[1.46s] transition-all duration-[.3s]">g</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.43s] delay-[1.47s] transition-all duration-[.3s]">g</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.51s] delay-[1.47s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.50s] delay-[1.48s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.49s] delay-[1.49s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.48s] delay-[1.50s] transition-all duration-[.3s]">t</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.47s] delay-[1.51s] transition-all duration-[.3s]">t</div>
											</div>
											<div className="relative">
												<div className="group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[1.55s] delay-[1.51s] transition-all duration-[.3s]">h</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.54s] delay-[1.52s] transition-all duration-[.3s]">h</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.53s] delay-[1.53s] transition-all duration-[.3s]">h</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.52s] delay-[1.54s] transition-all duration-[.3s]">h</div>
												<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[1.51s] delay-[1.55s] transition-all duration-[.3s]">h</div>
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
											<a className="group relative" href="#">
												<div className="absolute top-0 right-0 bottom-0 left-0 border-[1px] border-[#F67A45] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="relative h-[54px] w-[175px] flex justify-center items-center">
													<div className="relative font-[Teko] font-medium text-[20px]">
														<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
															<div className="flex items-center gap-[10px]">
																<div className="text-white">JOIN CLASS</div>
																<div className="">
																	<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
																</div>
															</div>
														</div>
														<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]">
															<div className="flex items-center gap-[10px]">
																<div className="">JOIN CLASS</div>
																<div className="">
																	<img className="invert" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
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
			<div className="hidden xl:block absolute right-0 bottom-[100px] w-1/2 ps-[200px]">
				<div className="flex items-center">
					<div className="group relative hero-prev">
						<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
						<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
						<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
						<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
						<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] rounded-full bg-opacity-10 border-[1px] border-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
						<div className="relative h-[60px] w-[60px] flex justify-center items-center">
							<div className="relative font-[Teko] font-medium text-[20px]">
								<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
									<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-prev.svg" alt=""/>
								</div>
								<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
									<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-prev.svg" alt=""/>
								</div>
							</div>
						</div>
					</div>
					<div className="px-[20px] bg-white bg-opacity-25 h-[10px]"></div>
					<div className="group relative hero-next">
						<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
						<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
						<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
						<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
						<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] rounded-full bg-opacity-10 border-[1px] border-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
						<div className="relative h-[60px] w-[60px] flex justify-center items-center">
							<div className="relative font-[Teko] font-medium text-[20px]">
								<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
									<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-next.svg" alt=""/>
								</div>
								<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
									<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-next.svg" alt=""/>
								</div>
							</div>
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
						<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-[.09s] delay-0 transition-all duration-[.3s]"></div>
						<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-[.06s] delay-[.03s] transition-all duration-[.3s]"></div>
						<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-[.03s] delay-[.06s] transition-all duration-[.3s]"></div>
						<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.09s] transition-all duration-[.3s]"></div>
						<div className="relative flex whitespace-nowrap items-center justify-center gap-[30px] font-[Teko] font-semibold text-[28px] uppercase">
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-0 delay-0 transition-all duration-[.3s]">Rise up</div>
							<img className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.03s] delay-0 transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding.svg" alt=""/>
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.06s] delay-0 transition-all duration-[.3s]">show up</div>
							<img className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.09s] delay-0 transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding.svg" alt=""/>
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.12s] delay-0 transition-all duration-[.3s]">never give up</div>
							<img className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.15s] delay-0 transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding.svg" alt=""/>
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.16s] delay-0 transition-all duration-[.3s]">Train hard</div>
							<img className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.19s] delay-0 transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding.svg" alt=""/>
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.22s] delay-0 transition-all duration-[.3s]">Train hard</div>
							<img className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.25s] delay-0 transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding.svg" alt=""/>
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.28s] delay-0 transition-all duration-[.3s]">Train hard</div>
							<img className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.31s] delay-0 transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding.svg" alt=""/>
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.33s] delay-0 transition-all duration-[.3s]">stay humble</div>
							<img className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.36s] delay-0 transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding.svg" alt=""/>
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.39s] delay-0 transition-all duration-[.3s]">stay humble</div>
							<img className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.42s] delay-0 transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding.svg" alt=""/>
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.45s] delay-0 transition-all duration-[.3s]">be proud</div>
							<img className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.48s] delay-0 transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding.svg" alt=""/>
							<div className="origin-right group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.51s] delay-0 transition-all duration-[.3s]">Believe in yourself</div>
						</div>
					</div>
					<div className="relative overflow-hidden py-[20px] text-white group-[.c-active]:rotate-[-3deg]">
						<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-[.09s] delay-0 transition-all duration-[.3s]"></div>
						<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-[.06s] delay-[.03s] transition-all duration-[.3s]"></div>
						<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-[.03s] delay-[.06s] transition-all duration-[.3s]"></div>
						<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.09s] transition-all duration-[.3s]"></div>
						<div className="relative flex whitespace-nowrap items-center justify-center gap-[30px] font-[Teko] font-semibold text-[28px] uppercase">
							<div className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-0 delay-0 transition-all duration-[.3s]">Sweat now, shine later</div>
							<img className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.03s] delay-0 transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding-black.svg" alt=""/>
							<div className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.06s] delay-0 transition-all duration-[.3s]">Stronger every rep</div>
							<img className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.09s] delay-0 transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding-black.svg" alt=""/>
							<div className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.12s] delay-0 transition-all duration-[.3s]">prouder every step</div>
							<img className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.15s] delay-0 transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding-black.svg" alt=""/>
							<div className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.18s] delay-0 transition-all duration-[.3s]">Push your limits</div>
							<img className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.21s] delay-0 transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding-black.svg" alt=""/>
							<div className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.24s] delay-0 transition-all duration-[.3s]">exceed your expectations</div>
							<img className="origin-left group-[:not(.c-active)]:scale-x-0 group-[:not(.c-active)]:delay-[.25s] delay-0 transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/sliding-black.svg" alt=""/>
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
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<img className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/about1.png" alt=""/>
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<img className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/about2.png" alt=""/>
											</div>
											<div className="absolute top-0 left-0">
												<img className="bg-[#01010F] rounded-full group-[.c-active]:animate-spin group-[.c-active]:[animation:spin_10s_linear_infinite]" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/Circle.svg" alt=""/>
												<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
													<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/logo.svg" alt=""/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="font-[Teko] flex items-center gap-[15px] uppercase">
							<div className="font-semibold text-[40px] md:text-[60px] leading-[1]">GYM Fitness Meets</div>
							<div className="hidden md:block font-medium text-[12px] text-[#F67A45] relative top-[-5px] border-r-[2px] border-l-[2px] border-[#F67A45] px-[5px] [writing-mode:tb]">About Us</div>
							<div className="hidden md:block font-semibold text-[60px] leading-[1]">Here</div>
						</div>
						<div className="md:flex gap-[10px]">
							<div className="">
								<div className="font-[Oswald] font-semibold text-[60px] leading-[1] uppercase">
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
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">E</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">E</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">E</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">E</div>
													<div className="text-transparent [-webkit-text-stroke:1px_#F67A45] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">E</div>
												</div>
												<div className="relative">
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">x</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">x</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">x</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">x</div>
													<div className="text-transparent [-webkit-text-stroke:1px_#F67A45] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">x</div>
												</div>
												<div className="relative">
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">c</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">c</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">c</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">c</div>
													<div className="text-transparent [-webkit-text-stroke:1px_#F67A45] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">c</div>
												</div>
												<div className="relative">
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">e</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">e</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">e</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">e</div>
													<div className="text-transparent [-webkit-text-stroke:1px_#F67A45] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">e</div>
												</div>
												<div className="relative">
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">l</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">l</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">l</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">l</div>
													<div className="text-transparent [-webkit-text-stroke:1px_#F67A45] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">l</div>
												</div>
												<div className="relative">
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">l</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">l</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">l</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">l</div>
													<div className="text-transparent [-webkit-text-stroke:1px_#F67A45] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">l</div>
												</div>
												<div className="relative">
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">e</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">e</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">e</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">e</div>
													<div className="text-transparent [-webkit-text-stroke:1px_#F67A45] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">e</div>
												</div>
												<div className="relative">
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">n</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">n</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">n</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">n</div>
													<div className="text-transparent [-webkit-text-stroke:1px_#F67A45] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">n</div>
												</div>
												<div className="relative">
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">c</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">c</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">c</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">c</div>
													<div className="text-transparent [-webkit-text-stroke:1px_#F67A45] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">c</div>
												</div>
												<div className="relative">
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">e</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">e</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">e</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">e</div>
													<div className="text-transparent [-webkit-text-stroke:1px_#F67A45] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">e</div>
												</div>
												<div className="relative">
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]">!</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]">!</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]">!</div>
													<div className="absolute top-0 right-0 bottom-0 left-0 text-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]">!</div>
													<div className="text-transparent [-webkit-text-stroke:1px_#F67A45] group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">!</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden md:block">
								<div className="pt-[5px]"></div>
								<div className="">Lorem Ipsum is simply dummy text</div>
								<div className="pt-[5px]"></div>
								<div className="">of the printing and typesetting</div>
							</div>
						</div>
						<div className="pt-[5px]"></div>
						<div className="leading-[1.8]">
							<div className="">industry. Lorem Ipsum has been the industry's stan. Lorem Ipsum</div>
							<div className="">is simply dummy text of the printing and typesetting industry.</div>
						</div>
						<div className="pt-[70px]"></div>
						<div className="relative">
							<div className="absolute top-0 right-0 bottom-0 left-0 border-t-[2px] border-[#F67A45] m-auto h-[2px]"></div>
							<div className="relative font-[Teko] leading-[1] font-semibold text-[60px] grid grid-cols-1 md:grid-cols-2 gap-[100px] uppercase">
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
										<div className="border-l-[2px] border-[#F67A45]"></div>
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
										<div className="border-l-[2px] border-[#F67A45]"></div>
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
										<div className="border-l-[2px] border-[#F67A45]"></div>
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
										<div className="border-l-[2px] border-[#F67A45]"></div>
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
						<div className="font-[Teko] flex items-center gap-[15px] uppercase">
							<div className="font-semibold text-[60px] leading-[1]">Our Upcoming</div>
							<div className="hidden md:block font-medium text-[12px] text-[#F67A45] relative top-[-5px] border-r-[2px] border-l-[2px] border-[#F67A45] px-[5px] [writing-mode:tb]">Top Ten</div>
							<div className="hidden md:block font-semibold text-[60px] leading-[1]">Classes</div>
						</div>
					</div>
					<div className="hidden xl:block">
						<div className="flex items-center">
							<div className="group relative classes-prev">
								<div className="absolute top-0 right-0 bottom-0 left-0 border-[2px] border-white border-opacity-0 rounded-full group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
								<div className="relative h-[60px] w-[60px] flex justify-center items-center">
									<div className="relative font-[Teko] font-medium text-[20px]">
										<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
											<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-prev.svg" alt=""/>
										</div>
										<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
											<img className="invert" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-prev.svg" alt=""/>
										</div>
									</div>
								</div>
							</div>
							<div className="px-[50px] bg-[#01010F] bg-opacity-25 h-[10px]"></div>
							<div className="group relative classes-next">
								<div className="absolute top-0 right-0 bottom-0 left-0 border-[2px] border-white border-opacity-0 rounded-full group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
								<div className="relative h-[60px] w-[60px] flex justify-center items-center">
									<div className="relative font-[Teko] font-medium text-[20px]">
										<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
											<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-next.svg" alt=""/>
										</div>
										<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
											<img className="invert" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-next.svg" alt=""/>
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
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<img className="origin-bottom group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-0 delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/class1.png" alt=""/>
										</div>
										<div className="absolute right-0 bottom-0 left-0">
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#01010F] from-70% to-transparent to-70%"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#F67A45] from-70% to-transparent to-70% opacity-50"></div>
											<div className="relative p-[30px] ">
												<div className="font-[Teko] font-semibold text-[28px]">Kickboxing</div>
												<div className="flex justify-start">
													<div className="">
														<div className="border-t-[2px] border-[#01010F]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[10px] mt-[3px]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[20px] mt-[3px]"></div>
														<div className="mt-[10px]"></div>
														<div className="">Stadium</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="hidden xl:block">
									<div className="relative">
										<div className="relative">
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<img className="origin-bottom group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-0 delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/class2.png" alt=""/>
										</div>
										<div className="absolute right-0 bottom-0 left-0">
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#01010F] from-70% to-transparent to-70%"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#F67A45] from-70% to-transparent to-70% opacity-50"></div>
											<div className="relative p-[30px] ">
												<div className="font-[Teko] font-semibold text-[28px]">Body Pump</div>
												<div className="flex justify-start">
													<div className="">
														<div className="border-t-[2px] border-[#01010F]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[10px] mt-[3px]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[20px] mt-[3px]"></div>
														<div className="mt-[10px]"></div>
														<div className="">Gym Center</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="hidden md:block">
									<div className="relative">
										<div className="relative">
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<img className="origin-bottom group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-0 delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/class3.png" alt=""/>
										</div>
										<div className="absolute right-0 bottom-0 left-0">
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#01010F] from-70% to-transparent to-70%"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#F67A45] from-70% to-transparent to-70% opacity-50"></div>
											<div className="relative p-[30px] ">
												<div className="font-[Teko] font-semibold text-[28px]">Hiit Havoc</div>
												<div className="flex justify-start">
													<div className="">
														<div className="border-t-[2px] border-[#01010F]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[10px] mt-[3px]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[20px] mt-[3px]"></div>
														<div className="mt-[10px]"></div>
														<div className="">Outdoor</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="">
									<div className="relative">
										<div className="relative">
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<img className="origin-bottom group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-0 delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/class4.png" alt=""/>
										</div>
										<div className="absolute right-0 bottom-0 left-0">
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#01010F] from-70% to-transparent to-70%"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#F67A45] from-70% to-transparent to-70% opacity-50"></div>
											<div className="relative p-[30px] ">
												<div className="font-[Teko] font-semibold text-[28px]">Muscle</div>
												<div className="flex justify-start">
													<div className="">
														<div className="border-t-[2px] border-[#01010F]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[10px] mt-[3px]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[20px] mt-[3px]"></div>
														<div className="mt-[10px]"></div>
														<div className="">Indoor</div>
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
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<img className="origin-bottom group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-0 delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/class1.png" alt=""/>
										</div>
										<div className="absolute right-0 bottom-0 left-0">
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#01010F] from-70% to-transparent to-70%"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#F67A45] from-70% to-transparent to-70% opacity-50"></div>
											<div className="relative p-[30px] ">
												<div className="font-[Teko] font-semibold text-[28px]">Kickboxing</div>
												<div className="flex justify-start">
													<div className="">
														<div className="border-t-[2px] border-[#01010F]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[10px] mt-[3px]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[20px] mt-[3px]"></div>
														<div className="mt-[10px]"></div>
														<div className="">Stadium</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="hidden xl:block">
									<div className="relative">
										<div className="relative">
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<img className="origin-bottom group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-0 delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/class2.png" alt=""/>
										</div>
										<div className="absolute right-0 bottom-0 left-0">
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#01010F] from-70% to-transparent to-70%"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#F67A45] from-70% to-transparent to-70% opacity-50"></div>
											<div className="relative p-[30px] ">
												<div className="font-[Teko] font-semibold text-[28px]">Body Pump</div>
												<div className="flex justify-start">
													<div className="">
														<div className="border-t-[2px] border-[#01010F]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[10px] mt-[3px]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[20px] mt-[3px]"></div>
														<div className="mt-[10px]"></div>
														<div className="">Gym Center</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="hidden md:block">
									<div className="relative">
										<div className="relative">
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<img className="origin-bottom group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-0 delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/class3.png" alt=""/>
										</div>
										<div className="absolute right-0 bottom-0 left-0">
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#01010F] from-70% to-transparent to-70%"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#F67A45] from-70% to-transparent to-70% opacity-50"></div>
											<div className="relative p-[30px] ">
												<div className="font-[Teko] font-semibold text-[28px]">Hiit Havoc</div>
												<div className="flex justify-start">
													<div className="">
														<div className="border-t-[2px] border-[#01010F]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[10px] mt-[3px]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[20px] mt-[3px]"></div>
														<div className="mt-[10px]"></div>
														<div className="">Outdoor</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="">
									<div className="relative">
										<div className="relative">
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<img className="origin-bottom group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-0 delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/class4.png" alt=""/>
										</div>
										<div className="absolute right-0 bottom-0 left-0">
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#01010F] from-70% to-transparent to-70%"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#F67A45] from-70% to-transparent to-70% opacity-50"></div>
											<div className="relative p-[30px] ">
												<div className="font-[Teko] font-semibold text-[28px]">Muscle</div>
												<div className="flex justify-start">
													<div className="">
														<div className="border-t-[2px] border-[#01010F]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[10px] mt-[3px]"></div>
														<div className="border-t-[2px] border-[#01010F] mr-[20px] mt-[3px]"></div>
														<div className="mt-[10px]"></div>
														<div className="">Indoor</div>
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
		<div className="hidden xl:block">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="relative">
					<div className="absolute top-0 right-0 bottom-0 left-0 hidden xl:grid grid-cols-8">
						<div className="border-r-[1px] border-[#D5BDA2] border-opacity-30"></div>
						<div className="border-r-[1px] border-[#D5BDA2] border-opacity-30"></div>
						<div className="border-r-[1px] border-[#D5BDA2] border-opacity-30"></div>
						<div className="border-r-[1px] border-[#D5BDA2] border-opacity-30"></div>
						<div className="border-r-[1px] border-[#D5BDA2] border-opacity-30"></div>
						<div className="border-r-[1px] border-[#D5BDA2] border-opacity-30"></div>
						<div className="border-r-[1px] border-[#D5BDA2] border-opacity-30"></div>
						<div className=""></div>
					</div>
					<div className="relative">
						<div className="bg-[#01010F]">
							<div className="border-t-[10px] border-[#F67A45] border-opacity-50"></div>
						</div>
						<div className="pt-[150px]"></div>
						<div className="hidden xl:grid grid-cols-8 font-[Teko] font-medium text-[20px] text-center">
							<div className=""></div>
							<div className="">Monday</div>
							<div className="">Tuesday</div>
							<div className="">Wednesday</div>
							<div className="">Thursday</div>
							<div className="">Friday</div>
							<div className="">Saturday</div>
							<div className="">Sunday</div>
						</div>
						<div className="mt-[50px] border-t-[1px] border-[#D5BDA2] border-opacity-30"></div>
						<div className="grid grid-cols-4 xl:grid-cols-8 text-center">
							<div className="flex items-center">
								<div className=" font-[Teko] font-medium text-[20px]">06.00 - 08.00</div>
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
														<div className="font-[Teko] font-semibold text-[24px]">BOXING</div>
														<div className="text-[16px]">Professor Smith</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden xl:block"></div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
														<div className="font-[Teko] font-semibold text-[24px]">Cardio</div>
														<div className="text-[16px]">Robert Cage</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden xl:block">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
														<div className="font-[Teko] font-semibold text-[24px]">BOXING</div>
														<div className="text-[16px]">Robert Cage</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden xl:block"></div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
														<div className=" font-[Teko] font-semibold text-[24px]">CRAZE</div>
														<div className="text-[16px]">Robert Cage</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden xl:block"></div>
						</div>
						<div className="border-t-[1px] border-[#D5BDA2] border-opacity-30"></div>
						<div className="grid grid-cols-4 xl:grid-cols-8 text-center">
							<div className="flex items-center">
								<div className=" font-[Teko] font-medium text-[20px]">08.00 - 10.00</div>
							</div>
							<div className="hidden xl:block">
								
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
														<div className="font-[Teko] font-semibold text-[24px]">BOXING</div>
														<div className="text-[16px]">Robert Cage</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
														<div className=" font-[Teko] font-semibold text-[24px]">BOXING</div>
														<div className="text-[16px]">Robert Cage</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden xl:block">
								
							</div>
							<div className="hidden xl:block"></div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
														<div className=" font-[Teko] font-semibold text-[24px]">BOOTCAMP</div>
														<div className="text-[16px]">Robert Cage</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden xl:block">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
														<div className=" font-[Teko] font-semibold text-[24px]">BOXING</div>
														<div className="text-[16px]">Ms. Garcia</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="border-t-[1px] border-[#D5BDA2] border-opacity-30"></div>
						<div className="grid grid-cols-8 text-center">
							<div className="flex items-center">
								<div className=" font-[Teko] font-medium text-[20px]">10.00 - 12.00</div>
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
														<div className=" font-[Teko] font-semibold text-[24px]">YOGA</div>
														<div className="text-[16px]">Robert Cage</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
														<div className=" font-[Teko] font-semibold text-[24px]">ZUMBA</div>
														<div className="text-[16px]">Mrs. Johnson</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
														<div className=" font-[Teko] font-semibold text-[24px]">BOXING</div>
														<div className="text-[16px]">Ms. Garcia</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
														<div className=" font-[Teko] font-semibold text-[24px]">SCULPT</div>
														<div className="text-[16px]">Robert Cage</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								
							</div>
							<div className="">
								
							</div>
						</div>
						<div className="border-t-[1px] border-[#D5BDA2] border-opacity-30"></div>
						<div className="grid grid-cols-8 text-center">
							<div className="flex items-center">
								<div className=" font-[Teko] font-medium text-[20px]">12.00 - 02.00</div>
							</div>
							<div className="">
								
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
														<div className=" font-[Teko] font-semibold text-[24px]">BOXING</div>
														<div className="text-[16px]">Robert Cage</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								
							</div>
							<div className="">
								
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
														<div className=" font-[Teko] font-semibold text-[24px]">SPIN</div>
														<div className="text-[16px]">Robert Cage</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
														<div className=" font-[Teko] font-semibold text-[24px]">TONE UP</div>
														<div className="text-[16px]">Mrs. Johnson</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								
							</div>
						</div>
						<div className="border-t-[1px] border-[#D5BDA2] border-opacity-30"></div>
						<div className="grid grid-cols-8 text-center">
							<div className="flex items-center">
								<div className=" font-[Teko] font-medium text-[20px]">02.00 - 04.00</div>
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
														<div className=" font-[Teko] font-semibold text-[24px]">CARDIO</div>
														<div className="text-[16px]">Robert Cage</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
														<div className=" font-[Teko] font-semibold text-[24px]">Mr. Rodriguez</div>
														<div className="text-[16px]">Robert Cage</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
														<div className=" font-[Teko] font-semibold text-[24px]">BOXING</div>
														<div className="text-[16px]">Robert Cage</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
														<div className=" font-[Teko] font-semibold text-[24px]">MUSCLE</div>
														<div className="text-[16px]">Mrs. Johnson</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
														<div className=" font-[Teko] font-semibold text-[24px]">STRETCH</div>
														<div className="text-[16px]">Ms. Garcia</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="border-t-[1px] border-[#D5BDA2] border-opacity-30"></div>
						<div className="grid grid-cols-8 text-center">
							<div className="flex items-center">
								<div className=" font-[Teko] font-medium text-[20px]">04.00 - 06.00</div>
							</div>
							<div className="">
								
							</div>
							<div className="">
								
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
														<div className=" font-[Teko] font-semibold text-[24px]">WORKOUT</div>
														<div className="text-[16px]">Ms. Thompson</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
														<div className=" font-[Teko] font-semibold text-[24px]">CARDIO</div>
														<div className="text-[16px]">Robert Cage</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
														<div className=" font-[Teko] font-semibold text-[24px]">HIIT</div>
														<div className="text-[16px]">Mrs. White</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								
							</div>
							<div className="">
								
							</div>
						</div>
						<div className="border-t-[1px] border-[#D5BDA2] border-opacity-30"></div>
						<div className="grid grid-cols-8 text-center">
							<div className="flex items-center">
								<div className=" font-[Teko] font-medium text-[20px]">06.00 - 08.00</div>
							</div>
							<div className="">
								
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
														<div className=" font-[Teko] font-semibold text-[24px]">RHYTHM</div>
														<div className="text-[16px]">Dr. Patel</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
														<div className=" font-[Teko] font-semibold text-[24px]">SCULPT</div>
														<div className="text-[16px]">Mrs. Khan</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
														<div className=" font-[Teko] font-semibold text-[24px]">POWER</div>
														<div className="text-[16px]">Ms. Wilson</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
														<div className=" font-[Teko] font-semibold text-[24px]">FITNESS</div>
														<div className="text-[16px]">Mr. Clark</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="p-[10px]">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="bg-[#D5BDA2] text-[#01010F] p-[10px]">
														<div className="font-[Teko] font-semibold text-[24px]">MAYHEM</div>
														<div className="text-[16px]">Coach Taylor</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="border-t-[1px] border-[#D5BDA2] border-opacity-30"></div>
						<div className="pt-[150px]"></div>
					</div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="hidden xl:block">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="grid grid-cols-3 gap-[50px]">
					<div className="">
						<div className="border-[1px] border-[#D5BDA2] border-opacity-30">
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
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
										<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
											<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/trainer1.png" alt=""/>
										</div>
									</div>
								</div>
							</div>
							<div className="flex items-center gap-[50px] p-[30px]">
								<div className="">
									<div className="font-[Teko] font-semibold text-[28px] text-[#D5BDA2]">John Wick C.</div>
									<div className="text-[16px]">Co-Founder</div>
								</div>
								<div className="flex-1">
									<div className="flex items-center">
										<div className="px-[10px] border-t-[1px] border-[#D5BDA2] border-opacity-50"></div>
										<div className="px-[10px] border-t-[3px] border-[#D5BDA2] border-opacity-50"></div>
										<div className="px-[10px] border-t-[4px] border-[#D5BDA2] border-opacity-50"></div>
										<div className="px-[10px] border-t-[7px] border-[#D5BDA2] border-opacity-50"></div>
										<div className="flex-1 border-t-[10px] border-[#D5BDA2] border-opacity-50"></div>
										<a className="group relative" href="#">
											<div className="absolute top-0 right-0 bottom-0 left-0 border-l-[1px] border-[#D5BDA2] border-opacity-50 group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-50 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="relative h-[60px] w-[60px] flex justify-center items-center">
												<div className="relative font-[Teko] font-medium text-[20px]">
													<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
														<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
													</div>
													<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]">
														<img className="invert" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
													</div>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="border-[1px] border-[#D5BDA2] border-opacity-30">
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
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
										<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
											<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/trainer2.png" alt=""/>
										</div>
									</div>
								</div>
							</div>
							<div className="flex items-center gap-[50px] p-[30px]">
								<div className="">
									<div className="font-[Teko] font-semibold text-[28px] text-[#D5BDA2]">Ily Thompson</div>
									<div className="text-[16px]">Head Trainer</div>
								</div>
								<div className="flex-1">
									<div className="flex items-center">
										<div className="px-[10px] border-t-[1px] border-[#D5BDA2] border-opacity-50"></div>
										<div className="px-[10px] border-t-[3px] border-[#D5BDA2] border-opacity-50"></div>
										<div className="px-[10px] border-t-[4px] border-[#D5BDA2] border-opacity-50"></div>
										<div className="px-[10px] border-t-[7px] border-[#D5BDA2] border-opacity-50"></div>
										<div className="flex-1 border-t-[10px] border-[#D5BDA2] border-opacity-50"></div>
										<a className="group relative" href="#">
											<div className="absolute top-0 right-0 bottom-0 left-0 border-l-[1px] border-[#D5BDA2] border-opacity-50 group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-50 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="relative h-[60px] w-[60px] flex justify-center items-center">
												<div className="relative font-[Teko] font-medium text-[20px]">
													<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
														<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
													</div>
													<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]">
														<img className="invert" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
													</div>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="border-[1px] border-[#D5BDA2] border-opacity-30">
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
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
										<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
											<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/trainer3.png" alt=""/>
										</div>
									</div>
								</div>
							</div>
							<div className="flex items-center gap-[50px] p-[30px]">
								<div className="">
									<div className="font-[Teko] font-semibold text-[28px] text-[#D5BDA2]">Alex Ramirez</div>
									<div className="text-[16px]">Nutrition Consultant</div>
								</div>
								<div className="flex-1">
									<div className="flex items-center">
										<div className="px-[10px] border-t-[1px] border-[#D5BDA2] border-opacity-50"></div>
										<div className="px-[10px] border-t-[3px] border-[#D5BDA2] border-opacity-50"></div>
										<div className="px-[10px] border-t-[4px] border-[#D5BDA2] border-opacity-50"></div>
										<div className="px-[10px] border-t-[7px] border-[#D5BDA2] border-opacity-50"></div>
										<div className="flex-1 border-t-[10px] border-[#D5BDA2] border-opacity-50"></div>
										<a className="group relative" href="#">
											<div className="absolute top-0 right-0 bottom-0 left-0 border-l-[1px] border-[#D5BDA2] border-opacity-50 group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-50 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="relative h-[60px] w-[60px] flex justify-center items-center">
												<div className="relative font-[Teko] font-medium text-[20px]">
													<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
														<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
													</div>
													<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]">
														<img className="invert" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
													</div>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="hidden xl:block pt-[50px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="border-[1px] border-[#D5BDA2] border-opacity-30 p-[30px]">
					<div data-slider="" className="relative">
						<div data-slider-cog="" className="hidden">{`
							{
								"container": ".say",
								"items": 1,
								"navContainer": ".say-dots",
								"prevButton": ".say-prev",
								"nextButton": ".say-next"
							}
						`}</div>
						<div className="say">
							<div className="group/s">
								<div className="flex gap-[50px]">
									<div className="">
										<div className="leading-[1.8]">
											<div className="">"Joining this gym changed my life. The trainers are top-notch, the </div>
											<div className="">classes are diverse and challenging, and the community is like family.</div>
											<div className="">I've never felt stronger or more confident. Highly recommend! and the</div>
											<div className="">community is like family. I've never felt stronger or more confident. </div>
											<div className="">Highly recommend, they are awesome!"</div>
										</div>
										<div className="pt-[50px]"></div>
										<div className="flex items-center gap-[50px]">
											<div className="">
												<div className="font-[Teko] font-semibold text-[28px] text-[#F67A45]">Video Feedback</div>
											</div>
											<div className="flex-1">
												<div className="flex items-center">
													<div className="px-[10px] border-t-[1px] border-[#D5BDA2] border-opacity-50"></div>
													<div className="px-[10px] border-t-[3px] border-[#D5BDA2] border-opacity-50"></div>
													<div className="px-[10px] border-t-[4px] border-[#D5BDA2] border-opacity-50"></div>
													<div className="px-[10px] border-t-[7px] border-[#D5BDA2] border-opacity-50"></div>
													<div className="flex-1 border-t-[10px] border-[#D5BDA2] border-opacity-50"></div>
													<a className="group relative" href="#">
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-50 group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-50 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
														<div className="relative h-[60px] w-[60px] flex justify-center items-center">
															<div className="relative font-[Teko] font-medium text-[20px]">
																<div className="absolute top-0 right-0 bottom-0 left-0 text-white group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
																	<i className="fa-solid fa-play"></i>
																</div>
																<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]">
																	<i className="fa-solid fa-play"></i>
																</div>
															</div>
														</div>
													</a>
												</div>
											</div>
										</div>
										<div className="pt-[50px]"></div>
										<div className="leading-[1.8]">
											<div className="">"Iscrivermi a questa palestra mi ha cambiato la vita. Gli allenatori</div>
											<div className="">sono di prim'ordine, il le classi sono diverse e stimolanti e la</div>
											<div className="">comunità è come una famiglia. Non mi sono mai sentito più forte o</div>
											<div className="">più fiducioso. Altamente raccomandato! e il la comunità è come una</div>
											<div className="flex gap-[20px]">
												<div className="">famiglia. Non mi sono mai sentito più forte o più."</div>
												<div className="text-[#F67A45]">(original)</div>
											</div>
										</div>
									</div>
									<div className="">
										<div className="relative">
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="origin-bottom group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-0 delay-[.4s] transition-all duration-[.3s]">
												<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/testimonial.png" alt=""/>
											</div>
										</div>
									</div>
									<div className="">
										<div className="flex flex-col items-center">
											<div className="">4.89</div>
											<div className="flex flex-col items-center text-[#F67A45]">
												<div className=""><i className="fa-solid fa-star"></i></div>
												<div className="py-[5px] border-l-[1px] border-[#F67A45]"></div>
												<div className=""><i className="fa-solid fa-star"></i></div>
												<div className="py-[5px] border-l-[1px] border-[#F67A45]"></div>
												<div className=""><i className="fa-solid fa-star"></i></div>
												<div className="py-[5px] border-l-[1px] border-[#F67A45]"></div>
												<div className=""><i className="fa-solid fa-star"></i></div>
												<div className="py-[5px] border-l-[1px] border-[#F67A45]"></div>
												<div className=""><i className="fa-regular fa-star-half-stroke"></i></div>
											</div>
											<div className="pt-[20px]"></div>
											<div className="py-[20px] border-l-[1px] border-[#D5BDA2] border-opacity-30"></div>
											<div className="py-[20px] border-l-[4px] border-[#D5BDA2] border-opacity-30"></div>
											<div className="py-[20px] border-l-[7px] border-[#D5BDA2] border-opacity-30"></div>
											<div className="py-[20px] border-l-[10px] border-[#D5BDA2] border-opacity-30"></div>
											<div className="">
												<div className="border-t-[10px] border-[#D5BDA2] border-opacity-30"></div>
												<div className="pt-[20px]"></div>
												<div className="font-[Teko] font-semibold text-[24px] text-[#F67A45]">Roberts Bush</div>
											</div>
											<div className="text-[16px]">From Canada</div>
										</div>
									</div>
								</div>
							</div>
							<div className="group/s">
								<div className="flex gap-[50px]">
									<div className="">
										<div className="leading-[1.8]">
											<div className="">"Joining this gym changed my life. The trainers are top-notch, the </div>
											<div className="">classes are diverse and challenging, and the community is like family.</div>
											<div className="">I've never felt stronger or more confident. Highly recommend! and the</div>
											<div className="">community is like family. I've never felt stronger or more confident. </div>
											<div className="">Highly recommend, they are awesome!"</div>
										</div>
										<div className="pt-[50px]"></div>
										<div className="flex items-center gap-[50px]">
											<div className="">
												<div className="font-[Teko] font-semibold text-[28px] text-[#F67A45]">Video Feedback</div>
											</div>
											<div className="flex-1">
												<div className="flex items-center">
													<div className="px-[10px] border-t-[1px] border-[#D5BDA2] border-opacity-50"></div>
													<div className="px-[10px] border-t-[3px] border-[#D5BDA2] border-opacity-50"></div>
													<div className="px-[10px] border-t-[4px] border-[#D5BDA2] border-opacity-50"></div>
													<div className="px-[10px] border-t-[7px] border-[#D5BDA2] border-opacity-50"></div>
													<div className="flex-1 border-t-[10px] border-[#D5BDA2] border-opacity-50"></div>
													<a className="group relative" href="#">
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-50 group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-50 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
														<div className="relative h-[60px] w-[60px] flex justify-center items-center">
															<div className="relative font-[Teko] font-medium text-[20px]">
																<div className="absolute top-0 right-0 bottom-0 left-0 text-white group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
																	<i className="fa-solid fa-play"></i>
																</div>
																<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]">
																	<i className="fa-solid fa-play"></i>
																</div>
															</div>
														</div>
													</a>
												</div>
											</div>
										</div>
										<div className="pt-[50px]"></div>
										<div className="leading-[1.8]">
											<div className="">"Iscrivermi a questa palestra mi ha cambiato la vita. Gli allenatori</div>
											<div className="">sono di prim'ordine, il le classi sono diverse e stimolanti e la</div>
											<div className="">comunità è come una famiglia. Non mi sono mai sentito più forte o</div>
											<div className="">più fiducioso. Altamente raccomandato! e il la comunità è come una</div>
											<div className="flex gap-[20px]">
												<div className="">famiglia. Non mi sono mai sentito più forte o più."</div>
												<div className="text-[#F67A45]">(original)</div>
											</div>
										</div>
									</div>
									<div className="">
										<div className="relative">
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="origin-bottom group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-0 delay-[.4s] transition-all duration-[.3s]">
												<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/testimonial.png" alt=""/>
											</div>
										</div>
									</div>
									<div className="">
										<div className="flex flex-col items-center">
											<div className="">4.89</div>
											<div className="flex flex-col items-center text-[#F67A45]">
												<div className=""><i className="fa-solid fa-star"></i></div>
												<div className="py-[5px] border-l-[1px] border-[#F67A45]"></div>
												<div className=""><i className="fa-solid fa-star"></i></div>
												<div className="py-[5px] border-l-[1px] border-[#F67A45]"></div>
												<div className=""><i className="fa-solid fa-star"></i></div>
												<div className="py-[5px] border-l-[1px] border-[#F67A45]"></div>
												<div className=""><i className="fa-solid fa-star"></i></div>
												<div className="py-[5px] border-l-[1px] border-[#F67A45]"></div>
												<div className=""><i className="fa-regular fa-star-half-stroke"></i></div>
											</div>
											<div className="pt-[20px]"></div>
											<div className="py-[20px] border-l-[1px] border-[#D5BDA2] border-opacity-30"></div>
											<div className="py-[20px] border-l-[4px] border-[#D5BDA2] border-opacity-30"></div>
											<div className="py-[20px] border-l-[7px] border-[#D5BDA2] border-opacity-30"></div>
											<div className="py-[20px] border-l-[10px] border-[#D5BDA2] border-opacity-30"></div>
											<div className="">
												<div className="border-t-[10px] border-[#D5BDA2] border-opacity-30"></div>
												<div className="pt-[20px]"></div>
												<div className="font-[Teko] font-semibold text-[24px] text-[#F67A45]">Roberts Bush</div>
											</div>
											<div className="text-[16px]">From Canada</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="pt-[50px]"></div>
					<div className="border-[1px] border-[#D5BDA2] border-opacity-30"></div>
					<div className="pt-[50px]"></div>
					<div className="flex items-center gap-[100px]">
						<div className="group relative say-prev">
							<div className="absolute top-0 right-0 bottom-0 left-0 border-[2px] border-white border-opacity-0 rounded-full group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
							<div className="relative h-[60px] w-[60px] flex justify-center items-center">
								<div className="relative font-[Teko] font-medium text-[20px]">
									<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
										<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-prev.svg" alt=""/>
									</div>
									<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
										<img className="invert" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-prev.svg" alt=""/>
									</div>
								</div>
							</div>
						</div>
						<div className="flex-1">
							<div className="flex justify-between say-dots">
								<div className="group/d">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="relative">
														<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/client1.svg" alt=""/>
														<div className="group-[:not(.tns-nav-active)]/d:opacity-0 absolute top-0 right-0 bottom-0 left-0 m-auto w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
															<i className="fa-solid fa-pause"></i>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="group/d">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="relative">
														<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/client2.svg" alt=""/>
														<div className="group-[:not(.tns-nav-active)]/d:opacity-0 absolute top-0 right-0 bottom-0 left-0 m-auto w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
															<i className="fa-solid fa-pause"></i>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="group/d">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="relative">
														<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/client3.svg" alt=""/>
														<div className="group-[:not(.tns-nav-active)]/d:opacity-0 absolute top-0 right-0 bottom-0 left-0 m-auto w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
															<i className="fa-solid fa-pause"></i>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="group/d">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="relative">
														<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/client4.svg" alt=""/>
														<div className="group-[:not(.tns-nav-active)]/d:opacity-0 absolute top-0 right-0 bottom-0 left-0 m-auto w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
															<i className="fa-solid fa-pause"></i>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="group/d">
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
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<div className="relative">
														<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/client5.svg" alt=""/>
														<div className="group-[:not(.tns-nav-active)]/d:opacity-0 absolute top-0 right-0 bottom-0 left-0 m-auto w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
															<i className="fa-solid fa-pause"></i>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="group relative say-next">
							<div className="absolute top-0 right-0 bottom-0 left-0 border-[2px] border-white border-opacity-0 rounded-full group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
							<div className="relative h-[60px] w-[60px] flex justify-center items-center">
								<div className="relative font-[Teko] font-medium text-[20px]">
									<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
										<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-next.svg" alt=""/>
									</div>
									<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
										<img className="invert" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-next.svg" alt=""/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="pt-[20px]"></div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="py-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="font-[Teko] flex justify-center items-center gap-[15px] uppercase">
					<div className="font-semibold text-[40px] md:text-[60px] leading-[1]">Calculator Form</div>
					<div className="hidden xl:block font-medium text-[12px] text-[#F67A45] relative top-[-5px] border-r-[2px] border-l-[2px] border-[#F67A45] px-[5px] [writing-mode:tb]">Next To</div>
					<div className="hidden xl:block font-semibold text-[60px] leading-[1]">Pricing Table</div>
				</div>
				<div className="pt-[50px]"></div>
				<form action="#" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[50px]">
					<div className="">
						<div className="flex items-center gap-[10px]">
							<div className="">Your Height*</div>
							<div className="flex-1">
								<div className="group/c relative">
									<div className="absolute top-0 right-0 bottom-0 left-0 group-hover/c:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="relative">
										<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.4s] transition-all duration-[.3s]">
											<input className="w-full h-[27px] px-[10px] bg-[#D5BDA2] group-[:not(:hover)]/c:bg-transparent"/>
										</div>
										<div className="group-hover/c:scale-y-0 group-hover/c:delay-0 delay-[.4s] transition-all duration-[.3s]">
											<div className="relative h-[27px] flex items-center">
												<div className="flex-1 border-b-[2px] border-current"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pt-[10px] text-[12px] text-right">ex: 1.20, 1.54, 1.69, ... only number</div>
					</div>
					<div className="">
						<div className="flex items-center gap-[10px]">
							<div className="">Your Weight*</div>
							<div className="flex-1">
								<div className="group/c relative">
									<div className="absolute top-0 right-0 bottom-0 left-0 group-hover/c:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="relative">
										<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.4s] transition-all duration-[.3s]">
											<input className="w-full h-[27px] px-[10px] bg-[#D5BDA2] group-[:not(:hover)]/c:bg-transparent"/>
										</div>
										<div className="group-hover/c:scale-y-0 group-hover/c:delay-0 delay-[.4s] transition-all duration-[.3s]">
											<div className="relative h-[27px] flex items-center">
												<div className="flex-1 border-b-[2px] border-current"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pt-[10px] text-[12px] text-right">ex: 12.14, 154, 169, ... only number</div>
					</div>
					<div className="">
						<div className="flex items-center gap-[10px]">
							<div className="">Your Age*</div>
							<div className="flex-1">
								<div className="group/c relative">
									<div className="absolute top-0 right-0 bottom-0 left-0 group-hover/c:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="relative">
										<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.4s] transition-all duration-[.3s]">
											<input className="w-full h-[27px] px-[10px] bg-[#D5BDA2] group-[:not(:hover)]/c:bg-transparent"/>
										</div>
										<div className="group-hover/c:scale-y-0 group-hover/c:delay-0 delay-[.4s] transition-all duration-[.3s]">
											<div className="relative h-[27px] flex items-center">
												<div className="flex-1 border-b-[2px] border-current"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pt-[10px] text-[12px] text-right">ex: 18, 38, 48, ... only number</div>
					</div>
					<div className="">
						<div className="flex items-center gap-[10px]">
							<div className="">Select Gender*</div>
							<div className="flex-1">
								<div className="group/c relative">
									<div className="absolute top-0 right-0 bottom-0 left-0 group-hover/c:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="relative">
										<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.4s] transition-all duration-[.3s]">
											<input className="w-full h-[27px] px-[10px] bg-[#D5BDA2] group-[:not(:hover)]/c:bg-transparent"/>
										</div>
										<div className="group-hover/c:scale-y-0 group-hover/c:delay-0 delay-[.4s] transition-all duration-[.3s]">
											<div className="relative h-[27px] flex items-center">
												<div className="flex-1 border-b-[2px] border-current"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pt-[10px] text-[12px] text-right">ex: Female, or Male</div>
					</div>
					<div className="">
						<div className="flex items-center gap-[10px]">
							<div className="">I Want</div>
							<div className="flex-1">
								<div className="group/c relative">
									<div className="absolute top-0 right-0 bottom-0 left-0 group-hover/c:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="relative">
										<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.4s] transition-all duration-[.3s]">
											<input className="w-full h-[27px] px-[10px] bg-[#D5BDA2] group-[:not(:hover)]/c:bg-transparent"/>
										</div>
										<div className="group-hover/c:scale-y-0 group-hover/c:delay-0 delay-[.4s] transition-all duration-[.3s]">
											<div className="relative h-[27px] flex items-center">
												<div className="flex-1 border-b-[2px] border-current"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pt-[10px] text-[12px] text-right">ex: I Want (Weight Loss)...</div>
					</div>
					<div className="">
						<button className="group relative text-white w-full">
							<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></span>
							<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></span>
							<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></span>
							<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></span>
							<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></span>
							<span className="relative h-[50px] flex justify-center items-center">
								<span className="relative font-[Teko] font-medium text-[20px]">
									<span className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
										<span className="flex items-center gap-[10px]">
											<span className="">CALCULATE</span>
											<span className="">
												<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
											</span>
										</span>
									</span>
									<span className="block group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
										<span className="flex items-center gap-[10px]">
											<span className="">CALCULATE</span>
											<span className="">
												<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
											</span>
										</span>
									</span>
								</span>
							</span>
						</button>
					</div>
				</form>
				<div className="hidden xl:block pt-[100px]"></div>
				<div className="hidden xl:grid grid-cols-3 gap-[30px] text-center">
					<div className="hidden xl:block">
						<div className="font-[Teko] font-semibold text-[36px] uppercase">Basic Package</div>
						<div className="flex justify-center items-center">
							<div className="px-[10px] border-t-[1px] border-[#F67A45] border-opacity-50"></div>
							<div className="px-[10px] border-t-[3px] border-[#F67A45] border-opacity-50"></div>
							<div className="px-[10px] border-t-[4px] border-[#F67A45] border-opacity-50"></div>
							<div className="px-[10px] border-t-[7px] border-[#F67A45] border-opacity-50"></div>
							<div className="px-[10px] border-t-[10px] border-[#F67A45] border-opacity-50"></div>
							<div className="px-[10px] border-t-[7px] border-[#F67A45] border-opacity-50"></div>
							<div className="px-[10px] border-t-[4px] border-[#F67A45] border-opacity-50"></div>
							<div className="px-[10px] border-t-[3px] border-[#F67A45] border-opacity-50"></div>
							<div className="px-[10px] border-t-[1px] border-[#F67A45] border-opacity-50"></div>
						</div>
						<div className="pt-[50px]"></div>
						<div className="flex justify-center">
							<div className="">
								<div className="flex items-center gap-[10px]">
									<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#F67A45] bg-opacity-50 rounded-full">
										<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/check.svg" alt=""/>
									</div>
									<div className="">Gym facilities during hours</div>
								</div>
								<div className="pt-[20px]"></div>
								<div className="flex items-center gap-[10px]">
									<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#F67A45] bg-opacity-50 rounded-full">
										<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/check.svg" alt=""/>
									</div>
									<div className="">Use of cardio & strength equipment</div>
								</div>
								<div className="pt-[20px]"></div>
								<div className="flex items-center gap-[10px]">
									<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#F67A45] bg-opacity-50 rounded-full">
										<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/check.svg" alt=""/>
									</div>
									<div className="">Access to locker rooms</div>
								</div>
								<div className="pt-[20px]"></div>
								<div className="flex items-center gap-[10px]">
									<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#F67A45] bg-opacity-50 rounded-full">
										<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/check.svg" alt=""/>
									</div>
									<div className="">Discounted rates on group fitness</div>
								</div>
								<div className="pt-[20px]"></div>
								<div className="flex items-center gap-[10px]">
									<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#F67A45] bg-opacity-50 rounded-full">
										<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/check.svg" alt=""/>
									</div>
									<div className="">Goal setting session with a trainer</div>
								</div>
								<div className="pt-[20px]"></div>
								<div className="flex items-center gap-[10px]">
									<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#F67A45] bg-opacity-50 rounded-full">
										<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/check.svg" alt=""/>
									</div>
									<div className="">Extend support to 12 months</div>
								</div>
							</div>
						</div>
						<div className="pt-[50px]"></div>
						<div className="flex justify-center items-center">
							<div className="group relative">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-10 border-[1px] border-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
								<div className="relative h-[30px] w-[50px] flex justify-center items-center text-[12px] leading-[1]">
									<div className="relative text-white">
										<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
											$1 USD
										</div>
										<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
											$1 USD
										</div>
									</div>
								</div>
							</div>
							<div className="px-[20px] border-t-[1px] border-[#F67A45]"></div>
							<a className="group relative" href="#">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-10 border-[1px] border-[#F67A45] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
								<div className="relative h-[54px] w-[144px] flex justify-center items-center">
									<div className="relative font-[Teko]">
										<div className="absolute top-0 right-0 bottom-0 left-0 text-white group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">CHOOSE PLAN</div>
										<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">CHOOSE PLAN</div>
									</div>
								</div>
							</a>
							<div className="px-[20px] border-t-[1px] border-[#F67A45]"></div>
							<div className="group relative">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-10 border-[1px] border-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
								<div className="relative h-[30px] w-[50px] flex justify-center items-center text-[12px] leading-[1]">
									<div className="relative text-white">
										<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
											Month
										</div>
										<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
											Month
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pt-[30px]"></div>
						<div className="text-[12px]">Price is in US dollars and excludes tax and handling fees</div>
					</div>
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
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
										<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/pricing.png" alt=""/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="font-[Teko] font-semibold text-[36px] uppercase">ULTIMATE BOST</div>
						<div className="flex justify-center items-center">
							<div className="px-[10px] border-t-[1px] border-[#F67A45] border-opacity-50"></div>
							<div className="px-[10px] border-t-[3px] border-[#F67A45] border-opacity-50"></div>
							<div className="px-[10px] border-t-[4px] border-[#F67A45] border-opacity-50"></div>
							<div className="px-[10px] border-t-[7px] border-[#F67A45] border-opacity-50"></div>
							<div className="px-[10px] border-t-[10px] border-[#F67A45] border-opacity-50"></div>
							<div className="px-[10px] border-t-[7px] border-[#F67A45] border-opacity-50"></div>
							<div className="px-[10px] border-t-[4px] border-[#F67A45] border-opacity-50"></div>
							<div className="px-[10px] border-t-[3px] border-[#F67A45] border-opacity-50"></div>
							<div className="px-[10px] border-t-[1px] border-[#F67A45] border-opacity-50"></div>
						</div>
						<div className="pt-[50px]"></div>
						<div className="flex justify-center">
							<div className="">
								<div className="flex items-center gap-[10px]">
									<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#F67A45] bg-opacity-50 rounded-full">
										<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/check.svg" alt=""/>
									</div>
									<div className="">Gym facilities during hours</div>
								</div>
								<div className="pt-[20px]"></div>
								<div className="flex items-center gap-[10px]">
									<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#F67A45] bg-opacity-50 rounded-full">
										<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/check.svg" alt=""/>
									</div>
									<div className="">Use of cardio & strength equipment</div>
								</div>
								<div className="pt-[20px]"></div>
								<div className="flex items-center gap-[10px]">
									<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#F67A45] bg-opacity-50 rounded-full">
										<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/check.svg" alt=""/>
									</div>
									<div className="">Access to locker rooms</div>
								</div>
								<div className="pt-[20px]"></div>
								<div className="flex items-center gap-[10px]">
									<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#F67A45] bg-opacity-50 rounded-full">
										<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/check.svg" alt=""/>
									</div>
									<div className="">Discounted rates on group fitness</div>
								</div>
								<div className="pt-[20px]"></div>
								<div className="flex items-center gap-[10px]">
									<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#F67A45] bg-opacity-50 rounded-full">
										<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/check.svg" alt=""/>
									</div>
									<div className="">Goal setting session with a trainer</div>
								</div>
								<div className="pt-[20px]"></div>
								<div className="flex items-center gap-[10px]">
									<div className="flex justify-center items-center w-[26px] h-[26px] bg-[#F67A45] bg-opacity-50 rounded-full">
										<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/check.svg" alt=""/>
									</div>
									<div className="">Extend support to 12 months</div>
								</div>
							</div>
						</div>
						<div className="pt-[50px]"></div>
						<div className="flex justify-center items-center">
							<div className="group relative">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-10 border-[1px] border-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
								<div className="relative h-[30px] w-[50px] flex justify-center items-center text-[12px] leading-[1]">
									<div className="relative text-white">
										<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
											$9 USD
										</div>
										<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
											$9 USD
										</div>
									</div>
								</div>
							</div>
							<div className="px-[20px] border-t-[1px] border-[#F67A45]"></div>
							<a className="group relative" href="#">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-10 border-[1px] border-[#F67A45] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
								<div className="relative h-[54px] w-[144px] flex justify-center items-center">
									<div className="relative font-[Teko]">
										<div className="absolute top-0 right-0 bottom-0 left-0 text-white group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">CHOOSE PLAN</div>
										<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">CHOOSE PLAN</div>
									</div>
								</div>
							</a>
							<div className="px-[20px] border-t-[1px] border-[#F67A45]"></div>
							<div className="group relative">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-10 border-[1px] border-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
								<div className="relative h-[30px] w-[50px] flex justify-center items-center text-[12px] leading-[1]">
									<div className="relative text-white">
										<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
											Month
										</div>
										<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
											Month
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pt-[30px]"></div>
						<div className="text-[12px]">Price is in US dollars and excludes tax and handling fees</div>
					</div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="text-white">
			<div className="grid xl:grid-cols-2">
				<div className="hidden xl:block relative">
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F]"></div>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-30"></div>
					<div className="relative grid grid-cols-2">
						<div className="">
							<div className="flex justify-end">
								<div className="p-[50px]">
									<div className="font-[Teko] font-semibold text-[28px] text-[#D5BDA2] uppercase">Sta Centric Approach</div>
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
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
														<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
															<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/skills1.svg" alt=""/>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="flex-1 text-[14px]">
											<div className="">typesetting industry has</div>
											<div className="">text of the printing and</div>
											<div className="">the industry's stan.</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="">
							<div className="relative">
								<div className="relative p-[50px]">
									<div className="font-[Teko] font-semibold text-[28px] text-[#D5BDA2] uppercase">Health and Wellness</div>
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
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
														<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
															<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/skill2.svg" alt=""/>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="flex-1 text-[14px]">
											<div className="">typesetting industry has</div>
											<div className="">text of the printing and</div>
											<div className="">the industry's stan.</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="">
							<div className="flex justify-end">
								<div className="relative p-[50px]">
									<div className="font-[Teko] font-semibold text-[28px] text-[#D5BDA2] uppercase">Knowledgeable Fitnes</div>
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
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
														<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
															<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/skill3.svg" alt=""/>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="flex-1 text-[14px]">
											<div className="">typesetting industry has</div>
											<div className="">text of the printing and</div>
											<div className="">the industry's stan.</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="">
							<div className="relative">
								<div className="relative p-[50px]">
									<div className="font-[Teko] font-semibold text-[28px] text-[#D5BDA2] uppercase">Facilities & Equipment</div>
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
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
														<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
															<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/skill4.svg" alt=""/>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="flex-1 text-[14px]">
											<div className="">typesetting industry has</div>
											<div className="">text of the printing and</div>
											<div className="">the industry's stan.</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="absolute top-0 bottom-0 left-0 m-auto h-[2px] w-1/2 flex items-center">
						<div className="flex-1 bg-[#01010F] border-t-[1px] border-[#F67A45] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-t-[3px] border-[#F67A45] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-t-[4px] border-[#F67A45] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-t-[7px] border-[#F67A45] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-t-[10px] border-[#F67A45] border-opacity-50"></div>
					</div>
					<div className="absolute top-0 right-0 bottom-0 m-auto h-[2px] w-1/2 flex items-center">
						<div className="flex-1 bg-[#01010F] border-t-[10px] border-[#F67A45] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-t-[7px] border-[#F67A45] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-t-[4px] border-[#F67A45] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-t-[3px] border-[#F67A45] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-t-[1px] border-[#F67A45] border-opacity-50"></div>
					</div>
					<div className="absolute top-0 right-0 left-0 m-auto h-1/2 w-[10px] flex flex-col items-center">
						<div className="flex-1 bg-[#01010F] border-l-[1px] border-[#F67A45] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-l-[3px] border-[#F67A45] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-l-[4px] border-[#F67A45] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-l-[7px] border-[#F67A45] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-l-[10px] border-[#F67A45] border-opacity-50"></div>
					</div>
					<div className="absolute right-0 bottom-0 left-0 m-auto h-1/2 w-[10px] flex flex-col items-center">
						<div className="flex-1 bg-[#01010F] border-l-[10px] border-[#F67A45] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-l-[7px] border-[#F67A45] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-l-[4px] border-[#F67A45] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-l-[3px] border-[#F67A45] border-opacity-50"></div>
						<div className="flex-1 bg-[#01010F] border-l-[1px] border-[#F67A45] border-opacity-50"></div>
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
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
								<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
									<img className="absolute top-0 left-0 w-full h-full object-cover object-center" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/video.png" alt=""/>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center items-center">
						<a className="group relative" href="#">
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-transparent rounded-full group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
							<div className="relative h-[101px] w-[101px] flex justify-center items-center">
								<div className="relative font-[Teko]">
									<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
										<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/play1.svg" alt=""/>
									</div>
									<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
										<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/play1.svg" alt=""/>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="py-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="flex">
					<div className="flex-1">
						<div className="flex flex-col md:flex-row gap-[30px]">
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
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
												<img className="w-full md:w-auto" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/post2.png" alt=""/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="font-[Teko] font-semibold text-[22px]">Expert Tips for Maximizing Your Gym Pro</div>
								<div className="w-[200px] pt-[10px] pb-[20px]">
									<div className="border-t-[1px] border-[#D5BDA2] border-opacity-30"></div>
									<div className="border-t-[1px] border-[#D5BDA2] border-opacity-30 mr-[30px] mt-[5px]"></div>
									<div className="border-t-[1px] border-[#D5BDA2] border-opacity-30 mr-[60px] mt-[5px]"></div>
								</div>
								<div className="text-[14px]">
									<div className="flex items-center gap-[20px]">
										<a className="group relative" href="#">
											<div className="absolute top-0 right-0 bottom-0 left-0 border-r-[1px] border-[#D5BDA2] border-opacity-50 group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-50 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="relative h-[40px] w-[40px] flex justify-center items-center">
												<div className="relative font-[Teko] font-medium text-[20px]">
													<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
														<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
													</div>
													<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]">
														<img className="invert" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
													</div>
												</div>
											</div>
										</a>
										<div className="">
											<div className="">Are you ready to take your fitness journey to</div>
											<div className="">the next level? Whether you're...</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pt-[50px]"></div>
						<div className="border-t-[2px] border-[#F67A45]"></div>
						<div className="pt-[50px]"></div>
						<div className="flex flex-col md:flex-row gap-[30px]">
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
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
												<img className="w-full md:w-auto" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/post3.png" alt=""/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="font-[Teko] font-semibold text-[22px]">Expert Tips for Maximizing Your Gym</div>
								<div className="w-[200px] pt-[10px] pb-[20px]">
									<div className="border-t-[1px] border-[#D5BDA2] border-opacity-30"></div>
									<div className="border-t-[1px] border-[#D5BDA2] border-opacity-30 mr-[30px] mt-[5px]"></div>
									<div className="border-t-[1px] border-[#D5BDA2] border-opacity-30 mr-[60px] mt-[5px]"></div>
								</div>
								<div className="text-[14px]">
									<div className="flex items-center gap-[20px]">
										<a className="group relative" href="#">
											<div className="absolute top-0 right-0 bottom-0 left-0 border-r-[1px] border-[#D5BDA2] border-opacity-50 group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-50 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="relative h-[40px] w-[40px] flex justify-center items-center">
												<div className="relative font-[Teko] font-medium text-[20px]">
													<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
														<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
													</div>
													<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]">
														<img className="invert" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
													</div>
												</div>
											</div>
										</a>
										<div className="">
											<div className="">Are you ready to take your fitness journey to</div>
											<div className="">the next level? Whether you're...</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pt-[50px]"></div>
						<div className="border-t-[2px] border-[#F67A45]"></div>
						<div className="pt-[50px]"></div>
						<div className="flex flex-col md:flex-row gap-[30px]">
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
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
												<img className="w-full md:w-auto" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/post1.png" alt=""/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="font-[Teko] font-semibold text-[22px]">For Building Lean Muscle Mass Experience</div>
								<div className="w-[200px] pt-[10px] pb-[20px]">
									<div className="border-t-[1px] border-[#D5BDA2] border-opacity-30"></div>
									<div className="border-t-[1px] border-[#D5BDA2] border-opacity-30 mr-[30px] mt-[5px]"></div>
									<div className="border-t-[1px] border-[#D5BDA2] border-opacity-30 mr-[60px] mt-[5px]"></div>
								</div>
								<div className="text-[14px]">
									<div className="flex items-center gap-[20px]">
										<a className="group relative" href="#">
											<div className="absolute top-0 right-0 bottom-0 left-0 border-r-[1px] border-[#D5BDA2] border-opacity-50 group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-50 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="relative h-[40px] w-[40px] flex justify-center items-center">
												<div className="relative font-[Teko] font-medium text-[20px]">
													<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
														<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
													</div>
													<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]">
														<img className="invert" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
													</div>
												</div>
											</div>
										</a>
										<div className="">
											<div className="">Are you ready to take your fitness journey to</div>
											<div className="">the next level? Whether you're...</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="hidden md:block">
						<div className="flex flex-col items-center font-[Teko] uppercase xl:border-r-[2px] border-l-[2px] border-[#F67A45] xl:pe-[20px] ps-[10px]">
							<div className="font-semibold text-[60px] leading-[1] [writing-mode:tb]">Latest Post</div>
							<div className="pt-[20px]"></div>
							<div className="w-[1em] text-[40px] text-[#F67A45] border-t-[2px] border-b-[2px] border-[#F67A45]">AND</div>
							<div className="pt-[20px]"></div>
							<div className="font-semibold text-[60px] leading-[1] [writing-mode:tb]">Articles</div>
						</div>
					</div>
					<div className="hidden xl:block flex-1 text-right">
						<div className="flex justify-end gap-[30px]">
							<div className="">
								<div className="font-[Teko] font-semibold text-[22px]">A Beginner's Guide to Starting Your Fitness</div>
								<div className="flex justify-end">
									<div className="w-[200px] pt-[10px] pb-[20px]">
										<div className="border-t-[1px] border-[#D5BDA2] border-opacity-30"></div>
										<div className="border-t-[1px] border-[#D5BDA2] border-opacity-30 ms-[30px] mt-[5px]"></div>
										<div className="border-t-[1px] border-[#D5BDA2] border-opacity-30 ms-[60px] mt-[5px]"></div>
									</div>
								</div>
								<div className="text-[14px]">
									<div className="flex items-center gap-[20px]">
										<div className="">
											<div className="">Are you ready to take your fitness journey to</div>
											<div className="">the next level? Whether you're...</div>
										</div>
										<a className="group relative" href="#">
											<div className="absolute top-0 right-0 bottom-0 left-0 border-l-[1px] border-[#D5BDA2] border-opacity-50 group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-50 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="relative h-[40px] w-[40px] flex justify-center items-center">
												<div className="relative font-[Teko] font-medium text-[20px]">
													<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
														<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
													</div>
													<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]">
														<img className="invert" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
													</div>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
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
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
												<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/post1.png" alt=""/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pt-[50px]"></div>
						<div className="border-t-[2px] border-[#F67A45]"></div>
						<div className="pt-[50px]"></div>
						<div className="flex justify-end gap-[30px]">
							<div className="">
								<div className="font-[Teko] font-semibold text-[22px]">Fitness Potential: Journey at the Gym</div>
								<div className="flex justify-end">
									<div className="w-[200px] pt-[10px] pb-[20px]">
										<div className="border-t-[1px] border-[#D5BDA2] border-opacity-30"></div>
										<div className="border-t-[1px] border-[#D5BDA2] border-opacity-30 ms-[30px] mt-[5px]"></div>
										<div className="border-t-[1px] border-[#D5BDA2] border-opacity-30 ms-[60px] mt-[5px]"></div>
									</div>
								</div>
								<div className="text-[14px]">
									<div className="flex items-center gap-[20px]">
										<div className="">
											<div className="">Are you ready to take your fitness journey to</div>
											<div className="">the next level? Whether you're...</div>
										</div>
										<a className="group relative" href="#">
											<div className="absolute top-0 right-0 bottom-0 left-0 border-l-[1px] border-[#D5BDA2] border-opacity-50 group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-50 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="relative h-[40px] w-[40px] flex justify-center items-center">
												<div className="relative font-[Teko] font-medium text-[20px]">
													<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
														<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
													</div>
													<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]">
														<img className="invert" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
													</div>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
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
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
												<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/post3.png" alt=""/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pt-[50px]"></div>
						<div className="border-t-[2px] border-[#F67A45]"></div>
						<div className="pt-[50px]"></div>
						<div className="flex justify-end gap-[30px]">
							<div className="">
								<div className="font-[Teko] font-semibold text-[22px]">Maximize Your Workout: 10 Exercises</div>
								<div className="flex justify-end">
									<div className="w-[200px] pt-[10px] pb-[20px]">
										<div className="border-t-[1px] border-[#D5BDA2] border-opacity-30"></div>
										<div className="border-t-[1px] border-[#D5BDA2] border-opacity-30 ms-[30px] mt-[5px]"></div>
										<div className="border-t-[1px] border-[#D5BDA2] border-opacity-30 ms-[60px] mt-[5px]"></div>
									</div>
								</div>
								<div className="text-[14px]">
									<div className="flex items-center gap-[20px]">
										<div className="">
											<div className="">Are you ready to take your fitness journey to</div>
											<div className="">the next level? Whether you're...</div>
										</div>
										<a className="group relative" href="#">
											<div className="absolute top-0 right-0 bottom-0 left-0 border-l-[1px] border-[#D5BDA2] border-opacity-50 group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] bg-opacity-50 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="relative h-[40px] w-[40px] flex justify-center items-center">
												<div className="relative font-[Teko] font-medium text-[20px]">
													<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
														<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
													</div>
													<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]">
														<img className="invert" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg" alt=""/>
													</div>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
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
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
												<img className="" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/post2.png" alt=""/>
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
		<div className="">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="xl:flex">
					<div className="flex-1 relative hidden xl:flex items-center">
						<div className="absolute top-0 right-0 bottom-0 w-1/2 border-[1px] border-[#F67A45] rounded-bl-full rounded-tl-full"></div>
						<div className="absolute top-0 right-0 bottom-0 m-auto h-3/4 w-1/2 border-[1px] border-[#F67A45] rounded-bl-full rounded-tl-full"></div>
						<div className="absolute top-0 right-0 bottom-0 m-auto h-2/4 w-1/2 border-[1px] border-[#F67A45] rounded-bl-full rounded-tl-full"></div>
						<div className="relative bg-[#F67A45] text-white py-[10px] px-[30px]">Whether you're a beginner</div>
						<div className="flex-1 border-t-[1px] border-[#F67A45]"></div>
						<div className="flex-1 border-t-[3px] border-[#F67A45]"></div>
						<div className="flex-1 border-t-[4px] border-[#F67A45]"></div>
						<div className="flex-1 border-t-[7px] border-[#F67A45]"></div>
						<div className="flex-1 border-t-[10px] border-[#F67A45]"></div>
					</div>
					<div className="border-[10px] border-[#F67A45] bg-[#D5BDA2] text-[#01010F]">
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
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
										<div className="p-[50px]">
											<div className="text-center pb-[10px]">
												<div className="font-[Teko] font-semibold text-[36px]">SUBSCRIBE TO OUR NEWSLETTER</div>
											</div>
											<form action="#" className="h-[100px] flex items-center gap-[10px]">
												<div className="">Enter your email</div>
												<div className="flex-1">
													<div className="group/c relative">
														<div className="absolute top-0 right-0 bottom-0 left-0 border-l-[1px] border-[#D5BDA2] border-opacity-50 group-hover/c:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
														<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
														<div className="relative">
															<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.4s] transition-all duration-[.3s]">
																<input className="w-full h-[30px] px-[10px] group-[:not(:hover)]/c:bg-transparent"/>
															</div>
															<div className="group-hover/c:scale-y-0 group-hover/c:delay-0 delay-[.4s] transition-all duration-[.3s]">
																<div className="relative h-[30px] flex items-center">
																	<div className="flex-1 border-t-[2px] border-dotted border-[#01010F]"></div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<button className="">
													<img className="brightness-0" src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/newsletter.svg" alt=""/>
												</button>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex-1 relative hidden xl:flex items-center">
						<div className="absolute top-0 left-0 bottom-0 w-1/2 border-[1px] border-[#F67A45] rounded-br-full rounded-tr-full"></div>
						<div className="absolute top-0 left-0 bottom-0 m-auto h-3/4 w-1/2 border-[1px] border-[#F67A45] rounded-br-full rounded-tr-full"></div>
						<div className="absolute top-0 left-0 bottom-0 m-auto h-2/4 w-1/2 border-[1px] border-[#F67A45] rounded-br-full rounded-tr-full"></div>
						<div className="flex-1 border-t-[10px] border-[#F67A45]"></div>
						<div className="flex-1 border-t-[7px] border-[#F67A45]"></div>
						<div className="flex-1 border-t-[4px] border-[#F67A45]"></div>
						<div className="flex-1 border-t-[3px] border-[#F67A45]"></div>
						<div className="flex-1 border-t-[1px] border-[#F67A45]"></div>
						<div className="relative bg-[#F67A45] text-white py-[10px] px-[30px]">Seasoned fitness enthusiast</div>
					</div>
				</div>
			</div>
		</div>

		</div>
	);
}
