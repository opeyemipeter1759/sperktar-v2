
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Footer from './Footer';
import ContactModal from './ContactModal';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isContactModalVisible, setIsContactModalVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleContactModal = () => {
    setIsContactModalVisible(!isContactModalVisible);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/work', label: 'Work' },
    { href: '#', label: 'About' },
  ];

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="fixed inset-0 z-0 bg-background-dark bg-mesh pointer-events-none"></div>
      <div className="fixed top-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-x-[-20%] translate-y-[-20%]"></div>
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-cyan-800/10 rounded-full blur-[120px] pointer-events-none translate-x-[20%] translate-y-[20%]"></div>

      <ContactModal isVisible={isContactModalVisible} onClose={toggleContactModal} />

      <div className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-t-0 rounded-none bg-background-dark/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <header className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-4 text-white z-50" onClick={() => isMobileMenuOpen && toggleMobileMenu()}>
              <div className="size-8 text-primary">
                <span className="material-symbols-outlined text-3xl">layers</span>
              </div>
              <h2 className="text-white text-xl font-bold tracking-tight">speckter</h2>
            </Link>
            <div className="hidden md:flex flex-1 justify-end gap-10 items-center">
              <nav className="flex gap-8">
                {navLinks.map(link => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className={`text-sm font-medium transition-colors ${pathname === link.href ? 'text-primary' : 'text-secondary-text/80 hover:text-primary'}`}>
                    {link.label}
                  </Link>
                ))}
                <a href="#" onClick={toggleContactModal} className="text-secondary-text/80 hover:text-primary text-sm font-medium transition-colors">Contact</a>
              </nav>
              <button onClick={toggleContactModal} className="flex cursor-pointer items-center justify-center rounded-xl h-10 px-6 bg-white/10 border border-white/10 text-white text-sm font-bold hover:bg-primary hover:border-primary transition-all duration-300">
                Start a Project
              </button>
            </div>
            <div className="md:hidden text-white z-50">
              <button onClick={toggleMobileMenu} className="p-2">
                <span className="material-symbols-outlined text-3xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </header>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background-dark/95 backdrop-blur-lg flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center gap-8 mb-12">
            {navLinks.map(link => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={toggleMobileMenu}
                className={`text-3xl font-medium transition-colors ${pathname === link.href ? 'text-primary' : 'text-secondary-text/80 hover:text-primary'}`}>
                {link.label}
              </Link>
            ))}
            <a href="#" onClick={() => { toggleMobileMenu(); toggleContactModal(); }} className="text-secondary-text/80 hover:text-primary text-3xl font-medium transition-colors">Contact</a>
          </nav>
          <button onClick={() => { toggleMobileMenu(); toggleContactModal(); }} className="flex cursor-pointer items-center justify-center rounded-xl h-12 px-8 bg-primary text-background-dark text-lg font-bold">
            Start a Project
          </button>
        </div>
      )}

      <main className={`relative z-10 min-h-screen pt-20 ${isMobileMenuOpen ? 'hidden' : ''}`}>
        {children}
      </main>
      
      <div className={`relative z-10 ${isMobileMenuOpen ? 'hidden' : ''}`}>
        <Footer />
      </div>
    </>
  );
}
