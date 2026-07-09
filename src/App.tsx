// Portfolio Application for Qaisar Roonjha
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Initiatives from './components/Initiatives';
import Skills from './components/Skills';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'initiatives', 'skills', 'impact', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Trigger when section occupies the active middle portion
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f0f7fc] text-[#0f172a] font-sans selection:bg-sky-200 selection:text-sky-900 antialiased overflow-x-hidden scroll-smooth">
      {/* Premium background grid texture overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-50 pointer-events-none z-0" />

      {/* Navigation Header */}
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />

      {/* Sections Wrapper */}
      <main className="relative z-10">
        <Hero onNavigate={setActiveSection} />
        <About />
        <Projects />
        <Initiatives />
        <Skills />
        <Impact />
        <Contact />
      </main>

      {/* Footer Closing */}
      <Footer onNavigate={setActiveSection} />
    </div>
  );
}
