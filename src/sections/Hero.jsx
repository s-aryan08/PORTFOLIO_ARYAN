import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll';
import ParticleBackground from '../components/ParticleBackground';
import Profile from '../components/Profile';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32 md:pb-20">
      <ParticleBackground />
      
      <div className="container mx-auto px-6 md:px-12 z-10 text-center">
        <Profile />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-xl md:text-2xl 4xl:text-3xl 5xl:text-4xl text-secondary font-medium mb-4">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl 4xl:text-8xl 5xl:text-9xl font-extrabold mb-6 tracking-tight">
            Aryan Srivastava
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl md:text-4xl 4xl:text-5xl 5xl:text-6xl font-bold mb-8 h-[40px] md:h-[60px] 4xl:h-[80px] 5xl:h-[100px]"
        >
          <span className="text-gradient">
            <Typewriter
              words={['Software Engineer', 'AI Enthusiast', 'Full Stack Developer', 'Problem Solver']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl 4xl:max-w-4xl 5xl:max-w-5xl mx-auto text-lg 4xl:text-xl 5xl:text-2xl text-slate-600 dark:text-slate-300 mb-10"
        >
          I build scalable, modern web applications and AI-integrated solutions. Let's create something amazing together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="px-8 py-4 4xl:px-12 4xl:py-5 5xl:px-16 5xl:py-6 bg-primary text-white rounded-full font-semibold hover:bg-secondary transition-colors cursor-pointer w-full sm:w-auto text-center 4xl:text-lg 5xl:text-xl"
          >
            View Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="px-8 py-4 4xl:px-12 4xl:py-5 5xl:px-16 5xl:py-6 border-2 border-primary text-primary dark:text-white rounded-full font-semibold hover:bg-primary hover:text-white transition-colors cursor-pointer w-full sm:w-auto text-center 4xl:text-lg 5xl:text-xl"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
      >
        <Link to="about" smooth={true} duration={500} className="flex flex-col items-center">
          <span className="text-sm font-medium mb-2 block dark:text-white/70 text-black/70">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1"
          >
            <motion.div className="w-1.5 h-3 bg-primary rounded-full" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
