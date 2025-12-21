export interface Project {
  id: number;
  img: string;
  name: string;
  desc: string;
  github: string;
  liveUrl: string;
  category: string;
  technologies: string[];
  featured?: boolean;
}

export interface Skill {
  id: string;
  icon: string;
  title: string;
  description: string;
  level: number;
}

export interface ProblemSolution {
  id: number;
  title: string;
  problem: string;
  solution: string;
  code?: string;
  language?: string;
  complexity: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
}

export interface ContactFormData {
  user_name: string;
  user_email: string;
  message: string;
}

export interface FormStatus {
  isSubmitting: boolean;
  message: string;
  type: 'success' | 'error' | '';
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}