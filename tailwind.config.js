/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./data/**/*.{js,jsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				teko: ['var(--font-teko)', 'sans-serif'],
				oswald: ['var(--font-oswald)', 'sans-serif'],
				vazirmatn: ['var(--font-vazirmatn)', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
