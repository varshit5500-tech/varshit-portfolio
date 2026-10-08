import React from 'react';
import { FolderGit2, ExternalLink, Github, Sparkles, Layers, Info } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900/60 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-2 text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/50 border border-cyan-800/60 px-3 py-1 rounded-full">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Showcase & Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Projects & Prototypes
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-400">
            A blend of live projects and modular starter concepts designed to showcase development and engineering skills.
          </p>
        </div>

        {/* Student Notice Banner */}
        <div className="glass-card rounded-xl p-4 border border-cyan-500/20 flex items-start gap-3 text-xs text-slate-300 max-w-3xl mx-auto bg-cyan-950/20">
          <Info className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-cyan-300">Student Customization Ready:</strong> The projects below include this live portfolio and clearly-labeled placeholder projects. When you create new GitHub repositories or deploy live apps, you can easily replace them in <code className="text-cyan-300 font-mono bg-slate-900/80 px-1 py-0.5 rounded">src/data/portfolioData.js</code>.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40 group relative overflow-hidden h-full"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400">
                    {project.category}
                  </span>
                  
                  {project.isPlaceholder ? (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                      Editable Template
                    </span>
                  ) : (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Live Project
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mt-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="space-y-1.5 pt-2">
                  <div className="text-[11px] font-semibold text-slate-400">Tech Stack:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((techItem, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800 group-hover:border-slate-700 transition-colors"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-3">
                <a
                  href={project.liveUrl}
                  target={project.liveUrl !== '#' ? '_blank' : '_self'}
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-2.5 px-3 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/25 hover:border-cyan-500/50 transition-all text-center"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-medium py-2.5 px-3 rounded-lg bg-slate-900/80 text-slate-300 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
                  aria-label={`View ${project.title} repository`}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repo</span>
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
