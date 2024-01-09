/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        online: '#4CAF50',
        offline: '#FF5722',
      }
    },
  },
  plugins: [],
}