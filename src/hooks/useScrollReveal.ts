import { useEffect } from 'react';

/**
 * Blur-to-focus reveal for `[data-reveal]` elements (Design Me / Framer style).
 *
 * - Browsers with CSS scroll-driven animations get a reveal that is scrubbed by
 *   the scroll position (`reveal-scroll` class, pure CSS).
 * - Others fall back to an IntersectionObserver-triggered transition
 *   (`reveal-ready` class).
 * Content is only hidden once this runs, so nothing disappears without JS.
 * `--reveal-i` on an element offsets it for a stagger. Re-scans when `key` changes.
 */
export function useScrollReveal(key: unknown) {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    if (typeof CSS !== 'undefined' && CSS.supports('animation-timeline: view()')) {
      root.classList.add('reveal-scroll');
      return;
    }

    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-revealed)');
    if (!('IntersectionObserver' in window)) return;

    root.classList.add('reveal-ready');
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);
}
