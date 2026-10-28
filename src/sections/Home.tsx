import React, { useRef, useState } from 'react';
import { 
  Sparkles, 
  Code2, 
  Smartphone, 
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { ProfileWindow } from '../components/windows/ProfileWindow';
import { ReadmeWindow } from '../components/windows/ReadmeWindow';
import { Button } from '../components/ui/Button';
import type { NavigationSection } from '../types';
import { 
  useAnimationConfig, 
  getPageEntrance, 
  getFadeUpOnce, 
  getHeroContainerVariants, 
  getHeroItemVariants, 
  getCardHover 
} from '../utils/motion';

interface HomeProps {
  onNavigate: (section: NavigationSection) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const [isReadmeOpen, setIsReadmeOpen] = useState(false);
  const { prefersReducedMotion, isMobile, canHover } = useAnimationConfig();

  return (
    <motion.div
      {...getPageEntrance(prefersReducedMotion, isMobile)}
      className="space-y-16 sm:space-y-20 pb-12 relative"
    >
      {/* Hero Section - occupies viewport height minus top bar + padding */}
      <section 
        ref={heroContainerRef}
        className="flex flex-col justify-center relative min-h-[calc(100vh-110px)] md:min-h-[calc(100vh-200px)] py-8"
      >
        {/* Introduction & Call to Actions */}
        <motion.div
          variants={getHeroContainerVariants(prefersReducedMotion)}
          initial="hidden"
          animate="visible"
          className="max-w-2xl space-y-5"
        >
          {/* Main Heading */}
          <motion.div
            variants={getHeroItemVariants(prefersReducedMotion, isMobile)}
            className="space-y-2.5"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-content-primary leading-[1.1]">
              Hi, I'm Lorraine.
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={getHeroItemVariants(prefersReducedMotion, isMobile)}
            className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-xl"
          >
            I build practical digital experiences across web, mobile, and AI-powered applications.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={getHeroItemVariants(prefersReducedMotion, isMobile)}
            className="flex flex-wrap items-center gap-4 pt-3"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => onNavigate('projects')}
            >
              EXPLORE MY WORK
            </Button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button
                variant="secondary"
                size="lg"
              >
                VIEW RESUME
              </Button>
            </a>
          </motion.div>

          {/* README.md subtle trigger */}
          <motion.div variants={getHeroItemVariants(prefersReducedMotion, isMobile)}>
            <button
              onClick={() => setIsReadmeOpen(true)}
              className="flex items-center gap-1.5 font-mono text-xs text-content-muted hover:text-brand-red transition-colors duration-150 pt-1 group"
            >
              <span>README.md</span>
              <span className="text-content-muted group-hover:text-brand-red transition-colors duration-150">→</span>
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Floating lorraine.profile window at fixed bottom-right position */}
      <ProfileWindow dragConstraints={heroContainerRef} />

      {/* README.md floating window */}
      <ReadmeWindow
        isOpen={isReadmeOpen}
        onClose={() => setIsReadmeOpen(false)}
        dragConstraints={heroContainerRef}
      />

      {/* Capability Cards Section */}
      <section className="space-y-6 pt-4">
        <motion.div
          {...getFadeUpOnce(prefersReducedMotion, isMobile)}
          className="flex items-center justify-between border-b border-workspace-border/80 pb-3"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-red" />
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-content-secondary">
              CORE CAPABILITIES
            </h2>
          </div>
          <span className="text-xs font-mono text-content-muted">
            03 SPECIALIZATIONS
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {/* Card 1: AI Development */}
          <motion.div
            {...getFadeUpOnce(prefersReducedMotion, isMobile, 0.05)}
            whileHover={getCardHover(canHover, prefersReducedMotion)}
            className="p-6 rounded-xl bg-workspace-panel border border-workspace-border hover:border-brand-red/50 transition-[border-color,box-shadow,background-color] duration-200 flex flex-col justify-between group shadow-sm hover:shadow-glow-red/10"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-brand-red-subtle border border-brand-red/30 flex items-center justify-center text-brand-red group-hover:scale-105 transition-transform duration-200">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold font-mono tracking-wide text-content-primary group-hover:text-brand-red-light transition-colors duration-150">
                  AI DEVELOPMENT
                </h3>
                <p className="text-sm text-content-secondary leading-relaxed">
                  Building intelligent applications using Python, APIs, semantic search, and AI technologies.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-workspace-border/60 flex items-center justify-between">
              <span className="text-[11px] font-mono text-content-muted">
                Python · SBERT · FAISS · OpenCV
              </span>
              <ArrowRight className="w-4 h-4 text-content-muted group-hover:text-brand-red group-hover:translate-x-1 transition-all duration-150" />
            </div>
          </motion.div>

          {/* Card 2: Web Development */}
          <motion.div
            {...getFadeUpOnce(prefersReducedMotion, isMobile, 0.1)}
            whileHover={getCardHover(canHover, prefersReducedMotion)}
            className="p-6 rounded-xl bg-workspace-panel border border-workspace-border hover:border-brand-red/50 transition-[border-color,box-shadow,background-color] duration-200 flex flex-col justify-between group shadow-sm hover:shadow-glow-red/10"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform duration-200">
                <Code2 className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold font-mono tracking-wide text-content-primary group-hover:text-blue-300 transition-colors duration-150">
                  WEB DEVELOPMENT
                </h3>
                <p className="text-sm text-content-secondary leading-relaxed">
                  Building responsive and practical web applications with modern frontend and backend technologies.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-workspace-border/60 flex items-center justify-between">
              <span className="text-[11px] font-mono text-content-muted">
                PHP · MySQL · React · TypeScript
              </span>
              <ArrowRight className="w-4 h-4 text-content-muted group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-150" />
            </div>
          </motion.div>

          {/* Card 3: Mobile Development */}
          <motion.div
            {...getFadeUpOnce(prefersReducedMotion, isMobile, 0.15)}
            whileHover={getCardHover(canHover, prefersReducedMotion)}
            className="p-6 rounded-xl bg-workspace-panel border border-workspace-border hover:border-brand-red/50 transition-[border-color,box-shadow,background-color] duration-200 flex flex-col justify-between group shadow-sm hover:shadow-glow-red/10"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-status-green-subtle border border-status-green/30 flex items-center justify-center text-status-green group-hover:scale-105 transition-transform duration-200">
                <Smartphone className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold font-mono tracking-wide text-content-primary group-hover:text-status-green transition-colors duration-150">
                  MOBILE DEVELOPMENT
                </h3>
                <p className="text-sm text-content-secondary leading-relaxed">
                  Creating mobile applications focused on usability, accessibility, and real-world use cases.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-workspace-border/60 flex items-center justify-between">
              <span className="text-[11px] font-mono text-content-muted">
                React Native · Mobile UX · APIs
              </span>
              <ArrowRight className="w-4 h-4 text-content-muted group-hover:text-status-green group-hover:translate-x-1 transition-all duration-150" />
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};
