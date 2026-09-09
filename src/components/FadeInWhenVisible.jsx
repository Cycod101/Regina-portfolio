'use client';

import useEntrance from '../hooks/useEntrance';

export default function FadeInWhenVisible({ delay = 0, y = 22, className, children, ...rest }) {
  const ref = useEntrance({ delay, y });
  return (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  );
}