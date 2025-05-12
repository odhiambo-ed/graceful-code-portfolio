
interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  features: string[];
  link: string;
}

export const products: Product[] = [
  {
    id: '1',
    title: 'React Component Library',
    description: 'A comprehensive library of customizable React components to speed up your development.',
    price: 49.99,
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    features: [
      '50+ customizable components',
      'TypeScript support',
      'Theme customization',
      'Accessibility focused',
      'Comprehensive documentation',
    ],
    link: '/products/react-components',
  },
  {
    id: '2',
    title: 'Developer Portfolio Template',
    description: 'A modern, responsive portfolio template designed for developers to showcase their work.',
    price: 29.99,
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    features: [
      'Next.js & Tailwind CSS',
      'Ready to deploy',
      'Dark/Light mode',
      'Project showcases',
      'SEO optimized',
    ],
    link: '/products/portfolio-template',
  },
  {
    id: '3',
    title: 'Frontend Developer Roadmap',
    description: 'A comprehensive guide and learning path to become a professional frontend developer.',
    price: 19.99,
    imageUrl: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    features: [
      'Step-by-step learning path',
      'Resource recommendations',
      'Project ideas',
      'Interview preparation',
      'Career advice',
    ],
    link: '/products/frontend-roadmap',
  },
];
