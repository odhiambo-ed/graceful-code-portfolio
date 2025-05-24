
import { motion } from 'framer-motion';
import Terminal from '@/components/about/Terminal';

const Bio = () => {
  return (
    <div className="container mx-auto px-2 md:px-4 py-6 md:py-10 min-h-[calc(100vh-64px)]">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center"
      >
        <img
          src="/images/edward-logo.png"
          alt="Logo"
          className="inline-block h-20 w-auto"
        />
      </motion.h1>
      
      <div className="w-full h-[calc(100vh-200px)]">
        <Terminal />
      </div>
    </div>
  );
};

export default Bio;
