import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaCode, FaCheckCircle, FaMicrochip, FaGraduationCap, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { personalInfo, aboutData } from '../data/portfolioData';

export default function About() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code':
        return <FaCode className="w-6 h-6 text-blue-600" />;
      case 'CheckCircle':
        return <FaCheckCircle className="w-6 h-6 text-indigo-600" />;
      case 'Cpu':
        return <FaMicrochip className="w-6 h-6 text-cyan-600" />;
      case 'GraduationCap':
        return <FaGraduationCap className="w-6 h-6 text-blue-700" />;
      default:
        return <FaCode className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 font-mono text-xs font-semibold uppercase tracking-wider">
            Discover My Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="text-slate-600 text-base sm:text-lg">
            Full-Stack Engineering, Computer Networking &amp; User Interface Architecture
          </p>
        </div>

        {/* 2-Column Balanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Photo Card & Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Profile Photo Frame */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex-shrink-0 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md bg-slate-100">
                <img
                  src={aboutData.photo}
                  alt="Kaveen Chamod Profile"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Styled fallback if image path is unavailable
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 flex-col items-center justify-center text-white p-4 text-center">
                  <span className="font-bold text-2xl font-mono">KC</span>
                  <span className="text-xs font-medium mt-1">UoC Student</span>
                </div>
              </div>

              <div className="space-y-3 text-center sm:text-left">
                <h3 className="text-2xl font-bold text-slate-900">
                  {personalInfo.name}
                </h3>
                <p className="text-sm font-semibold text-blue-600">
                  BICT (Hons) Undergraduate
                </p>
                <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs text-slate-500 font-medium">
                  <FaMapMarkerAlt className="text-slate-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
                    Full-Stack
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
                    Network Infra
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
                    UI/UX
                  </span>
                </div>
              </div>
            </div>

            {/* Detailed Bio Text */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Background &amp; Academic Focus
              </h4>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {aboutData.detailedBio}
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-md shadow-blue-600/20 transition-all"
                >
                  <FaDownload className="w-4 h-4" />
                  <span>Download CV</span>
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-medium text-sm transition-all"
                >
                  <FaEnvelope className="w-4 h-4 text-blue-600" />
                  <span>Email Me</span>
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: 2x2 Bento Stat Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {aboutData.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    {getIcon(stat.icon)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl font-extrabold text-slate-900 font-sans tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-base font-bold text-slate-800">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {stat.subtext}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
