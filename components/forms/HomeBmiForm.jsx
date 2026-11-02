'use client';

import { useState } from 'react';
import AnimatedField from './AnimatedField';
import { formValues } from '../../lib/useEnquiry';
import { bmiCategoryLabel, calculateBmiMetrics } from '../../lib/bmi.mjs';

const fieldProps = { fill: 'bg-[#D4D4D4]', topLayer: 'grey', line: 'solid' };
const goals = ['Weight Loss', 'Muscle Gain', 'Stay Fit', 'Improve Stamina', 'Body Toning'];

export default function HomeBmiForm() {
	const [result, setResult] = useState(null);
	const [errors, setErrors] = useState({});

	function onSubmit(event) {
		event.preventDefault();
		const values = formValues(event.currentTarget);
		const height = Number(values.height);
		const weight = Number(values.weight);
		const age = Number(values.age);
		const nextErrors = {};

		if (!(height >= 50 && height <= 250)) nextErrors.height = 'Enter height in cm (50 - 250).';
		if (!(weight >= 20 && weight <= 300)) nextErrors.weight = 'Enter weight in kg (20 - 300).';
		if (!(age >= 2 && age <= 120)) nextErrors.age = 'Enter an age between 2 and 120.';
		if (!values.gender) nextErrors.gender = 'Select your gender.';

		setErrors(nextErrors);
		if (Object.keys(nextErrors).length) {
			setResult(null);
			return;
		}

		const metrics = calculateBmiMetrics({ heightUnit: 'cm', height, weightUnit: 'kg', weight });
		setResult({ ...metrics, category: bmiCategoryLabel(metrics.bmi), goal: values.goal });
	}

	const contactHref = result
		? `/contact?plan=${encodeURIComponent(`${result.goal || 'Fitness'} programme (BMI ${result.bmi})`)}#enquiry`
		: '/contact#enquiry';

	return (
		<>
			<form onSubmit={onSubmit} noValidate className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[50px]">
				<AnimatedField {...fieldProps} label="Your Height*" name="height" type="number" inputMode="decimal" min="50" max="250" step="0.1" required hint="in cm, ex: 154, 165, 172 ... only number" error={errors.height} />
				<AnimatedField {...fieldProps} label="Your Weight*" name="weight" type="number" inputMode="decimal" min="20" max="300" step="0.1" required hint="in kg, ex: 52, 68, 81 ... only number" error={errors.weight} />
				<AnimatedField {...fieldProps} label="Your Age*" name="age" type="number" inputMode="numeric" min="2" max="120" step="1" required hint="ex: 18, 38, 48, ... only number" error={errors.age} />
				<AnimatedField {...fieldProps} label="Select Gender*" name="gender" as="select" options={['Female', 'Male', 'Other']} placeholderOption="Select" required hint="ex: Female, or Male" error={errors.gender} />
				<AnimatedField {...fieldProps} label="I Want" name="goal" as="select" options={goals} placeholderOption="Select a goal" hint="ex: I Want (Weight Loss)..." />
				<div className="">
					<button type="submit" className="group relative text-white w-full">
						<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></span>
						<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></span>
						<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></span>
						<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></span>
						<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></span>
						<span className="relative h-[50px] flex justify-center items-center">
							<span className="relative font-teko font-medium text-[20px]">
								<span className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
									<span className="flex items-center gap-[10px]">
										<span className="">CALCULATE</span>
										<span className="">
											<img className="" src="/images/home/hero-arrow.svg" alt="" />
										</span>
									</span>
								</span>
								<span className="block group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
									<span className="flex items-center gap-[10px]">
										<span className="">CALCULATE</span>
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
			<div aria-live="polite">
				{result && (
					<div className="mt-[50px] border-[10px] border-[#E22C32] bg-[#D4D4D4] text-[#01010F] p-[30px] md:flex items-center justify-between gap-[30px]">
						<div className="flex items-end gap-[20px]">
							<div className="font-teko font-semibold text-[80px] leading-[.85]">{result.bmi}</div>
							<div className="">
								<div className="font-teko font-semibold text-[30px] uppercase leading-[1]">{result.category}</div>
								<div className="text-[16px]">Your BMI (Body Mass Index)</div>
							</div>
						</div>
						<div className="pt-[20px] md:pt-0 text-[16px]">
							<div>Healthy weight range for your height: <strong>{result.minHealthyWeight} - {result.maxHealthyWeight} kg</strong></div>
							{result.goal && <div>Your goal: <strong>{result.goal}</strong></div>}
						</div>
						<a className="inline-block mt-[20px] md:mt-0 bg-[#01010F] text-white font-teko text-[20px] px-[25px] py-[10px] hover:bg-[#971A1E] transition-colors duration-[.3s]" href={contactHref}>
							TALK TO A TRAINER
						</a>
					</div>
				)}
			</div>
		</>
	);
}
