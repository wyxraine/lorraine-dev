import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'lexiaid',
    filename: 'lexiaid.app',
    title: 'LexiAid',
    subtitle: 'Mobile-Based Legal Assistance Application',
    category: 'AI',
    featured: true,
    image: '/LexiAid.png',
    githubUrl: 'https://github.com/wyxraine/LexiAid',
    liveDemoUrl: 'https://sites.google.com/view/lexiaid/home',
    description: 'An AI-powered mobile application designed to make legal information more accessible through an AI chatbot, Support Hub, and Legal Connect.',
    technologies: ['React Native', 'FastAPI', 'Python', 'PostgreSQL', 'Supabase', 'SBERT', 'FAISS', 'OpenAI API'],
    accentColor: '#E5484D',
    metrics: [
      { label: 'Architecture', value: 'Semantic Search + LLM' },
      { label: 'Platform', value: 'Mobile (iOS)' }
    ],
    caseStudy: {
      problem: 'Women and children who experience abuse, violence, harassment, and other forms of harm often lack sufficient legal information to understand their rights, available protections, and appropriate legal remedies. Accessing reliable and understandable Philippine legal information can also be difficult, making it challenging for vulnerable individuals to know where to seek help and what steps to take.',
      role: 'Backend Developer — Developed and integrated the Python FastAPI backend and APIs, implemented the SBERT + FAISS semantic retrieval pipeline for relevant legal information, and worked on data handling, legal resources, and support-service integration.',
      whatIBuilt: [
        'AI Legal Chatbot with contextual retrieval-augmented answering for legal FAQs.',
        'Semantic Search Engine indexing legal articles and FAQs using SBERT sentence embeddings and FAISS similarity search.',
        'Support Hub: Organized directory of emergency hotlines and support resources for women and children.',
        'Legal Connect: Connects users with partnered lawyers/legal professionals for legal consultation.'
      ],
      technologies: [
        'React Native',
        'FastAPI',
        'Python',
        'PostgreSQL',
        'Supabase',
        'SBERT',
        'FAISS',
        'OpenAI API'
      ],
      keyFeatures: [
        'Natural language semantic search for Philippine legal questions',
        'Support Hub emergency hotline and support resource directory for women and children',
        'Legal Connect consultation matching with partnered lawyers and legal professionals',
        'Clean, accessible mobile interface tailored for user access'
      ],
      result: 'Delivered an intuitive, end-to-end mobile solution that empowers users with rapid access to clear legal resources, demonstrating practical application of modern AI embeddings and vector search in public assistance.'
    }
  },
  {
    id: 'student-portal',
    filename: 'student_portal.app',
    title: 'Student Portal',
    subtitle: 'Web Development Internship Project',
    category: 'Web',
    featured: false,
    image: '/student-portal1.jpg',
    liveDemoUrl: 'https://stdominiccollege.edu.ph/studentportal/',
    liveUrl: 'https://stdominiccollege.edu.ph/studentportal/',
    description: 'A student portal that I contributed to during my Web Development Engineer internship, focusing on improving existing functionality, interface responsiveness, visual consistency, and overall usability.',
    technologies: ['CodeIgniter 3', 'PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Git', 'GitHub'],
    accentColor: '#67D391',
    metrics: [
      { label: 'Context', value: 'Internship · Saint Dominic' },
      { label: 'Framework', value: 'CodeIgniter 3 MVC' },
      { label: 'Focus', value: 'Responsive UI · Usability · Interface Improvements' }
    ],
    caseStudy: {
      problem: 'The existing student portal had desktop-oriented layouts that were difficult to use on mobile devices, along with UI inconsistencies across important modules such as grade viewing and enrollment. The interface could also be improved to make information easier to understand and navigation more intuitive for students.',
      role: "Web Development Engineer Intern — Improved the portal's responsiveness, visual interface, and usability by refining existing views and UI components while working within the existing CodeIgniter 3 MVC structure.",
      whatIBuilt: [
        'Refined portal layouts using Bootstrap and customized CSS media queries to provide a responsive experience across desktop, tablet, and mobile screens.',
        'Improved the visual presentation and usability of Student Grade Viewing and Enrollment interfaces.',
        'Enhanced spacing, layout structure, typography, and UI components to make information easier to read and interact with.',
        'Worked with the existing backend and business logic without disrupting established functionality.',
        'Followed a collaborative Git workflow, including feature branches, merge reviews, and maintaining clean code.'
      ],
      technologies: [
        'CodeIgniter 3',
        'PHP',
        'MySQL',
        'HTML5',
        'CSS3',
        'JavaScript',
        'Bootstrap',
        'Git',
        'GitHub'
      ],
      keyFeatures: [
        'Responsive student dashboard across desktop, tablet, and mobile devices',
        'Improved UI and visual consistency across portal modules',
        'More user-friendly grade and enrollment interfaces',
        'Better readability for schedules, grades, and student information',
        'Seamless integration with existing backend business logic'
      ],
      result: 'Improved the overall student portal experience by making key interfaces more responsive, visually consistent, and user-friendly, helping students access and interact with grades, schedules, and enrollment information more comfortably across different devices.'
    }
  },
  {
    id: 'hr-management-system',
    filename: 'hr_management_system.app',
    title: 'HR Management System',
    subtitle: 'Automated HR & Face-Recognition Attendance System',
    category: 'Web',
    featured: false,
    image: '/Tambo_ES.jpg',
    githubUrl: 'https://github.com/wyxraine/HR_Management_System',
    description: 'A human resource management system featuring face-recognition attendance, time-in/time-out tracking, leave management, authentication, and dashboards.',
    technologies: ['Python', 'OpenCV', 'PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    accentColor: '#FF6B6B',
    metrics: [
      { label: 'CV Engine', value: 'OpenCV Haar Cascade' },
      { label: 'Module Count', value: '5 Integrated Modules' },
      { label: 'Auth System', value: 'Role-Based Access' }
    ],
    caseStudy: {
      problem: 'Manual employee time-tracking and attendance logging are prone to errors, proxy attendance ("buddy punching"), and cumbersome administrative reconciliation for HR teams.',
      role: 'Full-Stack Developer — Built the PHP/MySQL web management portal and developed the Python OpenCV computer vision module for biometric face recognition verification.',
      whatIBuilt: [
        'Face-Recognition Attendance Engine using OpenCV to capture, train, and match employee facial biometrics in real-time.',
        'Automated Time-in / Time-out logging with timestamp validation and duplicate-entry guards.',
        'Comprehensive HR Dashboard displaying live employee presence, overtime, and monthly attendance summaries.',
        'Leave Management module for submitting, evaluating, and tracking employee leave balances.'
      ],
      technologies: [
        'Python',
        'OpenCV',
        'PHP',
        'MySQL',
        'HTML5',
        'CSS3',
        'JavaScript'
      ],
      keyFeatures: [
        'Contactless facial recognition time tracking',
        'Role-based administrative and employee portals',
        'Automated monthly attendance report generation',
        'Leave application request and approval workflow'
      ],
      result: 'Significantly streamlined employee timekeeping, eliminated proxy attendance, and gave HR staff instantaneous analytics on department attendance and pending leave requests.'
    }
  },
  {
    id: 'leave-management-system',
    filename: 'leave_management_system.app',
    title: 'Leave Management System',
    subtitle: 'Web-Based Leave Request & Approval System',
    category: 'Web',
    featured: false,
    image: '/leave_system.jpg',
    githubUrl: 'https://github.com/wyxraine/Leave_System',
    description: 'A web-based system for managing employee leave requests, approvals, and administrative tracking.',
    technologies: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    accentColor: '#E5484D',
    metrics: [
      { label: 'Database', value: 'Normalized MySQL' },
      { label: 'Workflow', value: 'Multi-level Approval' }
    ],
    caseStudy: {
      problem: 'Paper-based leave filing resulted in lost documents, slow approvals, and lack of visibility into employee remaining leave credits.',
      role: 'Backend & Frontend Developer — Designed database schema, implemented authentication, and created responsive employee/admin interfaces.',
      whatIBuilt: [
        'Secure multi-role authentication (Admin vs Employee).',
        'Leave application filing system with date pickers, leave type selection (Sick, Vacation, Emergency), and reason documentation.',
        'Administrative dashboard to review, approve, or decline pending requests with remarks.',
        'Automated calculation of deducted leave balances and history log.'
      ],
      technologies: [
        'PHP',
        'MySQL',
        'HTML5',
        'CSS3',
        'JavaScript'
      ],
      keyFeatures: [
        'Real-time remaining leave balance counters',
        'Audit logs of all approval/rejection actions',
        'Exportable summary tables for record keeping',
        'Zero-friction user experience for submitting time-off requests'
      ],
      result: 'Centralized the leave tracking workflow, eliminated paperwork bottlenecks, and provided transparent tracking for both staff and administrators.'
    }
  },
  {
    id: 'teachers-evaluation-management-system',
    filename: 'teachers_evaluation_system.app',
    title: "Teacher's Evaluation Management System",
    subtitle: 'Web-Based Faculty Evaluation System',
    category: 'Web',
    featured: false,
    image: '/evaluation_system.jpg',
    githubUrl: 'https://github.com/wyxraine/Evaluation_System',
    description: 'A web-based system designed to streamline teacher evaluations and manage evaluation records through a centralized system.',
    technologies: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    accentColor: '#F6AD55',
    metrics: [
      { label: 'Domain', value: 'Academic Evaluation' },
      { label: 'Storage', value: 'Centralized MySQL' },
      { label: 'Analytics', value: 'Automated Scoring' }
    ],
    caseStudy: {
      problem: 'Manual faculty evaluation processes created administrative overhead, slow summary generation, and risks of miscalculating feedback ratings.',
      role: 'Full-Stack Developer — Built centralized web application for managing teacher performance evaluations, score aggregates, and institutional reporting.',
      whatIBuilt: [
        'Centralized evaluation portal for students and department evaluators.',
        'Automated scoring algorithm for computing performance criteria averages.',
        'Administrative dashboard to monitor evaluation completion rates across faculties.',
        'Exportable summary reports for academic performance reviews.'
      ],
      technologies: [
        'PHP',
        'MySQL',
        'HTML5',
        'CSS3',
        'JavaScript'
      ],
      keyFeatures: [
        'Automated scoring and grading breakdown per faculty member',
        'Role-based access control for evaluators, faculty, and administrators',
        'Centralized repository for institutional evaluation history',
        'Clean evaluation interface with real-time field validation'
      ],
      result: 'Streamlined the faculty assessment lifecycle, providing immediate statistical summaries for academic administrators while removing manual paper-based computation.'
    }
  },
  {
    id: 'muning-blooms',
    filename: 'muning_blooms.app',
    title: 'Muning Blooms',
    subtitle: 'Web-Based Crochet Shop',
    category: 'Web',
    featured: false,
    image: '/muning_blooms.jpg',
    description: 'Currently developing a web-based crochet shop using C# and ASP.NET Core, focusing on responsive UI, interactive features, and a clean user experience.',
    technologies: ['C#', 'ASP.NET Core', 'HTML5', 'Razor', 'JavaScript', 'CSS3', 'Tailwind CSS'],
    accentColor: '#EC4899',
    metrics: [
      { label: 'Status', value: 'IN DEVELOPMENT' },
      { label: 'Framework', value: 'ASP.NET Core' },
      { label: 'Type', value: 'Business Showcase' }
    ],
    caseStudy: {
      problem: 'A local crochet business needed an online presence to showcase handmade products, highlight custom order possibilities, and establish brand credibility.',
      role: 'Web Developer — Designed and developed the responsive web application using C# and ASP.NET Core to present product catalogs and custom order information.',
      whatIBuilt: [
        'Custom product showcase gallery highlighting handmade crochet items.',
        'Information section detailing custom order requests, pricing guides, and contact channels.',
        'Responsive layout optimized for smartphone, tablet, and desktop shoppers.'
      ],
      technologies: [
        'C#',
        'ASP.NET Core',
        'HTML5',
        'Razor',
        'JavaScript',
        'CSS3',
        'Tailwind CSS'
      ],
      keyFeatures: [
        'Clean product showcase layout with image previews',
        'Custom order information desk and inquiry guide',
        'Responsive design for mobile and desktop viewers'
      ],
      result: 'Provided the business with a modern, professional web presence to share product collections and connect with customers.'
    }
  },
  {
    id: 'contemp',
    filename: 'contemporary_website.app',
    title: 'Contemporary website',
    subtitle: 'Web-Based Educational Platform',
    category: 'Web',
    featured: false,
    image: '/contemp.jpg',
    githubUrl: 'https://github.com/ywxvnz/GNED07-The-Global-Divides-The-North-and-The-South',
    liveDemoUrl: 'https://ywxvnz.github.io/GNED07-The-Global-Divides-The-North-and-The-South/',
    description: 'An interactive web application exploring global divides, socio-economic structures, and historical perspectives of the Global North and Global South.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP'],
    accentColor: '#4C51BF',
    metrics: [
      { label: 'Domain', value: 'Contemporary World' },
      { label: 'Focus', value: 'Global Divides & History' },
      { label: 'Design', value: 'Interactive Web UI' }
    ],
    caseStudy: {
      problem: 'Educational materials on global socio-economic divides are often presented in dense text formats, making it difficult for students to visualize geographic and historical dynamics.',
      role: 'Web Developer — Designed and developed the web platform using Bootstrap to present interactive educational content on global socio-economic divides.',
      whatIBuilt: [
        'Interactive web presentation detailing Global North vs. Global South socio-economic divides.',
        'Custom navigation and content modules for exploring historical perspectives.',
        'Responsive layout optimized across desktop, tablet, and mobile devices.'
      ],
      technologies: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Bootstrap',
        'PHP'
      ],
      keyFeatures: [
        'Interactive world map visualization for Global North and South',
        'Structured exploration modules for socio-economic topics',
        'Clean, accessible educational web interface'
      ],
      result: 'Provided an engaging educational platform that simplifies complex contemporary world concepts through clear visual design.'
    }
  },
  {
    id: 'nubi',
    filename: 'nubi.app',
    title: 'Nubi',
    subtitle: 'AI Weather & Chatbot Web Application',
    category: 'AI',
    featured: false,
    image: '/nubi.png',
    githubUrl: 'https://github.com/ywxvnz/weather-chatbot',
    description: 'An interactive weather chatbot web application providing real-time local weather information, forecasts, and conversational responses.',
    technologies: ['Python', 'PHP', 'Bootstrap', 'Gemini API'],
    accentColor: '#38BDF8',
    metrics: [
      { label: 'Type', value: 'Weather & Chatbot' },
      { label: 'API', value: 'Live Weather Data' },
      { label: 'Interface', value: 'Conversational UI' }
    ],
    caseStudy: {
      problem: 'Users often need quick weather updates alongside conversational inquiries without navigating through complex meteorological dashboards.',
      role: 'Web & Chatbot Developer — Built the frontend conversational interface and backend services using Python, PHP, and Bootstrap.',
      whatIBuilt: [
        'Conversational weather chatbot interface for location-based weather queries.',
        'Real-time temperature, condition, and location lookup system.',
        'Clean, responsive UI with weather icons and user-friendly chat interaction.'
      ],
      technologies: [
        'Python',
        'PHP',
        'Bootstrap',
        'Gemini API'
      ],
      keyFeatures: [
        'Location search for real-time weather forecasts',
        'Conversational chatbot responses for weather queries',
        'Minimalist, responsive UI design with weather status indicators'
      ],
      result: 'Delivered a sleek, accessible weather assistant web app providing instantaneous forecast information through an intuitive chat experience.'
    }
  },
  {
    id: 'derivative-generator',
    filename: 'derivative_generator.app',
    title: 'Derivative Generator',
    subtitle: 'Symbolic Mathematics & Calculus Solver',
    category: 'AI',
    featured: false,
    image: '/derivative_generator.png',
    githubUrl: 'https://github.com/beefile/derivative-generator',
    description: 'A symbolic calculus application built with Python that computes mathematical derivatives step-by-step using rule-based algorithms and SymPy integration.',
    technologies: ['Python', 'GitHub'],
    accentColor: '#E5484D',
    metrics: [
      { label: 'Engine', value: 'SymPy & Symbolic Rules' },
      { label: 'Domain', value: 'Calculus & Mathematics' },
      { label: 'Output', value: 'Step-by-Step Derivations' }
    ],
    caseStudy: {
      problem: 'Students learning calculus often struggle to verify step-by-step differentiation rules and understand symbolic mathematical transformations.',
      role: 'Developer — Implemented the symbolic mathematical evaluation algorithms and step-by-step derivation logging using Python.',
      whatIBuilt: [
        'Rule-based differentiation solver supporting algebraic and trigonometric functions.',
        'SymPy mathematical integration for direct derivative validation.',
        'Interactive math symbol input keypad and detailed derivation solution log.'
      ],
      technologies: [
        'Python',
        'GitHub'
      ],
      keyFeatures: [
        'Dual computation modes: Rule-Based and Direct SymPy evaluation',
        'Interactive symbol keypad for mathematical functions (sin, cos, tan, ln, log, sqrt)',
        'Detailed solution trail logging runtime, timestamps, and step iterations'
      ],
      result: 'Created an educational calculus tool that breaks down symbolic differentiation into clear, step-by-step derivations for learning.'
    }
  }
];
