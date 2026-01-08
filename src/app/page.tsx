'use client';

import Link from 'next/link';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RecentWork from '../components/RecentWork';
import LeadooInPageBot from '../components/LeadooInPageBot';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 z-0 w-full h-full"
        style={{ y: backgroundY, opacity: backgroundOpacity }}
      >
        <motion.div
          className="absolute w-1/2 rounded-full -top-1/4 -left-1/4 h-1/2 bg-primary/20 filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-1/2 rounded-full h-1/2 bg-blue-500/10 filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-96 h-96 bg-primary/10 filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.25,
          }}
        />
      </motion.div>
      <div className="relative z-10 flex flex-col min-h-screen px-4 sm:px-6 lg:px-8">
        <main className="flex flex-col items-center justify-center flex-grow gap-8 py-12 lg:py-20">
          <div className="grid w-full max-w-6xl grid-cols-1 gap-8 mx-auto lg:grid-cols-5">
            <motion.div
              className="flex items-center lg:col-span-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.35,
                ease: [0.23, 1, 0.32, 1],
                delay: 0.05,
              }}
            >
              <motion.div
                className="flex flex-col justify-center w-full h-full p-8 glass-panel rounded-xl md:p-12 lg:p-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col gap-6 text-left">
                  <motion.h1
                    className="text-4xl font-black leading-tight tracking-tighter text-white md:text-5xl lg:text-6xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.15 }}
                  >
                    You focus on the business. We build the tech.
                  </motion.h1>
                  <motion.p
                    className="max-w-md text-base font-normal md:text-lg text-text-secondary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.2 }}
                  >
                    Product teams for founders who want to move fast and launch
                    right.
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex items-center lg:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.35,
                ease: [0.23, 1, 0.32, 1],
                delay: 0.08,
              }}
            >
              <motion.div
                className="flex flex-col justify-center w-full h-full p-8 glass-panel rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.12 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col gap-4">
                  <motion.h2
                    className="text-2xl font-bold text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                  >
                    Have an idea?
                  </motion.h2>
                  <motion.p
                    className="text-text-secondary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    Let&apos;s partner to build your MVP and scale your vision.
                    Get a proposal in 48 hours.
                  </motion.p>
                  <motion.div
                    className="mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.25 }}
                  >
                    <Link href="/contact">
                      <motion.div
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-black rounded-full cursor-pointer bg-primary"
                        whileHover={{
                          scale: 1.05,
                          boxShadow: '0 0 20px rgba(13,223,242,0.4)',
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Start Your Project</span>
                        <motion.span
                          className="material-symbols-outlined"
                          animate={{ x: [0, 4, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: 2,
                          }}
                        >
                          arrow_forward
                        </motion.span>
                      </motion.div>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            className="flex flex-col w-full max-w-6xl gap-5 mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.35, delay: 0.08 }}
          >
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <span className="pl-2 text-xs font-bold tracking-widest uppercase text-white/40">
                Scaling Tech For
              </span>
              <motion.div
                className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.1 }}
              />
            </motion.div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {[
                { icon: 'deployed_code', name: 'NEXUS' },
                { icon: 'token', name: 'ORBIT' },
                { icon: 'all_inclusive', name: 'FLUX' },
                { icon: 'change_history', name: 'APEX' },
                { icon: 'blur_on', name: 'PULSE' },
                { icon: 'view_in_ar', name: 'CUBE' },
              ].map((logo, index) => (
                <motion.div
                  key={logo.name}
                  className="flex items-center justify-center h-24 cursor-pointer logo-glass rounded-xl group"
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                    type: 'spring',
                    stiffness: 300,
                    damping: 25,
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="flex flex-col items-center gap-2 opacity-50 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span
                      className="text-4xl text-white material-symbols-outlined"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.25 }}
                    >
                      {logo.icon}
                    </motion.span>
                    <span className="text-[10px] font-semibold text-white tracking-widest uppercase mt-1">
                      {logo.name}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="w-full max-w-6xl pt-8 mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.35 }}
          >
            <motion.div
              className="relative p-8 overflow-hidden glass-panel rounded-2xl md:p-12 lg:p-20 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
              whileHover={{ scale: 1.01 }}
            >
              <motion.div
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-blue-500/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-t from-primary/5 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />

              <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
                <motion.div
                  className="flex flex-col justify-between h-full lg:col-span-5"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 }}
                >
                  <div className="space-y-6">
                    <motion.div
                      className="inline-flex items-center gap-2 px-3 py-1 border rounded-full bg-white/5 border-white/10 w-fit backdrop-blur-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-primary"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-xs font-semibold tracking-widest uppercase text-white/80">
                        Core Capabilities
                      </span>
                    </motion.div>
                    <motion.h2
                      className="text-3xl font-black leading-tight tracking-tight text-white md:text-4xl lg:text-5xl font-display"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.2 }}
                    >
                      Future-Proofing Your Vision:{' '}
                      <br className="hidden lg:block" />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
                        Engineered for Tomorrow.
                      </span>
                    </motion.h2>
                  </div>
                  <motion.div className="hidden mt-12 lg:flex opacity-60">
                    <motion.svg
                      className="text-white/20"
                      fill="none"
                      height="120"
                      viewBox="0 0 100 100"
                      width="120"
                      xmlns="http://www.w3.org/2000/svg"
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="48"
                        stroke="currentColor"
                        strokeDasharray="4 4"
                        strokeWidth="1"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="30"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                      <motion.path
                        d="M50 20 L50 50 L75 65"
                        stroke="currentColor"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 1 }}
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        fill="white"
                        fillOpacity="0.8"
                        r="4"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.svg>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="flex flex-col gap-8 lg:col-span-7"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <motion.div
                    className="space-y-6 text-lg font-light leading-relaxed text-text-secondary"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.2 }}
                  >
                    <p>
                      At our core, we transcend traditional development to
                      architect bespoke digital products. Leveraging expertise
                      in{' '}
                      <motion.span
                        className="font-medium text-white"
                        whileHover={{ scale: 1.05, color: '#06B6D4' }}
                        transition={{ duration: 0.2 }}
                      >
                        Data & AI
                      </motion.span>
                      , advanced{' '}
                      <motion.span
                        className="font-medium text-white"
                        whileHover={{ scale: 1.05, color: '#06B6D4' }}
                        transition={{ duration: 0.2 }}
                      >
                        Mobile/Web Applications
                      </motion.span>
                      , robust{' '}
                      <motion.span
                        className="font-medium text-white"
                        whileHover={{ scale: 1.05, color: '#06B6D4' }}
                        transition={{ duration: 0.2 }}
                      >
                        Cloud infrastructures
                      </motion.span>
                      , and insightful{' '}
                      <motion.span
                        className="font-medium text-white"
                        whileHover={{ scale: 1.05, color: '#06B6D4' }}
                        transition={{ duration: 0.2 }}
                      >
                        Research & Design
                      </motion.span>
                      , we craft not just solutions, but strategic assets. Our
                      commitment is to empower founders with scalable technology
                      that drives immediate impact and secures enduring market
                      leadership.
                    </p>
                  </motion.div>
                  <motion.div
                    className="grid grid-cols-1 gap-3 mt-4 sm:grid-cols-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.25 }}
                  >
                    {[
                      {
                        icon: 'dataset',
                        title: 'Data & AI',
                        desc: 'Intelligent automation',
                        color: 'text-primary',
                      },
                      {
                        icon: 'devices',
                        title: 'Mobile/Web Apps',
                        desc: 'Cross-platform solutions',
                        color: 'text-blue-400',
                      },
                      {
                        icon: 'cloud',
                        title: 'Cloud Infrastructure',
                        desc: 'Scalable architecture',
                        color: 'text-purple-400',
                      },
                      {
                        icon: 'palette',
                        title: 'Research & Design',
                        desc: 'User-centric experiences',
                        color: 'text-pink-400',
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        className="flex items-center gap-3 p-4 rounded-lg border border-white/5 bg-white/[0.02] cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.25,
                          delay: 0.3 + index * 0.05,
                        }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          borderColor: 'rgba(255, 255, 255, 0.1)',
                          y: -5,
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.span
                          className={`text-2xl material-symbols-outlined ${item.color}`}
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.25 }}
                        >
                          {item.icon}
                        </motion.span>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-white/90">
                            {item.title}
                          </span>
                          <span className="text-xs text-white/40">
                            {item.desc}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full max-w-6xl mx-auto mt-12 mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/work">
              <motion.div
                className="inline-block px-8 py-4 text-lg font-bold text-white border rounded-full cursor-pointer bg-white/5 border-white/10 backdrop-blur-sm"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                View All Work
              </motion.div>
            </Link>
          </motion.div>
          <RecentWork />

          <motion.section
            className="relative flex items-center justify-center flex-grow w-full px-6 py-20 overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.35 }}
          >
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 bg-mesh-gradient" />
            {/* Abstract glowing orb decoration top right */}
            <motion.div
              className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            {/* Abstract glowing orb decoration bottom left */}
            <motion.div
              className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            />

            <div className="relative z-10 grid items-center w-full grid-cols-1 gap-12 mx-auto max-w-7xl lg:grid-cols-12">
              {/* Text Content Column */}
              <motion.div
                className="flex flex-col order-2 gap-8 lg:col-span-7 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.35, delay: 0.05 }}
              >
                <motion.div
                  className="relative p-8 overflow-hidden glass-panel md:p-12 rounded-2xl group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Subtle border glow on hover */}
                  <motion.div
                    className="absolute inset-0 border pointer-events-none border-primary/0 rounded-2xl"
                    whileHover={{ borderColor: 'rgba(13,223,242,0.2)' }}
                    transition={{ duration: 0.7 }}
                  />

                  <div className="relative z-10 flex flex-col gap-6">
                    <motion.h1
                      className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.15 }}
                    >
                      The team you wish <br />
                      <motion.span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary/80 glow-text"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: 0.25 }}
                      >
                        you'd discovered sooner.
                      </motion.span>
                    </motion.h1>
                    <motion.p
                      className="max-w-2xl text-lg font-light leading-relaxed text-text-secondary md:text-xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.2 }}
                    >
                      Digital transformation requires dedication and vast
                      in-house capabilities. So, you'll be needing{' '}
                      <motion.span
                        className="font-medium text-white"
                        whileHover={{ scale: 1.05, color: '#06B6D4' }}
                        transition={{ duration: 0.2 }}
                      >
                        empathetic UX researchers
                      </motion.span>
                      , designers who put humans at the heart of every concept,{' '}
                      <motion.span
                        className="font-medium text-white"
                        whileHover={{ scale: 1.05, color: '#06B6D4' }}
                        transition={{ duration: 0.2 }}
                      >
                        award-winning developers
                      </motion.span>{' '}
                      and a QA team who could perform meticulous testing in
                      their sleep.
                    </motion.p>
                    <motion.p
                      className="text-lg font-light leading-relaxed text-text-secondary md:text-xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.3 }}
                    >
                      That's where a global tech consultancy like us comes in.
                    </motion.p>
                    <motion.div
                      className="pt-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.35 }}
                    >
                      <Link href="/about">
                        <motion.button
                          className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold rounded-lg group/btn bg-primary text-background-dark"
                          whileHover={{
                            scale: 1.02,
                            boxShadow: '0 0 20px rgba(13,223,242,0.4)',
                          }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="relative z-10 mr-2 text-base">
                            Meet us
                          </span>
                          <motion.span
                            className="relative z-10 text-lg material-symbols-outlined"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            arrow_forward
                          </motion.span>
                          <motion.div
                            className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.25 }}
                          />
                        </motion.button>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Trust indicators / Stats */}
                <motion.div
                  className="grid grid-cols-3 gap-4 px-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {[
                    { number: '50+', label: 'MVPs Shipped' },
                    { number: '98%', label: 'Client Retention' },
                    { number: '24/7', label: 'Support Cycle' },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="flex flex-col gap-1"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.25,
                        delay: 0.35 + index * 0.05,
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.span
                        className="text-3xl font-bold text-white"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.25,
                          delay: 0.4 + index * 0.05,
                        }}
                      >
                        {stat.number}
                      </motion.span>
                      <span className="text-sm text-text-secondary">
                        {stat.label}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Visual Column */}
              <motion.div
                className="lg:col-span-5 relative h-[500px] lg:h-[700px] w-full order-1 lg:order-2 flex items-center justify-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* Abstract Tech Visual */}
                <motion.div
                  className="relative w-full h-full overflow-hidden rounded-2xl abstract-shape"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-background-dark/90" />
                  <motion.img
                    alt="Futuristic Technology Abstract"
                    className="object-cover object-center w-full h-full opacity-80"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQidGpeLuserm6tSe2VdrYWsO_wq5DNo2bmhOOEeoh4rxbTTvrR4ggXqr7JjhkImRQCKUM1b1nvW1sYgBZG49C0OtODYawGIa-LQUHlKo8sY2hkMQxOezqNT4QwWHFGesIFc5zBC0dyvfIANJHQLABl0pThw9z9ODqjGO_sgT_rALLMWpO-KgxPYFpqY0D7-8SugCVg1pS_EKJhl2sWWNB0qNptcsAPkwuV6HoTyxeAlhXQUmVcQZJMTEzY0_Dm5p-7S9Cye0RkB1H"
                    initial={{ opacity: 0, scale: 1.1 }}
                    whileInView={{ opacity: 0.8, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                  />
                  {/* Floating Tech Cards Decoration */}
                  <motion.div
                    className="absolute z-20 flex items-center gap-3 p-4 top-1/4 -left-6 glass-panel rounded-xl"
                    initial={{ opacity: 0, x: -50, y: -20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.9, 1, 0.9],
                    }}
                    transition={{
                      default: { duration: 0.35, delay: 0.35 },
                      y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                      opacity: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }}
                    whileHover={{ scale: 1.1, x: 5 }}
                  >
                    <motion.div
                      className="p-2 rounded-lg bg-primary/20 text-primary"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.25 }}
                    >
                      <span className="material-symbols-outlined">code</span>
                    </motion.div>
                    <div className="flex flex-col">
                      <span className="text-xs tracking-wider uppercase text-text-secondary">
                        System Architecture
                      </span>
                      <span className="text-sm font-bold text-white">
                        Scalable &amp; Secure
                      </span>
                    </div>
                  </motion.div>
                  <motion.div
                    className="absolute z-20 flex items-center gap-3 p-4 bottom-1/3 -right-4 glass-panel rounded-xl"
                    initial={{ opacity: 0, x: 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    animate={{
                      y: [0, 10, 0],
                      opacity: [0.9, 1, 0.9],
                    }}
                    transition={{
                      default: { duration: 0.35, delay: 0.4 },
                      y: {
                        duration: 3.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.5,
                      },
                      opacity: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.5,
                      },
                    }}
                    whileHover={{ scale: 1.1, x: -5 }}
                  >
                    <motion.div
                      className="p-2 text-purple-400 rounded-lg bg-purple-500/20"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.25 }}
                    >
                      <span className="material-symbols-outlined">
                        psychology
                      </span>
                    </motion.div>
                    <div className="flex flex-col">
                      <span className="text-xs tracking-wider uppercase text-text-secondary">
                        UX Research
                      </span>
                      <span className="text-sm font-bold text-white">
                        Human-Centric
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          <LeadooInPageBot />
        </main>
      </div>
    </div>
  );
}
