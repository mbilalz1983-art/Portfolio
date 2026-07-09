import { useState } from 'react';
import { ExternalLink, Github, Code, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Urdu AI', 'Digital Products', 'Education', 'Tools'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-transparent relative border-b border-sky-200/40">
      {/* Decorative Subtle White Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-200/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-200/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-slate-500 tracking-[0.25em] uppercase mb-3">Portfolio Showcases</h2>
          <p className="text-3xl sm:text-4xl font-serif italic text-[#0f172a] tracking-tight">
            Digital Products & AI Innovation
          </p>
          <p className="text-slate-600 text-sm mt-3">
            Custom-built applications, local language models, and micro-platforms crafted to empower regional communities.
          </p>
          <div className="h-[1px] w-20 bg-[#0f172a]/20 mx-auto mt-4" />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-5 py-2 rounded-none text-xs font-mono uppercase tracking-widest transition-all ${
                selectedCategory === category
                  ? 'bg-[#0f172a] text-white border border-[#0f172a] font-bold shadow-md'
                  : 'bg-white/65 border border-slate-200 text-slate-500 hover:text-[#0f172a] hover:border-[#0f172a]/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative rounded-none bg-white border border-slate-200/80 hover:border-slate-300 overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="relative aspect-[1.8/1] overflow-hidden bg-slate-50 border-b border-slate-200">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Pill Overlaid */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-none bg-[#0f172a] text-[9px] font-mono uppercase tracking-widest font-bold text-white flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3 h-3 text-sky-300" />
                    {project.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow text-left">
                  <h3 className="text-lg sm:text-xl font-serif text-[#0f172a] group-hover:text-slate-800 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tech stack items */}
                  <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-slate-200/80">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-none bg-slate-50 border border-slate-200 text-[9px] font-mono text-slate-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links Section */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200/80">
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1">
                      <Code className="w-3.5 h-3.5 text-slate-400" /> Full Stack Product
                    </span>
                    <div className="flex items-center space-x-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="p-1.5 rounded-none bg-white border border-slate-200 hover:border-slate-300 hover:text-[#0f172a] text-slate-500 transition-colors"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-none bg-slate-50 border border-slate-200 hover:bg-slate-100 text-[10px] font-mono uppercase tracking-widest font-semibold text-[#0f172a] transition-all"
                        >
                          <span>Explore</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
