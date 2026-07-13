'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

function initScrollReveal() {
	if (!window.gsap || !window.ScrollTrigger) return;
	window.gsap.registerPlugin(window.ScrollTrigger);
	window.ScrollTrigger.getAll().forEach((t) => t.kill());

	document.querySelectorAll('[data-scroll]').forEach((el) => {
		const i = el.querySelectorAll(el.getAttribute('data-scroll'));
		const cog = el.querySelector('[data-scroll-cog=""]');
		if (!cog) return;
		const c = JSON.parse(cog.innerHTML);
		c.scrollTrigger.onUpdate = (o) => {
			o.trigger.classList[o.isActive ? 'add' : 'remove']('c-active');
			o.trigger.dispatchEvent(new CustomEvent('gsap-' + o.trigger.getAttribute('data-scroll-item'), { detail: o }));
		};
		c.scrollTrigger.trigger = i;
		window.gsap.to(i, c);
	});
}

function initOdometer() {
	if (!window.Odometer) return;
	document.querySelectorAll('[data-scroll-item="odometer"]').forEach((el) => {
		if (el.dataset.odometerBound) return;
		el.dataset.odometerBound = '1';
		el.addEventListener('gsap-odometer', (o) => {
			o.target.querySelectorAll('.odometer').forEach((eo) => {
				eo.innerHTML = o.detail.isActive ? eo.getAttribute('data-v') : 0;
			});
		});
	});
}

function initToggle() {
	document.querySelectorAll('[data-c-toggle]').forEach((el) => {
		if (el.dataset.toggleBound) return;
		el.dataset.toggleBound = '1';
		el.addEventListener('click', function (e) {
			e.preventDefault();
			const t = document.querySelector(this.hash);
			const n = this.getAttribute('data-c-toggle');
			if (!t) return false;
			t.setAttribute('data-t', t.getAttribute('data-t') === n && !t.getAttribute('data-twice') ? '' : n);
			return false;
		});
	});
}

function initSliders() {
	if (!window.tns) return;
	document.querySelectorAll('[data-slider]').forEach((el) => {
		if (el.dataset.tnsInited) return;
		el.dataset.tnsInited = '1';
		const cog = el.querySelector('[data-slider-cog]');
		if (!cog) return;
		const c = JSON.parse(cog.innerHTML);
		const r = window.tns(c);
		if (c.onIndexChanged) {
			r.events.on('indexChanged', (f) => {
				const a = 'tns-slide-index';
				for (let i = 0; i < f.slideCountNew; i++) f.slideItems[i].classList.remove(a);
				f.slideItems[f.index].classList.add(a);
			});
		}
	});
}

function closeOffcanvas() {
	const offcanvas = document.getElementById('offcanvas');
	if (offcanvas) offcanvas.setAttribute('data-t', '');
	const m = document.getElementById('m');
	if (m) m.setAttribute('data-t', '');
}

export default function TemplateScripts() {
	const pathname = usePathname();
	const firstRun = useRef(true);

	useEffect(() => {
		if (!firstRun.current) closeOffcanvas();
		firstRun.current = false;

		const id = requestAnimationFrame(() => {
			initToggle();
			initSliders();
			initOdometer();
			initScrollReveal();
		});
		return () => cancelAnimationFrame(id);
	}, [pathname]);

	return null;
}
