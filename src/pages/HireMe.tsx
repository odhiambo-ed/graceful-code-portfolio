
import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const HireMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    workType: '',
    description: '',
    budget: '',
    startDate: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  // Form submission is now handled by formsubmit.co

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-4 text-center"
      >
        Work with Me
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto"
      >
        Interested in working together? Fill out the form below, and I'll get back to you as soon as possible.
      </motion.p>
      
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card rounded-lg p-8 shadow-lg"
        >
          <form action="https://formsubmit.co/odhiamboedward.ouma@gmail.com" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="workType" className="block text-sm font-medium mb-2">
                Type of Work *
              </label>
              <select
                id="workType"
                name="workType"
                required
                value={formData.workType}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="" disabled>Select an option</option>
                <option value="Freelance">Freelance</option>
                <option value="Contract">Contract</option>
                <option value="Full-time">Full-time</option>
                <option value="Consultation">Consultation</option>
                <option value="Project">Project</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-2">
                Project Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Please describe your project or requirements"
              />
            </div>
            
            <div>
              <label htmlFor="budget" className="block text-sm font-medium mb-2">
                Budget (optional)
              </label>
              <input
                id="budget"
                name="budget"
                type="text"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your budget range"
              />
            </div>
            
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium mb-2">
                Preferred Start Date (optional)
              </label>
              <input
                id="startDate"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-md font-medium ${
                isSubmitting 
                  ? 'bg-primary/70 text-primary-foreground/70 cursor-not-allowed'
                  : 'bg-primary text-primary-foreground hover:bg-primary/90 transition-colors'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Submit Request'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default HireMe;
