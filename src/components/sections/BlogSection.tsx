'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// Static mock blog data (will be replaced by MDX/Contentlayer)
const BLOG_POSTS = [
  {
    slug: 'building-rag-pipeline-langchain',
    title: 'Building a Production RAG Pipeline with LangChain and Pinecone',
    excerpt: 'A deep dive into building a Retrieval-Augmented Generation system that ingests documents and answers questions accurately using GPT-4.',
    coverGradient: 'from-purple-600/30 to-blue-600/30',
    tags: ['AI', 'LangChain', 'RAG', 'GPT-4'],
    publishedAt: '2025-03-15',
    readingTime: '12 min read',
  },
  {
    slug: 'nextjs-performance-optimization',
    title: 'Next.js 16 Performance Optimization: From 60 to 99 Lighthouse Score',
    excerpt: 'Practical techniques I used to achieve a perfect Lighthouse score — ISR, dynamic imports, image optimization, and smart caching strategies.',
    coverGradient: 'from-blue-600/30 to-cyan-600/30',
    tags: ['Next.js', 'Performance', 'Web Dev'],
    publishedAt: '2025-02-20',
    readingTime: '9 min read',
  },
  {
    slug: 'zustand-vs-redux-2025',
    title: 'Zustand vs Redux in 2025: Why I Switched and Never Looked Back',
    excerpt: 'After 3 years with Redux, I migrated to Zustand. Here\'s a detailed comparison with real code examples showing the developer experience difference.',
    coverGradient: 'from-orange-600/30 to-red-600/30',
    tags: ['React', 'Zustand', 'State Management'],
    publishedAt: '2025-01-10',
    readingTime: '7 min read',
  },
];

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="blog" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent pointer-events-none" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-cyan-500/20 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Blog</span>
            </div>
            <h2 className="section-heading">
              Latest <span className="gradient-text">Writings</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass-card text-slate-300 hover:text-white hover:border-blue-500/25 transition-all text-sm font-medium shrink-0"
          >
            All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden border border-white/8 hover:border-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 group"
            >
              {/* Cover */}
              <div className={cn('h-36 bg-gradient-to-br relative overflow-hidden', post.coverGradient)}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10" />
                  <div className="absolute w-16 h-16 rounded-full bg-white/5 border border-white/10" />
                </div>
                {/* Reading time badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/30 text-xs text-slate-300">
                  <Clock className="w-3 h-3" />
                  {post.readingTime}
                </div>
              </div>

              <div className="p-5 flex flex-col gap-">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="flex items-center gap-1 px-2 py-0.5 rounded text-xs font-mono text-slate-400 bg-white/5">
                      <Tag className="w-2.5 h-2.5" />
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-blue-300 transition-colors">
                  {post.title}
                </h3>

                <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-1 text-blue-400 text-xs font-medium hover:text-blue-300 transition-colors"
                  >
                    Read <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
