
import { motion } from 'framer-motion';

interface TechStackProps {
  technologies: { name: string; icon: string }[];
}

export default function TechStack({ technologies }: TechStackProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-card p-3 shadow-md">
            <img src={tech.icon} alt={tech.name} className="max-w-full max-h-full" />
          </div>
          <span className="mt-2 text-sm font-medium">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
}
