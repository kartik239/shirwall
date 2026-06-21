import React, { useState } from 'react';
import { PageId } from '../types';
import { motion } from 'motion/react';
import { DynamicIcon } from '../components/DynamicIcon';
import { BUSINESS_WHATSAPP } from '../data';

interface EnquireProps {
  setCurrentPage: (page: PageId) => void;
  showToast: (msg: string) => void;
}

export const Enquire: React.FC<EnquireProps> = ({ setCurrentPage, showToast }) => {
  const [businessName, setBusinessName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [category, setCategory] = useState('Home Services');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'Health & Wellness',
    'Home Services',
    'Transport & Travel',
    'Real Estate & Properties',
    'Retail Stores / Shops',
    'Other / Freelance'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!businessName.trim() || !ownerName.trim() || !contactNo.trim()) {
      showToast('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);

    const waMessage = `Hello Shirwal Circle admin,

I would like to list my business on the Shirwal Circle portal!

🏪 Business Name: ${businessName.trim()}
👤 Owner Name: ${ownerName.trim()}
📞 Contact Number: ${contactNo.trim()}
📂 Category: ${category}
📝 Description: ${description.trim() || 'Not provided'}

Please guide me on how to display my business live. Thank you!`;

    const waUrl = `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(waMessage)}`;

    showToast('Redirecting to WhatsApp to send enquiry...');
    
    setTimeout(() => {
      window.open(waUrl, '_blank');
      setIsSubmitting(false);
      // Reset form fields
      setBusinessName('');
      setOwnerName('');
      setContactNo('');
      setDescription('');
    }, 1200);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 w-full text-left relative min-h-screen flex flex-col justify-center">
      <div className="mb-8">
        <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest block mb-2">Grow Your Digital Presence</span>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
          List Your Business on Shirwal Circle
        </h1>
        <p className="text-gray-400 text-sm mt-2 leading-relaxed max-w-2xl">
          Are you a local business owner, doctor, mechanic, or vendor in Shirwal? Fill out this simple circular enquiry to display your offerings directly to thousands of local citizens.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        {/* Modern high-fidelity form */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 sm:p-8 rounded-2xl md:col-span-3 border border-white/10 relative overflow-hidden text-white"
        >
          {/* Subtle inside glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

          <h3 className="font-display font-semibold text-lg mb-6 border-b border-white/5 pb-3">Enquiry Form</h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-300 font-mono uppercase tracking-wider" htmlFor="businessName">
                Business Name <span className="text-rose-400">*</span>
              </label>
              <input
                id="businessName"
                type="text"
                placeholder="e.g. Shirwal Fresh Organic Fruits"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="glass-input w-full px-4 py-3 text-sm focus:ring-1 focus:ring-cyan-400 font-sans text-white placeholder-gray-500"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-gray-300 font-mono uppercase tracking-wider" htmlFor="ownerName">
                  Owner Name <span className="text-rose-400">*</span>
                </label>
                <input
                  id="ownerName"
                  type="text"
                  placeholder="e.g. Santosh Gaikwad"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  className="glass-input w-full px-4 py-3 text-sm focus:ring-1 focus:ring-cyan-400 font-sans text-white placeholder-gray-500"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-gray-300 font-mono uppercase tracking-wider" htmlFor="contactNo">
                  WhatsApp Number <span className="text-rose-400">*</span>
                </label>
                <input
                  id="contactNo"
                  type="tel"
                  placeholder="e.g. +91 98765 43210"
                  value={contactNo}
                  onChange={(e) => setContactNo(e.target.value)}
                  className="glass-input w-full px-4 py-3 text-sm focus:ring-1 focus:ring-cyan-400 font-sans text-white placeholder-gray-500"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-300 font-mono uppercase tracking-wider" htmlFor="category">
                Service Category <span className="text-rose-400">*</span>
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="glass-input w-full px-4 py-3 text-sm focus:ring-1 focus:ring-cyan-400 font-sans text-white bg-slate-900"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat} className="bg-slate-950 text-white">
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-300 font-mono uppercase tracking-wider" htmlFor="description">
                Brief Description of Services (Optional)
              </label>
              <textarea
                id="description"
                placeholder="Describe your active service hours, home delivery range, special materials etc."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="glass-input w-full px-4 py-3 text-sm focus:ring-1 focus:ring-cyan-400 font-sans text-white placeholder-gray-500 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`glass-btn-primary w-full py-3.5 rounded-xl font-mono text-sm flex items-center justify-center gap-2 cursor-pointer mt-2 transition-all ${
                isSubmitting ? 'opacity-80 scale-98 pointer-events-none' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-t-transparent border-white" />
                  Generating secure message...
                </>
              ) : (
                <>
                  <DynamicIcon name="Phone" size={16} className="text-green-300" />
                  Submit Enquiry via WhatsApp
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Benefits panel & QA support */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="glass-card p-6 rounded-2xl border border-white/5 bg-slate-900/50">
            <h4 className="font-display font-semibold text-white text-base mb-4 flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-cyan-400/10 text-cyan-400">
                <DynamicIcon name="Sparkles" size={16} />
              </span>
              Listing Advantages
            </h4>
            <ul className="flex flex-col gap-3.5 text-xs text-gray-300">
              <li className="flex gap-2 items-start">
                <DynamicIcon name="RotateCw" size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Absolute Display Visibility:</strong> Be listed instantly in front of active local search inquiries directly.
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <DynamicIcon name="Phone" size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Direct Customer Bridge:</strong> Citizens tap a direct link to send WhatsApp questions straight to your phone.
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <DynamicIcon name="Heart" size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">100% Free Portal:</strong> ZERO listing fees, ZERO brokerage cuts. Kept simple and direct to assist local businesses.
                </span>
              </li>
            </ul>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-purple-500/15 bg-purple-950/5 text-xs text-gray-400">
            <h4 className="font-display font-medium text-purple-300 text-sm mb-2 flex items-center gap-1.5">
              <DynamicIcon name="ShieldAlert" size={14} />
              Security & Directory Notice
            </h4>
            <p className="leading-relaxed mb-3">
              Shirwal Circle does not store your contact credentials on insecure centralized public database tables. All submissions trigger dynamic device-side WhatsApp notifications directly to our secure administration.
            </p>
            <p className="leading-relaxed">
              For security updates, you may directly request adjustments or deletions from display pages by messaging our admin chat portal anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
