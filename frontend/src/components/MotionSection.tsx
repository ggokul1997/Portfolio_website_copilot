import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations/variants';
import { useInViewOnce } from '../hooks/useInViewOnce';
import { ReactNode } from 'react';

interface MotionSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  stagger?: boolean;
}

export function MotionSection({ children, className = '', as = 'section', stagger = false, ...rest }: MotionSectionProps) {
  const [ref, inView] = useInViewOnce({ threshold: 0.15 });
  const Comp = motion(as) as any;
  return (
    <Comp
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={stagger ? staggerContainer() : fadeInUp}
      viewport={{ once: true, amount: 0.15 }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
