import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'red' | 'green' | 'blue' | 'amber' | 'outline';
  size?: 'xs' | 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'sm',
  className = '',
  icon
}) => {
  const sizeStyles = {
    xs: 'text-[10px] px-1.5 py-0.5 rounded',
    sm: 'text-xs px-2.5 py-1 rounded',
    md: 'text-sm px-3 py-1.5 rounded-md',
  };

  const variantStyles = {
    default: 'bg-workspace-card text-content-secondary border border-workspace-border',
    red: 'bg-brand-red-subtle text-brand-red-light border border-brand-red/30',
    green: 'bg-status-green-subtle text-status-green border border-status-green/30',
    blue: 'bg-blue-500/10 text-blue-400 border border-blue-500/30',
    amber: 'bg-amber-500/10 text-amber-400 border border-amber-500/30',
    outline: 'bg-transparent text-content-secondary border border-workspace-border',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 font-mono font-medium tracking-tight ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
