
'use client';

import { useModal } from '../context/ModalContext';
import NewContactForm from './NewContactForm';

const ContactModal = () => {
  const { isModalOpen, closeModal } = useModal();

  return (
    <div 
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 backdrop-blur-sm transition-opacity duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={closeModal}
    >
      <div 
        className={`glassmorphic-card fixed top-0 right-0 h-full w-full max-w-md shadow-2xl z-60 transform transition-transform duration-300 ease-in-out ${isModalOpen ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={closeModal} 
          className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-10"
        >
          <span className="material-symbols-outlined text-3xl">close</span>
        </button>
        <div className="p-4 sm:p-6 md:p-8 h-full overflow-y-auto pt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Start a Project</h2>
            <p className="mt-3 text-lg text-secondary-text max-w-2xl mx-auto">Let's build something great together. Tell us about your project to get started.</p>
          </div>
          <NewContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
