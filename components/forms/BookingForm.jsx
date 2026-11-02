'use client';

import { useState } from 'react';
import AnimatedField, { FormStatus, Honeypot } from './AnimatedField';
import { formValues, useEnquiry } from '../../lib/useEnquiry';
import { classes } from '../../data/classes';
import { trainers } from '../../data/trainers';

const classOptions = classes.map((c) => c.name);
const trainerOptions = ['Any available trainer', ...trainers.map((t) => `${t.name} - ${t.role}`)];

export default function BookingForm({ defaultClass = '' }) {
	const { status, message, fieldErrors, submit, submitting } = useEnquiry('booking');
	const [formKey, setFormKey] = useState(0);

	async function onSubmit(event) {
		event.preventDefault();
		const ok = await submit(formValues(event.currentTarget));
		if (ok) setFormKey((k) => k + 1);
	}

	return (
		<form id="book" onSubmit={onSubmit} className="relative scroll-mt-[120px]">
			<Honeypot />
			<div className="border-[10px] border-[#E22C32] bg-[#D4D4D4] text-[#01010F] p-[30px]">
				<div className="text-center pb-[30px]">
					<div className="font-teko font-semibold text-[36px]">BOOK A CLASS</div>
				</div>
				<div key={formKey} className="grid grid-cols-1 gap-[30px]">
					<AnimatedField label="Full Name" name="name" icon="fa fa-user" fill="bg-white" required autoComplete="name" maxLength={80} error={fieldErrors.name} />
					<AnimatedField label="Email Address" name="email" type="email" icon="fa fa-envelope" fill="bg-white" required autoComplete="email" maxLength={254} error={fieldErrors.email} />
					<AnimatedField label="Phone" name="phone" type="tel" icon="fa fa-phone" fill="bg-white" required autoComplete="tel" inputMode="tel" maxLength={20} error={fieldErrors.phone} />
					<AnimatedField label="Services" name="service" as="select" options={classOptions} placeholderOption="Choose a class" defaultValue={defaultClass} icon="fa fa-folder" fill="bg-white" required error={fieldErrors.service} />
					<AnimatedField label="Instructor" name="instructor" as="select" options={trainerOptions} placeholderOption="Choose a trainer" icon="fa fa-cog" fill="bg-white" error={fieldErrors.instructor} />
					<AnimatedField label="Day" name="day" type="date" icon="fa fa-calendar" fill="bg-white" required error={fieldErrors.day} />
				</div>
				<FormStatus status={status} message={message} className="mt-[30px]" />
			</div>
			<div className="flex flex-col items-center">
				<div className="p-[50px] border-l-[1px] border-r-[1px] border-[#E22C32]"></div>
				<button type="submit" disabled={submitting} className="group relative disabled:opacity-70 disabled:cursor-wait">
					<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-10 border-[1px] border-[#E22C32] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></span>
					<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></span>
					<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></span>
					<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></span>
					<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></span>
					<span className="relative h-[54px] w-[160px] flex justify-center items-center">
						<span className="relative font-teko font-semibold">
							<span className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
								<span className="flex items-center gap-[10px]">
									<span className="">{submitting ? 'BOOKING...' : 'JOIN CLASS'}</span>
									<span className="">
										<img className="" src="/images/home/hero-arrow.svg" alt="" />
									</span>
								</span>
							</span>
							<span className="block group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]">
								<span className="flex items-center gap-[10px]">
									<span className="">{submitting ? 'BOOKING...' : 'JOIN CLASS'}</span>
									<span className="">
										<img className="" src="/images/home/hero-arrow.svg" alt="" />
									</span>
								</span>
							</span>
						</span>
					</span>
				</button>
			</div>
		</form>
	);
}
