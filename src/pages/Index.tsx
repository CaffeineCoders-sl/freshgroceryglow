import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';
import HowItWorks from '@/components/landing/HowItWorks';
import FeaturedProducts from '@/components/landing/FeaturedProducts';
import WaitlistForm from '@/components/landing/WaitlistForm';
import Footer from '@/components/landing/Footer';
import RevealExperience from '@/components/animations/RevealExperience';

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [hasInteracted, setHasInteracted] = useState(false);
  
  useEffect(() => {
    // Set hasInteracted to true after the reveal animation
    const timer = setTimeout(() => {
      setHasInteracted(true);
    }, 6000);
    
    // Add event listeners to detect user interaction
    const handleInteraction = () => {
      setHasInteracted(true);
    };
    
    window.addEventListener('click', handleInteraction);
    window.addEventListener('scroll', handleInteraction);
    window.addEventListener('keydown', handleInteraction);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Initial reveal experience */}
      <RevealExperience />
      
      {/* Page content - will be initially hidden by the reveal animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: hasInteracted ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Innovative scroll progress indicator */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-emerald-600 z-50 origin-left"
          style={{ scaleX }}
        />
        
        {/* Floating navigation dots for section indicators */}
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
          {['hero', 'about', 'how-it-works', 'products', 'waitlist'].map((section, index) => (
            <a 
              key={section}
              href={`#${section}-section`}
              className="w-3 h-3 rounded-full bg-green-200 hover:bg-green-500 transition-colors duration-300 relative group"
              aria-label={`Navigate to ${section} section`}
            >
              <span className="absolute right-full mr-2 whitespace-nowrap bg-green-600 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </span>
            </a>
          ))}
        </div>
        
        <div id="hero-section">
          <Hero />
        </div>
        <div id="about-section">
          <About />
        </div>
        <div id="how-it-works-section">
          <HowItWorks />
        </div>
        <div id="products-section">
          <FeaturedProducts />
        </div>
        <div id="waitlist-section">
          <WaitlistForm />
        </div>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;
