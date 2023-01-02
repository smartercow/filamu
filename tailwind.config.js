/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#dd003f",
        secondary: "#dcf836",
        "main-blue": "#233a50",
        "main-blue-sec": "#0f2133",
        "main-blue-tet": "#06121E",
        "main-blue-for": "#0B1A2A",
        "main-darkblue": "#020d18",
        "link-blue": "#4280bf",
        "main-yellow": "#FFCC00",
        "star-yellow": "#f5b50a",
        "main-gray": "#abb7c4",
        "main-gray-sec": "#666666",
        "main-black": "#222222",
      },
      screens: {
        xs: "500px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
