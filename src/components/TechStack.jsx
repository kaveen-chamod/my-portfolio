import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiC,
  SiMongodb,
  SiMysql,
  SiSupabase,
  SiCisco,
  SiVercel,
  SiRender,
  SiAndroidstudio,
  SiFigma,
  SiGit,
  SiGithub,
  SiPostman,
} from 'react-icons/si';
import { FaJava, FaCss3Alt, FaAws, FaPalette, FaCode, FaLayerGroup } from 'react-icons/fa';
import { skillCategories } from '../data/portfolioData';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('All');

  const getBrandIcon = (iconName, color) => {
    const props = { className: 'w-7 h-7 transition-transform group-hover:scale-110', style: { color } };
    switch (iconName) {
      case 'SiReact': return <SiReact {...props} />;
      case 'SiJavascript': return <SiJavascript {...props} />;
      case 'SiHtml5': return <SiHtml5 {...props} />;
      case 'SiCss3': return <FaCss3Alt {...props} />;
      case 'SiTailwindcss': return <SiTailwindcss {...props} />;
      case 'SiNodedotjs': return <SiNodedotjs {...props} />;
      case 'SiExpress': return <SiExpress {...props} />;
      case 'FaJava': return <FaJava {...props} />;
      case 'SiPython': return <SiPython {...props} />;
      case 'SiC': return <SiC {...props} />;
      case 'SiMongodb': return <SiMongodb {...props} />;
      case 'SiMysql': return <SiMysql {...props} />;
      case 'SiSupabase': return <SiSupabase {...props} />;
      case 'SiCisco': return <SiCisco {...props} />;
      case 'SiVercel': return <SiVercel {...props} />;
      case 'SiRender': return <SiRender {...props} />;
      case 'SiAmazon': return <FaAws {...props} />;
      case 'SiAndroidstudio': return <SiAndroidstudio {...props} />;
      case 'SiFigma': return <SiFigma {...props} />;
      case 'SiCanva': return <FaPalette {...props} />;
      case 'SiGit': return <SiGit {...props} />;
      case 'SiGithub': return <SiGithub {...props} />;
      case 'SiPostman': return <SiPostman {...props} />;
      case 'SiVisualstudiocode': return <FaCode {...props} />;
      default: return <FaLayerGroup {...props} />;
    }
  };

  const categories = ['All', ...skillCategories.map((c) => c.category)];

  return (
    <section id="skills" className="py-24 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 font-mono text-xs font-semibold uppercase tracking-wider">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Skills &amp; Technology Ecosystem
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="text-slate-600 text-base sm:text-lg">
            A comprehensive matrix of tools, languages, and frameworks used to engineer full-stack software and network solutions.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Category Groups */}
        <div className="space-y-12">
          {skillCategories
            .filter((catGroup) => activeCategory === 'All' || activeCategory === catGroup.category)
            .map((catGroup, gIdx) => (
              <motion.div
                key={catGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gIdx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                    <span>{catGroup.category}</span>
                  </h3>
                  <span className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-semibold">
                    {catGroup.skills.length} Tools
                  </span>
                </div>

                {/* Tech Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {catGroup.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="group bg-slate-50 hover:bg-white p-4 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col items-center justify-center text-center space-y-3 cursor-default"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                        style={{ backgroundColor: `${skill.color}15` }}
                      >
                        {getBrandIcon(skill.icon, skill.color)}
                      </div>
                      <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}
