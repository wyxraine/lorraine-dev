import React, { useEffect } from 'react';
import { X, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ReadmeWindowProps {
  isOpen: boolean;
  onClose: () => void;
  dragConstraints?: React.RefObject<any> | { top?: number; left?: number; right?: number; bottom?: number } | false;
}

export const ReadmeWindow: React.FC<ReadmeWindowProps> = ({
  isOpen,
  onClose,
  dragConstraints = { left: -300, right: 100, top: -200, bottom: 150 },
}) => {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          drag
          dragConstraints={dragConstraints}
          dragElastic={0.05}
          dragMomentum={false}
          whileDrag={{ scale: 1.02, zIndex: 50, boxShadow: '0 25px 50px -12px rgba(229, 72, 77, 0.2)' }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="fixed bottom-9 right-4 sm:right-6 z-40 w-[calc(100vw-32px)] sm:w-[400px] bg-workspace-panel border border-workspace-border hover:border-brand-red/40 rounded-2xl shadow-window overflow-hidden transition-colors duration-300 cursor-grab active:cursor-grabbing select-none touch-none"
          style={{ bottom: '2.25rem', right: undefined, left: undefined }}
        >
          {/* Window Header */}
          <div className="bg-workspace-sidebar/95 border-b border-workspace-border px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                {/* Red = close */}
                <button
                  onClick={(e) => { e.stopPropagation(); onClose(); }}
                  className="w-2.5 h-2.5 rounded-full bg-[#E5484D] inline-block hover:opacity-80 transition-opacity"
                  title="Close"
                />
                {/* Yellow = decorative */}
                <span className="w-2.5 h-2.5 rounded-full bg-[#F6AD55] inline-block" />
                {/* Green = decorative */}
                <span className="w-2.5 h-2.5 rounded-full bg-[#67D391] inline-block" />
              </div>
              <span className="font-mono text-xs text-content-primary font-medium tracking-wide">
                README.md
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={(e) => { e.stopPropagation(); onClose(); }}
                className="p-1 rounded hover:bg-workspace-card text-content-muted hover:text-content-primary transition-colors"
                title="Close"
              >
                <Minus className="w-3 h-3" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); onClose(); }}
                className="p-1 rounded hover:bg-brand-red/20 text-content-muted hover:text-brand-red transition-colors"
                title="Close"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Window Body */}
          <div className="p-6 overflow-y-auto max-h-[60vh] space-y-5 text-sm leading-relaxed font-mono">
            {/* # Hi, I'm Lorraine. */}
            <div className="space-y-1">
              <p className="text-content-muted text-xs"># Hi, I'm Lorraine.</p>
              <h2 className="text-content-primary font-bold text-base tracking-tight">
                Hi, I'm Lorraine.
              </h2>
              <p className="text-brand-red text-xs font-mono">
                Computer Science Graduate · Developer
              </p>
            </div>

            <p className="text-content-secondary text-xs leading-relaxed">
              I enjoy turning ideas into practical software — whether that's a web app, a mobile tool, or something powered by AI.
              This portfolio is where I document that journey.
            </p>

            {/* ## About this workspace */}
            <div className="space-y-1.5">
              <p className="text-content-muted text-xs">## About this workspace</p>
              <h3 className="text-content-primary font-semibold text-sm">About this workspace</h3>
              <p className="text-content-secondary text-xs leading-relaxed">
                This is my personal portfolio — a space built to feel like a developer environment
                because that's where I'm most comfortable. Tabs, file trees, floating windows and all.
              </p>
            </div>

            {/* ## Status */}
            <div className="space-y-1.5">
              <p className="text-content-muted text-xs">## Status</p>
              <h3 className="text-content-primary font-semibold text-sm">Status</h3>
              <p className="text-content-secondary text-xs leading-relaxed">
                Currently building, learning, and growing. Open to opportunities and collaborations.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-status-green animate-pulse" />
                <span className="text-status-green text-xs">available for work</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
