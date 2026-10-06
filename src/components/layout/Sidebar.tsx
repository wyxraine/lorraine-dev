import React from 'react';
import { 
  Home, 
  User, 
  GraduationCap,
  FolderGit2, 
  Cpu, 
  Clock, 
  Mail, 
  X, 
  ChevronRight 
} from 'lucide-react';
import type { NavigationSection } from '../../types';
import { projectsData } from '../../data/projects';

interface SidebarProps {
  currentSection: NavigationSection;
  onSelectSection: (section: NavigationSection) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

interface NavItem {
  id: NavigationSection;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  tag?: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'HOME', icon: Home },
  { id: 'about', label: 'ABOUT', icon: User },
  { id: 'education', label: 'EDUCATION', icon: GraduationCap },
  { id: 'projects', label: 'PROJECTS', icon: FolderGit2, tag: projectsData.length.toString() },
  { id: 'skills', label: 'SKILLS', icon: Cpu },
  { id: 'experience', label: 'EXPERIENCE', icon: Clock },
  { id: 'contact', label: 'CONTACT', icon: Mail },
];

export const Sidebar: React.FC<SidebarProps> = ({
  currentSection,
  onSelectSection,
  isOpenMobile,
  onCloseMobile,
}) => {
  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden transition-opacity"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-[240px] bg-workspace-sidebar border-r border-workspace-border flex flex-col justify-between transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top Header Branding */}
        <div>
          <div className="p-5 flex items-center justify-between">
            <div>
              <h1 className="text-base font-extrabold font-mono tracking-wider text-content-primary">
                &lt;/workspace&gt;
              </h1>
              <p className="text-[11px] font-mono tracking-widest text-brand-red uppercase font-semibold">
                PERSONAL PORTFOLIO.
              </p>
            </div>
            <button
              onClick={onCloseMobile}
              className="lg:hidden p-1.5 rounded-md hover:bg-workspace-panel text-content-secondary hover:text-content-primary"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Section Header */}
          <div className="px-5 pt-2 pb-2">
            <span className="text-[10px] font-mono font-semibold uppercase text-content-muted tracking-widest">
              WORKSPACE EXPLORER
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="px-2 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectSection(item.id);
                    onCloseMobile();
                  }}
                  className={`w-full group flex items-center justify-between px-3 py-2.5 rounded-r-md text-xs font-mono font-medium transition-all duration-150 relative ${
                    isActive
                      ? 'bg-brand-red-subtle text-brand-red dark:text-white font-bold'
                      : 'text-content-secondary hover:text-content-primary hover:bg-workspace-panel/60'
                  }`}
                >
                  {/* Left Red Active Bar */}
                  {isActive && (
                    <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-red rounded-r shadow-glow-red" />
                  )}

                  <div className="flex items-center gap-3">
                    <Icon
                      className={`w-4 h-4 transition-colors ${
                        isActive ? 'text-brand-red' : 'text-content-muted group-hover:text-content-primary'
                      }`}
                    />
                    <span className="tracking-wider">{item.label}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {item.tag && (
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                          isActive
                            ? 'bg-brand-red text-white'
                            : 'bg-workspace-card text-content-muted group-hover:text-content-secondary border border-workspace-border'
                        }`}
                      >
                        {item.tag}
                      </span>
                    )}
                    {isActive && <ChevronRight className="w-3.5 h-3.5 text-brand-red shrink-0" />}
                  </div>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer Info */}
        <div className="p-4 bg-workspace-sidebar/50">
          <div className="p-3 rounded-lg bg-workspace-panel/60">
            <div className="mb-1.5">
              <span className="text-[11px] font-mono font-bold text-content-primary">
                COMPUTER SCIENCE
              </span>
            </div>
            <p className="text-[11px] text-content-secondary leading-relaxed font-sans">
              CvSU Imus · Class of 2026
            </p>
            <button
              onClick={() => {
                onSelectSection('contact');
                onCloseMobile();
              }}
              className="mt-2.5 pt-2 border-t border-workspace-border/60 w-full flex items-center justify-between text-[11px] font-mono font-bold text-brand-red hover:text-brand-red-dark dark:hover:text-white transition-colors group"
            >
              <span>Let's connect</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
