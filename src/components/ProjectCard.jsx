import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

/**
 * ProjectCard — A reusable, animated project card component.
 *
 * Props:
 *  - project: { id, title, description, techStack, github, live, image }
 *  - index: number (used for stagger delay)
 *  - onClick: () => void (opens detail modal)
 *
 * Features:
 *  - Glassmorphism card with gradient border glow on hover
 *  - Scale + shadow + glow hover effects
 *  - Scroll-triggered fade-up entry via Framer Motion
 *  - Image overlay with "View Details" prompt
 *  - Animated tech stack pills
 */
export default function ProjectCard({ project, index, onClick }) {
  return (
    <motion.div
      layoutId={`project-${project.id}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      whileHover={{ scale: 1.03, y: -6 }}
      className="
        glass rounded-3xl p-6 4xl:p-8 5xl:p-10 cursor-pointer
        transition-all duration-300
        group relative overflow-hidden
        h-full flex flex-col
        hover:shadow-[0_0_30px_rgba(14,165,233,0.15),0_0_60px_rgba(99,102,241,0.1)]
        hover:border-primary/50
      "
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Animated corner accent */}
      <div className="absolute -top-1 -right-1 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Project Image */}
      <div className="w-full h-48 4xl:h-64 5xl:h-80 bg-slate-200 dark:bg-slate-800 rounded-2xl mb-6 overflow-hidden relative">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <span className="flex items-center justify-center w-full h-full text-xl font-bold tracking-widest opacity-50 text-slate-400">
            {project.title.substring(0, 2).toUpperCase()}
          </span>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white font-medium text-sm tracking-wide">
            Click to view details →
          </span>
        </div>
      </div>

      {/* Project Title */}
      <h3 className="text-2xl 4xl:text-3xl 5xl:text-4xl font-bold mb-3 dark:text-white text-slate-800 group-hover:text-primary transition-colors duration-300 relative z-10">
        {project.title}
      </h3>

      {/* Short Description */}
      <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed relative z-10 4xl:text-lg 5xl:text-xl">
        {project.description}
      </p>

      {/* Tech Stack Pills */}
      <div className="flex flex-wrap gap-2 mb-5 relative z-10">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs 4xl:text-sm 5xl:text-base px-3 py-1 4xl:px-4 4xl:py-1.5 5xl:px-5 5xl:py-2 bg-primary/10 text-primary rounded-full font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Quick Links */}
      <div className="flex gap-3 mt-auto relative z-10">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-2 px-4 py-2 4xl:px-6 4xl:py-3 5xl:px-8 5xl:py-4 text-sm 4xl:text-base 5xl:text-lg rounded-full bg-slate-900 dark:bg-white/10 text-white font-medium hover:bg-primary transition-colors duration-200"
        >
          <Github size={16} />
          GitHub
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-2 px-4 py-2 4xl:px-6 4xl:py-3 5xl:px-8 5xl:py-4 text-sm 4xl:text-base 5xl:text-lg rounded-full bg-primary/10 text-primary font-medium hover:bg-primary hover:text-white transition-colors duration-200 border border-primary/20"
        >
          <ExternalLink size={16} />
          Live Demo
        </a>
      </div>
    </motion.div>
  );
}
