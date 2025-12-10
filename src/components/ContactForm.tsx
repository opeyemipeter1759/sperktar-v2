
'use client';

import { useEffect } from 'react';

export default function ContactForm({ isVisible, onClose }: { isVisible: boolean, onClose: () => void }) {

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isVisible, onClose]);

  return (
    <div className={`fixed inset-0 z-50 transform transition-transform duration-500 ease-in-out ${isVisible ? 'translate-x-0' : 'translate-x-full'} flex justify-end`}>
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
        <div className="relative w-full max-w-lg h-full glass-panel-form p-8 flex flex-col justify-center">
          <button onClick={onClose} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">close</span>
          </button>
          
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-white mb-2">Let's Get in Touch</h2>
            <p className="text-white/70">Fill out the form below, and we'll get back to you as soon as possible.</p>
          </div>

          <form className="space-y-6">
              <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">Full Name</label>
                  <input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/50 focus:ring-primary focus:border-primary transition-all" />
              </div>
              <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">Email Address</label>
                  <input type="email" name="email" id="email" placeholder="your.email@example.com" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/50 focus:ring-primary focus:border-primary transition-all" />
              </div>
              <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">Message</label>
                  <textarea name="message" id="message" rows={6} placeholder="Tell us about your project..." className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/50 focus:ring-primary focus:border-primary transition-all"></textarea>
              </div>
              <button type="submit" className="w-full py-4 px-6 bg-primary text-background-dark font-bold text-lg rounded-lg hover:bg-primary/90 transition-all transform hover:scale-105">
                  Send Message
              </button>
          </form>
        </div>
    </div>
  );
}
