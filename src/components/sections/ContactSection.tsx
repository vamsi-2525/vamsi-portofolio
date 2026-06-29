'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Calendar, Download, Loader2,
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { contactFormSchema, ContactFormValues } from '@/lib/validations';
import { siteConfig } from '@/config/site';
import { socialLinks } from '@/config/social';
import { cn } from '@/lib/utils';

const SOCIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Github: FaGithub, Linkedin: FaLinkedin, Twitter: FaTwitter,
};

const PROJECT_TYPES = [
  { value: 'web', label: 'Web Application' },
  { value: 'ai', label: 'AI / ML Solution' },
  { value: 'erp', label: 'ERP System' },
  { value: 'automation', label: 'Business Automation' },
  { value: 'consulting', label: 'Technical Consulting' },
  { value: 'other', label: 'Other' },
];

const BUDGETS = [
  '< ₹30,000', '₹30,000 – ₹80,000', '₹80,000 – ₹2,00,000', '₹2,00,000+',
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-green-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-sm font-medium uppercase tracking-wider">Available Now</span>
          </div>
          <h2 className="section-heading mb-4">
            Let&apos;s <span className="gradient-text">Build Together</span>
          </h2>
          <p className="section-subheading mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how I can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {/* Contact info */}
            <div className="flex flex-col gap-4">
              {[
                { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { icon: Phone, label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
                { icon: MapPin, label: 'Location', value: siteConfig.location },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-3 glass-card p-3 rounded-xl border border-white/8">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">{label}</p>
                    {href ? (
                      <a href={href} className="text-white text-sm hover:text-blue-400 transition-colors">{value}</a>
                    ) : (
                      <p className="text-white text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-slate-400 text-sm mb-3">Connect on social</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.slice(0, 3).map((social) => {
                  const Icon = SOCIAL_ICONS[social.icon];
                  return Icon ? (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/30 hover:scale-110 transition-all duration-200"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ) : null;
                })}
              </div>
            </div>

            {/* Quick actions */}
            <div className="flex flex-col gap-3">
              <a
                href={siteConfig.resumeUrl}
                download
                className="flex items-center gap-2 w-full px-4 py-3 rounded-xl glass-card text-slate-300 hover:text-white hover:border-blue-500/25 transition-all text-sm font-medium"
              >
                <Download className="w-4 h-4 text-blue-400" />
                Download Resume
              </a>
              {siteConfig.calendlyUrl && (
                <a
                  href={siteConfig.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 w-full px-4 py-3 rounded-xl glass-card text-slate-300 hover:text-white hover:border-purple-500/25 transition-all text-sm font-medium"
                >
                  <Calendar className="w-4 h-4 text-purple-400" />
                  Book a Discovery Call
                </a>
              )}
            </div>

            {/* Availability */}
            <div className="glass-card p-4 rounded-xl border border-green-500/20">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-medium text-sm">Currently Available</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Accepting new freelance projects. Typical response time: within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass-card rounded-2xl p-6 border border-white/8 flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1.5">Name *</label>
                  <input
                    {...register('name')}
                    placeholder="John Doe"
                    className={cn(
                      'w-full px-4 py-2.5 rounded-xl bg-white/5 border text-white placeholder-slate-500 text-sm outline-none transition-all',
                      'focus:border-blue-500/50 focus:bg-white/8',
                      errors.name ? 'border-red-500/50' : 'border-white/10'
                    )}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1.5">Email *</label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="john@example.com"
                    className={cn(
                      'w-full px-4 py-2.5 rounded-xl bg-white/5 border text-white placeholder-slate-500 text-sm outline-none transition-all',
                      'focus:border-blue-500/50 focus:bg-white/8',
                      errors.email ? 'border-red-500/50' : 'border-white/10'
                    )}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-1.5">Subject *</label>
                <input
                  {...register('subject')}
                  placeholder="Project Inquiry — AI Chatbot"
                  className={cn(
                    'w-full px-4 py-2.5 rounded-xl bg-white/5 border text-white placeholder-slate-500 text-sm outline-none transition-all',
                    'focus:border-blue-500/50 focus:bg-white/8',
                    errors.subject ? 'border-red-500/50' : 'border-white/10'
                  )}
                />
                {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Project Type */}
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1.5">Project Type *</label>
                  <select
                    {...register('projectType')}
                    className={cn(
                      'w-full px-4 py-2.5 rounded-xl bg-[#0f172a] border text-white text-sm outline-none transition-all appearance-none',
                      'focus:border-blue-500/50',
                      errors.projectType ? 'border-red-500/50' : 'border-white/10'
                    )}
                  >
                    <option value="">Select type...</option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                  {errors.projectType && <p className="text-red-400 text-xs mt-1">{errors.projectType.message}</p>}
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1.5">Budget (Optional)</label>
                  <select
                    {...register('budget')}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0f172a] border border-white/10 text-white text-sm outline-none transition-all appearance-none focus:border-blue-500/50"
                  >
                    <option value="">Select budget...</option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-1.5">Message *</label>
                <textarea
                  {...register('message')}
                  rows={5}
                  placeholder="Tell me about your project — what problem are you solving, what features do you need, and when do you need it by?"
                  className={cn(
                    'w-full px-4 py-2.5 rounded-xl bg-white/5 border text-white placeholder-slate-500 text-sm outline-none transition-all resize-none',
                    'focus:border-blue-500/50 focus:bg-white/8',
                    errors.message ? 'border-red-500/50' : 'border-white/10'
                  )}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={cn(
                  'w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2',
                  status === 'success'
                    ? 'bg-green-600 text-white cursor-default'
                    : status === 'error'
                      ? 'bg-red-600/80 text-white'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 hover:scale-[1.02] disabled:opacity-60 disabled:scale-100 shadow-lg shadow-blue-500/25'
                )}
              >
                {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
                {status === 'success' && <CheckCircle2 className="w-4 h-4" />}
                {status === 'error' && <AlertCircle className="w-4 h-4" />}
                {status === 'idle' && <Send className="w-4 h-4" />}
                {status === 'idle' && 'Send Message'}
                {status === 'loading' && 'Sending...'}
                {status === 'success' && 'Message Sent! I\'ll reply within 24h'}
                {status === 'error' && 'Failed — Try again'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
