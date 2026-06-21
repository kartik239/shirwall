import React, { useState } from 'react';
import { PageId } from '../types';
import { DynamicIcon } from './DynamicIcon';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (page: PageId) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/5 backdrop-blur-md px-4 sm:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 shadow-glow-cyan text-white">
            <DynamicIcon name="RotateCw" size={20} className="group-hover:rotate-180 transition-transform duration-700" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-display font-bold text-lg leading-none tracking-tight bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              Shirwal Circle
            </span>
            <span className="text-[10px] text-gray-400 tracking-wider font-mono">ONE CIRCLE. EVERY BUSINESS.</span>
          </div>
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          <button
            onClick={() => handleNav('home')}
            className={`cursor-pointer transition-colors hover:text-white ${currentPage === 'home' ? 'text-cyan-400' : ''}`}
          >
            Home
          </button>
          <button
            onClick={() => handleNav('vendors')}
            className={`cursor-pointer transition-colors hover:text-white ${currentPage === 'vendors' ? 'text-cyan-400' : ''}`}
          >
            Vendors Directory
          </button>
          <button
            onClick={() => handleNav('enquire')}
            className={`cursor-pointer transition-colors hover:text-white ${currentPage === 'enquire' ? 'text-cyan-400' : ''}`}
          >
            List Your Business
          </button>
        </nav>

        {/* Desktop Call to Action */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => handleNav('enquire')}
            className="glass-btn px-4 py-2 rounded-xl text-xs flex items-center gap-2 cursor-pointer text-cyan-400 hover:text-cyan-300 border border-cyan-500/25 bg-cyan-500/5 shadow-glow-cyan font-mono"
          >
            <DynamicIcon name="Sparkles" size={14} className="text-cyan-300 animate-pulse" />
            Enquire Listing
          </button>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/5 cursor-pointer text-gray-300"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-white rounded-md transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`h-0.5 w-full bg-white rounded-md transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-white rounded-md transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 rounded-2xl bg-slate-950/90 border border-white/15 p-4 flex flex-col gap-3 animate-slide-up">
          <button
            onClick={() => handleNav('home')}
            className={`w-full text-left py-2 px-3 rounded-lg hover:bg-white/5 text-sm ${currentPage === 'home' ? 'bg-cyan-500/10 text-cyan-400 font-semibold' : 'text-gray-300'}`}
          >
            Home
          </button>
          <button
            onClick={() => handleNav('vendors')}
            className={`w-full text-left py-2 px-3 rounded-lg hover:bg-white/5 text-sm ${currentPage === 'vendors' ? 'bg-cyan-500/10 text-cyan-400 font-semibold' : 'text-gray-300'}`}
          >
            Vendors Directory
          </button>
          <button
            onClick={() => handleNav('enquire')}
            className={`w-full text-left py-2 px-3 rounded-lg hover:bg-white/5 text-sm ${currentPage === 'enquire' ? 'bg-cyan-500/10 text-cyan-400 font-semibold' : 'text-gray-300'}`}
          >
            List Your Business
          </button>

          <div className="border-t border-white/10 pt-3 mt-1">
            <button
              onClick={() => handleNav('enquire')}
              className="w-full glass-btn py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 text-cyan-400 font-mono"
            >
              <DynamicIcon name="Sparkles" size={14} className="text-cyan-300" />
              Add Business Listing
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
