import React, { useState } from 'react';
import { Quote, Star, ArrowRight, Building, Award, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/content';
import { InstitutionType } from './types';

interface TestimonialsProps {
  onOpenDemoModal: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenDemoModal }) => {
  const [filter, setFilter] = useState<'all' | InstitutionType>('all');

  const filteredList = filter === 'all' 
    ? TESTIMONIALS_DATA 
    : TESTIMONIALS_DATA.filter((t) => t.institutionType === filter);

  return (
    <section id="testimonials-section" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-bold tracking-wider text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
              Institutional Case Studies
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 font-['Space_Grotesk',sans-serif]">
              Proven Results from Campus Leadership
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              Read how leading academic directors, university deans, and school principals modernized their infrastructure and accelerated enrollment with Omni Cat.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
            {(['all', 'university', 'college', 'school'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                  filter === cat 
                    ? 'bg-indigo-600 text-white shadow' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat === 'all' ? 'All Tiers' : cat === 'school' ? 'K-12' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredList.map((t) => (
            <div
              key={t.id}
              id={`testimonial-card-${t.id}`}
              className="bg-[#0f172a] border border-slate-800 hover:border-slate-700 rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 group hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div>
                {/* Header with Impact Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold font-mono">
                    {t.impactMetric} {t.impactLabel}
                  </div>
                </div>

                {/* Quote text */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-indigo-500/20 absolute -top-3 -left-2 -z-0" />
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed relative z-10 font-normal italic">
                    &quot;{t.quote}&quot;
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center gap-3.5">
                <img
                  src={t.avatar}
                  alt={t.author}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500/40"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-white truncate">{t.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                  </div>
                  <div className="text-xs text-indigo-300 font-medium truncate">{t.role}</div>
                  <div className="text-[11px] text-slate-400 truncate">{t.institution} • {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-indigo-950/60 via-slate-900 to-purple-950/60 border border-indigo-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk',sans-serif]">
              Join 500+ Institutions Transforming Campus Operations
            </h3>
            <p className="text-slate-300 text-sm mt-1">
              Talk to an education modernization specialist to see custom reference models for your institution type.
            </p>
          </div>
          <button
            onClick={onOpenDemoModal}
            className="px-6 py-3.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2 whitespace-nowrap"
          >
            <span>Contact for Sales &amp; Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
