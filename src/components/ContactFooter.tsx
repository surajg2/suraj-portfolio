import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Github, CheckCircle2 } from 'lucide-react';
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
    <footer id="contact" className="relative w-full py-28 px-6 md:px-16 bg-[#050505] text-white z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Top Callout */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 pb-12 border-b border-white/10">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.4em] text-[#FF3D00] mb-3">
              Got a project? Need a creative partner?
            </p>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
              GET IN TOUCH
            </h2>
          </div>
        </div>

        {/* Grid: Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Form */}
          <div className="glass-card rounded-3xl p-8 border border-white/10 relative">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              Send a Message
            </h3>

            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 animate-bounce" />
                <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-sm text-white/60">
                  Thank you for reaching out, Suraj will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF3D00] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF3D00] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project idea..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF3D00] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-[#FF3D00] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Direct Details & Socials */}
          <div className="flex flex-col justify-between h-full space-y-10">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/40 mb-6">
                CONTACT DETAILS
              </p>

              <div className="space-y-6">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-4 text-lg font-medium text-white/80 hover:text-white group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#FF3D00] transition-colors">
                    <Mail className="w-5 h-5 text-[#FF3D00]" />
                  </div>
                  <span>{profile.email}</span>
                </a>

                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-4 text-lg font-medium text-white/80 hover:text-white group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#FF3D00] transition-colors">
                    <Phone className="w-5 h-5 text-[#FF3D00]" />
                  </div>
                  <span>CALL {profile.phone}</span>
                </a>

                <div className="flex items-center gap-4 text-lg font-medium text-white/80">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#FF3D00]" />
                  </div>
                  <span>Based in {profile.location}</span>
                </div>
              </div>
            </div>

            {/* Socials Links */}
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/40 mb-4">
                SOCIAL CONNECT
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl glass-card text-white/70 hover:text-white hover:border-[#FF3D00] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl glass-card text-white/70 hover:text-white hover:border-[#FF3D00] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl glass-card text-white/70 hover:text-white hover:border-[#FF3D00] transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>© 2026 SURAJ GUPTA. ALL RIGHTS RESERVED.</div>
          <div>BUILT WITH PRECISION & PASSION</div>
        </div>
      </div>
    </footer>
  );
};
