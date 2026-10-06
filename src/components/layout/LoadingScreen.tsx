import { useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface LoadingScreenProps {
  isVisible: boolean;
}

export function LoadingScreen({ isVisible }: LoadingScreenProps) {
  const prefersReducedMotion = useReducedMotion();

  // Prevent body scrolling while loader overlay is active
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  // EXACTLY 8 tiles forming the classic rotated 45-degree diamond shifting grid.
  // Tile 1 is the subtle red accent (#E5484D), Tiles 2-8 are primary off-white (#F2F2F2).
  const tiles = [
    { id: 1, isAccent: true, delay: '0s', staticPos: 'translate(0, 0)' },
    { id: 2, isAccent: false, delay: '-0.4s', staticPos: 'translate(var(--stride), 0)' },
    { id: 3, isAccent: false, delay: '-0.8s', staticPos: 'translate(calc(var(--stride) * 2), 0)' },
    { id: 4, isAccent: false, delay: '-1.2s', staticPos: 'translate(calc(var(--stride) * 2), var(--stride))' },
    { id: 5, isAccent: false, delay: '-1.6s', staticPos: 'translate(calc(var(--stride) * 2), calc(var(--stride) * 2))' },
    { id: 6, isAccent: false, delay: '-2.0s', staticPos: 'translate(var(--stride), calc(var(--stride) * 2))' },
    { id: 7, isAccent: false, delay: '-2.4s', staticPos: 'translate(0, calc(var(--stride) * 2))' },
    { id: 8, isAccent: false, delay: '-2.8s', staticPos: 'translate(0, var(--stride))' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.25 : 0.4, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: '#111111',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
          aria-hidden="true"
        >
          {/* CSS Keyframes & Geometry for 8-Square Rotated Diamond Loader */}
          <style>{`
            .loader-grid {
              --size: 28px;
              --stride: 32px;
              position: relative;
              width: calc(var(--stride) * 3);
              height: calc(var(--stride) * 3);
              transform: rotate(45deg);
            }

            @media (max-width: 640px) {
              .loader-grid {
                --size: 21px;
                --stride: 24px;
              }
            }

            .loader-square {
              position: absolute;
              top: 0;
              left: 0;
              width: var(--size);
              height: var(--size);
              margin: calc((var(--stride) - var(--size)) / 2);
              border-radius: 2px;
              will-change: transform;
            }

            .loader-square-active {
              animation: square-anim 3.2s infinite ease-in-out;
            }

            @keyframes square-anim {
              0%, 100% {
                transform: translate(0, 0);
              }
              12.5% {
                transform: translate(var(--stride), 0);
              }
              25% {
                transform: translate(calc(var(--stride) * 2), 0);
              }
              37.5% {
                transform: translate(calc(var(--stride) * 2), var(--stride));
              }
              50% {
                transform: translate(calc(var(--stride) * 2), calc(var(--stride) * 2));
              }
              62.5% {
                transform: translate(var(--stride), calc(var(--stride) * 2));
              }
              75% {
                transform: translate(0, calc(var(--stride) * 2));
              }
              87.5% {
                transform: translate(0, var(--stride));
              }
            }
          `}</style>

          {/* Centered Content Composition */}
          <div className="flex flex-col items-center justify-center select-none py-6">
            {/* 45-Degree Rotated 8-Square Geometric Loader */}
            <div className="loader-grid my-4 sm:my-6">
              {tiles.map((tile) => (
                <div
                  key={tile.id}
                  className={`loader-square ${
                    prefersReducedMotion ? '' : 'loader-square-active'
                  }`}
                  style={{
                    backgroundColor: tile.isAccent ? '#E5484D' : '#F2F2F2',
                    animationDelay: prefersReducedMotion ? undefined : tile.delay,
                    transform: prefersReducedMotion ? tile.staticPos : undefined,
                  }}
                />
              ))}
            </div>

            {/* Typography Branding */}
            <div className="flex flex-col items-center text-center space-y-2 mt-10 sm:mt-12">
              {/* LORRAINE.DEV Wordmark */}
              <span
                style={{
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  color: '#F2F2F2',
                  textTransform: 'uppercase',
                  lineHeight: 1,
                }}
              >
                LORRAINE.DEV
              </span>

              {/* PERSONAL PORTFOLIO Subtitle */}
              <span
                style={{
                  fontFamily: 'monospace',
                  fontSize: '0.6875rem',
                  fontWeight: 400,
                  letterSpacing: '0.25em',
                  color: '#A7A7A7',
                  textTransform: 'uppercase',
                  lineHeight: 1,
                }}
              >
                PERSONAL PORTFOLIO
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
