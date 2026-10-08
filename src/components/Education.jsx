import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900/60 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-2 text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/50 border border-cyan-800/60 px-3 py-1 rounded-full">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Pathway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education & Coursework
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-400">
            Solid foundations in Electronics and Communication Engineering alongside core computing sciences.
          </p>
        </div>

        {/* Education Timeline / Primary Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
            <div className="space-y-1">
              <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-2">
                Undergraduate Degree
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {educationData.degree}
              </h3>
              <p className="text-lg font-medium text-cyan-300">
                {educationData.branch}
              </p>
              <div className="text-slate-300 text-sm font-medium">
                {educationData.institution}
              </div>
            </div>

            <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 bg-slate-900/80 px-3 py-1 rounded-md border border-slate-800">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>{educationData.duration}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-900/80 px-3 py-1 rounded-md border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>{educationData.location}</span>
              </span>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {educationData.description}
          </p>

          {/* Key Coursework & Focus Areas */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Relevant Coursework & Key Focus Areas</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
              {educationData.coursework.map((course, idx) => (
                <div 
                  key={idx} 
                  className="glass-card bg-slate-900/40 p-3 rounded-xl border border-slate-800/80 hover:border-cyan-500/40 transition-colors flex items-start gap-2.5"
                >
                  <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-xs font-medium text-slate-200">
                    {course}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
