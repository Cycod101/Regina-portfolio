'use client';

import { useEffect, useRef } from 'react';

const DEFAULT_PALETTE = ['rgba(61, 220, 151, 0.95)', 'rgba(34, 211, 238, 0.9)'];
const DEFAULT_HALOS = ['rgba(61, 220, 151, 0.16)', 'rgba(34, 211, 238, 0.14)'];

export default function NetworkCanvas({
  className = '',
  speed = 0.25,
  density = 1.1,
  maxDistance = 150,
  palette = DEFAULT_PALETTE,
  halos = DEFAULT_HALOS,
  linkColor = 'rgba(61, 220, 151, 1)',
  zIndex = 0,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let nodes = [];
    let raf = 0;
    let running = true;

    const seed = () => {
      const count = Math.min(
        150,
        Math.max(24, Math.round(((width * height) / 10000) * density)),
      );
      nodes = Array.from({ length: count }, () => {
        const i = Math.floor(Math.random() * palette.length);
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * speed * 2,
          vy: (Math.random() - 0.5) * speed * 2,
          r: Math.random() * 1.6 + 0.8,
          core: palette[i],
          halo: halos[i] ?? halos[0],
        };
      });
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < maxDistance * maxDistance) {
            ctx.globalAlpha = (1 - Math.sqrt(d2) / maxDistance) * 0.28;
            ctx.strokeStyle = linkColor;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      for (const n of nodes) {
        ctx.fillStyle = n.halo;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = n.core;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const frame = () => {
      if (!running) return;
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -30) n.x = width + 30;
        else if (n.x > width + 30) n.x = -30;
        if (n.y < -30) n.y = height + 30;
        else if (n.y > height + 30) n.y = -30;
      }
      draw();
      raf = requestAnimationFrame(frame);
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        raf = requestAnimationFrame(frame);
      }
    };

    resize();

    raf = requestAnimationFrame(frame);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [speed, density, maxDistance, palette, halos, linkColor]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
}