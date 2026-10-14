import React, { useState } from 'react';
import { Sparkles, Menu, X, CalendarCheck } from 'lucide-react';

interface NavbarProps {
  onRsvpClick: () => void;
  formConfigured: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onRsvpClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#060b17]/90 backdrop-blur-md border-b border-amber-400/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single text element, no adjacent descriptors) */}
        <a 
          href="#top" 
          className="text-lg sm:text-xl font-bold tracking-widest text-gold-gradient font-serif whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>TEAM NIGHT 2025</span>
        </a>

        {/* Zone 2: Navigation Links (single-line, concise) */}
        <nav className="hidden md:flex items-center gap-7 text-xs lg:text-sm font-medium tracking-wide text-slate-300">
          <a href="#countdown" className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0">
            Countdown
          </a>
          <a href="#agenda" className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0">
            Agenda
          </a>
          <a href="#dress-code" className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0">
            Dress Code
          </a>
          <a href="#venue" className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0">
            Venue & Map
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onRsvpClick}
            className="btn-gold-primary px-5 py-2 rounded-lg text-xs tracking-wider uppercase whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>RSVP Now</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-amber-300 hover:text-amber-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0a1226] border-b border-amber-400/20 px-6 py-5 flex flex-col gap-4 text-sm font-medium">
          <a
            href="#countdown"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-200 hover:text-amber-300 py-1"
          >
            Countdown
          </a>
          <a
            href="#agenda"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-200 hover:text-amber-300 py-1"
          >
            Agenda
          </a>
          <a
            href="#dress-code"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-200 hover:text-amber-300 py-1"
          >
            Dress Code
          </a>
          <a
            href="#venue"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-200 hover:text-amber-300 py-1"
          >
            Venue & Map
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onRsvpClick();
            }}
            className="btn-gold-primary w-full py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase mt-2 flex items-center justify-center gap-2"
          >
            <CalendarCheck className="w-4 h-4" />
            RSVP via Google Form
          </button>
        </div>
      )}
    </header>
  );
};
