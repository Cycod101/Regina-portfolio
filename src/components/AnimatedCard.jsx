'use client';

import { motion } from 'framer-motion';
import useEntrance from '../hooks/useEntrance';

export default function AnimatedCard({
  delay = 0,
  glow = 'rgba(61, 220, 151, 0.35)',
  lift = -6,
  className,
  style,
  children,
  ...rest
}) {
  const ref = useEntrance({ delay, y: 22 });

  return (
    <motion.div
      ref={ref}
      {...rest}
      className={className}
      style={{ '--card-glow': glow, ...style }}
      whileHover={{
        y: lift,
        scale: 1.01,
        boxShadow: '0 24px 60px -24px var(--card-glow)',
        transition: { type: 'spring', stiffness: 320, damping: 26 },
      }}
      whileTap={{
        scale: 0.98,
        transition: { type: 'spring', stiffness: 420, damping: 22 },
      }}
    >
      {children}
    </motion.div>
  );
}