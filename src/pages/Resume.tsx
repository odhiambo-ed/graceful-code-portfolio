
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const Resume = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl font-bold mb-4">My Resume</h1>
        <div className="flex justify-center">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            <FileText size={20} />
            Download Resume (PDF)
          </a>
        </div>
      </motion.div>
      
      <div className="bg-card shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold mb-2">John Doe</h2>
          <p className="text-muted-foreground">Full Stack Developer</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Email:</span>
              <a href="mailto:john@example.com" className="text-primary hover:underline">john@example.com</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Location:</span>
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Portfolio:</span>
              <a href="https://johndoe.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">johndoe.dev</a>
            </div>
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b">Professional Experience</h2>
          
          <div className="mb-6">
            <div className="flex justify-between flex-wrap mb-1">
              <h3 className="text-lg font-medium">Senior Frontend Developer</h3>
              <span className="text-sm text-muted-foreground">2021 - Present</span>
            </div>
            <p className="text-primary font-medium mb-2">TechCorp Inc.</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Led development of company's flagship React-based web application</li>
              <li>Improved site performance by 40% through code optimization and lazy loading</li>
              <li>Mentored junior developers and conducted code reviews</li>
              <li>Implemented CI/CD pipeline reducing deployment time by 60%</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between flex-wrap mb-1">
              <h3 className="text-lg font-medium">Full Stack Developer</h3>
              <span className="text-sm text-muted-foreground">2019 - 2021</span>
            </div>
            <p className="text-primary font-medium mb-2">WebSolutions Ltd</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Developed responsive web applications using React and Node.js</li>
              <li>Created RESTful APIs and implemented authentication systems</li>
              <li>Worked directly with clients to gather requirements and provide updates</li>
              <li>Integrated third-party APIs and services</li>
            </ul>
          </div>
          
          <div>
            <div className="flex justify-between flex-wrap mb-1">
              <h3 className="text-lg font-medium">Junior Web Developer</h3>
              <span className="text-sm text-muted-foreground">2017 - 2019</span>
            </div>
            <p className="text-primary font-medium mb-2">StartupHub</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Built and maintained client websites using JavaScript, HTML, and CSS</li>
              <li>Collaborated with designers to implement pixel-perfect UI</li>
              <li>Optimized websites for maximum speed and scalability</li>
            </ul>
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10"
        >
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b">Education</h2>
          
          <div>
            <div className="flex justify-between flex-wrap mb-1">
              <h3 className="text-lg font-medium">Bachelor of Science in Computer Science</h3>
              <span className="text-sm text-muted-foreground">2013 - 2017</span>
            </div>
            <p className="text-primary font-medium">University of Technology</p>
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-10"
        >
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Frontend</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>JavaScript (ES6+), TypeScript</li>
                <li>React, Next.js, Vue.js</li>
                <li>Redux, Context API, React Query</li>
                <li>HTML5, CSS3, Tailwind CSS, SCSS</li>
                <li>Jest, React Testing Library</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Backend</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Node.js, Express</li>
                <li>REST APIs, GraphQL</li>
                <li>MongoDB, PostgreSQL</li>
                <li>Authentication, JWT</li>
                <li>AWS, Docker, CI/CD</li>
              </ul>
            </div>
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b">Certifications</h2>
          
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>AWS Certified Developer - Associate</li>
            <li>MongoDB Certified Developer</li>
            <li>Google Professional Web Developer</li>
          </ul>
        </motion.section>
      </div>
    </div>
  );
};

export default Resume;
