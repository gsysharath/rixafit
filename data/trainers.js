// Trainer profiles. Each entry gets its own page at /trainer/[slug]; the first three
// also appear on the home, about and service pages.
// TODO(owner): confirm each trainer's role, specialties and bio.

const SPECIALTIES = ['Personal Training', 'Strength', 'Fat Loss', 'Muscle Gain'];

export const trainers = [
	{
		slug: 'shiva',
		name: 'Shiva',
		role: 'Fitness Trainer',
		image: '/images/trainer/shiva.webp',
		specialties: SPECIALTIES,
		bio: 'Shiva is part of the RIXA FIT coaching team, guiding members on the gym floor with personalised workouts, correct technique and steady progress tracking - whether you are just starting out or chasing a new strength goal.',
	},
	{
		slug: 'karthik',
		name: 'Karthik',
		role: 'Fitness Trainer',
		image: '/images/trainer/karthik.webp',
		specialties: SPECIALTIES,
		bio: 'Karthik is part of the RIXA FIT coaching team, helping members build strength and muscle with structured programmes, clear form cues and the motivation to stay consistent week after week.',
	},
	{
		slug: 'jayasurya',
		name: 'Jayasurya',
		role: 'Fitness Trainer',
		image: '/images/trainer/jayasurya.webp',
		specialties: SPECIALTIES,
		bio: 'Jayasurya is part of the RIXA FIT coaching team, supporting members through weight loss, conditioning and everyday fitness with practical guidance and a focus on safe, sustainable progress.',
	},
	{
		slug: 'jagadhish',
		name: 'Jagadhish',
		role: 'Fitness Trainer',
		image: '/images/trainer/jagadhish.webp',
		specialties: SPECIALTIES,
		bio: 'Jagadhish is part of the RIXA FIT coaching team, coaching members through strength, conditioning and functional training with an emphasis on good form, consistency and results you can feel.',
	},
];

export function getTrainer(slug) {
	return trainers.find((t) => t.slug === slug);
}
