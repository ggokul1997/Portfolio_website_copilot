import { useRef, useEffect } from 'react';

export function useTilt3D(maxTilt = 16) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    function onMouseMove(e: MouseEvent) {
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
  el.style.transform = `rotateY(${x * maxTilt}deg) rotateX(${-y * maxTilt}deg)`;
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
  }, [maxTilt]);
  return ref;
}
