import React from 'react';
import { Sparkles, Check, Shirt, Wind, Eye } from 'lucide-react';

export const DressCode: React.FC = () => {
  const colorPalette = [
    { name: 'Midnight Navy', hex: '#0B1633', border: 'border-slate-700' },
    { name: 'Champagne Gold', hex: '#D4AF37', border: 'border-amber-300' },
    { name: 'Deep Indigo', hex: '#16234F', border: 'border-slate-700' },
    { name: 'Warm Metallic', hex: '#F3E5AB', border: 'border-amber-200' },
    { name: 'Velvet Black', hex: '#05070D', border: 'border-slate-800' },
  ];

  const tips = [
    {
      title: 'Attire Theme: Festive Cocktail',
      description: 'Dress up! Tailored navy blazers, cocktail dresses, elegant jumpsuits, evening suits, or chic separates.',
    },
    {
      title: 'Touch of Gold Accents',
      description: 'Elevate your look with gold cufflinks, metallic ties, statement jewelry, pocket squares, or gilded accessories.',
    },
    {
      title: 'Rooftop Weather Layer',
      description: 'Heated pavilions and open-flame fire pits will keep you warm, but bring an overcoat or elegant shawl for open terrace views.',
    },
    {
      title: 'Comfortable Terrace Footwear',
      description: 'The rooftop features wide teak decking. Heels, dress loafers, and evening shoes are all great.',
    },
  ];

  return (
    <section id="dress-code" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-300/80 mb-3">
            <Shirt className="w-3.5 h-3.5 text-amber-400" />
            <span>Style Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-display text-white mb-3">
            Dress Code: <span className="text-gold-gradient">Navy & Gold Glam</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-lg mx-auto">
            Festive, elegant, and celebratory. Channel deep midnight hues enriched by warm metallic touches.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Moodboard Visual Card */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-3xl overflow-hidden border border-amber-400/30 shadow-2xl shadow-black/50 bg-[#091228]">
              <img
                src="/src/assets/images/dresscode_moodboard_1791963913504.jpg"
                alt="Navy blue cocktail suit and festive gold velvet dress styling flat lay"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060b17] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#0a142c]/90 backdrop-blur-md rounded-xl border border-amber-400/20 text-xs text-amber-200 flex items-center justify-between">
                <span className="font-semibold uppercase tracking-wider">Style Inspiration</span>
                <span className="text-slate-300">Cocktail Festive</span>
              </div>
            </div>
          </div>

          {/* Guidelines & Palette */}
          <div className="lg:col-span-7 space-y-6">
            {/* Color Swatches */}
            <div className="bg-[#0b1531]/80 border border-amber-400/20 rounded-2xl p-5 sm:p-6 backdrop-blur-sm">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-amber-300 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Curated Evening Palette</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {colorPalette.map((color) => (
                  <div key={color.name} className="flex flex-col items-center text-center gap-2 p-2 rounded-xl bg-[#070d1e] border border-amber-400/15">
                    <div
                      className={`w-10 h-10 rounded-full shadow-inner border-2 ${color.border}`}
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-xs font-medium text-slate-200">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Checklist / Tips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tips.map((tip) => (
                <div
                  key={tip.title}
                  className="bg-[#0b1531]/60 border border-amber-400/15 rounded-2xl p-4 sm:p-5 hover:border-amber-400/30 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 p-1 rounded-full bg-amber-400/15 text-amber-400 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">{tip.title}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Weather & Outdoor Advisory */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-start gap-3 text-xs text-amber-200/90">
              <Wind className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-amber-300">Rooftop Climate Note: </span>
                Both outdoor open-air terraces and glass-enclosed heated indoor lounges will be open all night. Coat check will be available upon arrival at the rooftop lobby.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
