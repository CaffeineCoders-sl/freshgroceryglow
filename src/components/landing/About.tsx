import React from 'react';
import FadeIn from '../animations/FadeIn';
import { Leaf, TruckIcon, Clock } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  imageSrc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay, imageSrc }) => (
  <FadeIn delay={delay} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="h-40 overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-10 w-10 bg-gray-100 text-gray-800 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  </FadeIn>
);

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              FreshPick.lk brings the freshest groceries straight from local farms to your table
            </h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We're launching soon to revolutionize how you shop for fresh produce in Sri Lanka
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <FeatureCard 
            icon={<Leaf className="h-5 w-5" />}
            title="Farm Fresh"
            description="We source directly from local farmers to ensure you get the freshest produce possible."
            delay={0.1}
            imageSrc="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          />
          <FeatureCard 
            icon={<TruckIcon className="h-5 w-5" />}
            title="Fast Delivery"
            description="Our efficient delivery system ensures your groceries arrive at your doorstep in no time."
            delay={0.2}
            imageSrc="https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          />
          <FeatureCard 
            icon={<Clock className="h-5 w-5" />}
            title="Convenient Scheduling"
            description="Choose delivery times that fit your schedule, including same-day delivery options."
            delay={0.3}
            imageSrc="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1768&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
