'use client';

import { useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

// Scroll position when moving between pages:
// - clicking a link opens the new page at the top;
// - the browser's Back/Forward buttons return to where the visitor was on that page;
// - links to a section (#enquiry etc.) are left to Next.js, which scrolls to that section.
// Next.js on its own left pages at the previous page's position (the site's smooth scrolling
// interfered) and, once that was fixed, also sent Back to the top.

// Jump instantly. The site uses CSS smooth scrolling, so it is switched off first, and the browser
// is made to apply that change (getClientRects) - otherwise the jump runs as a slow animation that
// the new page's rendering cancels part-way.
function jumpTo(y) {
	const root = document.documentElement;
	const previous = root.style.scrollBehavior;
	root.style.scrollBehavior = 'auto';
	root.getClientRects();
	window.scrollTo({ top: y, left: 0, behavior: 'instant' });
	root.style.scrollBehavior = previous;
}

const pageKey = () => window.location.pathname + window.location.search;
// How long after Back/Forward the position keeps being re-applied while the page settles.
const RESTORE_WINDOW_MS = 2500;

export default function ScrollToTop() {
	const pathname = usePathname();
	const firstRender = useRef(true);
	const fromHistory = useRef(false);
	const positions = useRef(new Map());
	const currentKey = useRef('');
	// { target, until } while a Back/Forward position is being restored.
	const restoring = useRef(null);

	useLayoutEffect(() => {
		currentKey.current = pageKey();
		let frame = 0;

		// Re-apply a Back/Forward position after the page changes height (sliders starting etc.).
		const reapply = () => {
			const r = restoring.current;
			if (!r || performance.now() > r.until) return;
			if (Math.abs(window.scrollY - r.target) > 2) jumpTo(r.target);
		};
		// Any scrolling by the visitor ends the restore.
		const stopRestoring = () => {
			restoring.current = null;
		};
		// Remember how far down each page the visitor is (at most once per frame).
		const onScroll = () => {
			if (frame || fromHistory.current) return;
			frame = requestAnimationFrame(() => {
				frame = 0;
				if (!fromHistory.current) positions.current.set(currentKey.current, window.scrollY);
			});
		};
		const onPopState = () => {
			fromHistory.current = true;
		};
		const userEvents = ['wheel', 'touchstart', 'keydown', 'mousedown'];
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('popstate', onPopState);
		window.addEventListener('rixa:layout-ready', reapply);
		userEvents.forEach((e) => window.addEventListener(e, stopRestoring, { passive: true }));
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('popstate', onPopState);
			window.removeEventListener('rixa:layout-ready', reapply);
			userEvents.forEach((e) => window.removeEventListener(e, stopRestoring));
		};
	}, []);

	useLayoutEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;
			return;
		}
		currentKey.current = pageKey();

		if (fromHistory.current) {
			const target = positions.current.get(currentKey.current) || 0;
			restoring.current = { target, until: performance.now() + RESTORE_WINDOW_MS };
			jumpTo(target);
			const again = () => {
				const r = restoring.current;
				if (r && Math.abs(window.scrollY - r.target) > 2) jumpTo(r.target);
			};
			// Next.js scrolls to the top during the same update, so restore again on the next
			// frame, and a little later in case the page was still growing.
			const frame = requestAnimationFrame(() => {
				again();
				fromHistory.current = false;
			});
			const timers = [400, 1200].map((ms) => setTimeout(again, ms));
			return () => {
				cancelAnimationFrame(frame);
				timers.forEach(clearTimeout);
			};
		}

		restoring.current = null;
		if (window.location.hash) return;
		jumpTo(0);
		const frame = requestAnimationFrame(() => jumpTo(0));
		return () => cancelAnimationFrame(frame);
	}, [pathname]);

	return null;
}
