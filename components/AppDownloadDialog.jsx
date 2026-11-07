'use client';

import { useEffect, useRef, useState } from 'react';
import { site } from '../data/site';

// One dialog for the whole site. Any element with a `data-app-download` attribute opens it,
// so server-rendered pages can add a download button without becoming client components.
// The visitor picks iPhone or Android and is sent to the matching store.

function detectPlatform() {
	const ua = navigator.userAgent || '';
	if (/android/i.test(ua)) return 'android';
	// iPadOS reports itself as a Mac, so also check for a touch screen.
	if (/iphone|ipad|ipod/i.test(ua) || (/macintosh/i.test(ua) && navigator.maxTouchPoints > 1)) return 'ios';
	return null;
}

const stores = [
	{
		key: 'ios',
		href: site.app.ios,
		icon: 'fa-brands fa-apple',
		device: 'iPhone / iPad',
		store: 'App Store',
	},
	{
		key: 'android',
		href: site.app.android,
		icon: 'fa-brands fa-google-play',
		device: 'Android',
		store: 'Google Play',
	},
];

export default function AppDownloadDialog() {
	const dialogRef = useRef(null);
	const [platform, setPlatform] = useState(null);

	useEffect(() => {
		const onClick = (event) => {
			const trigger = event.target instanceof Element ? event.target.closest('[data-app-download]') : null;
			if (!trigger || !dialogRef.current) return;
			event.preventDefault();
			setPlatform(detectPlatform());
			if (!dialogRef.current.open) dialogRef.current.showModal();
		};
		document.addEventListener('click', onClick);
		return () => document.removeEventListener('click', onClick);
	}, []);

	const close = () => dialogRef.current?.close();

	return (
		<dialog
			ref={dialogRef}
			aria-labelledby="app-download-title"
			aria-describedby="app-download-desc"
			// A click on the dialog element itself (not its content) means the backdrop was clicked.
			onClick={(event) => {
				if (event.target === event.currentTarget) close();
			}}
			className="m-auto w-[calc(100%-32px)] max-w-[460px] p-0 bg-[#01010F] text-[#E7E7E7] border-[1px] border-[#E22C32] backdrop:bg-[#01010F]/80 backdrop:backdrop-blur-sm"
		>
			<div className="relative p-[30px] md:p-[40px]">
				<button
					type="button"
					onClick={close}
					aria-label="Close"
					className="absolute top-[10px] right-[10px] w-[40px] h-[40px] flex items-center justify-center text-[20px] hover:text-[#E22C32]"
				>
					<i className="fa-solid fa-xmark"></i>
				</button>
				<div className="flex items-center gap-[10px] pr-[40px]">
					<div className="flex-1 border-t-[1px] border-[#E22C32]"></div>
					<div className="flex-1 border-t-[4px] border-[#E22C32]"></div>
					<div className="flex-1 border-t-[10px] border-[#E22C32]"></div>
				</div>
				<h2 id="app-download-title" className="pt-[20px] font-teko font-semibold text-[36px] leading-[1] uppercase">
					Get the {site.name} app
				</h2>
				<p id="app-download-desc" className="pt-[10px] text-[16px]">
					Which phone do you use? Choose your device to download the app and access your workout and diet plans anytime.
				</p>
				<div className="pt-[30px] grid grid-cols-1 gap-[15px]">
					{stores.map((s) => {
						const detected = platform === s.key;
						return (
							<a
								key={s.key}
								href={s.href}
								target="_blank"
								rel="noopener noreferrer"
								onClick={close}
								className={`group flex items-center gap-[20px] px-[20px] py-[15px] border-[1px] transition-colors duration-[.3s] hover:bg-[#971A1E] hover:border-[#971A1E] ${detected ? 'border-[#E22C32] bg-[#971A1E]/20' : 'border-[#D4D4D4]/30'}`}
							>
								<i className={`${s.icon} text-[34px] w-[34px] text-center`}></i>
								<span className="flex-1">
									<span className="block text-[14px] text-[#D4D4D4] group-hover:text-white">{s.device}</span>
									<span className="block font-teko font-semibold text-[26px] leading-[1.1] uppercase">{s.store}</span>
								</span>
								{detected && <span className="text-[12px] uppercase tracking-wide text-[#E22C32] group-hover:text-white">Your device</span>}
								<i className="fa-solid fa-arrow-right text-[14px]"></i>
							</a>
						);
					})}
				</div>
			</div>
		</dialog>
	);
}
