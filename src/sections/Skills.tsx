import React from 'react';
import { 
  Code, 
  Server, 
  Smartphone, 
  Cpu, 
  Wrench, 
  Layers,
  Globe
} from 'lucide-react';
import { motion } from 'framer-motion';
import { skillCategoriesData } from '../data/skills';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Server,
  Smartphone,
  Cpu,
  Wrench,
  Globe,
};

export const Skills: React.FC = () => {
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
              My Specialized
            </span>
          </div>
          <h1 className="text-3xl font-extrabold text-content-primary">
            Skills
          </h1>
          <p className="text-sm text-content-secondary mt-1">
            Technical capabilities mapped directly to implemented projects.
          </p>
        </div>
      </div>

      {/* Skills Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategoriesData.map((cat, catIdx) => {
          const Icon = iconMap[cat.iconName] || Layers;

          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: catIdx * 0.08 }}
              className="bg-workspace-panel border border-workspace-border rounded-xl overflow-hidden flex flex-col justify-between shadow-panel"
            >
              {/* Category Header */}
              <div className="bg-workspace-sidebar/90 border-b border-workspace-border px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-workspace-card border border-workspace-border">
                    <Icon className="w-4 h-4 text-brand-red" />
                  </div>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-content-primary">
                    {cat.category}
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-content-muted">
                  {cat.skills.length} skills
                </span>
              </div>

              {/* Skills Items */}
              <div className="p-4 sm:p-5 space-y-4 flex-1">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-lg bg-workspace-card/70 border border-workspace-border dark:border-[#303030] hover:border-brand-red/40 dark:hover:border-brand-red/40 transition-colors space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-content-primary">
                        {skill.name}
                      </span>
                      {skill.tag && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-workspace-panel text-content-muted border border-workspace-border dark:border-[#2a2a2a]">
                          {skill.tag}
                        </span>
                      )}
                    </div>

                    {/* Evidence: Used in projects */}
                    <div className="text-[11px] font-mono text-content-muted flex items-start gap-1.5 pt-1">
                      <span className="text-brand-red font-semibold shrink-0">Used in:</span>
                      <span className="text-content-secondary">
                        {skill.usedIn.join(', ')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
