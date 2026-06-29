'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, Coffee, Zap } from 'lucide-react';
import Image from 'next/image';

const STATS = [
  { value: '4+', label: 'Years Experience', icon: Calendar },
  { value: '30+', label: 'Projects Shipped', icon: Zap },
  { value: '15+', label: 'Happy Clients', icon: Coffee },
  { value: '5★', label: 'Average Rating', icon: MapPin },
];

const ABOUT_POINTS = [
  "I'm a Software Engineer and AI Developer based in Hyderabad, India, passionate about building products that solve real problems at scale.",
  "With 4+ years of experience, I've worked across full-stack web development, AI/ML integrations, ERP systems, and business automation — delivering 30+ projects for clients across India, UAE, UK, and the US.",
  "When I'm not coding, I'm exploring new AI models, writing technical blogs, or contributing to open-source projects.",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-blue-500/20 mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
      <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">{children}</span>
    </div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image + decorative */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-xs md:w-72 h-[400px] mx-auto md:mx-0">
              <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10">
                <Image
                  src="/images/profile.png"
                  alt="Vamsi Krishna"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold">Vamsi Krishna</p>
                  <p className="text-slate-400 text-sm">Software Engineer & AI Developer</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3 h-3 text-blue-400" />
                    <span className="text-blue-400 text-xs">Hyderabad, India</span>
                  </div>
                </div>
              </div>

              {/* Decorative cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -right-12 top-12 glass-card p-3 rounded-xl border-purple-500/20 shadow-lg"
              >
                <div className="text-purple-400 font-bold">AI Engineer</div>
                <div className="text-slate-500 text-xs">GPT-4 • LangChain • RAG</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 1 }}
                className="absolute -left-12 bottom-16 glass-card p-3 rounded-xl border-cyan-500/20 shadow-lg"
              >
                <div className="text-cyan-400 font-bold">Open to Work</div>
                <div className="text-slate-500 text-xs">Worldwide • Remote</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6 relative"
          >
            {/* SVG Line Drawing Background */}
            <div className="absolute -top-12 -right-12 -z-10 opacity-20 pointer-events-none hidden lg:block">
              <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M 50 50 C 100 200, 200 100, 250 250"
                  stroke="url(#gradientBlue)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                />
                <defs>
                  <linearGradient id="gradientBlue" x1="0" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3B82F6" />
                    <stop offset="1" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <SectionLabel>About Me</SectionLabel>
            <h2 className="section-heading">
              Crafting Digital{' '}
              <span className="gradient-text">Experiences</span> That Matter
            </h2>

            <div className="flex flex-col gap-">
              {ABOUT_POINTS.map((point, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-slate-400 leading-relaxed"
                >
                  {point}
                </motion.p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass-card p-4 rounded-xl border-white/8 hover:border-blue-500/20 transition-colors"
                >
                  <div className="text-2xl font-bold gradient-text" style={{ fontFamily: 'var(--font-display)' }}>
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Tech focus */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Next.js', 'React', 'Node.js', 'Python', 'OpenAI', 'LangChain', 'PostgreSQL', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-mono text-blue-300 bg-blue-500/10 border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
