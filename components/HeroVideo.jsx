'use client';

import { useEffect, useRef, useState } from 'react';

// Muted, looping gym-tour video for the home hero. The hero only shows media on desktop-width
// screens, so the video is only downloaded there; visitors who prefer reduced motion see the
// poster frame instead of moving video.
export default function HeroVideo({ src, poster }) {
	const ref = useRef(null);
	const [play, setPlay] = useState(false);

	useEffect(() => {
		const wide = window.matchMedia('(min-width: 1280px)');
		const calm = window.matchMedia('(prefers-reduced-motion: reduce)');
		const update = () => setPlay(wide.matches && !calm.matches);
		update();
		wide.addEventListener('change', update);
		calm.addEventListener('change', update);
		return () => {
			wide.removeEventListener('change', update);
			calm.removeEventListener('change', update);
		};
	}, []);

	useEffect(() => {
		const video = ref.current;
		if (!video) return;
		if (play) {
			video.muted = true;
			video.play().catch(() => {});
		} else {
			video.pause();
		}
	}, [play]);

	return (
		<video
			ref={ref}
			className="absolute top-0 left-0 w-full h-full object-cover object-center"
			src={play ? src : undefined}
			poster={poster}
			autoPlay={play}
			muted
			loop
			playsInline
			preload="none"
			aria-hidden="true"
			tabIndex={-1}
		/>
	);
}
