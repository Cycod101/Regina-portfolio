'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
import { motion } from 'framer-motion';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

function Cursor() {
  return (
    <motion.span
      aria-hidden="true"
      className="cursor"
      style={{ color: 'var(--accent)' }}
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 0.85, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
    >
      ▌
    </motion.span>
  );
}

export default function TerminalTyper({
  lines,
  prompt = 'PS C:\\> ',
  typingSpeed = 45,
  lineDelay = 420,
  startDelay = 250,
  restartDelay = 4000,
  loop = false,
  className = '',
}) {
  // progress === null → static full render (SSR / no-JS / reduced-motion)
  const [progress, setProgress] = useState(null);

  useIsomorphicLayoutEffect(() => {
    let cancelled = false;
    let timer;
    let li = 0;
    let ci = 0;

    const tick = () => {
      if (cancelled) return;

      if (li >= lines.length) {
        setProgress({ li, ci });
        if (loop) {
          timer = window.setTimeout(() => {
            li = 0;
            ci = 0;
            setProgress({ li, ci });
            tick();
          }, restartDelay);
        }
        return;
      }

      ci += 1;
      setProgress({ li, ci });

      if (ci >= lines[li].text.length) {
        li += 1;
        ci = 0;
        timer = window.setTimeout(tick, lineDelay);
      } else {
        timer = window.setTimeout(tick, typingSpeed);
      }
    };

    // oxlint-disable-next-line react/set-state-in-effect
    setProgress({ li: 0, ci: 0 });

    timer = window.setTimeout(tick, startDelay);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [lines, loop, typingSpeed, lineDelay, startDelay, restartDelay]);

  const typing = progress !== null;
  const activeIdx = typing
    ? Math.min(progress.li, Math.max(lines.length - 1, 0))
    : Math.max(lines.length - 1, 0);

  return (
    <div className={className} aria-live="off">
      {lines.map((line, i) => {
        const isCmd = line.kind !== 'out';
        let text = line.text;
        if (typing && i === progress.li) text = line.text.slice(0, progress.ci);
        if (typing && i > progress.li) return null;
        return (
          <span key={i} className={`terminal-line ${isCmd ? 'tl-cmd' : 'tl-out'}`}>
            {isCmd && <span className="prompt">{prompt}</span>}
            {text}
            {i === activeIdx && <Cursor />}
          </span>
        );
      })}
    </div>
  );
}