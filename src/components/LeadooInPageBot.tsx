
'use client';

import React, { useState } from 'react';

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
    <div className="relative z-10 w-full max-w-4xl mx-auto my-24">
      <div className="relative bg-glass-bg border border-glass-border backdrop-blur-2xl rounded-2xl p-8 md:p-12 shadow-2xl shadow-black/50 transition-all duration-500">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center border-4 border-background-dark shadow-lg">
            <span className="material-symbols-outlined text-white text-4xl">smart_toy</span>
          </div>
        </div>

        {step === 0 && (
          <div className="text-center mt-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">What is your main challenge?</h2>
            <p className="mt-3 text-lg text-secondary-text max-w-2xl mx-auto">Businesses usually have more than one issue we can help with, but what would you say is your No.1 challenge today?</p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {challenges.map((challenge) => (
                <button
                  key={challenge.title}
                  onClick={() => handleChallengeSelect(challenge.title)}
                  className="text-left p-4 bg-background-dark/30 rounded-lg border border-glass-border hover:border-primary/50 hover:bg-background-dark/70 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-2xl">{challenge.icon}</span>
                    <h3 className="font-bold text-white text-base">{challenge.title}</h3>
                  </div>
                  <p className="text-secondary-text text-sm mt-2">{challenge.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
           <div className="mt-8">
            <button onClick={handleBack} className="flex items-center gap-2 text-primary hover:text-primary-hover mb-6 font-bold transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
              <span>Back</span>
            </button>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white">Great! You selected: <span className='text-primary'>{selectedChallenge}</span></h3>
              <p className="mt-2 text-lg text-secondary-text">Please provide your details below to start the conversation.</p>
            </div>
            <form onSubmit={handleFormSubmit} className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium text-gray-300">Full name</label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="name"
                    placeholder="Your Name"
                    required
                    className="py-3 px-4 block w-full shadow-sm bg-background-dark/50 border-glass-border rounded-md focus:ring-primary focus:border-primary transition"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="your@email.com"
                    required
                    className="py-3 px-4 block w-full shadow-sm bg-background-dark/50 border-glass-border rounded-md focus:ring-primary focus:border-primary transition"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Tell us more (optional)</label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Anything else you'd like to add?"
                    className="py-3 px-4 block w-full shadow-sm bg-background-dark/50 border-glass-border rounded-md focus:ring-primary focus:border-primary transition"
                  ></textarea>
                </div>
              </div>
              <div className="sm:col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="group relative flex min-w-[220px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-10 bg-primary hover:bg-primary-hover transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
                >
                  <span className="relative z-10 text-white text-lg font-bold tracking-wide uppercase">Start the Conversation</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out skew-y-12"></div>
                </button>
              </div>
            </form>
          </div>
        )}
        
        {step === 2 && (
          <div className="text-center mt-8 py-12">
            <div className="flex justify-center items-center mb-6">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center border-2 border-green-500">
                    <span className="material-symbols-outlined text-green-400 text-5xl">check</span>
                </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Thank you!</h2>
            <p className="mt-3 text-lg text-secondary-text max-w-2xl mx-auto">We've received your request. A member of our team will reach out to you shortly to discuss your project.</p>
             <button onClick={() => { setStep(0); setSelectedChallenge(null); }} className="mt-8 text-primary hover:text-primary-hover font-bold transition-colors">
              Start Over
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default LeadooInPageBot;
