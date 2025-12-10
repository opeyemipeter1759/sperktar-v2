
interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  platform: string;
  imageUrl: string;
  caseStudyUrl: string;
}

export default function ProjectCard({ category, title, description, platform, imageUrl, caseStudyUrl }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col h-full rounded-2xl border border-white/10 bg-glass-gradient backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
      <div className="relative w-full aspect-video overflow-hidden bg-surface-dark">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: `url('${imageUrl}')`}}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent opacity-80"></div>
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium text-blue-200 backdrop-blur-md">{category}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-6">{description}</p>
        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{platform}</span>
          <a className="flex items-center gap-1 text-sm font-bold text-white group-hover:text-primary transition-colors" href={caseStudyUrl}>
            Case Study <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
          </a>
        </div>
      </div>
    </article>
  );
}
