'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

// Opens any <a data-lightbox href="image"> on the page in a full-screen viewer.
// Without JavaScript the links still open the image directly.
export default function GalleryLightbox() {
	const [items, setItems] = useState([]);
	const [index, setIndex] = useState(-1);
	const closeRef = useRef(null);
	const touchStart = useRef(null);
	const open = index >= 0 && items[index];

	const close = useCallback(() => setIndex(-1), []);
	const step = useCallback((delta) => setIndex((i) => (i + delta + items.length) % items.length), [items.length]);

	useEffect(() => {
		function onClick(event) {
			const link = event.target.closest('a[data-lightbox]');
			if (!link) return;
			event.preventDefault();
			const links = [...document.querySelectorAll('a[data-lightbox]')];
			setItems(links.map((a) => ({ src: a.getAttribute('href'), caption: a.dataset.caption || '' })));
			setIndex(links.indexOf(link));
		}
		document.addEventListener('click', onClick);
		return () => document.removeEventListener('click', onClick);
	}, []);

	useEffect(() => {
		if (!open) return undefined;
		function onKey(event) {
			if (event.key === 'Escape') close();
			if (event.key === 'ArrowRight') step(1);
			if (event.key === 'ArrowLeft') step(-1);
		}
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		document.addEventListener('keydown', onKey);
		closeRef.current?.focus();
		return () => {
			document.body.style.overflow = previousOverflow;
			document.removeEventListener('keydown', onKey);
		};
	}, [open, close, step]);

	if (!open) return null;

	return (
		<div
			role="dialog"
			aria-modal="true"
			aria-label={open.caption || 'Image viewer'}
			className="fixed inset-0 z-[100] bg-[#01010F] bg-opacity-95 flex items-center justify-center p-[15px]"
			onClick={(e) => e.target === e.currentTarget && close()}
			onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }}
			onTouchEnd={(e) => {
				if (touchStart.current === null) return;
				const dx = e.changedTouches[0].clientX - touchStart.current;
				if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
				touchStart.current = null;
			}}
		>
			<figure className="max-w-[1100px] max-h-full flex flex-col items-center">
				<img className="max-h-[80vh] w-auto object-contain border-[4px] border-[#E22C32]" src={open.src} alt={open.caption} />
				<figcaption className="pt-[15px] text-[#E7E7E7] text-center">
					{open.caption} <span className="text-[#E22C32]">({index + 1}/{items.length})</span>
				</figcaption>
			</figure>
			<button ref={closeRef} type="button" onClick={close} aria-label="Close" className="absolute top-[20px] right-[20px] w-[50px] h-[50px] bg-[#971A1E] text-white text-[22px] hover:bg-white hover:text-[#971A1E]">
				<i className="fa fa-xmark"></i>
			</button>
			{items.length > 1 && (
				<>
					<button type="button" onClick={() => step(-1)} aria-label="Previous image" className="absolute left-[15px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] border-[1px] border-[#E22C32] text-[#E22C32] hover:bg-[#971A1E] hover:text-white">
						<i className="fa fa-angle-left"></i>
					</button>
					<button type="button" onClick={() => step(1)} aria-label="Next image" className="absolute right-[15px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] border-[1px] border-[#E22C32] text-[#E22C32] hover:bg-[#971A1E] hover:text-white">
						<i className="fa fa-angle-right"></i>
					</button>
				</>
			)}
		</div>
	);
}
