import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectModal } from '../components/windows/ProjectModal';
import type { Project } from '../types';

export const Work: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['ALL', 'AI', 'WEB', 'MOBILE'];

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === 'ALL') return true;
    if (selectedCategory === 'AI') return p.category === 'AI';
    if (selectedCategory === 'MOBILE') return p.category === 'Mobile' || p.id === 'lexiaid';
    if (selectedCategory === 'WEB') return p.category === 'Web';
    return p.category.toUpperCase() === selectedCategory;
  });

  const isAllSelected = selectedCategory === 'ALL';
  const featuredProject = isAllSelected
    ? filteredProjects.find((p) => p.id === 'lexiaid')
    : filteredProjects.length === 1 && filteredProjects[0].id === 'lexiaid'
    ? filteredProjects[0]
    : null;

  const regularProjects = featuredProject
    ? filteredProjects.filter((p) => p !== featuredProject)
    : filteredProjects;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      {/* Projects Page Header */}
      <div className="border-b border-workspace-border/80 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-brand-red text-xs">●</span>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-brand-red">
              SELECTED PROJECTS
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-content-primary tracking-tight">
            Projects
          </h1>
          <p className="text-sm text-content-secondary mt-1">
            Software projects spanning web, mobile, AI, and full-stack development.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-workspace-panel rounded-lg border border-workspace-border self-start md:self-auto shrink-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-md text-xs font-mono transition-all duration-150 ${
                selectedCategory === cat
                  ? 'bg-brand-red text-white font-semibold shadow-sm'
                  : 'text-content-secondary hover:text-content-primary hover:bg-workspace-card'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Presentation Grid */}
      <div className="space-y-6">
        {/* Featured Project (LexiAid) - Full Width */}
        {featuredProject && (
          <div>
            <ProjectCard
              project={featuredProject}
              onOpenCaseStudy={(proj) => setActiveProject(proj)}
              isFeatured={true}
            />
          </div>
        )}

        {/* 2-Column Grid for Remaining Projects */}
        {regularProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={(proj) => setActiveProject(proj)}
                isFeatured={false}
              />
            ))}
          </div>
        )}
      </div>

      {/* Interactive Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </motion.div>
  );
};

export default Work;
