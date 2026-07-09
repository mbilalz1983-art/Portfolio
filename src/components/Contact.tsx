import React, { useState } from 'react';
import { Mail, MapPin, Globe, CheckCircle2, ArrowRight, Github, Linkedin, Twitter, Youtube } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Community Collaboration',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const topics = [
    'Community Collaboration',
    'AI Localization Advisory',
    'Speaking Engagement',
    'Digital Product Launch',
    'Other Inquiries'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    // Simulate high-fidelity server submission
    setTimeout(() => {
      setStatus('success');
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', topic: 'Community Collaboration', message: '' });
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative border-b border-sky-200/40">
      {/* Subtle white glow decorative */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-200/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-slate-500 tracking-[0.25em] uppercase mb-3">Partner & Connect</h2>
          <p className="text-3xl sm:text-4xl font-serif italic text-[#0f172a] tracking-tight">
            Initiate a Collaboration
          </p>
          <p className="text-slate-600 text-sm mt-3">
            Have a project in mind, an event to book, or an open-source initiative to construct? Let’s forge an alliance.
          </p>
          <div className="h-[1px] w-20 bg-[#0f172a]/20 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Panel: Contact Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left">
            <div className="space-y-6">
              <h3 className="text-xl font-serif text-[#0f172a]">Let’s bridge technology gaps together</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether you represent a grassroots NGO, a tech research laboratory, an academic institution, or a digital creator community — I am always eager to brainstorm educational curricula, localized AI products, and developmental caravans.
              </p>

              {/* Direct channels */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 p-4 rounded-none bg-white border border-slate-200/80 shadow-sm">
                  <div className="p-2.5 rounded-none bg-slate-50 border border-slate-200 text-[#0f172a]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest">Direct Email</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm font-mono font-bold text-[#0f172a] hover:text-slate-700 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-none bg-white border border-slate-200/80 shadow-sm">
                  <div className="p-2.5 rounded-none bg-slate-50 border border-slate-200 text-[#0f172a]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest">Primary Location</span>
                    <span className="text-sm font-mono font-bold text-[#0f172a]">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-none bg-white border border-slate-200/80 shadow-sm">
                  <div className="p-2.5 rounded-none bg-slate-50 border border-slate-200 text-[#0f172a]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest">Organization Portal</span>
                    <a href="https://waseela.pk" target="_blank" rel="noreferrer" className="text-sm font-mono font-bold text-[#0f172a] hover:text-slate-700 transition-colors">
                      waseela.pk
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connectivity Panel */}
            <div className="pt-6 border-t border-slate-200">
              <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-4">Ecosystem Channels</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-none bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-500 hover:text-[#0f172a] transition-all hover:scale-[1.05]"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-none bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-500 hover:text-[#0f172a] transition-all hover:scale-[1.05]"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-none bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-500 hover:text-[#0f172a] transition-all hover:scale-[1.05]"
                  aria-label="Twitter Profile"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-none bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-500 hover:text-[#0f172a] transition-all hover:scale-[1.05]"
                  aria-label="YouTube Channel"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Panel: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-none bg-white border border-slate-200/80 shadow-md relative overflow-hidden">
              <h3 className="text-lg font-serif text-[#0f172a] text-left mb-6">Send a Digital Transmission</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                {/* Form row: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-[10px] font-mono text-slate-500 font-semibold uppercase tracking-widest">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Ali Ahmed"
                      disabled={status === 'submitting' || status === 'success'}
                      className="w-full px-4 py-3 rounded-none bg-slate-50 border border-slate-200 text-[#0f172a] text-sm focus:outline-none focus:border-slate-400 transition-all font-mono placeholder:text-slate-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-[10px] font-mono text-slate-500 font-semibold uppercase tracking-widest">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. ali@example.com"
                      disabled={status === 'submitting' || status === 'success'}
                      className="w-full px-4 py-3 rounded-none bg-slate-50 border border-slate-200 text-[#0f172a] text-sm focus:outline-none focus:border-slate-400 transition-all font-mono placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>

                {/* Form field: Topic Dropdown */}
                <div className="space-y-2">
                  <label htmlFor="topic" className="block text-[10px] font-mono text-slate-500 font-semibold uppercase tracking-widest">Subject of Collaboration</label>
                  <select
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleInputChange}
                    disabled={status === 'submitting' || status === 'success'}
                    className="w-full px-4 py-3 rounded-none bg-slate-50 border border-slate-200 text-[#0f172a] text-sm focus:outline-none focus:border-slate-400 transition-all font-mono"
                  >
                    {topics.map((t) => (
                      <option key={t} value={t} className="bg-white text-[#0f172a]">{t}</option>
                    ))}
                  </select>
                </div>

                {/* Form field: Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-[10px] font-mono text-slate-500 font-semibold uppercase tracking-widest">Proposal Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Briefly describe your objectives, timeframe, and how we can work together..."
                    disabled={status === 'submitting' || status === 'success'}
                    className="w-full px-4 py-3 rounded-none bg-slate-50 border border-slate-200 text-[#0f172a] text-sm focus:outline-none focus:border-slate-400 transition-all font-mono placeholder:text-slate-400 resize-none"
                    required
                  />
                </div>

                {/* Submission State Info Panel */}
                {status === 'error' && (
                  <p className="text-xs font-mono text-red-800 bg-red-50 border border-red-200 p-3 rounded-none">
                    Please fill out all required fields before deploying your message.
                  </p>
                )}

                {status === 'success' && (
                  <div className="flex items-center gap-3 p-4 rounded-none bg-emerald-50 border border-emerald-200 text-[#0f172a]">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-serif font-medium text-[#0f172a]">Transmission Transmitted Successfully</p>
                      <p className="text-xs text-slate-600 mt-0.5">Thank you, Qaisar Roonjha will review your details soon.</p>
                    </div>
                  </div>
                )}

                {/* Submit Trigger */}
                {status !== 'success' && (
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-none bg-[#0f172a] hover:bg-slate-800 text-white font-semibold text-xs font-mono uppercase tracking-widest transition-all shadow-md"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        <span>Transmitting Proposal...</span>
                      </>
                    ) : (
                      <>
                        <span>Launch Collaboration Inquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
