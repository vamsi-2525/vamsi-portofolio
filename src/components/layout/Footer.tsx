'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code2, Heart, Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { siteConfig } from '@/config/site';
import { socialLinks } from '@/config/social';
import { navLinks } from '@/config/site';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github: FaGithub, Linkedin: FaLinkedin, Twitter: FaTwitter, Youtube: FaYoutube,
};

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/8 bg-[#080d1a]">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-lg gradient-text" style={{ fontFamily: 'var(--font-display)' }}>
                Vamsi.dev
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Building intelligent, scalable web applications. Available for freelance projects and collaborations.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return Icon ? (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/30 transition-all duration-200 hover:scale-110"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ) : null;
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="flex flex-col gap-">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                {siteConfig.email}
              </a>
              <p className="text-slate-400 text-sm">{siteConfig.location}</p>
              {siteConfig.availableForWork && (
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-sm font-medium">Available for work</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-slate-500 text-sm flex items-center justify-center sm:justify-start gap-1 flex-wrap">
            © {new Date().getFullYear()} Vamsi Krishna. Built with{' '}
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> using Next.js & Framer Motion.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/30 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
