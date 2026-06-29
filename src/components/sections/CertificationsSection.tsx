'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { certificates } from '@/config/certificates';
import { cn } from '@/lib/utils';

const CATEGORY_COLORS: Record<string, string> = {
  Cloud: 'border-sky-500/25 bg-sky-500/10 text-sky-300',
  AI: 'border-purple-500/25 bg-purple-500/10 text-purple-300',
  Frontend: 'border-blue-500/25 bg-blue-500/10 text-blue-300',
  DevOps: 'border-teal-500/25 bg-teal-500/10 text-teal-300',
  Backend: 'border-green-500/25 bg-green-500/10 text-green-300',
};

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-950/3 to-transparent pointer-events-none" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-yellow-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium uppercase tracking-wider">Certifications</span>
          </div>
          <h2 className="section-heading mb-4">
            Professional <span className="gradient-text">Credentials</span>
          </h2>
          <p className="section-subheading mx-auto">
            Industry-recognized certifications validating my expertise across cloud, AI, and full-stack development.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30, rotateX: 10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-5 border border-white/8 hover:border-yellow-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-500/5 group"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5 text-yellow-400" />
                </div>
                <span className={cn('px-2.5 py-0.5 rounded-full text-xs font-medium border', CATEGORY_COLORS[cert.category] || 'border-white/20 bg-white/5 text-slate-300')}>
                  {cert.category}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-white font-semibold text-sm leading-snug mb-1">{cert.title}</h3>
              <p className="text-blue-400 text-xs font-medium mb-3">{cert.issuer}</p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-white/8">
                <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                  <Calendar className="w-3 h-3" />
                  {new Date(cert.date + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Verify <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
