import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Clock, CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '@/config/projects';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: project.title,
    description: project.tagline,
    openGraph: { title: project.title, description: project.tagline },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const CATEGORY_COLORS: Record<string, string> = {
    ai: 'bg-purple-500/15 text-purple-300 border-purple-500/25',
    fullstack: 'bg-blue-500/15 text-blue-300 border-blue-500/25',
    erp: 'bg-orange-500/15 text-orange-300 border-orange-500/25',
    backend: 'bg-green-500/15 text-green-300 border-green-500/25',
    automation: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/25',
    frontend: 'bg-pink-500/15 text-pink-300 border-pink-500/25',
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-950/30 to-purple-950/20 border-b border-white/8">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="section-container py-16 relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div className="flex flex-wrap items-start gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${CATEGORY_COLORS[project.category] || 'border-white/20 text-slate-300'}`}>
              {project.category.toUpperCase()}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === 'live' ? 'bg-green-500/15 text-green-400' : 'bg-yellow-500/15 text-yellow-400'}`}>
              ● {project.status === 'live' ? 'Live' : 'In Progress'}
            </span>
            {project.featured && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/15 text-yellow-400">★ Featured</span>
            )}
          </div>

          <h1 className="section-heading text-4xl md:text-5xl mb-4">{project.title}</h1>
          <p className="text-slate-300 text-lg max-w-2xl mb-6">{project.tagline}</p>

          <div className="flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm hover:opacity-90 transition-all"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass-card text-white font-semibold text-sm hover:border-white/20 transition-all"
              >
                <FaGithub className="w-4 h-4" /> View Code
              </a>
            )}
            <div className="flex items-center gap-1.5 text-slate-400 text-sm">
              <Clock className="w-4 h-4" /> {project.duration}
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 flex flex-col gap-">
            {/* Business Problem */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-red-500/20 flex items-center justify-center text-red-400 text-xs">!</span>
                The Problem
              </h2>
              <div className="glass-card rounded-xl p-5 border border-red-500/10">
                <p className="text-slate-300 leading-relaxed">{project.businessProblem}</p>
              </div>
            </section>

            {/* Solution */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-green-500/20 flex items-center justify-center text-green-400 text-xs">✓</span>
                The Solution
              </h2>
              <div className="glass-card rounded-xl p-5 border border-green-500/10">
                <p className="text-slate-300 leading-relaxed">{project.solution}</p>
              </div>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4">Key Features</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 glass-card p-3 rounded-xl border border-white/8">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Challenges */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                Challenges Faced
              </h2>
              <ul className="flex flex-col gap-">
                {project.challengesFaced.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-slate-300 text-sm">
                    <span className="text-yellow-400 mt-1 shrink-0">▸</span>
                    {c}
                  </li>
                ))}
              </ul>
            </section>

            {/* Lessons Learned */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-blue-400" />
                Lessons Learned
              </h2>
              <ul className="flex flex-col gap-">
                {project.lessonsLearned.map((l) => (
                  <li key={l} className="flex items-start gap-2.5 text-slate-300 text-sm">
                    <span className="text-blue-400 mt-1 shrink-0">▸</span>
                    {l}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-">
            {/* Project Info */}
            <div className="glass-card rounded-xl p-5 border border-white/8 flex flex-col gap-">
              <h3 className="text-white font-semibold">Project Details</h3>
              {[
                { label: 'Category', value: project.category },
                { label: 'Status', value: project.status },
                { label: 'Duration', value: project.duration },
                { label: 'Completed', value: project.completedAt },
                ...(project.clientName ? [{ label: 'Client', value: project.clientName }] : []),
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0">
                  <span className="text-slate-400">{label}</span>
                  <span className="text-white font-medium capitalize">{value}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="glass-card rounded-xl p-5 border border-white/8">
              <h3 className="text-white font-semibold mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-lg text-xs font-mono text-slate-300 bg-white/5 border border-white/8">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="glass-card rounded-xl p-5 border border-blue-500/20 bg-blue-500/5">
              <p className="text-white font-semibold mb-1">Want something similar?</p>
              <p className="text-slate-400 text-sm mb-4">Let&apos;s discuss your project requirements.</p>
              <Link
                href="/#contact"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm hover:opacity-90 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
