'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const challenges = [
  {
    title: 'A good foundation',
    description: "I have an idea of the product I'd like but I'm not sure where to start",
    icon: 'foundation'
  },
  {
    title: 'I need an expert',
    description: 'I have a good foundation of a product I want to build and need an expert',
    icon: 'engineering'
  },
  {
    title: 'Outdated products',
    description: "We have a platform/system that we'd like to modernise and improve",
    icon: 'upgrade'
  },
  {
    title: 'Support',
    description: "I have a product that I'd like to keep functional with support and maintenance",
    icon: 'support_agent'
  },
  {
    title: 'Implementing AI',
    description: "I'd like to innovate with AI but I'm not sure where to start from",
    icon: 'smart_toy'
  },
  {
    title: 'Something else',
    description: "I have a different challenge in mind.",
    icon: 'help_outline'
  },
];

const LeadooInPageBot = () => {
  const [step, setStep] = useState(0);
  const [selectedChallenge, setSelectedChallenge] = useState<string | null>(null);

  const handleChallengeSelect = (challengeTitle: string) => {
    setSelectedChallenge(challengeTitle);
    setStep(1);
  };

  const handleBack = () => {
    setStep(0);
    setSelectedChallenge(null);
  };
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2); // Move to the thank you step
  };

  return (
    <motion.div
      className="relative z-10 w-full max-w-4xl mx-auto my-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.35, delay: 0.05 }}
    >
      <motion.div
        className="relative bg-glass-bg border border-glass-border backdrop-blur-2xl rounded-2xl p-8 md:p-12 shadow-2xl shadow-black/50"
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: 0.1 }}
        whileHover={{ scale: 1.01 }}
      >
        <motion.div
          className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.15, type: 'spring', stiffness: 300 }}
        >
          <motion.div
            className="w-16 h-16 bg-primary rounded-full flex items-center justify-center border-4 border-background-dark shadow-lg"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.span
              className="material-symbols-outlined text-white text-4xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >smart_toy</motion.span>
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              className="text-center mt-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-white tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                What is your main challenge?
              </motion.h2>
              <motion.p
                className="mt-3 text-lg text-secondary-text max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                Businesses usually have more than one issue we can help with, but what would you say is your No.1 challenge today?
              </motion.p>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {challenges.map((challenge, index) => (
                  <motion.button
                    key={challenge.title}
                    onClick={() => handleChallengeSelect(challenge.title)}
                    className="text-left p-4 bg-background-dark/30 rounded-lg border border-glass-border hover:border-primary/50 hover:bg-background-dark/70 group"
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.2 + index * 0.05,
                      type: 'spring',
                      stiffness: 300,
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center gap-3">
                      <motion.span
                        className="material-symbols-outlined text-primary text-2xl"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.4 }}
                      >
                        {challenge.icon}
                      </motion.span>
                      <h3 className="font-bold text-white text-base">{challenge.title}</h3>
                    </div>
                    <p className="text-secondary-text text-sm mt-2">{challenge.description}</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              className="mt-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                onClick={handleBack}
                className="flex items-center gap-2 text-primary hover:text-primary-hover mb-6 font-bold transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                whileHover={{ x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="material-symbols-outlined"
                  whileHover={{ x: -5 }}
                  transition={{ duration: 0.2 }}
                >arrow_back</motion.span>
                <span>Back</span>
              </motion.button>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                <h3 className="text-2xl font-bold text-white">Great! You selected: <span className='text-primary'>{selectedChallenge}</span></h3>
                <p className="mt-2 text-lg text-secondary-text">Please provide your details below to start the conversation.</p>
              </motion.div>
              <motion.form
                onSubmit={handleFormSubmit}
                className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {[
                  { id: 'full-name', label: 'Full name', type: 'text', placeholder: 'Your Name', autoComplete: 'name' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com', autoComplete: 'email' },
                ].map((field, index) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.25 + index * 0.05 }}
                  >
                    <label htmlFor={field.id} className="block text-sm font-medium text-gray-300">{field.label}</label>
                    <div className="mt-1">
                      <motion.input
                        type={field.type}
                        name={field.id}
                        id={field.id}
                        autoComplete={field.autoComplete}
                        placeholder={field.placeholder}
                        required
                        className="py-3 px-4 block w-full shadow-sm bg-background-dark/50 border-glass-border rounded-md focus:ring-primary focus:border-primary transition"
                        whileFocus={{ scale: 1.02, borderColor: '#06B6D4' }}
                      />
                    </div>
                  </motion.div>
                ))}
                <motion.div
                  className="sm:col-span-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.35 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">Tell us more (optional)</label>
                  <div className="mt-1">
                    <motion.textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Anything else you'd like to add?"
                      className="py-3 px-4 block w-full shadow-sm bg-background-dark/50 border-glass-border rounded-md focus:ring-primary focus:border-primary transition"
                      whileFocus={{ scale: 1.01, borderColor: '#06B6D4' }}
                    ></motion.textarea>
                  </div>
                </motion.div>
                <motion.div
                  className="sm:col-span-2 flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <motion.button
                    type="submit"
                    className="group relative flex min-w-[220px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-10 bg-primary hover:bg-primary-hover shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 0 30px rgba(6,182,212,0.6)',
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 text-white text-lg font-bold tracking-wide uppercase">Start the Conversation</span>
                    <motion.div
                      className="absolute inset-0 bg-white/20 -z-10 skew-y-12"
                      initial={{ y: '100%' }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>
          )}
        
          {step === 2 && (
            <motion.div
              key="step2"
              className="text-center mt-8 py-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex justify-center items-center mb-6"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.4, delay: 0.1, type: 'spring', stiffness: 300 }}
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center border-2 border-green-500">
                  <motion.span
                    className="material-symbols-outlined text-green-400 text-5xl"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2, type: 'spring', stiffness: 400 }}
                  >check</motion.span>
                </div>
              </motion.div>
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-white tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                Thank you!
              </motion.h2>
              <motion.p
                className="mt-3 text-lg text-secondary-text max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.35 }}
              >
                We've received your request. A member of our team will reach out to you shortly to discuss your project.
              </motion.p>
              <motion.button
                onClick={() => { setStep(0); setSelectedChallenge(null); }}
                className="mt-8 text-primary hover:text-primary-hover font-bold transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Over
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </motion.div>
  );
};

export default LeadooInPageBot;
