import React from 'react';
import { Maximize2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProfileWindow } from '../../context/ProfileWindowContext';

import type { NavigationSection } from '../../types';

interface MinimizedProfileDockProps {
  currentSection?: NavigationSection;
}

export const MinimizedProfileDock: React.FC<MinimizedProfileDockProps> = ({ currentSection = 'home' }) => {
  const { isMinimized, restore, close } = useProfileWindow();

  if (!isMinimized || currentSection !== 'home') return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 30, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 30, opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        className="fixed bottom-9 right-4 sm:right-11 z-40"
      >
        <div 
          onClick={restore}
          className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-workspace-panel/95 border border-brand-red/60 hover:border-brand-red shadow-xl hover:shadow-glow-red/20 backdrop-blur-md cursor-pointer group transition-all duration-200 select-none"
        >
          {/* Green Status indicator */}
          <span className="w-2 h-2 rounded-full bg-status-green animate-pulse shrink-0" />

          {/* Window Label */}
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-xs font-semibold text-content-primary group-hover:text-brand-red transition-colors">
              lorraine.profile
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1 ml-1.5 pl-1.5 border-l border-workspace-border/60">
            <button
              onClick={(e) => {
                e.stopPropagation();
                restore();
              }}
              className="p-1 rounded hover:bg-workspace-card text-content-muted hover:text-content-primary transition-colors"
              title="Restore / Maximize"
            >
              <Maximize2 className="w-3 h-3 text-brand-red" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              className="p-1 rounded hover:bg-workspace-card text-content-muted hover:text-content-primary transition-colors"
              title="Close"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
