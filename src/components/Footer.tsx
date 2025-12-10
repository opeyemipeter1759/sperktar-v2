
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <Link href="/" className="flex items-center gap-3">
            <div className="size-7 text-primary">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_319)">
                  <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_319">
                    <rect fill="white" height="48" width="48"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h1 className="text-white text-xl font-bold">Software Building Lab</h1>
          </Link>
          <p className="text-sm text-white/60 max-w-xs text-center md:text-left">
            You focus on the business. We build the tech.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-6">
            <Link href="/services" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Services</Link>
            <Link href="#" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Work</Link>
            <Link href="#" className="text-sm font-medium text-white/80 hover:text-white transition-colors">About</Link>
            <Link href="#" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Contact</Link>
          </div>
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Software Building Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
