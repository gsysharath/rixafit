'use client';

import { useState } from 'react';
import AnimatedField, { FormStatus, Honeypot } from './AnimatedField';
import { formValues, useEnquiry } from '../../lib/useEnquiry';
import { useQueryParam } from '../../lib/useClientValue';
import { services } from '../../data/services';
import { site, whatsappLink } from '../../data/site';
import { trackEvent } from '../GoogleAnalytics';

const ROW = 'h-[90px] flex items-center gap-[10px]';
const INTEREST_OPTIONS = ['Membership plans', ...services.map((s) => s.name), 'Something else'];
const CALL_TIME_OPTIONS = ['Morning (5 - 11 AM)', 'Evening (5 - 10 PM)', 'Anytime'];

export default function ContactForm() {
	const { status, message, fieldErrors, submit, submitting } = useEnquiry('contact');
	const plan = useQueryParam('plan').slice(0, 80);
	const [formKey, setFormKey] = useState(0);

	async function onSubmit(event) {
		event.preventDefault();
		const values = formValues(event.currentTarget);
		const ok = await submit({ ...values, plan });
		if (ok) {
			trackEvent('generate_lead', { form: 'contact', interest: values.interest || '', plan });
			setFormKey((k) => k + 1);
		}
	}

	const defaultMessage = plan ? `Hi, I'm interested in the ${plan}. Please share the details.` : '';
	// Membership "Choose plan" buttons send e.g. "FIT 30 membership - 1 Month, ₹3,500".
	const defaultInterest = /membership/i.test(plan) ? 'Membership plans' : '';

	return (
		<form id="enquiry" onSubmit={onSubmit} noValidate={false} className="relative scroll-mt-[120px]">
			<Honeypot />
			{/* The red timing boxes beside the form are desktop-only; phones see timings in the cards above. */}
			<div className="xl:grid grid-cols-3">
				<div className="relative hidden xl:flex items-center">
					<div className="hidden xl:block absolute top-0 right-0 bottom-0 w-1/2 border-[1px] border-[#E22C32] rounded-bl-full rounded-tl-full"></div>
					<div className="hidden xl:block absolute top-0 right-0 bottom-0 m-auto h-3/4 w-1/2 border-[1px] border-[#E22C32] rounded-bl-full rounded-tl-full"></div>
					<div className="hidden xl:block absolute top-0 right-0 bottom-0 m-auto h-2/4 w-1/2 border-[1px] border-[#E22C32] rounded-bl-full rounded-tl-full"></div>
					<div className="relative bg-[#971A1E] py-[10px] px-[30px]">
						<div className="">{site.hours.weekdays.label}</div>
						<div className="my-[10px] border-t-[2px] border-[#01010F]"></div>
						<div className="">{site.hours.weekdays.value}</div>
					</div>
					<div className="hidden xl:block flex-1 border-t-[1px] border-[#E22C32]"></div>
					<div className="hidden xl:block flex-1 border-t-[3px] border-[#E22C32]"></div>
					<div className="hidden xl:block flex-1 border-t-[4px] border-[#E22C32]"></div>
					<div className="hidden xl:block flex-1 border-t-[7px] border-[#E22C32]"></div>
					<div className="hidden xl:block flex-1 border-t-[10px] border-[#E22C32]"></div>
				</div>
				<div className="border-[10px] border-[#E22C32] bg-[#D4D4D4] text-[#01010F] p-[30px] md:p-[50px]">
					<div className="text-center pb-[10px]">
						<div className="font-teko font-semibold text-[30px] md:text-[36px] uppercase">How can we help?</div>
						{plan && (
							<div className="text-[16px]">
								Enquiry for: <span className="font-semibold">{plan}</span>
							</div>
						)}
					</div>
					<div className="text-center text-[14px]">Only your name and phone number are required.</div>
					<div key={`${formKey}-${plan}`}>
						<AnimatedField rowClassName={ROW} label="Your name*" name="name" icon="fa fa-user" required autoComplete="name" maxLength={80} error={fieldErrors.name} />
						<AnimatedField rowClassName={ROW} label="Phone number*" name="phone" type="tel" icon="fa fa-phone" required autoComplete="tel" inputMode="tel" maxLength={20} error={fieldErrors.phone} />
						<AnimatedField rowClassName={ROW} label="Email (optional)" name="email" type="email" icon="fa fa-envelope" autoComplete="email" maxLength={254} error={fieldErrors.email} />
						<AnimatedField rowClassName={ROW} label="Interested in" name="interest" as="select" options={INTEREST_OPTIONS} placeholderOption="Choose one" icon="fa fa-dumbbell" defaultValue={defaultInterest} error={fieldErrors.interest} />
						<AnimatedField rowClassName={ROW} label="Best time to call" name="callTime" as="select" options={CALL_TIME_OPTIONS} placeholderOption="Choose one" icon="fa fa-clock" error={fieldErrors.callTime} />
						<AnimatedField rowClassName={ROW} label="Message (optional)" name="message" as="textarea" icon="fa fa-pen" maxLength={2000} defaultValue={defaultMessage} error={fieldErrors.message} />
					</div>
					<FormStatus status={status} message={message} className="mt-[20px]" />
					{status === 'success' && (
						<a
							className="mt-[15px] inline-flex items-center gap-[8px] font-teko text-[20px] uppercase bg-[#25D366] text-white px-[20px] py-[6px] hover:opacity-90"
							href={whatsappLink(`Hi ${site.name}, I just sent an enquiry on your website.`)}
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fa-brands fa-whatsapp text-[18px]" aria-hidden="true"></i>Faster reply on WhatsApp
						</a>
					)}
				</div>
				<div className="relative hidden xl:flex items-center">
					<div className="hidden xl:block absolute top-0 left-0 bottom-0 w-1/2 border-[1px] border-[#E22C32] rounded-br-full rounded-tr-full"></div>
					<div className="hidden xl:block absolute top-0 left-0 bottom-0 m-auto h-3/4 w-1/2 border-[1px] border-[#E22C32] rounded-br-full rounded-tr-full"></div>
					<div className="hidden xl:block absolute top-0 left-0 bottom-0 m-auto h-2/4 w-1/2 border-[1px] border-[#E22C32] rounded-br-full rounded-tr-full"></div>
					<div className="hidden xl:block flex-1 border-t-[10px] border-[#E22C32]"></div>
					<div className="hidden xl:block flex-1 border-t-[7px] border-[#E22C32]"></div>
					<div className="hidden xl:block flex-1 border-t-[4px] border-[#E22C32]"></div>
					<div className="hidden xl:block flex-1 border-t-[3px] border-[#E22C32]"></div>
					<div className="hidden xl:block flex-1 border-t-[1px] border-[#E22C32]"></div>
					<div className="relative bg-[#971A1E] py-[10px] px-[30px]">
						<div className="">{site.hours.sunday.label}</div>
						<div className="my-[10px] border-t-[2px] border-[#01010F]"></div>
						<div className="">{site.hours.sunday.value}</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center">
				<div className="p-[50px] border-r-[1px] border-l-[1px] border-[#E22C32]"></div>
				<button type="submit" disabled={submitting} className="group relative disabled:opacity-70 disabled:cursor-wait">
					<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-10 border-[1px] border-[#E22C32] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></span>
					<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></span>
					<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></span>
					<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></span>
					<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></span>
					<span className="relative h-[54px] w-[175px] flex justify-center items-center text-[12px] leading-[1]">
						<span className="relative font-teko font-semibold text-[20px]">
							<span className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
								<span className="flex items-center gap-[10px]">
									<span className="">{submitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
									<span className="">
										<img className="" src="/images/home/hero-arrow.svg" alt="" />
									</span>
								</span>
							</span>
							<span className="block group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
								<span className="flex items-center gap-[10px]">
									<span className="">{submitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
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
