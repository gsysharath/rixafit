import nextVitals from 'eslint-config-next/core-web-vitals';

const config = [
	...nextVitals,
	{
		rules: {
			'@next/next/no-img-element': 'off',
			'@next/next/no-html-link-for-pages': 'off',
			'@next/next/no-page-custom-font': 'off',
			'react/no-unescaped-entities': 'off',
		},
	},
];

export default config;
