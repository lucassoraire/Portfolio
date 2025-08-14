import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false, // Desactiva en móvil para mejor performance
      touchMultiplier: 1.5,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Fix para navegación en Astro
    const handleAnchorClick = (event) => {
      if (event.target.closest('a[href^="#"]')) {
        const href = event.target.getAttribute('href')
        const target = document.querySelector(href)
        if (target) {
          event.preventDefault()
          lenis.scrollTo(target, { offset: -80 }) // Ajusta el offset según tu header
        }
      }
    }

    document.addEventListener('click', handleAnchorClick, { passive: false })

    return () => {
      lenis.destroy()
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  return null
}