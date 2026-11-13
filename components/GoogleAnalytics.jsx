'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { site } from '../data/site';

// Google Tag Manager (site.gtmId) and, optionally, Google Analytics 4 directly (NEXT_PUBLIC_GA_ID).
// Use one or the other for GA4: with Tag Manager, set GA4 up inside the container and leave
// NEXT_PUBLIC_GA_ID empty, otherwise visits are counted twice.
// Both load only on the live domain (site.liveHosts), so localhost and Vercel previews stay out
// of the reports.
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || site.gtmId || '';
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';
const LIVE_HOSTS = JSON.stringify(site.liveHosts);

// Records a key action. It is pushed to the dataLayer as { event: name, ...params }, which Tag
// Manager "Custom Event" triggers listen for, and sent to GA4 directly when NEXT_PUBLIC_GA_ID is set.
export function trackEvent(name, params = {}) {
	if (typeof window === 'undefined') return;
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({ event: name, ...params });
	if (GA_ID && typeof window.gtag === 'function') window.gtag('event', name, params);
}

// Which link clicks count as key actions, checked in order.
const CLICK_EVENTS = [
	[(href) => href.startsWith('tel:'), 'click_call'],
	[(href) => href.includes('wa.me/'), 'click_whatsapp'],
	[(href) => href === site.joinUrl, 'click_join_now'],
	[(href) => href === site.app.ios || href === site.app.android, 'click_app_store'],
	[(href) => href.startsWith(site.directionsUrl) || href.includes('google.com/maps'), 'click_directions'],
	[(href) => href.includes('instagram.com/'), 'click_instagram'],
];

export default function GoogleAnalytics() {
	useEffect(() => {
		if (!GTM_ID && !GA_ID) return undefined;
		const onClick = (event) => {
			const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
			if (!link) return;
			const href = link.getAttribute('href');
			const match = CLICK_EVENTS.find(([test]) => test(href));
			if (match) {
				trackEvent(match[1], {
					link_url: href.slice(0, 100),
					link_text: (link.textContent || link.getAttribute('aria-label') || '').trim().slice(0, 100),
					page_path: window.location.pathname,
				});
			}
		};
		// Capture phase, so the event is recorded before the browser leaves for WhatsApp, the dialler etc.
		document.addEventListener('click', onClick, true);
		return () => document.removeEventListener('click', onClick, true);
	}, []);

	return (
		<>
			{GTM_ID && (
				// Google's standard Tag Manager loader, wrapped in a live-domain check.
				<Script id="gtm-init" strategy="afterInteractive">
					{`(function(w,d,s,l,i){if(${LIVE_HOSTS}.indexOf(w.location.hostname)<0)return;w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
				</Script>
			)}
			{GA_ID && (
				<Script id="ga-init" strategy="afterInteractive">
					{`(function(w,d){if(${LIVE_HOSTS}.indexOf(w.location.hostname)<0)return;
w.dataLayer=w.dataLayer||[];w.gtag=function(){w.dataLayer.push(arguments);};
w.gtag('js',new Date());w.gtag('config','${GA_ID}');
var j=d.createElement('script');j.async=true;j.src='https://www.googletagmanager.com/gtag/js?id=${GA_ID}';d.head.appendChild(j);
})(window,document);`}
				</Script>
			)}
		</>
	);
}

// Tag Manager's fallback for visitors with JavaScript turned off; goes right after <body>.
export function GoogleTagManagerNoScript() {
	if (!GTM_ID) return null;
	return (
		<noscript>
			<iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} title="Google Tag Manager"></iframe>
		</noscript>
	);
}
