
import React, { useState, useEffect } from 'react';
import FadeIn from '../animations/FadeIn';
import AnimatedText from '../animations/AnimatedText';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
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
      {/* Innovative parallax background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-green-100 via-emerald-50 to-teal-50 z-0"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      ></div>
      
      {/* Animated background elements with parallax effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-20 -right-20 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"
          style={{ transform: `translate(${scrollY * 0.1}px, ${scrollY * -0.05}px)` }}
        ></div>
        <div 
          className="absolute top-1/3 -left-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" 
          style={{ animationDelay: '2s', transform: `translate(${scrollY * -0.08}px, ${scrollY * 0.02}px)` }}
        ></div>
        <div 
          className="absolute -bottom-32 right-1/4 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" 
          style={{ animationDelay: '4s', transform: `translate(${scrollY * 0.05}px, ${scrollY * -0.1}px)` }}
        ></div>
      </div>
      
      {/* Digital mesh pattern with parallax effect */}
      <div 
        className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-repeat opacity-5 z-1"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      ></div>
      
      {/* Animated interactive particles */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 bg-green-400 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.4 + (Math.random() * 0.4),
              animationDuration: `${3 + (Math.random() * 5)}s`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `translateY(${scrollY * (0.02 + Math.random() * 0.05)}px)`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn delay={0.1} direction="right">
            <div className="space-y-8 max-w-xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-green-400/30 to-emerald-400/30 backdrop-blur-md border border-green-200/50 text-green-700 text-sm font-medium shadow-sm">
                <Sparkles className="h-4 w-4 mr-2 text-yellow-500 animate-pulse" />
                Coming Soon to Sri Lanka
              </div>
              
              <AnimatedText 
                text="Fresh Groceries Delivered Right to Your Door"
                className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent leading-tight drop-shadow-sm"
              />
              <p className="text-xl text-gray-600 drop-shadow-sm backdrop-blur-sm bg-white/30 p-3 rounded-lg">
                FreshPick.lk brings the freshest local produce and premium groceries straight to your home with just a few clicks.
              </p>
              <Button 
                onClick={scrollToWaitlist}
                className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-6 text-lg rounded-full font-medium transition-all duration-300 hover:shadow-[0_8px_30px_rgb(34,197,94,0.3)] border border-green-400/20 hover:scale-105 transform relative overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 transform -translate-y-full group-hover:translate-y-0"></span>
                <span className="relative z-10 flex items-center">
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3} direction="left">
            <div className="relative h-[500px] max-w-md mx-auto lg:mx-0 lg:ml-auto perspective-1000">
              <div 
                className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full opacity-30 animate-pulse"
                style={{ animationDuration: '3s', transform: `translateY(${scrollY * 0.1}px)` }}
              ></div>
              <div 
                className="absolute -bottom-8 -right-8 w-40 h-40 bg-green-400 rounded-full opacity-20 animate-pulse"
                style={{ animationDuration: '4s', transform: `translateY(${scrollY * -0.05}px)` }}
              ></div>
              <div 
                className="transform-style-3d rotate-y-3 hover:rotate-y-0 transition-transform duration-1000"
                style={{ transform: `rotateY(${scrollY * 0.02}deg) rotateX(${scrollY * 0.01}deg)` }}
              >
                <CartPreview />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
