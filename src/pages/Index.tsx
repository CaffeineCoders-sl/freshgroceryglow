
import React from 'react';
import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';
import WaitlistForm from '@/components/landing/WaitlistForm';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <WaitlistForm />
      <Footer />
    </div>
  );
};

export default Index;
