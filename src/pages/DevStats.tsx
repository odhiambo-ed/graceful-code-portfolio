
import React from 'react';
import { motion } from 'framer-motion';

const DevStats = () => {
  return (
    <div className="container mx-auto px-2 md:px-4 py-6 md:py-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-center"
      >
        Dev Stats
      </motion.h1>
      
      <motion.div
        className="grid grid-cols-1 gap-6 md:gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-card p-4 md:p-6 rounded-lg shadow-lg">
          <h2 className="text-lg md:text-xl font-bold mb-4 text-center">GitHub Stats</h2>
          <div className="flex flex-col items-center space-y-6">
            <a href="https://github.com/odhiambo-ed" target="_blank" rel="noopener noreferrer" className="w-full">
              <img 
                src="https://github-readme-stats.vercel.app/api/?username=odhiambo-ed&count_private=true&theme=tokyonight&showicons=true" 
                alt="GitHub Stats" 
                className="w-full max-w-2xl mx-auto rounded-lg"
              />
            </a>
            
            <a href="https://github.com/odhiambo-ed" target="_blank" rel="noopener noreferrer" className="w-full">
              <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=odhiambo-ed&langs_count=5&theme=tokyonight" 
                alt="Language Stats" 
                className="w-full max-w-2xl mx-auto rounded-lg"
              />
            </a>
            
            <a href="https://github.com/odhiambo-ed" target="_blank" rel="noopener noreferrer" className="w-full overflow-x-auto">
              <img 
                src="https://github-profile-trophy.vercel.app/?username=odhiambo-ed&theme=matrix&margin-w=15" 
                alt="GitHub Trophies" 
                className="w-full max-w-3xl mx-auto rounded-lg"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DevStats;
