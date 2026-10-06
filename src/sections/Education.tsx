import React, { useState } from 'react';
import { GraduationCap, Calendar, MapPin, School, Building2, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

interface EducationItem {
  id: string;
  institution: string;
  location: string;
  period?: string;
  degreeOrProgram: string;
  logoSrc: string;
  logoFallbackText: string;
  icon: React.ComponentType<{ className?: string }>;
}

const educationHistory: EducationItem[] = [
  {
    id: 'cvsu',
    institution: 'Cavite State University - Imus Campus',
    location: 'Imus City, Cavite',
    period: '2022–2026',
    degreeOrProgram: 'Bachelor of Computer Science',
    logoSrc: '/cvsu-logo.png',
    logoFallbackText: 'CvSU',
    icon: GraduationCap,
  },
  {
    id: 'ucc',
    institution: 'Unida Christian Colleges',
    location: 'Imus City, Cavite',
    period: '2020–2022',
    degreeOrProgram: 'Senior High School · STEM',
    logoSrc: '/ucc-logo.png',
    logoFallbackText: 'UCC',
    icon: School,
  },
  {
    id: 'geanhs',
    institution: 'General Emilio Aguinaldo National High School',
    location: 'Imus City, Cavite',
    period: '2016–2019',
    degreeOrProgram: 'Junior High School',
    logoSrc: '/geanhs-logo.png',
    logoFallbackText: 'GEANHS',
    icon: Building2,
  },
  {
    id: 'palico',
    institution: 'Palico Elementary School',
    location: 'Imus City, Cavite',
    period: '2012–2016',
    degreeOrProgram: 'Elementary School',
    logoSrc: '/palico-logo.png',
    logoFallbackText: 'PALICO',
    icon: BookOpen,
  },
];

export const Education: React.FC = () => {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

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
              Academic Journey
            </span>
          </div>
          <h1 className="text-3xl font-extrabold text-content-primary">
            Educational Background
          </h1>
          <p className="text-sm text-content-secondary mt-1">
            Academic milestones and educational institutions attended in Imus City, Cavite.
          </p>
        </div>
      </div>

      {/* Education Cards List */}
      <div className="space-y-3.5 sm:space-y-4">
        {educationHistory.map((item, idx) => {
          const Icon = item.icon;
          const hasImgError = imgErrors[item.id];

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="bg-workspace-panel border border-workspace-border hover:border-brand-red/40 rounded-xl overflow-hidden shadow-panel transition-all duration-200 group p-3.5 sm:p-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6">
                {/* LEFT SIDE: Logo + School Name & Degree */}
                <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 flex-1">
                  {/* Logo Container */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-workspace-card border border-workspace-border flex items-center justify-center p-1.5 shrink-0 overflow-hidden shadow-sm group-hover:border-brand-red/50 transition-colors">
                    {!hasImgError && item.logoSrc ? (
                      <img
                        src={item.logoSrc}
                        alt={`${item.institution} Logo`}
                        className="w-full h-full object-contain"
                        onError={() => setImgErrors(prev => ({ ...prev, [item.id]: true }))}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Icon className="w-5 h-5 text-brand-red" />
                      </div>
                    )}
                  </div>

                  {/* School Name & Degree */}
                  <div className="min-w-0 space-y-0.5">
                    <h3 className="text-base sm:text-lg font-bold text-content-primary group-hover:text-brand-red transition-colors leading-snug">
                      {item.institution}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-content-secondary font-medium">
                      {item.degreeOrProgram}
                    </p>
                  </div>
                </div>

                {/* RIGHT SIDE: Date & Location (Right-Aligned & Vertically Centered) */}
                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 sm:gap-1 shrink-0 font-mono text-xs text-content-muted sm:text-right pt-2 sm:pt-0 border-t sm:border-t-0 border-workspace-border/50">
                  {item.period && (
                    <div className="flex items-center gap-1.5 sm:justify-end">
                      <Calendar className="w-3.5 h-3.5 text-brand-red shrink-0" />
                      <span>{item.period}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5 sm:justify-end">
                    <MapPin className="w-3.5 h-3.5 text-brand-red shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
