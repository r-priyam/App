const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: {
					light: '#333333',
					DEFAULT: '#202225',
					dark: '#1C1E21',
				},
				secondary: {
					light: '#28B463',
					DEFAULT: '#239B56',
					dark: '#1D8348',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/aspect-ratio'),
	],
};
