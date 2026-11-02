export function toMeters({ heightUnit, height, feet, inches }) {
	const numericHeight = Number(height);
	if (heightUnit === 'cm') return numericHeight / 100;
	if (heightUnit === 'm') return numericHeight;

	const numericFeet = Number(feet);
	const numericInches = Number(inches || 0);
	return ((numericFeet * 12) + numericInches) * 0.0254;
}

export function toKg(weightUnit, weight) {
	const numericWeight = Number(weight);
	return weightUnit === 'lb' ? numericWeight * 0.45359237 : numericWeight;
}

export function calculateBmiMetrics({ heightUnit, height, feet, inches, weightUnit, weight }) {
	const meters = toMeters({ heightUnit, height, feet, inches });
	const kg = toKg(weightUnit, weight);
	const bmi = kg / (meters * meters);
	const minHealthyWeight = 18.5 * meters * meters;
	const maxHealthyWeight = 24.9 * meters * meters;

	return {
		bmi: Number(bmi.toFixed(1)),
		kg: Number(kg.toFixed(1)),
		minHealthyWeight: Number(minHealthyWeight.toFixed(1)),
		maxHealthyWeight: Number(maxHealthyWeight.toFixed(1)),
	};
}

export function bmiCategoryLabel(bmi) {
	if (bmi < 18.5) return 'Underweight';
	if (bmi < 25) return 'Healthy weight';
	if (bmi < 30) return 'Overweight';
	return 'Obesity range';
}
