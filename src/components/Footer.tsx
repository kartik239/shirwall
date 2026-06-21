import React from 'react';
import { PageId } from '../types';
import { DynamicIcon } from './DynamicIcon';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const handleNav = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full glass-panel border-t border-white/5 mt-auto bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand details */}
        <div className="md:col-span-2 flex flex-col gap-4 text-left">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 shadow-glow-cyan text-white">
              <DynamicIcon name="RotateCw" size={20} />
            </div>
            <span className="font-display font-bold text-xl leading-none tracking-tight bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              Shirwal Circle
            </span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Bridging the physical gap between Shirwal residents and the finest local businesses. View verified local vendors and contact them instantly on WhatsApp.
          </p>
          <div className="flex items-center gap-4 text-gray-400 mt-2">
            <a href="#" className="hover:text-cyan-400 transition-colors" aria-label="WhatsApp">
              <DynamicIcon name="Phone" size={18} />
            </a>
            <span className="text-xs font-mono text-gray-500">MIDC District, Shirwal, India</span>
          </div>
        </div>

        {/* Directory links */}
        <div className="flex flex-col gap-3 text-left">
          <h3 className="text-white font-display font-semibold text-sm tracking-widest uppercase">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li>
              <button onClick={() => handleNav('home')} className="hover:text-cyan-400 transition-colors cursor-pointer text-left">
                Home Platform
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('vendors')} className="hover:text-cyan-400 transition-colors cursor-pointer text-left">
                Vendors Directory
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('enquire')} className="hover:text-cyan-400 transition-colors cursor-pointer text-left">
                List Your Business
              </button>
            </li>
          </ul>
        </div>

        {/* Local support Info */}
        <div className="flex flex-col gap-3 text-left">
          <h3 className="text-white font-display font-semibold text-sm tracking-widest uppercase">Citizen Services</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-400 font-mono">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              100% Free Directory
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Direct-to-WhatsApp
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Zero Middlemen
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
              Shirwal Support Team
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Footer bar */}
      <div className="border-t border-white/5 py-6 px-6 bg-slate-950/90">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center text-xs text-gray-500">
          <p>© 2026 Shirwal Circle. Developed for extreme simplicity & vendor empowerment.</p>
          <div className="flex gap-4">
            <span className="hover:text-cyan-400 cursor-default">Privacy</span>
            <span>•</span>
            <span className="hover:text-cyan-400 cursor-default">Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
