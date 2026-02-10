
import React from 'react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-indigo-50 dark:bg-indigo-900/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900 dark:text-white">Education</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-10 rounded-3xl border border-white dark:border-white/5 flex flex-col md:flex-row gap-10 items-center">
              <div className="w-24 h-24 bg-indigo-100 dark:bg-indigo-800 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-inner">
                <svg className="w-12 h-12 text-primary-light dark:text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              
              <div>
                <span className="text-primary-light font-bold text-sm uppercase tracking-widest block mb-2">{EDUCATION.duration}</span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{EDUCATION.degree}</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">{EDUCATION.institution}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
