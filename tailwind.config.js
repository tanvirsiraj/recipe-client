/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#1A73E8",
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class",
};
