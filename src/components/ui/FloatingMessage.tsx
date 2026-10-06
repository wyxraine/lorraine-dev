import React, { useState } from 'react';
import { Minus, X, Maximize2, Square, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingMessageProps {
  onReply?: () => void;
}

export const FloatingMessage: React.FC<FloatingMessageProps> = ({ onReply }) => {
  const [state, setState] = useState<'expanded' | 'minimized' | 'closed'>(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 760) {
      return 'minimized';
    }
    return 'expanded';
  });

  if (state === 'closed') return null;

  return (
    <div className="fixed bottom-9 right-4 sm:right-6 z-40">
      <AnimatePresence mode="wait">
        {state === 'minimized' ? (
          <motion.div
            key="minimized"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div 
              onClick={() => setState('expanded')}
              aria-label="Open message"
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-workspace-panel/95 border border-brand-red/60 hover:border-brand-red shadow-xl hover:shadow-glow-red/20 backdrop-blur-md cursor-pointer group transition-colors duration-200 select-none"
            >
              {/* Green Status indicator */}
              <span className="w-2 h-2 rounded-full bg-status-green animate-pulse shrink-0" />

              {/* Window Label */}
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-xs font-semibold text-content-primary group-hover:text-brand-red transition-colors">
                  lorraine.message
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1 ml-1.5 pl-1.5 border-l border-workspace-border/60">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setState('expanded');
                  }}
                  className="p-1 rounded hover:bg-workspace-card text-content-muted hover:text-content-primary transition-colors"
                  title="Restore / Maximize"
                  aria-label="Open message"
                >
                  <Maximize2 className="w-3 h-3 text-brand-red" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setState('closed');
                  }}
                  className="p-1 rounded hover:bg-workspace-card text-content-muted hover:text-content-primary transition-colors"
                  title="Close"
                  aria-label="Close message"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-[calc(100vw-32px)] max-w-[360px] sm:w-[360px] bg-workspace-panel border border-workspace-border hover:border-brand-red/40 rounded-2xl shadow-window overflow-hidden transition-colors duration-300 group select-none"
          >
            {/* Window Header */}
            <div className="bg-workspace-sidebar/95 border-b border-workspace-border px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setState('closed');
                    }}
                    className="w-2.5 h-2.5 rounded-full bg-[#E5484D] inline-block hover:opacity-80 transition-opacity"
                    title="Close"
                    aria-label="Close message"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setState('minimized');
                    }}
                    className="w-2.5 h-2.5 rounded-full bg-[#F6AD55] inline-block hover:opacity-80 transition-opacity"
                    title="Minimize"
                    aria-label="Minimize message"
                  />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#67D391] inline-block" />
                </div>
                <span className="font-mono text-xs text-content-primary font-medium tracking-wide">
                  lorraine.message
                </span>
              </div>

              <div className="flex items-center gap-1 text-[11px] font-mono text-content-muted">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setState('minimized');
                  }}
                  className="p-1 rounded hover:bg-workspace-card text-content-muted hover:text-content-primary transition-colors"
                  title="Minimize"
                  aria-label="Minimize message"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="p-1 rounded hover:bg-workspace-card text-content-muted hover:text-content-primary transition-colors"
                  title="Maximize"
                >
                  <Square className="w-2.5 h-2.5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setState('closed');
                  }}
                  className="p-1 rounded hover:bg-brand-red/20 text-content-muted hover:text-brand-red transition-colors"
                  title="Close"
                  aria-label="Close message"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Window Body */}
            <div className="p-6 space-y-5">
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-content-primary">
                  Kumusta! I'm Lorraine. 👋
                </h3>
                <p className="text-sm text-content-secondary">
                  Want to get in touch?
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={onReply}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-red text-white hover:bg-brand-red-light font-mono text-xs font-semibold shadow-sm hover:shadow-glow-red transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-red/50"
                >
                  <span>Reply</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

