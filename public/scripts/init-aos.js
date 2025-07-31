import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 800,
  once: true,
  // Nuevas opciones para depuración
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  easing: 'ease-in-out', // default easing for AOS animations
  mirror: false, // whether animation should happen only once - default
  anchorPlacement: 'top-bottom', // defines which position of the element should trigger the animation
  // Para depurar:
  // disable: window.innerWidth < 768 // Deshabilita en mobile si es un problema de renderizado pequeño
});

// Opcional: Forzar un refresh después de un pequeño delay
// window.addEventListener('load', () => {
//   setTimeout(() => {
//     AOS.refresh();
//   }, 100);
// });
