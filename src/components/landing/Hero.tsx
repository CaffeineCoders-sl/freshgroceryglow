
import React from 'react';
import FadeIn from '../animations/FadeIn';
import AnimatedText from '../animations/AnimatedText';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import CartPreview from './CartPreview';

const Hero: React.FC = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist-section');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-emerald-50 to-teal-50 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-32 right-1/4 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-repeat opacity-5 z-1"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn delay={0.1} direction="right">
            <div className="space-y-8 max-w-xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 border border-green-200 text-green-700 text-sm font-medium">
                <Sparkles className="h-4 w-4 mr-2 text-yellow-500" />
                Coming Soon to Sri Lanka
              </div>
              
              <AnimatedText 
                text="Fresh Groceries Delivered Right to Your Door"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 leading-tight"
              />
              <p className="text-xl text-gray-600">
                FreshPick.lk brings the freshest local produce and premium groceries straight to your home with just a few clicks.
              </p>
              <Button 
                onClick={scrollToWaitlist}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-6 text-lg rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 transform"
              >
                Join the Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3} direction="left">
            <div className="relative h-[500px] max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
              <CartPreview />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
