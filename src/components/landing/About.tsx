
import React from 'react';
import FadeIn from '../animations/FadeIn';
import { Leaf, TruckIcon, Clock } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => (
  <FadeIn delay={delay} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex flex-col items-center text-center">
      <div className="h-14 w-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-green-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </FadeIn>
);

const About: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
            FreshPick.lk brings the freshest groceries straight from local farms to your table. Launching soon!
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <FeatureCard 
            icon={<Leaf className="h-8 w-8" />}
            title="Farm Fresh"
            description="We source directly from local farmers to ensure you get the freshest produce possible."
            delay={0.1}
          />
          <FeatureCard 
            icon={<TruckIcon className="h-8 w-8" />}
            title="Fast Delivery"
            description="Our efficient delivery system ensures your groceries arrive at your doorstep in no time."
            delay={0.2}
          />
          <FeatureCard 
            icon={<Clock className="h-8 w-8" />}
            title="Convenient Scheduling"
            description="Choose delivery times that fit your schedule, including same-day delivery options."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
