import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  interactive?: boolean;
  glowOnHover?: boolean;
  variant?: 'default' | 'elevated' | 'bordered' | 'glass';
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = false,
  interactive = false,
  glowOnHover = false,
  variant = 'default',
  onClick
}) => {
  const variantStyles = {
    default: 'bg-[#0e0e0e] border border-white/10',
    elevated: 'bg-[#121212] border border-white/10 shadow-xl shadow-black/80',
    bordered: 'bg-[#080808] border border-white/15',
    glass: 'bg-[#0f0f0f]/80 backdrop-blur-md border border-white/10'
  };

  const hoverStyles = hoverEffect || interactive
    ? 'transition-all duration-300 hover:-translate-y-1 hover:border-[#F27D26]/40 hover:shadow-xl hover:shadow-[#F27D26]/5'
    : '';

  const glowStyles = glowOnHover
    ? 'hover:border-[#F27D26]/60 hover:shadow-lg hover:shadow-[#F27D26]/15'
    : '';

  const cursorStyles = interactive ? 'cursor-pointer' : '';

  return (
    <div
      onClick={onClick}
      className={`rounded-2xl ${variantStyles[variant]} ${hoverStyles} ${glowStyles} ${cursorStyles} ${className}`}
    >
      {children}
    </div>
  );
};
