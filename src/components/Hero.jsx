import React from 'react';
import { ArrowDown, FolderGit2, Mail, Sparkles, MapPin, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern scroll-mt-20"
    >
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center space-y-8 z-10">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-medium text-cyan-300 shadow-sm animate-pulse-slow">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span>B.Tech ECE Fresher • JECRC University, Jaipur</span>
        </div>

        {/* Hero Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-300">
            {personalInfo.title}
          </p>
        </div>

        {/* 1-2 line intro */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed">
          Electronics & Communication engineering student bridging the gap between embedded hardware thinking, modern web engineering, and emerging AI tools.
        </p>

        {/* Location & University chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-1 text-xs text-slate-400">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Jaipur, Rajasthan</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>Electronics & Communication</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>AI & Web Tech</span>
          </span>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => scrollTo('projects')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>View Projects</span>
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl glass-card border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Contact Me</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-8 flex justify-center">
          <button
            onClick={() => scrollTo('about')}
            className="p-2 rounded-full text-slate-500 hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 animate-bounce"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
