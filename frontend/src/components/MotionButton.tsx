import { motion } from 'framer-motion';
import { glowPulse, scaleIn } from '../animations/variants';
import { forwardRef } from 'react';


type MotionButtonProps = React.ComponentProps<'button'> & {
  as?: 'a' | 'button';
  href?: string;
};

export const MotionButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, MotionButtonProps>(
  ({ className = '', children, as = 'button', href, ...props }, ref) => {
    const Comp = as === 'a' ? (motion.a as any) : (motion.button as any);
    return (
      <Comp
        ref={ref}
        className={`will-change focus-ring ${className}`}
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        whileHover="pulse"
        whileTap={{ scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 320, damping: 18 }}
        href={as === 'a' ? href : undefined}
        type={as === 'button' ? 'button' : undefined}
        {...props}
      >
        <motion.span variants={glowPulse} className="inline-block">
          {children}
        </motion.span>
      </Comp>
    );
  }
);
MotionButton.displayName = 'MotionButton';
