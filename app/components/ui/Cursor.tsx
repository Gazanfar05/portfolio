'use client';

import React, { useEffect, useRef } from 'react';

export default function Cursor() {
  const dot = useRef<HTMLDivElement | null>(null);
  const ring = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const q = (s: string) => document.querySelector(s) as HTMLElement | null;
    const d = dot.current;
    const r = ring.current;
    if (!d || !r) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      d.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      r.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    animate();

    // Magnetic buttons
    const magnets = Array.from(document.querySelectorAll('.magnetic')) as HTMLElement[];
    const onMagnetMove = (ev: MouseEvent) => {
      const el = ev.currentTarget as HTMLElement;
      const rect = el.getBoundingClientRect();
      const x = (ev.clientX - rect.left - rect.width / 2) / 8;
      const y = (ev.clientY - rect.top - rect.height / 2) / 8;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const resetMagnet = (ev: Event) => {
      const el = ev.currentTarget as HTMLElement;
      el.style.transform = '';
    };

    magnets.forEach((m) => {
      m.addEventListener('mousemove', onMagnetMove);
      m.addEventListener('mouseleave', resetMagnet);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      magnets.forEach((m) => {
        m.removeEventListener('mousemove', onMagnetMove);
        m.removeEventListener('mouseleave', resetMagnet);
      });
    };
  }, []);

  return (
    <>
      <div ref={dot} className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 opacity-100">
        <div className="h-2 w-2 rounded-full bg-teal-300/90 shadow-[0_0_12px_rgba(13,148,136,0.6)]" />
      </div>
      <div ref={ring} className="pointer-events-none fixed z-[9998] -translate-x-1/2 -translate-y-1/2">
        <div className="h-8 w-8 rounded-full border border-teal-300/20 backdrop-blur-sm" />
      </div>
    </>
  );
}
