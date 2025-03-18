
import React from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up', 
  className = '' 
}) => {
  let initial = { opacity: 0 };
  
  switch (direction) {
    case 'up':
      initial = { ...initial, y: 50 };
      break;
    case 'down':
      initial = { ...initial, y: -50 };
      break;
    case 'left':
      initial = { ...initial, x: 50 };
      break;
    case 'right':
      initial = { ...initial, x: -50 };
      break;
  }

  return (
    <motion.div
      initial={initial}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
