import React, { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, User, Wrench, Layers, Award, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
        {/* Backdrop click to close */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-4xl bg-workspace-panel border border-workspace-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] my-auto"
        >
          {/* Window Header */}
          <div className="bg-workspace-sidebar border-b border-workspace-border px-5 py-3.5 flex items-center justify-between shrink-0 select-none">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-brand-red inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#F6AD55] inline-block" />
                <span className="w-3 h-3 rounded-full bg-status-green inline-block" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-content-muted uppercase tracking-wider">PROJECT /</span>
                <span className="font-mono text-xs font-bold text-content-primary uppercase tracking-wider">
                  {project.title}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-workspace-card text-content-secondary hover:text-content-primary transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 text-content-secondary">
            {/* Title & Banner */}
            <div className="space-y-3 pb-6 border-b border-workspace-border">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-content-primary">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-content-secondary font-medium">
                {project.subtitle}
              </p>

              {/* Metrics row if available */}
              {project.metrics && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="p-3 rounded-lg bg-workspace-card border border-workspace-border font-mono">
                      <p className="text-[10px] text-content-muted uppercase tracking-wider">{metric.label}</p>
                      <p className="text-sm font-bold text-content-primary mt-0.5">{metric.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Case Study Sections: Problem -> Role -> Built -> Tech -> Features -> Result */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* THE PROBLEM */}
              <div className="p-5 rounded-xl bg-workspace-card/60 border border-workspace-border space-y-2.5">
                <div className="flex items-center gap-2 text-brand-red font-mono text-xs font-bold uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <h3>THE PROBLEM</h3>
                </div>
                <p className="text-sm text-content-secondary leading-relaxed">
                  {project.caseStudy.problem}
                </p>
              </div>

              {/* MY ROLE */}
              <div className="p-5 rounded-xl bg-workspace-card/60 border border-workspace-border space-y-2.5">
                <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <User className="w-4 h-4 shrink-0" />
                  <h3>MY ROLE</h3>
                </div>
                <p className="text-sm text-content-secondary leading-relaxed">
                  {project.caseStudy.role}
                </p>
              </div>
            </div>

            {/* WHAT I BUILT */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-content-primary font-mono text-xs font-bold uppercase tracking-wider">
                <Layers className="w-4 h-4 text-brand-red" />
                <h3>WHAT I BUILT</h3>
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                {project.caseStudy.whatIBuilt.map((item, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-lg bg-workspace-card border border-workspace-border flex items-start gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                    <span className="text-sm text-content-secondary leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* TECHNOLOGIES */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-content-primary font-mono text-xs font-bold uppercase tracking-wider">
                <Wrench className="w-4 h-4 text-brand-red" />
                <h3>TECHNOLOGIES</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.caseStudy.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-md bg-workspace-card text-content-primary border border-workspace-border font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* KEY FEATURES */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-content-primary font-mono text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h3>KEY FEATURES</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.caseStudy.keyFeatures.map((feat, i) => (
                  <li
                    key={i}
                    className="p-3 rounded-lg bg-workspace-card/40 border border-workspace-border/80 text-xs sm:text-sm text-content-secondary flex items-start gap-2"
                  >
                    <span className="text-brand-red font-mono font-bold">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RESULT */}
            <div className="p-5 rounded-xl bg-brand-red-subtle border border-brand-red/30 space-y-2.5">
              <div className="flex items-center gap-2 text-brand-red font-mono text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4 shrink-0" />
                <h3>RESULT & IMPACT</h3>
              </div>
              <p className="text-sm text-content-primary leading-relaxed font-medium">
                {project.caseStudy.result}
              </p>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="bg-workspace-sidebar border-t border-workspace-border px-6 py-3 flex items-center justify-between shrink-0">
            <span className="text-xs font-mono text-content-muted">
              lorraine.dev / projects / {project.id}
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
