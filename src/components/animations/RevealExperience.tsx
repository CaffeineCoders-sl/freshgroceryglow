import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBasket, Leaf, Sparkles } from 'lucide-react';

const RevealExperience: React.FC = () => {
  const [showReveal, setShowReveal] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  
  useEffect(() => {
    // Sequence through animation steps
    const timer1 = setTimeout(() => setCurrentStep(1), 1000);
    const timer2 = setTimeout(() => setCurrentStep(2), 2500);
    const timer3 = setTimeout(() => setCurrentStep(3), 4000);
    const timer4 = setTimeout(() => setShowReveal(false), 5500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <AnimatePresence>
      {showReveal && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          exit={{ 
            opacity: 0,
            transition: { duration: 1, ease: "easeInOut" }
          }}
        >
          {/* Background circles */}
          <motion.div 
            className="absolute h-[200vh] w-[200vw]"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 0.3, 1, 3],
              opacity: [0, 0.8, 1, 0],
              transition: { 
                duration: 5,
                times: [0, 0.3, 0.6, 1],
                ease: "easeInOut"
              }
            }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mix-blend-screen opacity-30 blur-3xl"></div>
            </div>
          </motion.div>
          
          {/* Central logo reveal */}
          <div className="relative z-10 flex flex-col items-center text-white">
            {currentStep >= 0 && (
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, type: "spring", stiffness: 200 }}
                className="relative"
              >
                <div className="bg-white rounded-full p-6 shadow-[0_0_40px_rgba(255,255,255,0.6)]">
                  <ShoppingBasket className="h-20 w-20 text-gray-900" />
                </div>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -top-2 -right-2"
                >
                  <Leaf className="h-8 w-8 text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                </motion.div>
              </motion.div>
            )}
            
            {currentStep >= 1 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-8 text-center"
              >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  FreshPick<span className="text-green-400">.lk</span>
                </h1>
              </motion.div>
            )}
            
            {currentStep >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-4 flex items-center gap-2"
              >
                <Sparkles className="h-5 w-5 text-yellow-300 animate-pulse" />
                <p className="text-xl text-gray-300">Farm to Door, Fresh Every Day</p>
                <Sparkles className="h-5 w-5 text-yellow-300 animate-pulse" />
              </motion.div>
            )}
            
            {currentStep >= 3 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 10
                }}
                className="mt-8"
              >
                <motion.div 
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-white font-medium shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discover Freshness
                </motion.div>
              </motion.div>
            )}
          </div>
          
          {/* Animated decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-green-400 rounded-full"
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: 0,
                  opacity: 0
                }}
                animate={{ 
                  y: [null, Math.random() * -window.innerHeight],
                  scale: [0, Math.random() * 3 + 1, 0],
                  opacity: [0, 0.8, 0]
                }}
                transition={{ 
                  duration: Math.random() * 8 + 4,
                  delay: Math.random() * 2,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 2
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RevealExperience;
