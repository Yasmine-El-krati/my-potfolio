
import React from 'react';
import { PERSONAL_DETAILS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-slate-900 dark:text-white">
              About Me
            </h2>
            <div className="glass-card p-8 md:p-12 rounded-3xl shadow-xl relative">
              {/* Decorative quote icon */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary-light rounded-2xl flex items-center justify-center text-white shadow-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 8.44772 10.4647 8 11.017 8H12.017C12.5693 8 13.017 7.55228 13.017 7V5C13.017 4.44772 12.5693 4 12.017 4H7.01704C6.46475 4 6.01704 4.44772 6.01704 5V15C6.01704 18.3137 8.70333 21 12.017 21H14.017Z" />
                </svg>
              </div>
              
              <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium italic mb-8">
                "{PERSONAL_DETAILS.summary}"
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                <div>
                  <h4 className="text-primary-light font-bold mb-2 uppercase text-xs tracking-widest">Philosophy</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Applying software engineering principles to real-world challenges with focus on efficiency and scalability.
                  </p>
                </div>
                <div>
                  <h4 className="text-primary-light font-bold mb-2 uppercase text-xs tracking-widest">Aspiration</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Constantly learning new technologies and passionate about problem-solving in the AI domain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
