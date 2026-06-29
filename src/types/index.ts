export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  techUsed: string[];
  cta: string;
  highlighted: boolean;
  price?: string;
  deliveryTime?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: 'full-time' | 'part-time' | 'freelance' | 'internship';
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  achievements: string[];
  techStack: string[];
  logo?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  grade?: string;
  logo?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badgeImage?: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  content: string;
  rating: number;
  projectWorkedOn?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  projectType: 'web' | 'ai' | 'erp' | 'automation' | 'consulting' | 'other';
  budget?: string;
  message: string;
  timeline?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  tags: string[];
  publishedAt: string;
  readingTime: string;
  author: string;
}
