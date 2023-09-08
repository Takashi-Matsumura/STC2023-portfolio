/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        body: "#010000",
        "selected-text": "#A3A3FF",
        theme: "#5c318c",
        secondary: "#9292A4",
        badge: "#3F3F51",
        inputBorder: "#565666",
        input: "#2A2A33",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
