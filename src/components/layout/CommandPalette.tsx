import React, { useState, useEffect } from 'react';
import { Search, Home, User, GraduationCap, FolderGit2, Cpu, Clock, FileText, Mail, ArrowRight, X } from 'lucide-react';
import type { NavigationSection } from '../../types';
import { projectsData } from '../../data/projects';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (section: NavigationSection) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectSection,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          setQuery('');
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sections: { id: NavigationSection | 'resume-pdf'; label: string; desc: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'home', label: 'Home', desc: 'Hero introduction & personal portfolio overview', icon: Home },
    { id: 'about', label: 'About Lorraine', desc: 'Background & profile overview', icon: User },
    { id: 'education', label: 'Educational Background', desc: 'Cavite State University – BS Computer Science', icon: GraduationCap },
    { id: 'projects', label: 'Projects', desc: 'Case studies & technical projects', icon: FolderGit2 },
    { id: 'skills', label: 'Toolkit & Skills', desc: 'Languages, frameworks, and tools', icon: Cpu },
    { id: 'experience', label: 'Experience & Timeline', desc: 'Internship & technical milestones', icon: Clock },
    { id: 'resume-pdf', label: 'Resume (PDF)', desc: 'View or download resume PDF outside portfolio', icon: FileText },
    { id: 'contact', label: 'Contact', desc: 'Get in touch & social links', icon: Mail },
  ];

  const filteredSections = sections.filter(s => 
    s.label.toLowerCase().includes(query.toLowerCase()) || 
    s.desc.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = projectsData.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase()) ||
    p.technologies.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="w-full max-w-xl bg-workspace-panel border border-workspace-border rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input bar */}
        <div className="p-3.5 border-b border-workspace-border flex items-center gap-3 bg-workspace-sidebar">
          <Search className="w-4 h-4 text-brand-red shrink-0" />
          <input
            type="text"
            placeholder="Type a section or project to jump..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-content-primary placeholder:text-content-muted focus:outline-none font-mono"
          />
          <button 
            onClick={onClose}
            className="p-1 rounded hover:bg-workspace-card text-content-muted hover:text-content-primary"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-2 overflow-y-auto space-y-4 max-h-[60vh]">
          {/* Sections */}
          <div>
            <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-content-muted">
              Sections
            </div>
            <div className="space-y-1 mt-1">
              {filteredSections.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.id === 'resume-pdf') {
                        window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
                      } else {
                        onSelectSection(item.id as NavigationSection);
                      }
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-brand-red-subtle/40 text-left group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-md bg-workspace-card border border-workspace-border group-hover:border-brand-red/50">
                        <Icon className="w-4 h-4 text-content-secondary group-hover:text-brand-red" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-content-primary font-mono group-hover:text-brand-red transition-colors">
                          {item.label}
                        </p>
                        <p className="text-[11px] text-content-muted">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-content-muted group-hover:text-brand-red group-hover:translate-x-1 transition-transform" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-content-muted">
                Projects
              </div>
              <div className="space-y-1 mt-1">
                {filteredProjects.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => {
                      onSelectSection('projects');
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-workspace-card text-left group transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-2 h-2 rounded-full bg-brand-red shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-content-primary font-mono truncate">
                          {proj.title}
                        </p>
                        <p className="text-[11px] text-content-muted truncate">
                          {proj.technologies.join(', ')}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-brand-red shrink-0 font-semibold">
                      Open Project ↗
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 border-t border-workspace-border/60 bg-workspace-sidebar text-[11px] font-mono text-content-muted flex items-center justify-between">
          <span>Click or Enter to select</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};
