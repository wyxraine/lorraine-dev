import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Project } from '../../types';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
  isFeatured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenCaseStudy,
  isFeatured = false,
}) => {
  const displayFilename = project.filename || `${project.title.toLowerCase().replace(/['\s]+/g, '_')}.app`;
  const hasSecondaryLinks = Boolean(project.githubUrl || project.liveDemoUrl || project.liveUrl);

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className={`bg-workspace-panel border border-workspace-border hover:border-brand-red/50 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-panel group ${
        isFeatured ? 'col-span-full' : 'col-span-1'
      }`}
    >
      {/* Card Header */}
      <div className="bg-workspace-sidebar/80 border-b border-workspace-border px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-red inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F6AD55] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-status-green inline-block" />
          </div>
          <span className="font-mono text-xs font-semibold text-content-primary">
            {displayFilename}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 space-y-5 flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          {/* Visual Preview Area */}
          {project.image && (
            <div
              className={`relative w-full rounded-lg overflow-hidden bg-workspace-bg border border-workspace-border/60 ${
                isFeatured ? 'aspect-video max-h-[175px] sm:max-h-[225px] md:max-h-[265px]' : 'aspect-video'
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/profile.jpg';
                }}
              />
            </div>
          )}

          {/* Project Header Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-content-primary group-hover:text-brand-red transition-colors">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-content-muted mt-0.5">
              {project.subtitle}
            </p>
            <p className="text-sm text-content-secondary leading-relaxed mt-2.5">
              {project.description}
            </p>
          </div>
        </div>

        {/* Tech Badges & CTA */}
        <div className="space-y-4 pt-4 border-t border-workspace-border/60">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-workspace-card text-content-secondary border border-workspace-border/80"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 6 && (
              <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-workspace-panel text-content-muted">
                +{project.technologies.length - 6}
              </span>
            )}
          </div>

          {/* Action Row */}
          <div className={`flex flex-wrap items-center gap-3 ${hasSecondaryLinks ? 'justify-between' : 'justify-start'}`}>
            <button
              onClick={() => onOpenCaseStudy(project)}
              className={`${
                hasSecondaryLinks ? 'flex-1 sm:flex-none' : 'w-full'
              } py-2.5 px-3.5 rounded-lg bg-workspace-card hover:bg-brand-red text-content-primary hover:text-white border border-workspace-border hover:border-brand-red text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all duration-200`}
            >
              <span>OPEN PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {hasSecondaryLinks && (
              <div className="flex items-center gap-3.5 font-mono text-xs shrink-0 self-center">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-content-muted hover:text-brand-red transition-colors py-1"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
                {(project.liveDemoUrl || project.liveUrl) && (
                  <a
                    href={project.liveDemoUrl || project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-content-muted hover:text-brand-red transition-colors py-1"
                    title="View Live Demo"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>LIVE DEMO</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
