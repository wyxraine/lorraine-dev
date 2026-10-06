import React, { useState, useRef, useEffect } from 'react';
import { TopBar } from './TopBar';
import { Sidebar } from './Sidebar';
import { StatusBar } from './StatusBar';
import type { NavigationSection } from '../../types';
import { 
  Home, 
  User, 
  GraduationCap,
  FolderGit2, 
  Cpu, 
  Clock, 
  Mail,
  X
} from 'lucide-react';
import { CommandPalette } from './CommandPalette';
import { MinimizedProfileDock } from '../windows/MinimizedProfileDock';
import { useTabs } from '../../context/TabContext';

interface WorkspaceLayoutProps {
  children: React.ReactNode;
}

const SECTION_META: Record<NavigationSection, { label: string; icon: React.ComponentType<{ className?: string }> }> = {
  home: { label: 'Home', icon: Home },
  about: { label: 'About', icon: User },
  projects: { label: 'Projects', icon: FolderGit2 },
  skills: { label: 'Skills', icon: Cpu },
  experience: { label: 'Experience', icon: Clock },
  education: { label: 'Education', icon: GraduationCap },
  contact: { label: 'Contact', icon: Mail },
};

export const WorkspaceLayout: React.FC<WorkspaceLayoutProps> = ({ children }) => {
  const { openTabs, activeTab, openAndActivateTab, closeTab } = useTabs();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  const activeTabRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll active tab into view on desktop/tablet tab bar
  useEffect(() => {
    if (activeTabRef.current) {
      activeTabRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    }
  }, [activeTab]);

  return (
    <div className="h-screen w-screen flex flex-col bg-workspace-bg text-content-primary overflow-hidden select-text font-sans relative">
      {/* Top Application Bar */}
      <TopBar
        onToggleMobileSidebar={() => setIsMobileSidebarOpen(prev => !prev)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onSelectHome={() => openAndActivateTab('home')}
      />

      {/* Main Workspace Body */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Left Sidebar Navigation */}
        <Sidebar
          currentSection={activeTab}
          onSelectSection={(section) => {
            openAndActivateTab(section);
          }}
          isOpenMobile={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        {/* Center/Right Content Workspace Panel */}
        <main className="flex-1 flex flex-col min-w-0 bg-workspace-bg bg-workspace-grid relative overflow-hidden">
          {/* Subtle Ambient Red Glow in Background */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
          
          {/* Desktop & Tablet Workspace Tabs Bar (Shown at > 760px) */}
          <div className="hidden md:flex h-10 bg-workspace-sidebar/80 border-b border-workspace-border items-center px-2 overflow-x-auto no-scrollbar select-none shrink-0 relative scroll-smooth">
            <div className="flex items-center gap-1 min-w-max list-none p-0 m-0">
              {openTabs.map((tabId) => {
                const meta = SECTION_META[tabId];
                if (!meta) return null;
                const Icon = meta.icon;
                const isActive = activeTab === tabId;

                return (
                  <div
                    key={tabId}
                    ref={isActive ? activeTabRef : null}
                    onClick={() => openAndActivateTab(tabId)}
                    className={`group flex items-center gap-2 px-3.5 py-1.5 rounded-t-md text-xs font-mono transition-colors relative cursor-pointer select-none ${
                      isActive
                        ? 'bg-workspace-panel text-content-primary font-medium border-t border-x border-workspace-border shadow-sm z-10'
                        : 'text-content-secondary hover:text-content-primary hover:bg-workspace-panel/40 border-t border-x border-transparent'
                    }`}
                  >
                    {/* Red active top border indicator */}
                    {isActive && (
                      <span className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red shadow-glow-red" />
                    )}

                    <Icon
                      className={`w-3.5 h-3.5 ${
                        isActive ? 'text-brand-red' : 'text-content-muted group-hover:text-content-secondary'
                      }`}
                    />
                    <span>{meta.label}</span>

                    {/* Close Tab X button (Non-Home tabs only) */}
                    {tabId !== 'home' && (
                      <button
                        onClick={(e) => closeTab(tabId, e)}
                        aria-label={`Close ${meta.label}`}
                        className="p-0.5 -mr-1 rounded text-content-muted hover:text-content-primary hover:bg-workspace-hover transition-colors flex items-center justify-center shrink-0"
                        title={`Close ${meta.label}`}
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Scrollable Content Container */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-8 lg:px-12 pt-3 pb-24 sm:pb-32 scroll-smooth">
            <div className="max-w-6xl mx-auto w-full">
              {children}
            </div>
          </div>
        </main>
      </div>

      {/* Facebook-style Minimized Floating Dock above status bar */}
      <MinimizedProfileDock currentSection={activeTab} />

      {/* Bottom Status Bar */}
      <StatusBar currentSection={activeTab} />

      {/* Command Palette Modal (Ctrl+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectSection={(section) => {
          openAndActivateTab(section);
        }}
      />
    </div>
  );
};
