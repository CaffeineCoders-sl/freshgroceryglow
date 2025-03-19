import React, { useState } from 'react';
import FadeIn from '../animations/FadeIn';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, Truck, ThumbsUp } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: number;
  delay: number;
  color: string;
}

const Step: React.FC<StepProps> = ({ icon, title, description, stepNumber, delay, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <FadeIn delay={delay} className="relative">
      <motion.div 
        className="relative bg-white rounded-xl p-6 shadow-lg transition-all duration-500 overflow-hidden"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: delay * 0.5, duration: 0.6 }}
        whileHover={{ 
          y: -10,
          boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
          transition: { duration: 0.3 }
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{ 
          transformStyle: "preserve-3d", 
          perspective: "1000px" 
        }}
      >
        {/* Background gradient blob */}
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-10 z-0 transition-all duration-700 ease-in-out"
          style={{ 
            background: `radial-gradient(circle at ${isHovered ? '60%' : '40%'} ${isHovered ? '30%' : '50%'}, ${color}, transparent 70%)`,
            transform: isHovered ? 'scale(1.3)' : 'scale(1)'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Step number indicator */}
          <motion.div 
            className="absolute -top-3 -right-3 w-12 h-12"
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <div className="w-full h-full relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" stroke={color} strokeWidth="4" fill="white" />
                <text x="50" y="57" textAnchor="middle" className="text-xl font-bold" fill={color.replace('200', '800')}>
                  {stepNumber}
                </text>
              </svg>
            </div>
          </motion.div>
          
          {/* Icon with animated background */}
          <motion.div 
            className="w-20 h-20 flex items-center justify-center relative mb-6"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="absolute inset-0 rounded-full"
              animate={{ 
                background: isHovered 
                  ? [
                      `conic-gradient(${color}, white)`, 
                      `conic-gradient(white, ${color})`, 
                      `conic-gradient(${color}, white)`
                    ] 
                  : `conic-gradient(${color}, white)`
              }}
              transition={{ 
                duration: 2, 
                repeat: isHovered ? Infinity : 0, 
                ease: "linear" 
              }}
              style={{ opacity: 0.5 }}
            />
            <div className="absolute inset-2 bg-white rounded-full shadow-inner z-10" />
            <div className="relative z-20 text-gray-900">
              {icon}
            </div>
          </motion.div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
          <p className="text-gray-600 max-w-xs">{description}</p>
          
          {/* Interactive button/indicator */}
          <motion.div 
            className="mt-6 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            style={{ background: color }}
          >
            <motion.div 
              className="w-5 h-5 bg-white rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
      
      {stepNumber < 4 && (
        <div className="hidden lg:block absolute top-1/2 left-[calc(100%-1rem)] w-8 h-1 z-0">
          <motion.div
            className="flex items-center w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.4, duration: 0.6 }}
          >
            {/* Animated connection line with dots */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 rounded-full mx-1"
                initial={{ scale: 0, opacity: 0.5 }}
                animate={{ 
                  scale: [0, 1.5, 0],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                style={{ background: color }}
              />
            ))}
            <motion.div 
              className="h-0.5 flex-grow"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ background: color, transformOrigin: "left" }}
            />
          </motion.div>
        </div>
      )}
    </FadeIn>
  );
};

const HowItWorks: React.FC = () => {
  // Modern floating elements for background
  const floatingElements = [
    { size: 'w-24 h-24', top: '10%', left: '5%', delay: 0, duration: 15 },
    { size: 'w-16 h-16', top: '20%', right: '10%', delay: 2, duration: 20 },
    { size: 'w-20 h-20', bottom: '15%', left: '15%', delay: 1, duration: 18 },
    { size: 'w-12 h-12', bottom: '25%', right: '15%', delay: 3, duration: 12 },
  ];
  
  const stepColors = [
    'rgba(134, 239, 172, 0.6)', // green-200
    'rgba(125, 211, 252, 0.6)', // sky-200
    'rgba(253, 186, 116, 0.6)', // orange-200
    'rgba(216, 180, 254, 0.6)', // purple-200
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white z-0"></div>
      
      {/* Animated background elements */}
      {floatingElements.map((el, index) => (
        <motion.div
          key={index}
          className={`absolute ${el.size} rounded-full bg-green-100 opacity-30 blur-3xl`}
          style={{ 
            top: el.top, 
            left: el.left, 
            right: el.right, 
            bottom: el.bottom,
            background: `radial-gradient(circle, ${stepColors[index % stepColors.length]}, transparent)` 
          }}
          animate={{
            y: ["0%", "30%", "0%"],
            x: ["0%", "20%", "0%"],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: el.delay,
          }}
        />
      ))}
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] z-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn direction="up" className="text-center mb-20">
          <div className="inline-block mb-4">
            <motion.div
              className="relative inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <span className="bg-green-100 text-green-800 text-sm font-medium px-4 py-1 rounded-full">How It Works</span>
              <motion.div 
                className="absolute -bottom-1 left-1/2 w-12 h-1 bg-green-400 rounded-full"
                initial={{ width: 0, left: '50%', x: '-50%' }}
                animate={{ width: 48 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.div>
          </div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-emerald-600 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Simple. Fast. Reliable.
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Our streamlined process ensures your groceries arrive fresh at your doorstep with minimal effort.
          </motion.p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 mt-10">
          <Step 
            icon={<Search className="h-8 w-8 text-green-800" />}
            title="Discover & Select"
            description="Browse our curated selection and add items to your cart with a seamless, intuitive interface."
            stepNumber={1}
            delay={0.1}
            color={stepColors[0]}
          />
          
          <Step 
            icon={<ShoppingCart className="h-8 w-8 text-blue-800" />}
            title="We Handpick & Pack"
            description="Our experts select the freshest items, ensuring quality and careful packaging for your order."
            stepNumber={2}
            delay={0.2}
            color={stepColors[1]}
          />
          
          <Step 
            icon={<Truck className="h-8 w-8 text-orange-800" />}
            title="Swift Delivery"
            description="Track your order in real-time as our team delivers it to your doorstep at your preferred time."
            stepNumber={3}
            delay={0.3}
            color={stepColors[2]}
          />
          
          <Step 
            icon={<ThumbsUp className="h-8 w-8 text-purple-800" />}
            title="Enjoy & Repeat"
            description="Experience the freshness, rate your items, and easily reorder your favorites with one click."
            stepNumber={4}
            delay={0.4}
            color={stepColors[3]}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
