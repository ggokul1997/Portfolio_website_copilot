import { motion } from 'framer-motion';
import { scaleIn, tiltHover } from '../animations/variants';
import { useTilt3D } from '../hooks/useTilt3D';
import { forwardRef } from 'react';

export const MotionCard = forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className = '', children, ...props }, ref) => {
    const tiltRef = useTilt3D();
    const MotionDiv = motion.div as any;
    return (
      <MotionDiv
        ref={(node: HTMLDivElement) => {
          tiltRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as any).current = node;
        }}
        className={`glass will-change ${className}`}
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
        {...props}
      >
        {children}
      </MotionDiv>
    );
  }
);
MotionCard.displayName = 'MotionCard';
