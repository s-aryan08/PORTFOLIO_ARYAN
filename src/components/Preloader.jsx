import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[99999] bg-dark flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0.5
          }}
          className="w-16 h-16 bg-gradient-to-tr from-primary to-secondary"
        />
        <motion.h1
          initial={{ opacity: 0, mt: 10 }}
          animate={{ opacity: 1, mt: 20 }}
          transition={{ delay: 0.5 }}
          className="text-white text-2xl font-bold tracking-widest mt-6"
        >
          ARYAN SRIVASTAVA
        </motion.h1>
      </div>
    </motion.div>
  );
}
