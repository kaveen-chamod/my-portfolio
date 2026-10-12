import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaArrowRight, FaCode, FaReact, FaTerminal, FaNetworkWired } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';


export default function Hero() {
  const [avatarFailed, setAvatarFailed] = useState(false);
  const floatingBadges = [
    { icon: <FaCode className="text-blue-400" />, label: 'Full-Stack', pos: 'top-4 left-2 sm:-left-6', delay: 0 },
    { icon: <FaReact className="text-cyan-400" />, label: 'React.js', pos: 'top-20 right-2 sm:-right-6', delay: 1.5 },
    { icon: <FaTerminal className="text-emerald-400" />, label: 'DevOps / Linux', pos: 'bottom-20 left-2 sm:-left-8', delay: 3 },
    { icon: <FaNetworkWired className="text-indigo-400" />, label: 'Cisco / Cloud', pos: 'bottom-4 right-2 sm:-right-4', delay: 4.5 },
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-transparent">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-mono font-medium text-blue-300 tracking-wide">
                ICT Undergraduate @ University of Colombo
              </span>
            </div>

            {/* Main Heading & Name */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-medium text-slate-400">
                Hello, I&apos;m
              </h2>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-sans">
                {personalInfo.name}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold gradient-text-blue font-sans">
                {personalInfo.roleString}
              </p>
            </div>

            {/* Tagline & Short Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              &quot;{personalInfo.tagline}&quot;
            </p>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              {personalInfo.shortBio}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all hover:scale-[1.02]"
              >
                <span>View My Work</span>
                <FaArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-sm transition-all hover:scale-[1.02]"
              >
                <FaEnvelope className="w-4 h-4 text-blue-400" />
                <span>Contact Me</span>
              </a>

              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-slate-900/50 hover:bg-slate-800/80 text-slate-300 border border-slate-800 font-medium text-sm transition-all hover:text-white"
              >
                <FaFileDownload className="w-4 h-4 text-emerald-400" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Media Pills */}
            <div className="pt-4 flex items-center space-x-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-2">
                Connect:
              </span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/90 hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 border border-slate-800 hover:border-blue-500/40 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-all"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-xl bg-slate-900/90 hover:bg-emerald-600/20 text-slate-400 hover:text-emerald-400 border border-slate-800 hover:border-emerald-500/40 transition-all"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column Visual / Avatar Card with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              
              {/* Outer Decorative Ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600/30 to-cyan-500/30 blur-2xl -z-10 animate-pulse" />
              
              {/* Avatar Box */}
              <div className="w-full h-full rounded-3xl bg-slate-900/90 border border-slate-800 p-4 shadow-2xl relative overflow-hidden group">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-950 relative border border-slate-800/80">
                  {avatarFailed ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-slate-900 to-slate-950 text-center space-y-4">
                      <div className="w-20 h-20 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 text-3xl font-mono font-bold shadow-lg shadow-blue-500/20">
                        &lt;KC /&gt;
                      </div>
                      <span className="text-sm font-semibold text-slate-300">
                        Full-Stack &amp; Network Engineer
                      </span>
                      <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                        Sri Lanka
                      </span>
                    </div>
                  ) : (
                    <img
                      src="about-profile.jpg"
                      alt="Kaveen Chamod"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      onError={() => setAvatarFailed(true)}
                    />
                  )}
                </div>
              </div>

              {/* Floating Tech Badges */}
              {floatingBadges.map((badge, idx) => (
                <motion.div
                  key={idx}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: badge.delay,
                  }}
                  className={`absolute ${badge.pos} z-20 flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-xl text-xs font-semibold text-slate-200`}
                >
                  <span className="text-base">{badge.icon}</span>
                  <span>{badge.label}</span>
                </motion.div>
              ))}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
