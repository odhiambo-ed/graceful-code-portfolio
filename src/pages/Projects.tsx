
import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/projects/ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  
  // Extract unique tech stack items for filtering
  const techFilters = ['all', ...new Set(projects.flatMap(project => project.techStack))];
  
  // Filter projects based on selected tech
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.techStack.includes(filter));

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-4 text-center"
      >
        Hobby Projects
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto"
      >
        A collection of side projects and experiments I've built to explore new technologies and solve interesting problems.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 flex flex-wrap justify-center gap-2"
      >
        {techFilters.map((tech) => (
          <button
            key={tech}
            onClick={() => setFilter(tech)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              filter === tech 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-card hover:bg-muted'
            }`}
          >
            {tech}
          </button>
        ))}
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            techStack={project.techStack}
            imageUrl={project.imageUrl}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
            index={index}
          />
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground">No projects match the selected filter.</p>
          <button
            onClick={() => setFilter('all')}
            className="mt-4 text-primary hover:underline"
          >
            Clear filter
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
