import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar, Tag } from 'lucide-react';
import { projects } from '@/config/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore all projects built by Vamsi Krishna — AI platforms, ERP systems, full-stack applications, and automation tools.',
};

const CATEGORY_BADGE: Record<string, string> = {
  ai: 'bg-purple-500/15 text-purple-300 border-purple-500/25',
  fullstack: 'bg-blue-500/15 text-blue-300 border-blue-500/25',
  erp: 'bg-orange-500/15 text-orange-300 border-orange-500/25',
  backend: 'bg-green-500/15 text-green-300 border-green-500/25',
  automation: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/25',
  frontend: 'bg-pink-500/15 text-pink-300 border-pink-500/25',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="section-container py-16 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-blue-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">Portfolio</span>
          </div>
          <h1 className="section-heading text-5xl mb-4">
            All <span className="gradient-text">Projects</span>
          </h1>
          <p className="section-subheading mx-auto">
            {projects.length} projects delivered — from AI platforms to enterprise ERP systems.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-white/8 hover:border-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 group"
            >
              {/* Thumbnail */}
              <div className="h-44 bg-gradient-to-br from-blue-900/40 to-purple-900/40 flex items-center justify-center relative">
                <div className="text-7xl opacity-15 font-black gradient-text" style={{ fontFamily: 'var(--font-display)' }}>
                  {project.title.slice(0, 2).toUpperCase()}
                </div>
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs border ${CATEGORY_BADGE[project.category] || ''}`}>
                    {project.category.toUpperCase()}
                  </span>
                </div>
                {project.featured && (
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs bg-yellow-500/15 text-yellow-400">★ Featured</div>
                )}
              </div>

              <div className="p-5 flex flex-col gap-">
                <h2 className="text-white font-bold text-base leading-snug group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">{project.tagline}</p>

                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded text-xs font-mono text-slate-400 bg-white/5">{tech}</span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-0.5 rounded text-xs font-mono text-slate-500">+{project.techStack.length - 4}</span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                    <Clock className="w-3 h-3" />{project.duration}
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-1 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors"
                  >
                    View Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
