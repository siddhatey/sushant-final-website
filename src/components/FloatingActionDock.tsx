import React from 'react';
import { MessageCircle, Phone, Instagram } from 'lucide-react';
import { STUDIO_CONTACT } from '../data/studio';

export const FloatingActionDock: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-3 z-30 flex justify-center px-3">
      <nav
        aria-label="Quick Contact Actions"
        className="apple-glass-nav pointer-events-auto inline-flex h-11 items-center gap-1 rounded-full px-1.5 shadow-xl"
      >
        <a
          href={STUDIO_CONTACT.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="apple-btn-spring inline-flex h-8 items-center gap-1.5 rounded-full bg-[#FF8A00] px-3.5 text-xs font-semibold text-white hover:bg-[#E67C00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] whitespace-nowrap shrink-0"
        >
          <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
          <span>WhatsApp</span>
        </a>

        <a
          href={STUDIO_CONTACT.phone1Href}
          aria-label={`Call ${STUDIO_CONTACT.phone1Display}`}
          className="apple-btn-spring inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-xs font-medium text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5B8] whitespace-nowrap shrink-0"
        >
          <Phone className="h-3.5 w-3.5 text-[#0EA5B8]" aria-hidden="true" />
          <span>Call</span>
        </a>

        <a
          href={STUDIO_CONTACT.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Instagram Portfolio"
          className="apple-btn-spring inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-xs font-medium text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] whitespace-nowrap shrink-0"
        >
          <Instagram className="h-3.5 w-3.5 text-[#FF8A00]" aria-hidden="true" />
          <span>Instagram</span>
        </a>
      </nav>
    </div>
  );
};
