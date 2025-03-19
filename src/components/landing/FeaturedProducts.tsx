import React from 'react';
import FadeIn from '../animations/FadeIn';
import { motion } from 'framer-motion';
import { Check, Star, Tag, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  delay: number;
  features: string[];
  price: string;
  originalPrice?: string;
  rating: number;
  isBestSeller?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  title, 
  description, 
  imageSrc, 
  delay, 
  features, 
  price, 
  originalPrice, 
  rating,
  isBestSeller
}) => (
  <FadeIn delay={delay} className="group">
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 border border-gray-100 h-full"
    >
      <div className="relative">
        <div className="h-48 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute top-2 right-2 bg-black/80 text-white text-xs px-3 py-1 rounded-full">
          Coming Soon
        </div>
        {isBestSeller && (
          <div className="absolute top-2 left-2 bg-white/90 text-black text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
            <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" /> Best Seller
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-3 w-3 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
            ))}
          </div>
        </div>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-end gap-2">
            <span className="text-xl font-bold text-gray-900">{price}</span>
            {originalPrice && (
              <span className="text-sm text-gray-400 line-through">{originalPrice}</span>
            )}
          </div>
          <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-200">
            <Tag className="h-3 w-3 mr-1" /> Fresh
          </Badge>
        </div>
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li 
              key={index} 
              className="flex items-start gap-2"
            >
              <div className="bg-gray-100 rounded-full p-0.5 mt-0.5">
                <Check className="h-3 w-3 text-gray-600" />
              </div>
              <span className="text-gray-700 text-xs">{feature}</span>
            </li>
          ))}
        </ul>
        <Button className="relative w-full bg-black text-white hover:bg-gray-800">
          <ShoppingCart className="h-4 w-4 mr-2" /> 
          Add to Basket
        </Button>
      </div>
    </motion.div>
  </FadeIn>
);

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn direction="up" className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-medium mb-4">
            Our Premium Selection
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover What We'll Offer
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            From farm-fresh vegetables to premium meat and dairy, we're bringing the best quality groceries straight to your door.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard 
            title="Fresh Produce Box"
            description="Weekly curated box of seasonal fruits and vegetables from local farms."
            imageSrc="https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
            delay={0.1}
            price="Rs. 1,200"
            originalPrice="Rs. 1,500"
            rating={5}
            isBestSeller={true}
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
            imageSrc="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
            delay={0.2}
            price="Rs. 2,500"
            rating={4}
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
            imageSrc="https://images.unsplash.com/photo-1559598467-f8b76c8155d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
            delay={0.3}
            price="Rs. 1,800"
            originalPrice="Rs. 2,000"
            rating={4.5}
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
