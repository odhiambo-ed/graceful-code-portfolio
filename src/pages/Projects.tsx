
import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { workProjects } from '@/data/work';
import ProjectCard from '@/components/projects/ProjectCard';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'hobby' | 'work'>('hobby');
  
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
        Projects
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto"
      >
        A showcase of my personal and professional projects, highlighting my skills and experience.
      </motion.p>
      
      {/* Tab navigation */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm">
          <button
            onClick={() => setActiveTab('hobby')}
            className={`px-6 py-2 text-sm font-medium rounded-l-md ${activeTab === 'hobby' 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-card hover:bg-muted'}`}
          >
            Hobby Projects
          </button>
          <button
            onClick={() => setActiveTab('work')}
            className={`px-6 py-2 text-sm font-medium rounded-r-md ${activeTab === 'work' 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-card hover:bg-muted'}`}
          >
            Work Projects
          </button>
        </div>
      </div>
      
      {/* Hobby Projects Section */}
      {activeTab === 'hobby' && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
        </>
      )}
      
      {/* Work Projects Section */}
      {activeTab === 'work' && (
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
      )}
    </div>
  );
};

export default Projects;
