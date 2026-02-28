'use client';

import { MouseEvent, useCallback, useEffect, useRef } from 'react';

type UseScrollAnimatorOptions = {
  getStickyHeaderHeight?: () => number;
  extraOffset?: number;
};

const lerp = (startValue: number, endValue: number, amount: number) => {
  return startValue + (endValue - startValue) * amount;
};

const easingCurve = (progress: number) => {
  return 1 - Math.pow(1 - progress, 3);
};

export function useScrollAnimator(options: UseScrollAnimatorOptions = {}) {
  const { getStickyHeaderHeight, extraOffset = 12 } = options;
  const animationFrameIdRef = useRef<number | null>(null);

  const animateScrollTo = useCallback((finalYPosition: number) => {
    if (animationFrameIdRef.current !== null) {
      cancelAnimationFrame(animationFrameIdRef.current);
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      window.scrollTo({ top: finalYPosition, behavior: 'auto' });
      return;
    }

    const startYPosition = window.scrollY;
    const travelDistance = Math.abs(finalYPosition - startYPosition);
    const duration = Math.min(1200, Math.max(500, travelDistance * 0.8));
    const startTime = performance.now();

    const frame = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const rawProgress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easingCurve(rawProgress);
      const nextYPosition = lerp(startYPosition, finalYPosition, easedProgress);

      window.scrollTo({ top: nextYPosition, behavior: 'auto' });

      if (rawProgress < 1) {
        animationFrameIdRef.current = requestAnimationFrame(frame);
      } else {
        animationFrameIdRef.current = null;
      }
    };

    animationFrameIdRef.current = requestAnimationFrame(frame);
  }, []);

  const handleHashNavigation = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith('#')) {
        return;
      }

      event.preventDefault();

      if (href === '#') {
        animateScrollTo(0);
        window.history.replaceState(null, '', '#');
        return;
      }

      const targetElement = document.querySelector(href) as HTMLElement | null;
      if (!targetElement) {
        return;
      }

      const stickyHeaderHeight = getStickyHeaderHeight?.() ?? 0;
      const rawTargetYPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - stickyHeaderHeight - extraOffset;
      const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
      const clampedTargetYPosition = Math.max(0, Math.min(rawTargetYPosition, maxScrollY));

      animateScrollTo(clampedTargetYPosition);
      window.history.replaceState(null, '', href);
    },
    [animateScrollTo, extraOffset, getStickyHeaderHeight]
  );

  useEffect(() => {
    return () => {
      if (animationFrameIdRef.current !== null) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  return { animateScrollTo, handleHashNavigation };
}
