'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Sparkles, Download, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import HeroScene from './HeroScene';
import MagneticButton from '../shared/MagneticButton';
import SplitText from '../shared/SplitText';
import CountUp from 'react-countup';

const ROLES = ['Software Engineer', 'AI Developer', 'Full-Stack Engineer', 'Freelance Consultant'];

function TypingText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length === 0) {
          setIsDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, isDeleting ? 60 : 100);
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, index, words]);

  return (
    <span className="gradient-text">
      {displayed}
      <span className="animate-pulse text-blue-400">|</span>
    </span>
  );
}

const STATS = [
  { value: 30, suffix: '+', label: 'Projects Delivered' },
  { value: 4, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
  { value: 15, suffix: '+', label: 'Happy Clients' },
];

const FLOATING_TECHS = [
  { name: 'Next.js', x: '10%', y: '20%', delay: 0 },
  { name: 'React', x: '80%', y: '15%', delay: 0.5 },
  { name: 'Python', x: '85%', y: '65%', delay: 1 },
  { name: 'Node.js', x: '8%', y: '70%', delay: 1.5 },
  { name: 'GPT-4', x: '50%', y: '5%', delay: 0.8 },
  { name: 'Docker', x: '45%', y: '90%', delay: 1.2 },
];

export default function HeroSection() {

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-grid">
      {/* 3D Scene */}
      <HeroScene />

      {/* Aurora blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full opacity-10 animate-aurora"
          style={{ background: 'radial-gradient(circle, #3B82F6 0%, #8B5CF6 50%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-8 animate-aurora"
          style={{ background: 'radial-gradient(circle, #8B5CF6 0%, #06B6D4 50%, transparent 70%)', animationDelay: '5s' }}
        />
      </div>

      {/* Floating tech badges */}
      {FLOATING_TECHS.map((tech) => (
        <motion.div
          key={tech.name}
          className="absolute hidden xl:flex items-center gap-1.5 glass-card px-3 py-1.5 text-xs font-mono text-blue-300 border-blue-500/20 pointer-events-none"
          style={{ left: tech.x, top: tech.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ delay: tech.delay + 1.5, duration: 0.5 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          {tech.name}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="section-container relative z-10 py-24 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left — Text */}
          <div className="flex flex-col gap-">
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full border-green-500/20"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-sm font-medium">Available for freelance work</span>
              <Sparkles className="w-3.5 h-3.5 text-green-400" />
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <h1 className="section-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                <SplitText text="Hi, I'm" type="words" delay={0.2} />{' '}
                <span className="gradient-text" style={{ fontFamily: 'var(--font-display)' }}>
                  <SplitText text="Vamsi Krishna" type="chars" delay={0.5} />
                </span>
              </h1>
            </motion.div>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 min-h-[3rem] sm:min-h-[2.5rem] flex items-center"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <TypingText words={ROLES} />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-slate-400 text-lg leading-relaxed max-w-xl"
            >
              I build <span className="text-blue-400 font-semibold">scalable web applications</span> and{' '}
              <span className="text-purple-400 font-semibold">AI-powered solutions</span> that drive real business results.
              From ERP systems to GPT-4 integrations — I turn complex problems into elegant software.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 relative z-20"
            >
              <MagneticButton>
                <Link
                  href="/#projects"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-blue-500/25"
                >
                  <ExternalLink className="w-4 h-4" />
                  View My Work
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/#contact"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl glass-card text-white font-semibold hover:border-blue-500/30 hover:scale-105 transition-all duration-200"
                >
                  <Mail className="w-4 h-4" />
                  Hire Me
                </Link>
              </MagneticButton>
              <MagneticButton>
                <a
                  href={siteConfig.resumeUrl}
                  download
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-slate-300 hover:text-white transition-colors text-sm"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-4 pt-2"
            >
              <span className="text-slate-500 text-sm">Find me on:</span>
              {[
                { href: 'https://github.com/vamsikrishna', Icon: FaGithub, label: 'GitHub' },
                { href: 'https://linkedin.com/in/vamsikrishna', Icon: FaLinkedin, label: 'LinkedIn' },
                { href: `mailto:${siteConfig.email}`, Icon: Mail, label: 'Email' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/30 hover:scale-110 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/8"
            >
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold gradient-text" style={{ fontFamily: 'var(--font-display)' }}>
                    <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                    {stat.suffix}
                  </div>
                  <div className="text-slate-500 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, type: 'spring', stiffness: 80 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Rotating ring */}
              <div className="absolute inset-[-16px] rounded-full border-2 border-dashed border-blue-500/20 animate-spin-slow" />
              <div className="absolute inset-[-32px] rounded-full border border-purple-500/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-2xl" />

              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-blue-500/20">
                <Image
                  src="/images/profile.png"
                  alt="Vamsi Krishna - Software Engineer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Experience badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-8 glass-card px-4 py-2 rounded-xl border-blue-500/20"
              >
                <div className="text-blue-400 font-bold text-sm">4+ Years</div>
                <div className="text-slate-400 text-xs">Experience</div>
              </motion.div>

              {/* Projects badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-4 -right-8 glass-card px-4 py-2 rounded-xl border-purple-500/20"
              >
                <div className="text-purple-400 font-bold text-sm">30+ Projects</div>
                <div className="text-slate-400 text-xs">Delivered</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-slate-500 text-xs">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-4 h-4 text-slate-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
