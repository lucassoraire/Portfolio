import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export default function ScrollEffect() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return null;
}