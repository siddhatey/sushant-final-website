import React, { useState } from 'react';
import { BRAND_LOGOS } from '../data/media';
import { useTheme } from '../context/ThemeContext';

export type BrandLogoVariant = 'horizontal' | 'stacked' | 'icon';

interface BrandLogoProps {
  variant?: BrandLogoVariant;
  className?: string;
  alt?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  className = '',
  alt = 'Sushant Chavan Photography',
}) => {
  const { isDark } = useTheme();
  const [hasError, setHasError] = useState(false);

  const src =
    variant === 'stacked'
      ? isDark
        ? BRAND_LOGOS.main.dark
        : BRAND_LOGOS.main.light
      : variant === 'icon'
        ? isDark
          ? BRAND_LOGOS.icon.dark
          : BRAND_LOGOS.icon.light
        : isDark
          ? BRAND_LOGOS.secondary.dark
          : BRAND_LOGOS.secondary.light;

  if (hasError) {
    return (
      <span
        className={`inline-flex items-center font-semibold tracking-tight text-[var(--text-primary)] whitespace-nowrap ${className}`}
      >
        {variant === 'icon' ? 'SC' : 'Sushant Chavan Photography'}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={`object-contain select-none transition-opacity duration-300 ${className}`}
      draggable={false}
    />
  );
};
