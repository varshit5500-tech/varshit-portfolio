import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, Send, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900/60 relative scroll-mt-20">
      {/* Ambient background glow */}
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <div className="space-y-2 text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/50 border border-cyan-800/60 px-3 py-1 rounded-full">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Get In Touch
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-400">
            Have a project idea, an internship opportunity, or simply want to talk tech? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Methods Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Email Card */}
          <div className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-200 group h-full">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block mb-1">
                  Email
                </span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-base font-bold text-white hover:text-cyan-300 transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
                <p className="text-xs text-slate-400 mt-1">
                  Direct inquiries & messages
                </p>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center gap-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/25 transition-colors"
              >
                <span>Compose</span>
                <Send className="w-3 h-3" />
              </a>
              <button
                onClick={handleCopyEmail}
                type="button"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white text-slate-400 hover:border-slate-700 transition-colors"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-200 group h-full">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block mb-1">
                  LinkedIn Profile
                </span>
                <h3 className="text-base font-bold text-white">
                  Varshit Dholawala
                </h3>
                <span className="inline-block text-[10px] font-mono mt-1 px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  [Placeholder Link Ready]
                </span>
                <p className="text-xs text-slate-400 mt-2">
                  Connect for professional networking & updates
                </p>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-slate-800/80">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-lg bg-blue-500/15 text-blue-300 border border-blue-500/30 hover:bg-blue-500/25 transition-colors"
              >
                <span>View LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-slate-500/40 transition-all duration-200 group h-full">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-200 group-hover:scale-105 transition-transform">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                  GitHub Profile
                </span>
                <h3 className="text-base font-bold text-white">
                  @varshit-dholawala
                </h3>
                <span className="inline-block text-[10px] font-mono mt-1 px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  [Placeholder Link Ready]
                </span>
                <p className="text-xs text-slate-400 mt-2">
                  Explore open source repositories & experiments
                </p>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-slate-800/80">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-lg bg-slate-800/80 text-slate-200 border border-slate-700/60 hover:bg-slate-800 hover:text-white transition-colors"
              >
                <span>Visit GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Location & Response Note */}
        <div className="glass-card rounded-xl p-4 border border-slate-800/80 text-center flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>Based in <strong>Jaipur, Rajasthan, India</strong></span>
          </div>
          <div>
            <span>⚡ Typically responds within 24 hours</span>
          </div>
        </div>

      </div>
    </section>
  );
}
