
import { Course } from '@/types/course';

export const freeCourses: Course[] = [
  {
    id: '1',
    title: 'React Fundamentals',
    description: 'Learn the basics of React, including components, props, state, and hooks.',
    imageUrl: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    topics: ['Components', 'JSX', 'Props & State', 'Hooks', 'Routing'],
    duration: '2 hours',
    level: 'Beginner',
    url: '/free-courses/react-fundamentals',
  },
  {
    id: '2',
    title: 'CSS Grid Mastery',
    description: 'Master CSS Grid layout techniques for modern responsive web design.',
    imageUrl: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    topics: ['Grid Layout', 'Responsive Design', 'Grid Areas', 'Auto-fit & Auto-fill'],
    duration: '1.5 hours',
    level: 'Intermediate',
    url: '/free-courses/css-grid',
  },
  {
    id: '3',
    title: 'Git & GitHub Crash Course',
    description: 'Learn version control with Git and collaboration with GitHub.',
    imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    topics: ['Git Basics', 'Branching', 'Pull Requests', 'Merge Conflicts'],
    duration: '1 hour',
    level: 'Beginner',
    url: '/free-courses/git-github',
  },
];

export const premiumCourses: Course[] = [
  {
    id: '1',
    title: 'Advanced React Patterns',
    description: 'Deep dive into advanced React patterns and techniques used in production applications.',
    imageUrl: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    topics: ['Render Props', 'HOCs', 'Context API', 'Custom Hooks', 'Performance Optimization'],
    duration: '8 hours',
    level: 'Advanced',
    price: 49.99,
    url: '/premium-courses/advanced-react',
  },
  {
    id: '2',
    title: 'Full-Stack JavaScript Bootcamp',
    description: 'Comprehensive course covering frontend and backend development with JavaScript.',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    topics: ['React', 'Node.js', 'Express', 'MongoDB', 'Authentication', 'Deployment'],
    duration: '20 hours',
    level: 'Intermediate',
    price: 99.99,
    url: '/premium-courses/fullstack-js',
  },
  {
    id: '3',
    title: 'TypeScript Mastery',
    description: 'Master TypeScript and learn how to build type-safe applications.',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    topics: ['Types & Interfaces', 'Generics', 'Type Guards', 'Advanced Types', 'Best Practices'],
    duration: '10 hours',
    level: 'Intermediate',
    price: 79.99,
    url: '/premium-courses/typescript',
  },
];
