'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    Leadoo?: {
      Inpage: {
        reset: () => void;
      };
    };
  }
}

const LeadooInPageBot = () => {
  useEffect(() => {
    if (window.Leadoo) {
      window.Leadoo.Inpage.reset();
    }
  }, []);

  return (
    <>
      <Script
        id="leadoo-script"
        strategy="afterInteractive"
        src="https://visual.leadoo.com/script/83017"
      />
      <div className="leadoo-inpage-container" style={{ height: '550px' }}></div>
    </>
  );
};

export default LeadooInPageBot;
