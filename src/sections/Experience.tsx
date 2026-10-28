import React, { useState, useRef, useEffect } from 'react';
import { Briefcase, Code2, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/experience';
import { projectsData } from '../data/projects';
import { ProjectModal } from '../components/windows/ProjectModal';
import type { Project } from '../types';
import { useAnimationConfig, getPageEntrance, getFadeUpOnce } from '../utils/motion';

interface ExperienceCardItemProps {
  item: (typeof experienceData)[number];
  idx: number;
  isFirst: boolean;
  isLast: boolean;
  prefersReducedMotion: boolean;
  isMobile: boolean;
  onOpenProject: (project: Project) => void;
  muningBloomsProject: Project | undefined;
}

const ExperienceCardItem: React.FC<ExperienceCardItemProps> = ({
  item,
  idx,
  isFirst,
  isLast,
  prefersReducedMotion,
  isMobile,
  onOpenProject,
  muningBloomsProject,
}) => {
  const [headerCenter, setHeaderCenter] = useState<number>(36);
  const headerRef = useRef<HTMLDivElement>(null);
  const TimelineIcon = item.type === 'freelance' ? Code2 : Briefcase;
  const isMuningBlooms = item.id === 'freelance-muning-blooms';

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const frameId = requestAnimationFrame(() => {
      if (el) {
        setHeaderCenter(el.offsetHeight / 2);
      }
    });

    const observer = new ResizeObserver(() => {
      if (el) {
        setHeaderCenter(el.offsetHeight / 2);
      }
    });

    observer.observe(el);
    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      {...getFadeUpOnce(prefersReducedMotion, isMobile, idx * 0.08)}
      className="relative flex items-stretch gap-3 sm:gap-4.5"
    >
      {/* Dedicated Timeline Column */}
      <div className="relative flex justify-center shrink-0 w-7 sm:w-8">
        {/* Continuous line above marker (connecting from previous item) */}
        {!isFirst && (
          <div
            style={{ height: `${headerCenter}px` }}
            className="absolute top-0 w-0.5 bg-workspace-border left-1/2 -translate-x-1/2"
            aria-hidden="true"
          />
        )}

        {/* Continuous line below marker (connecting to next item across gap) */}
        {!isLast && (
          <div
            style={{ top: `${headerCenter}px`, bottom: '-1.5rem' }}
            className="absolute w-0.5 bg-workspace-border left-1/2 -translate-x-1/2"
            aria-hidden="true"
          />
        )}

        {/* Circular Timeline Marker (aligned to vertical center of card header) */}
        <div
          style={{ top: `${headerCenter}px` }}
          className="absolute -translate-y-1/2 left-1/2 -translate-x-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-workspace-panel border-2 border-brand-red flex items-center justify-center text-brand-red z-10 shadow-md"
        >
          <TimelineIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>
      </div>

      {/* Experience Card Column */}
      <div className="flex-1 min-w-0">
        <div
          onClick={() => {
            if (isMuningBlooms && muningBloomsProject) {
              onOpenProject(muningBloomsProject);
            }
          }}
          className={`bg-workspace-panel border border-workspace-border rounded-xl overflow-hidden shadow-panel transition-all duration-200 ${
            isMuningBlooms
              ? 'hover:border-brand-red/60 cursor-pointer group/card'
              : ''
          }`}
        >
          {/* Header */}
          <div
            ref={headerRef}
            className="bg-workspace-sidebar/90 border-b border-workspace-border p-4 sm:px-6 sm:py-3.5 flex flex-col sm:flex-row sm:items-start justify-between gap-2"
          >
            <div>
              <h3 className="text-base sm:text-lg font-bold text-content-primary flex items-center gap-2">
                <span>{item.role}</span>
                {isMuningBlooms && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-red/10 text-brand-red border border-brand-red/30 uppercase tracking-wider">
                    IN DEVELOPMENT
                  </span>
                )}
              </h3>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5">
                <p className="text-xs sm:text-sm font-mono text-brand-red">
                  {item.company}
                </p>
                <span className="text-xs text-content-muted hidden sm:inline">·</span>
                <span className="text-xs font-mono text-content-muted flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-content-secondary" />
                  {item.location}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 sm:mt-0.5">
              <span className="text-xs font-mono text-content-muted flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {item.period}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 sm:p-6 space-y-4">
            <p className="text-sm text-content-secondary leading-relaxed">
              {item.description}
            </p>

            {/* Tech stack & Action Button */}
            <div className="pt-4 border-t border-workspace-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-mono text-content-muted mr-1">Technologies:</span>
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-workspace-card text-content-secondary border border-workspace-border/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {isMuningBlooms ? (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (muningBloomsProject) {
                      onOpenProject(muningBloomsProject);
                    }
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-workspace-card hover:bg-brand-red text-content-primary hover:text-white border border-workspace-border hover:border-brand-red text-xs font-mono font-medium transition-all duration-150 shrink-0 self-start sm:self-auto group"
                >
                  <span>OPEN PROJECT ↗</span>
                  <ExternalLink className="w-3.5 h-3.5 text-brand-red group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </button>
              ) : item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-workspace-card hover:bg-brand-red text-content-primary hover:text-white border border-workspace-border hover:border-brand-red text-xs font-mono font-medium transition-all duration-150 shrink-0 self-start sm:self-auto group"
                >
                  <span>{item.linkText || 'Visit Live Portal'}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-brand-red group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Experience: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const muningBloomsProject = projectsData.find((p) => p.id === 'muning-blooms');
  const { prefersReducedMotion, isMobile } = useAnimationConfig();

  return (
    <motion.div
      {...getPageEntrance(prefersReducedMotion, isMobile)}
      className="space-y-8"
    >
      {/* Header */}
      <div className="border-b border-workspace-border/80 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-brand-red" />
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-brand-red">
              Explore My
            </span>
          </div>
          <h1 className="text-3xl font-extrabold text-content-primary">
            Experience
          </h1>
          <p className="text-sm text-content-secondary mt-1">
            Industry internship experience and hands-on software development journey.
          </p>
        </div>
      </div>

      {/* Timeline List */}
      <div className="space-y-6">
        {experienceData.map((item, idx) => (
          <ExperienceCardItem
            key={item.id}
            item={item}
            idx={idx}
            isFirst={idx === 0}
            isLast={idx === experienceData.length - 1}
            prefersReducedMotion={prefersReducedMotion}
            isMobile={isMobile}
            onOpenProject={setActiveProject}
            muningBloomsProject={muningBloomsProject}
          />
        ))}
      </div>

      {/* Interactive Project Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </motion.div>
  );
};
