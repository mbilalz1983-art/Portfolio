import { Globe } from 'lucide-react';
import { personalInfo } from '../data';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleScrollTo = (id: string) => {
    onNavigate(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#e6f1f8] border-t border-sky-200/50 py-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-sky-200/25 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Footer Logo & Brand */}
          <div className="md:col-span-5 flex flex-col items-start text-left space-y-4">
            <button
              onClick={() => handleScrollTo('hero')}
              className="flex items-center space-x-3 text-left group"
            >
              <div className="w-8 h-8 rounded-none bg-[#0f172a] flex items-center justify-center text-white font-mono font-bold text-sm border border-slate-200">
                QR
              </div>
              <div>
                <span className="block text-xs font-mono font-bold text-[#0f172a] tracking-[0.2em] uppercase group-hover:text-slate-700 transition-colors">
                  Qaisar Roonjha
                </span>
                <span className="block text-[8px] font-mono text-slate-500 tracking-[0.25em] uppercase">
                  AI & Grassroots Impact
                </span>
              </div>
            </button>
            <p className="text-xs text-slate-600 max-w-sm leading-relaxed">
              Empowering marginalized youth, bridging language divides in AI, and driving solar-powered mobile digital classrooms across remote terrains.
            </p>
          </div>

          {/* Nav Links Column */}
          <div className="md:col-span-4 flex flex-col items-start md:items-center text-left">
            <div className="space-y-3">
              <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em]">Index Directory</h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs font-mono">
                <button onClick={() => handleScrollTo('hero')} className="text-slate-500 hover:text-[#0f172a] transition-colors text-left">Home</button>
                <button onClick={() => handleScrollTo('about')} className="text-slate-500 hover:text-[#0f172a] transition-colors text-left">About</button>
                <button onClick={() => handleScrollTo('projects')} className="text-slate-500 hover:text-[#0f172a] transition-colors text-left">Projects</button>
                <button onClick={() => handleScrollTo('initiatives')} className="text-slate-500 hover:text-[#0f172a] transition-colors text-left">Initiatives</button>
                <button onClick={() => handleScrollTo('skills')} className="text-slate-500 hover:text-[#0f172a] transition-colors text-left">Skills</button>
                <button onClick={() => handleScrollTo('impact')} className="text-slate-500 hover:text-[#0f172a] transition-colors text-left">Impact</button>
              </div>
            </div>
          </div>

          {/* Credits & Quick Info */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end text-left md:text-right space-y-3">
            <span className="flex items-center gap-1 text-[10px] font-mono text-slate-500 tracking-wider">
              <Globe className="w-3.5 h-3.5 text-slate-600" /> Balochistan, PK
            </span>
            <div className="text-xs text-slate-500 font-mono">
              <p>&copy; {currentYear} {personalInfo.name}.</p>
              <p className="mt-1 text-[10px]">All Rights Reserved.</p>
            </div>
          </div>

        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-400">
          <div>
            <span>Waseela Network Ecosystem Platform</span>
          </div>
          <div>
            <span>Direct-Upload Ready &bull; GitHub Pages compatible</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
