// Group classes. Each entry gets its own page at /classes/[slug].

export const classes = [
	{
		slug: 'kickboxing',
		name: 'Kickboxing',
		tag: 'Combat',
		image: '/images/classes/c1.webp',
		schedule: 'Mon - Wed - Fri',
		duration: '60 Minutes',
		intro: 'A high-energy combat workout that blends punches, kicks and footwork to build power, speed and confidence.',
		description:
			'Our kickboxing class combines striking drills, pad work and conditioning rounds. You will learn correct stance, guard and technique from our coaches while burning serious calories. No experience needed - every combination is broken down step by step, and gloves are available at the studio.',
	},
	{
		slug: 'body-pump',
		name: 'Body Pump',
		tag: 'Strength',
		image: '/images/classes/c2.webp',
		schedule: 'Tue - Thu - Sat',
		duration: '60 Minutes',
		intro: 'A barbell-based full-body session that uses light to moderate weights with high repetitions to tone and strengthen.',
		description:
			'Body Pump works every major muscle group through squats, presses, lunges and curls set to music. Lighter loads and higher reps build muscular endurance and a lean, defined physique. Trainers help you pick the right weight so you can progress safely week after week.',
	},
	{
		slug: 'hiit-havoc',
		name: 'Hiit Havoc',
		tag: 'HIIT',
		image: '/images/classes/c3.webp',
		schedule: 'Mon - Wed - Fri',
		duration: '45 Minutes',
		intro: 'Short bursts of all-out effort followed by quick recovery - the most time-efficient way to boost fitness and burn fat.',
		description:
			'HIIT Havoc mixes bodyweight moves, kettlebells and cardio intervals into fast circuits. Your heart rate stays high, your metabolism stays elevated long after class, and every exercise has easier and harder options so beginners and athletes can train side by side.',
	},
	{
		slug: 'muscle',
		name: 'Muscle',
		tag: 'Hypertrophy',
		image: '/images/classes/c4.webp',
		schedule: 'Tue - Thu - Sat',
		duration: '75 Minutes',
		intro: 'A structured muscle-building session focused on progressive overload, controlled tempo and perfect form.',
		description:
			'This class follows a split routine targeting different muscle groups through the week. Coaches guide you through compound and isolation lifts, track your progression and share nutrition tips that support muscle growth and recovery.',
	},
	{
		slug: 'cardio',
		name: 'Cardio',
		tag: 'Endurance',
		image: '/images/classes/c5.webp',
		schedule: 'Monday - Saturday',
		duration: '45 Minutes',
		intro: 'Improve heart health, stamina and energy levels with guided cardio intervals on our modern equipment.',
		description:
			'Treadmills, bikes, rowers and cross-trainers are combined with simple floor drills to keep every session fresh. Workouts are paced by heart-rate zones so you train at the right intensity for fat loss and endurance.',
	},
	{
		slug: 'muscular',
		name: 'Muscular',
		tag: 'Functional',
		image: '/images/classes/c6.webp',
		schedule: 'Mon - Wed - Fri',
		duration: '60 Minutes',
		intro: 'Functional strength training that builds a strong, mobile body ready for everyday life and sport.',
		description:
			'Using dumbbells, resistance bands, medicine balls and bodyweight, this class improves core stability, balance and coordination. It is ideal for anyone who wants real-world strength while reducing the risk of injury.',
	},
];

export function getClass(slug) {
	return classes.find((c) => c.slug === slug);
}
