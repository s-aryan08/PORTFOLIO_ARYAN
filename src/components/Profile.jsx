import { motion } from 'framer-motion';
import profileImg from '../assets/Aryan.png';

export default function Profile() {
  return (
    <div className="flex justify-center mb-4 relative z-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        {/* Ring Pulse Animation (Animated Background Behind Profile) */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full bg-primary blur-xl z-0"
        />

        {/* Floating Animation (Up-down motion) */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10"
        >
          {/* Profile Image Container with Hover Effects */}
          <motion.div
            whileHover={{ 
              scale: 1.08, 
              rotate: 3,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="w-32 h-32 md:w-44 md:h-44 4xl:w-56 4xl:h-56 5xl:w-72 5xl:h-72 rounded-full p-[3px] bg-gradient-to-tr from-primary via-white/20 to-secondary shadow-xl hover:shadow-2xl hover:shadow-primary/50 transition-shadow duration-300 relative overflow-hidden group"
          >
            {/* Inner ring for glassmorphism effect */}
            <div className="w-full h-full rounded-full bg-light dark:bg-dark p-1 overflow-hidden relative">
              {/* Overlay for intense glow on hover */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 z-10 rounded-full" />
              
              {/* Profile Image */}
              <img 
                src={profileImg} 
                alt="Aryan Srivastava" 
                className="w-full h-full object-cover rounded-full relative z-0"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
