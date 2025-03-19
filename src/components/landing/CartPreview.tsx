import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ShoppingBasket, Plus, Minus, Check, X, ShoppingCart, Sparkles, ArrowRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface CartItemProps {
  name: string;
  price: string;
  image: string;
  quantity: number;
  delay: number;
}

const CartItem: React.FC<CartItemProps> = ({ name, price, image, quantity, delay }) => {
  const controls = useAnimation();
  
  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 0, x: -20 });
      await controls.start({ opacity: 1, x: 0, transition: { delay, duration: 0.5 } });
    };
    sequence();
  }, [controls, delay]);

  return (
    <motion.div 
      animate={controls}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
        transition: { duration: 0.2 }
      }}
      className="flex items-center gap-3 bg-gradient-to-r from-white to-green-50 p-2 rounded-lg shadow-sm transition-all duration-300 border border-green-100/50"
    >
      <motion.div 
        className="h-12 w-12 rounded-md overflow-hidden bg-gradient-to-br from-green-100 to-emerald-50 flex-shrink-0 shadow-inner"
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      >
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </motion.div>
      <div className="flex-grow">
        <h4 className="text-sm font-medium text-gray-800">{name}</h4>
        <p className="text-xs bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent font-medium">{price}</p>
      </div>
      <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm p-1 rounded-full shadow-sm">
        <motion.button 
          className="p-1 rounded-full bg-green-100 hover:bg-green-200 transition-colors"
          whileTap={{ scale: 0.9 }}
        >
          <Minus className="h-3 w-3 text-green-700" />
        </motion.button>
        <span className="text-sm font-medium w-5 text-center">{quantity}</span>
        <motion.button 
          className="p-1 rounded-full bg-green-100 hover:bg-green-200 transition-colors"
          whileTap={{ scale: 0.9 }}
        >
          <Plus className="h-3 w-3 text-green-700" />
        </motion.button>
      </div>
      <motion.button 
        className="p-1 rounded-full hover:bg-gray-100 transition-colors"
        whileHover={{ rotate: 90, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.9 }}
      >
        <X className="h-3 w-3 text-gray-400" />
      </motion.button>
    </motion.div>
  );
};

const CartPreview: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovering) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element
    
    // Calculate rotation based on mouse position
    // Limit the rotation to a small range (e.g., -5 to 5 degrees)
    const rotateY = ((x / rect.width) - 0.5) * 10; // -5 to 5 degrees
    const rotateX = ((y / rect.height) - 0.5) * -10; // 5 to -5 degrees
    
    setRotation({ x: rotateX, y: rotateY });
  };

  return (
    <div 
      className="relative w-full h-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setRotation({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute -top-6 -right-6 bg-black rounded-full p-3 shadow-lg z-30"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)"
        }}
      >
        <ShoppingCart className="h-6 w-6 text-white" />
      </motion.div>
      
      <motion.div
        style={{ 
          transformStyle: "preserve-3d",
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
        }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="relative z-20"
      >
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-2xl overflow-hidden p-4 relative transform transition-all duration-500">
          {/* 3D layered effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-50 z-0"></div>
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent z-0"></div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-green-800 flex items-center">
                <ShoppingBasket className="h-5 w-5 mr-2 text-green-600" />
                Your Basket
              </h3>
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200 flex items-center shadow-sm">
                <Sparkles className="h-3 w-3 mr-1 text-yellow-500 animate-pulse" /> Coming Soon
              </Badge>
            </div>
            
            {/* Cart Items */}
            <div className="space-y-3 mb-4 relative">
              {/* Decorative elements */}
              <div className="absolute -left-2 top-1/2 w-1 h-10 bg-gradient-to-b from-green-300 to-transparent rounded-full opacity-50"></div>
              <div className="absolute -right-2 top-1/3 w-1 h-10 bg-gradient-to-b from-yellow-300 to-transparent rounded-full opacity-50"></div>
              
              <CartItem 
                name="Organic Fresh Vegetables Mix"
                price="Rs. 450"
                quantity={1}
                image="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
                delay={0.2}
              />
              <CartItem 
                name="Farm Fresh Eggs (6 pcs)"
                price="Rs. 220"
                quantity={2}
                image="https://images.unsplash.com/photo-1506976785307-8732e854ad03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
                delay={0.3}
              />
              <CartItem 
                name="Organic Bananas"
                price="Rs. 180"
                quantity={1}
                image="https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
                delay={0.4}
              />
              <CartItem 
                name="Fresh Milk (1L)"
                price="Rs. 290"
                quantity={1}
                image="https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                delay={0.5}
              />
            </div>
            
            {/* Cart Total with animated line */}
            <div className="relative pt-3 mb-4">
              <motion.div 
                className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-300 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
              
              <div className="flex justify-between text-sm text-gray-500 mb-1">
                <span>Subtotal</span>
                <span>Rs. 1,360</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mb-1">
                <span>Delivery</span>
                <motion.span 
                  className="text-green-600 font-medium"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [1, 0.8, 1]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 2,
                    repeatType: "reverse"
                  }}
                >
                  Rs. 150
                </motion.span>
              </div>
              <div className="flex justify-between font-bold mt-2">
                <span className="text-green-800">Total</span>
                <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">Rs. 1,510</span>
              </div>
            </div>
            
            {/* Checkout Button */}
            <Button className="w-full bg-black hover:bg-black/80 text-white font-medium shadow-md group relative overflow-hidden">
              <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-500 ease-out group-hover:w-full"></span>
              <span className="relative z-10 flex items-center">
                <Check className="mr-2 h-4 w-4" /> 
                Checkout
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
          
          {/* Background decoration */}
          <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-yellow-300 rounded-full opacity-20 z-0"></div>
        </Card>
      </motion.div>
      
      {/* Shadow effect that responds to card tilt */}
      <div 
        className="absolute inset-0 rounded-2xl bg-black/10 blur-xl -z-10"
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x * 0.5}deg) rotateY(${rotation.y * 0.5}deg) translateZ(-50px)`,
          opacity: 0.4
        }}
      ></div>
    </div>
  );
};

export default CartPreview;
