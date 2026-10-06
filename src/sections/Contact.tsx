import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { WindowFrame } from '../components/windows/WindowFrame';
import { FloatingMessage } from '../components/ui/FloatingMessage';
import { portfolioMeta } from '../data/portfolioData';

// Monochrome Lucide / SVG icons for platforms
const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TiktokIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.34 1.55-1.36 2.54-.01.76.28 1.5.78 2.05.7.77 1.81 1.08 2.8.84.94-.21 1.75-.92 2.06-1.83.21-.6.25-1.25.24-1.88.01-4.66.01-9.33.01-14z"/>
  </svg>
);

const getPlatformIcon = (id: string) => {
  switch (id) {
    case 'github': return GithubIcon;
    case 'linkedin': return LinkedinIcon;
    case 'instagram': return InstagramIcon;
    case 'facebook': return FacebookIcon;
    case 'tiktok': return TiktokIcon;
    default: return GithubIcon;
  }
};

export const Contact: React.FC = () => {
  const emailAddress = portfolioMeta.socialLinks.email;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-8"
      >
        {/* Left-Aligned Header Matching Other Sections */}
        <div className="border-b border-workspace-border/80 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-brand-red">
                Get in Touch
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-content-primary">
              Let's build something together.
            </h1>
            <p className="text-sm text-content-secondary mt-1">
              Have a project, opportunity, or idea in mind? I'd love to hear from you.
            </p>
          </div>
        </div>

        {/* Main Contact Studio Window */}
        <WindowFrame
          title="contact_terminal.sh"
          subtitle="Direct Channels"
          bodyClassName="p-5 sm:p-7 space-y-6"
        >
          {/* 1. Primary Email Card */}
          <a
            id="email-contact-card"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=llorraineochoa.work@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 sm:p-6 rounded-xl bg-workspace-card hover:bg-brand-red/10 border border-workspace-border hover:border-brand-red/60 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group shadow-sm scroll-mt-24"
          >
            <div className="space-y-1.5 min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
                  EMAIL
                </span>
              </div>
              <p className="text-[15px] sm:text-xl font-semibold font-mono text-content-primary group-hover:text-brand-red transition-colors tracking-tight [overflow-wrap:anywhere] break-words leading-snug">
                {emailAddress}
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-brand-red group-hover:translate-x-1 transition-transform shrink-0 self-start sm:self-auto">
              <span>SEND DIRECT EMAIL</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>

          {/* 2. Direct Channels Section */}
          <div className="pt-2">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-content-muted mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
              <span>DIRECT CHANNELS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {portfolioMeta.channels.map((channel) => {
                const IconComponent = getPlatformIcon(channel.id);

                return (
                  <a
                    key={channel.id}
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-xl bg-workspace-card hover:bg-workspace-hover border border-workspace-border hover:border-brand-red/60 transition-all flex flex-col justify-between space-y-4 group shadow-sm"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-sm font-bold text-content-primary font-mono group-hover:text-brand-red transition-colors">
                          {channel.name}
                        </h3>
                        <p className="text-xs text-content-muted font-mono mt-0.5">
                          {channel.username}
                        </p>
                      </div>
                      <IconComponent className="w-4 h-4 text-content-muted group-hover:text-brand-red transition-colors" />
                    </div>

                    <div className="pt-3 border-t border-workspace-border/50 text-[11px] font-mono text-brand-red font-semibold flex items-center gap-1">
                      <span>OPEN</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </WindowFrame>
      </motion.div>

      {/* Floating notification message rendered outside page motion wrapper */}
      <FloatingMessage
        onReply={() => {
          window.open('https://mail.google.com/mail/?view=cm&fs=1&to=llorraineochoa.work@gmail.com', '_blank', 'noopener,noreferrer');
        }}
      />
    </>
  );
};
