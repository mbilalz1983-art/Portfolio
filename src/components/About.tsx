import { Globe, Heart, ShieldCheck, Milestone, Download } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';

export default function About() {
  const pillars = [
    {
      icon: <Globe className="w-5 h-5 text-[#0f172a]" />,
      title: 'Urdu AI & NLP Localization',
      description: 'Removing language barriers from advanced machine intelligence. Pioneered specialized prompt guides and culturally aligned LLM contexts for Urdu script speakers.'
    },
    {
      icon: <Heart className="w-5 h-5 text-[#0f172a]" />,
      title: 'Rural Tech Enablement',
      description: 'Tackling the digital divide at the geographical margins. Built mobile solar computing labs to train remote and underprivileged children in futuristic tools.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#0f172a]" />,
      title: 'Credible & Sustainable Impact',
      description: 'Fusing community-led networks with digital products. Creating real job opportunities and earning avenues for rural youth through targeted freelancing skills.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-transparent relative border-t border-b border-sky-200/40">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0f7fc]/40 via-transparent to-[#f0f7fc]/40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-slate-500 tracking-[0.25em] uppercase mb-3">About the Founder</h2>
          <p className="text-3xl sm:text-4xl font-serif italic text-[#0f172a] tracking-tight">
            The Vision Behind the Impact
          </p>
          <div className="h-[1px] w-20 bg-[#0f172a]/20 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Beautiful Photo Layout */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              {/* Decorative behind border */}
              <div className="absolute -inset-4 bg-sky-200/20 opacity-30 blur-xl animate-pulse" />
              
              {/* Photo Box */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-none border border-slate-200 bg-white p-2 shadow-xl">
                <div className="w-full h-full rounded-none overflow-hidden relative group">
                  <img
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle color overlay */}
                  <div className="absolute inset-0 bg-[#0f172a]/3 mix-blend-overlay" />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent">
                    <span className="block text-[10px] font-mono text-white/60 tracking-wider">FOUNDER-LEVEL WORK</span>
                    <span className="block text-sm font-serif font-medium text-white mt-1">Empowering Rural Societies</span>
                  </div>
                </div>
              </div>

              {/* Little Floating Milestone Indicator */}
              <div className="absolute -bottom-6 -right-6 p-4 rounded-none bg-white border border-slate-200 shadow-lg flex items-center space-x-3 max-w-[180px]">
                <div className="p-2.5 bg-slate-100 text-[#0f172a] border border-slate-200">
                  <Milestone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-lg font-mono font-bold text-[#0f172a]">5+ Years</span>
                  <span className="block text-[9px] text-slate-500 uppercase tracking-widest font-mono">Core Leadership</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Biography Narrative & Core Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-serif text-[#0f172a]">
                Pioneering regional tech inclusion & human potential
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Whether orchestrating regional tech bootcamps in far-flung rural terrains or writing localized instruction datasets, my focus remains constant: to eliminate linguistic barriers and geographical exclusion so everyone has a seat at the table of modern technological wealth.
              </p>
            </div>

            {/* Structured Pillars Grid */}
            <div className="space-y-4 pt-2">
              <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Foundational Values</h4>
              <div className="grid grid-cols-1 gap-4">
                {pillars.map((pillar, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 4 }}
                    className="flex gap-4 p-4 rounded-none bg-white border border-slate-200/80 shadow-sm hover:border-slate-300 transition-all"
                  >
                    <div className="flex-shrink-0 p-2.5 rounded-none bg-slate-50 border border-slate-200 text-[#0f172a] h-10 w-10 flex items-center justify-center">
                      {pillar.icon}
                    </div>
                    <div>
                      <h5 className="text-sm font-serif font-medium text-[#0f172a]">{pillar.title}</h5>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{pillar.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Action button */}
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-none bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-[#0f172a] text-xs font-mono uppercase tracking-widest font-semibold transition-all"
              >
                <span>Read Vision & Projects</span>
                <Globe className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
