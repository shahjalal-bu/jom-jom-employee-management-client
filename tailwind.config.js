/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        31: "repeat(31, minmax(0, 1fr))",
      },
    },
  },
  plugins: [require("daisyui")],
};
