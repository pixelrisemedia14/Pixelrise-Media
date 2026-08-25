import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'orange' | 'purple' | 'emerald' | 'slate' | 'outline';
  dot?: boolean;
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  dot = false,
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs'
  };

  const variantClasses = {
    cyan: 'bg-[#F27D26]/10 text-[#F27D26] border border-[#F27D26]/30',
    orange: 'bg-[#F27D26]/15 text-[#ff9e54] border border-[#F27D26]/40',
    purple: 'bg-white/5 text-neutral-200 border border-white/10',
    emerald: 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30',
    slate: 'bg-[#141414] text-neutral-300 border border-white/10',
    outline: 'bg-transparent text-neutral-300 border border-white/15'
  };

  const dotClasses = {
    cyan: 'bg-[#F27D26]',
    orange: 'bg-[#F27D26]',
    purple: 'bg-white',
    emerald: 'bg-emerald-400',
    slate: 'bg-neutral-400',
    outline: 'bg-[#F27D26]'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full whitespace-nowrap ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${dotClasses[variant]}`} />
      )}
      {children}
    </span>
  );
};
