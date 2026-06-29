'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clock, DollarSign } from 'lucide-react';
import Link from 'next/link';
import {
  Brain, Code2, Building2, Zap, Server, BarChart3,
} from 'lucide-react';
import { services } from '@/config/services';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain, Code2, Building2, Zap, Server, BarChart3,
};

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-cyan-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Services</span>
          </div>
          <h2 className="section-heading mb-4">
            What I <span className="gradient-text">Build For You</span>
          </h2>
          <p className="section-subheading mx-auto">
            End-to-end development services — from stunning frontends to intelligent AI backends.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  'glass-card rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 group',
                  service.highlighted
                    ? 'border-blue-500/30 shadow-lg shadow-blue-500/10 relative overflow-hidden'
                    : 'border-white/8 hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/10'
                )}
              >
                {service.highlighted && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs bg-blue-500/20 text-blue-300 font-medium border border-blue-500/30">
                      ★ Popular
                    </div>
                  </>
                )}

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  {Icon && <Icon className="w-6 h-6 text-blue-400" />}
                </div>

                <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{service.description}</p>

                {/* Features */}
                <ul className="flex flex-col gap- mb-5">
                  {service.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-400 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-white/8 mb-4">
                  {service.price && (
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <DollarSign className="w-3 h-3" />
                      {service.price}
                    </div>
                  )}
                  {service.deliveryTime && (
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="w-3 h-3" />
                      {service.deliveryTime}
                    </div>
                  )}
                </div>

                <Link
                  href="/#contact"
                  className={cn(
                    'flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200',
                    service.highlighted
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90'
                      : 'glass-card text-slate-300 hover:text-white hover:border-blue-500/25'
                  )}
                >
                  {service.cta} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
