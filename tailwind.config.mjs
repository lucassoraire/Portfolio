
export default {
  content: ["./src/**/*.{astro,html,js}"],
  darkMode: 'class', // <--- esta línea es FUNDAMENTAL para toggle manual
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

