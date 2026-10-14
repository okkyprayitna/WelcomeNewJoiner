import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ExternalLink, CalendarPlus, ChevronDown, CheckCircle2 } from 'lucide-react';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';

interface HeroProps {
  onRsvpClick: () => void;
  googleFormUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ onRsvpClick, googleFormUrl }) => {
  const [calendarMenuOpen, setCalendarMenuOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Year-End Team Night | Rooftop Gala',
        text: 'Join us Fri 12 Dec, 6:00 PM at the Office Rooftop for our Year-End Team Night celebration!',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <section id="top" className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Background Image with Cinematic Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_rooftop_celebration_1791963914800.jpg"
          alt="Festive corporate year-end rooftop celebration under twilight city skyline"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-45 scale-105 transform motion-safe:transition-transform motion-safe:duration-10000"
        />
        {/* Navy gradient scrim overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b17] via-[#060b17]/80 to-[#060b17]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 stars-overlay opacity-40 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Editorial Eyebrow */}
        <div className="flex items-center gap-2 mb-4 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-amber-300/90">
          <span>Annual Celebration</span>
          <span aria-hidden="true">·</span>
          <span>Skyline Edition</span>
        </div>

        {/* Main Headline with balanced wrapping */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 font-serif-display leading-[1.1] max-w-3xl" style={{ textWrap: 'balance' }}>
          Year-End <span className="text-gold-gradient block sm:inline">Team Night</span>
        </h1>

        {/* Value Proposition & Invitation Warmth */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed mb-8">
          Join us as we toast to an incredible year, celebrate our shared milestones, and dance under the evening stars on the skyline terrace.
        </p>

        {/* Event Key Facts Bar - Clean unboxed metadata with separators */}
        <div className="w-full max-w-2xl bg-[#0e1935]/85 border border-amber-400/25 rounded-2xl p-4 sm:p-5 mb-10 shadow-xl shadow-black/40 backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-amber-400/15 text-left sm:text-center">
            {/* Date */}
            <div className="flex sm:flex-col items-center sm:items-center justify-start sm:justify-center gap-3 sm:gap-1.5 pt-1 sm:pt-0">
              <Calendar className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wider text-amber-200/70 font-medium">Date</p>
                <p className="text-sm sm:text-base font-semibold text-white">Fri, 12 Dec 2025</p>
              </div>
            </div>

            {/* Time */}
            <div className="flex sm:flex-col items-center sm:items-center justify-start sm:justify-center gap-3 sm:gap-1.5 pt-3 sm:pt-0">
              <Clock className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wider text-amber-200/70 font-medium">Time</p>
                <p className="text-sm sm:text-base font-semibold text-white">6:00 PM Onwards</p>
              </div>
            </div>

            {/* Venue */}
            <div className="flex sm:flex-col items-center sm:items-center justify-start sm:justify-center gap-3 sm:gap-1.5 pt-3 sm:pt-0">
              <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wider text-amber-200/70 font-medium">Location</p>
                <p className="text-sm sm:text-base font-semibold text-white">Office Rooftop Terrace</p>
              </div>
            </div>
          </div>
        </div>

        {/* PRIMARY CALL TO ACTION: The Big RSVP Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <button
            onClick={onRsvpClick}
            className="btn-gold-primary w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold uppercase tracking-wider flex items-center justify-center gap-3 cursor-pointer shadow-lg shadow-amber-500/25"
          >
            <span>RSVP via Google Form</span>
            <ExternalLink className="w-5 h-5" />
          </button>

          {/* Add to Calendar with Dropdown */}
          <div className="relative w-full sm:w-auto">
            <button
              onClick={() => setCalendarMenuOpen(!calendarMenuOpen)}
              className="w-full sm:w-auto px-5 py-4 rounded-xl text-sm font-semibold text-amber-200 bg-[#0c1833] hover:bg-[#12234a] border border-amber-400/30 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <CalendarPlus className="w-4 h-4 text-amber-400" />
              <span>Add to Calendar</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${calendarMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {calendarMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-[#0a142c] border border-amber-400/30 rounded-xl shadow-2xl py-2 z-50 text-left">
                <a
                  href={getGoogleCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setCalendarMenuOpen(false)}
                  className="block px-4 py-2.5 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-300 transition-colors"
                >
                  Google Calendar
                </a>
                <button
                  onClick={() => {
                    downloadIcsFile();
                    setCalendarMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2.5 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Apple Calendar / Outlook (.ics)
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Trust & RSVP Notice */}
        <p className="mt-4 text-xs text-slate-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>Catered dining & cocktails provided · Kindly RSVP by Friday, 5 December</span>
        </p>
      </div>
    </section>
  );
};
