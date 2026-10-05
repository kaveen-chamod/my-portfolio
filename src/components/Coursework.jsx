import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCheckCircle, FaSpinner, FaBookmark, FaBookOpen } from 'react-icons/fa';
import { courseworkData } from '../data/portfolioData';

export default function Coursework() {
  const [filter, setFilter] = useState('All');

  const filteredCourses = courseworkData.filter((course) => {
    if (filter === 'All') return true;
    return course.status === filter;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
            <FaCheckCircle className="w-3 h-3 text-emerald-500" />
            <span>Completed</span>
          </span>
        );
      case 'In Progress':
        return (
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 border border-amber-500/20">
            <FaSpinner className="w-3 h-3 text-amber-500 animate-spin" />
            <span>In Progress</span>
          </span>
        );
      case 'Planned':
        return (
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-600 border border-sky-500/20">
            <FaBookmark className="w-3 h-3 text-sky-500" />
            <span>Planned</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="coursework" className="py-24 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 font-mono text-xs font-semibold uppercase tracking-wider">
            Academic Track
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Relevant Coursework &amp; Specializations
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="text-slate-600 text-base sm:text-lg">
            Curriculum pursued under the Bachelor of Information &amp; Communication Technology Honours degree at University of Colombo.
          </p>
        </div>

        {/* Status Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 space-x-1">
            {['All', 'Completed', 'In Progress', 'Planned'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  filter === tab
                    ? 'bg-white text-blue-600 shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    {course.code}
                  </span>
                  {getStatusBadge(course.status)}
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900 line-clamp-1">
                    {course.title}
                  </h3>
                  <div className="flex items-center space-x-1.5 text-xs text-slate-500 font-medium">
                    <FaBookOpen className="w-3.5 h-3.5 text-slate-400" />
                    <span>{course.category}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono">Faculty of Tech, UoC</span>
                <FaGraduationCap className="text-slate-400 w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
