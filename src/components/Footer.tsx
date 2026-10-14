import React from 'react';
import { ArrowUp, Sparkles, Mail } from 'lucide-react';

interface FooterProps {
  onRsvpClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRsvpClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040812] border-t border-amber-400/15 py-12 px-4 sm:px-6 pb-24 sm:pb-12 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Note */}
        <div className="text-center md:text-left">
          <div className="text-sm font-bold tracking-widest text-gold-gradient font-serif mb-1 flex items-center justify-center md:justify-start gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>YEAR-END TEAM NIGHT 2025</span>
          </div>
          <p className="text-slate-400">
            Friday, 12 December · 6:00 PM · Office Rooftop Terrace
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-slate-300 font-medium">
          <a href="#countdown" className="hover:text-amber-300 transition-colors">
            Countdown
          </a>
          <a href="#agenda" className="hover:text-amber-300 transition-colors">
            Agenda
          </a>
          <a href="#dress-code" className="hover:text-amber-300 transition-colors">
            Dress Code
          </a>
          <a href="#venue" className="hover:text-amber-300 transition-colors">
            Venue & Map
          </a>
          <button
            onClick={onRsvpClick}
            className="text-amber-300 hover:text-amber-200 transition-colors font-semibold cursor-pointer"
          >
            RSVP
          </button>
        </div>

        {/* Back to top */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#091228] border border-amber-400/20 text-slate-300 hover:text-amber-300 hover:border-amber-400/40 transition-colors cursor-pointer flex items-center gap-1.5"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-xs">Top</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px]">
        <p>© 2025 Team Celebration Committee. Internal Company Event.</p>
        <p className="flex items-center gap-1.5">
          <span>Questions? Contact</span>
          <a href="mailto:events@company.com" className="text-amber-300 hover:underline flex items-center gap-1">
            <Mail className="w-3 h-3" />
            <span>events@company.com</span>
          </a>
        </p>
      </div>
    </footer>
  );
};
