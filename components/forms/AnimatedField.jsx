'use client';

import { useId, useState } from 'react';
import { useClientValue } from '../../lib/useClientValue';

// The template's "swipe" form field: a dotted line that animates into a coloured input.
// Unlike the original markup (hover only), the input also stays open while focused or
// filled, so typed values stay visible and the form works with keyboard and touch.
// Tailwind needs literal class names, so every variant below is spelled out in full.

const LAYER_BASE = 'absolute top-0 right-0 bottom-0 left-0 transition-all duration-[.3s]';
const PLAIN_LAYER = 'group-hover/c:scale-y-0 group-focus-within/c:scale-y-0 group-data-[filled]/c:scale-y-0 group-hover/c:delay-0 group-focus-within/c:delay-0 group-data-[filled]/c:delay-0 delay-[.4s]';
const LAYERS = [
	'bg-[#D4D4D4] group-[:not(:hover):not(:focus-within):not([data-filled])]/c:scale-y-0 group-[:not(:hover):not(:focus-within):not([data-filled])]/c:delay-[.4s] delay-0',
	'bg-[#971A1E] group-[:not(:hover):not(:focus-within):not([data-filled])]/c:scale-y-0 group-[:not(:hover):not(:focus-within):not([data-filled])]/c:delay-[.3s] delay-[.1s]',
	'bg-[#01010F] group-[:not(:hover):not(:focus-within):not([data-filled])]/c:scale-y-0 group-[:not(:hover):not(:focus-within):not([data-filled])]/c:delay-[.2s] delay-[.2s]',
];
const TOP_LAYER = {
	red: 'bg-[#971A1E] group-[:not(:hover):not(:focus-within):not([data-filled])]/c:scale-y-0 group-[:not(:hover):not(:focus-within):not([data-filled])]/c:delay-[.1s] delay-[.3s]',
	grey: 'bg-[#D4D4D4] group-[:not(:hover):not(:focus-within):not([data-filled])]/c:scale-y-0 group-[:not(:hover):not(:focus-within):not([data-filled])]/c:delay-[.1s] delay-[.3s]',
};
const CONTROL_WRAP = 'absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover):not(:focus-within):not([data-filled])]/c:scale-y-0 group-[:not(:hover):not(:focus-within):not([data-filled])]/c:delay-0 delay-[.4s] transition-all duration-[.3s]';
const CONTROL_IDLE = 'group-[:not(:hover):not(:focus-within):not([data-filled])]/c:bg-transparent';
const LINE_WRAP = 'block group-hover/c:scale-y-0 group-focus-within/c:scale-y-0 group-data-[filled]/c:scale-y-0 group-hover/c:delay-0 group-focus-within/c:delay-0 group-data-[filled]/c:delay-0 delay-[.4s] transition-all duration-[.3s]';
const HEIGHT = { 27: 'h-[27px]', 30: 'h-[30px]' };
const LINE = {
	dotted: 'flex-1 border-t-[2px] border-dotted border-[#01010F]',
	solid: 'flex-1 border-b-[2px] border-current',
	grey: 'flex-1 border-b-[2px] border-[#D4D4D4] border-opacity-50',
};
const ERROR_TONE = {
	dark: 'text-[#8B0000]',
	light: 'text-[#FF8A80]',
};

function todayIso() {
	const now = new Date();
	const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
	return local.toISOString().slice(0, 10);
}

