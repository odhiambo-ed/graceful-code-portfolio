
import React from 'react';
import { motion } from 'framer-motion';
import { Construction } from 'lucide-react';

const ComingSoon = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center text-center h-[70vh]"
      >
        <Construction className="w-20 h-20 text-primary mb-6" />
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-gradient">Coming Soon</span>
        </h1>

        <p className="text-lg md:text-xl mb-8 max-w-md mx-auto">
          We're working hard to bring you something amazing. Please check back later!
        </p>

        <div className="relative w-full max-w-md h-2 bg-muted rounded-full overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary"
            initial={{ width: 0 }}
            animate={{ 
              width: ['0%', '40%', '60%', '80%', '60%', '40%', '60%', '80%'],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
