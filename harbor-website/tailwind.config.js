/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': "#2920F5",
        'blueEnd': "#7373FF"
      }
    },
  },
  plugins: [],
}
