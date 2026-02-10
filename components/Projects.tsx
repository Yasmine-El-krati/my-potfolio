
import React from 'react';
// Added PERSONAL_DETAILS to the import list from '../constants' to fix the error on line 17
import { PROJECTS, PERSONAL_DETAILS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-100 dark:bg-slate-900/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="reveal">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Featured Projects</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-lg">
                Selected works showcasing expertise in web development, AI automation, and data engineering.
              </p>
            </div>
            <a href={PERSONAL_DETAILS.linkedIn} target="_blank" className="mt-6 md:mt-0 text-primary-light font-semibold hover:underline flex items-center gap-2">
              View all on LinkedIn
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="group glass-card rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-slate-200 dark:border-slate-800">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={`https://picsum.photos/800/600?random=${idx + 20}`} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] uppercase tracking-widest font-bold bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/30">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-primary-light transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-slate-600 dark:text-slate-400 mb-8 whitespace-pre-line leading-relaxed">
                    {project.description}
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
                    <a 
                      href={project.link === "USER WILL PROVIDE URL" ? "#" : project.link}
                      className={`inline-flex items-center gap-2 font-bold ${project.link === "USER WILL PROVIDE URL" ? 'text-slate-400 cursor-not-allowed' : 'text-primary-light hover:text-primary-dark transition-colors'}`}
                    >
                      {project.link === "USER WILL PROVIDE URL" ? 'Link Pending' : 'View Project'}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
