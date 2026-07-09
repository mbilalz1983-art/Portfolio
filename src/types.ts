export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Urdu AI' | 'Digital Products' | 'Education' | 'Tools';
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Initiative {
  id: string;
  title: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  category: 'Rural Innovation' | 'Community' | 'Social Impact' | 'Education';
  imageUrl: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    level: number; // 0 to 100
  }[];
}

export interface ImpactStat {
  id: string;
  value: string;
  label: string;
  description: string;
  icon: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'milestone' | 'career' | 'academic';
}
