/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'gray-600': '#718096',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}