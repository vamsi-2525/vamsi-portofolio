'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, Filter } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/config/projects';
import { ProjectCategory } from '@/types/project.types';
import { cn } from '@/lib/utils';
import TiltCard from '../shared/TiltCard';

const FILTERS: { key: ProjectCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'All Projects' },
  { key: 'ai', label: 'AI & ML' },
  { key: 'fullstack', label: 'Full-Stack' },
  { key: 'erp', label: 'ERP' },
  { key: 'backend', label: 'Backend' },
  { key: 'automation', label: 'Automation' },
  { key: 'frontend', label: 'Frontend' },
];

const CATEGORY_BADGE: Record<string, string> = {
  ai: 'bg-purple-500/15 text-purple-300 border-purple-500/25',
  fullstack: 'bg-blue-500/15 text-blue-300 border-blue-500/25',
  erp: 'bg-orange-500/15 text-orange-300 border-orange-500/25',
  backend: 'bg-green-500/15 text-green-300 border-green-500/25',
  automation: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/25',
  frontend: 'bg-pink-500/15 text-pink-300 border-pink-500/25',
};

const STATUS_BADGE: Record<string, string> = {
  live: 'bg-green-500/15 text-green-400',
  wip: 'bg-yellow-500/15 text-yellow-400',
  archived: 'bg-slate-500/15 text-slate-400',
};

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [active, setActive] = useState<ProjectCategory | 'all'>('all');

  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active);
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-blue-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">Portfolio</span>
          </div>
          <h2 className="section-heading mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading mx-auto">
            Real-world solutions I've built — from AI platforms to enterprise systems.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                active === f.key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'glass-card text-slate-400 hover:text-white hover:border-white/20'
              )}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <TiltCard className="h-full">
                  <div className="glass-card group rounded-2xl overflow-hidden hover:border-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 border border-white/8 h-full flex flex-col">
                    {/* Thumbnail */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-900/40 to-purple-900/40">
                      <motion.div 
                        initial={{ scale: 1.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center"
                      >
                        <div className="text-6xl opacity-20 font-black gradient-text" style={{ fontFamily: 'var(--font-display)' }}>
                          {project.title.slice(0, 2).toUpperCase()}
                        </div>
                      </motion.div>
                  {/* Status */}
                  <div className={cn('absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium', STATUS_BADGE[project.status])}>
                    ● {project.status === 'live' ? 'Live' : project.status === 'wip' ? 'In Progress' : 'Archived'}
                  </div>
                  {/* Featured */}
                  {project.featured && (
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/15 text-yellow-400">
                      ★ Featured
                    </div>
                  )}
                  {/* Hover overlay (Visible on mobile by default or on hover) */}
                  <div className="absolute inset-0 bg-black/60 md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                        aria-label="GitHub"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <h3 className="text-white font-semibold text-base leading-tight">{project.title}</h3>
                    <span className={cn('px-2 py-0.5 rounded-full text-xs border shrink-0', CATEGORY_BADGE[project.category])}>
                      {project.category.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">{project.tagline}</p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded text-xs font-mono text-slate-400 bg-white/5">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-0.5 rounded text-xs font-mono text-slate-500">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/5 mt-auto">
                    <span className="text-slate-500 text-xs">{project.duration}</span>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex items-center gap-1 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors group/link"
                    >
                      Case Study
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
                </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card text-white font-semibold hover:border-blue-500/30 hover:scale-105 transition-all duration-200"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
