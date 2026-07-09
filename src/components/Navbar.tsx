import { useState, useEffect } from 'react';
import { Menu, X, Globe, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'initiatives', label: 'Initiatives' },
    { id: 'skills', label: 'Skills' },
    { id: 'impact', label: 'Impact' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#f0f7fc]/95 backdrop-blur-md border-b border-sky-200/60 shadow-md py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleItemClick('hero')}
              className="flex items-center space-x-3 text-left group"
            >
              <div className="w-10 h-10 rounded-none bg-[#0f172a] flex items-center justify-center text-white font-serif font-semibold text-lg shadow-md group-hover:scale-105 transition-transform">
                QR
              </div>
              <div>
                <span className="block text-sm font-serif font-medium text-[#0f172a] tracking-wide group-hover:text-[#0f172a]/80 transition-colors">
                  Qaisar Roonjha
                </span>
                <span className="block text-[9px] font-mono text-[#0f172a]/50 tracking-[0.25em] uppercase">
                  AI & Impact Innovator
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`px-4 py-2 text-xs uppercase tracking-widest font-mono transition-all ${
                    activeSection === item.id
                      ? 'text-[#0f172a] border-b-2 border-[#0f172a]'
                      : 'text-slate-500 hover:text-[#0f172a]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Action Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick('contact');
                }}
                className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-none bg-[#0f172a] hover:bg-slate-800 text-white text-xs font-mono uppercase tracking-widest font-semibold transition-all hover:scale-[1.02]"
              >
                <span>Partner with Qaisar</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-none bg-white border border-slate-200 text-slate-600 hover:text-slate-900 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#0f172a]/20 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Sidebar content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-[#f0f7fc] border-l border-slate-200 p-6 z-50 flex flex-col justify-between md:hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-none bg-[#0f172a] flex items-center justify-center text-white font-serif font-black text-base">
                      QR
                    </div>
                    <span className="font-serif text-lg font-medium text-[#0f172a]">Qaisar Roonjha</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-none bg-white border border-slate-200 text-slate-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col space-y-2">
                  {navItems.map((item, i) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full text-left px-4 py-3 text-xs font-mono uppercase tracking-widest transition-all ${
                        activeSection === item.id
                          ? 'text-[#0f172a] border-b border-[#0f172a]/30'
                          : 'text-slate-500 hover:text-[#0f172a]'
                      }`}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick('contact');
                  }}
                  className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-none bg-[#0f172a] hover:bg-slate-800 text-white font-mono text-xs uppercase tracking-widest font-bold shadow-md text-center"
                >
                  <span>Connect Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <div className="mt-4 flex justify-center space-x-4 text-[10px] font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5" /> Waseela Network
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
