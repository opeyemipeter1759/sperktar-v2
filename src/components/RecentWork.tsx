'use client';

import { projects } from '../lib/projects';
import ProjectCard from './ProjectCard';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function RecentWork() {
  return (
    <section className="relative z-10 pt-24 pb-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.35, delay: 0.05 }}
        >
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
          >
            <motion.div
              className="w-12 h-1 bg-primary rounded-full mb-2"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.15 }}
            />
            <motion.h2
              className="text-4xl md:text-6xl font-bold tracking-tighter text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.2 }}
            >
              Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Work</span>
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-secondary-text/60 max-w-2xl font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.25 }}
            >
              Scalable systems and MVPs built for the world's most ambitious startups. You focus on the business. We build the tech.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="hidden md:flex"
          >
            <Link href="/work" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-white transition-colors">
              View All Work <motion.span
                className="material-symbols-outlined"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              >arrow_forward</motion.span>
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.35,
                delay: 0.3 + index * 0.08,
                type: 'spring',
                stiffness: 300,
                damping: 25,
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center md:hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.4 }}
        >
          <Link href="/work">
            <motion.div
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Work <motion.span
                className="material-symbols-outlined"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              >arrow_forward</motion.span>
            </motion.div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
