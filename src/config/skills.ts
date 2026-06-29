import { Skill } from '@/types/skill.types';

export const skills: Skill[] = [
  // Frontend
  { id: 'nextjs', name: 'Next.js', category: 'frontend', icon: 'SiNextdotjs', proficiency: 95, yearsOfExperience: 3, featured: true, color: '#ffffff' },
  { id: 'react', name: 'React', category: 'frontend', icon: 'SiReact', proficiency: 95, yearsOfExperience: 4, featured: true, color: '#61DAFB' },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', icon: 'SiTypescript', proficiency: 90, yearsOfExperience: 3, featured: true, color: '#3178C6' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', icon: 'SiTailwindcss', proficiency: 95, yearsOfExperience: 3, featured: true, color: '#06B6D4' },
  { id: 'framermotion', name: 'Framer Motion', category: 'frontend', icon: 'SiFramer', proficiency: 85, yearsOfExperience: 2, featured: false, color: '#FF0055' },
  { id: 'gsap', name: 'GSAP', category: 'frontend', icon: 'SiGreensock', proficiency: 80, yearsOfExperience: 2, featured: false, color: '#88CE02' },
  { id: 'threejs', name: 'Three.js', category: 'frontend', icon: 'SiThreedotjs', proficiency: 75, yearsOfExperience: 1, featured: false, color: '#ffffff' },

  // Backend
  { id: 'nodejs', name: 'Node.js', category: 'backend', icon: 'SiNodedotjs', proficiency: 90, yearsOfExperience: 4, featured: true, color: '#339933' },
  { id: 'express', name: 'Express.js', category: 'backend', icon: 'SiExpress', proficiency: 88, yearsOfExperience: 4, featured: true, color: '#ffffff' },
  { id: 'python', name: 'Python', category: 'backend', icon: 'SiPython', proficiency: 85, yearsOfExperience: 3, featured: true, color: '#3776AB' },
  { id: 'fastapi', name: 'FastAPI', category: 'backend', icon: 'SiFastapi', proficiency: 80, yearsOfExperience: 2, featured: false, color: '#009688' },
  { id: 'graphql', name: 'GraphQL', category: 'backend', icon: 'SiGraphql', proficiency: 75, yearsOfExperience: 2, featured: false, color: '#E10098' },

  // AI
  { id: 'openai', name: 'OpenAI API', category: 'ai', icon: 'SiOpenai', proficiency: 90, yearsOfExperience: 2, featured: true, color: '#412991' },
  { id: 'langchain', name: 'LangChain', category: 'ai', icon: 'SiLangchain', proficiency: 85, yearsOfExperience: 1, featured: true, color: '#1C3C3C' },
  { id: 'tensorflow', name: 'TensorFlow', category: 'ai', icon: 'SiTensorflow', proficiency: 75, yearsOfExperience: 2, featured: false, color: '#FF6F00' },
  { id: 'huggingface', name: 'HuggingFace', category: 'ai', icon: 'SiHuggingface', proficiency: 80, yearsOfExperience: 1, featured: false, color: '#FFD21E' },

  // Database
  { id: 'postgresql', name: 'PostgreSQL', category: 'database', icon: 'SiPostgresql', proficiency: 85, yearsOfExperience: 3, featured: true, color: '#4169E1' },
  { id: 'mongodb', name: 'MongoDB', category: 'database', icon: 'SiMongodb', proficiency: 80, yearsOfExperience: 3, featured: false, color: '#47A248' },
  { id: 'supabase', name: 'Supabase', category: 'database', icon: 'SiSupabase', proficiency: 85, yearsOfExperience: 2, featured: true, color: '#3ECF8E' },
  { id: 'redis', name: 'Redis', category: 'database', icon: 'SiRedis', proficiency: 75, yearsOfExperience: 2, featured: false, color: '#DC382D' },

  // Cloud
  { id: 'aws', name: 'AWS', category: 'cloud', icon: 'SiAmazonaws', proficiency: 80, yearsOfExperience: 2, featured: true, color: '#FF9900' },
  { id: 'vercel', name: 'Vercel', category: 'cloud', icon: 'SiVercel', proficiency: 95, yearsOfExperience: 3, featured: true, color: '#ffffff' },
  { id: 'gcp', name: 'Google Cloud', category: 'cloud', icon: 'SiGooglecloud', proficiency: 70, yearsOfExperience: 1, featured: false, color: '#4285F4' },

  // DevOps
  { id: 'docker', name: 'Docker', category: 'devops', icon: 'SiDocker', proficiency: 80, yearsOfExperience: 2, featured: true, color: '#2496ED' },
  { id: 'github', name: 'GitHub Actions', category: 'devops', icon: 'SiGithubactions', proficiency: 82, yearsOfExperience: 2, featured: false, color: '#2088FF' },
  { id: 'nginx', name: 'Nginx', category: 'devops', icon: 'SiNginx', proficiency: 75, yearsOfExperience: 2, featured: false, color: '#009639' },

  // Tools
  { id: 'vscode', name: 'VS Code', category: 'tools', icon: 'SiVisualstudiocode', proficiency: 95, yearsOfExperience: 5, featured: false, color: '#007ACC' },
  { id: 'figma', name: 'Figma', category: 'tools', icon: 'SiFigma', proficiency: 78, yearsOfExperience: 2, featured: false, color: '#F24E1E' },
  { id: 'postman', name: 'Postman', category: 'tools', icon: 'SiPostman', proficiency: 90, yearsOfExperience: 3, featured: false, color: '#FF6C37' },
];
