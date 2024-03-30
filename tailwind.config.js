/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000853",
        primary: "#F0EAF8",
        secondary: "#CBB6E5",
        tertiary: { light: "#761BE4", dark: "#6A19CD" },
        alert: { light: "#FEECEC", dark: "#ED4545" },
      },
    },
  },
  plugins: [],
};
