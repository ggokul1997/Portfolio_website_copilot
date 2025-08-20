import { useRef, useEffect } from 'react';

export function useMagnetic(strength = 0.25) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let mouseX = 0, mouseY = 0;
    function onMouseMove(e: MouseEvent) {
  if (!el) return;
  const rect = el.getBoundingClientRect();
  mouseX = e.clientX - (rect.left + rect.width / 2);
  mouseY = e.clientY - (rect.top + rect.height / 2);
  el.style.transform = `translate(${mouseX * strength}px, ${mouseY * strength}px)`;
    }
    function onMouseLeave() {
  if (el) el.style.transform = '';
    }
    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseleave', onMouseLeave);
    return () => {
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [strength]);
  return ref;
}
