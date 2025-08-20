import { MotionConfig } from 'framer-motion';
import { ReactNode } from 'react';
import { easings, springs } from './easings';

export function MotionConfigProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig
      transition={{
        duration: 0.6,
        ease: easings.inOut,
        ...springs.default,
      }}
      reducedMotion="user"
    >
      {children}
    </MotionConfig>
  );
}
