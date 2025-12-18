import { Skill } from '../types';
import {
  FaLaptopCode,
  FaServer,
  FaCodeBranch,
  FaDatabase,
  FaCloudUploadAlt,
  FaMobile,
  FaCogs,
  FaShieldAlt,
} from 'react-icons/fa';

export const skills: Skill[] = [
  {
    id: "frontend",
    icon: <FaLaptopCode className="text-blue-600 text-5xl mb-4" />,
    title: "Frontend Development",
    description:
      "Expert in modern frontend technologies including React, TypeScript, Next.js, and Vue.js. Proficient in creating responsive, accessible, and performant user interfaces with advanced CSS, Tailwind, and component libraries.",
    level: 90,
  },
  {
    id: "backend",
    icon: <FaServer className="text-green-400 text-5xl mb-4" />,
    title: "Backend Development",
    description:
      "Skilled in building scalable server-side applications using Node.js, Express.js, Python, and RESTful APIs. Experience with microservices architecture, authentication systems, and API design best practices.",
    level: 85,
  },
  {
    id: "database",
    icon: <FaDatabase className="text-purple-500 text-5xl mb-4" />,
    title: "Database Management",
    description:
      "Proficient in both SQL (MySQL, PostgreSQL) and NoSQL (MongoDB, Firebase) databases. Experience with database design, optimization, indexing, and data modeling for high-performance applications.",
    level: 80,
  },
  {
    id: "mobile",
    icon: <FaMobile className="text-pink-500 text-5xl mb-4" />,
    title: "Mobile Development",
    description:
      "Experience in cross-platform mobile development using React Native and Flutter. Knowledge of mobile-first design principles, native device features, and app store deployment processes.",
    level: 75,
  },
  {
    id: "devops",
    icon: <FaCloudUploadAlt className="text-orange-500 text-5xl mb-4" />,
    title: "DevOps & Cloud",
    description:
      "Proficient in cloud platforms (AWS, Google Cloud), containerization (Docker), CI/CD pipelines, and deployment automation. Experience with monitoring, logging, and infrastructure as code.",
    level: 78,
  },
  {
    id: "version-control",
    icon: <FaCodeBranch className="text-yellow-400 text-5xl mb-4" />,
    title: "Version Control & Collaboration",
    description:
      "Expert in Git workflows, GitHub/GitLab, code review processes, and team collaboration. Experience with branching strategies, merge conflict resolution, and project management tools.",
    level: 95,
  },
  {
    id: "testing",
    icon: <FaShieldAlt className="text-red-500 text-5xl mb-4" />,
    title: "Testing & Quality Assurance",
    description:
      "Skilled in unit testing, integration testing, and end-to-end testing using Jest, Vitest, Cypress, and Testing Library. Focus on test-driven development and maintaining high code coverage.",
    level: 82,
  },
  {
    id: "tools",
    icon: <FaCogs className="text-gray-500 text-5xl mb-4" />,
    title: "Development Tools & Workflow",
    description: (
      <div className="space-y-2">
        <span className="block font-medium">Build Tools:</span>
        <span className="block">Vite, Webpack, Rollup, Parcel</span>
        <span className="block font-medium">Design & Collaboration:</span>
        <span className="block">Figma, Adobe XD, Slack, Jira, Notion</span>
        <span className="block font-medium">Code Quality:</span>
        <span className="block">ESLint, Prettier, Husky, SonarQube</span>
      </div>
    ),
    level: 88,
  },
];