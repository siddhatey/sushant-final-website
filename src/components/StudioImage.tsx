import React, { useState } from 'react';
import { Camera } from 'lucide-react';

interface StudioImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export const StudioImage: React.FC<StudioImageProps> = ({
  src,
  alt,
  title,
  className = '',
  loading = 'lazy',
}) => {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#FF8A00]/10 via-[var(--bg-canvas)] to-[#0EA5B8]/10 p-6 text-center ${className}`}
      >
        <Camera className="h-7 w-7 text-[var(--text-secondary)]" aria-hidden="true" />
        <span className="text-sm font-medium text-[var(--text-secondary)]">
          {title || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
};
