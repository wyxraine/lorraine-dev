import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 rounded gap-1.5',
    md: 'text-sm px-4 py-2 rounded-md gap-2',
    lg: 'text-base px-6 py-3 rounded-lg gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary: 'bg-brand-red text-white hover:bg-brand-red-light shadow-md shadow-brand-red/20 active:translate-y-0.5 border-0 outline-none',
    secondary: 'bg-workspace-panel hover:bg-workspace-card text-content-primary border border-workspace-border hover:border-brand-red/60 active:translate-y-0.5 outline-none',
    ghost: 'bg-transparent hover:bg-workspace-panel text-content-secondary hover:text-content-primary border-0 outline-none',
    danger: 'bg-red-900/40 text-red-300 border border-red-800 hover:bg-red-900/60 outline-none',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
