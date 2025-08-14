export default {
  content: ["./src/**/*.{astro,html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  // ¡Elimina la opción 'smooth'! No es compatible con Tailwind
  plugins: [],
};

