/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-lago': '#add4d3',
        'mica-negra': '#333237',
        'soft': '#e9e2da',
        'citrus': '#ffad64',
        'capadocia': '#fb8351'
      },
    },
  },
  plugins: [],
}