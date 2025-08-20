import { useEffect, useRef } from 'react';

export function useScrollParallax(intensity = 0.2) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let ticking = false;
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const offset = rect.top / window.innerHeight;
          el.style.transform = `translateY(${offset * intensity * 100}px)`;
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [intensity]);
  return ref;
}
