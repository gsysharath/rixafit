'use client';

import { useMemo, useState } from 'react';
import { bmiCategoryLabel, calculateBmiMetrics, toKg, toMeters } from '../lib/bmi.mjs';

const inputClass = 'w-full h-[46px] px-[14px] bg-[#971A1E] bg-opacity-10 border-b-[2px] border-[#E22C32] text-white placeholder:text-[#E7E7E7]/50 focus:outline-none focus:bg-[#971A1E]/20';
const selectClass = `${inputClass} appearance-none`;

function SwipeButton({ children, type = 'button', onClick }) {
	return (
		<button type={type} onClick={onClick} className="group relative w-full overflow-hidden">
			<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></span>
			<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></span>
			<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></span>
			<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></span>
			<span className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></span>
			<span className="relative h-[54px] flex justify-center items-center">
				<span className="relative font-teko font-medium text-[22px] uppercase">
					<span className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
						{children}
					</span>
					<span className="block group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
						{children}
					</span>
				</span>
			</span>
		</button>
	);
}

function Field({ label, hint, children }) {
	return (
		<label className="block">
			<span className="mb-[10px] flex items-center justify-between gap-[10px]">
				<span>{label}</span>
				{hint && <span className="text-[12px] text-[#E7E7E7]/70">{hint}</span>}
			</span>
			{children}
		</label>
	);
}

const categoryTone = {
	Underweight: 'text-[#D4D4D4]',
	'Healthy weight': 'text-[#76E4A6]',
	Overweight: 'text-[#F6C945]',
	'Obesity range': 'text-[#E22C32]',
};

function getCategory(bmi) {
	const label = bmiCategoryLabel(bmi);
	return { label, tone: categoryTone[label] };
}

