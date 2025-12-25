
import { projects } from '../lib/projects';
import ProjectCard from './ProjectCard';
import Link from 'next/link';

export default function RecentWork() {
  return (
    <section className="relative z-10 pt-24 pb-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col gap-4">
            <div className="w-12 h-1 bg-primary rounded-full mb-2"></div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Work</span>
            </h2>
            <p className="text-lg md:text-xl text-secondary-text/60 max-w-2xl font-light">
              Scalable systems and MVPs built for the world's most ambitious startups. You focus on the business. We build the tech.
            </p>
          </div>
          <Link href="/work" className="hidden md:flex items-center gap-2 text-sm font-bold text-primary hover:text-white transition-colors">
            View All Work <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/work" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-white transition-colors">
            View All Work <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
