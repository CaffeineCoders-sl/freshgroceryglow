
import React from 'react';
import FadeIn from '../animations/FadeIn';
import AnimatedText from '../animations/AnimatedText';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist-section');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-green-50 via-green-100 to-white">
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-repeat opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn delay={0.1} direction="right">
            <div className="space-y-6 max-w-xl">
              <AnimatedText 
                text="FreshPick.lk - Fresh Groceries, Delivered Soon!"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 leading-tight"
              />
              <p className="text-xl text-gray-600">
                Sign up now to get exclusive access to the freshest produce delivered right to your doorstep.
              </p>
              <Button 
                onClick={scrollToWaitlist}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full font-medium transition-all hover:shadow-xl hover:scale-105 transform"
              >
                Join the Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3} direction="left">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
              <img 
                src="/placeholder.svg" 
                alt="Happy person with groceries" 
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 relative z-10 border-4 border-white"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
