'use client';

import { useRef, useState } from 'react';

// Portrait member videos: a poster with a play button until pressed, then the native player.
// Videos use preload="none", so nothing downloads until a visitor chooses to watch.

function pauseOthers(current) {
	document.querySelectorAll('video[data-testimonial-video]').forEach((v) => {
		if (v !== current) v.pause();
	});
}

function VideoCard({ video, index }) {
	const ref = useRef(null);
	const [started, setStarted] = useState(false);
	const label = `Member video testimonial ${index + 1}`;

	const start = () => {
		setStarted(true);
		ref.current?.play().catch(() => {});
	};

	return (
		<figure className="shrink-0 w-[70%] snap-start sm:w-auto border-[1px] border-[#D4D4D4]/30">
			<div className="relative aspect-[9/16] bg-black">
				<video
					ref={ref}
					data-testimonial-video=""
					className="absolute inset-0 w-full h-full object-cover"
					src={video.src}
					poster={video.poster}
					preload="none"
					playsInline
					controls={started}
					aria-label={label}
					onPlay={(e) => pauseOthers(e.currentTarget)}
				/>
				{!started && (
					<button type="button" onClick={start} aria-label={`Play ${label}`} className="group absolute inset-0 flex items-end justify-center pb-[18%]">
						<span className="absolute inset-0 bg-gradient-to-t from-[#01010F]/80 via-transparent to-transparent"></span>
						<span className="relative w-[70px] h-[70px] rounded-full bg-[#971A1E] ring-[6px] ring-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-[.3s]">
							<i className="fa-solid fa-play text-white text-[22px] ml-[4px]" aria-hidden="true"></i>
						</span>
					</button>
				)}
			</div>
			<figcaption className="flex items-center justify-between gap-[10px] px-[15px] py-[10px]">
				<span className="font-teko font-semibold text-[20px] uppercase">Member story</span>
				<span className="text-[14px] text-[#D4D4D4]">{video.duration}</span>
			</figcaption>
		</figure>
	);
}

export default function VideoTestimonials({ videos }) {
	return (
		<div className="flex gap-[15px] overflow-x-auto snap-x snap-mandatory pb-[15px] sm:grid sm:grid-cols-3 sm:gap-[30px] sm:overflow-visible sm:pb-0">
			{videos.map((video, i) => (
				<VideoCard key={video.src} video={video} index={i} />
			))}
		</div>
	);
}
