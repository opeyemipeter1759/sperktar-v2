'use client';

import { useModal } from '../context/ModalContext';
import NewContactForm from './NewContactForm';

const ContactModal = () => {
  const { isModalOpen, closeModal } = useModal();

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-90 z-[100] h-full backdrop-blur-sm transition-opacity duration-150 ${
        isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={closeModal}
    >
      <div
        className={`glassmorphic-card fixed top-0 right-0 h-full w-full max-w-md shadow-2xl z-[110] transform transition-transform duration-150 ease-in-out ${
          isModalOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute z-10 text-white transition-colors top-6 right-6 hover:text-primary"
        >
          <span className="text-3xl material-symbols-outlined">close</span>
        </button>
        <div className="h-full p-4 pt-10 overflow-y-auto sm:p-6 md:px-8 md:pt-10 no-scrollbar">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Start a Project
            </h2>
            <p className="max-w-2xl mx-auto mt-3 text-lg text-secondary-text">
              Let's build something great together. Tell us about your project
              to get started.
            </p>
          </div>
          <NewContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
