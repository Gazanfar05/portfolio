import React, { useState, useEffect } from 'react';

interface UseInViewOptions {
  threshold?: number | number[];
  triggerOnce?: boolean;
  rootMargin?: string;
}

export function useInView(options: UseInViewOptions = {}) {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (options.triggerOnce) {
          observer.unobserve(ref);
        }
      } else if (!options.triggerOnce) {
        setInView(false);
      }
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px',
    });

    observer.observe(ref);
    return () => observer.unobserve(ref);
  }, [ref, options]);

  return { ref: setRef, inView };
}
