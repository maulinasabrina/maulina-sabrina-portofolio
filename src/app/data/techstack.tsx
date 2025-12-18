// data/techStack.ts
import {
  Code2,
  Server,
  Smartphone,
  Boxes,
  Brush,
  User,
} from "lucide-react";

import type { TechCategory } from "./types/tech-stack";
export const categories: TechCategory[] = [
  {
    icon: <Code2 className="w-6 h-6 text-primary" />,
    smallIcon: <Code2 className="w-4 h-4 text-primary" />,
    title: "Frontend",
    items: ["HTML", "CSS", "Tailwind", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    icon: <Server className="w-6 h-6 text-primary" />,
    smallIcon: <Server className="w-4 h-4 text-primary" />,
    title: "Backend",
    items: ["Node.js", "Express.js", "REST API", "Prisma", "PostgreSQL", "MongoDB"],
  },
  {
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    smallIcon: <Smartphone className="w-4 h-4 text-primary" />,
    title: "Mobile",
    items: ["React Native", "Expo", "Firebase Auth"],
  },
  {
    icon: <Boxes className="w-6 h-6 text-primary" />,
    smallIcon: <Boxes className="w-4 h-4 text-primary" />,
    title: "Tools",
    items: ["Git", "Docker", "Postman", "Swagger", "CI/CD", "Vercel"],
  },
  {
    icon: <Brush className="w-6 h-6 text-primary" />,
    smallIcon: <Brush className="w-4 h-4 text-primary" />,
    title: "Design / PM",
    items: ["Figma", "Miro", "Whimsical", "Wireframe", "Notion"],
  },
  {
    icon: <User className="w-6 h-6 text-primary" />,
    smallIcon: <User className="w-4 h-4 text-primary" />,
    title: "Soft Skills",
    items: ["Communication", "Teamwork", "Problem Solving"],
  },
  {
    icon: <User className="w-6 h-6 text-primary" />,
    smallIcon: <User className="w-4 h-4 text-primary" />,
    title: "Non-Tech Skills",
    items: [
      "Canva",
      "Google Workspace",
      "Microsoft Office",
      "Google Analytics",
      "Content Writing",
      "Documentation",
    ],
  },
];


 export const techStack = [
    { name: 'HTML5', icon: '/assets/icon/html5.png' },
    { name: 'Tailwind', icon: '/assets/icon/tailwind.png' },
    { name: 'SQL', icon: '/assets/icon/sql.png' },
    { name: 'React.js', icon: '/assets/icon/react.png' },
    { name: 'JavaScript', icon: '/assets/icon/javascript.png' },
    { name: 'Next.js', icon: '/assets/icon/nextjs.png' },
    { name: 'Node.js', icon: '/assets/icon/nodejs.png' },
    { name: 'Git', icon: '/assets/icon/git.png' },
    { name: 'Flutter', icon: '/assets/icon/flutter.png' },
    { name: 'Laravel', icon: '/assets/icon/laravel.png' },
    { name: 'Python', icon: '/assets/icon/python.png' },
    { name: 'Postman', icon: '/assets/icon/postman.png' },
    { name: 'Firebase', icon: '/assets/icon/firebase.png' },
    { name: 'C++', icon: '/assets/icon/c++.png' },
  ];
