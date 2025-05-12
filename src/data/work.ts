
import { WorkProject } from '@/types/work';

export const workProjects: WorkProject[] = [
  {
    id: '1',
    title: 'E-commerce Platform Redesign',
    description: 'Complete redesign and development of a major e-commerce platform, focusing on user experience and conversion optimization.',
    role: 'Lead Frontend Developer',
    responsibilities: [
      'Designed and implemented the new user interface',
      'Created reusable component library',
      'Optimized site performance',
      'Led team of 3 frontend developers'
    ],
    techStack: ['React', 'TypeScript', 'GraphQL', 'Styled Components'],
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    demoUrl: 'https://ecommerce-project.com',
    year: '2022',
    company: 'ShopifyPlus',
  },
  {
    id: '2',
    title: 'Financial Dashboard Application',
    description: 'Developed a comprehensive financial dashboard for internal use by financial advisors to track client investments and performance.',
    role: 'Full Stack Developer',
    responsibilities: [
      'Built data visualization components',
      'Implemented authentication system',
      'Created API endpoints',
      'Integrated with financial data providers'
    ],
    techStack: ['Next.js', 'Express', 'MongoDB', 'D3.js'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    year: '2021',
    company: 'FinTech Solutions',
  },
  {
    id: '3',
    title: 'Healthcare Patient Portal',
    description: 'Built a HIPAA-compliant patient portal allowing patients to schedule appointments, view medical records, and communicate with healthcare providers.',
    role: 'Backend Developer',
    responsibilities: [
      'Designed database schema',
      'Implemented security and compliance measures',
      'Created REST API',
      'Managed AWS infrastructure'
    ],
    techStack: ['Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    demoUrl: 'https://health-portal-demo.com',
    year: '2020',
    company: 'MediTech Systems',
  },
];
