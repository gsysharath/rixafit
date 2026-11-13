'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// GSAP, tiny-slider and Odometer touch `window` at import time, so they are
// loaded lazily in the browser and shared across route changes.
let libsPromise;
function loadLibs() {
	if (!libsPromise) {
		libsPromise = Promise.all([
			import('gsap'),
			import('gsap/ScrollTrigger'),
			import('tiny-slider/src/tiny-slider'),
			import('odometer'),
		]).then(([gsapModule, scrollTriggerModule, tnsModule, odometerModule]) => {
			const gsap = gsapModule.gsap || gsapModule.default;
			const ScrollTrigger = scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default;
			gsap.registerPlugin(ScrollTrigger);
			return {
				gsap,
				ScrollTrigger,
				tns: tnsModule.tns,
				Odometer: odometerModule.default || odometerModule,
			};
		});
	}
	return libsPromise;
}

function initScrollReveal({ gsap }) {
	const tweens = [];
	document.querySelectorAll('[data-scroll]').forEach((el) => {
		const targets = el.querySelectorAll(el.getAttribute('data-scroll'));
		const cog = el.querySelector('[data-scroll-cog=""]');
		if (!cog || !targets.length) return;
		const config = JSON.parse(cog.innerHTML);
		config.scrollTrigger.onUpdate = (o) => {
			o.trigger.classList[o.isActive ? 'add' : 'remove']('c-active');
			o.trigger.dispatchEvent(new CustomEvent('gsap-' + o.trigger.getAttribute('data-scroll-item'), { detail: o }));
		};
		config.scrollTrigger.trigger = targets;
		tweens.push(gsap.to(targets, config));
	});
	return tweens;
}

function initOdometer({ Odometer }) {
	const cleanups = [];
	document.querySelectorAll('[data-scroll-item="odometer"]').forEach((el) => {
		const counters = [...el.querySelectorAll('.odometer')].map((node) => {
			// data-format lets a counter opt out of thousands separators (e.g. phone digits use "d").
			if (!node.odometer) node.odometer = new Odometer({ el: node, value: 0, format: node.dataset.format || '(,ddd)' });
			return node;
		});
		const onToggle = (event) => {
			counters.forEach((node) => node.odometer.update(event.detail.isActive ? Number(node.getAttribute('data-v')) : 0));
		};
		el.addEventListener('gsap-odometer', onToggle);
		cleanups.push(() => el.removeEventListener('gsap-odometer', onToggle));
	});
	return cleanups;
}

function resolveNode(scope, selector) {
	if (typeof selector !== 'string') return selector;
	return scope.querySelector(selector) || document.querySelector(selector) || selector;
}

function initSliders({ tns }) {
	const sliders = [];
	document.querySelectorAll('[data-slider]').forEach((el) => {
		const cog = el.querySelector('[data-slider-cog]');
		if (!cog) return;
		const config = JSON.parse(cog.innerHTML);
		// Resolve selectors inside this slider so repeated class names don't collide.
		['container', 'prevButton', 'nextButton', 'navContainer', 'controlsContainer'].forEach((key) => {
			if (config[key]) config[key] = resolveNode(el, config[key]);
		});
		if (typeof config.container === 'string') return;
		const slider = tns(config);
		if (config.onIndexChanged) {
			slider.events.on('indexChanged', (info) => {
				const active = 'tns-slide-index';
				for (let i = 0; i < info.slideCountNew; i++) info.slideItems[i].classList.remove(active);
				info.slideItems[info.index].classList.add(active);
			});
		}
		sliders.push(slider);
	});
	return sliders;
}

function setToggle(target, value) {
	target.setAttribute('data-t', value);
}

function closeOffcanvas() {
	const offcanvas = document.getElementById('offcanvas');
	if (offcanvas) setToggle(offcanvas, '');
	const menu = document.getElementById('m');
	if (menu) setToggle(menu, '');
	document.querySelectorAll('[aria-controls="offcanvas"]').forEach((b) => b.setAttribute('aria-expanded', 'false'));
}

// One delegated listener handles every [data-c-toggle] link, including ones rendered later.
function useToggleDelegation() {
	useEffect(() => {
		function onClick(event) {
			const link = event.target.closest('[data-c-toggle]');
			if (!link || !link.hash) return;
			const target = document.querySelector(link.hash);
			if (!target) return;
			event.preventDefault();
			const name = link.getAttribute('data-c-toggle');
			const next = target.getAttribute('data-t') === name && !target.getAttribute('data-twice') ? '' : name;
			setToggle(target, next);
			if (link.hasAttribute('aria-controls')) link.setAttribute('aria-expanded', next ? 'true' : 'false');
		}
		function onKey(event) {
			if (event.key === 'Escape') closeOffcanvas();
		}
		document.addEventListener('click', onClick);
		document.addEventListener('keydown', onKey);
		return () => {
			document.removeEventListener('click', onClick);
			document.removeEventListener('keydown', onKey);
		};
	}, []);
}

export default function TemplateScripts() {
	const pathname = usePathname();
	useToggleDelegation();

	useEffect(() => {
		closeOffcanvas();
		let cancelled = false;
		let sliders = [];
		let tweens = [];
		let odometerCleanups = [];
		let libs;

		const frame = requestAnimationFrame(() => {
			loadLibs()
				.then((loaded) => {
					if (cancelled) return;
					libs = loaded;
					sliders = initSliders(libs);
					odometerCleanups = initOdometer(libs);
					tweens = initScrollReveal(libs);
					libs.ScrollTrigger.refresh();
					// Sliders change the page height when they start; ScrollToTop re-applies a
					// Back-button scroll position once this has happened.
					window.dispatchEvent(new Event('rixa:layout-ready'));
				})
				.catch((error) => console.error('Failed to load page animations', error));
		});

		return () => {
			cancelled = true;
			cancelAnimationFrame(frame);
			odometerCleanups.forEach((fn) => fn());
			tweens.forEach((t) => {
				t.scrollTrigger?.kill();
				t.kill();
			});
			sliders.forEach((s) => s.destroy?.());
		};
	}, [pathname]);

	return null;
}
