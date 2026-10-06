import type { SkillCategory } from '../types';

export const skillCategoriesData: SkillCategory[] = [
  {
    category: 'Languages',
    iconName: 'Code',
    skills: [
      {
        name: 'Python',
        usedIn: ['LexiAid', 'HR Management System', 'Nubi', 'Derivative Generator'],
        tag: 'Core'
      },
      {
        name: 'PHP',
        usedIn: ['HR Management System', 'Leave Management System', 'Student Portal', 'Nubi', 'Contemp'],
        tag: 'Core'
      },
      {
        name: 'C#',
        usedIn: ['Muning Blooms'],
        tag: 'Core'
      },
      {
        name: 'JavaScript',
        usedIn: ['Student Portal', 'HR Management System', 'Leave Management System', 'Contemp', 'Muning Blooms'],
        tag: 'Frontend'
      },
      {
        name: 'SQL',
        usedIn: ['LexiAid', 'HR Management System', 'Leave Management System', 'Student Portal'],
        tag: 'Database'
      }
    ]
  },
  {
    category: 'Backend & APIs',
    iconName: 'Server',
    skills: [
      {
        name: 'FastAPI',
        usedIn: ['LexiAid'],
        tag: 'Python Framework'
      },
      {
        name: 'ASP.NET Core',
        usedIn: ['Muning Blooms'],
        tag: 'Web Framework'
      },
      {
        name: 'REST APIs',
        usedIn: ['LexiAid'],
        tag: 'API Architecture'
      },
      {
        name: 'PostgreSQL',
        usedIn: ['LexiAid'],
        tag: 'Relational DB'
      },
      {
        name: 'MySQL',
        usedIn: ['HR Management System', 'Leave Management System', 'Student Portal'],
        tag: 'Relational DB'
      },
      {
        name: 'Supabase',
        usedIn: ['LexiAid'],
        tag: 'Backend Platform'
      }
    ]
  },
  {
    category: 'Frontend & Mobile',
    iconName: 'Smartphone',
    skills: [
      {
        name: 'React Native',
        usedIn: ['LexiAid'],
        tag: 'Mobile UI'
      },
      {
        name: 'HTML5',
        usedIn: ['Student Portal', 'HR Management System', 'Leave Management System', 'Muning Blooms', 'Contemp'],
        tag: 'Web Standard'
      },
      {
        name: 'CSS3',
        usedIn: ['Student Portal', 'HR Management System', 'Leave Management System', 'Muning Blooms', 'Contemp'],
        tag: 'Web Styling'
      },
      {
        name: 'Bootstrap',
        usedIn: ['Student Portal', 'Nubi', 'Contemp'],
        tag: 'Responsive UI'
      },
      {
        name: 'Tailwind CSS',
        usedIn: ['Muning Blooms'],
        tag: 'Utility CSS'
      }
    ]
  },
  {
    category: 'AI, NLP & Computer Vision',
    iconName: 'Cpu',
    skills: [
      {
        name: 'OpenAI API',
        usedIn: ['LexiAid'],
        tag: 'Generative AI'
      },
      {
        name: 'Gemini API',
        usedIn: ['Nubi'],
        tag: 'LLM Integration'
      },
      {
        name: 'SBERT',
        usedIn: ['LexiAid'],
        tag: 'NLP / Embeddings'
      },
      {
        name: 'FAISS',
        usedIn: ['LexiAid'],
        tag: 'Vector Similarity Search'
      },
      {
        name: 'OpenCV',
        usedIn: ['HR Management System'],
        tag: 'Computer Vision'
      }
    ]
  },
  {
    category: 'Tools & Workflow',
    iconName: 'Wrench',
    skills: [
      {
        name: 'Git & GitHub',
        usedIn: ['Student Portal', 'Derivative Generator', 'Academic Projects'],
        tag: 'Version Control'
      },
      {
        name: 'XAMPP',
        usedIn: ['PHP/MySQL Projects'],
        tag: 'Development Environment'
      },
      {
        name: 'HeidiSQL',
        usedIn: ['MySQL Database Management'],
        tag: 'Database Tool'
      },
      {
        name: 'VS Code',
        usedIn: ['Daily Development'],
        tag: 'Code Editor'
      }
    ]
  },
  {
    category: 'Deployment & Hosting',
    iconName: 'Globe',
    skills: [
      {
        name: 'Google Cloud',
        usedIn: ['LexiAid'],
        tag: 'Cloud Platform'
      },
      {
        name: 'Vercel',
        usedIn: ['LORRAINE.DEV'],
        tag: 'Deployment Platform'
      }
    ]
  }
];
