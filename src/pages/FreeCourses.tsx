
import { motion } from 'framer-motion';
import { freeCourses } from '@/data/courses';
import { ArrowRight, Clock } from 'lucide-react';

const FreeCourses = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-4 text-center"
      >
        Free Courses & Resources
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto"
      >
        Learning resources I've created to help fellow developers level up their skills. All completely free!
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {freeCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card rounded-lg overflow-hidden shadow-lg flex flex-col"
          >
            <img 
              src={course.imageUrl} 
              alt={course.title} 
              className="w-full h-48 object-cover object-center"
            />
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold">{course.title}</h2>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    course.level === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                    course.level === 'Intermediate' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' :
                    'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
                  }`}>
                    {course.level}
                  </span>
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Clock size={14} className="mr-1" />
                  <span>{course.duration}</span>
                </div>
                
                <p className="text-muted-foreground mb-4">{course.description}</p>
                
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Topics covered:</h3>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic) => (
                      <span 
                        key={topic}
                        className="text-xs bg-muted px-2 py-1 rounded-md"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <a 
                href={course.url} 
                className="flex items-center justify-center gap-2 w-full mt-4 bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                <span>Start Learning</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FreeCourses;
