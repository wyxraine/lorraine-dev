import React from 'react';
import { Minus, Square, X } from 'lucide-react';

interface WindowFrameProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  showControls?: boolean;
}

export const WindowFrame: React.FC<WindowFrameProps> = ({
  title,
  subtitle,
  icon,
  actions,
  children,
  className = '',
  headerClassName = '',
  bodyClassName = '',
  showControls = true,
}) => {
  return (
    <div className={`bg-workspace-panel border border-workspace-border rounded-xl shadow-window overflow-hidden flex flex-col transition-all duration-300 ${className}`}>
      {/* Window Header */}
      <div className={`bg-workspace-sidebar/90 border-b border-workspace-border px-4 py-2.5 flex items-center justify-between select-none ${headerClassName}`}>
        <div className="flex items-center gap-3 min-w-0">
          {showControls && (
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-3 h-3 rounded-full bg-[#E5484D] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#F6AD55] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#67D391] inline-block" />
            </div>
          )}

          <div className="flex items-center gap-2 min-w-0">
            {icon && <span className="text-content-secondary shrink-0">{icon}</span>}
            <span className="font-mono text-xs font-semibold text-content-primary truncate tracking-wide">
              {title}
            </span>
            {subtitle && (
              <span className="font-mono text-[11px] text-content-muted hidden sm:inline truncate">
                — {subtitle}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {actions}
          {showControls && (
            <div className="hidden md:flex items-center gap-1 text-content-muted">
              <button className="p-1 hover:text-content-primary rounded hover:bg-workspace-hover transition-colors">
                <Minus className="w-3 h-3" />
              </button>
              <button className="p-1 hover:text-content-primary rounded hover:bg-workspace-hover transition-colors">
                <Square className="w-2.5 h-2.5" />
              </button>
              <button className="p-1 hover:text-brand-red rounded hover:bg-workspace-hover transition-colors">
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Window Content */}
      <div className={`flex-1 p-5 sm:p-6 ${bodyClassName}`}>
        {children}
      </div>
    </div>
  );
};
