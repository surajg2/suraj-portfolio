import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactFooter: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 4000);
    }
  };

  return (
    <footer id="contact" className="relative w-full py-8 px-3 sm:px-6 md:px-8 mb-12">
      {/* Editorial Light Container Card Matching Hero Card Theme */}
      <div className="relative w-full max-w-7xl mx-auto bg-[#eae8e3] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden shadow-2xl border border-black/5 flex flex-col gap-12">
        
        {/* Massive Minimal Headline & Direct Email Action */}
        <div className="flex flex-col gap-6 border-b border-black/10 pb-10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#111111] animate-pulse" />
            <p className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#111111] uppercase font-sans">
              LET'S COLLABORATE • CONTACT
            </p>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0f0f0f] leading-none font-display">
            HAVE A PROJECT IN MIND? <br />
            <span className="font-serif italic font-normal text-[#111111]">LET'S WORK TOGETHER.</span>
          </h2>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-black text-white text-xs sm:text-sm font-extrabold tracking-widest uppercase hover:bg-neutral-800 hover:scale-105 transition-all shadow-lg"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>{profile.email}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={`tel:${profile.phone}`}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/90 border border-black/10 text-neutral-900 text-xs font-extrabold tracking-widest uppercase hover:bg-black hover:text-white transition-all shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>CALL {profile.phone}</span>
            </a>
          </div>
        </div>

        {/* Minimal Grid: Quick Inquiry Form + Direct Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Quick Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-black/5 shadow-sm">
            <h3 className="text-lg font-black uppercase tracking-tight text-[#0f0f0f] mb-6 font-sans">
              SEND A DIRECT MESSAGE
            </h3>

            {submitted ? (
              <div className="py-8 flex flex-col items-center justify-center text-center gap-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-700 animate-bounce" />
                <h4 className="text-lg font-black text-[#0f0f0f] uppercase">Message Sent Successfully!</h4>
                <p className="text-xs text-neutral-600 font-sans">
                  Thank you for reaching out, Suraj will reply to your email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[0.65rem] font-extrabold uppercase tracking-widest text-neutral-500 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full bg-[#f3f1ea] border border-black/10 rounded-xl px-4 py-3 text-xs text-[#0f0f0f] font-medium focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[0.65rem] font-extrabold uppercase tracking-widest text-neutral-500 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full bg-[#f3f1ea] border border-black/10 rounded-xl px-4 py-3 text-xs text-[#0f0f0f] font-medium focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[0.65rem] font-extrabold uppercase tracking-widest text-neutral-500 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project idea..."
                    className="w-full bg-[#f3f1ea] border border-black/10 rounded-xl px-4 py-3 text-xs text-[#0f0f0f] font-medium focus:outline-none focus:border-black transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-black text-white font-extrabold uppercase tracking-widest text-xs hover:bg-neutral-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
                >
                  <span>SEND INQUIRY</span>
                  <Send className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </form>
            )}
          </div>

          {/* Direct Details & Social Links (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 h-full">
            <div className="flex flex-col gap-6">
              <span className="text-[0.65rem] font-black uppercase tracking-widest text-neutral-500 font-sans">
                LOCATION &amp; CONNECTIVITY
              </span>

              <div className="flex items-center gap-3 text-sm font-bold text-neutral-900 font-sans">
                <div className="w-10 h-10 rounded-2xl bg-white/90 border border-black/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-black" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-extrabold">BASED IN</p>
                  <p className="text-sm font-extrabold text-[#0f0f0f]">{profile.location}</p>
                </div>
              </div>
            </div>

            {/* Social Pill Links */}
            <div>
              <span className="text-[0.65rem] font-black uppercase tracking-widest text-neutral-500 mb-3 block font-sans">
                SOCIAL PLATFORMS
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-black text-white text-xs font-extrabold uppercase tracking-wider flex items-center gap-2 hover:bg-neutral-800 transition-all shadow-sm"
                >
                  <Github className="w-4 h-4 text-amber-400" />
                  <span>GITHUB</span>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-black text-white text-xs font-extrabold uppercase tracking-wider flex items-center gap-2 hover:bg-neutral-800 transition-all shadow-sm"
                >
                  <Linkedin className="w-4 h-4 text-amber-400" />
                  <span>LINKEDIN</span>
                </a>
                <a
                  href={profile.twitter || "https://x.com/suraaajjjj"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-black text-white text-xs font-extrabold uppercase tracking-wider flex items-center gap-2 hover:bg-neutral-800 transition-all shadow-sm"
                >
                  <Twitter className="w-4 h-4 text-amber-400" />
                  <span>X (TWITTER)</span>
                </a>
              </div>
            </div>

            {/* Bottom Minimal Copyright */}
            <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[0.65rem] font-mono font-bold text-neutral-500 uppercase">
              <span>© 2026 SURAJ GUPTA</span>
              <span>DATA ANALYST &amp; DATA ENGINEER</span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};
