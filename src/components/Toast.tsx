import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { DynamicIcon } from './DynamicIcon';

interface ToastProps {
  message: string | null;
  onClose: () => void;
  type?: 'success' | 'info' | 'error';
}

export const Toast: React.FC<ToastProps> = ({ message, onClose, type = 'success' }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 pointer-events-none"
        >
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 shadow-glass-shadow bg-slate-900/90 backdrop-blur-md pointer-events-auto max-w-sm">
            <div className={`p-1.5 rounded-lg ${
              type === 'success' ? 'text-cyan-400 bg-cyan-500/10' :
              type === 'error' ? 'text-rose-400 bg-rose-500/10' :
              'text-purple-400 bg-purple-500/10'
            }`}>
              <DynamicIcon name={type === 'success' ? 'CheckCircle' : type === 'error' ? 'Bug' : 'Briefcase'} size={18} />
            </div>
            <p className="text-sm font-medium text-white select-none">{message}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
