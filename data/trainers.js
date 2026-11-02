// Trainer profiles. Each entry gets its own page at /trainer/[slug].
// TODO(owner): replace these template names, roles, photos and bios with the real RIXA FIT team.

export const trainers = [
	{
		slug: 'john-wick-c',
		name: 'John Wick C.',
		role: 'Co-Founder',
		image: '/images/home/trainer1.webp',
		specialties: ['Strength', 'Fitness', 'Wellness', 'Boxing'],
		bio: 'As co-founder, John sets the training standards at RIXA FIT. He specialises in strength programming and boxing conditioning, and loves helping beginners build confidence on the gym floor.',
	},
	{
		slug: 'ily-thompson',
		name: 'Ily Thompson',
		role: 'Head Trainer',
		image: '/images/home/trainer2.webp',
		specialties: ['Cardio', 'HIIT', 'Fat Loss', 'Mobility'],
		bio: 'Ily leads our coaching team and designs the group class programme. Her sessions are energetic, technique-focused and built around sustainable fat loss and conditioning.',
	},
	{
		slug: 'alex-ramirez',
		name: 'Alex Ramirez',
		role: 'Nutrition Consultant',
		image: '/images/home/trainer3.webp',
		specialties: ['Nutrition', 'Weight Loss', 'Muscle Gain', 'Lifestyle'],
		bio: 'Alex creates practical meal plans that fit Indian kitchens and busy schedules. He works alongside the trainers so your diet and workouts push towards the same goal.',
	},
	{
		slug: 'david-jones',
		name: 'David Jones',
		role: 'Fitness Instructor',
		image: '/images/trainer/t4.webp',
		specialties: ['Functional', 'Core', 'Kettlebell', 'Endurance'],
		bio: 'David runs our functional training and core sessions. He focuses on movement quality first, then builds strength and endurance on top of a solid foundation.',
	},
	{
		slug: 'amaa-brown',
		name: 'Amaa Brown',
		role: 'Exercise Specialist',
		image: '/images/trainer/t5.webp',
		specialties: ['Rehab', 'Mobility', 'Posture', 'Flexibility'],
		bio: 'Amaa specialises in corrective exercise and mobility. She helps members train around old injuries, improve posture and move pain-free.',
	},
	{
		slug: 'daniel-lee',
		name: 'Daniel Lee',
		role: 'Training Expert',
		image: '/images/trainer/t6.webp',
		specialties: ['Hypertrophy', 'Powerlifting', 'Strength', 'Form'],
		bio: 'Daniel coaches our muscle-building and strength members. Expect detailed form cues, structured progression and programmes that deliver measurable results.',
	},
];

export function getTrainer(slug) {
	return trainers.find((t) => t.slug === slug);
}
