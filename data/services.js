// Services. Each entry gets its own page at /services/[slug].
// `titleLines` keeps the two-line headline layout used by the service cards.

export const services = [
	{
		slug: 'personal-training',
		name: 'Personal Training',
		titleLines: ['Personal', 'Training'],
		icon: '/images/services/s1.svg',
		image: '/images/services/bg1s.webp',
		summary: 'One-on-one coaching built around your goals.',
		summaryLines: ['One-on-one coaching built', 'around your goals.'],
		description:
			'Work with a dedicated coach who assesses your fitness, designs a programme for your goals and corrects your form in every session. Personal training is the fastest, safest way to lose weight, build muscle or prepare for an event.',
	},
	{
		slug: 'fitness-classes',
		name: 'Fitness Classes',
		titleLines: ['Fitness', 'Classes'],
		icon: '/images/services/s2.svg',
		image: '/images/services/bg2s.webp',
		summary: 'High-energy group sessions for every level.',
		summaryLines: ['High-energy group sessions', 'for every level.'],
		description:
			'From kickboxing and HIIT to Body Pump and cardio, our group classes keep you motivated with music, coaching and a supportive community. Every class offers easier and harder options so you can train at your own pace.',
	},
	{
		slug: 'strength-training',
		name: 'Strength Training',
		titleLines: ['Strength', 'Training'],
		icon: '/images/services/s3.svg',
		image: '/images/services/bg4s.webp',
		summary: 'Build real strength with expert guidance.',
		summaryLines: ['Build real strength with', 'expert guidance.'],
		description:
			'Our strength zone is equipped with racks, barbells, dumbbells and machines. Coaches teach the fundamental lifts, build structured progressions and help you get stronger without getting hurt.',
	},
	{
		slug: 'nutritional-guidance',
		name: 'Nutritional Guidance',
		titleLines: ['Nutritional', 'Guidance'],
		icon: '/images/services/s5.svg',
		image: '/images/services/bg5s.webp',
		summary: 'Practical diet plans that fit your lifestyle.',
		summaryLines: ['Practical diet plans that', 'fit your lifestyle.'],
		description:
			'Results are made in the kitchen as much as the gym. Get simple, practical meal guidance based on local food, your schedule and your goals - whether that is fat loss, muscle gain or better energy.',
	},
	{
		slug: 'calisthenics-challenge',
		name: 'Calisthenics Challenge',
		titleLines: ['CALISTHENICS', 'CHALLENGE'],
		icon: '/images/services/s6.svg',
		image: '/images/services/bg6s.webp',
		summary: 'Master your bodyweight, one skill at a time.',
		summaryLines: ['Master your bodyweight,', 'one skill at a time.'],
		description:
			'Push-ups, pull-ups, dips, handstands and more. Our calisthenics challenge builds relative strength, control and mobility through progressive skill work and monthly milestones.',
	},
	{
		slug: 'fitness-assessments',
		name: 'Fitness Assessments',
		titleLines: ['Fitness', 'Assessments'],
		icon: '/images/services/s4.svg',
		image: '/images/services/bg1s.webp',
		summary: 'Know your numbers and track progress.',
		summaryLines: ['Know your numbers and', 'track progress.'],
		description:
			'Start with a clear baseline. We measure body composition, BMI, strength, endurance and mobility, then re-test regularly so you can see exactly how far you have come.',
	},
];

export function getService(slug) {
	return services.find((s) => s.slug === slug);
}
