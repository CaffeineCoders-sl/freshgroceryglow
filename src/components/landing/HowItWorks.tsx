import React from 'react';
import FadeIn from '../animations/FadeIn';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, Truck, ThumbsUp } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: number;
  delay: number;
}

const Step: React.FC<StepProps> = ({ icon, title, description, stepNumber, delay }) => (
  <FadeIn delay={delay} className="relative">
    <div className="flex flex-col items-center text-center">
      <motion.div 
        className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-6 relative z-10"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="text-gray-900">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">
          {stepNumber}
        </div>
      </motion.div>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 max-w-xs">{description}</p>
    </div>
    
    {stepNumber < 4 && (
      <div className="hidden md:block absolute top-8 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-px bg-gray-200">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-gray-400" 
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </div>
    )}
  </FadeIn>
);

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      {/* Add background image */}
      <div className="absolute inset-0 opacity-5 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
          alt="Grocery pattern" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
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
          
          <Step 
            icon={<Search className="h-8 w-8" />}
            title="Place Your Order"
            description="Browse our selection and add items to your cart. Customize your order based on your preferences."
            stepNumber={1}
            delay={0.1}
          />
          
          <Step 
            icon={<ShoppingCart className="h-8 w-8" />}
            title="We Prepare Your Order"
            description="We handpick the freshest items from local farms and suppliers to ensure quality."
            stepNumber={2}
            delay={0.2}
          />
          
          <Step 
            icon={<Truck className="h-8 w-8" />}
            title="Fast Delivery"
            description="Our delivery team brings your order right to your doorstep at your chosen time slot."
            stepNumber={3}
            delay={0.3}
          />
          
          <Step 
            icon={<ThumbsUp className="h-8 w-8" />}
            title="Enjoy Fresh Groceries"
            description="Unpack and enjoy the freshest groceries without leaving the comfort of your home."
            stepNumber={4}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
