import { Calendar, Briefcase, CheckCircle2, Shield, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { initiatives } from '../data';

export default function Initiatives() {
  return (
    <section id="initiatives" className="py-24 bg-transparent relative border-b border-sky-200/40">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#f0f7fc]/40 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f0f7fc]/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-slate-500 tracking-[0.25em] uppercase mb-3">Community Hubs</h2>
          <p className="text-3xl sm:text-4xl font-serif italic text-[#0f172a] tracking-tight">
            Grassroots Initiatives & Leadership
          </p>
          <p className="text-slate-600 text-sm mt-3">
            Leading targeted campaigns, open-source localized groups, and field workshops directly at the geographical frontlines.
          </p>
          <div className="h-[1px] w-20 bg-[#0f172a]/20 mx-auto mt-4" />
        </div>

        {/* Initiatives List */}
        <div className="space-y-16">
          {initiatives.map((init, index) => (
            <motion.div
              key={init.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Block */}
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                <div className="relative group">
                  <div className="absolute -inset-2 bg-sky-200/20 blur-lg opacity-25" />
                  <div className="relative rounded-none overflow-hidden border border-slate-200 bg-white p-1.5 shadow-md aspect-video lg:aspect-[4/3]">
                    <img
                      src={init.imageUrl}
                      alt={init.title}
                      className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    {/* Visual Badge Overlay */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-none bg-[#0f172a] text-[9px] font-mono uppercase tracking-widest font-bold text-white shadow-md">
                      {init.category}
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Block */}
              <div className="lg:col-span-7 flex flex-col items-start text-left space-y-4">
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-3 text-[10px] text-slate-500 font-mono uppercase tracking-widest">
                  <span className="flex items-center gap-1 text-[#0f172a] font-semibold">
                    <Briefcase className="w-3.5 h-3.5" /> {init.role}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {init.period}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#0f172a]">{init.title}</h3>
                  <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mt-1">{init.organization}</p>
                </div>

                {/* Description */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {init.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-3 w-full pt-2">
                  <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Key Milestone Accomplishments</h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {init.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex gap-3 items-start">
                        <div className="flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#0f172a]" />
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
