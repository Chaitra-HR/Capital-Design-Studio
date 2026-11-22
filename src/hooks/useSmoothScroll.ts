import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

let instance: Lenis | null = null;

const easeInOutQuart = (t: number) => (t < 0.5 ? 8 * t ** 4 : 1 - (-2 * t + 2) ** 4 / 2);

/** Space the floating navbar takes up, so sections land just below it */
const headerOffset = () =>
  parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) *
    parseFloat(getComputedStyle(document.documentElement).fontSize) || 84;

/**
 * Glides to a section on the page by its id, using the same eased scroll as
 * the rest of the site (or a plain jump for reduced motion).
 */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;
  // Sections land just below the navbar; a target marked data-scroll="center"
  // (the hero previews) is centred in the space under the navbar instead
  const header = headerOffset();
  const offset =
    el.dataset.scroll === 'center'
      ? -(header + Math.max(0, (window.innerHeight - header - el.offsetHeight) / 2))
      : -header;
  if (instance) {
    // Longer trips take a little longer; ease in and out so it glides
    // rather than jumping off the mark
    const distance = Math.abs(el.getBoundingClientRect().top + offset);
    const duration = Math.min(2.2, 1.1 + distance / 4000);
    instance.scrollTo(el, { offset, duration, easing: easeInOutQuart });
  } else {
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + offset });
  }
  return true;
}

/**
 * Inertia ("buttery") wheel scrolling, as on Design Me (Framer + Lenis).
 * Touch devices keep native scrolling; reduced-motion users get native scroll.
 */
export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      autoRaf: true,
    });
    instance = lenis;

    return () => {
      lenis.destroy();
      instance = null;
    };
  }, []);
}
