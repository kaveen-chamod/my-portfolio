import React from 'react';
import { motion } from 'framer-motion';
import { FaUserShield, FaCalendarAlt, FaAward, FaMusic, FaLeaf, FaHandsHelping } from 'react-icons/fa';
import { leadershipData } from '../data/portfolioData';

export default function Leadership() {
  const getRoleIcon = (index) => {
    switch (index) {
      case 0: return <FaUserShield className="w-5 h-5 text-blue-400" />;
      case 1: return <FaAward className="w-5 h-5 text-indigo-400" />;
      case 2: return <FaMusic className="w-5 h-5 text-cyan-400" />;
      case 3: return <FaLeaf className="w-5 h-5 text-emerald-400" />;
      default: return <FaHandsHelping className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="leadership" className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-semibold uppercase tracking-wider">
            Beyond Code
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Extracurricular &amp; Leadership
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="text-slate-400 text-base sm:text-lg">
            Active community contribution, financial governance, and university event management.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Central Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-slate-800 -translate-x-1/2" />

          <div className="space-y-10">
            {leadershipData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-blue-500 items-center justify-center shadow-lg z-10">
                    {getRoleIcon(idx)}
                  </div>

                  {/* Card Content Container */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                    <div className="glass-card-dark p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-blue-500/40 transition-all space-y-3 group">
                      
                      {/* Period Badge & Type */}
                      <div className={`flex items-center space-x-2 text-xs font-mono ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center space-x-1.5">
                          <FaCalendarAlt className="w-3 h-3" />
                          <span>{item.period}</span>
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-400">
                          {item.type}
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {item.role}
                        </h3>
                        <p className="text-sm font-medium text-slate-400 mt-0.5">
                          {item.organization}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {item.description}
                      </p>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
