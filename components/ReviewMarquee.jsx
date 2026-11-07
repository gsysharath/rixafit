'use client';

import { useState } from 'react';

// One row of review cards that scrolls on its own. The list is rendered twice and the track
// slides left by exactly one copy, so the loop is seamless. It pauses on hover, on keyboard
// focus and with the pause button; with "reduce motion" turned on it stays still and the row
// can be scrolled by hand instead.

function Stars({ rating }) {
	return (
		<div className="flex gap-[3px] text-[14px]" role="img" aria-label={`Rated ${rating} out of 5`}>
			{[1, 2, 3, 4, 5].map((n) => (
				<i key={n} className={n <= rating ? 'fa-solid fa-star text-[#E22C32]' : 'fa-regular fa-star text-[#D4D4D4]/40'} aria-hidden="true"></i>
			))}
		</div>
	);
}

function ReviewCard({ review }) {
	return (
		<figure className="relative h-full flex flex-col w-[280px] md:w-[360px] border-[1px] border-[#D4D4D4]/30 p-[30px]">
			<div className="absolute top-[-1px] left-[-1px] w-[80px] border-t-[4px] border-[#E22C32]"></div>
			<div className="flex items-start justify-between gap-[20px]">
				<div className="font-teko text-[80px] leading-[.6] text-[#E22C32]" aria-hidden="true">&ldquo;</div>
				{review.rating && <Stars rating={review.rating} />}
			</div>
			<blockquote className="flex-1 pt-[10px]">{review.text}</blockquote>
			<figcaption className="pt-[20px] mt-[20px] border-t-[1px] border-[#D4D4D4]/30">
				{review.name && <div className="font-teko font-semibold text-[24px] leading-[1.2]">{review.name}</div>}
				{review.source && <div className="text-[14px] text-[#D4D4D4]">{review.source}</div>}
			</figcaption>
		</figure>
	);
}

export default function ReviewMarquee({ reviews }) {
	const [paused, setPaused] = useState(false);
	// About 8 seconds per card keeps the text readable as it moves.
	const duration = `${reviews.length * 8}s`;

	const copy = (hidden) =>
		reviews.map((review, i) => (
			<div key={`${hidden ? 'b' : 'a'}-${i}`} className={`shrink-0 pr-[20px] md:pr-[30px] ${hidden ? 'motion-reduce:hidden' : ''}`} aria-hidden={hidden || undefined}>
				<ReviewCard review={review} />
			</div>
		));

	return (
		<div>
			<div className="group/marquee overflow-hidden motion-reduce:overflow-x-auto [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
				<div
					className={`flex w-max items-stretch animate-[reviews-marquee_var(--marquee-duration)_linear_infinite] motion-reduce:animate-none group-hover/marquee:[animation-play-state:paused] group-focus-within/marquee:[animation-play-state:paused] ${paused ? '[animation-play-state:paused]' : ''}`}
					style={{ '--marquee-duration': duration }}
				>
					{copy(false)}
					{copy(true)}
				</div>
			</div>
			<div className="pt-[20px] flex justify-end motion-reduce:hidden">
				<button
					type="button"
					onClick={() => setPaused((p) => !p)}
					aria-pressed={paused}
					className="flex items-center gap-[8px] text-[14px] text-[#D4D4D4] hover:text-[#E22C32]"
				>
					<i className={paused ? 'fa-solid fa-play' : 'fa-solid fa-pause'} aria-hidden="true"></i>
					{paused ? 'Play reviews' : 'Pause reviews'}
				</button>
			</div>
		</div>
	);
}
