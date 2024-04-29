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
        'blueEnd': "#7373FF",
        'body': "#838383"
      },
      backgroundImage: {
        'chamada': "url('src/assets/div.cta-section.svg')"
      }
    },

  },
  plugins: [
    flowbite.plugin()
  ],
}
