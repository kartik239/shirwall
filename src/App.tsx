import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { Home } from './pages/Home';
import { Vendors } from './pages/Vendors';
import { Enquire } from './pages/Enquire';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [selectedServiceFromHome, setSelectedServiceFromHome] = useState<string | null>(null);

  // Scroll Glow Reactive Indicator effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = Math.min(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight), 1);
      document.body.style.setProperty('--scrollGlow', `${scrollPercent * 100}%`);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (msg: string) => {
    setToastMsg(msg);
  };

  const handleSelectServiceFromHome = (serviceName: string) => {
    setSelectedServiceFromHome(serviceName);
    setCurrentPage('vendors');
  };

  // Dedicated Render Switch
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home
            setCurrentPage={setCurrentPage}
            onSelectService={handleSelectServiceFromHome}
          />
        );
      case 'vendors':
        return (
          <Vendors
            setCurrentPage={setCurrentPage}
            selectedServiceFromHome={selectedServiceFromHome}
            setSelectedServiceFromHome={setSelectedServiceFromHome}
            showToast={showToast}
          />
        );
      case 'enquire':
        return (
          <Enquire
            setCurrentPage={setCurrentPage}
            showToast={showToast}
          />
        );
      default:
        return (
          <Home
            setCurrentPage={setCurrentPage}
            onSelectService={handleSelectServiceFromHome}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-hidden">
      {/* Animated Background layers */}
      <div className="animated-bg">
        <div className="bg-glow-spot-1" />
        <div className="bg-glow-spot-2" />
      </div>

      {/* Reactive horizontal line */}
      <div className="scroll-glow-indicator" />

      {/* Main glass navigation */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* Scrollable Container Content */}
      <main className="flex-grow flex flex-col">
        {renderPage()}
      </main>

      {/* Universal Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Dynamic Toast Portal */}
      <Toast message={toastMsg} onClose={() => setToastMsg(null)} />
    </div>
  );
}
