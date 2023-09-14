/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#E91E62",
        brown: "#331725",
        secondary: "#4d0a7b",
        yello: "#c18604",
        first: "#143d53",
        second: "#3d792f",
        base: "#0d9488",
        base_dark: "#0f766e",
      },
    },
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
      rob: ["Roboto", "sans-serif"],
      danc: ["Dancing Script", "cursive"],
      popp: ["Poppins", "sans-serif"],
      open: ["Open Sans", "sans-serif"],
      lora: ["Lora", "serif"],
      barlow: ["Barlow Condensed", "sans-serif"],
      arial: ["arial", "sans-serif"],
    },
  },
  plugins: [],
};
