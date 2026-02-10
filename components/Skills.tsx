
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900 dark:text-white">
            Technical & Soft Skills
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 mb-6">
                <span className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
                Technical Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.technical.map((skill) => (
                  <div 
                    key={skill} 
                    className="px-6 py-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-primary-light transition-all hover:-translate-y-1 group"
                  >
                    <span className="font-semibold text-slate-700 dark:text-slate-300 group-hover:text-primary-light">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 mb-6">
                <span className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
                Professional Attributes
              </h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.soft.map((skill) => (
                  <div 
                    key={skill} 
                    className="px-6 py-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-emerald-500 transition-all hover:-translate-y-1 group"
                  >
                    <span className="font-semibold text-slate-700 dark:text-slate-300 group-hover:text-emerald-500">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
