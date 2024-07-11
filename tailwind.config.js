/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter Tight"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        rubik: ['"Rubik"', 'sans-serif'],
        lobster: ['"Lobster Two"', 'sans-serif'],
      },
      colors: {
        primary: '#1465ff',
      },
    },
  },
  plugins: [],
}
