/*
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900 dark:text-white">Professional Experience</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 pb-8 last:pb-0">
                <div className="absolute top-0 -left-[11px] w-5 h-5 rounded-full bg-primary-light dark:bg-primary-dark border-4 border-white dark:border-slate-950 shadow-sm"></div>
                
                <div className="glass-card p-8 rounded-2xl shadow-md border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                      <p className="text-primary-light font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.responsibilities.map((res, i) => (
                      <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-400">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-light flex-shrink-0"></span>
                        {res}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
*/