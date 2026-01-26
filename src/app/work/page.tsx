'use client';

import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../lib/projects';
import { useState } from 'react';

const allCategories = ['All', ...new Set(projects.map((p) => p.category))];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <main className="relative z-10 pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.05 }}
        >
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            <motion.div
              className="w-12 h-1 bg-primary rounded-full mb-2"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            />
            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tighter text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.15 }}
            >
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">
                Work
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-white/60 max-w-2xl font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              A collection of our best work. We build scalable systems and MVPs
              for the world's most ambitious startups.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mb-12 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          {allCategories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 
                ${
                  activeFilter === category
                    ? 'bg-primary text-white'
                    : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.2,
                delay: 0.25 + index * 0.03,
                type: 'spring',
                stiffness: 300,
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.04,
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                }}
                layout
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
