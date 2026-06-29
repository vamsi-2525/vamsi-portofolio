'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '@/config/skills';
import { SkillCategory } from '@/types/skill.types';
import { cn } from '@/lib/utils';

const CATEGORIES: { key: SkillCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'ai', label: 'AI / ML' },
  { key: 'database', label: 'Database' },
  { key: 'cloud', label: 'Cloud' },
  { key: 'devops', label: 'DevOps' },
  { key: 'tools', label: 'Tools' },
];

const CATEGORY_COLORS: Record<string, string> = {
  frontend: 'from-blue-500/20 to-cyan-500/20 border-blue-500/20 text-blue-300',
  backend: 'from-green-500/20 to-emerald-500/20 border-green-500/20 text-green-300',
  ai: 'from-purple-500/20 to-pink-500/20 border-purple-500/20 text-purple-300',
  database: 'from-orange-500/20 to-amber-500/20 border-orange-500/20 text-orange-300',
  cloud: 'from-sky-500/20 to-indigo-500/20 border-sky-500/20 text-sky-300',
  devops: 'from-teal-500/20 to-cyan-500/20 border-teal-500/20 text-teal-300',
  tools: 'from-rose-500/20 to-pink-500/20 border-rose-500/20 text-rose-300',
};

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'all'>('all');

  const filtered = activeCategory === 'all' ? skills : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-purple-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span className="text-purple-400 text-sm font-medium uppercase tracking-wider">Technical Skills</span>
          </div>
          <h2 className="section-heading mb-4">
            My <span className="gradient-text">Tech Arsenal</span>
          </h2>
          <p className="section-subheading mx-auto">
            A curated collection of technologies I use to build production-grade applications.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'glass-card text-slate-400 hover:text-white hover:border-white/20'
              )}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
        >
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: i * 0.04, type: 'spring', stiffness: 200 }}
              className={cn(
                'glass-card-hover glass-card p-4 rounded-xl flex flex-col items-center gap-3 cursor-default group',
                'border',
                CATEGORY_COLORS[skill.category]?.split(' ').slice(2, 4).join(' ') || 'border-white/8'
              )}
            >
              {/* Icon circle with colored gradient */}
              <div
                className={cn(
                  'w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-lg font-bold',
                  CATEGORY_COLORS[skill.category]?.split(' ').slice(0, 2).join(' ') || 'from-blue-500/20 to-purple-500/20'
                )}
                style={{ color: skill.color || '#fff' }}
              >
                {skill.name.slice(0, 2)}
              </div>

              <div className="text-center">
                <p className="text-white text-sm font-semibold leading-tight">{skill.name}</p>
                <p className="text-slate-500 text-xs mt-0.5">{skill.yearsOfExperience}y exp</p>
              </div>

              {/* Proficiency bar */}
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                  transition={{ delay: 0.3 + i * 0.04, duration: 0.8, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                />
              </div>
              <span className="text-slate-500 text-xs">{skill.proficiency}%</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
