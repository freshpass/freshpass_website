/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'freshpass-green': '#A4D171',
        'freshpass-green-70': '#A4D171B3',
        'freshpass-green-30': '#A4D1714D',
        'dark-gray': '#2E3331',
        'gray-green': '#47534F',
        'cream': '#EDF0E9'
      },
      fontFamily: {
        'display': ['Red Hat Display', 'sans-serif'],
        'text': ['Red Hat Text', 'sans-serif']
      }
    }
  },
  plugins: []
}