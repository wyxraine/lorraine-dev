import React from 'react';
import { GitBranch, CheckCircle2, Code2, Globe } from 'lucide-react';
import type { NavigationSection } from '../../types';

interface StatusBarProps {
  currentSection: NavigationSection;
}

export const StatusBar: React.FC<StatusBarProps> = ({ currentSection }) => {
  const sectionFileMap: Record<NavigationSection, string> = {
    home: 'src/sections/Home.tsx',
    about: 'src/sections/About.tsx',
    education: 'src/sections/Education.tsx',
    projects: 'src/sections/Projects.tsx',
    skills: 'src/sections/Skills.tsx',
    experience: 'src/sections/Experience.tsx',
    contact: 'src/sections/Contact.tsx',
  };

  return (
    <footer className="h-7 bg-workspace-sidebar border-t border-workspace-border px-3 sm:px-4 flex items-center justify-between text-[11px] font-mono select-none z-20 shrink-0 text-content-muted">
      {/* Left: Current Path */}
      <div className="flex items-center gap-1 text-content-muted truncate min-w-0">
        <span className="text-content-secondary font-medium shrink-0">lorraine.dev</span>
        <span className="hidden md:inline">&gt;</span>
        <span className="hidden md:inline text-content-primary truncate">{sectionFileMap[currentSection]}</span>
      </div>

      {/* Right: Studio Environment Badges */}
      <div className="flex items-center gap-3 sm:gap-4 shrink-0 min-w-0">
        <div className="hidden lg:flex items-center gap-1 text-content-muted">
          <GitBranch className="w-3 h-3 text-brand-red" />
          <span className="text-content-secondary">main</span>
        </div>

        <div className="h-3 w-px bg-workspace-border hidden lg:block" />

        <div className="hidden md:flex items-center gap-1 text-content-muted">
          <CheckCircle2 className="w-3 h-3 text-status-green" />
          <span>Ready (0 errors)</span>
        </div>

        <div className="h-3 w-px bg-workspace-border hidden md:block" />

        <div className="flex items-center gap-1.5 text-content-secondary text-[10px] xs:text-[11px]">
          <Code2 className="w-3 h-3 text-blue-400 shrink-0" />
          <span className="truncate">TypeScript / React</span>
        </div>

        <div className="hidden md:flex items-center gap-1 text-content-muted">
          <Globe className="w-3 h-3 text-content-muted" />
          <span>UTF-8</span>
        </div>
      </div>
    </footer>
  );
};
