import React, { useState } from 'react';
import { Briefcase, Code2, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/experience';
import { projectsData } from '../data/projects';
import { ProjectModal } from '../components/windows/ProjectModal';
import type { Project } from '../types';

export const Experience: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const muningBloomsProject = projectsData.find((p) => p.id === 'muning-blooms');

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
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
      <div className="space-y-6 relative before:absolute before:inset-0 before:left-6 sm:before:left-8 before:w-0.5 before:bg-workspace-border before:hidden sm:before:block">
        {experienceData.map((item, idx) => {
          const TimelineIcon = item.type === 'freelance' ? Code2 : Briefcase;
          const isMuningBlooms = item.id === 'freelance-muning-blooms';

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="relative sm:pl-16"
            >
              {/* Timeline Node Icon (Desktop) */}
              <div className="hidden sm:flex absolute left-4 -translate-x-1/2 top-6 w-8 h-8 rounded-full bg-workspace-panel border-2 border-brand-red items-center justify-center text-brand-red z-10 shadow-md">
                <TimelineIcon className="w-4 h-4" />
              </div>

              {/* Card Container */}
              <div
                onClick={() => {
                  if (isMuningBlooms && muningBloomsProject) {
                    setActiveProject(muningBloomsProject);
                  }
                }}
                className={`bg-workspace-panel border border-workspace-border rounded-xl overflow-hidden shadow-panel transition-all duration-200 ${
                  isMuningBlooms
                    ? 'hover:border-brand-red/60 cursor-pointer group/card'
                    : ''
                }`}
              >
                {/* Header */}
                <div className="bg-workspace-sidebar/90 border-b border-workspace-border p-4 sm:px-6 sm:py-3.5 flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div className="flex items-start gap-3">
                    <span className="sm:hidden p-1.5 rounded-md bg-workspace-card text-brand-red border border-workspace-border mt-0.5">
                      <TimelineIcon className="w-4 h-4" />
                    </span>
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
                            setActiveProject(muningBloomsProject);
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
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Project Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </motion.div>
  );
};
