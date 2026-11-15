import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../data/studio';

interface FaqAccordionProps {
  items: FaqItem[];
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={item.question}
            className="apple-glass-interactive overflow-hidden rounded-[24px]"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00]"
            >
              <div className="min-w-0">
                <span className="block text-xs font-medium text-[#0EA5B8]">
                  {item.category}
                </span>
                <span className="mt-1 block text-base font-semibold text-[var(--text-primary)] sm:text-lg">
                  {item.question}
                </span>
              </div>
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-surface)] text-[var(--text-primary)] transition-transform duration-300"
              >
                {isOpen ? (
                  <Minus className="h-4 w-4 text-[#FF8A00]" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
              </span>
            </button>

            <div
              className="grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="overflow-hidden">
                <p className="border-t border-[var(--glass-border)] px-6 pb-6 pt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
