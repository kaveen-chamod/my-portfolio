import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheck, FaCopy, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState('');
  const [formSent, setFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = async () => {
    setCopyError('');

    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error('Clipboard access is unavailable');
      }
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
      setCopyError('Could not copy email. Please copy it manually.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          // Replace this placeholder with the access key created in the Web3Forms dashboard.
          access_key: '1b07190f-96ae-4df2-8fac-f20299343f5b',
          subject: `Portfolio contact form message from ${formState.name}`,
          from_name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Message could not be sent. Please try again.');
      }

      setFormSent(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setFormSent(false), 4000);
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : 'Message could not be sent. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-slate-950 text-white relative pt-20 pb-12 border-t border-slate-900 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-80 bg-blue-600/10 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Contact Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Call to Action & Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-semibold uppercase tracking-wider">
              Let&apos;s Connect
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Have a project or opportunity in mind?
            </h2>

            <p className="text-slate-400 text-base leading-relaxed max-w-lg">
              I am open to full-stack web development roles, network engineering projects, cloud infrastructure collaborations, and UI/UX design opportunities.
            </p>

            {/* Email Copy Card */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-md">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 font-mono uppercase">Direct Mail</span>
                  <span className="text-sm font-semibold text-white">{personalInfo.email}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="min-h-11 w-full sm:w-auto px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs flex items-center justify-center space-x-2 transition-all shadow-md shadow-blue-600/20"
              >
                {copied ? <FaCheck className="w-3.5 h-3.5" /> : <FaCopy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy Email'}</span>
              </button>
            </div>
            <p aria-live="polite" className="text-xs text-red-400">
              {copyError}
            </p>

            {/* Location & Status */}
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <FaMapMarkerAlt className="text-emerald-400" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Right Side: Interactive Quick Contact Form */}
          <div className="lg:col-span-6 bg-slate-900/80 p-6 sm:p-8 rounded-3xl border border-slate-800 backdrop-blur-md">
            <h3 className="text-xl font-bold text-white mb-6">
              Send a Message
            </h3>

            {formSent ? (
              <div role="status" className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2">
                <FaCheck className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Thank You!</h4>
                <p className="text-xs text-slate-300">
                  Your message was sent successfully. Kaveen will get back to you shortly!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" aria-busy={isSubmitting}>
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-slate-400 mb-1">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-slate-400 mb-1">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-400 mb-1">Message</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Hello Kaveen, I would like to discuss..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                {formError && (
                  <p role="alert" className="text-sm text-red-400">
                    {formError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="min-h-11 w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:cursor-wait disabled:opacity-70 text-white font-bold text-sm flex items-center justify-center space-x-2 transition-all shadow-lg shadow-blue-600/30"
                >
                  <FaPaperPlane className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending…' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center space-x-1">
            <span>Designed &amp; Built with</span>
            <FaHeart className="text-red-500 w-3 h-3" />
            <span>by</span>
            <span className="font-bold text-slate-200">{personalInfo.name}</span>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#coursework" className="hover:text-white transition-colors">Coursework</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
