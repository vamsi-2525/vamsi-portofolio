import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: 'article' },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen pt-20">
      {/* Cover */}
      <div className={`relative h-64 bg-gradient-to-br ${post.coverGradient} border-b border-white/8 overflow-hidden`}>
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="section-container h-full flex flex-col justify-end pb-8 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-mono text-slate-300 bg-black/30">
                <Tag className="w-2.5 h-2.5" />{tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight max-w-3xl">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Meta bar */}
      <div className="border-b border-white/8 bg-[#0b1120]/80 backdrop-blur-sm">
        <div className="section-container py-4 flex flex-wrap items-center gap-6 text-sm text-slate-400">
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4" />
            {post.author}
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {post.readingTime}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="section-container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-white
            prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
            prose-p:text-slate-300 prose-p:leading-relaxed
            prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
            prose-code:text-blue-300 prose-code:bg-blue-500/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
            prose-pre:bg-[#0f172a] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl
            prose-strong:text-white
            prose-li:text-slate-300
            prose-blockquote:border-l-blue-500 prose-blockquote:text-slate-400
            prose-table:border-white/10 prose-td:border-white/10 prose-th:border-white/10 prose-th:text-white
          ">
            <MDXRemote source={post.content} />
          </div>

          {/* CTA */}
          <div className="mt-16 glass-card rounded-2xl p-6 border border-blue-500/20 text-center">
            <h3 className="text-white font-bold text-lg mb-2">Enjoyed this article?</h3>
            <p className="text-slate-400 text-sm mb-4">
              I write about AI engineering, Next.js, and full-stack development. Have a project in mind? Let&apos;s connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#contact"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm hover:opacity-90 transition-all"
              >
                Work With Me
              </Link>
              <Link
                href="/blog"
                className="px-5 py-2.5 rounded-xl glass-card text-slate-300 font-semibold text-sm hover:text-white hover:border-white/20 transition-all"
              >
                More Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
