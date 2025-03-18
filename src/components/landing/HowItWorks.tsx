
import React from 'react';
import FadeIn from '../animations/FadeIn';
import { Smartphone, TruckIcon, Package, ThumbsUp } from 'lucide-react';

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: number;
  delay: number;
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, description, step, delay }) => (
  <FadeIn delay={delay} direction="up" className="relative">
    <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
      <div className="absolute -top-4 -left-4 h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
        {step}
      </div>
      <div className="flex flex-col items-center text-center pt-6">
        <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </FadeIn>
);

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn direction="up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            How FreshPick.lk Works
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Getting fresh groceries delivered has never been easier. Here's how our service will work:
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-green-200 -z-10 hidden lg:block"></div>
          
          <StepCard 
            icon={<Smartphone className="h-8 w-8" />}
            title="Place Your Order"
            description="Browse our selection and add items to your cart. Customize your order based on your preferences."
            step={1}
            delay={0.1}
          />
          
          <StepCard 
            icon={<Package className="h-8 w-8" />}
            title="We Prepare Your Order"
            description="We handpick the freshest items from local farms and suppliers to ensure quality."
            step={2}
            delay={0.2}
          />
          
          <StepCard 
            icon={<TruckIcon className="h-8 w-8" />}
            title="Fast Delivery"
            description="Our delivery team brings your order right to your doorstep at your chosen time slot."
            step={3}
            delay={0.3}
          />
          
          <StepCard 
            icon={<ThumbsUp className="h-8 w-8" />}
            title="Enjoy Fresh Groceries"
            description="Unpack and enjoy the freshest groceries without leaving the comfort of your home."
            step={4}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
