
import { motion } from 'framer-motion';
import Terminal from '@/components/about/Terminal';
import SkillsChart from '@/components/charts/SkillsChart';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-10 text-center"
      >
        About Me
      </motion.h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <Terminal />
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-card rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4">My Journey</h2>
            <p className="mb-4">
              I'm a passionate full-stack developer with over 5 years of experience building web applications. I started my coding journey with HTML and CSS, and gradually progressed to JavaScript and modern frameworks.
            </p>
            <p>
              My focus is on creating performant, accessible, and user-friendly applications. I enjoy solving complex problems and continuously learning new technologies to improve my skills.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4">What I Do</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Develop responsive and interactive web applications</li>
              <li>Create RESTful and GraphQL APIs</li>
              <li>Design and optimize databases</li>
              <li>Implement authentication and security measures</li>
              <li>Optimize performance and accessibility</li>
            </ul>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Beyond Coding</h2>
            <p>
              When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new cooking recipes. I also enjoy contributing to open-source projects and mentoring aspiring developers.
            </p>
          </div>
        </motion.div>
      </div>
      
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">My Skills</h2>
        <SkillsChart />
      </motion.section>
    </div>
  );
};

export default About;
