
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBasket, Plus, Minus, Check, X, ShoppingCart, Sparkles } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CartPreview: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-3 shadow-lg z-20"
      >
        <ShoppingCart className="h-6 w-6 text-white" />
      </motion.div>
      
      <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-2xl overflow-hidden p-4 relative transform perspective-1000 rotateY-3 hover:rotateY-0 transition-transform duration-500">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-green-800 flex items-center">
            <ShoppingBasket className="h-5 w-5 mr-2 text-green-600" />
            Your Basket
          </h3>
          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200 flex items-center">
            <Sparkles className="h-3 w-3 mr-1 text-yellow-500" /> Coming Soon
          </Badge>
        </div>
        
        {/* Cart Items */}
        <div className="space-y-3 mb-4">
          <CartItem 
            name="Organic Vegetables Box" 
            price="Rs. 1,200" 
            image="/placeholder.svg" 
            quantity={1}
            delay={0.6}
          />
          <CartItem 
            name="Fresh Fruit Selection" 
            price="Rs. 950" 
            image="/placeholder.svg" 
            quantity={2}
            delay={0.8}
          />
          <CartItem 
            name="Local Farm Eggs" 
            price="Rs. 450" 
            image="/placeholder.svg" 
            quantity={1}
            delay={1}
          />
        </div>
        
        {/* Cart Total */}
        <div className="border-t border-dashed border-green-100 pt-3 mb-4">
          <div className="flex justify-between text-sm text-gray-500 mb-1">
            <span>Subtotal</span>
            <span>Rs. 3,550</span>
          </div>
          <div className="flex justify-between text-sm text-gray-500 mb-1">
            <span>Delivery</span>
            <span className="text-green-600 font-medium">Free</span>
          </div>
          <div className="flex justify-between font-bold text-green-800 mt-2">
            <span>Total</span>
            <span>Rs. 3,550</span>
          </div>
        </div>
        
        {/* Checkout Button */}
        <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium shadow-md">
          <Check className="mr-2 h-4 w-4" /> Checkout
        </Button>
        
        {/* Background decoration */}
        <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-yellow-300 rounded-full opacity-20 z-0"></div>
      </Card>
    </div>
  );
};

interface CartItemProps {
  name: string;
  price: string;
  image: string;
  quantity: number;
  delay: number;
}

const CartItem: React.FC<CartItemProps> = ({ name, price, image, quantity, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-center gap-3 bg-gradient-to-r from-white to-green-50 p-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="h-12 w-12 rounded-md overflow-hidden bg-gradient-to-br from-green-100 to-emerald-50 flex-shrink-0 shadow-inner">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="flex-grow">
        <h4 className="text-sm font-medium text-gray-800">{name}</h4>
        <p className="text-xs text-green-700 font-medium">{price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-1 rounded-full bg-green-100 hover:bg-green-200 transition-colors">
          <Minus className="h-3 w-3 text-green-700" />
        </button>
        <span className="text-sm font-medium w-5 text-center">{quantity}</span>
        <button className="p-1 rounded-full bg-green-100 hover:bg-green-200 transition-colors">
          <Plus className="h-3 w-3 text-green-700" />
        </button>
      </div>
      <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
        <X className="h-3 w-3 text-gray-400" />
      </button>
    </motion.div>
  );
};

export default CartPreview;
