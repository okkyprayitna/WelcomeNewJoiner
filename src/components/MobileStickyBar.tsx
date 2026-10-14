import React from 'react';
import { CalendarCheck, MapPin } from 'lucide-react';

interface MobileStickyBarProps {
  onRsvpClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onRsvpClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#070c18]/95 backdrop-blur-lg border-t border-amber-400/25 px-4 py-2.5 shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="#venue"
          className="p-2.5 rounded-xl bg-[#0c1630] border border-amber-400/20 text-amber-300 hover:text-white flex items-center justify-center shrink-0 min-h-[44px] min-w-[44px]"
          aria-label="View Venue & Map"
        >
          <MapPin className="w-5 h-5" />
        </a>

        <button
          onClick={onRsvpClick}
          className="btn-gold-primary flex-1 h-11 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-transform min-h-[44px]"
        >
          <CalendarCheck className="w-4 h-4" />
          <span>RSVP via Google Form</span>
        </button>
      </div>
    </div>
  );
};
