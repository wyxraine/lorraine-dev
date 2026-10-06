import React, { useState } from 'react';
import { 
  Download, 
  Printer, 
  Check, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Mail, 
  MapPin,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { WindowFrame } from '../components/windows/WindowFrame';

export const Resume: React.FC = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    const element = document.createElement('a');
    const file = new Blob([
      `LORRAINE OCHOA - RESUME\nComputer Science Graduate | Cavite State University – Imus Campus\nEmail: llorraineochoa.work@gmail.com\n\nEDUCATION:\nBachelor of Science in Computer Science\nCavite State University – Imus Campus (Graduated 2025)\n\nINTERNSHIP:\nWeb Development Engineer Intern - Saint Dominic College of Asia (July 2025)\n- Responsive UI refactoring using Bootstrap, PHP, MySQL, CodeIgniter 3\n- Team Git version control and collaborative feature development\n\nPROJECTS:\n1. LexiAid - AI-Powered Legal Assistance Application (React Native, FastAPI, SBERT, FAISS, OpenAI)\n2. HR Management System (PHP, MySQL, Python, OpenCV)\n3. Leave Management System (PHP, MySQL)\n4. Student Portal Enhancement (CodeIgniter 3, PHP, MySQL, Bootstrap)\n\nTECHNICAL SKILLS:\nLanguages: Python, PHP, JavaScript, SQL\nBackend: FastAPI, REST APIs, MySQL, PostgreSQL, Supabase\nFrontend/Mobile: React Native, HTML5, CSS3, Bootstrap, Tailwind CSS\nAI & Data: OpenAI API, SBERT, FAISS, OpenCV, Google Gemini\nTools: Git, GitHub, XAMPP, HeidiSQL, VS Code\n`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Lorraine_Ochoa_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setTimeout(() => setDownloaded(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="border-b border-workspace-border/80 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-brand-red" />
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-brand-red">
              CURRICULUM VITAE
            </span>
          </div>
          <h1 className="text-3xl font-extrabold text-content-primary">
            Resume
          </h1>
          <p className="text-sm text-content-secondary mt-1">
            View or download my resume for a concise overview of my education, experience, projects, and technical skills.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant="primary"
            size="md"
            onClick={handleDownload}
            icon={downloaded ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
          >
            {downloaded ? 'DOWNLOADED' : 'DOWNLOAD PDF'}
          </Button>

          <Button
            variant="secondary"
            size="md"
            onClick={handlePrint}
            icon={<Printer className="w-4 h-4" />}
          >
            PRINT / SAVE
          </Button>
        </div>
      </div>

      {/* Recruiter Quick Sheet Preview Window */}
      <WindowFrame
        title="lorraine_ochoa_resume.pdf"
        subtitle="Formatted Preview"
        bodyClassName="bg-[#181818] p-6 sm:p-10"
      >
        <div className="max-w-3xl mx-auto bg-workspace-panel border border-workspace-border rounded-xl p-6 sm:p-10 space-y-8 text-content-secondary shadow-lg">
          {/* Header Profile */}
          <div className="border-b border-workspace-border pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-content-primary tracking-tight">
                Josephine Lorraine Ochoa
              </h2>
              <p className="text-sm font-mono text-brand-red font-semibold mt-1">
                Computer Science Graduate · Cavite State University – Imus Campus
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-content-muted mt-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-content-secondary" /> Cavite, Philippines
                </span>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=llorraineochoa.work@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-brand-red transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-content-secondary" /> llorraineochoa.work@gmail.com
                </a>
              </div>
            </div>

            <Badge variant="green" size="sm" className="self-start sm:self-center">
              AVAILABLE FOR HIRE
            </Badge>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-content-primary font-mono text-xs font-bold uppercase tracking-wider border-b border-workspace-border/60 pb-1.5">
              <GraduationCap className="w-4 h-4 text-brand-red" />
              <h3>EDUCATION</h3>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-sm font-bold text-content-primary">
                  Bachelor of Science in Computer Science
                </h4>
                <p className="text-xs text-brand-red font-mono">
                  Cavite State University – Imus Campus
                </p>
                <p className="text-xs text-content-muted mt-0.5">
                  Focus on Software Engineering, Applied AI, and Database Systems
                </p>
              </div>
              <span className="text-xs font-mono text-content-muted shrink-0">
                Graduated 2025
              </span>
            </div>
          </div>

          {/* Internship Experience */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-content-primary font-mono text-xs font-bold uppercase tracking-wider border-b border-workspace-border/60 pb-1.5">
              <Briefcase className="w-4 h-4 text-brand-red" />
              <h3>INDUSTRY EXPERIENCE</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-bold text-content-primary">
                    Web Development Engineer Intern
                  </h4>
                  <p className="text-xs text-brand-red font-mono">
                    Saint Dominic College of Asia
                  </p>
                </div>
                <span className="text-xs font-mono text-content-muted shrink-0">
                  July 2025
                </span>
              </div>
              <ul className="list-disc list-inside text-xs sm:text-sm text-content-secondary space-y-1 pl-1">
                <li>Collaborated on enhancing an existing Student Portal using CodeIgniter 3, PHP, MySQL, and Bootstrap.</li>
                <li>Implemented responsive mobile UI improvements across student schedule and grade viewing modules.</li>
                <li>Practiced industry-standard Git version control workflows, branch management, and team reviews.</li>
              </ul>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-content-primary font-mono text-xs font-bold uppercase tracking-wider border-b border-workspace-border/60 pb-1.5">
              <Code2 className="w-4 h-4 text-brand-red" />
              <h3>FEATURED PROJECTS</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline">
                  <h4 className="text-sm font-bold text-content-primary">
                    LexiAid — AI-Powered Legal Assistance Application
                  </h4>
                  <span className="text-xs font-mono text-content-muted">React Native, FastAPI, FAISS, OpenAI</span>
                </div>
                <p className="text-xs text-content-secondary mt-1">
                  Mobile application with SBERT sentence embeddings & FAISS vector search for Philippine legal assistance.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h4 className="text-sm font-bold text-content-primary">
                    HR Management System with Face Recognition
                  </h4>
                  <span className="text-xs font-mono text-content-muted">PHP, MySQL, Python, OpenCV</span>
                </div>
                <p className="text-xs text-content-secondary mt-1">
                  Automated attendance tracking and leave management with real-time biometric facial recognition.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h4 className="text-sm font-bold text-content-primary">
                    Leave Management System
                  </h4>
                  <span className="text-xs font-mono text-content-muted">PHP, MySQL</span>
                </div>
                <p className="text-xs text-content-secondary mt-1">
                  Web-based leave application and administrative approval portal.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Toolkit */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-content-primary font-mono text-xs font-bold uppercase tracking-wider border-b border-workspace-border/60 pb-1.5">
              <Sparkles className="w-4 h-4 text-brand-red" />
              <h3>TECHNICAL SKILLS</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              <p><span className="text-content-primary font-bold">Languages:</span> Python, PHP, JavaScript, SQL</p>
              <p><span className="text-content-primary font-bold">Backend:</span> FastAPI, REST APIs, MySQL, PostgreSQL</p>
              <p><span className="text-content-primary font-bold">Frontend/Mobile:</span> React Native, HTML5, CSS3, Bootstrap, Tailwind</p>
              <p><span className="text-content-primary font-bold">AI/Data:</span> OpenAI, SBERT, FAISS, OpenCV, Google Gemini</p>
            </div>
          </div>
        </div>
      </WindowFrame>
    </motion.div>
  );
};
