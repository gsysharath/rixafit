'use client';

import { useEffect, useRef, useState } from 'react';

// Muted, looping gym-tour video for the home hero. The home page renders one copy for desktop and
// a lighter one for phones/tablets; `media` is the screen-size query each copy belongs to, so only
// the matching file is downloaded. Visitors who prefer reduced motion, or who have Data Saver on,
// see the poster frame instead of moving video.
export default function HeroVideo({ src, poster, media = '(min-width: 1280px)' }) {
	const ref = useRef(null);
	const [play, setPlay] = useState(false);

	useEffect(() => {
		const screen = window.matchMedia(media);
		const calm = window.matchMedia('(prefers-reduced-motion: reduce)');
		const saveData = navigator.connection?.saveData === true;
		const update = () => setPlay(screen.matches && !calm.matches && !saveData);
		update();
		screen.addEventListener('change', update);
		calm.addEventListener('change', update);
		return () => {
			screen.removeEventListener('change', update);
			calm.removeEventListener('change', update);
		};
	}, [media]);

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
