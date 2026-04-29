import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedCursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.closest('button') ||
        e.target.closest('a')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      transition: {
        type: "tween",
        ease: "backOut",
        duration: 0.1
      }
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5,
      backgroundColor: "rgba(14, 165, 233, 0.2)",
      border: "1px solid #0ea5e9",
      transition: {
        type: "tween",
        ease: "backOut",
        duration: 0.1
      }
    }
  };

  // Hide cursor on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-[9999] hidden md:block"
        variants={variants}
        animate={isHovered ? "hover" : "default"}
      />
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] hidden md:block transition-transform duration-75"
        style={{
          transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`
        }}
      />
    </>
  );
}
