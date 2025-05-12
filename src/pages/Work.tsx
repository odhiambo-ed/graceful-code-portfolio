
import { motion } from 'framer-motion';
import { workProjects } from '@/data/work';
import { ExternalLink } from 'lucide-react';

const Work = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-4 text-center"
      >
        Work & Career Projects
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto"
      >
        A showcase of professional projects I've developed throughout my career, highlighting my expertise and experience.
      </motion.p>
      
      <div className="space-y-16">
        {workProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-card rounded-lg overflow-hidden shadow-lg"
          >
            <div className="lg:flex">
              {project.imageUrl && (
                <div className="lg:w-2/5">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}
              
              <div className="p-8 lg:w-3/5">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">{project.title}</h2>
                    <p className="text-muted-foreground">{project.company} | {project.year}</p>
                  </div>
                  <span className="bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-sm">
                    {project.role}
                  </span>
                </div>
                
                <p className="mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Responsibilities:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {project.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-muted text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <span>View Project</span>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;
