import React, { useState, useEffect } from 'react';
import FadeIn from '../animations/FadeIn';
import AnimatedText from '../animations/AnimatedText';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import CartPreview from './CartPreview';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist-section');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Hero background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Fresh vegetables background" 
          className="w-full h-full object-cover"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn delay={0.1} direction="right">
            <div className="space-y-8 max-w-xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium shadow-sm">
                <span className="font-bold mr-1">FreshPick</span> - Coming Soon to Sri Lanka
              </div>
              
              <AnimatedText 
                text="FreshPick: Fresh Groceries Delivered "
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              />
              <p className="text-xl text-gray-200 backdrop-blur-sm bg-black/20 p-3 rounded-lg">
                FreshPick.lk brings the freshest local produce and premium groceries straight to your home with just a few clicks.
              </p>
              <Button 
                onClick={scrollToWaitlist}
                className="group bg-white hover:bg-gray-100 text-black px-8 py-6 text-lg rounded-full font-medium transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  Join FreshPick Waitlist
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3} direction="left" className="hidden lg:block">
            <div className="relative h-[500px] max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <CartPreview />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
