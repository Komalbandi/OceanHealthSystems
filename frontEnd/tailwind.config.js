/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        red: "#FF5961",
      },
    },
  },
  plugins: [require("daisyui")],
};
