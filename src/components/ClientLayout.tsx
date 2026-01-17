'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Footer from './Footer';
import ContactModal from './ContactModal';
import { motion, AnimatePresence } from 'framer-motion';
import { ModalProvider, useModal } from '@/context/ModalContext';

function ClientLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openModal, closeModal } = useModal();

  const toggleContactModal = () => {
    openModal();
  };
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/work', label: 'Our Work' },
    { href: '#', label: 'About' },
  ];

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.2,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.2 },
    },
  };

  const backgroundVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.2,
      },
    },
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 200,
        damping: 15,
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 3,
      transition: { duration: 0.3 },
    },
  };

  const navLinkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.5 + i * 0.1,
      },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
      },
    },
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <>
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none bg-background-dark bg-mesh"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className="fixed top-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-x-[-20%] translate-y-[-20%]"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      </motion.div>
      <motion.div
        className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-cyan-800/10 rounded-full blur-[120px] pointer-events-none translate-x-[20%] translate-y-[20%]"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 1,
          }}
        />
      </motion.div>

      <ContactModal />
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 border-t-0 border-b-0 rounded-none glass-panel bg-background-dark/80 backdrop-blur-md"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <header className="flex items-center justify-between h-20">
            <motion.div
              whileHover="hover"
              variants={logoVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                href="/"
                className="z-50 flex items-center justify-center gap-2 text-white"
                onClick={() => isMobileMenuOpen && toggleMobileMenu()}
              >
                <div className="mt-3 text-primary">
                  <span className="text-8xl material-symbols-outlined">
                    layers
                  </span>
                </div>
                <h2 className="text-xl font-bold tracking-tight text-white">
                  Sperktar
                </h2>
              </Link>
            </motion.div>
            <div className="items-center justify-end flex-1 hidden gap-10 md:flex">
              <nav className="flex gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    custom={i}
                    variants={navLinkVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                  >
                    <Link
                      href={link.href}
                      className="relative text-sm font-medium transition-colors group"
                    >
                      <span
                        className={`${
                          pathname === link.href
                            ? 'text-primary'
                            : 'text-secondary-text/80 group-hover:text-primary'
                        }`}
                      >
                        {link.label}
                      </span>
                      {pathname === link.href && (
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                          layoutId="activeTab"
                          transition={{
                            type: 'spring' as const,
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                      {pathname !== link.href && (
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary origin-left"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  custom={navLinks.length}
                  variants={navLinkVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <a
                    href="#"
                    onClick={toggleContactModal}
                    className="relative text-sm font-medium transition-colors group"
                  >
                    <span className="text-secondary-text/80 group-hover:text-primary">
                      Contact
                    </span>
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </motion.div>
              </nav>
              <motion.div
                custom={navLinks.length + 1}
                variants={navLinkVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={toggleContactModal}
                  className="flex items-center justify-center h-10 px-6 text-sm font-bold text-white transition-all duration-300 border cursor-pointer rounded-xl bg-white/10 border-white/10 hover:bg-primary hover:border-primary"
                >
                  Start a Project
                </button>
              </motion.div>
            </div>

            {/* Mobile Toggle */}
            <motion.div
              className="z-50 text-white md:hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <button onClick={toggleMobileMenu} className="p-2">
                <motion.span
                  className="text-3xl material-symbols-outlined"
                  animate={{
                    rotate: isMobileMenuOpen ? 90 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? 'close' : 'menu'}
                </motion.span>
              </button>
            </motion.div>
          </header>
        </div>
      </motion.div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col px-8 pt-10 top-20 bg-background-dark/95 backdrop-blur-lg"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav className="flex flex-col items-center gap-8 mb-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  variants={menuItemVariants}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    onClick={toggleMobileMenu}
                    className={`relative text-lg font-medium transition-colors group ${
                      pathname === link.href
                        ? 'text-primary'
                        : 'text-secondary-text/80 group-hover:text-primary'
                    }`}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <motion.div
                        className="absolute w-1 h-6 -translate-y-1/2 rounded-full -left-4 top-1/2 bg-primary"
                        layoutId="mobileActiveTab"
                        transition={{
                          type: 'spring' as const,
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={menuItemVariants}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#"
                  onClick={() => {
                    toggleMobileMenu();
                    toggleContactModal();
                  }}
                  className="text-lg font-medium transition-colors text-secondary-text/80 hover:text-primary"
                >
                  Contact
                </a>
              </motion.div>
            </nav>
            <motion.div
              variants={menuItemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                onClick={() => {
                  toggleMobileMenu();
                  toggleContactModal();
                }}
                className="flex items-center justify-center w-full h-12 px-8 text-lg font-medium cursor-pointer rounded-xl bg-primary text-background-dark"
              >
                Start a Project
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {!isMobileMenuOpen && (
          <motion.main
            key="main-content"
            className="relative z-10 min-h-screen pt-20"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {children}
            </motion.div>
          </motion.main>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!isMobileMenuOpen && (
          <motion.div
            key="footer"
            className="relative z-10"
            variants={footerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ModalProvider>
      <ClientLayoutContent>{children}</ClientLayoutContent>
    </ModalProvider>
  );
}
