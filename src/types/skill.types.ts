export type SkillCategory = 'frontend' | 'backend' | 'ai' | 'cloud' | 'database' | 'devops' | 'tools';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  icon: string;
  proficiency: number; // 0–100
  yearsOfExperience: number;
  featured: boolean;
  color?: string;
}
