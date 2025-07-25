/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
		colors: {
			primary: '#020930',
		},
		fontFamily: {
			teko: ['Teko', 'sans-serif'],
		},
	},
  },
  plugins: [],
}