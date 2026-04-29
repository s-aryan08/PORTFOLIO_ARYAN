import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, X, Rocket } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

import ProjectCard from '../components/ProjectCard';

// ── Asset imports ──
import wanderlustImg from '../assets/Wanderlust.png';
import simonImg from '../assets/simon.png';

// ═══════════════════════════════════════════════════════════
//  PROJECT DATA — Dynamic array-based system
//  👉 Add new project objects here in future
// ═══════════════════════════════════════════════════════════
const projects = [
  {
    id: 1,
    title: 'Wanderlust',
    description:
      'A full-stack travel & hotel booking website built for wanderers. Browse listings, explore destinations, and plan your next adventure.',
    longDescription:
      'Wanderlust is a full-stack hotel booking web application where users can discover, list, and review stays across the globe. Built with Django on the backend and styled with HTML/CSS, it features authentication, dynamic listings with images, search & filter, and user reviews — delivering a complete travel experience.',
    techStack: ['Django', 'HTML', 'CSS', 'Python'],
    github: 'https://github.com/s-aryan08/DELTA_PROJECT.git',
    live: 'https://delta-project-rf3k.onrender.com/listings',
    image: wanderlustImg,
  },
  {
    id: 2,
    title: 'Simon Game',
    description:
      'A classic interactive memory game — watch the pattern, repeat the sequence, and test your memory skills!',
    longDescription:
      'A web-based recreation of the classic Simon electronic game. It challenges users to remember and repeat an increasingly long sequence of flashing colors and sounds. Features progressive difficulty, sound effects, and a high-score tracker. Built with HTML, CSS, and Vanilla JavaScript, demonstrating DOM manipulation, event handling, and game-state logic.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/s-aryan08/simon-game.git',
    live: 'https://s-aryan08.github.io/simon-game/',
    image: simonImg,
  },
  // ─────────────────────────────────────────────────────────
  // 👉 Add new project objects here in future
  // Example:
  // {
  //   id: 3,
  //   title: 'New Project',
  //   description: 'Short description of the project.',
  //   longDescription: 'Detailed description with features and highlights.',
  //   techStack: ['React', 'Node.js', 'MongoDB'],
  //   github: 'https://github.com/...',
  //   live: 'https://...',
  //   image: newProjectImg,
  // },
  // ─────────────────────────────────────────────────────────
];

// ═══════════════════════════════════════════════════════════
//  PROJECTS SECTION
// ═══════════════════════════════════════════════════════════
export default function Projects() {
  const [selectedId, setSelectedId] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <section
      id="projects"
      className="py-24 4xl:py-36 5xl:py-48 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden"
    >
      {/* Background decorative blobs */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        {/* ── Section Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl 4xl:text-6xl 5xl:text-7xl font-bold inline-block relative">
            <span className="text-gradient">Featured Projects</span>
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-6 max-w-2xl 4xl:max-w-3xl mx-auto text-lg 4xl:text-xl 5xl:text-2xl">
            A collection of projects I've built — each one a step in my developer journey.
          </p>
        </motion.div>

        {/* ── Project Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 4xl:gap-12 5xl:gap-16 items-stretch">
          {/* Render project cards dynamically */}
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onClick={() => setSelectedId(project.id)}
            />
          ))}

          {/* ── "More Projects Coming Soon" Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: projects.length * 0.15 }}
            className="relative h-full"
          >
            <button
              onClick={() => setShowTooltip((prev) => !prev)}
              className="
                w-full h-full min-h-[340px]
                glass rounded-3xl p-8
                flex flex-col items-center justify-center gap-6
                cursor-pointer relative overflow-hidden
                transition-all duration-300
                hover:scale-[1.03] hover:-translate-y-1.5
                hover:shadow-[0_0_40px_rgba(14,165,233,0.2),0_0_80px_rgba(99,102,241,0.12)]
                hover:border-primary/50
                group
              "
            >
              {/* Pulsing background glow */}
              <div className="absolute inset-0 rounded-3xl animate-pulse-glow pointer-events-none" />

              {/* Animated gradient border ring */}
              <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Rocket icon with floating animation */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/20">
                  <Rocket
                    size={36}
                    className="text-primary group-hover:text-secondary transition-colors duration-300"
                  />
                </div>
              </motion.div>

              {/* Text */}
              <div className="relative z-10 text-center">
                <h3 className="text-xl md:text-2xl font-bold dark:text-white text-slate-800 mb-2 group-hover:text-primary transition-colors duration-300">
                  More Projects Coming Soon
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  🚀 Exciting new projects are in the works!
                </p>
              </div>

              {/* Animated dots */}
              <div className="flex gap-2 relative z-10">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="w-2 h-2 rounded-full bg-primary/60"
                    animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>

              {/* Tooltip message */}
              <AnimatePresence>
                {showTooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium rounded-xl shadow-2xl whitespace-nowrap z-20"
                  >
                    Currently working on exciting new projects! 🔥
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-slate-900 dark:border-b-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        </div>

        {/* ── Modal — Project Detail View ── */}
        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
              />

              {/* Modal Content */}
              <motion.div
                layoutId={`project-${selectedId}`}
                className="w-full max-w-3xl glass bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-10 relative z-10 max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 right-6 p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-colors z-20"
                >
                  <X size={20} />
                </button>

                {projects
                  .filter((p) => p.id === selectedId)
                  .map((project) => (
                    <div key={project.id}>
                      {/* Modal Image */}
                      <div className="w-full h-64 md:h-80 bg-slate-200 dark:bg-slate-800 rounded-2xl mb-8 overflow-hidden">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="flex items-center justify-center w-full h-full text-4xl font-bold tracking-widest opacity-30">
                            {project.title.substring(0, 2).toUpperCase()}
                          </span>
                        )}
                      </div>

                      {/* Modal Title */}
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white text-slate-800">
                        {project.title}
                      </h2>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-sm px-4 py-1.5 bg-primary/10 text-primary rounded-full font-medium border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Long Description */}
                      <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-8">
                        {project.longDescription}
                      </p>

                      {/* Action Links */}
                      <div className="flex flex-wrap gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-semibold hover:opacity-80 transition-opacity"
                        >
                          <Github size={20} /> Source Code
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-secondary transition-colors"
                        >
                          <ExternalLink size={20} /> Live Demo
                        </a>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
