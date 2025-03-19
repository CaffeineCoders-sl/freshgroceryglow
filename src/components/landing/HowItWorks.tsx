import React from 'react';
import FadeIn from '../animations/FadeIn';
import { Search, ShoppingCart, Truck, ThumbsUp } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: number;
}

const Step: React.FC<StepProps> = ({ icon, title, description, stepNumber }) => {
  return (
    <div className="relative">
      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 h-full">
        {/* Simple step number indicator */}
        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-black shadow-md flex items-center justify-center">
          <span className="font-bold text-white">{stepNumber}</span>
        </div>
        
        {/* Simple content layout */}
        <div className="flex flex-col items-center text-center">
          {/* Simple icon with background */}
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gray-100">
            <div className="text-black">
              {icon}
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-black">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      
      {/* Simple connector line */}
      {stepNumber < 4 && (
        <div className="hidden lg:block absolute top-1/2 left-[calc(100%-1rem)] right-8 h-0.5 bg-gray-300 z-0">
        </div>
      )}
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-black text-white text-sm font-medium px-4 py-1 rounded-full">
            How It Works
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-4 mb-4">
            Simple. Fast. Reliable.
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures your groceries arrive fresh at your doorstep with minimal effort.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <Step 
            icon={<Search className="h-6 w-6 text-gray-800" />}
            title="Discover & Select"
            description="Browse our curated selection and add items to your cart with a seamless interface."
            stepNumber={1}
          />
          
          <Step 
            icon={<ShoppingCart className="h-6 w-6 text-gray-800" />}
            title="We Handpick & Pack"
            description="Our experts select the freshest items, ensuring quality and careful packaging for your order."
            stepNumber={2}
          />
          
          <Step 
            icon={<Truck className="h-6 w-6 text-gray-800" />}
            title="Swift Delivery"
            description="Track your order as our team delivers it to your doorstep at your preferred time."
            stepNumber={3}
          />
          
          <Step 
            icon={<ThumbsUp className="h-6 w-6 text-gray-800" />}
            title="Enjoy & Repeat"
            description="Experience the freshness, rate your items, and easily reorder your favorites with one click."
            stepNumber={4}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
