'use client';

import { motion } from 'framer-motion';

interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  platform: string;
  imageUrl: string;
  caseStudyUrl: string;
  tags: string[];
}

export default function ProjectCard({
  category,
  title,
  description,
  platform,
  imageUrl,
  caseStudyUrl,
  tags,
}: ProjectCardProps) {
  return (
    <motion.article
      className="relative flex flex-col h-full overflow-hidden border group rounded-2xl border-white/10 bg-glass-gradient backdrop-blur-md"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        borderColor: 'rgba(13,223,242,0.4)',
        boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)',
      }}
      transition={{ duration: 0.25 }}
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-dark">
        <motion.div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url('${imageUrl}')` }}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent opacity-80"></div>
        <motion.div
          className="absolute top-4 left-4"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-200 border rounded-full border-white/10 bg-black/40 backdrop-blur-md">
            {category}
          </span>
        </motion.div>
      </div>
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <motion.h3
          className="mb-2 text-lg font-bold text-white transition-colors sm:text-xl group-hover:text-primary"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="flex-grow mb-6 text-sm leading-relaxed text-white/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {description}
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-2 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.25 }}
        >
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md bg-white/5 text-white/70 ring-1 ring-inset ring-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          className="flex items-center justify-between pt-4 mt-auto border-t border-white/5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.35 }}
        >
          <span className="text-xs font-medium tracking-wider uppercase text-white/50">
            {platform}
          </span>
          <a
            className="flex items-center gap-1 text-sm font-bold text-white transition-colors group-hover:text-primary"
            href={caseStudyUrl}
            target="_blank"
          >
            Case Study{' '}
            <motion.span
              className="text-lg material-symbols-outlined"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              arrow_forward
            </motion.span>
          </a>
        </motion.div>
      </div>
    </motion.article>
  );
}
