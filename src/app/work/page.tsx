
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../lib/projects';

export default function WorkPage() {
  return (
    <main className="container mx-auto px-4 py-16 pt-32">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
          Our Work
        </h1>
        <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
          A collection of our best work. We build scalable systems and MVPs for the world's most ambitious startups.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </main>
  );
}