export default function BmiCalculator() {
	const [heightUnit, setHeightUnit] = useState('cm');
	const [weightUnit, setWeightUnit] = useState('kg');
	const [height, setHeight] = useState('');
	const [feet, setFeet] = useState('');
	const [inches, setInches] = useState('');
	const [weight, setWeight] = useState('');
	const [age, setAge] = useState('');
	const [gender, setGender] = useState('');
	const [goal, setGoal] = useState('Weight management');
	const [result, setResult] = useState(null);
	const [error, setError] = useState('');

	const preview = useMemo(() => {
		if (!result) return null;
		const category = getCategory(result.bmi);
		return { ...result, category };
	}, [result]);

	function calculate(event) {
		event.preventDefault();
		const meters = toMeters({ heightUnit, height, feet, inches });
		const kg = toKg(weightUnit, weight);
		const numericAge = Number(age);

		if (!Number.isFinite(meters) || meters <= 0 || !Number.isFinite(kg) || kg <= 0) {
			setResult(null);
			setError('Enter a valid height and weight to calculate your BMI.');
			return;
		}

		if (heightUnit === 'cm' && (Number(height) < 50 || Number(height) > 250)) {
			setResult(null);
			setError('Height in centimeters should be between 50 and 250.');
			return;
		}

		if (heightUnit === 'm' && (Number(height) < 0.5 || Number(height) > 2.5)) {
			setResult(null);
			setError('Height in meters should be between 0.5 and 2.5.');
			return;
		}

		if (heightUnit === 'ft' && (Number(feet) < 1 || Number(feet) > 8 || Number(inches || 0) < 0 || Number(inches || 0) >= 12)) {
			setResult(null);
			setError('Enter feet from 1 to 8 and inches from 0 to 11.');
			return;
		}

		if (numericAge && (numericAge < 2 || numericAge > 120)) {
			setResult(null);
			setError('Age should be between 2 and 120.');
			return;
		}

		setError('');
		setResult(calculateBmiMetrics({ heightUnit, height, feet, inches, weightUnit, weight }));
	}

	function reset() {
		setHeight('');
		setFeet('');
		setInches('');
		setWeight('');
		setAge('');
		setGender('');
		setGoal('Weight management');
		setResult(null);
		setError('');
	}

	return (
		<div className="py-[80px] xl:py-[120px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="xl:grid grid-cols-2 gap-[50px] items-start">
					<div>
						<form onSubmit={calculate} className="grid grid-cols-1 gap-[26px]">
							<div className="grid md:grid-cols-[1fr_160px] gap-[16px]">
								{heightUnit === 'ft' ? (
									<div className="grid grid-cols-2 gap-[16px]">
										<Field label="Height" hint="feet">
											<input className={inputClass} type="number" min="1" max="8" step="1" value={feet} onChange={(e) => setFeet(e.target.value)} placeholder="5" />
										</Field>
										<Field label="&nbsp;" hint="inches">
											<input className={inputClass} type="number" min="0" max="11" step="0.1" value={inches} onChange={(e) => setInches(e.target.value)} placeholder="8" />
										</Field>
									</div>
								) : (
									<Field label="Your Height*" hint={heightUnit === 'cm' ? 'ex: 169' : 'ex: 1.69'}>
										<input className={inputClass} type="number" min="0" step="0.01" value={height} onChange={(e) => setHeight(e.target.value)} placeholder={heightUnit === 'cm' ? 'Height in cm' : 'Height in meters'} />
									</Field>
								)}
								<Field label="Unit">
									<select className={selectClass} value={heightUnit} onChange={(e) => setHeightUnit(e.target.value)}>
										<option className="text-[#01010F]" value="cm">Centimeters</option>
										<option className="text-[#01010F]" value="m">Meters</option>
										<option className="text-[#01010F]" value="ft">Feet/Inches</option>
									</select>
								</Field>
							</div>

							<div className="grid md:grid-cols-[1fr_160px] gap-[16px]">
								<Field label="Your Weight*" hint={weightUnit === 'kg' ? 'ex: 72' : 'ex: 158'}>
									<input className={inputClass} type="number" min="0" step="0.1" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder={weightUnit === 'kg' ? 'Weight in kg' : 'Weight in lb'} />
								</Field>
								<Field label="Unit">
									<select className={selectClass} value={weightUnit} onChange={(e) => setWeightUnit(e.target.value)}>
										<option className="text-[#01010F]" value="kg">Kilograms</option>
										<option className="text-[#01010F]" value="lb">Pounds</option>
									</select>
								</Field>
							</div>

							<div className="grid md:grid-cols-3 gap-[16px]">
								<Field label="Your Age" hint="optional">
									<input className={inputClass} type="number" min="2" max="120" step="1" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
								</Field>
								<Field label="Gender" hint="optional">
									<select className={selectClass} value={gender} onChange={(e) => setGender(e.target.value)}>
										<option className="text-[#01010F]" value="">Select</option>
										<option className="text-[#01010F]" value="Female">Female</option>
										<option className="text-[#01010F]" value="Male">Male</option>
										<option className="text-[#01010F]" value="Other">Other</option>
									</select>
								</Field>
								<Field label="I Want">
									<select className={selectClass} value={goal} onChange={(e) => setGoal(e.target.value)}>
										<option className="text-[#01010F]" value="Weight management">Weight management</option>
										<option className="text-[#01010F]" value="Weight loss">Weight loss</option>
										<option className="text-[#01010F]" value="Muscle gain">Muscle gain</option>
										<option className="text-[#01010F]" value="General fitness">General fitness</option>
									</select>
								</Field>
							</div>

							<div className="grid sm:grid-cols-[1fr_150px] gap-[16px]">
								<SwipeButton type="submit">Calculate</SwipeButton>
								<button type="button" onClick={reset} className="h-[54px] border border-[#E22C32] font-teko text-[22px] uppercase hover:bg-[#971A1E]/10 transition-colors duration-[.3s]">
									Reset
								</button>
							</div>

							{error && <div className="border border-[#E22C32] bg-[#971A1E]/10 p-[18px] text-[#E22C32]">{error}</div>}
						</form>
					</div>

					<div className="mt-[50px] xl:mt-0">
						<div className="border-[10px] border-[#E22C32] bg-[#D4D4D4] text-[#01010F] p-[28px] md:p-[46px]">
							<div className="font-teko text-[38px] md:text-[52px] font-semibold uppercase leading-[1]">Your BMI Result</div>
							{preview ? (
								<div className="pt-[26px]">
									<div className="font-teko text-[92px] md:text-[130px] font-semibold leading-[.85]">{preview.bmi}</div>
									<div className={`font-teko text-[34px] font-semibold uppercase ${preview.category.tone}`}>{preview.category.label}</div>
									<div className="mt-[22px] grid gap-[10px]">
										<div>Healthy weight range for your height: {preview.minHealthyWeight}kg - {preview.maxHealthyWeight}kg.</div>
										<div>Current weight used: {preview.kg}kg.</div>
										<div>Goal selected: {goal}{gender ? `, ${gender}` : ''}{age ? `, age ${age}` : ''}.</div>
									</div>
								</div>
							) : (
								<div className="pt-[26px] text-[20px]">
									Enter your height and weight, then calculate to see your BMI category and healthy weight range.
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
