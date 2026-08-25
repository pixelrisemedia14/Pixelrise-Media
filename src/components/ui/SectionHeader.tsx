import React from 'react';
import { Badge } from './Badge';

interface SectionHeaderProps {
  badgeText?: string;
  badgeVariant?: 'cyan' | 'orange' | 'purple' | 'emerald' | 'slate';
  title: string;
  highlightedTitle?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  badgeVariant = 'cyan',
  title,
  highlightedTitle,
  subtitle,
  align = 'center',
  className = ''
}) => {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {badgeText && (
        <div className={`mb-3.5 flex ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
          <Badge variant={badgeVariant} dot>
            {badgeText}
          </Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EDEDED] font-display leading-[1.15]">
        {title}{' '}
        {highlightedTitle && (
          <span className="bg-gradient-to-r from-[#F27D26] via-[#ffaa6b] to-[#F27D26] bg-clip-text text-transparent font-serif-accent italic font-normal">
            {highlightedTitle}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
