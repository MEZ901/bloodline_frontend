/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF1C23',
        secondary: '#D9D9D9',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
