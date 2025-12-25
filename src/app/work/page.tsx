
'use client'
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../lib/projects';
import { useState } from 'react';

const allCategories = ['All', ...new Set(projects.map(p => p.category))];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <main className="relative z-10 pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col gap-4">
            <div className="w-12 h-1 bg-primary rounded-full mb-2"></div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">Work</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl font-light">
              A collection of our best work. We build scalable systems and MVPs for the world's most ambitious startups.
            </p>
          </div>
        </div>

        <div className="mb-12 flex flex-wrap items-center gap-4">
        {allCategories.map(category => (
          <button 
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 
              ${activeFilter === category 
                ? 'bg-primary text-white' 
                : 'bg-white/5 text-white/70 hover:bg-white/10'}`}>
            {category}
          </button>
        ))}
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} tags={project.tags} />
          ))}
        </div>

      </div>
    </main>
  );
}
