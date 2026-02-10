
import React from 'react';
import { PERSONAL_DETAILS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 relative z-10">
          <div className="reveal active">
            <span className="inline-block py-1 px-4 mb-6 bg-indigo-100 dark:bg-indigo-900/30 text-primary-light dark:text-primary-dark text-sm font-semibold rounded-full uppercase tracking-wider">
              {PERSONAL_DETAILS.role}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-violet-500">
                {PERSONAL_DETAILS.name}
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed">
              
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-primary-light text-white rounded-xl font-semibold hover:bg-primary-dark transition-all shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1"
              >
                View My Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl font-semibold hover:border-primary-light dark:hover:border-primary-dark transition-all hover:-translate-y-1"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="reveal active flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-light to-violet-400 rounded-3xl rotate-6 animate-pulse opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-primary-light to-indigo-400 rounded-3xl -rotate-6 opacity-20"></div>
              
              <div className="relative w-full h-full rounded-3xl overflow-hidden glass-card shadow-2xl flex items-center justify-center border-2 border-white/20">
                <img 
                  src="WhatsApp Image 2026-02-10 at 6.14.23 PM.jpeg"
                  alt={PERSONAL_DETAILS.name} 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Float badges */}
              <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 animate-float">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 dark:border-slate-700">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center text-blue-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Coding</p>
                    <p className="text-sm font-bold dark:text-white">Professional</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 animate-float" style={{ animationDelay: '2s' }}>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 dark:border-slate-700">
                  <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/40 rounded-lg flex items-center justify-center text-amber-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9l-.707.707M12 21V5a2 2 0 012 2v12a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">AI Studies</p>
                    <p className="text-sm font-bold dark:text-white">Ouarzazate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
