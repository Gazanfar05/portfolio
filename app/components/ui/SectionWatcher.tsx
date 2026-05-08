'use client';

import { useEffect } from 'react';

export default function SectionWatcher() {
  useEffect(() => {
    const ids = ['home', 'skills', 'projects', 'experience', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id || 'unknown';
            window.dispatchEvent(new CustomEvent('section-change', { detail: { section: id } }));
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40% 0px',
        threshold: [0.2, 0.5, 0.8],
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
