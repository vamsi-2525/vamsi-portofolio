import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'InnovateTech Solutions',
    role: 'Senior Full-Stack Engineer & AI Lead',
    type: 'full-time',
    startDate: '2023-06',
    endDate: 'Present',
    location: 'Hyderabad, India (Remote)',
    description:
      'Leading the AI engineering team in building intelligent SaaS products. Architected and delivered 3 AI-powered platforms from scratch, serving 10,000+ monthly active users.',
    achievements: [
      'Architected a multi-tenant AI SaaS platform processing 1M+ API calls/month',
      'Reduced infrastructure costs by 40% through optimized caching and serverless architecture',
      'Led a team of 5 engineers, implemented code review processes reducing bugs by 60%',
      'Delivered 3 enterprise clients generating ₹50L+ in annual recurring revenue',
    ],
    techStack: ['Next.js', 'Python', 'FastAPI', 'OpenAI', 'LangChain', 'PostgreSQL', 'AWS', 'Docker'],
    logo: '/images/companies/innovatetech.png',
  },
  {
    id: '2',
    company: 'BuildScale Agency',
    role: 'Full-Stack Developer',
    type: 'full-time',
    startDate: '2021-08',
    endDate: '2023-05',
    location: 'Bangalore, India',
    description:
      'Developed full-stack web applications and ERP systems for clients across e-commerce, healthcare, and manufacturing sectors. Collaborated directly with clients to gather requirements and deliver production-ready solutions.',
    achievements: [
      'Delivered 12+ client projects on time and within budget',
      'Built an ERP system adopted by a 500-employee manufacturing company',
      'Improved page load times by 65% through Next.js migration from legacy React CRA',
      'Mentored 3 junior developers, reducing onboarding time by 50%',
    ],
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'],
    logo: '/images/companies/buildscale.png',
  },
  {
    id: '3',
    company: 'CodeCraft Labs',
    role: 'Frontend Developer Intern',
    type: 'internship',
    startDate: '2020-12',
    endDate: '2021-07',
    location: 'Hyderabad, India',
    description:
      'Contributed to frontend development of a B2B SaaS platform. Implemented responsive UI components, integrated REST APIs, and improved accessibility across the product.',
    achievements: [
      'Built 20+ reusable React components adopted across the product',
      'Improved Lighthouse accessibility score from 68 to 94',
      'Integrated 5 third-party APIs including Stripe and Twilio',
    ],
    techStack: ['React', 'JavaScript', 'CSS', 'REST APIs', 'Figma'],
    logo: '/images/companies/codecraft.png',
  },
  {
    id: '4',
    company: 'Freelance',
    role: 'Independent Software Developer',
    type: 'freelance',
    startDate: '2020-01',
    endDate: 'Present',
    location: 'Remote (Worldwide)',
    description:
      'Building custom web applications, AI solutions, and automation tools for clients globally. Worked with startups and SMBs across India, UAE, UK, and the US.',
    achievements: [
      '30+ successful projects delivered for international clients',
      'Maintained 5-star ratings on Upwork and Fiverr',
      'Specialized in AI integrations generating 3x ROI for clients',
      'Built recurring client relationships with 70% repeat business rate',
    ],
    techStack: ['Next.js', 'React', 'Node.js', 'Python', 'OpenAI', 'LangChain', 'PostgreSQL', 'Supabase'],
  },
];
