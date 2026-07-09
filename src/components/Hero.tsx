import { ArrowRight, Sparkles, MapPin, Award, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const handleScrollTo = (id: string) => {
    onNavigate(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-transparent"
    >
      {/* Decorative Background Image / Graphic Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 md:opacity-15 select-none">
        <img
          src={personalInfo.bannerUrl}
          alt="Visual network connections"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Deep vignetting and color filters */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#f0f7fc]/85 to-[#f0f7fc]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f0f7fc] to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#f0f7fc] to-transparent" />
      </div>

      {/* Floating Subtle Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/40 rounded-full blur-[100px] z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-200/30 rounded-full blur-[100px] z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Top Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-none bg-[#0f172a]/5 border border-[#0f172a]/15 text-[#0f172a] text-xs font-semibold tracking-wider uppercase shadow-inner"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0f172a] animate-pulse" />
              <span>Pioneering Grassroots Tech</span>
            </motion.div>

            {/* Name Heading */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif italic tracking-tight text-[#0f172a] leading-tight"
              >
                Let’s democratize <br />
                <span className="text-[#0f172a] not-italic font-normal">
                  AI & technology
                </span> <br />
                for everyone.
              </motion.h1>
              
              {/* Profile Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-slate-800 font-serif max-w-2xl leading-relaxed"
              >
                Hi, I’m <span className="text-[#0f172a] font-semibold border-b border-[#0f172a] pb-0.5">{personalInfo.name}</span>. I’m a founder, AI educator, and community builder crafting digital tools and pathways to uplift marginalized societies.
              </motion.p>
            </div>

            {/* Tagline Bio */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base text-slate-500 max-w-xl leading-relaxed font-mono"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => handleScrollTo('initiatives')}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-none bg-[#0f172a] hover:bg-slate-800 text-white font-semibold text-xs font-mono uppercase tracking-widest transition-all hover:scale-[1.02]"
              >
                <span>Explore Initiatives</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => handleScrollTo('projects')}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-none bg-white/60 border border-slate-200 hover:border-slate-300 hover:bg-white/85 text-slate-800 font-mono text-xs uppercase tracking-widest font-semibold transition-all"
              >
                <span>View My Projects</span>
              </button>
            </motion.div>

            {/* Quick Metadata Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-4 text-xs font-mono text-slate-500 border-t border-slate-200/80 w-full"
            >
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#0f172a]/70" /> {personalInfo.location}
              </span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-[#0f172a]/70" /> Founder of Waseela
              </span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5 text-[#0f172a]/70" /> AI Localization Specialist
              </span>
            </motion.div>
          </div>

          {/* Hero Right: Highly Polished Floating Bento Elements */}
          <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[450px] flex items-center justify-center">
            
            {/* Main Visual: Outer Glassmorphic Card Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-72 h-72 sm:w-80 sm:h-80 rounded-none bg-white/40 p-[1px] shadow-xl relative"
            >
              <div className="w-full h-full bg-white rounded-none overflow-hidden p-3 flex flex-col justify-between relative group border border-slate-200">
                {/* Glowing Border Hover Trigger */}
                <div className="absolute inset-0 bg-[#0f172a]/3 group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
                
                {/* Embedded Avatar */}
                <div className="relative w-full h-2/3 rounded-none overflow-hidden bg-slate-50 border border-slate-100">
                  <img
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
                  
                  {/* Status indicator tag */}
                  <div className="absolute bottom-3 left-3 px-2 py-1 bg-[#0f172a] rounded-none text-[9px] font-mono text-white flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active Founder
                  </div>
                </div>

                {/* Card footer details */}
                <div className="pt-2">
                  <h3 className="text-xs font-mono uppercase tracking-widest font-bold text-[#0f172a]">{personalInfo.name}</h3>
                  <p className="text-xs text-slate-600 mt-0.5 line-clamp-2 leading-relaxed">
                    Localizing cutting-edge AI technologies for communities that need them most.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 1: Urdu AI Highlight */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: -40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
              className="absolute -top-4 right-2 sm:right-6 md:right-10 lg:-right-4 p-4 rounded-none bg-white border border-slate-200/80 shadow-lg max-w-[200px]"
            >
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-slate-100 text-[#0f172a] border border-slate-200">
                  <span className="font-serif font-black text-xs leading-none">اردو</span>
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest font-bold text-[#0f172a]">Urdu AI Education</h4>
                  <p className="text-[10px] text-slate-500 mt-1 leading-normal">First comprehensive AI curricula in native Urdu script.</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 2: Rural Inclusion Badge */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
              className="absolute -bottom-6 left-2 sm:left-6 md:left-10 lg:-left-4 p-4 rounded-none bg-white border border-slate-200/80 shadow-lg max-w-[210px]"
            >
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-slate-100 text-[#0f172a] border border-slate-200">
                  <MapPin className="w-4 h-4 text-[#0f172a]" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest font-bold text-[#0f172a]">Rural Caravan Hubs</h4>
                  <p className="text-[10px] text-slate-500 mt-1 leading-normal">Driving solar-powered mobile classrooms across rural terrains.</p>
                </div>
              </div>
            </motion.div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
