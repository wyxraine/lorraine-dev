import React, { useState } from 'react';
import { MapPin, Minus, X, Square } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioMeta } from '../../data/portfolioData';
import { useProfileWindow } from '../../context/ProfileWindowContext';

interface ProfileWindowProps {
  dragConstraints?: React.RefObject<any> | { top?: number; left?: number; right?: number; bottom?: number } | false;
}

export const ProfileWindow: React.FC<ProfileWindowProps> = ({
  dragConstraints = { left: -250, right: 250, top: -120, bottom: 200 }
}) => {
  const [imgError, setImgError] = useState(false);
  const { isMinimized, isClosed, minimize, close } = useProfileWindow();

  if (isMinimized || isClosed) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        drag
        dragConstraints={dragConstraints}
        dragElastic={0.05}
        dragMomentum={false}
        whileDrag={{ scale: 1.02, zIndex: 50, boxShadow: '0 25px 50px -12px rgba(229, 72, 77, 0.3)' }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        whileHover={{ y: -4 }}
        className="fixed bottom-9 right-4 sm:right-11 z-40 w-[calc(100vw-32px)] max-w-[360px] sm:w-[360px] bg-workspace-panel border border-workspace-border hover:border-brand-red/40 rounded-2xl shadow-window overflow-hidden transition-colors duration-300 group cursor-grab active:cursor-grabbing select-none touch-none"
      >
        {/* Window Header */}
        <div className="bg-workspace-sidebar/95 border-b border-workspace-border px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  close();
                }}
                className="w-2.5 h-2.5 rounded-full bg-[#E5484D] inline-block hover:opacity-80 transition-opacity"
                title="Close"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  minimize();
                }}
                className="w-2.5 h-2.5 rounded-full bg-[#F6AD55] inline-block hover:opacity-80 transition-opacity"
                title="Minimize"
              />
              <span className="w-2.5 h-2.5 rounded-full bg-[#67D391] inline-block" />
            </div>
            <span className="font-mono text-xs text-content-primary font-medium tracking-wide">
              lorraine.profile
            </span>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-mono text-content-muted">
            {/* Interactive Window Control Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                minimize();
              }}
              className="p-1 rounded hover:bg-workspace-card text-content-muted hover:text-content-primary transition-colors"
              title="Minimize to bottom dock"
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
                close();
              }}
              className="p-1 rounded hover:bg-brand-red/20 text-content-muted hover:text-brand-red transition-colors"
              title="Close"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Window Body */}
        <div className="p-6 flex flex-col items-center text-center">
          {/* Large Portrait Frame - Seamless borderless */}
          <div className="relative w-full aspect-[4/4.6] max-w-[300px] rounded-xl overflow-hidden bg-gradient-to-b from-[#222222] to-[#161616] p-1 flex flex-col items-center justify-center shadow-inner">
            <div className="relative w-full h-full rounded-lg overflow-hidden bg-[#1c1c1c] flex flex-col items-center justify-center">
              
              {/* If user uploaded photo exists, show it with optimal framing */}
              {!imgError ? (
                <img
                  src={portfolioMeta.photoUrl}
                  alt="Josephine Lorraine Ochoa"
                  className="w-full h-full object-cover object-[center_35%] scale-125 transition-transform duration-500 group-hover:scale-130 pointer-events-none"
                  onError={() => setImgError(true)}
                />
              ) : (
                /* Fallback Styled Avatar Graphic */
                <div className="relative w-full h-full bg-gradient-to-tr from-[#1a1a1a] via-[#242424] to-[#2e1d20] flex flex-col items-center justify-center p-4">
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]" />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-b from-[#2d2d2d] to-[#1d1d1d] flex items-center justify-center shadow-xl relative overflow-hidden mb-3">
                      <svg className="w-24 h-24 text-content-secondary/80" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                      </svg>
                      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Identity Details */}
          <div className="mt-5 space-y-1.5">
            <h2 className="text-2xl font-bold tracking-tight text-content-primary">
              Josephine Lorraine Ochoa
            </h2>
            {/* Location */}
            <p className="text-xs text-content-muted font-mono flex items-center justify-center gap-1 pt-0.5">
              <MapPin className="w-3.5 h-3.5 text-content-secondary" />
              Cavite, Philippines
            </p>
          </div>

          {/* Pillar Tags: AI · WEB · MOBILE */}
          <div className="mt-4 pt-1 w-full flex items-center justify-center gap-2">
            <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-lg bg-workspace-card font-mono text-xs font-semibold text-content-primary">
              <span className="text-brand-red">AI</span>
              <span className="text-content-muted font-normal">·</span>
              <span className="text-content-primary">WEB</span>
              <span className="text-content-muted font-normal">·</span>
              <span className="text-blue-400">MOBILE</span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
