/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          400: '#ff7a45',
          500: '#ff6b2b',
        }
      }
    },
  },
  plugins: [],
}