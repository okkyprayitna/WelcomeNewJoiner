import React, { useState } from 'react';
import { X, ExternalLink, Settings, CheckCircle2, Sparkles, Send, Music } from 'lucide-react';
import { RsvpSubmission } from '../types';

interface RsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
  googleFormUrl: string;
  onUpdateGoogleFormUrl: (url: string) => void;
}

export const RsvpModal: React.FC<RsvpModalProps> = ({
  isOpen,
  onClose,
  googleFormUrl,
  onUpdateGoogleFormUrl,
}) => {
  const [activeTab, setActiveTab] = useState<'direct' | 'quick_form' | 'settings'>('direct');
  const [tempUrl, setTempUrl] = useState(googleFormUrl);
  const [urlSaved, setUrlSaved] = useState(false);

  // Quick In-app Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'Engineering',
    attendance: 'attending' as 'attending' | 'regret',
    dietary: 'None',
    plusOne: false,
    plusOneName: '',
    favoriteSong: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempUrl.trim()) {
      onUpdateGoogleFormUrl(tempUrl.trim());
      setUrlSaved(true);
      setTimeout(() => setUrlSaved(false), 2000);
    }
  };

  const handleOpenGoogleForm = () => {
    window.open(googleFormUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submission: RsvpSubmission = {
      ...formData,
      submittedAt: new Date().toISOString(),
    };
    
    // Save to local storage
    const existing = JSON.parse(localStorage.getItem('team_night_rsvps') || '[]');
    existing.push(submission);
    localStorage.setItem('team_night_rsvps', JSON.stringify(existing));
    
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#0a1226] border border-amber-400/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-amber-400/10 blur-2xl rounded-full pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-amber-300 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Team Night RSVP</span>
          </div>
          <h3 className="text-2xl font-bold font-serif-display text-white">
            Confirm Your Attendance
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Fri 12 Dec, 6:00 PM · Office Rooftop Terrace
          </p>
        </div>

        {/* Tabs */}
        <div className="flex rounded-xl bg-[#060c1a] p-1 border border-amber-400/15 mb-6 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('direct')}
            className={`flex-1 py-2 rounded-lg transition-all cursor-pointer ${
              activeTab === 'direct'
                ? 'bg-amber-400 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Google Form
          </button>
          <button
            onClick={() => setActiveTab('quick_form')}
            className={`flex-1 py-2 rounded-lg transition-all cursor-pointer ${
              activeTab === 'quick_form'
                ? 'bg-amber-400 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Direct RSVP
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-3 py-2 rounded-lg transition-all cursor-pointer flex items-center justify-center ${
              activeTab === 'settings'
                ? 'bg-amber-400 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
            title="Configure Google Form URL"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>

        {/* TAB 1: Google Form Direct Action */}
        {activeTab === 'direct' && (
          <div className="text-center py-2 space-y-5">
            <div className="p-4 rounded-2xl bg-[#0d1835] border border-amber-400/20 text-left">
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Our official RSVP questionnaire is hosted on Google Forms to collect meal selections, dietary requirements, and team awards voting.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-200/80 bg-[#070e20] p-2.5 rounded-lg border border-amber-400/15 truncate">
                <span className="shrink-0 text-slate-500">Target:</span>
                <span className="truncate">{googleFormUrl}</span>
              </div>
            </div>

            <button
              onClick={handleOpenGoogleForm}
              className="btn-gold-primary w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/25"
            >
              <span>Open Google Form</span>
              <ExternalLink className="w-4 h-4" />
            </button>

            <p className="text-[11px] text-slate-400">
              Opens in a secure new tab. Need to update the link? Switch to the Settings tab (gear icon).
            </p>
          </div>
        )}

        {/* TAB 2: Quick In-App RSVP */}
        {activeTab === 'quick_form' && (
          <div>
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-white">You're On The Guestlist!</h4>
                <p className="text-xs text-slate-300 max-w-xs mx-auto">
                  Thank you, <strong className="text-amber-300">{formData.name}</strong>. Your rooftop RSVP has been recorded. We will see you on Friday, 12 December!
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="btn-gold-primary px-6 py-2.5 rounded-xl text-xs font-bold uppercase cursor-pointer mt-2"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="space-y-3.5 text-left text-xs">
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#060b17] border border-amber-400/25 text-white placeholder-slate-600 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#060b17] border border-amber-400/25 text-white placeholder-slate-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Department</label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#060b17] border border-amber-400/25 text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Engineering">Engineering</option>
                      <option value="Product & Design">Product & Design</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Sales">Sales</option>
                      <option value="Operations & HR">Operations & HR</option>
                      <option value="Finance">Finance</option>
                      <option value="Executive">Executive</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Dietary Requirements</label>
                  <input
                    type="text"
                    value={formData.dietary}
                    onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                    placeholder="None, Vegetarian, Halal, Gluten-Free, Nut Allergy..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#060b17] border border-amber-400/25 text-white placeholder-slate-600 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium flex items-center gap-1.5">
                    <Music className="w-3.5 h-3.5 text-amber-400" />
                    <span>Song Request for the DJ</span>
                  </label>
                  <input
                    type="text"
                    value={formData.favoriteSong}
                    onChange={(e) => setFormData({ ...formData, favoriteSong: e.target.value })}
                    placeholder="Artist - Track Name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#060b17] border border-amber-400/25 text-white placeholder-slate-600 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold-primary w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Instant RSVP</span>
                </button>
              </form>
            )}
          </div>
        )}

        {/* TAB 3: Organizer Settings */}
        {activeTab === 'settings' && (
          <form onSubmit={handleSaveUrl} className="space-y-4 text-left text-xs">
            <div className="p-3.5 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-200">
              <span className="font-semibold text-white">Event Organizer Setting: </span>
              Paste your company's actual Google Form URL below. All RSVP buttons across this site will immediately open your link!
            </div>

            <div>
              <label className="block text-slate-300 mb-1.5 font-semibold">Google Form Link</label>
              <input
                type="url"
                required
                value={tempUrl}
                onChange={(e) => setTempUrl(e.target.value)}
                placeholder="https://forms.gle/..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#060b17] border border-amber-400/30 text-white font-mono text-xs focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                className="btn-gold-primary flex-1 py-2.5 rounded-xl text-xs font-bold uppercase cursor-pointer"
              >
                {urlSaved ? 'Saved Successfully!' : 'Save Link'}
              </button>
              <button
                type="button"
                onClick={() => window.open(tempUrl, '_blank')}
                className="px-4 py-2.5 rounded-xl bg-[#0c1833] hover:bg-[#12234a] border border-amber-400/30 text-amber-300 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Test
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
