import { Brain, Users, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { skillCategories } from '../data';

export default function Skills() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-5 h-5 text-[#0f172a]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#0f172a]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#0f172a]" />;
      default:
        return <Brain className="w-5 h-5 text-[#0f172a]" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-transparent relative border-b border-sky-200/40">
      {/* Decorative subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-200/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-slate-500 tracking-[0.25em] uppercase mb-3">Professional Blueprint</h2>
          <p className="text-3xl sm:text-4xl font-serif italic text-[#0f172a] tracking-tight">
            Core Expertise & Skills
          </p>
          <p className="text-slate-600 text-sm mt-3">
            A diverse combination of deep tech localization capability, grassroots leadership, and high-impact educational content.
          </p>
          <div className="h-[1px] w-20 bg-[#0f172a]/20 mx-auto mt-4" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="group p-6 rounded-none bg-white border border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/50 shadow-sm hover:shadow-md transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 rounded-none bg-slate-50 border border-slate-200 text-[#0f172a] flex items-center justify-center">
                  {getIcon(cat.icon)}
                </div>
                <h3 className="text-base font-serif font-medium text-[#0f172a] group-hover:text-slate-800 transition-colors">
                  {cat.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-700 font-semibold">{skill.name}</span>
                      <span className="text-slate-500">{skill.level}%</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="h-1.5 w-full bg-slate-100 rounded-none overflow-hidden border border-slate-200">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: sIdx * 0.05 }}
                        className="h-full rounded-none bg-[#0f172a]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
