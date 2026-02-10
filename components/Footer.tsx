
import React from 'react';
import { PERSONAL_DETAILS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">Yasmine El Krati</h3>
            <p className="text-sm max-w-xs uppercase tracking-widest text-slate-500">AI & Software Engineering Portfolio</p>
          </div>
          
          <div className="flex gap-6">
            <a href={PERSONAL_DETAILS.linkedIn} target="_blank" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href={`mailto:${PERSONAL_DETAILS.email}`} className="hover:text-white transition-colors" aria-label="Email">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
          
          <div className="text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Yasmine El Krati. All rights reserved.</p>
            <p className="mt-1">Designed with precision & passion.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
