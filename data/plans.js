// Membership plans - source of truth: RIXA FIT "Membership Pricing List" poster.
// Prices are in INR. Edit here and the home page, /pricing, SEO data and enquiry forms update.

export const plans = [
	{ slug: 'fit-30', name: 'FIT 30', category: 'Individual', months: 1, price: 3500 },
	{ slug: 'fit-90', name: 'FIT 90', category: 'Individual', months: 3, price: 6999 },
	{ slug: 'fit-180', name: 'FIT 180', category: 'Individual', months: 6, price: 10999 },
	{ slug: 'fit-365', name: 'FIT 365', category: 'Individual', months: 12, price: 15999 },
	{ slug: 'couple-90', name: 'COUPLE 90', category: 'Couple', months: 3, price: 12600 },
	{ slug: 'couple-365', name: 'COUPLE 365', category: 'Couple', months: 12, price: 28999 },
	{ slug: 'group-90', name: 'GROUP 90', category: 'Group', months: 3, price: 6999 },
];

export const membershipNotes = [
	'Membership is non-transferable and non-refundable.',
	'Fees must be paid in advance as per the chosen plan (Monthly, Quarterly, Half-Yearly, Yearly).',
	'Membership will expire automatically at the end of the plan.',
];

export const individualPlans = plans.filter((p) => p.category === 'Individual');
export const sharedPlans = plans.filter((p) => p.category !== 'Individual');

export function formatPrice(amount) {
	return `₹${amount.toLocaleString('en-IN')}`;
}

export function durationLabel(months) {
	return `${months} ${months === 1 ? 'Month' : 'Months'}`;
}

export function monthlyCost(plan) {
	return Math.round(plan.price / plan.months);
}

// The longest plan in a category with the lowest cost per month is marked "Best value".
export function isBestValue(plan) {
	const sameCategory = plans.filter((p) => p.category === plan.category);
	if (sameCategory.length < 2) return false;
	const lowest = Math.min(...sameCategory.map(monthlyCost));
	return monthlyCost(plan) === lowest && plan.months > 1;
}

export function planHighlights(plan) {
	const who = { Individual: 'Individual membership', Couple: 'Couple membership', Group: 'Group membership' }[plan.category];
	return [
		who,
		`Duration: ${durationLabel(plan.months).toLowerCase()}`,
		`Price: ${formatPrice(plan.price)}`,
		plan.months > 1 ? `Works out to ${formatPrice(monthlyCost(plan))} per month` : 'Fees paid in advance',
		'Non-transferable & non-refundable',
		'Expires automatically at plan end',
	];
}

export function planEnquiryHref(plan) {
	const label = `${plan.name} membership - ${durationLabel(plan.months)}, ${formatPrice(plan.price)}`;
	return `/contact?plan=${encodeURIComponent(label)}#enquiry`;
}

export const priceRange = `${formatPrice(Math.min(...plans.map((p) => p.price)))} - ${formatPrice(Math.max(...plans.map((p) => p.price)))}`;
