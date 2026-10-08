import React from 'react';
import { User, Lightbulb, Compass, Code, GraduationCap, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900/60 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2 text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/50 border border-cyan-800/60 px-3 py-1 rounded-full">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering Background & Drive
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-400">
            A quick glimpse into who I am, my academic background, and what inspires me.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 space-y-5">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span>Student at JECRC University</span>
            </h3>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Hello! I am <strong className="text-white font-medium">{personalInfo.name}</strong>, an undergraduate pursuing my Bachelor of Technology in Electronics and Communication Engineering (ECE) at <strong className="text-cyan-300 font-medium">{personalInfo.university}</strong> in {personalInfo.location}.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Studying ECE provides me with a deep appreciation for systems architecture, hardware logic, and signal flows. At the same time, I am deeply drawn to the power of modern software engineering — specifically web development and artificial intelligence — which allow rapid iteration and global impact.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              I believe in honest learning through practical projects. Whether exploring generative AI tools, building responsive React interfaces, or understanding microcontroller logic, my focus is on developing dependable, problem-solving skills step by step.
            </p>

            {/* Core Values Checklist */}
            <div className="pt-3 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Analytical engineering mindset</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Self-directed practical learner</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Responsive & clean web design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Eager for collaboration & growth</span>
              </div>
            </div>
          </div>

          {/* Quick Info & Stats Column */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="glass-card rounded-2xl p-6 space-y-4 border-l-4 border-l-cyan-500">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Curiosity-Led Approach</h4>
                  <p className="text-xs text-slate-400">Exploring how AI enhances modern tech</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Constantly testing new developer workflows, prompt strategies, and modern web frameworks to stay updated with rapid industry shifts.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 space-y-4 border-l-4 border-l-indigo-500">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Broad Horizon</h4>
                  <p className="text-xs text-slate-400">Hardware to software versatility</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Comfortable navigating low-level microcontroller circuits as well as modern user interfaces on the web.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="glass-card rounded-xl p-3.5 text-center">
                  <div className="text-xs text-slate-400">{stat.label}</div>
                  <div className="text-xs sm:text-sm font-semibold text-white mt-1 truncate">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
