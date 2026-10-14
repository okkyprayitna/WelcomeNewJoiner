/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { Agenda } from './components/Agenda';
import { DressCode } from './components/DressCode';
import { VenueMap } from './components/VenueMap';
import { RsvpModal } from './components/RsvpModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { Footer } from './components/Footer';

export default function App() {
  const DEFAULT_FORM_URL = 'https://forms.gle/year-end-team-night-rsvp';
  
  const [googleFormUrl, setGoogleFormUrl] = useState<string>(() => {
    return localStorage.getItem('team_night_google_form_url') || DEFAULT_FORM_URL;
  });

  const [rsvpModalOpen, setRsvpModalOpen] = useState(false);

  const handleUpdateGoogleFormUrl = (newUrl: string) => {
    setGoogleFormUrl(newUrl);
    localStorage.setItem('team_night_google_form_url', newUrl);
  };

  const handleOpenRsvp = () => {
    // If user has customized it or wants to view RSVP options, show modal:
    setRsvpModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#060b17] text-slate-100 flex flex-col selection:bg-amber-400/30 selection:text-amber-200">
      {/* Top Bar Contract (3 zones) */}
      <Navbar 
        onRsvpClick={handleOpenRsvp}
        formConfigured={googleFormUrl !== DEFAULT_FORM_URL}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Big RSVP Action & Date Highlights */}
        <Hero 
          onRsvpClick={handleOpenRsvp} 
          googleFormUrl={googleFormUrl}
        />

        {/* Section 1: Live Countdown Timer */}
        <Countdown />

        {/* Section 2: Evening Agenda Timeline */}
        <Agenda />

        {/* Section 3: Navy & Gold Dress Code Style Guide */}
        <DressCode />

        {/* Section 4: Venue & Google Maps Navigation Link */}
        <VenueMap />
      </main>

      {/* Quiet Footer */}
      <Footer onRsvpClick={handleOpenRsvp} />

      {/* Responsive Sticky Bottom Bar for Mobile (< 15% mobile viewport height) */}
      <MobileStickyBar onRsvpClick={handleOpenRsvp} />

      {/* Interactive RSVP Modal (Google Form opener + URL settings + in-app backup) */}
      <RsvpModal
        isOpen={rsvpModalOpen}
        onClose={() => setRsvpModalOpen(false)}
        googleFormUrl={googleFormUrl}
        onUpdateGoogleFormUrl={handleUpdateGoogleFormUrl}
      />
    </div>
  );
}
