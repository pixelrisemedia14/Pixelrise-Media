import React from 'react';

interface PixelriseLogoProps {
  className?: string;
  size?: number | string;
  withContainer?: boolean;
  containerClassName?: string;
}

export const PixelriseLogo: React.FC<PixelriseLogoProps> = ({
  className = 'w-full h-full',
  size,
  withContainer = false,
  containerClassName = 'w-10 h-10 rounded-xl bg-[#0c0c0c] border border-white/15 p-1 flex items-center justify-center shadow-md hover:border-[#F27D26]/40 transition-colors'
}) => {
  const logoSvg = (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    >
      <defs>
        {/* Soft bevel and depth shadow */}
        <filter id="logo-shadow" x="-8%" y="-8%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.4" />
        </filter>
        
        {/* Gradients matching dark theme colors & logo */}
        <linearGradient id="arrow-gold-grad" x1="60" y1="180" x2="210" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D97706" />
          <stop offset="45%" stopColor="#F27D26" />
          <stop offset="100%" stopColor="#FFA654" />
        </linearGradient>

        <linearGradient id="slate-navy-grad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3E546E" />
          <stop offset="100%" stopColor="#253547" />
        </linearGradient>
      </defs>

      {/* Grid pixel blocks on the left */}
      {/* Col 1 */}
      <rect x="18" y="24" width="26" height="26" rx="2" fill="#2E4057" />
      <rect x="18" y="86" width="16" height="16" rx="2" fill="#F27D26" />

      {/* Col 2 */}
      <rect x="52" y="55" width="26" height="26" rx="2" fill="#5B8FB9" />
      <rect x="52" y="86" width="26" height="26" rx="2" fill="#2E4057" />
      <rect x="52" y="117" width="26" height="34" rx="2" fill="#2E4057" />

      {/* Col 3 */}
      <rect x="83" y="24" width="26" height="26" rx="2" fill="#2E4057" />
      <rect x="83" y="55" width="26" height="26" rx="2" fill="#F27D26" />
      <rect x="83" y="86" width="26" height="26" rx="2" fill="#2E4057" />

      {/* R Top Head Curve */}
      <path
        d="M114 24H144C167.196 24 186 42.804 186 66C186 89.196 167.196 108 144 108H132L114 126V24Z"
        fill="url(#slate-navy-grad)"
      />
      {/* Inner cutout of R loop */}
      <path
        d="M114 50H140C148.837 50 156 57.163 156 66C156 74.837 148.837 82 140 82H114V50Z"
        fill="#080808"
      />

      {/* Mountain Base (Right side bottom) */}
      <path
        d="M98 216L152 148L220 216H98Z"
        fill="#253547"
      />
      {/* Mountain peak golden chevron */}
      <path
        d="M152 166L140 182H148L152 176L156 182H164L152 166Z"
        fill="#F27D26"
      />

      {/* White / Negative space separator stroke under arrow */}
      <path
        d="M60 216L60 178L120 120L148 152L198 88L186 80L222 36L214 78L204 70L150 140L122 108L60 170V216"
        fill="white"
        opacity="0.95"
      />

      {/* The Iconic Rising Growth Arrow */}
      {/* Arrow Path Body */}
      <path
        d="M62 214V184L121 126L149 157L202 91L188 80L228 32L216 78L204 69L151 138L123 107L62 168V214Z"
        fill="url(#arrow-gold-grad)"
        filter="url(#logo-shadow)"
      />
    </svg>
  );

  if (withContainer) {
    return (
      <div className={containerClassName}>
        {logoSvg}
      </div>
    );
  }

  return logoSvg;
};
