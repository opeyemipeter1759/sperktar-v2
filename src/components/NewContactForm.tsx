'use client';

import { useState } from 'react';
import { submitContactForm } from '@/app/actions';

const NewContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await submitContactForm(formData);

    if (response.success) {
      setSubmitted(true);
    } else {
      setError('Something went wrong. Please try again.');
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="flex justify-center items-center mb-6">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center border-2 border-green-500">
            <span className="material-symbols-outlined text-green-400 text-5xl">
              check
            </span>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Thank you!
        </h2>
        <p className="mt-3 text-lg text-secondary-text max-w-2xl mx-auto">
          We've received your request. A member of our team will reach out to
          you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
      <div>
        <label
          htmlFor="full-name"
          className="block text-sm font-medium text-gray-300"
        >
          Full name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="fullName"
            id="full-name"
            autoComplete="name"
            placeholder="Your Name"
            required
            className="py-3 px-4 block w-full shadow-sm bg-background-dark/50 border-glass-border rounded-md focus:ring-primary focus:border-primary transition"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300"
        >
          Email
        </label>
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
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300"
        >
          Tell us more
        </label>
        <div className="mt-1">
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about your project..."
            required
            className="py-3 px-4 block w-full shadow-sm bg-background-dark/50 border-glass-border rounded-md focus:ring-primary focus:border-primary transition"
          ></textarea>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="group relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-10 bg-primary hover:bg-primary-hover transition-all duration-150 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
        >
          <span className="relative z-10 text-white text-lg font-bold tracking-wide uppercase">
            Submit
          </span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-150 ease-out skew-y-12"></div>
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default NewContactForm;
