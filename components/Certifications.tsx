
import React from 'react';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900 dark:text-white">Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-amber-50 dark:bg-amber-900/20 rounded-full flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex-grow">{cert.name}</h3>
                <a 
                  href={cert.link === "USER WILL PROVIDE URL" ? "#" : cert.link}
                  className={`px-6 py-2 rounded-xl font-semibold border ${cert.link === "USER WILL PROVIDE URL" ? 'border-slate-200 dark:border-slate-800 text-slate-400 cursor-not-allowed' : 'border-primary-light text-primary-light hover:bg-primary-light hover:text-white transition-all'}`}
                >
                  {cert.link === "USER WILL PROVIDE URL" ? 'Link Pending' : 'View Certificate'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
