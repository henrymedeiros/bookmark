/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "soft-blue": "hsl(231, 69%, 60%)",
        "soft-red": "hsl(0, 94%, 66%)",
        "very-dark-blue": "#252b46",
        "grayish-blue": "hsl(229, 8%, 60%)",
      },
    },
  },
  plugins: [],
};
