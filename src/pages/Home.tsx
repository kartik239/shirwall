import React from 'react';
import { PageId } from '../types';
import { motion } from 'motion/react';
import { DynamicIcon } from '../components/DynamicIcon';
import { BUSINESS_WHATSAPP } from '../data';

interface HomeProps {
  setCurrentPage: (page: PageId) => void;
  onSelectService: (serviceName: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setCurrentPage, onSelectService }) => {
  const categories = [
    {
      title: 'Health & Wellness',
      slug: 'health' as const,
      description: 'Consultations, beauty care, grooming & wellness clinics.',
      icon: 'Stethoscope',
      color: 'from-cyan-500/10 to-teal-500/10 hover:border-cyan-500/30 text-cyan-400'
    },
    {
      title: 'Home Services',
      slug: 'home-services' as const,
      description: 'Electricians, plumber fitting, laundry, tiffins, cleaning.',
      icon: 'Wrench',
      color: 'from-purple-500/10 to-indigo-500/10 hover:border-purple-500/30 text-purple-400'
    },
    {
      title: 'Transport & Travel',
      slug: 'transport' as const,
      description: 'Auto rickshaws, tours & travels cabs, car washing.',
      icon: 'Truck',
      color: 'from-emerald-500/10 to-green-500/10 hover:border-emerald-500/30 text-emerald-400'
    },
    {
      title: 'Real Estate & Land',
      slug: 'real-estate' as const,
      description: 'Agriculture plots, residential flats and rentals.',
      icon: 'Home',
      color: 'from-amber-500/10 to-rose-500/10 hover:border-amber-500/30 text-amber-400'
    }
  ];

  const popularServices = [
    {
      name: 'Tiffin Services',
      description: 'Pure home-made veg meals daily with traditional Maharashtrian taste.',
      detail: 'Hygienic 3-tier hot luggage boxes delivered direct.',
      icon: 'Utensils',
      badgeColor: 'border-cyan-500/20 text-cyan-400 bg-cyan-500/5',
      whatsappMessage: 'Hello, I saw your Tiffin Services info on Shirwal Circle. Can you provide daily lunch/dinner?'
    },
    {
      name: 'Laundry',
      description: 'Steam dry wash, delicate woolens care and crisp high-temp steam ironing.',
      detail: 'Express 24-hr return delivery available with pickup.',
      icon: 'Shirt',
      badgeColor: 'border-purple-500/20 text-purple-400 bg-purple-500/5',
      whatsappMessage: 'Hello, I need laundry pickup details from Shirwal Circle. Please share schedules & prices.'
    },
    {
      name: 'Rickshaw (Local Travel)',
      description: 'Local point-to-point auto commutes and luggage loadings.',
      detail: 'Punctual, transparent flat prices in Shirwal.',
      icon: 'RotateCw',
      badgeColor: 'border-teal-500/20 text-teal-400 bg-teal-500/5',
      whatsappMessage: 'Hello, I require a local auto-rickshaw commute in Shirwal. Please share availability.'
    }
  ];

  const handleCategoryClick = (categorySlug: string) => {
    // Store in localStorage so Vendors page can read and auto-scroll/filter!
    localStorage.setItem('selectedCategoryFilter', categorySlug);
    setCurrentPage('vendors');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getEncodedWAUrl = (msg: string) => {
    return `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(msg)}`;
  };

  const steps = [
    {
      num: '01',
      title: 'Explore Businesses',
      desc: 'Browse categorized, highly detailed local services and expert technicians across Shirwal.'
    },
    {
      num: '02',
      title: 'Check Credentials',
      desc: 'View verified badges, full-service descriptions, operating hours, and localized highlights.'
    },
    {
      num: '03',
      title: 'Contact Instantly',
      desc: 'Reach out directly on WhatsApp with a single tap. High clarity communication with zero brokerage fee.'
    },
    {
      num: '04',
      title: 'Submit Listings',
      desc: 'Own a business? File a simple listing inquiry form and display your brand on Shirwal Circle for free.'
    }
  ];

  return (
    <div className="flex flex-col w-full pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-24 pb-16 px-4 sm:px-8 text-center max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col items-center gap-6"
        >
          {/* Tagline Chip */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-mono text-[11px] uppercase tracking-widest">
            <span className="h-2 w-2 rounded-full bg-cyan-400 block" />
            Shirwal Marketplace Integration Hub
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-none max-w-4xl">
            One Circle. <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
              Every Local Business.
            </span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed font-light">
            Bringing professional family doctors, mechanics, tiffin boxes, and retail stores directly to Shirwal citizens. No middleman charges. Fast direct-to-WhatsApp communication.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
            <button
              onClick={() => {
                localStorage.removeItem('selectedCategoryFilter');
                setCurrentPage('vendors');
              }}
              className="glass-btn-primary w-full sm:w-auto px-8 py-4 rounded-xl flex items-center justify-center gap-3 cursor-pointer"
            >
              Explore Services Directory
              <DynamicIcon name="ArrowRight" size={16} />
            </button>
            <button
              onClick={() => {
                setCurrentPage('enquire');
              }}
              className="glass-btn w-full sm:w-auto px-8 py-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              <DynamicIcon name="Sparkles" size={14} className="text-cyan-400" />
              List Your Business
            </button>
          </div>
        </motion.div>
      </section>

      {/* Categories Grid */}
      <section className="px-6 py-12 max-w-7xl mx-auto w-full text-left">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mb-8">
          Browse by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleCategoryClick(cat.slug)}
              className={`glass-card p-6 rounded-2xl flex flex-col gap-4 cursor-pointer text-left bg-gradient-to-b ${cat.color} border border-white/5`}
            >
              <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/15">
                <DynamicIcon name={cat.icon} size={22} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-white mb-1">{cat.title}</h3>
                <p className="text-xs text-gray-400 leading-normal">{cat.description}</p>
              </div>
              <div className="mt-auto pt-2 flex items-center gap-1.5 text-xs text-white/55 font-mono group-hover:text-white">
                View section
                <DynamicIcon name="ChevronRight" size={12} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popular Services Section */}
      <section id="popular" className="px-6 py-16 max-w-7xl mx-auto w-full text-left scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest block mb-1">Top Rated Bookings</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              Shirwal Popular Services
            </h2>
          </div>
          <button
            onClick={() => setCurrentPage('enquire')}
            className="flex items-center gap-1.5 text-cyan-300 hover:text-cyan-400 text-sm font-medium font-mono cursor-pointer"
          >
            Get Your Brand Listed
            <DynamicIcon name="ArrowRight" size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularServices.map((service, index) => (
            <motion.article
              key={service.name}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between border border-white/5 text-left relative overflow-hidden"
            >
              {/* Background gradient hint */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/5 to-purple-600/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-cyan-500/10 text-cyan-400">
                    <DynamicIcon name={service.icon} size={20} />
                  </div>
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono border ${service.badgeColor}`}>
                    Highly Requested
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2">{service.name}</h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">{service.description}</p>
                
                {/* Specific details */}
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-[11px] text-gray-400 mb-6 flex items-center gap-2">
                  <DynamicIcon name="Clock" size={12} className="text-cyan-400 shrink-0" />
                  <span>{service.detail}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-auto">
                <button
                  onClick={() => onSelectService(service.name)}
                  className="glass-btn-primary w-full py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <DynamicIcon name="Briefcase" size={12} />
                  Open Vendor
                </button>
                <a
                  href={getEncodedWAUrl(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn w-full py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 text-green-400 hover:text-green-300 font-mono shrink-0"
                >
                  <DynamicIcon name="Phone" size={12} />
                  Quick WhatsApp Help
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-16 max-w-7xl mx-auto w-full text-left bg-gradient-to-b from-transparent via-purple-950/5 to-transparent rounded-3xl">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest block mb-1">Simple Architecture</span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
            How The Circle Works
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((st, idx) => (
            <div key={st.num} className="flex flex-col gap-4 text-left relative">
              {/* Stepping Indicator connector line */}
              {idx < 3 && (
                <div className="hidden lg:block absolute top-7 left-[60%] w-[100%] h-px bg-gradient-to-r from-cyan-400/30 to-transparent z-0" />
              )}
              <div className="relative z-10 flex items-center justify-between">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-600/10 border border-cyan-500/20 text-cyan-300 flex items-center justify-center font-display font-bold text-lg shadow-glow-cyan">
                  {st.num}
                </div>
              </div>
              <h3 className="font-display font-semibold text-white text-lg mt-2">{st.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
