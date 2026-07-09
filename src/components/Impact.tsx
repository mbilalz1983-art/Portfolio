import { GraduationCap, MapPin, Cpu, TrendingUp, Calendar, Briefcase, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { impactStats, timelineItems } from '../data';

export default function Impact() {
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#0f172a]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#0f172a]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#0f172a]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#0f172a]" />;
      default:
        return <GraduationCap className="w-5 h-5 text-[#0f172a]" />;
    }
  };

  const getTimelineIcon = (type: string) => {
    switch (type) {
      case 'career':
        return <Briefcase className="w-4 h-4 text-[#0f172a]" />;
      case 'milestone':
        return <Award className="w-4 h-4 text-[#0f172a]" />;
      default:
        return <Calendar className="w-4 h-4 text-[#0f172a]" />;
    }
  };

  return (
    <section id="impact" className="py-24 bg-transparent relative border-b border-sky-200/40">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0f7fc]/40 via-transparent to-[#f0f7fc]/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-slate-500 tracking-[0.25em] uppercase mb-3">Audited Highlights</h2>
          <p className="text-3xl sm:text-4xl font-serif italic text-[#0f172a] tracking-tight">
            Our Quantified & Historical Impact
          </p>
          <div className="h-[1px] w-20 bg-[#0f172a]/20 mx-auto mt-4" />
        </div>

        {/* Part 1: Grid of Impact Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {impactStats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-none bg-white border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-none bg-slate-50 border border-slate-200">
                  {getStatIcon(stat.icon)}
                </div>
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-[0.2em]">Metrics</span>
              </div>
              <div>
                <span className="block text-3xl font-mono font-bold text-[#0f172a] tracking-tight">{stat.value}</span>
                <span className="block text-sm font-serif font-medium text-[#0f172a] mt-1">{stat.label}</span>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Part 2: Historical Vertical Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-xs font-mono tracking-[0.25em] uppercase text-slate-500">Milestone Chronology</h3>
            <p className="text-xs text-slate-600 mt-1">A timeline of key initiatives and historical accomplishments.</p>
          </div>

          <div className="relative border-l border-slate-200 md:ml-32">
            {timelineItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="mb-10 ml-6 md:ml-8 relative"
              >
                {/* Year Badge on Left for Desktop */}
                <div className="hidden md:block absolute -left-40 top-1 w-28 text-right">
                  <span className="px-3 py-1 rounded-none bg-white border border-slate-200 text-xs font-mono font-bold text-[#0f172a] tracking-wider shadow-sm">
                    {item.year}
                  </span>
                </div>

                {/* Vertical Line Connector Circle */}
                <span className="absolute -left-10 md:-left-12 top-1.5 flex h-8 w-8 items-center justify-center rounded-none bg-slate-50 border border-slate-200 text-[#0f172a] shadow-sm">
                  {getTimelineIcon(item.type)}
                </span>

                {/* Timeline Card */}
                <div className="p-5 rounded-none bg-white border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-md transition-all text-left">
                  {/* Year Tag for Mobile */}
                  <span className="inline-block md:hidden mb-2 px-2.5 py-0.5 rounded-none bg-[#0f172a] text-[10px] font-mono font-bold text-white uppercase tracking-widest">
                    {item.year}
                  </span>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-base font-serif text-[#0f172a]">{item.title}</h4>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500">{item.organization}</span>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
