import React, { createContext, useContext, useEffect, useState, useRef, useCallback } from 'react';
import { flushSync } from 'react-dom';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  isTransitioning?: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('lorraine-portfolio-theme') as Theme | null;
    return saved === 'light' ? 'light' : 'dark';
  });

  const [isTransitioning, setIsTransitioning] = useState(false);
  const isTransitioningRef = useRef(false);
  const activeOverlayRef = useRef<HTMLDivElement | null>(null);

  // Sync HTML root classes and localStorage whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('lorraine-portfolio-theme', theme);
  }, [theme]);

  // Clean up any lingering overlay if unmounted
  useEffect(() => {
    return () => {
      if (activeOverlayRef.current) {
        activeOverlayRef.current.remove();
        activeOverlayRef.current = null;
      }
    };
  }, []);

  const triggerRadialReveal = useCallback((targetTheme: Theme) => {
    // 1. Respect prefers-reduced-motion: switch instantly without animation
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const root = document.documentElement;
      if (targetTheme === 'dark') {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.add('light');
        root.classList.remove('dark');
      }
      localStorage.setItem('lorraine-portfolio-theme', targetTheme);
      setThemeState(targetTheme);
      return;
    }

    // 2. Prevent overlapping transitions, race conditions, and rapid click spam
    if (isTransitioningRef.current) {
      return;
    }

    isTransitioningRef.current = true;
    setIsTransitioning(true);

    // Calculate dynamic radius to guarantee full coverage of the viewport from either corner
    const w = window.innerWidth;
    const h = window.innerHeight;
    const maxRadius = Math.ceil(Math.hypot(w, h)) + 20;

    // Direction & Origin:
    // - Switching to Light Mode: starts at bottom-right corner (100% 100%)
    // - Switching to Dark Mode: starts at top-left corner (0% 0%)
    const origin = targetTheme === 'light' ? '100% 100%' : '0% 0%';

    // Check if View Transitions API is available
    const doc = document as Document & {
      startViewTransition?: (callback: () => void | Promise<void>) => {
        ready: Promise<void>;
        finished: Promise<void>;
        updateCallbackDone: Promise<void>;
      };
    };

    if (typeof doc.startViewTransition === 'function') {
      try {
        const transition = doc.startViewTransition(() => {
          // Synchronously flush DOM update so browser captures the new theme layer
          flushSync(() => {
            setThemeState(targetTheme);
          });
          const root = document.documentElement;
          if (targetTheme === 'dark') {
            root.classList.add('dark');
            root.classList.remove('light');
          } else {
            root.classList.add('light');
            root.classList.remove('dark');
          }
          localStorage.setItem('lorraine-portfolio-theme', targetTheme);
        });

        transition.ready
          .then(() => {
            // Animate ::view-transition-new(root) so the new theme expands outward from the corner
            // while ::view-transition-old(root) remains completely visible underneath
            const anim = document.documentElement.animate(
              {
                clipPath: [
                  `circle(0px at ${origin})`,
                  `circle(${maxRadius}px at ${origin})`,
                ],
              },
              {
                duration: 780,
                easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
                pseudoElement: '::view-transition-new(root)',
              }
            );

            const done = () => {
              isTransitioningRef.current = false;
              setIsTransitioning(false);
            };
            anim.onfinish = done;
            anim.oncancel = done;
          })
          .catch(() => {
            isTransitioningRef.current = false;
            setIsTransitioning(false);
          });

        transition.finished
          .finally(() => {
            isTransitioningRef.current = false;
            setIsTransitioning(false);
          });

        return;
      } catch {
        // Fallback to layered overlay if startViewTransition encounters an issue
      }
    }

    // 3. Layered Overlay Fallback (for environments without View Transitions API):
    // Keeps old theme completely visible underneath, expanding the new theme circle from the corner,
    // and commits the new theme globally ONLY after the circle completes its expansion.
    if (activeOverlayRef.current) {
      activeOverlayRef.current.remove();
      activeOverlayRef.current = null;
    }

    const overlayBgColor = targetTheme === 'light' ? '#f5f6f8' : '#111111';
    const overlay = document.createElement('div');
    overlay.className = 'theme-reveal-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    Object.assign(overlay.style, {
      position: 'fixed',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: overlayBgColor,
      pointerEvents: 'none',
      zIndex: '99999',
      clipPath: `circle(0px at ${origin})`,
      WebkitClipPath: `circle(0px at ${origin})`,
      willChange: 'clip-path, opacity',
    });

    document.body.appendChild(overlay);
    activeOverlayRef.current = overlay;

    let isCleanedUp = false;
    const finishAndCleanup = () => {
      if (isCleanedUp) return;
      isCleanedUp = true;

      // Commit new theme ONLY after the reveal animation finishes
      const root = document.documentElement;
      if (targetTheme === 'dark') {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.add('light');
        root.classList.remove('dark');
      }
      localStorage.setItem('lorraine-portfolio-theme', targetTheme);
      setThemeState(targetTheme);

      const fadeAnimation = overlay.animate(
        [{ opacity: 1 }, { opacity: 0 }],
        { duration: 120, easing: 'ease-out', fill: 'forwards' }
      );

      const finalize = () => {
        if (overlay.parentNode) {
          overlay.remove();
        }
        if (activeOverlayRef.current === overlay) {
          activeOverlayRef.current = null;
        }
        isTransitioningRef.current = false;
        setIsTransitioning(false);
      };

      fadeAnimation.onfinish = finalize;
      fadeAnimation.oncancel = finalize;
      setTimeout(finalize, 250);
    };

    try {
      const animation = overlay.animate(
        [
          { clipPath: `circle(0px at ${origin})` },
          { clipPath: `circle(${maxRadius}px at ${origin})` },
        ],
        {
          duration: 780,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          fill: 'forwards',
        }
      );

      animation.onfinish = finishAndCleanup;
      animation.oncancel = finishAndCleanup;

      setTimeout(() => {
        if (!isCleanedUp) finishAndCleanup();
      }, 950);
    } catch {
      finishAndCleanup();
    }
  }, []);

  const toggleTheme = useCallback(() => {
    if (isTransitioningRef.current) return;
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    triggerRadialReveal(nextTheme);
  }, [theme, triggerRadialReveal]);

  const setTheme = useCallback((newTheme: Theme) => {
    if (newTheme === theme) return;
    if (isTransitioningRef.current) return;
    triggerRadialReveal(newTheme);
  }, [theme, triggerRadialReveal]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
