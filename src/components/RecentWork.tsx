'use client';

import { projects } from '../lib/projects';
import ProjectCard from './ProjectCard';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function RecentWork() {
  return (
    <section className="relative z-10 pt-24 pb-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col justify-between gap-8 mb-16 md:flex-row md:items-end">
          <div className="flex flex-col gap-4">
            <div className="w-12 h-1 mb-2 rounded-full bg-primary"></div>
            <h2 className="text-4xl font-bold tracking-tighter text-white md:text-6xl">
              Recent{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                Work
              </span>
            </h2>
            <p className="max-w-2xl text-lg font-light md:text-xl text-secondary-text/60">
              Scalable systems and MVPs built for the world's most ambitious
              startups. You focus on the business. We build the tech.
            </p>
          </div>
          <Link
            href="/work"
            className="items-center hidden gap-2 text-sm font-bold transition-colors md:flex text-primary hover:text-white"
          >
            View All{' '}
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 md:gap-10">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.2,
                delay: 0.2 + index * 0.04,
                type: 'spring',
                stiffness: 300,
                damping: 25,
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-bold transition-colors text-primary hover:text-white"
          >
            View All{' '}
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
