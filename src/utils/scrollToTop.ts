/**
 * Smoothly and reliably scrolls the document to the absolute top (scrollY = 0).
 * 
 * Root Cause Fix:
 * 1. Native `window.scrollTo({ top: 0, behavior: 'smooth' })` is fire-and-forget in browsers.
 *    On tall pages (~8,400px), as the upward scroll passes sections with continuous React
 *    state updates or sticky elements unpinning (e.g. Services 3D lerp, Clients scroll tracking,
 *    Footer collapse), browser rendering engines treat the layout shifts / reflows as interruptions
 *    and abort the native smooth scroll animation prematurely before reaching top 0.
 * 2. Conflicting CSS `scroll-behavior: smooth` on <html> fights with JS programmatic steps.
 * 3. Targeting `window`, `document.documentElement`, and `document.body` simultaneously ensures
 *    compatibility across all desktop and mobile browsers.
 * 4. Fully respects `prefers-reduced-motion` by scrolling to top immediately without animation.
 */

let activeAnimationId: number | null = null;

export function scrollToTop(): void {
  if (typeof window === 'undefined') return;

  // Cancel any prior running scroll-to-top animation
  if (activeAnimationId !== null) {
    cancelAnimationFrame(activeAnimationId);
    activeAnimationId = null;
  }

  // 1. Accessibility: Instant scroll if user prefers reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const getScrollTop = (): number => {
    return (
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
    );
  };

  const setScrollTop = (y: number): void => {
    window.scrollTo(0, y);
    if (document.documentElement) document.documentElement.scrollTop = y;
    if (document.body) document.body.scrollTop = y;
  };

  const startY = getScrollTop();
  if (startY <= 0) return;

  if (prefersReduced) {
    setScrollTop(0);
    return;
  }

  // 2. Temporarily disable CSS scroll-behavior on root to prevent conflicting transitions
  const html = document.documentElement;
  const originalScrollBehavior = html.style.scrollBehavior;
  html.style.scrollBehavior = 'auto';

  // 3. Dynamic duration based on distance (bounded between 480ms and 850ms)
  const duration = Math.min(850, Math.max(480, Math.round(Math.sqrt(startY) * 9.5)));
  const startTime = performance.now();

  // Quartic easeOut curve: fast initial acceleration, silky-smooth deceleration
  const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);

  const cleanup = () => {
    window.removeEventListener('wheel', handleUserInterrupt);
    window.removeEventListener('touchstart', handleUserInterrupt);
    window.removeEventListener('keydown', handleKeyInterrupt);
    html.style.scrollBehavior = originalScrollBehavior;
    activeAnimationId = null;
  };

  const handleUserInterrupt = () => {
    if (activeAnimationId !== null) {
      cancelAnimationFrame(activeAnimationId);
    }
    cleanup();
  };

  const handleKeyInterrupt = (e: KeyboardEvent) => {
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Space'].includes(e.code)) {
      handleUserInterrupt();
    }
  };

  // Allow user to cancel with manual wheel or touch if they choose
  window.addEventListener('wheel', handleUserInterrupt, { passive: true, once: true });
  window.addEventListener('touchstart', handleUserInterrupt, { passive: true, once: true });
  window.addEventListener('keydown', handleKeyInterrupt, { passive: true, once: true });

  const step = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutQuart(progress);
    const nextY = Math.max(0, Math.round(startY * (1 - easedProgress)));

    setScrollTop(nextY);

    if (progress < 1 && nextY > 0) {
      activeAnimationId = requestAnimationFrame(step);
    } else {
      // Guaranteed final arrival at true 0
      setScrollTop(0);
      cleanup();
    }
  };

  activeAnimationId = requestAnimationFrame(step);
}
