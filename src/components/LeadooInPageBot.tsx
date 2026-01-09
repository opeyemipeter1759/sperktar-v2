'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const challenges = [
  {
    title: 'A good foundation',
    description:
      "I have an idea of the product I'd like but I'm not sure where to start",
    icon: 'foundation',
  },
  {
    title: 'I need an expert',
    description:
      'I have a good foundation of a product I want to build and need an expert',
    icon: 'engineering',
  },
  {
    title: 'Outdated products',
    description:
      "We have a platform/system that we'd like to modernise and improve",
    icon: 'upgrade',
  },
  {
    title: 'Support',
    description:
      "I have a product that I'd like to keep functional with support and maintenance",
    icon: 'support_agent',
  },
  {
    title: 'Implementing AI',
    description:
      "I'd like to innovate with AI but I'm not sure where to start from",
    icon: 'smart_toy',
  },
  {
    title: 'Something else',
    description: 'I have a different challenge in mind.',
    icon: 'help_outline',
  },
];

const LeadooInPageBot = () => {
  const [step, setStep] = useState(0);
  const [selectedChallenge, setSelectedChallenge] = useState<string | null>(
    null
  );

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
        className="relative p-8 border shadow-2xl bg-glass-bg border-glass-border backdrop-blur-2xl rounded-2xl md:p-12 shadow-black/50"
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: 0.1 }}
        whileHover={{ scale: 1.01 }}
      >
        <motion.div
          className="absolute flex flex-col items-center -translate-x-1/2 -top-8 left-[42%] md:left-[48%]"
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.35,
            delay: 0.15,
            type: 'spring',
            stiffness: 300,
          }}
        >
          <motion.div
            className="flex items-center justify-center w-16 h-16 border-4 rounded-full shadow-lg bg-primary border-background-dark"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.span
              className="text-4xl text-white material-symbols-outlined"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              smart_toy
            </motion.span>
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              className="mt-8 text-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2
                className="text-3xl font-bold tracking-tight text-white md:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                What is your main challenge?
              </motion.h2>
              <motion.p
                className="max-w-2xl mx-auto mt-3 text-lg text-secondary-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                Businesses usually have more than one issue we can help with,
                but what would you say is your No.1 challenge today?
              </motion.p>
              <div className="grid grid-cols-1 gap-4 mt-10 sm:grid-cols-2 lg:grid-cols-3">
                {challenges.map((challenge, index) => (
                  <motion.button
                    key={challenge.title}
                    onClick={() => handleChallengeSelect(challenge.title)}
                    className="p-4 text-left border rounded-lg bg-background-dark/30 border-glass-border hover:border-primary/50 hover:bg-background-dark/70 group"
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
                        className="text-2xl material-symbols-outlined text-primary"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.4 }}
                      >
                        {challenge.icon}
                      </motion.span>
                      <h3 className="text-base font-bold text-white">
                        {challenge.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm text-secondary-text">
                      {challenge.description}
                    </p>
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
                className="flex items-center gap-2 mb-6 font-bold transition-colors text-primary hover:text-primary-hover"
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
                >
                  arrow_back
                </motion.span>
                <span>Back</span>
              </motion.button>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                <h3 className="text-2xl font-bold text-white">
                  Great! You selected:{' '}
                  <span className="text-primary">{selectedChallenge}</span>
                </h3>
                <p className="mt-2 text-lg text-secondary-text">
                  Please provide your details below to start the conversation.
                </p>
              </motion.div>
              <motion.form
                onSubmit={handleFormSubmit}
                className="grid grid-cols-1 mt-8 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {[
                  {
                    id: 'full-name',
                    label: 'Full name',
                    type: 'text',
                    placeholder: 'Your Name',
                    autoComplete: 'name',
                  },
                  {
                    id: 'email',
                    label: 'Email',
                    type: 'email',
                    placeholder: 'your@email.com',
                    autoComplete: 'email',
                  },
                ].map((field, index) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.25 + index * 0.05 }}
                  >
                    <label
                      htmlFor={field.id}
                      className="block text-sm font-medium text-gray-300"
                    >
                      {field.label}
                    </label>
                    <div className="mt-1">
                      <motion.input
                        type={field.type}
                        name={field.id}
                        id={field.id}
                        autoComplete={field.autoComplete}
                        placeholder={field.placeholder}
                        required
                        className="block w-full px-4 py-3 transition rounded-md shadow-sm bg-background-dark/50 border-glass-border focus:ring-primary focus:border-primary"
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
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Tell us more (optional)
                  </label>
                  <div className="mt-1">
                    <motion.textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Anything else you'd like to add?"
                      className="block w-full px-4 py-3 transition rounded-md shadow-sm bg-background-dark/50 border-glass-border focus:ring-primary focus:border-primary"
                      whileFocus={{ scale: 1.01, borderColor: '#06B6D4' }}
                    ></motion.textarea>
                  </div>
                </motion.div>
                <motion.div
                  className="flex justify-center sm:col-span-2"
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
                    <span className="relative z-10 text-lg font-bold tracking-wide text-white uppercase">
                      Start the Conversation
                    </span>
                    <motion.div
                      className="absolute inset-0 skew-y-12 bg-white/20 -z-10"
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
              className="py-12 mt-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex items-center justify-center mb-6"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.1,
                  type: 'spring',
                  stiffness: 300,
                }}
              >
                <div className="flex items-center justify-center w-20 h-20 border-2 border-green-500 rounded-full bg-green-500/20">
                  <motion.span
                    className="text-5xl text-green-400 material-symbols-outlined"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.2,
                      type: 'spring',
                      stiffness: 400,
                    }}
                  >
                    check
                  </motion.span>
                </div>
              </motion.div>
              <motion.h2
                className="text-3xl font-bold tracking-tight text-white md:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                Thank you!
              </motion.h2>
              <motion.p
                className="max-w-2xl mx-auto mt-3 text-lg text-secondary-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.35 }}
              >
                We've received your request. A member of our team will reach out
                to you shortly to discuss your project.
              </motion.p>
              <motion.button
                onClick={() => {
                  setStep(0);
                  setSelectedChallenge(null);
                }}
                className="mt-8 font-bold transition-colors text-primary hover:text-primary-hover"
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
