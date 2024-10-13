/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			}
		},
		animation: {
			'bounce-slow': 'bounce 2s infinite'
		},
		colors:{
			'yellow': '#FBDD7F',
			'dark-blue': '#1C325B',
			'blue': '#327B94',
			'light-blue': '#7FB7D0',
			'white': '#FFFFFF',
			'black': '#000000',
		}
	},
	plugins: [],
}
