/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        body: "#010000",
        "selected-text": "#A3A3FF",
        theme: "#5c318c",
        secondary: "#9292A4",
        badge: "#3F3F51",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
