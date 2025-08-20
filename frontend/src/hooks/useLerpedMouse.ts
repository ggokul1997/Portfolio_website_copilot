import { useRef, useEffect } from 'react';

export function useLerpedMouse(lerp = 0.18) {
  const ref = useRef<HTMLElement | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let frame: number;
    function animate() {
      if (!ref.current) return;
      ref.current.style.left = `${pos.current.x}px`;
      ref.current.style.top = `${pos.current.y}px`;
      frame = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      pos.current.x += (e.clientX - pos.current.x) * lerp;
      pos.current.y += (e.clientY - pos.current.y) * lerp;
    }
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [lerp]);

  return ref;
}
