/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#101010',
        not_white: '#F2F2F2',
        just_gray: '#858585',
        other_border: '#222222',

        hover_anim: '#1C1C1C',
        nav_border: 'rgba(38, 38, 38, 0.1)',
      },
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

