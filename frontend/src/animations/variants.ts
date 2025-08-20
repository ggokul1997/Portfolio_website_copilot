// Animation variants and tokens for Framer Motion
import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40, transition: { type: 'spring', damping: 24, stiffness: 180 } },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 24, stiffness: 180 } },
};

export const slideInX = (dir: 'left' | 'right' = 'left'): Variants => ({
  hidden: { opacity: 0, x: dir === 'left' ? -40 : 40, transition: { type: 'spring', damping: 24, stiffness: 180 } },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', damping: 24, stiffness: 180 } },
});

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92, transition: { type: 'spring', damping: 20, stiffness: 200 } },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', damping: 20, stiffness: 200 } },
};

export const staggerContainer = (delay = 0.08): Variants => ({
  visible: { transition: { staggerChildren: delay } },
});

export const revealMask: Variants = {
  hidden: { width: 0, opacity: 0 },
  visible: { width: '100%', opacity: 1, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

export const tiltHover: Variants = {
  rest: { rotateX: 0, rotateY: 0, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 18 } },
  hover: { scale: 1.04, boxShadow: '0 8px 32px #e0111133', transition: { type: 'spring', stiffness: 200, damping: 18 } },
};

export const float: Variants = {
  rest: { y: 0 },
  float: { y: [0, -8, 0], transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' } },
};

export const marquee: Variants = {
  animate: { x: ['0%', '-100%'], transition: { repeat: Infinity, duration: 12, ease: 'linear' } },
};

export const glowPulse: Variants = {
  rest: { boxShadow: '0 0 0 0 #e0111180' },
  pulse: { boxShadow: '0 0 16px 4px #e01111cc', transition: { yoyo: Infinity, duration: 1.2, ease: 'easeInOut' } },
};
