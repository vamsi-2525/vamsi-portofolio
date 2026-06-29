import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar, Tag } from 'lucide-react';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Technical articles on AI engineering, Next.js, full-stack development, and software architecture by Vamsi Krishna.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="section-container py-16 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-cyan-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Blog</span>
          </div>
          <h1 className="section-heading text-5xl mb-4">
            Technical <span className="gradient-text">Writings</span>
          </h1>
          <p className="section-subheading mx-auto">
            Deep dives into AI engineering, Next.js, system design, and full-stack development.
          </p>
        </div>
      </div>

      {/* Posts */}
      <div className="section-container py-16">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-400">No posts published yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="glass-card rounded-2xl overflow-hidden border border-white/8 hover:border-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 group block"
              >
                {/* Cover */}
                <div className={`h-40 bg-gradient-to-br ${post.coverGradient} relative flex items-center justify-center`}>
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10" />
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/30 text-xs text-slate-300">
                    <Clock className="w-3 h-3" />
                    {post.readingTime}
                  </div>
                </div>

                <div className="p-5 flex flex-col gap-">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="flex items-center gap-1 px-2 py-0.5 rounded text-xs font-mono text-slate-400 bg-white/5">
                        <Tag className="w-2.5 h-2.5" />{tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-white font-semibold text-sm leading-snug group-hover:text-blue-300 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <span className="flex items-center gap-1 text-blue-400 text-xs font-medium">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
