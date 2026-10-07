import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Camera, 
  X, 
  FolderGit2,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WindowFrame } from '../components/windows/WindowFrame';
import { Button } from '../components/ui/Button';
import { interestsData, type InterestItem } from '../data/interests';
import type { NavigationSection } from '../types';

interface AboutProps {
  onNavigate: (section: NavigationSection) => void;
}

interface MilestoneContainer {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  modalTitle: string;
  images: string[];
  coverImage: string;
  objectPosition?: string;
}

const milestoneContainers: MilestoneContainer[] = [
  {
    id: 'lexiaid',
    number: '01',
    title: 'LexiAid — Mobile-Based Legal Assistance Application',
    modalTitle: 'lexiaid.thesis',
    images: ['/thesis1.jpg', '/thesis2.jpg', '/thesis3.jpg', '/thesis4.jpg'],
    coverImage: '/thesis1.jpg',
  },
  {
    id: 'sdca',
    number: '02',
    title: 'Web Development Engineer Intern',
    subtitle: 'Saint Dominic College of Asia',
    modalTitle: 'sdca.internship',
    images: ['/sdca1.jpg', '/sdca2.jpg', '/sdca3.jpg'],
    coverImage: '/sdca1.jpg',
  },
  {
    id: 'graduation',
    number: '03',
    title: 'Bachelor of Computer Science',
    subtitle: 'Cavite State University – Imus Campus',
    modalTitle: 'graduation.archive',
    images: ['/graduation1.jpg', '/graduation2.jpg'],
    coverImage: '/graduation1.jpg',
    objectPosition: 'object-[center_15%]',
  },
];

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const [selectedMilestone, setSelectedMilestone] = useState<MilestoneContainer | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [selectedInterest, setSelectedInterest] = useState<InterestItem | null>(null);

  // Lock body scroll when milestone modal is active
  useEffect(() => {
    if (selectedMilestone) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedMilestone]);

  // Keyboard navigation & escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedMilestone) {
        if (e.key === 'Escape') {
          setSelectedMilestone(null);
        } else if (e.key === 'ArrowLeft') {
          setActiveImageIndex(prev => Math.max(0, prev - 1));
        } else if (e.key === 'ArrowRight') {
          setActiveImageIndex(prev => Math.min(selectedMilestone.images.length - 1, prev + 1));
        }
      } else if (selectedInterest) {
        if (e.key === 'Escape') {
          setSelectedInterest(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMilestone, selectedInterest]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-12 pb-12"
    >
      {/* Section Header */}
      <div className="border-b border-workspace-border/80 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-brand-red" />
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-brand-red">
            Get To Know More
          </span>
        </div>
        <h1 className="text-3xl font-extrabold text-content-primary">
          About Me
        </h1>
        <p className="text-xs sm:text-sm text-content-secondary mt-1">
          A glimpse into my background, interests, and the ideas that shape me as a developer.
        </p>
      </div>

      {/* Main About Layout: Bio + Photo Window */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Bio Panel */}
        <div className="lg:col-span-7 space-y-6">
          <WindowFrame title="about_lorraine.md" subtitle="Markdown View">
            <div className="prose prose-invert max-w-none space-y-5 text-content-secondary leading-relaxed">
              <p className="text-base sm:text-lg text-content-primary font-medium">
                I'm <strong className="text-content-primary font-semibold">Josephine Lorraine Ochoa</strong>, a <span className="text-brand-red font-medium">Computer Science graduate</span> from <span className="text-brand-red font-medium">Cavite State University – Imus Campus</span>.
              </p>
              <p>
                I enjoy turning ideas into practical software and exploring how technology can make everyday tasks simpler and more useful. Throughout my studies, I worked on projects involving web applications, mobile development, and AI-powered systems, giving me experience across different stages of building software.
              </p>
              <p>
                My experience also includes a web development internship, where I contributed to enhancements for an existing Student Portal and gained experience working with a development team and real-world code.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Button variant="primary" size="md" onClick={() => onNavigate('education')}>
                  VIEW EDUCATION
                </Button>
                <Button variant="secondary" size="md" onClick={() => onNavigate('projects')}>
                  VIEW MY PROJECTS
                </Button>
                <Button variant="ghost" size="md" onClick={() => onNavigate('contact')}>
                  GET IN TOUCH
                </Button>
              </div>
            </div>
          </WindowFrame>
        </div>

        {/* Profile Picture Window & Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-workspace-panel border border-workspace-border rounded-xl shadow-window overflow-hidden">
            {/* Window Header */}
            <div className="bg-workspace-sidebar/95 border-b border-workspace-border px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5484D] inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F6AD55] inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#67D391] inline-block" />
                <span className="font-mono text-xs text-content-primary font-semibold ml-1.5">
                  lorraine.about
                </span>
              </div>
            </div>

            {/* Photo & Info */}
            <div className="p-5 flex flex-col items-center text-center space-y-4">
              <div 
                className="relative w-full aspect-[4/4.5] max-w-[280px] rounded-xl overflow-hidden bg-[#181818] shadow-inner group"
              >
                <img
                  src="/about-pic.jpg"
                  alt="Josephine Lorraine Ochoa"
                  className="w-full h-full object-cover object-[center_35%] scale-125 transition-transform duration-500 group-hover:scale-135 pointer-events-none"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/profile.jpg';
                  }}
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-content-primary">
                  Josephine Lorraine Ochoa
                </h3>
                <p className="text-xs text-content-muted font-mono flex items-center justify-center gap-1 pt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-content-secondary" />
                  Cavite, Philippines
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* BEYOND CODE (Personal Directory) Section */}
      <div className="space-y-6 pt-2">
        {/* Header & File Count */}
        <div className="border-b border-workspace-border/80 pb-4">
          <div>
            <div className="flex items-center gap-3 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-red">
                BEYOND CODE
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-workspace-card text-content-secondary border border-workspace-border">
                ~/personal
              </span>
            </div>
            <h2 className="text-2xl font-bold text-content-primary">
              Personal Directory
            </h2>
            <p className="text-xs sm:text-sm text-content-secondary mt-1">
              A few things I enjoy and explore outside development.
            </p>
          </div>
        </div>

        {/* Directory Bar & Path Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono bg-workspace-sidebar px-4 py-2.5 rounded-lg border border-workspace-border shadow-sm">
          <div className="flex items-center gap-2 text-content-muted">
            <FolderGit2 className="w-4 h-4 text-brand-red" />
            <span className="text-content-primary font-semibold">~/lorraine/personal/beyond-code/</span>
          </div>
          <span className="text-[10px] tracking-wider text-content-muted uppercase font-semibold">
            PERSONAL DIRECTORY · {String(interestsData.length).padStart(2, '0')} FILES · 2026
          </span>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {interestsData.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedInterest(item)}
                className="relative overflow-hidden p-5 rounded-xl bg-workspace-panel border border-workspace-border hover:border-brand-red/60 transition-all duration-200 text-left group cursor-pointer shadow-sm hover:shadow-glow-red/10 focus:outline-none focus:ring-2 focus:ring-brand-red/50 col-span-1"
              >
                {/* Standard Document Card Layout */}
                <div className="relative z-10 flex flex-col justify-between h-full space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon className="w-3.5 h-3.5 text-content-muted group-hover:text-brand-red transition-colors shrink-0" />
                        <span className="text-xs font-mono text-content-secondary group-hover:text-content-primary transition-colors font-medium">
                          {item.filename}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold tracking-wider text-content-muted uppercase group-hover:text-brand-red transition-colors">
                        {item.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-content-primary group-hover:text-brand-red transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-content-secondary leading-relaxed line-clamp-2 mt-1.5">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-workspace-border">
                    <span className="text-[10px] font-mono font-medium text-content-muted">
                      {item.metaType}
                    </span>
                    <ArrowRight className="w-4 h-4 text-content-muted group-hover:text-brand-red group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="space-y-6 pt-4">
        <div className="border-b border-workspace-border/80 pb-4">
          <div className="flex items-center gap-2 mb-1">
            <Camera className="w-4 h-4 text-brand-red" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-red">
              GALLERY & MILESTONES
            </span>
          </div>
          <h2 className="text-2xl font-bold text-content-primary">
            Memories & Academic Journey
          </h2>
          <p className="text-xs sm:text-sm text-content-secondary mt-1">
            Key milestones and visual documentation from thesis development, internship engineering, and graduation.
          </p>
        </div>

        {/* 3 Milestone Containers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {milestoneContainers.map((milestone, idx) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              onClick={() => {
                setSelectedMilestone(milestone);
                setActiveImageIndex(0);
              }}
              className="bg-workspace-panel border border-workspace-border hover:border-brand-red/40 rounded-xl overflow-hidden shadow-panel transition-all duration-200 group cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4 p-4 sm:p-5 flex-1 flex flex-col justify-between">
                {/* Header: Title + Subtitle on left, Milestone Number on right */}
                <div className="space-y-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base sm:text-lg font-bold text-content-primary group-hover:text-brand-red transition-colors leading-snug">
                      {milestone.title}
                    </h3>
                    <span className="font-mono text-xs text-content-muted shrink-0 pt-0.5 select-none">
                      {milestone.number}
                    </span>
                  </div>
                  {milestone.subtitle && (
                    <p className="text-xs text-content-secondary font-mono">
                      {milestone.subtitle}
                    </p>
                  )}
                </div>

                {/* Image Preview: 16:9 aspect ratio, object-cover */}
                <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-workspace-sidebar border border-workspace-border/60 mt-2">
                  <img
                    src={milestone.coverImage}
                    alt={milestone.title}
                    className={`w-full h-full object-cover ${milestone.objectPosition || 'object-center'} group-hover:scale-[1.025] transition-transform duration-200`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/profile.jpg';
                    }}
                  />
                  {/* Subtle dark overlay + small expand arrow on hover only */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-start justify-end p-2.5">
                    <span className="w-6 h-6 rounded-md bg-black/60 backdrop-blur-sm flex items-center justify-center text-white/90 shadow-sm">
                      <ArrowUpRight className="w-3.5 h-3.5 text-brand-red" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-4 py-3 sm:px-5 bg-workspace-sidebar/60 border-t border-workspace-border/80 flex items-center justify-between font-mono text-xs">
                <span className="text-content-muted text-[11px] font-medium">
                  {String(milestone.images.length).padStart(2, '0')} IMAGES
                </span>
                <div className="flex items-center gap-1 text-brand-red font-semibold">
                  <span>VIEW GALLERY</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Milestone Gallery Lightbox Modal */}
      <AnimatePresence>
        {selectedMilestone && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-hidden">
            <div className="fixed inset-0" onClick={() => setSelectedMilestone(null)} />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-4xl bg-workspace-panel border border-workspace-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] my-auto select-none"
            >
              {/* Modal Window Header */}
              <div className="bg-workspace-sidebar/95 border-b border-workspace-border px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setSelectedMilestone(null)}
                      className="w-2.5 h-2.5 rounded-full bg-[#E5484D] inline-block hover:opacity-80 transition-opacity"
                      title="Close"
                    />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F6AD55] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#67D391] inline-block" />
                  </div>
                  <span className="font-mono text-xs font-medium text-content-primary tracking-wide">
                    {selectedMilestone.modalTitle}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedMilestone(null)}
                  className="p-1 rounded hover:bg-brand-red/20 text-content-muted hover:text-brand-red transition-colors"
                  title="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Main Image Display Viewport */}
              <div className="relative flex-1 bg-workspace-bg p-4 sm:p-6 flex items-center justify-center min-h-[300px] max-h-[55vh] sm:max-h-[60vh] overflow-hidden">
                <img
                  src={selectedMilestone.images[activeImageIndex]}
                  alt={`${selectedMilestone.title} - Image ${activeImageIndex + 1}`}
                  className="max-h-[50vh] sm:max-h-[55vh] w-auto max-w-full object-contain rounded-lg shadow-md"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/profile.jpg';
                  }}
                />
              </div>

              {/* Controls & Navigation Footer */}
              <div className="bg-workspace-panel border-t border-workspace-border p-4 sm:px-6 space-y-4">
                {/* Nav Controls Row */}
                <div className="flex items-center justify-between font-mono text-xs">
                  <button
                    type="button"
                    disabled={activeImageIndex === 0}
                    onClick={() => setActiveImageIndex(prev => Math.max(0, prev - 1))}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border transition-all ${
                      activeImageIndex === 0
                        ? 'border-workspace-border text-content-muted opacity-40 cursor-not-allowed'
                        : 'border-workspace-border bg-workspace-card text-content-primary hover:border-brand-red hover:text-brand-red cursor-pointer'
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  {/* Counter */}
                  <div className="text-content-primary font-mono text-xs font-semibold tracking-wider">
                    {String(activeImageIndex + 1).padStart(2, '0')} / {String(selectedMilestone.images.length).padStart(2, '0')}
                  </div>

                  <button
                    type="button"
                    disabled={activeImageIndex === selectedMilestone.images.length - 1}
                    onClick={() => setActiveImageIndex(prev => Math.min(selectedMilestone.images.length - 1, prev + 1))}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border transition-all ${
                      activeImageIndex === selectedMilestone.images.length - 1
                        ? 'border-workspace-border text-content-muted opacity-40 cursor-not-allowed'
                        : 'border-workspace-border bg-workspace-card text-content-primary hover:border-brand-red hover:text-brand-red cursor-pointer'
                    }`}
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Thumbnails Strip */}
                <div className="flex items-center justify-center gap-2 pt-1">
                  {selectedMilestone.images.map((img, idx) => (
                    <button
                      key={img}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-10 h-10 rounded-md overflow-hidden border-2 transition-all p-0.5 bg-workspace-card ${
                        activeImageIndex === idx
                          ? 'border-brand-red scale-105 shadow-glow-red/20'
                          : 'border-workspace-border opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover rounded" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Modal for Personal Directory / Beyond Code Files */}
        {selectedInterest && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
            <div className="fixed inset-0" onClick={() => setSelectedInterest(null)} />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-2xl bg-workspace-panel border border-workspace-border rounded-xl shadow-2xl overflow-hidden font-mono"
            >
              {/* Window Header */}
              <div className="bg-workspace-sidebar border-b border-workspace-border px-4 py-3 flex items-center justify-between select-none">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E5484D] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F6AD55] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#67D391] inline-block" />
                  <span className="text-xs text-content-primary font-semibold ml-2">
                    ~/lorraine/personal/beyond-code/{selectedInterest.filename}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedInterest(null)}
                  className="p-1 rounded hover:bg-workspace-hover text-content-muted hover:text-content-primary transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Window Content */}
              <div className="p-6 space-y-6 text-content-primary font-sans">
                <div className="flex items-center justify-between border-b border-workspace-border pb-3">
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-content-muted uppercase">
                      FILE CONTENT
                    </span>
                    <h3 className="text-xl font-bold font-mono tracking-wider text-content-primary uppercase mt-0.5">
                      {selectedInterest.title}
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 rounded text-xs font-mono font-semibold bg-workspace-card text-brand-red border border-workspace-border">
                    {selectedInterest.filename}
                  </span>
                </div>

                {/* Document Body code-editor format */}
                <div className="bg-workspace-sidebar p-4 rounded-lg border border-workspace-border font-mono text-xs text-content-secondary space-y-3 leading-relaxed">
                  <div className="flex items-center gap-2 text-content-muted border-b border-workspace-border pb-2 text-[11px]">
                    <span className="text-brand-red">//</span>
                    <span>Category: {selectedInterest.category}</span>
                    <span>·</span>
                    <span>Type: {selectedInterest.metaType}</span>
                  </div>
                  <p className="text-content-primary font-sans text-sm pt-1 leading-relaxed">
                    {selectedInterest.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-workspace-border flex items-center justify-between text-xs font-mono text-content-muted">
                  <span>{selectedInterest.metaCategory}</span>
                  <span className="px-2 py-0.5 rounded bg-workspace-card text-brand-red border border-workspace-border">
                    {selectedInterest.metaType}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
