// Gym timings shown in the timetable on the home page (#schedule) and notes used on service pages.
// The opening hours in data/site.js (footer, contact page, search engines) must match these.

const MORNING = '5:00 AM – 11:00 AM';
const EVENING = '5:00 PM – 10:00 PM';
const GROUP_CARDIO = '6:30 AM – 8:00 AM';

const MON_SAT = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const scheduleDays = [...MON_SAT, 'Sunday'];

// Rows of the weekly timetable. A day not listed in `days` shows as closed for that slot.
// `shortTime` fits inside the narrow day cells; the row label shows the full `time`.
export const scheduleSlots = [
	{ key: 'morning', label: 'Morning', time: MORNING, shortTime: '5 – 11 AM', title: 'Gym Open', days: scheduleDays },
	{ key: 'cardio', label: 'Special', time: GROUP_CARDIO, shortTime: '6:30 – 8 AM', title: 'Group Cardio', days: ['Saturday'], special: true },
	{ key: 'evening', label: 'Evening', time: EVENING, shortTime: '5 – 10 PM', title: 'Gym Open', days: MON_SAT },
];

// The same timings grouped the way the front desk describes them.
export const scheduleSummary = [
	{
		title: 'Monday – Saturday',
		rows: [
			{ label: 'Morning', time: MORNING },
			{ label: 'Evening', time: EVENING },
		],
	},
	{
		title: 'Saturday – Special Group Cardio',
		rows: [{ label: 'Group Cardio', time: GROUP_CARDIO }],
	},
	{
		title: 'Sunday',
		rows: [{ label: 'Morning', time: MORNING }],
	},
];

export const scheduleNote = 'Special class timings may vary. Please contact our reception for the latest schedule.';

export const personalTrainingNote = 'Personal Training sessions are available by appointment, subject to trainer availability.';
