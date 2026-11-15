import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { ShowcaseFrame, STUDIO_CONTACT } from '../data/studio';
import { StudioImage } from './StudioImage';

interface LightboxModalProps {
  frames: ShowcaseFrame[];
  activeIndex: number | null;
  onClose: () => void;
  onSelect: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  frames,
  activeIndex,
  onClose,
  onSelect,
}) => {
  const isOpen = activeIndex !== null && activeIndex >= 0 && activeIndex < frames.length;
  const frame = isOpen ? frames[activeIndex] : null;

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && activeIndex !== null) {
        onSelect((activeIndex + 1) % frames.length);
      }
      if (e.key === 'ArrowLeft' && activeIndex !== null) {
        onSelect((activeIndex - 1 + frames.length) % frames.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeIndex, frames.length, onClose, onSelect]);

  if (!isOpen || !frame || activeIndex === null) return null;

  const prev = () => onSelect((activeIndex - 1 + frames.length) % frames.length);
  const next = () => onSelect((activeIndex + 1) % frames.length);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={frame.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-8 backdrop-blur-xl"
      onClick={onClose}
    >
      <div
        className="apple-glass relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-[28px] bg-[var(--glass-surface-strong)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[var(--glass-border)] px-6 py-4">
          <div className="min-w-0">
            <h3 className="truncate text-lg font-semibold text-[var(--text-primary)]">
              {frame.title}
            </h3>
            <p className="text-xs text-[var(--text-secondary)]">
              {frame.category} · {frame.location} · {frame.specs}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close lightbox"
            className="apple-btn-spring inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-surface)] text-[var(--text-primary)] hover:border-[var(--glass-border-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] cursor-pointer"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-black/20 p-3 sm:p-6">
          <StudioImage
            src={frame.image}
            alt={frame.alt}
            title={frame.title}
            loading="eager"
            className="max-h-[60vh] w-auto rounded-2xl object-contain shadow-2xl"
          />

          <button
            type="button"
            onClick={prev}
            aria-label="Previous frame"
            className="apple-btn-spring absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next frame"
            className="apple-btn-spring absolute right-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-col gap-3 border-t border-[var(--glass-border)] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm text-[var(--text-secondary)]">{frame.story}</p>
          <a
            href={STUDIO_CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="apple-btn-spring inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#FF8A00] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#E67C00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] whitespace-nowrap"
          >
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Plan a Shoot</span>
          </a>
        </div>
      </div>
    </div>
  );
};
