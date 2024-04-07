/* eslint-disable no-undef */
const flowbite = require("flowbite-react/tailwind");


/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        'blue': "#2920F5",
        'blueEnd': "#7373FF"
      }
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}
