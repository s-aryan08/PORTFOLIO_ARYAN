import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 4xl:py-36 5xl:py-48 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl 4xl:text-5xl 5xl:text-6xl font-bold inline-block relative">
            <span className="text-gradient">About Me</span>
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </h2>
        </motion.div>

        <div className="max-w-4xl 4xl:max-w-6xl 5xl:max-w-7xl mx-auto glass p-8 md:p-12 4xl:p-16 5xl:p-20 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl 4xl:text-2xl 5xl:text-3xl leading-relaxed text-slate-700 dark:text-slate-300"
          >
            I’m currently pursuing a B.Tech in Computer Science, building a solid foundation in programming and technology. My journey began with a curiosity for how software works and a drive to create meaningful solutions. 
            <br /><br />
            As an aspiring software engineer, I’m passionate about web development and enjoy crafting interactive, user-friendly websites. I continuously explore new languages and frameworks to expand my skill set and improve my problem-solving abilities. 
            <br /><br />
            My goal is to become a versatile developer, capable of working across both front-end and back-end technologies, and contribute to impactful innovations in the tech world.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
