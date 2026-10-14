import React, { useState } from 'react';
import { Clock, Wine, Award, Music, Utensils, Sparkles, ChevronRight } from 'lucide-react';
import { AgendaItem } from '../types';

const AGENDA_DATA: AgendaItem[] = [
  {
    id: '1',
    time: '18:00',
    title: 'Welcome Cocktails & Sunset Skyline Photo Op',
    category: 'welcome',
    location: 'Skyline West Observation Deck',
    description: 'Arrive at the rooftop as golden hour lights up the city skyline. Enjoy handcrafted welcome drinks, champagne flutes, artisanal canapés, and our rooftop photo booth.',
    highlight: 'Golden hour sunset photo moment & signature cocktails'
  },
  {
    id: '2',
    time: '18:45',
    title: 'Opening Remarks & The Year in Review',
    category: 'remarks',
    location: 'Main Pavilion Stage',
    description: 'A brief executive reflection celebrating this year’s breakthrough milestones, client triumphs, and the resilience and teamwork of every department.',
    highlight: 'Annual team highlight video & leadership address'
  },
  {
    id: '3',
    time: '19:15',
    title: 'Gourmet Rooftop Feast & Live Culinary Stations',
    category: 'dining',
    location: 'Terrace Dining Hall & Heated Pergola',
    description: 'A feast featuring seasonal carved meats, fresh seafood bar, plant-based culinary creations, and festive salads paired with curated wines.',
    highlight: 'Multi-course buffet + dedicated vegetarian & gluten-free bars'
  },
  {
    id: '4',
    time: '20:15',
    title: 'Annual Team Night Awards & Recognition',
    category: 'awards',
    location: 'Main Pavilion Stage',
    description: 'Celebrating peer-nominated team champions across categories: Innovator of the Year, Unsung Hero, Rookie Star, and Team Spirit.',
    highlight: 'Trophy presentations & special team acknowledgements'
  },
  {
    id: '5',
    time: '20:50',
    title: 'The Grand Champagne Tower Toast & Dessert Bar',
    category: 'welcome',
    location: 'Rooftop Center Island',
    description: 'A 7-tier sparkling champagne tower, liquid nitrogen dessert station, warm chocolate fondant, and artisan holiday pastries.',
    highlight: 'All-hands collective toast with leadership'
  },
  {
    id: '6',
    time: '21:15',
    title: 'DJ Live Set, Dance Floor & 360° Video Booth',
    category: 'party',
    location: 'Open-Air Dance Terrace',
    description: 'Our guest DJ spins your favorite tracks from the team playlist. Grab props for the 360-degree video booth or relax in the heated fire-pit lounges.',
    highlight: 'Crowd-sourced team playlist & outdoor dance floor'
  },
  {
    id: '7',
    time: '23:30',
    title: 'Farewell & Safe Transit Escorts',
    category: 'welcome',
    location: 'Tower Lobby Exit',
    description: 'Late night sliders and hot cocoa nightcaps. Dedicated corporate ride-share pick-up lane coordinated at the ground lobby.',
    highlight: 'Holiday gift bags & warm winter nightcaps'
  }
];

export const Agenda: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>('1');

  const filteredItems = selectedCategory === 'all'
    ? AGENDA_DATA
    : AGENDA_DATA.filter(item => item.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'welcome':
        return <Wine className="w-4 h-4 text-amber-400" />;
      case 'dining':
        return <Utensils className="w-4 h-4 text-amber-400" />;
      case 'awards':
        return <Award className="w-4 h-4 text-amber-400" />;
      case 'party':
        return <Music className="w-4 h-4 text-amber-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="agenda" className="py-16 sm:py-24 px-4 sm:px-6 relative bg-[#070e1f]/70 border-y border-amber-400/10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-300/80 mb-3">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Evening Schedule</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-display text-white mb-3">
            The Night’s <span className="text-gold-gradient">Agenda</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-lg mx-auto">
            From golden hour aperitifs to late-night skyline dancing, here is our itinerary for Friday, 12 December.
          </p>

          {/* Filter Tabs (Interactive controls with button elements) */}
          <div className="mt-8 flex items-center justify-center flex-wrap gap-2">
            {[
              { id: 'all', label: 'Full Schedule' },
              { id: 'welcome', label: 'Reception & Toasts' },
              { id: 'dining', label: 'Dining' },
              { id: 'awards', label: 'Awards' },
              { id: 'party', label: 'Party & DJ' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedCategory === tab.id
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                    : 'bg-[#0b1633] text-slate-300 hover:text-white hover:bg-[#102047] border border-amber-400/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline list */}
        <div className="space-y-4">
          {filteredItems.map((item, index) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className={`w-full text-left bg-[#0c1735]/80 hover:bg-[#102046] border rounded-2xl p-4 sm:p-5 transition-all cursor-pointer shadow-lg backdrop-blur-sm ${
                  isExpanded ? 'border-amber-400/60 ring-1 ring-amber-400/30' : 'border-amber-400/20'
                }`}
              >
                <div className="flex items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    {/* Time Badge */}
                    <div className="shrink-0 px-3 py-1.5 rounded-lg bg-[#070d1e] border border-amber-400/30 text-amber-300 font-mono font-bold text-sm sm:text-base tabular-nums">
                      {item.time}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="p-1 rounded-md bg-amber-400/10 text-amber-300">
                          {getCategoryIcon(item.category)}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {item.location}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2 text-slate-400">
                    <span className="hidden sm:inline text-xs text-amber-300/80">
                      {isExpanded ? 'Hide Details' : 'Details'}
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90 text-amber-400' : ''}`} />
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-amber-400/15 text-sm text-slate-300 space-y-2">
                    <p className="leading-relaxed">{item.description}</p>
                    {item.highlight && (
                      <div className="flex items-center gap-2 text-xs text-amber-300 font-medium pt-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{item.highlight}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
