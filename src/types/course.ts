
export interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  topics: string[];
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price?: number; // For premium courses
  url: string; // Link to course or sales page
}
