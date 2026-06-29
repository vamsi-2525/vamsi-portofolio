'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Briefcase, Calendar } from 'lucide-react';
import { experiences } from '@/config/experience';
import { formatDate } from '@/lib/utils';
import { cn } from '@/lib/utils';

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-orange-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
            <span className="text-orange-400 text-sm font-medium uppercase tracking-wider">Experience</span>
          </div>
          <h2 className="section-heading mb-4">
            My <span className="gradient-text">Professional Journey</span>
          </h2>
          <p className="section-subheading mx-auto">
            4+ years of building products across startups, agencies, and freelance engagements.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent" />

          <div className="flex flex-col gap-">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="relative flex gap-6 pl-6"
              >
                {/* Dot */}
                <div className="absolute left-0 top-5 w-16 flex items-start justify-center">
                  <div className={cn(
                    'w-4 h-4 rounded-full border-2 z-10 shadow-lg',
                    exp.endDate === 'Present'
                      ? 'bg-green-400 border-green-400 shadow-green-400/30'
                      : 'bg-blue-400 border-blue-400 shadow-blue-400/30'
                  )} />
                </div>

                {/* Card */}
                <div className="flex-1 glass-card rounded-2xl p-5 border border-white/8 hover:border-blue-500/20 transition-all duration-300 hover:-translate-x-1 ml-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-white font-bold text-base">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                        <span className="text-blue-400 font-medium text-sm">{exp.company}</span>
                        <span className={cn(
                          'px-2 py-0.5 rounded-full text-xs border',
                          exp.type === 'freelance'
                            ? 'bg-purple-500/15 text-purple-300 border-purple-500/25'
                            : exp.type === 'internship'
                              ? 'bg-yellow-500/15 text-yellow-300 border-yellow-500/25'
                              : 'bg-blue-500/15 text-blue-300 border-blue-500/25'
                        )}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <div className="text-right flex flex-col gap-">
                      <div className="flex items-center gap-1 text-slate-400 text-xs">
                        <Calendar className="w-3 h-3" />
                        {formatDate(exp.startDate)} — {exp.endDate === 'Present' ? (
                          <span className="text-green-400 font-medium">Present</span>
                        ) : formatDate(exp.endDate)}
                      </div>
                      <div className="flex items-center gap-1 text-slate-500 text-xs">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-3">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="flex flex-col gap- mb-4">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-blue-400 mt-1 shrink-0">▸</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded text-xs font-mono text-slate-400 bg-white/5 border border-white/8">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
