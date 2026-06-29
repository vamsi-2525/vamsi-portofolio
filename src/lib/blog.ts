import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  tags: string[];
  coverGradient: string;
  readingTime: string;
  author: string;
  content: string;
}

export function getAllPosts(): Omit<BlogPost, 'content'>[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'));
  
  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '');
      const filePath = path.join(BLOG_DIR, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);
      
      return {
        slug,
        title: data.title || '',
        excerpt: data.excerpt || '',
        publishedAt: data.publishedAt || '',
        tags: data.tags || [],
        coverGradient: data.coverGradient || 'from-blue-600/30 to-purple-600/30',
        readingTime: data.readingTime || '5 min read',
        author: data.author || 'Vamsi Krishna',
      };
    })
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) return null;
  
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  
  return {
    slug,
    title: data.title || '',
    excerpt: data.excerpt || '',
    publishedAt: data.publishedAt || '',
    tags: data.tags || [],
    coverGradient: data.coverGradient || 'from-blue-600/30 to-purple-600/30',
    readingTime: data.readingTime || '5 min read',
    author: data.author || 'Vamsi Krishna',
    content,
  };
}
