
import { useState } from 'react';
import { motion } from 'framer-motion';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

interface Skill {
  subject: string;
  level: number;
  fullMark: number;
}

const frontendSkills: Skill[] = [
  { subject: 'React', level: 90, fullMark: 100 },
  { subject: 'TypeScript', level: 85, fullMark: 100 },
  { subject: 'CSS/Tailwind', level: 80, fullMark: 100 },
  { subject: 'Next.js', level: 75, fullMark: 100 },
  { subject: 'Testing', level: 70, fullMark: 100 },
];

const backendSkills: Skill[] = [
  { subject: 'Node.js', level: 85, fullMark: 100 },
  { subject: 'Express', level: 80, fullMark: 100 },
  { subject: 'Databases', level: 75, fullMark: 100 },
  { subject: 'APIs', level: 90, fullMark: 100 },
  { subject: 'Security', level: 65, fullMark: 100 },
];

export default function SkillsChart() {
  const [activeTab, setActiveTab] = useState<'frontend' | 'backend'>('frontend');

  return (
    <div className="bg-card rounded-xl shadow-lg p-6">
      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            onClick={() => setActiveTab('frontend')}
            className={`px-4 py-2 text-sm font-medium rounded-l-md ${
              activeTab === 'frontend'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground'
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveTab('backend')}
            className={`px-4 py-2 text-sm font-medium rounded-r-md ${
              activeTab === 'backend'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground'
            }`}
          >
            Backend
          </button>
        </div>
      </div>
      
      <div className="h-[400px] w-full">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart 
              cx="50%" 
              cy="50%" 
              outerRadius="80%" 
              data={activeTab === 'frontend' ? frontendSkills : backendSkills}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name={activeTab === 'frontend' ? 'Frontend' : 'Backend'}
                dataKey="level"
                stroke={activeTab === 'frontend' ? '#14B8A6' : '#6366F1'}
                fill={activeTab === 'frontend' ? '#14B8A680' : '#6366F180'}
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
}
