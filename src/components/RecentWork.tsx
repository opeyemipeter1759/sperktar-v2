
import { projects } from '../lib/projects';
import ProjectCard from './ProjectCard';

export default function RecentWork() {
  return (
    <section className="w-full max-w-[1280px] px-6 md:px-10 mb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
            Our Recent Work
          </h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed max-w-xl">
            Scalable systems and MVPs built for the world's most ambitious startups. You focus on the business. We build the tech.
          </p>
        </div>
        <div className="hidden md:block">
          <div className="h-[1px] w-32 bg-gradient-to-r from-primary to-transparent"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
