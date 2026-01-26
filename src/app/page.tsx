'use client';

import Link from 'next/link';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RecentWork from '../components/RecentWork';
import Testimonials from '@/components/Testimonials';
import Image from 'next/image';

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
            duration: 2,
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
            duration: 2.5,
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
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.25,
          }}
        />
      </motion.div>
      <div className="relative z-10 flex flex-col min-h-screen ">
        <main className="flex flex-col items-center justify-center flex-grow gap-8 ">
          <div className="grid w-full grid-cols-1 gap-8 mx-auto hero max-full ">
            <motion.div
              className="flex items-center "
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.2,
                ease: [0.23, 1, 0.32, 1],
                delay: 0.05,
              }}
            >
              <motion.div
                className="flex flex-col justify-center w-full h-full p-8 rounded-xl md:p-12 lg:p-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col gap-6 text-center">
                  <motion.h1
                    className="text-5xl font-black leading-tight tracking-tighter text-white max-w-[900px] mx-auto md:text-5xl lg:text-7xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    You focus on the business. We build the tech.
                  </motion.h1>
                  <motion.p
                    className="text-base font-normal text-white md:text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.15 }}
                  >
                    Product teams for founders who want to move fast and launch
                    right.
                  </motion.p>
                  <motion.div
                    className="mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
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
                            duration: 0.8,
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
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2 }}
            >
              <span className="pl-2 text-xs font-bold tracking-widest uppercase text-white/40">
                Scaling Tech For
              </span>
              <motion.div
                className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.05 }}
              />
            </motion.div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="88"
                      height="26"
                      viewBox="0 0 88 26"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_2583_8956)">
                        <path
                          d="M11.0101 0L1.76202 9.24807C-0.587339 11.5974 -0.587339 15.4081 1.76202 17.7574L1.92752 17.9229C3.06587 19.0613 4.91064 19.0613 6.04899 17.9229L10.0897 13.8822L9.92422 13.7167C8.78587 12.5783 6.9411 12.5783 5.80275 13.7167L11.0101 8.50936C13.3594 6.16 13.3594 2.34936 11.0101 0Z"
                          fill="white"
                        />
                        <path
                          d="M18.2116 7.17326L18.0461 7.00775C16.9078 5.8694 15.063 5.8694 13.9246 7.00775L9.77492 11.1575L9.94043 11.323C11.0788 12.4613 12.9235 12.4613 14.0619 11.323L8.96758 16.4173C6.61823 18.7667 6.61823 22.5773 8.96758 24.9267L18.2157 15.6786C20.561 13.3333 20.561 9.52262 18.2116 7.17326Z"
                          fill="white"
                        />
                        <path
                          d="M29.4177 9.04613C30.1161 9.36099 30.653 9.8131 31.0324 10.3944C31.4119 10.9757 31.5975 11.6659 31.5975 12.4612C31.5975 13.2483 31.4078 13.9346 31.0324 14.5199C30.653 15.1052 30.1161 15.5573 29.4177 15.8681C28.7194 16.179 27.8959 16.3364 26.9473 16.3364H24.7877V19.2912H22.3091V8.57787H26.9473C27.8959 8.5698 28.7194 8.72723 29.4177 9.04613ZM28.5095 13.8296C28.897 13.5066 29.0908 13.0505 29.0908 12.4612C29.0908 11.8597 28.897 11.3955 28.5095 11.0766C28.122 10.7537 27.5568 10.5962 26.81 10.5962H24.7877V14.314H26.81C27.5528 14.31 28.122 14.1485 28.5095 13.8296Z"
                          fill="white"
                        />
                        <path
                          d="M39.3761 11.8396C40.0583 12.4451 40.4013 13.3614 40.4013 14.5886V19.2873H38.165V18.262C37.717 19.029 36.8814 19.4084 35.6542 19.4084C35.0205 19.4084 34.4715 19.2994 34.0072 19.0855C33.543 18.8715 33.1878 18.5768 32.9416 18.1974C32.6953 17.8179 32.5742 17.3901 32.5742 16.9097C32.5742 16.1427 32.8608 15.5413 33.4381 15.1053C34.0153 14.6653 34.9034 14.4473 36.1104 14.4473H38.0076C38.0076 13.9266 37.8502 13.5269 37.5313 13.2444C37.2164 12.9618 36.7401 12.8246 36.1063 12.8246C35.6663 12.8246 35.2344 12.8932 34.8146 13.0304C34.3907 13.1677 34.0315 13.3534 33.7368 13.5875L32.881 11.9203C33.3291 11.6055 33.87 11.3592 34.4957 11.1857C35.1214 11.0121 35.7672 10.9273 36.4333 10.9273C37.7129 10.9273 38.6898 11.2301 39.3761 11.8396ZM37.3416 17.5192C37.6564 17.3295 37.8825 17.051 38.0157 16.6836V15.84H36.3768C35.3959 15.84 34.9074 16.1629 34.9074 16.8047C34.9074 17.1115 35.0285 17.3537 35.2667 17.5313C35.5049 17.709 35.8359 17.7978 36.2557 17.7978C36.6594 17.8018 37.0227 17.7049 37.3416 17.5192Z"
                          fill="white"
                        />
                        <path
                          d="M45.9959 11.2341C46.4803 11.0282 47.0374 10.9273 47.6711 10.9273V13.1313C47.4047 13.1112 47.2271 13.099 47.1343 13.099C46.4521 13.099 45.9152 13.2888 45.5277 13.6723C45.1401 14.0557 44.9464 14.629 44.9464 15.3959V19.2833H42.5566V11.0484H44.8374V12.1343C45.124 11.7387 45.5115 11.44 45.9959 11.2341Z"
                          fill="white"
                        />
                        <path
                          d="M52.6323 16.0539L51.4859 17.1882V19.2833H49.0962V7.92401H51.4859V14.3545L54.9777 11.0484H57.8235L54.3964 14.5402L58.1303 19.2833H55.236L52.6323 16.0539Z"
                          fill="white"
                        />
                        <path
                          d="M66.4787 9.04613C67.1771 9.36099 67.718 9.8131 68.0934 10.3944C68.4688 10.9757 68.6586 11.6659 68.6586 12.4612C68.6586 13.2483 68.4688 13.9346 68.0934 14.5199C67.714 15.1052 67.1771 15.5573 66.4787 15.8681C65.7804 16.179 64.9569 16.3364 64.0083 16.3364H61.8486V19.2912H59.3701V8.57787H64.0083C64.9529 8.5698 65.7764 8.72723 66.4787 9.04613ZM65.5665 13.8296C65.954 13.5066 66.1477 13.0505 66.1477 12.4612C66.1477 11.8597 65.954 11.3955 65.5665 11.0766C65.1789 10.7537 64.6138 10.5962 63.867 10.5962H61.8446V14.314H63.867C64.6098 14.31 65.1789 14.1485 65.5665 13.8296Z"
                          fill="white"
                        />
                        <path
                          d="M76.4326 11.8396C77.1148 12.4451 77.4579 13.3614 77.4579 14.5886V19.2873H75.2216V18.262C74.7735 19.029 73.9379 19.4084 72.7107 19.4084C72.077 19.4084 71.528 19.2994 71.0638 19.0855C70.5995 18.8715 70.2443 18.5768 70.0021 18.1974C69.7559 17.8179 69.6348 17.3901 69.6348 16.9097C69.6348 16.1427 69.9214 15.5413 70.4986 15.1053C71.0759 14.6653 71.9639 14.4473 73.1709 14.4473H75.0682C75.0682 13.9266 74.9107 13.5269 74.5918 13.2444C74.277 12.9618 73.8006 12.8246 73.1669 12.8246C72.7269 12.8246 72.2949 12.8932 71.8751 13.0304C71.4553 13.1677 71.092 13.3534 70.7973 13.5875L69.9416 11.9203C70.3896 11.6055 70.9305 11.3592 71.5562 11.1857C72.1819 11.0121 72.8278 10.9273 73.4938 10.9273C74.7694 10.9273 75.7504 11.2301 76.4326 11.8396ZM74.3981 17.5192C74.7129 17.3295 74.939 17.051 75.0722 16.6836V15.84H73.4333C72.4524 15.84 71.9639 16.1629 71.9639 16.8047C71.9639 17.1115 72.085 17.3537 72.3232 17.5313C72.5614 17.709 72.8924 17.7978 73.3122 17.7978C73.7199 17.8018 74.0792 17.7049 74.3981 17.5192Z"
                          fill="white"
                        />
                        <path
                          d="M87.6387 11.0524L83.9209 19.7919C83.5415 20.7405 83.0772 21.4106 82.5202 21.7981C81.9631 22.1856 81.293 22.3794 80.5059 22.3794C80.078 22.3794 79.6541 22.3148 79.2343 22.1816C78.8145 22.0484 78.4754 21.8667 78.209 21.6286L79.0809 19.9291C79.2666 20.0906 79.4765 20.2198 79.7147 20.3126C79.9528 20.4055 80.191 20.4499 80.4251 20.4499C80.7521 20.4499 81.0185 20.3691 81.2204 20.2117C81.4262 20.0543 81.6079 19.7919 81.7734 19.4245L81.8057 19.3478L78.2372 11.0524H80.7037L83.0167 16.6392L85.3418 11.0524H87.6387Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2583_8956">
                          <rect width="88" height="25.0275" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  ),
                  name: 'Sparkpay',
                },
                { icon: 'token', name: 'SPC' },
                {
                  icon: (
                    <Image
                      src="/images/cliq.png"
                      alt="cliq"
                      width={20}
                      height={20}
                    />
                  ),
                  name: 'Cliq Up',
                },
                {
                  icon: (
                    <Image
                      src="/images/fojo.webp"
                      alt="cliq"
                      width={30}
                      height={30}
                    />
                  ),
                  name: 'Fojo',
                },
                {
                  icon: (
                    <Image
                      src="/images/leaf.webp"
                      alt="Viridis"
                      width={20}
                      height={20}
                    />
                  ),
                  name: 'Viridis Green',
                },
                {
                  icon: (
                    <Image
                      src="/images/gcc.png"
                      alt="cliq"
                      width={40}
                      height={25}
                    />
                  ),
                  name: 'GCCC',
                },
              ].map((logo, index) => (
                <motion.div
                  key={logo.name}
                  className="flex items-center justify-center h-24 cursor-pointer logo-glass rounded-xl group"
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.03,
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
                      transition={{ duration: 0.15 }}
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
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="relative p-8 overflow-hidden glass-panel rounded-2xl md:p-12 lg:p-20 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0.05 }}
              whileHover={{ scale: 1.01 }}
            >
              <motion.div
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-blue-500/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
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
                  duration: 5,
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
                  transition={{ duration: 0.2, delay: 0.05 }}
                >
                  <div className="space-y-6">
                    <motion.div
                      className="inline-flex items-center gap-2 px-3 py-1 border rounded-full bg-white/5 border-white/10 w-fit backdrop-blur-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 }}
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
                      transition={{ duration: 0.2, delay: 0.1 }}
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
                        duration: 12,
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
                        transition={{ duration: 0.8, delay: 0.5 }}
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
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <motion.div
                    className="space-y-6 text-lg font-light leading-relaxed text-text-secondary"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: 0.1 }}
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
                    transition={{ duration: 0.2, delay: 0.15 }}
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
                          duration: 0.15,
                          delay: 0.2 + index * 0.03,
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
                          transition={{ duration: 0.15 }}
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
                      <Link href="/contact">
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
        </main>

        <Testimonials />
      </div>
    </div>
  );
}
