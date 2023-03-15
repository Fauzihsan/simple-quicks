/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#0F8A69",
        "primary-blue": "#2F80ED",
        "primary-darkgray": "#4F4F4F",
        "primary-lightgray": "#828282",
        "primary-white": "#E0E0E0",
        "first-message": "#F9E0FD",
        "second-message": "#FDCFA4",
        "third-message": "#CBF1C2",
      },
    },
  },
  plugins: [],
};
