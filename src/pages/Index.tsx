
import { motion } from 'framer-motion';
import Terminal from '@/components/about/Terminal';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      
      {/* Callout Banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-accent/20 border border-accent rounded-lg p-4 md:p-6 mb-8 text-center"
      >
        <p className="text-lg md:text-xl font-medium">
          Looking to break into tech, level up your code, or introduce your child to coding? I offer personalized, hands‑on mentorship for career switchers, beginners, and kids—taught by a senior dev with real industry experience.
        </p>
        <Link 
          to="mentorship" 
          className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
        >
          Explore Programs <ArrowRight size={16} />
        </Link>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Terminal Column */}
        <div className="h-[calc(100vh-350px)] lg:h-[calc(100vh-300px)]">
          <Terminal />
        </div>
        
        {/* Mentorship Column */}
        <div id="mentorship" className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">Mentorship Programs</h2>
                <p className="text-muted-foreground mb-6">
                  Personalized guidance to help you achieve your coding goals, whether you're starting from scratch or looking to level up your skills.
                </p>
              </div>
              <img 
                src="/images/edward-teaching.jpeg" 
                alt="Edward mentoring" 
                className="w-32 h-32 rounded-full object-cover border-4 border-primary hidden md:block" 
              />
            </div>
            
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-2">Startup Founders (Non-Tech Entrepreneurs)</h3>
                <p className="text-muted-foreground mb-4">Perfect for founders who need technical guidance to bring their vision to life.</p>
                <div className="bg-accent/10 p-4 rounded-md">
                  <h4 className="font-medium">Program: MVP Sprint – Build & Launch Your Idea</h4>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-2">Career Switchers</h3>
                <p className="text-muted-foreground mb-4">For professionals looking to transition into tech with practical, job-ready skills.</p>
                <div className="bg-accent/10 p-4 rounded-md">
                  <h4 className="font-medium">Programs: Code Reset Intro (4 weeks) & Code Reset Core (5 months)</h4>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-2">Aspiring Developers (18-25 Yrs)</h3>
                <p className="text-muted-foreground mb-4">Build a solid foundation and portfolio to launch your development career.</p>
                <div className="bg-accent/10 p-4 rounded-md">
                  <h4 className="font-medium">Programs: Code Reset Intro & Code Reset Core</h4>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-2">Kids & Teens (Ages 8–18)</h3>
                <p className="text-muted-foreground mb-4">Fun, engaging coding education tailored to young minds and their interests.</p>
                <div className="bg-accent/10 p-4 rounded-md">
                  <h4 className="font-medium">Programs: CodePlay & Holiday Camp</h4>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-2">Bootcamp Grads / Junior Devs</h3>
                <p className="text-muted-foreground mb-4">For bootcamp graduates, juniors feeling stuck, or devs looking to rebuild their portfolio with real projects.</p>
                <div className="bg-accent/10 p-4 rounded-md">
                  <h4 className="font-medium">Program: Code Reset Pro (Monthly)</h4>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
