import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F27D26] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none rounded-xl tracking-tight';

  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5 shadow-sm',
    md: 'px-5 py-2.5 text-sm gap-2 shadow-sm',
    lg: 'px-7 py-3.5 text-base gap-2.5 shadow-md'
  };

  const variantClasses = {
    primary: 'bg-[#F27D26] text-black font-bold hover:bg-[#ff9342] shadow-lg shadow-[#F27D26]/20 hover:shadow-[#F27D26]/35 hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'bg-[#141414] text-[#EDEDED] hover:bg-[#1f1f1f] border border-white/10 hover:border-white/20 shadow-black/40 hover:-translate-y-0.5 active:translate-y-0',
    glow: 'bg-gradient-to-r from-[#F27D26] to-[#ff9e54] text-black font-bold hover:brightness-110 shadow-lg shadow-[#F27D26]/25 hover:-translate-y-0.5 active:translate-y-0',
    outline: 'bg-transparent text-[#EDEDED] border border-white/20 hover:border-[#F27D26] hover:text-[#F27D26] hover:bg-[#F27D26]/10 active:bg-[#F27D26]/20',
    ghost: 'bg-transparent text-neutral-300 hover:text-white hover:bg-white/5',
    dark: 'bg-[#0d0d0d] text-white border border-white/10 hover:bg-[#171717] hover:border-white/20'
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
