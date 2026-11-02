// Blog posts. Each entry gets its own page at /blog/[slug].
// `body` is a list of { heading?, text } blocks rendered in order on the detail page.

export const posts = [
	{
		slug: 'expert-tips-for-maximizing-your-fitness',
		title: 'Fitness Potential Expert Tips for Maximizing Your fitness',
		image: '/images/blog/p1.webp',
		date: '2026-08-12',
		author: 'RIXA FIT Team',
		excerpt: 'Are you ready to take your fitness journey to the next level? Whether you\'re...',
		body: [
			{ text: 'Are you ready to take your fitness journey to the next level? Whether you\'re a seasoned athlete or a beginner taking the first steps, a few smart habits make a huge difference to your results.' },
			{ heading: 'Train with a plan', text: 'Random workouts lead to random results. Follow a structured programme with clear goals, track your lifts and aim to improve a little every week.' },
			{ heading: 'Prioritise recovery', text: 'Muscles grow when you rest. Sleep 7-8 hours, take at least one full rest day each week and use mobility work to stay injury free.' },
			{ heading: 'Stay consistent', text: 'Three good sessions every week beat one perfect week followed by a month off. Book your sessions like appointments and show up.' },
		],
	},
	{
		slug: 'pre-and-post-workout-nutrition',
		title: 'Fuel Your Workout: A Guide to Pre- and Post-Workout Nutrition',
		image: '/images/blog/p2.webp',
		date: '2026-08-26',
		author: 'RIXA FIT Team',
		excerpt: 'What you eat before and after training shapes your energy, performance and recovery...',
		body: [
			{ text: 'What you eat before and after training shapes your energy, performance and recovery. Here is a simple guide you can follow with everyday food.' },
			{ heading: 'Before your workout', text: 'Eat a light meal with carbohydrates and some protein 60-90 minutes before training - a banana with peanut butter, poha, or idli with sambar work well.' },
			{ heading: 'After your workout', text: 'Within two hours, refuel with protein and carbohydrates: eggs, paneer, dal with rice, or a protein shake with fruit help muscles repair.' },
			{ heading: 'Hydration matters', text: 'Drink water through the day and sip during training. In hot weather, add a pinch of salt and lemon to replace lost electrolytes.' },
		],
	},
	{
		slug: 'overcoming-fitness-plateaus',
		title: 'Strategies for Overcoming Fitness Plateaus and Achieving',
		image: '/images/blog/p3.webp',
		date: '2026-09-09',
		author: 'RIXA FIT Team',
		excerpt: 'Stopped seeing progress? Plateaus are normal - and with the right changes you can break through...',
		body: [
			{ text: 'Stopped seeing progress? Plateaus are a normal part of training. The good news is that small, deliberate changes can get you moving again.' },
			{ heading: 'Change the stimulus', text: 'Adjust sets, reps, tempo or exercise selection every 4-6 weeks so your body keeps adapting.' },
			{ heading: 'Check your nutrition', text: 'Your calorie and protein needs change as your body changes. Re-check your intake with a coach.' },
			{ heading: 'Measure more than weight', text: 'Track strength, measurements and photos. Progress often continues even when the scale stands still.' },
		],
	},
	{
		slug: 'mental-health-in-your-fitness-journey',
		title: 'The Importance of Mental Health in Your Fitness Journey',
		image: '/images/blog/p4.webp',
		date: '2026-09-23',
		author: 'RIXA FIT Team',
		excerpt: 'Exercise is one of the most powerful tools for a calmer, happier mind...',
		body: [
			{ text: 'Exercise is one of the most powerful tools for a calmer, happier mind. Training regularly reduces stress, improves sleep and builds confidence.' },
			{ heading: 'Move for your mood', text: 'Even a 20-minute session releases endorphins that lift your mood and reduce anxiety.' },
			{ heading: 'Be kind to yourself', text: 'Progress is not linear. Celebrate small wins and focus on how training makes you feel, not only how you look.' },
			{ heading: 'Find your community', text: 'Training with others keeps you accountable and makes the gym a place you look forward to visiting.' },
		],
	},
];

export function getPost(slug) {
	return posts.find((p) => p.slug === slug);
}

export function formatPostDate(iso) {
	return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' });
}
