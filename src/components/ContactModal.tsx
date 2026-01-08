'use client';

import { useEffect } from 'react';
import ContactForm from './ContactForm';

interface ContactModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function ContactModal({
  isVisible,
  onClose,
}: ContactModalProps) {
  useEffect(() => {
    if (!isVisible) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isVisible, onClose]);

  return (
    <div
      className={`fixed  inset-0 z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Sliding panel */}
      <div
        className={`absolute right-0 top-20 bg-black h-full w-full max-w-lg transform transition-transform duration-500 ease-in-out ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full min-h-[100vh] pb-20 no-scrollbar flex-col glass-panel-form">
          {/* Header */}
          <div className="relative flex-shrink-0 p-8 pb-4">
            <button
              onClick={onClose}
              className="absolute transition-colors top-6 right-6 text-white/70 hover:text-white"
            >
              <span className="text-3xl material-symbols-outlined">close</span>
            </button>

            <h2 className="mt-4 mb-2 text-4xl font-bold text-white">
              Let’s Get in Touch
            </h2>
            <p className="text-white/70">
              Fill out the form below, and we’ll get back to you as soon as
              possible.
            </p>
          </div>

          {/* Scrollable body */}
          <div className="flex-1 px-8 pb-8 overflow-y-auto no-scrollbar">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
