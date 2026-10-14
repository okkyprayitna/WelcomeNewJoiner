import React, { useState, useEffect } from 'react';
import { Clock, Bell, Sparkles } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const Countdown: React.FC = () => {
  // Target: Friday 12 Dec 2025 at 18:00:00 local time
  // If in future year, dynamically target the upcoming Dec 12 18:00
  const getTargetDate = () => {
    const now = new Date();
    // Default to Dec 12, 2025 or current target year
    let targetYear = now.getFullYear();
    const eventThisYear = new Date(targetYear, 11, 12, 18, 0, 0);
    if (now.getTime() > eventThisYear.getTime()) {
      targetYear += 1;
    }
    return new Date(targetYear, 11, 12, 18, 0, 0);
  };

  const calculateTimeLeft = (): TimeLeft => {
    const target = getTargetDate();
    const difference = target.getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPast: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="py-16 sm:py-20 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section kicker */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-300/80 mb-3">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span>The Countdown Begins</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-display text-white mb-3" style={{ textWrap: 'balance' }}>
          Ticking Closer to <span className="text-gold-gradient">Rooftop Sunset</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto mb-10">
          Gather with teammates, reflect on shared wins, and welcome the holiday season under the city lights.
        </p>

        {/* Countdown Grid with Tabular Numerals */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-3xl mx-auto">
          {timeUnits.map((unit) => (
            <div
              key={unit.label}
              className="bg-[#0b142c]/90 border border-amber-400/25 rounded-2xl p-5 sm:p-7 shadow-xl shadow-black/40 backdrop-blur-md relative overflow-hidden group hover:border-amber-400/50 transition-colors"
            >
              {/* Subtle gold corner highlight */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-radial from-amber-400/10 to-transparent pointer-events-none" />

              <div className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono tabular-nums text-gold-gradient mb-2">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-slate-400">
                {unit.label}
              </div>
            </div>
          ))}
        </div>

        {/* Milestone Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-400">
          <span className="flex items-center gap-1.5 text-amber-200">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Doors open at 18:00 Sharp</span>
          </span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Golden Hour Sunset ~ 18:15</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Cocktail Reception on Terrace Deck</span>
        </div>
      </div>
    </section>
  );
};
