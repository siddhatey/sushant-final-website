import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  showLabel?: boolean;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ showLabel = false, className = '' }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className={`apple-btn-spring inline-flex items-center justify-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-surface)] text-[var(--text-primary)] hover:border-[var(--glass-border-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] whitespace-nowrap shrink-0 cursor-pointer ${
        showLabel ? 'px-3.5 py-2 text-xs font-medium min-h-[40px]' : 'h-10 w-10'
      } ${className}`}
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-[#FF8A00]" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4 text-[#1D1D1F]" aria-hidden="true" />
      )}
      {showLabel && <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>}
    </button>
  );
};
