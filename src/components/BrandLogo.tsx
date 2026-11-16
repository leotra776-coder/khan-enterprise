import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  darkText?: boolean;
  textClassName?: string;
}

export const BrandIconSvg: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Deep Architectural Monolith Base */}
    <rect width="100" height="100" rx="14" fill="#121417" />
    <rect x="2" y="2" width="96" height="96" rx="12" stroke="#F4B41A" strokeOpacity="0.35" strokeWidth="1.5" />

    {/* Left Isometric Tower Wing */}
    <path
      d="M48 16L22 31V64L48 51V16Z"
      fill="#1E2229"
      stroke="#FFFFFF"
      strokeWidth="2.4"
      strokeLinejoin="round"
    />
    {/* Left Tower Vertical Architectural Bars */}
    <line x1="29" y1="33" x2="29" y2="56" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" />
    <line x1="36" y1="29" x2="36" y2="52" stroke="#F4B41A" strokeWidth="2.4" strokeLinecap="round" />
    <line x1="42" y1="25" x2="42" y2="48" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" />

    {/* Right Isometric High-Rise Tower with Horizontal Louvers (Matching Visiting Card) */}
    <path
      d="M48 16L78 32V82L48 64V16Z"
      fill="#14171C"
      stroke="#FFFFFF"
      strokeWidth="2.4"
      strokeLinejoin="round"
    />
    <line x1="53" y1="25" x2="73" y2="36" stroke="#F4B41A" strokeWidth="2.6" strokeLinecap="round" />
    <line x1="53" y1="33" x2="73" y2="44" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="53" y1="41" x2="73" y2="52" stroke="#F4B41A" strokeWidth="2.6" strokeLinecap="round" />
    <line x1="53" y1="49" x2="73" y2="60" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="53" y1="57" x2="73" y2="68" stroke="#F4B41A" strokeWidth="2.6" strokeLinecap="round" />
    <line x1="53" y1="65" x2="73" y2="75" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />

    {/* Lower Left Pitched Roof & 4-Pane Window Detail from Visiting Card */}
    <path
      d="M19 68L44 55L48 64"
      stroke="#FFFFFF"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="28" y="67" width="4.5" height="4.5" fill="#F4B41A" />
    <rect x="34.5" y="67" width="4.5" height="4.5" fill="#F4B41A" />
    <rect x="28" y="73.5" width="4.5" height="4.5" fill="#F4B41A" />
    <rect x="34.5" y="73.5" width="4.5" height="4.5" fill="#F4B41A" />
  </svg>
);

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  darkText = true,
  textClassName,
}) => {
  const iconSize = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-11 h-11' : 'w-9 h-9';
  const textSize = textClassName || (size === 'sm' ? 'text-base' : size === 'lg' ? 'text-xl' : 'text-lg');

  return (
    <span className="inline-flex items-center gap-3 whitespace-nowrap shrink-0">
      <BrandIconSvg className={`${iconSize} shrink-0`} />
      <span
        className={`font-display ${textSize} font-extrabold tracking-tight ${
          darkText ? 'text-slate-950' : 'text-white'
        }`}
      >
        KHAN <span className="text-amber-500">ENTERPRIZE</span>
      </span>
    </span>
  );
};
