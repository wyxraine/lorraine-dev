import React from 'react';
import { Menu, Search, Command, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface TopBarProps {
  onToggleMobileSidebar: () => void;
  onOpenCommandPalette?: () => void;
  onSelectHome?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  onToggleMobileSidebar,
  onOpenCommandPalette,
  onSelectHome,
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="h-14 bg-workspace-sidebar border-b border-workspace-border px-4 sm:px-6 flex items-center justify-between select-none z-30 shrink-0">
      {/* Left Section: Controls & Brand */}
      <div className="flex items-center gap-4 sm:gap-5">
        {/* Mobile Hamburger Toggle */}
        <button
          onClick={onToggleMobileSidebar}
          className="lg:hidden p-1.5 rounded-md hover:bg-workspace-panel text-content-secondary hover:text-content-primary transition-colors"
          aria-label="Toggle Navigation"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Application Window Dot Indicators */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#E5484D] inline-block transition-transform hover:scale-110" />
          <span className="w-3 h-3 rounded-full bg-[#F6AD55] inline-block transition-transform hover:scale-110" />
          <span className="w-3 h-3 rounded-full bg-[#67D391] inline-block transition-transform hover:scale-110" />
        </div>

        <div className="h-4 w-px bg-workspace-border hidden sm:block" />

        {/* Studio Branding */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onSelectHome}
            className="font-mono font-bold text-sm tracking-wider text-content-primary hover:text-brand-red transition-colors text-left focus:outline-none cursor-pointer"
            title="Go to Home"
          >
            lorraine.dev
          </button>
          <span className="hidden xs:inline text-xs font-mono text-content-muted uppercase tracking-widest px-1.5 py-0.5 rounded bg-workspace-panel">
            PERSONAL PORTFOLIO.
          </span>
        </div>
      </div>

      {/* Center/Right Section: Search / Command Palette / Theme Toggle & Availability */}
      <div className="flex items-center gap-2.5 sm:gap-3.5">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-1.5 rounded-md bg-workspace-panel border border-workspace-border hover:border-brand-red/50 text-content-secondary hover:text-brand-red transition-all duration-150 flex items-center justify-center"
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
          ) : (
            <Moon className="w-4 h-4 text-blue-500 transition-transform hover:-rotate-12" />
          )}
        </button>

        {/* Quick Search / Command Trigger */}
        {onOpenCommandPalette && (
          <button
            onClick={onOpenCommandPalette}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md bg-workspace-panel hover:bg-workspace-hover border border-workspace-border hover:border-brand-red/50 text-content-secondary hover:text-content-primary text-xs font-mono transition-all duration-150 group"
          >
            <Search className="w-3.5 h-3.5 text-content-secondary group-hover:text-brand-red transition-colors shrink-0" />
            <span className="text-content-secondary group-hover:text-content-primary font-medium">Quick Jump</span>
            <kbd className="inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] rounded bg-workspace-card border border-workspace-border text-content-secondary group-hover:border-brand-red/40 transition-colors">
              <Command className="w-2.5 h-2.5" /> K
            </kbd>
          </button>
        )}

        {/* Status Indicator (Desktop/Tablet only, hidden on mobile <=760px) */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-status-green-subtle border border-status-green/30">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-status-green"></span>
          </span>
          <span className="font-mono text-xs font-medium text-status-green uppercase tracking-wider">
            ONLINE
          </span>
        </div>
      </div>
    </header>
  );
};