export default function AnimatedField({
	label,
	name,
	type = 'text',
	as = 'input',
	options = [],
	placeholderOption = 'Select an option',
	icon,
	hint,
	error,
	required = false,
	defaultValue = '',
	fill = 'bg-[#971A1E]',
	topLayer = 'red',
	line = 'dotted',
	height = 27,
	rowClassName = 'flex items-center gap-[10px]',
	plainLayerClassName = '',
	errorTone = 'dark',
	...rest
}) {
	const id = useId();
	const errorId = `${id}-error`;
	const [filled, setFilled] = useState(Boolean(defaultValue));
	const today = useClientValue(todayIso, undefined);
	const minDate = type === 'date' ? today : undefined;

	const heightClass = HEIGHT[height] || HEIGHT[27];
	// White text on the brand-red fill; dark text on light fills.
	const controlText = fill === 'bg-[#971A1E]' ? 'text-white caret-white' : 'text-[#01010F]';
	const controlClass = `w-full ${heightClass} px-[10px] ${fill} ${CONTROL_IDLE} ${controlText} focus:outline-none`;
	const onInput = (e) => setFilled(Boolean(e.target.value));
	const shared = {
		id,
		name,
		required,
		defaultValue,
		onInput,
		onChange: onInput,
		'aria-invalid': error ? true : undefined,
		'aria-describedby': error ? errorId : undefined,
		...rest,
	};

	let control;
	if (as === 'select') {
		control = (
			<select {...shared} className={`${controlClass} appearance-none cursor-pointer`}>
				<option value="">{placeholderOption}</option>
				{options.map((o) => {
					const opt = typeof o === 'string' ? { value: o, label: o } : o;
					return <option key={opt.value} value={opt.value}>{opt.label}</option>;
				})}
			</select>
		);
	} else if (as === 'textarea') {
		control = <textarea {...shared} rows={1} className={`${controlClass} resize-none leading-[27px] py-0`}></textarea>;
	} else {
		control = <input {...shared} type={type} min={type === 'date' ? minDate : rest.min} className={controlClass} />;
	}

	return (
		<div className="">
			<div className={rowClassName}>
				<label htmlFor={id} className="cursor-pointer">{label}</label>
				<div className="flex-1 relative">
					<label htmlFor={id} data-filled={filled ? '' : undefined} className="group/c relative block cursor-text">
						<span className={`${LAYER_BASE} ${PLAIN_LAYER} ${plainLayerClassName}`}></span>
						{LAYERS.map((cls) => <span key={cls} className={`${LAYER_BASE} ${cls}`}></span>)}
						<span className={`${LAYER_BASE} ${TOP_LAYER[topLayer] || TOP_LAYER.red}`}></span>
						<span className="relative block">
							<span className={CONTROL_WRAP}>{control}</span>
							<span className={LINE_WRAP}>
								<span className={`relative ${heightClass} flex items-center`}>
									<span className={LINE[line] || LINE.dotted}></span>
								</span>
							</span>
						</span>
					</label>
					{error && (
						<span id={errorId} role="alert" className={`absolute left-0 top-full pt-[2px] text-[12px] leading-[1.2] ${ERROR_TONE[errorTone]}`}>{error}</span>
					)}
				</div>
				{icon && (
					<div className="" aria-hidden="true">
						<i className={icon}></i>
					</div>
				)}
			</div>
			{hint && <div className="pt-[10px] text-[12px] text-right">{hint}</div>}
		</div>
	);
}

export function Honeypot() {
	return (
		<div aria-hidden="true" className="absolute left-[-10000px] top-auto w-[1px] h-[1px] overflow-hidden">
			<label>
				Company
				<input type="text" name="company" tabIndex={-1} autoComplete="off" defaultValue="" />
			</label>
		</div>
	);
}

export function FormStatus({ status, message, tone = 'dark', className = '' }) {
	if (!message) return null;
	const color = status === 'success'
		? (tone === 'dark' ? 'text-[#01010F] border-[#01010F]' : 'text-[#D4D4D4] border-[#D4D4D4]')
		: (tone === 'dark' ? 'text-[#8B0000] border-[#8B0000]' : 'text-[#FF8A80] border-[#FF8A80]');
	return (
		<div role={status === 'success' ? 'status' : 'alert'} aria-live="polite" className={`border-l-[3px] pl-[12px] py-[6px] text-[16px] ${color} ${className}`}>
			{status === 'success' && <i className="fa fa-circle-check mr-[8px]" aria-hidden="true"></i>}
			{status === 'error' && <i className="fa fa-circle-exclamation mr-[8px]" aria-hidden="true"></i>}
			{message}
		</div>
	);
}
