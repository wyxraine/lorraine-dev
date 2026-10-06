export type NavigationSection = 
  | 'home'
  | 'about'
  | 'education'
  | 'projects'
  | 'skills'
  | 'experience'
  | 'contact';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  filename?: string;
  image?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  liveUrl?: string;
  caseStudy: {
    problem: string;
    role: string;
    whatIBuilt: string[];
    technologies: string[];
    keyFeatures: string[];
    result: string;
    architectureNotes?: string;
  };
  metrics?: { label: string; value: string }[];
  accentColor?: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    usedIn: string[];
    highlight?: boolean;
    tag?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: 'internship' | 'education' | 'academic' | 'freelance';
  location: string;
  description: string;
  technologies: string[];
  highlights?: string[];
  link?: string;
  linkText?: string;
}
