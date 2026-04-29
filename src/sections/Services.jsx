import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { Code2, BrainCircuit, Server, Database } from 'lucide-react';

const services = [
  {
    title: "Web Developer",
    icon: <Code2 size={40} className="mb-4 text-primary" />,
    description: "I build scalable solutions—from responsive interfaces to backend logic—tailored to user needs. Whether debugging issues or optimizing performance, I ensure clean design and efficient functionality.",
  },
  {
    title: "AI Engineer",
    icon: <BrainCircuit size={40} className="mb-4 text-secondary" />,
    description: "Machine Learning & Deep Learning fundamentals. Generative AI (LLMs, prompt engineering). AI-powered web apps, Model/API integration, and Data preprocessing.",
  },
  {
    title: "Full Stack Developer",
    icon: <Server size={40} className="mb-4 text-primary" />,
    description: "End-to-end web application development encompassing frontend technologies, backend services, API integrations, and robust architectures.",
  },
  {
    title: "DSA / Problem Solver",
    icon: <Database size={40} className="mb-4 text-secondary" />,
    description: "Strong logical thinking and problem-solving skills, capable of writing optimized code and finding efficient solutions using proper data structures.",
  }
];

export default function Services() {
  const tiltOptions = {
    reverse: false,
    max: 15,
    perspective: 1000,
    scale: 1.05,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <section id="services" className="py-24 4xl:py-36 5xl:py-48 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl 4xl:text-5xl 5xl:text-6xl font-bold inline-block relative">
            <span className="text-gradient">My Services</span>
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 4xl:gap-12 5xl:gap-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Tilt options={tiltOptions} className="h-full">
                <div className="glass p-8 4xl:p-12 5xl:p-16 rounded-3xl h-full border-t border-l border-white/20 hover:border-primary/50 transition-colors duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    {service.icon}
                    <h3 className="text-2xl 4xl:text-3xl 5xl:text-4xl font-bold mb-4 dark:text-white text-slate-800">{service.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed 4xl:text-lg 5xl:text-xl">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
