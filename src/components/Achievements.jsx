import React from 'react';
import { Award, CheckCircle2, PlusCircle, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900/60 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-2 text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/50 border border-cyan-800/60 px-3 py-1 rounded-full">
            <Award className="w-3.5 h-3.5" />
            <span>Milestones & Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Certifications & Achievements
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-400">
            Curated coursework, technical certifications, and milestone recognitions.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group relative h-full"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {item.type}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {item.year}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400">
                    {item.issuer}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/70 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span className="text-[11px]">Completed & Verified</span>
                </div>
                <span className="text-[11px] text-slate-500">Milestone #{item.id}</span>
              </div>
            </div>
          ))}

          {/* Quick Extend Slot */}
          <div className="md:col-span-2 glass-card rounded-2xl p-6 border-dashed border-slate-700/80 hover:border-cyan-500/50 transition-colors flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 bg-slate-900/30">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <PlusCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  [Add Your Next Certification, Course, or Hackathon]
                </h3>
                <p className="text-xs text-slate-400 mt-1 max-w-xl">
                  Easily append new hackathons, NPTEL/Coursera certificates, or awards inside <code className="text-cyan-300 font-mono">portfolioData.js</code>.
                </p>
              </div>
            </div>
            <span className="text-[11px] font-semibold text-cyan-400 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 whitespace-nowrap">
              Ready to Expand
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
