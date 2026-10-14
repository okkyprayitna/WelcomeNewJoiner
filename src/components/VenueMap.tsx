import React, { useState } from 'react';
import { MapPin, Navigation, Building2, Car, Train, Copy, Check, ExternalLink } from 'lucide-react';

export const VenueMap: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const venueTitle = "HQ Skyline Tower — Rooftop Terrace";
  const venueAddress = "Level 24, Skyline Tower, 100 Financial Blvd";

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    venueTitle + ' ' + venueAddress
  )}`;

  const copyAddress = () => {
    navigator.clipboard.writeText(`${venueTitle}, ${venueAddress}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="venue" className="py-16 sm:py-24 px-4 sm:px-6 relative bg-[#070e1f]/70 border-t border-amber-400/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-300/80 mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Getting There</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-display text-white mb-3">
            Venue & <span className="text-gold-gradient">Map Directions</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-lg mx-auto">
            Fri 12 Dec, 6:00 PM · Office Rooftop Terrace (Level 24)
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Preview Graphic & Quick Launch */}
          <div className="lg:col-span-7 bg-[#0b142e] border border-amber-400/25 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Map UI Graphic / Blueprint */}
            <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-amber-400/20 bg-[#060b17] flex items-center justify-center mb-6">
              {/* Stylized dark cartographic grid */}
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px), linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)',
                backgroundSize: '24px 24px, 48px 48px, 48px 48px'
              }} />

              {/* Decorative roads & skyline shapes */}
              <div className="absolute w-full h-2 bg-slate-700/60 rotate-12 -translate-y-4" />
              <div className="absolute w-full h-3 bg-amber-400/15 -rotate-25 translate-y-8" />
              <div className="absolute w-1/2 h-full border-r border-slate-700/60 translate-x-12" />

              {/* Central Pin */}
              <div className="relative z-10 flex flex-col items-center animate-bounce duration-1000">
                <div className="p-3 bg-gradient-to-tr from-amber-500 to-yellow-300 text-slate-950 rounded-full shadow-lg shadow-amber-500/50">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="mt-2 px-3 py-1 bg-[#09132b]/95 border border-amber-400/40 rounded-full text-xs font-bold text-amber-200 shadow-md">
                  Rooftop Level 24
                </div>
              </div>

              {/* Map Action Overlay */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-transparent flex items-center justify-center opacity-0 hover:opacity-100 hover:bg-black/60 transition-opacity backdrop-blur-xs cursor-pointer group"
              >
                <span className="btn-gold-primary px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Open Live in Google Maps
                </span>
              </a>
            </div>

            {/* Address bar & primary map button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
              <div>
                <p className="text-base font-bold text-white mb-0.5">{venueTitle}</p>
                <p className="text-xs text-slate-300 font-mono">{venueAddress}</p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={copyAddress}
                  className="px-3 py-2.5 rounded-xl bg-[#0e1b3d] hover:bg-[#142654] border border-amber-400/25 text-amber-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Copy address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-primary px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Access Logistics & Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Building Access */}
            <div className="bg-[#0b142e]/80 border border-amber-400/20 rounded-2xl p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2 text-amber-300">
                <Building2 className="w-5 h-5 text-amber-400" />
                <h4 className="text-sm font-semibold uppercase tracking-wider">Building & Elevator Access</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Check in at the Tower Lobby Security desk with your company badge or RSVP name. Take the North Express Elevators straight to the <strong>24th Floor Rooftop Terrace</strong>.
              </p>
            </div>

            {/* Transit */}
            <div className="bg-[#0b142e]/80 border border-amber-400/20 rounded-2xl p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2 text-amber-300">
                <Train className="w-5 h-5 text-amber-400" />
                <h4 className="text-sm font-semibold uppercase tracking-wider">Public Transit</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                2 blocks from Financial Center Subway station (Red & Blue lines). Several express bus stops stop directly in front of the main building plaza.
              </p>
            </div>

            {/* Parking & Rideshare */}
            <div className="bg-[#0b142e]/80 border border-amber-400/20 rounded-2xl p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2 text-amber-300">
                <Car className="w-5 h-5 text-amber-400" />
                <h4 className="text-sm font-semibold uppercase tracking-wider">Parking & Rideshare Bay</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Underground visitor parking available (validated at check-in). Dedicated Uber/Lyft pickup and drop-off bay located on Battery St.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
