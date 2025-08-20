// Easing and spring presets for Framer Motion
export const easings = {
  inOut: [0.4, 0, 0.2, 1],
  in: [0.4, 0, 1, 1],
  out: [0, 0, 0.2, 1],
  bounce: [0.68, -0.6, 0.32, 1.6],
};

export const springs = {
  default: { type: 'spring', stiffness: 180, damping: 24 },
  pop: { type: 'spring', stiffness: 320, damping: 18 },
  soft: { type: 'spring', stiffness: 120, damping: 30 },
};
