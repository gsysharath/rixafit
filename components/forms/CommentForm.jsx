'use client';

import { useState } from 'react';
import AnimatedField, { FormStatus, Honeypot } from './AnimatedField';
import { formValues, useEnquiry } from '../../lib/useEnquiry';

const fieldProps = { line: 'grey', errorTone: 'light' };

export default function CommentForm({ postTitle = '' }) {
	const { status, message, fieldErrors, submit, submitting } = useEnquiry('comment');
	const [formKey, setFormKey] = useState(0);

	async function onSubmit(event) {
		event.preventDefault();
		const ok = await submit({ ...formValues(event.currentTarget), post: postTitle });
		if (ok) setFormKey((k) => k + 1);
	}

	return (
		<form key={formKey} onSubmit={onSubmit} className="relative grid grid-cols-1 md:grid-cols-2 gap-[50px]">
			<Honeypot />
			<AnimatedField {...fieldProps} label="First Name*" name="firstName" required autoComplete="given-name" maxLength={60} hint='ex: Characters in the range "A" to "Z"' error={fieldErrors.firstName} />
			<AnimatedField {...fieldProps} label="Last Name*" name="lastName" required autoComplete="family-name" maxLength={60} hint='ex: Characters in the range "a" to "z"' error={fieldErrors.lastName} />
			<AnimatedField {...fieldProps} label="Your Phone*" name="phone" type="tel" required autoComplete="tel" inputMode="tel" maxLength={20} hint="ex: 98765 43210, only numbers" error={fieldErrors.phone} />
			<AnimatedField {...fieldProps} label="Your Email*" name="email" type="email" required autoComplete="email" maxLength={254} hint="ex: Required, but never shown" error={fieldErrors.email} />
			<div className="md:col-span-2 xl:col-span-2">
				<AnimatedField {...fieldProps} label="Your Comment*" name="comment" as="textarea" required maxLength={2000} hint="ex: To learn more, see our tips on writing great answers." error={fieldErrors.comment} />
			</div>
			<div className="">
				<button type="submit" disabled={submitting} className="group relative w-full disabled:opacity-70 disabled:cursor-wait">
					<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></span>
					<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></span>
					<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></span>
					<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></span>
					<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></span>
					<span className="relative h-[50px] flex justify-center items-center">
						<span className="relative font-teko font-medium text-[20px]">
							<span className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
								<span className="flex items-center gap-[10px]">
									<span className="">{submitting ? 'POSTING...' : 'POST COMMENT'}</span>
									<span className="">
										<img className="" src="/images/home/hero-arrow.svg" alt="" />
									</span>
								</span>
							</span>
							<span className="block group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
								<span className="flex items-center gap-[10px]">
									<span className="">{submitting ? 'POSTING...' : 'POST COMMENT'}</span>
									<span className="">
										<img className="" src="/images/home/hero-arrow.svg" alt="" />
									</span>
								</span>
							</span>
						</span>
					</span>
				</button>
			</div>
			<FormStatus status={status} message={message} tone="light" className="self-center" />
		</form>
	);
}
