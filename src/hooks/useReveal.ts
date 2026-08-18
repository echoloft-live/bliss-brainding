import { useEffect } from 'react';

/**
 * Observes all elements with `.reveal` class inside the given ref (or document)
 * and adds `.in` once they enter the viewport. Once revealed, they stay revealed.
 */
export function useReveal(root: React.RefObject<HTMLElement | null> | null = null) {
  useEffect(() => {
    const scope = root?.current ?? document;
    const els = scope.querySelectorAll<HTMLElement>('.reveal');

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [root]);
}
