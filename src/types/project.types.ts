export type ProjectCategory = 'ai' | 'fullstack' | 'backend' | 'frontend' | 'erp' | 'automation';
export type ProjectStatus = 'live' | 'wip' | 'archived';

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  thumbnail: string;
  screenshots: string[];
  businessProblem: string;
  solution: string;
  features: string[];
  techStack: string[];
  architectureDiagram?: string;
  githubUrl?: string;
  liveUrl?: string;
  challengesFaced: string[];
  lessonsLearned: string[];
  completedAt: string;
  duration: string;
  clientName?: string;
}
