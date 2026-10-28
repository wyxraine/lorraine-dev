import { useSyncExternalStore } from 'react';
import { useReducedMotion, type TargetAndTransition, type Variants } from 'framer-motion';

const subscribeMediaQuery = (query: string) => (callback: () => void) => {
  if (typeof window === 'undefined') return () => {};
  const mq = window.matchMedia(query);
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
};

/**
 * Hook to provide responsive and accessibility-aware motion settings.
 */
export function useAnimationConfig() {
  const prefersReduced = useReducedMotion();
  
  const canHover = useSyncExternalStore(
    subscribeMediaQuery('(hover: hover) and (pointer: fine)'),
    () => (typeof window !== 'undefined' ? window.matchMedia('(hover: hover) and (pointer: fine)').matches : false),
    () => false
  );

  const isMobile = useSyncExternalStore(
    subscribeMediaQuery('(max-width: 760px)'),
    () => (typeof window !== 'undefined' ? window.matchMedia('(max-width: 760px)').matches : false),
    () => false
  );

  return {
    prefersReducedMotion: Boolean(prefersReduced),
    canHover,
    isMobile,
  };
}

/**
 * Standard page/section entrance animation:
 * Smoothly fades in while moving upward 12–16px (10px on mobile).
 */
export const getPageEntrance = (prefersReduced: boolean, isMobile: boolean) => ({
  initial: prefersReduced ? { opacity: 0 } : { opacity: 0, y: isMobile ? 10 : 14 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: prefersReduced ? 0.15 : (isMobile ? 0.25 : 0.35),
    ease: 'easeOut' as const,
  },
});

/**
 * Viewport entrance effect for sections and cards that enter view on scroll.
 * Uses Intersection Observer under the hood and triggers ONLY ONCE.
 */
export const getFadeUpOnce = (prefersReduced: boolean, isMobile: boolean, delay: number = 0) => ({
  initial: prefersReduced ? { opacity: 0 } : { opacity: 0, y: isMobile ? 10 : 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: isMobile ? '0px' : '-20px' },
  transition: {
    duration: prefersReduced ? 0.15 : (isMobile ? 0.25 : 0.35),
    delay: prefersReduced ? 0 : delay,
    ease: 'easeOut' as const,
  },
});

/**
 * Subtle desktop card hover lift (max 3px).
 * Disabled on touch/mobile devices to keep interactions natural and prevent sticky hovers.
 */
export const getCardHover = (canHover: boolean, prefersReduced: boolean): TargetAndTransition | undefined => {
  if (!canHover || prefersReduced) return undefined;
  return {
    y: -3,
    transition: { duration: 0.2, ease: 'easeOut' },
  };
};

/**
 * Hero staggered container variants.
 */
export const getHeroContainerVariants = (prefersReduced: boolean): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: prefersReduced ? 0 : 0.08,
      delayChildren: prefersReduced ? 0 : 0.04,
    },
  },
});

/**
 * Hero staggered child item variants.
 */
export const getHeroItemVariants = (prefersReduced: boolean, isMobile: boolean): Variants => ({
  hidden: prefersReduced ? { opacity: 0 } : { opacity: 0, y: isMobile ? 10 : 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: prefersReduced ? 0.15 : (isMobile ? 0.25 : 0.35),
      ease: 'easeOut' as const,
    },
  },
});
