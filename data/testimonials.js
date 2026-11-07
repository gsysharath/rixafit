// Member testimonials shown on the home and about pages (text only, no photos).
// Copied from RIXA FIT's Google reviews; only spelling and grammar are tidied, and reviews
// Google shows cut off ("... More") end at their last complete sentence.
// Only add real feedback from real members. Format:
//   { name: 'Reviewer name', rating: 5, source: 'Google review', text: 'Their words.' },
// If this list is empty, the section links to the Google reviews instead.

// Member video testimonials, stored in public/videos/testimonials. Each video downloads only
// when a visitor presses play; `poster` is the still shown before that.
export const videoTestimonials = [
	{ src: '/videos/testimonials/member-1.mp4', poster: '/videos/testimonials/member-1.webp', duration: '1:36' },
	{ src: '/videos/testimonials/member-2.mp4', poster: '/videos/testimonials/member-2.webp', duration: '0:53' },
	{ src: '/videos/testimonials/member-3.mp4', poster: '/videos/testimonials/member-3.webp', duration: '0:25' },
];

export const testimonials = [
	{
		name: 'Sutrave Subramanyam',
		rating: 5,
		source: 'Google review',
		text: 'One of the best premium gyms in Mahabubnagar! Excellent trainers, friendly staff, great personal training and top-notch cleanliness. Really good ambience and overall fitness experience. Highly recommended!',
	},
	{
		name: 'Kalla Sushma',
		rating: 5,
		source: 'Google review',
		text: "I love the gym's flexible timings and excellent guidance. The early morning hours perfectly suit my schedule. The trainers are knowledgeable, incredibly cool and friendly. I joined mainly to lose weight and the results have been fantastic. My posture and energy levels have also improved significantly. Highly recommended!",
	},
	{
		name: 'Hrushi Kesh',
		rating: 5,
		source: 'Google review',
		text: 'This gym is fantastic. The availability of machines is truly top-notch - they have a diverse selection of modern equipment, and even during peak hours I rarely have to wait, thanks to the sheer number of cardio and weight stations.',
	},
	{
		name: 'Aditya Raj',
		rating: 5,
		source: 'Google review',
		text: 'Rixa Fit truly stands out as one of the best gyms in the area, with a clean, energetic atmosphere and well-maintained equipment. Head trainer Jayasurya is highly knowledgeable.',
	},
	{
		name: 'Tarun Kumar',
		rating: 5,
		source: 'Google review',
		text: 'This gym is amazing, with great ambience. It has state-of-the-art equipment, knowledgeable trainers and a supportive atmosphere that motivates me to reach my fitness goals. The facility is clean and spacious, with a wide range of classes. Friendly staff make it a great workout experience.',
	},
	{
		name: 'B. Rohith Kumar Reddy',
		rating: 5,
		source: 'Google review',
		text: 'One of the best gyms in Mahabubnagar, with good equipment and certified trainers. The programme is customised for each client and diet is included. From basics to advanced, the trainers are with us. Perfect place for your body transformation.',
	},
	{
		name: 'Chitti Robo',
		rating: 5,
		source: 'Google review',
		text: 'Rixa Fit is a very clean, well-equipped gym with a great ambience and supportive trainers. I really enjoy working out here and highly recommend it to others.',
	},
	{
		name: 'Bagade Abhi',
		rating: 5,
		source: 'Google review',
		text: 'I loved this gym from the moment I entered. The ambience is great, and the trainers here give clear explanations and motivate you well. The way they maintain hygiene is amazing.',
	},
	{
		name: 'Sahithi Mansani',
		rating: 5,
		source: 'Google review',
		text: "It's been 10 days since I joined the gym, and so far the training has been going well. The trainers focus on each client individually and take utmost care in guiding us.",
	},
	{
		name: 'Namrita Chandra',
		rating: 5,
		source: 'Google review',
		text: 'Great gym. The trainers are very professional and prioritise the comfort and well-being of clients, especially women.',
	},
	{
		name: 'Sudheer',
		rating: 4,
		source: 'Google review',
		text: 'Rixa Fit Gym is the best in Mahabubnagar! Great equipment, friendly trainers and a motivating environment. Perfect place for anyone serious about fitness!',
	},
	{
		name: 'Vamshi Goud',
		rating: 5,
		source: 'Google review',
		text: "I've tried many gyms in the past, but none have matched the experience I've had here. The energy, the atmosphere and, most importantly, the dedication of the trainers make this place truly the best.",
	},
	{
		name: 'Matam Shriya',
		rating: 5,
		source: 'Google review',
		text: 'The gym is always clean, spacious and well ventilated. The trainers are very patient and guide us properly.',
	},
	{
		name: 'Sampath C',
		rating: 5,
		source: 'Google review',
		text: 'Amazing experience at RIXA Fit! Clean space, great vibes and supportive trainers. Perfect place to transform your fitness journey!',
	},
	{
		name: 'Darshan Mudiraj',
		rating: 5,
		source: 'Google review',
		text: 'The gym is very clean, with good trainers, and definitely the best gym in town.',
	},
	{
		name: 'Anirav Prakash',
		rating: 5,
		source: 'Google review',
		text: 'Best gym in Mahabubnagar. Top-class facilities and trainers. Keep it up!',
	},
	{
		name: 'Saishree',
		rating: 5,
		source: 'Google review',
		text: 'Good and flexible. The trainers are very experienced and train well. Very good hygiene is maintained.',
	},
	{
		name: 'Mohammed Saadath Hussain',
		rating: 5,
		source: 'Google review',
		text: 'Awesome gym, great equipment, very helpful trainers. Highly recommended.',
	},
	{
		name: 'Aparna W Wattamwar',
		rating: 5,
		source: 'Google review',
		text: 'An innovative app for members with daily guidance. Fully equipped, proper guidance and neatly maintained.',
	},
	{
		name: 'Balu Rock Star',
		rating: 5,
		source: 'Google review',
		text: 'RIXA Fit is hands down the best gym in Mahabubnagar!',
	},
	{
		// The reviewer's name was not visible in the screenshot this came from.
		rating: 5,
		source: 'Google review',
		text: 'Neat ambience, a pleasant peace of mind and good interaction with the trainers.',
	},
	{
		name: 'Cnu Bablu',
		rating: 5,
		source: 'Google review',
		text: 'Where hard work meets real results! With good, professional trainers.',
	},
	{
		name: 'Udayatejareddy Bujala',
		rating: 5,
		source: 'Google review',
		text: 'Hygienic, neat and the latest equipment.',
	},
	{
		name: 'Saritha Saritha',
		rating: 5,
		source: 'Google review',
		text: 'Very good.',
	},
	{
		name: 'Vinay Kittu',
		rating: 5,
		source: 'Google review',
		text: 'Neat and hygienic.',
	},
	{
		name: 'Raji Raju',
		rating: 5,
		source: 'Google review',
		text: 'Good opinion.',
	},
	{
		name: 'Nvishal Naik',
		rating: 5,
		source: 'Google review',
		text: 'Good gym, and Surya anna is the best.',
	},
	{
		name: 'Shaik Muqeem',
		rating: 5,
		source: 'Google review',
		text: 'The best gym for hygiene in Mahabubnagar.',
	},
	{
		name: 'Phanish Chandra',
		rating: 5,
		source: 'Google review',
		text: 'I had a great experience with RIXA Fit.',
	},
];
