
import React from 'react';
import FadeIn from '../animations/FadeIn';
import { ShoppingBasket, Check } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  delay: number;
  features: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, imageSrc, delay, features }) => (
  <FadeIn delay={delay} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div className="relative">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img 
          src={imageSrc} 
          alt={title} 
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
        Coming Soon
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-green-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </FadeIn>
);

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <FadeIn direction="up" className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ShoppingBasket className="h-8 w-8 text-green-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-green-800">
              What We'll Offer
            </h2>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            From farm-fresh vegetables to premium meat and dairy, we're bringing the best quality groceries straight to your door.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard 
            title="Fresh Produce Box"
            description="Weekly curated box of seasonal fruits and vegetables from local farms."
            imageSrc="/placeholder.svg"
            delay={0.1}
            features={[
              "100% organic options available",
              "Locally sourced whenever possible",
              "Harvested within 24 hours of delivery",
              "Customizable based on preferences"
            ]}
          />
          
          <ProductCard 
            title="Premium Meat & Seafood"
            description="High-quality, ethically sourced meat and seafood for your family."
            imageSrc="/placeholder.svg"
            delay={0.2}
            features={[
              "Free-range and grass-fed options",
              "Sustainably caught seafood",
              "Vacuum-sealed for freshness",
              "Restaurant-quality cuts"
            ]}
          />
          
          <ProductCard 
            title="Dairy & Essentials"
            description="Farm-fresh dairy products and pantry essentials delivered to your door."
            imageSrc="/placeholder.svg"
            delay={0.3}
            features={[
              "Fresh milk from local dairies",
              "Artisanal cheeses and butter",
              "Organic eggs from free-range chickens",
              "Baked goods from local bakeries"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
