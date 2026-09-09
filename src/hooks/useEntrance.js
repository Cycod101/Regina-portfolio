'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function useEntrance({ delay = 0, y = 22, duration = 0.6 } = {}) {
  const ref = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') return;

    const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';
    el.style.opacity = '0';
    el.style.transform = `translateY(${y}px)`;
    el.style.transition = `opacity ${duration}s ${ease} ${delay}ms, transform ${duration}s ${ease} ${delay}ms`;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        el.style.opacity = '1';
        el.style.transform = 'none';
        window.setTimeout(() => {
          el.style.transition = '';
        }, delay + duration * 1000 + 50);
      },
      { threshold: 0 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay, y, duration]);

  return ref;
}