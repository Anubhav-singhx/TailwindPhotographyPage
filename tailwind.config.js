/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ['"Syne"', 'serif'], // Add Syne font to Tailwind
      },
    },
  },
  plugins: [],
}