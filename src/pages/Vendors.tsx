import React, { useEffect, useState, useRef } from 'react';
import { PageId, Vendor } from '../types';
import { VENDORS, BUSINESS_WHATSAPP } from '../data';
import { DynamicIcon } from '../components/DynamicIcon';
import { motion, AnimatePresence } from 'motion/react';

interface VendorsProps {
  setCurrentPage: (page: PageId) => void;
  selectedServiceFromHome: string | null;
  setSelectedServiceFromHome: (service: string | null) => void;
  showToast: (msg: string) => void;
}

export const Vendors: React.FC<VendorsProps> = ({
  setCurrentPage,
  selectedServiceFromHome,
  setSelectedServiceFromHome,
  showToast,
}) => {
  const [selectedVendorForModal, setSelectedVendorForModal] = useState<Vendor | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Highlight ref to scroll to deep-linked card
  const highlightedCardRef = useRef<HTMLDivElement | null>(null);

  // Group vendors by categorySlug for section views
  const categoriesList = [
    { name: 'All Services', slug: 'all' },
    { name: 'Health & Wellness', slug: 'health' },
    { name: 'Home Services', slug: 'home-services' },
    { name: 'Real Estate & Properties', slug: 'real-estate' },
    { name: 'Transport & Travel', slug: 'transport' },
  ];

  // Load category filter from localStorage or URL query
  useEffect(() => {
    // Check if Home selected a category filter
    const storedCategory = localStorage.getItem('selectedCategoryFilter');
    if (storedCategory) {
      setActiveCategoryFilter(storedCategory);
      localStorage.removeItem('selectedCategoryFilter');
    }

    // Deep-linking handle from popular service buttons
    const params = new URLSearchParams(window.location.search);
    const serviceName = params.get('service') || selectedServiceFromHome;

    if (serviceName) {
      // Find matching vendor
      const matchedVendor = VENDORS.find(
        (v) => v.name.toLowerCase().includes(serviceName.toLowerCase()) || 
               v.detailTitle.toLowerCase().includes(serviceName.toLowerCase())
      );
      if (matchedVendor) {
        setSelectedVendorForModal(matchedVendor);
        setActiveCategoryFilter('all'); // Show all so it is visible
        showToast(`${matchedVendor.name} details opened`);

        // Scroll to matching card after a tiny render delay
        setTimeout(() => {
          if (highlightedCardRef.current) {
            highlightedCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 300);
      }
      // Reset state cleanups
      setSelectedServiceFromHome(null);
    }
  }, [selectedServiceFromHome, setSelectedServiceFromHome, showToast]);

  const handleOpenDetails = (vendor: Vendor) => {
    setSelectedVendorForModal(vendor);
    showToast(`${vendor.name} details opened`);
  };

  const getWhatsAppLink = (v: Vendor) => {
    const message = `Hello, I saw your business "${v.name}" on Shirwal Circle. I require your services. Please share details on charges and availability.`;
    return `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(message)}`;
  };

  // Filter vendors based on category and search query
  const filteredVendors = VENDORS.filter((vendor) => {
    const matchesCategory = activeCategoryFilter === 'all' || vendor.categorySlug === activeCategoryFilter;
    const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          vendor.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          vendor.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 w-full text-left relative min-h-screen">
      
      {/* Title & Help Guide */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/5">
        <div>
          <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest block mb-1">Shirwal Directory Gateway</span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            All Local Services in Shirwal
          </h1>
          <p className="text-gray-400 text-sm mt-1 leading-relaxed">
            Discover verified offerings in Shirwal. Click <strong className="text-cyan-300">View Details</strong> or tap <strong className="text-green-400">Direct Chat</strong> to connect instantly on WhatsApp.
          </p>
        </div>

        {/* Dynamic Search Box */}
        <div className="relative w-full max-w-xs shrink-0">
          <input
            type="text"
            placeholder="Search services, tags, titles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="glass-input w-full px-4 py-2.5 text-xs focus:ring-1 focus:ring-cyan-400 font-mono text-white placeholder-gray-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-2.5 text-[10px] text-gray-500 hover:text-cyan-400 cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Quick Jump Category Panel */}
      <section className="mb-10">
        <span className="text-gray-400 text-xs font-mono uppercase tracking-wider block mb-3">Quick Filter Sections</span>
        <div className="flex flex-wrap items-center gap-2">
          {categoriesList.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategoryFilter(cat.slug)}
              className={`px-4 py-2 rounded-xl text-xs font-medium cursor-pointer transition-all border ${
                activeCategoryFilter === cat.slug
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-cyan-400 shadow-glow-cyan'
                  : 'bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Vendors Grid */}
      {filteredVendors.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVendors.map((vendor) => {
            const isDeepLinked = selectedVendorForModal && selectedVendorForModal.id === vendor.id;
            return (
              <motion.article
                key={vendor.id}
                ref={isDeepLinked ? highlightedCardRef : null}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`glass-card p-6 rounded-2xl flex flex-col justify-between text-left relative overflow-hidden h-full ${
                  isDeepLinked ? 'ring-2 ring-cyan-400 shadow-glow-cyan bg-cyan-950/20' : 'border-white/5'
                }`}
              >
                {/* Visual Category Badge */}
                <div className="absolute top-4 right-4 py-1 px-2.5 rounded-full bg-white/5 text-[9px] text-gray-400 font-mono select-none">
                  {vendor.category}
                </div>

                <div>
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center text-cyan-400 mb-5 shadow-inner">
                    <DynamicIcon name={vendor.iconName} size={22} />
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-2">{vendor.name}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-6">{vendor.description}</p>
                </div>

                <div className="mt-auto flex gap-2">
                  <button
                    onClick={() => handleOpenDetails(vendor)}
                    className="glass-btn w-full py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 cursor-pointer font-medium"
                  >
                    View Details
                  </button>
                  <a
                    href={getWhatsAppLink(vendor)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn-primary px-4 py-2.5 rounded-xl text-xs flex items-center justify-center cursor-pointer text-green-300 font-mono"
                    title="Direct WhatsApp Communication"
                  >
                    <DynamicIcon name="Phone" size={14} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      ) : (
        <div className="glass-card rounded-2xl p-12 text-center max-w-md mx-auto mt-10">
          <DynamicIcon name="Briefcase" className="text-gray-600 mx-auto mb-4" size={40} />
          <h3 className="text-lg text-white font-semibold font-display mb-2">No Matching Services Found</h3>
          <p className="text-xs text-gray-400">Try re-filtering category chips or checking spellings in search prompt.</p>
        </div>
      )}

      {/* Dynamic Popup Modal Container System */}
      <AnimatePresence>
        {selectedVendorForModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop filter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVendorForModal(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.section
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="relative w-full max-w-lg glass-card border-white/10 p-6 sm:p-8 rounded-2xl shadow-glass-shadow z-10 flex flex-col gap-6 text-left overflow-hidden bg-slate-900"
              role="dialog"
              aria-modal="true"
            >
              {/* Corner ambient glow */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center shrink-0 shadow-lg">
                  <DynamicIcon name={selectedVendorForModal.iconName} size={24} />
                </div>
                <div>
                  <span className="text-[10px] text-cyan-300 font-mono tracking-widest uppercase block mb-1">
                    {selectedVendorForModal.category}
                  </span>
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight leading-none font-sans">
                    {selectedVendorForModal.detailTitle}
                  </h2>
                </div>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed font-light">
                {selectedVendorForModal.detailCopy}
              </p>

              {/* Service Capabilities tags */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-2">
                <span className="text-xs text-gray-400 font-medium font-mono">Platform Integration Features:</span>
                <div className="flex flex-wrap gap-1.5 text-[9px] font-mono text-gray-300">
                  <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/10">✓ Verified Shirwal Local</span>
                  <span className="px-2 py-0.5 rounded bg-green-500/10 text-green-300 border border-green-500/10">✓ Direct WhatsApp Bridge</span>
                  <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/10">✓ Home Delivery Available</span>
                </div>
              </div>

              {/* Actions panel */}
              <div className="flex flex-col sm:flex-row gap-2 mt-2">
                <a
                  href={getWhatsAppLink(selectedVendorForModal)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn-primary w-full py-3 rounded-xl text-center text-xs flex items-center justify-center gap-2 font-mono font-bold"
                >
                  <DynamicIcon name="Phone" size={14} className="text-green-300" />
                  Contact on WhatsApp
                </a>
                <button
                  onClick={() => setSelectedVendorForModal(null)}
                  className="glass-btn w-full sm:w-28 py-3 rounded-xl text-xs text-gray-400 hover:text-white"
                >
                  Close
                </button>
              </div>
            </motion.section>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
