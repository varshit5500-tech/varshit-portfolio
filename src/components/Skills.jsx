import React from 'react';
import { 
  Code2, 
  Palette, 
  FileCode2, 
  Terminal, 
  BrainCircuit, 
  Sparkles, 
  Globe, 
  Laptop,
  Wrench
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Map icon string name to Lucide component
const iconMap = {
  Code2: Code2,
  Palette: Palette,
  FileCode2: FileCode2,
  Terminal: Terminal,
  BrainCircuit: BrainCircuit,
  Sparkles: Sparkles,
  Globe: Globe,
  Laptop: Laptop,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900/60 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-2 text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/50 border border-cyan-800/60 px-3 py-1 rounded-full">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills & Competencies
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-400">
            A comprehensive overview of programming languages, web technologies, and intelligent productivity workflows.
          </p>
        </div>

        {/* 8 Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillsData.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Code2;

            return (
              <div
                key={skill.id}
                className="group glass-card rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 relative overflow-hidden flex flex-col justify-between h-full"
              >
                {/* Ambient hover light */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all" />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/40 transition-colors shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/60">
                      {skill.level}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-medium text-cyan-400 uppercase tracking-wider block mb-0.5">
                      {skill.category}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Core Focus Area</span>
                  <span className="text-cyan-400 font-mono">0{skillsData.indexOf(skill) + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
