
import React from 'react';
import FadeIn from '../animations/FadeIn';
import { motion } from 'framer-motion';
import { ShoppingBasket, Check, Star, Tag, ShoppingCart, Sparkles, Zap, Target } from 'lucide-react';
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
      whileHover={{ 
        y: -10,
        rotateY: 5,
        transition: { duration: 0.5 }
      }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 border border-green-100 h-full perspective-1000 transform-gpu will-change-transform"
    >
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-50 flex items-center justify-center overflow-hidden">
          <motion.img 
            src={imageSrc} 
            alt={title} 
            className="h-full w-full object-cover"
            whileHover={{ 
              scale: 1.1,
              filter: "brightness(1.1)",
              transition: { duration: 0.5 }
            }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            whileHover={{ opacity: 1 }}
          />
        </div>
        <div className="absolute top-2 right-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs px-3 py-1 rounded-full flex items-center shadow-lg">
          <Sparkles className="h-3 w-3 mr-1 text-yellow-300 animate-pulse" /> Coming Soon
        </div>
        {isBestSeller && (
          <div className="absolute top-2 left-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow-lg transform-gpu hover:scale-105 transition-transform duration-300">
            <Star className="h-3 w-3 fill-white" /> Best Seller
          </div>
        )}
      </div>
      <div className="p-6 relative z-10">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">{title}</h3>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, rotate: 180 }}
                transition={{ duration: 0.2 }}
              >
                <Star key={i} className={`h-3 w-3 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
              </motion.div>
            ))}
          </div>
        </div>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-end gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">{price}</span>
            {originalPrice && (
              <span className="text-sm text-gray-400 line-through">{originalPrice}</span>
            )}
          </div>
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-100 shadow-sm transform hover:translate-y-[-2px] hover:shadow-md transition-all duration-300">
            <Tag className="h-3 w-3 mr-1" /> Fresh
          </Badge>
        </div>
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <motion.li 
              key={index} 
              className="flex items-start gap-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <div className="bg-green-100 rounded-full p-0.5 mt-0.5">
                <Check className="h-3 w-3 text-green-600" />
              </div>
              <span className="text-gray-700 text-xs">{feature}</span>
            </motion.li>
          ))}
        </ul>
        <Button className="relative w-full overflow-hidden group">
          <span className="absolute inset-0 w-0 h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500 ease-out group-hover:w-full"></span>
          <span className="relative flex items-center justify-center text-green-600 group-hover:text-white transition-colors duration-300 ease-out">
            <ShoppingCart className="h-4 w-4 mr-2 transform group-hover:scale-110 transition-transform duration-300" /> 
            <span>Add to Basket</span>
          </span>
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </motion.div>
  </FadeIn>
);

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Innovative layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-green-50 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div 
          animate={{ 
            y: [0, 30, 0], 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1]
          }} 
          transition={{ 
            repeat: Infinity, 
            duration: 20,
            ease: "easeInOut" 
          }}
          className="absolute -top-20 right-1/4 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        ></motion.div>
        <motion.div 
          animate={{ 
            y: [30, 0, 30], 
            opacity: [0.2, 0.3, 0.2],
            scale: [1.1, 1, 1.1]
          }} 
          transition={{ 
            repeat: Infinity, 
            duration: 15,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        ></motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-green-200 rounded-lg opacity-40 transform rotate-45"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-green-200 rounded-full opacity-20"></div>
      <div className="absolute top-1/2 right-0 w-40 h-40 -mr-20 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn direction="up" className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-400/20 backdrop-blur-sm border border-green-200/50 text-green-700 text-sm font-medium mb-4 shadow-sm">
            <Target className="h-4 w-4 mr-2 text-green-600" />
            Our Premium Selection
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
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
            imageSrc="/placeholder.svg"
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
            imageSrc="/placeholder.svg"
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
            imageSrc="/placeholder.svg"
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
