import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin, FaInstagram as Instagram } from 'react-icons/fa';

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Using environment variables for secure credential storage
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
    )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 5000);
        formRef.current.reset();
      }, (error) => {
        setLoading(false);
        setError(true);
        setTimeout(() => setError(false), 5000);
        console.log(error.text);
      });
  };

  return (
    <section id="contact" className="py-24 4xl:py-36 5xl:py-48 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl 4xl:text-5xl 5xl:text-6xl font-bold inline-block relative">
            <span className="text-gradient">Get In Touch</span>
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </h2>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl 4xl:max-w-4xl 5xl:max-w-5xl mx-auto text-lg 4xl:text-xl 5xl:text-2xl">
            Feel free to reach out for collaborations, opportunities, or just to say hi!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass p-8 md:p-10 4xl:p-14 5xl:p-16 rounded-3xl h-full flex flex-col">
              <h3 className="text-3xl 4xl:text-4xl 5xl:text-5xl font-bold mb-8 dark:text-white text-slate-800">Contact Information</h3>

              <div className="space-y-6 flex-grow">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 4xl:w-16 4xl:h-16 5xl:w-20 5xl:h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm 4xl:text-base 5xl:text-lg text-slate-500 mb-1">Email</p>
                    <a href="mailto:aryanasus2007@gmail.com" className="text-lg 4xl:text-xl 5xl:text-2xl font-medium hover:text-primary transition-colors">
                      aryanasus2007@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 4xl:w-16 4xl:h-16 5xl:w-20 5xl:h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm 4xl:text-base 5xl:text-lg text-slate-500 mb-1">Phone</p>
                    <a href="tel:+917505802508" className="text-lg 4xl:text-xl 5xl:text-2xl font-medium hover:text-primary transition-colors">
                      +91 7505802508
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 4xl:w-16 4xl:h-16 5xl:w-20 5xl:h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm 4xl:text-base 5xl:text-lg text-slate-500 mb-1">Location</p>
                    <p className="text-lg 4xl:text-xl 5xl:text-2xl font-medium">
                      India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 flex gap-4">
                <a href="https://github.com/s-aryan08" target="_blank" rel="noreferrer" className="w-12 h-12 4xl:w-16 4xl:h-16 5xl:w-20 5xl:h-20 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/aryan-srivastava-7651aa370/" target="_blank" rel="noreferrer" className="w-12 h-12 4xl:w-16 4xl:h-16 5xl:w-20 5xl:h-20 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/saryan_08_/" target="_blank" rel="noreferrer" className="w-12 h-12 4xl:w-16 4xl:h-16 5xl:w-20 5xl:h-20 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass p-8 md:p-10 4xl:p-14 5xl:p-16 rounded-3xl h-full">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm 4xl:text-base 5xl:text-lg font-medium mb-2 dark:text-slate-300">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 4xl:px-6 4xl:py-4 5xl:px-8 5xl:py-5 4xl:text-lg 5xl:text-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm 4xl:text-base 5xl:text-lg font-medium mb-2 dark:text-slate-300">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 4xl:px-6 4xl:py-4 5xl:px-8 5xl:py-5 4xl:text-lg 5xl:text-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm 4xl:text-base 5xl:text-lg font-medium mb-2 dark:text-slate-300">Your Message</label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows="5"
                    className="w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 4xl:px-6 4xl:py-4 5xl:px-8 5xl:py-5 4xl:text-lg 5xl:text-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-secondary text-white font-semibold py-4 4xl:py-5 5xl:py-6 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed 4xl:text-lg 5xl:text-xl"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message <Send size={20} />
                    </>
                  )}
                </button>

                {success && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-500 text-center font-medium mt-4">
                    Message sent successfully!
                  </motion.p>
                )}
                {error && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-center font-medium mt-4">
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
