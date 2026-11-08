// RIXA FIT services. Each entry gets its own page at /services/[slug] and a card on /services.
// `titleLines` keeps the two-line headline used by the cards; `tag` is the short label on the home
// page slider; `icon` is a Font Awesome class.
// `description` is also used for search-engine descriptions, so keep it to one or two sentences.
// Images are real RIXA FIT photos (gym photos and frames from the gym-tour video).
// The previous template services redirect to these pages - see next.config.js.

import { personalTrainingNote, scheduleNote } from './schedule';

export const services = [
	{
		slug: 'personal-training',
		tag: 'One-on-One',
		name: 'Personal Training',
		titleLines: ['Personal', 'Training'],
		icon: 'fa-solid fa-user-check',
		image: '/images/services/personal-training.webp',
		summaryLines: ['One-on-one coaching built', 'around your goals.'],
		description:
			'One-on-one sessions with a RIXA FIT trainer who plans your workouts around your goal, corrects your form and keeps you accountable - whether you want to lose weight, build muscle or simply get fitter.',
		highlights: [
			'A programme planned around your goal and fitness level',
			'Professional guidance and form correction in every session',
			'Your workout and diet plans in the RIXA FIT app',
			'Regular progress checks to keep you on track',
		],
		note: personalTrainingNote,
	},
	{
		slug: 'weight-loss-fat-loss',
		tag: 'Fat Loss',
		name: 'Weight Loss & Fat Loss',
		titleLines: ['Weight Loss', '& Fat Loss'],
		icon: 'fa-solid fa-weight-scale',
		image: '/images/services/weight-loss-fat-loss.webp',
		summaryLines: ['Lose fat steadily with', 'a plan that fits you.'],
		description:
			'A structured plan that combines cardio, strength training and practical nutrition guidance to help you lose fat steadily and keep it off - without crash diets.',
		highlights: [
			'Workouts that mix cardio and strength training',
			'Practical diet guidance you can follow every day',
			'Progress tracking so you can see your results',
			'Trainer support to help you stay consistent',
		],
	},
	{
		slug: 'weight-gain-muscle-development',
		tag: 'Muscle Gain',
		name: 'Weight Gain & Muscle Development',
		titleLines: ['Weight Gain', '& Muscle'],
		icon: 'fa-solid fa-dumbbell',
		image: '/images/services/weight-gain-muscle-development.webp',
		summaryLines: ['Build muscle and healthy', 'weight, step by step.'],
		description:
			'For members who want to gain healthy weight and build muscle. Your trainer sets a progressive strength programme and guides your nutrition so you get stronger week after week.',
		highlights: [
			'Progressive muscle-building programmes',
			'Guidance on correct technique and safe lifting',
			'Nutrition guidance to support healthy weight gain',
			'Regular progress checks',
		],
	},
	{
		slug: 'strength-conditioning',
		tag: 'Strength',
		name: 'Strength & Conditioning',
		titleLines: ['Strength &', 'Conditioning'],
		icon: 'fa-solid fa-bolt',
		image: '/images/services/strength-conditioning.webp',
		summaryLines: ['Get stronger, fitter and', 'ready for anything.'],
		description:
			'Build all-round strength, stamina and athletic fitness on our modern equipment, with trainers who teach the key lifts and build your programme step by step.',
		highlights: [
			'Modern strength and conditioning equipment',
			'Coaching on the fundamental lifts',
			'Programmes that progress as you get stronger',
			'Suitable for beginners and experienced lifters',
		],
	},
	{
		slug: 'functional-circuit-training',
		tag: 'Full Body',
		name: 'Functional & Circuit Training',
		titleLines: ['Functional &', 'Circuit Training'],
		icon: 'fa-solid fa-arrows-rotate',
		image: '/images/services/functional-circuit-training.webp',
		summaryLines: ['Full-body workouts for', 'everyday strength.'],
		description:
			'Fast-paced, full-body sessions that combine strength, cardio and movement drills to improve everyday fitness, coordination and endurance.',
		highlights: [
			'Full-body workouts in a short time',
			'Improves strength, stamina and coordination',
			'Easier and harder options for every level',
			'Part of our group fitness activities',
		],
		note: scheduleNote,
	},
	{
		slug: 'group-fitness-cardio',
		tag: 'Group Sessions',
		name: 'Group Fitness & Cardio',
		titleLines: ['Group Fitness', '& Cardio'],
		icon: 'fa-solid fa-people-group',
		image: '/images/services/group-fitness-cardio.webp',
		summaryLines: ['Train together and', 'stay motivated.'],
		description:
			'Energetic group sessions and cardio training that keep you motivated - including our special Group Cardio session every Saturday morning.',
		highlights: [
			'Group sessions led by our trainers',
			'Cardio training for stamina and fat loss',
			'A motivating, supportive atmosphere',
			'Saturday Special Group Cardio, 6:30 AM – 8:00 AM',
		],
		note: scheduleNote,
	},
	{
		slug: 'zumba-dance-fitness',
		tag: 'Dance',
		name: 'Zumba & Dance Fitness',
		titleLines: ['Zumba &', 'Dance Fitness'],
		icon: 'fa-solid fa-music',
		image: '/images/services/zumba-dance-fitness.webp',
		summaryLines: ['Dance your way', 'to fitness.'],
		description:
			'Fun, music-driven workouts that burn calories, build stamina and lift your mood - no dance experience needed.',
		highlights: [
			'High-energy sessions set to music',
			'Burns calories and builds stamina',
			'Beginner-friendly - no experience needed',
			'Part of our group fitness activities',
		],
		note: scheduleNote,
	},
	{
		slug: 'fitness-boxing',
		tag: 'Combat',
		name: 'Fitness Boxing',
		titleLines: ['Fitness', 'Boxing'],
		icon: 'fa-solid fa-hand-fist',
		image: '/images/services/fitness-boxing.webp',
		summaryLines: ['Punch, move and build', 'real fitness.'],
		description:
			'Boxing-based workouts that build strength, speed, stamina and confidence - a great way to burn calories and release stress.',
		highlights: [
			'Boxing drills and conditioning',
			'Builds power, speed and stamina',
			'Great for stress relief and confidence',
			'Part of our group fitness activities',
		],
		note: scheduleNote,
	},
	{
		slug: 'fitness-assessments',
		tag: 'Progress',
		name: 'Fitness Assessment & Progress Tracking',
		titleLines: ['Fitness', 'Assessment'],
		icon: 'fa-solid fa-chart-line',
		image: '/images/services/fitness-assessments.webp',
		summaryLines: ['Know where you start,', 'see how far you go.'],
		description:
			'Start with a clear picture of your current fitness, set realistic goals with your trainer and track your progress over time.',
		highlights: [
			'A starting assessment of your fitness',
			'Goals set together with your trainer',
			'Progress tracking, including in the RIXA FIT app',
			'Plans adjusted as you improve',
		],
	},
	{
		slug: 'nutritional-guidance',
		tag: 'Diet',
		name: 'Practical Nutrition Guidance',
		titleLines: ['Nutrition', 'Guidance'],
		icon: 'fa-solid fa-apple-whole',
		image: '/images/services/nutritional-guidance.webp',
		summaryLines: ['Practical eating plans', 'that fit your life.'],
		description:
			'Simple, practical diet guidance matched to your goal and daily routine, so your food supports the work you put in at the gym.',
		highlights: [
			'Diet plans matched to your fitness goal',
			'Practical advice you can follow every day',
			'View your diet plan anytime in the RIXA FIT app',
			'Works alongside your workout programme',
		],
	},
];

export function getService(slug) {
	return services.find((s) => s.slug === slug);
}
