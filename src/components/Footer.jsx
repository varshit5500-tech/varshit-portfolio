import React from 'react';
import { ArrowUp, Heart, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-900 bg-slate-950/60 py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="font-bold text-white text-base">
              {personalInfo.name}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs text-cyan-400 font-medium">B.Tech ECE</span>
          </div>
          <p className="text-xs text-slate-400">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>

        {/* Credit Line */}
        <div className="text-xs text-slate-400 text-center flex items-center justify-center gap-1.5">
          <span>Designed & built with</span>
          <span className="text-cyan-400 font-medium">React</span>
          <span>+</span>
          <span className="text-blue-400 font-medium">Tailwind CSS</span>
          <span>+</span>
          <span className="text-indigo-400 font-medium">Vite</span>
        </div>

        {/* Back to Top */}
        <div className="flex items-center">
          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg glass-card border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}
