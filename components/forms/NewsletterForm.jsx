'use client';

import { useState } from 'react';
import AnimatedField, { FormStatus, Honeypot } from './AnimatedField';
import { formValues, useEnquiry } from '../../lib/useEnquiry';

export default function NewsletterForm() {
	const { status, message, fieldErrors, submit, submitting } = useEnquiry('newsletter');
	const [formKey, setFormKey] = useState(0);

	async function onSubmit(event) {
		event.preventDefault();
		const ok = await submit(formValues(event.currentTarget));
		if (ok) setFormKey((k) => k + 1);
	}

	return (
		<div className="">
			<form onSubmit={onSubmit} className="relative h-[100px] flex items-center gap-[10px]">
				<Honeypot />
				<div key={formKey} className="flex-1">
					<AnimatedField
						label="Enter your email"
						name="email"
						type="email"
						required
						autoComplete="email"
						maxLength={254}
						fill="bg-white"
						topLayer="grey"
						height={30}
						plainLayerClassName="border-l-[1px] border-[#D4D4D4] border-opacity-50"
						error={fieldErrors.email}
					/>
				</div>
				<button type="submit" disabled={submitting} aria-label="Subscribe to newsletter" className="disabled:opacity-50 disabled:cursor-wait">
					<img className="brightness-0" src="/images/home/newsletter.svg" alt="" />
				</button>
			</form>
			<FormStatus status={status} message={message} />
		</div>
	);
}
