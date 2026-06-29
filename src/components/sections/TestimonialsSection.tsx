'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/config/testimonials';

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [active, setActive] = useState(0);

  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[active];

  return (
    <section id="testimonials" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-pink-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
            <span className="text-pink-400 text-sm font-medium uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="section-heading mb-4">
            What <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="section-subheading mx-auto">
            Don't take my word for it — here's what clients say about working with me.
          </p>
        </motion.div>

        {/* Featured testimonial */}
        <div className="max-w-3xl mx-auto mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-2xl p-8 border border-white/8 relative overflow-hidden"
            >
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

              {/* Quote icon */}
              <Quote className="w-10 h-10 text-purple-400/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-slate-200 text-lg leading-relaxed mb-6 italic">
                &ldquo;{current.content}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                    {current.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{current.name}</div>
                    <div className="text-slate-400 text-xs">
                      {current.role}, {current.company}
                    </div>
                  </div>
                </div>
                {current.projectWorkedOn && (
                  <div className="text-xs text-slate-500 text-right hidden sm:block">
                    Project: <span className="text-blue-400">{current.projectWorkedOn}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    i === active ? 'bg-blue-400 w-6' : 'bg-white/20'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Thumbnail grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-2xl mx-auto">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`p-2 rounded-xl transition-all duration-200 text-center ${
                i === active
                  ? 'glass-card border-blue-500/30 scale-105'
                  : 'glass-card border-white/5 hover:border-white/15 opacity-60 hover:opacity-100'
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold mx-auto mb-1">
                {t.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div className="text-slate-400 text-[10px] truncate">{t.name.split(' ')[0]}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
