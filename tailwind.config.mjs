/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
};
