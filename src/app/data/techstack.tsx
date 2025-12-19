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
    title: "Frontend",
    items: [
      { name: "HTML", icon: "/assets/icon/html5.png" },
      { name: "Bootstrap", icon: "/assets/icon/bootstrap.png" },
      { name: "Tailwind", icon: "/assets/icon/tailwind.png" },
      { name: "React", icon: "/assets/icon/react.png" },
      { name: "Next.js", icon: "/assets/icon/nextjs.png" },
    ],
  },
  {
    icon: <Server className="w-6 h-6 text-primary" />,
    title: "Backend",
    items: [
      { name: "Laravel", icon: "/assets/icon/laravel.png" },
      { name: "Express.js", icon: "/assets/icon/express.png" },
      { name: "Prisma", icon: "/assets/icon/prisma.png" },
      { name: "PostgreSQL", icon: "/assets/icon/postgresql.png" },
      { name: "MySQL", icon: "/assets/icon/sql.png" },
    ],
  },
  {
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    title: "Mobile",
    items: [
      { name: "Flutter", icon: "/assets/icon/flutter.png" },
      { name: "Firebase", icon: "/assets/icon/firebase.png" },
    ],
  },
  {
    icon: <Boxes className="w-6 h-6 text-primary" />,
    title: "Tools",
    items: [
      { name: "Git", icon: "/assets/icon/git.png" },
      { name: "Docker", icon: "/assets/icon/docker.png" },
      { name: "Postman", icon: "/assets/icon/postman.png" },
      { name: "Vercel", icon: "/assets/icon/vercel.png" },
      { name: "Github", icon: "/assets/images/github.png" },
      { name: "Vscode", icon: "/assets/icon/vscode.png" },
    ],
  },
  {
    icon: <Brush className="w-6 h-6 text-primary" />,
    title: "Design / PM",
    items: [
      { name: "Figma", icon: "/assets/icon/figma.png"  },
      { name: "Notion", icon: "/assets/icon/notion.png"  },
    ],
  },
  {
    icon: <User className="w-6 h-6 text-primary" />,
    title: "Soft Skills",
    items: [
      { name: "Communication", icon: null },
      { name: "Teamwork", icon: null },
      { name: "Problem Solving", icon: null },
    ],
  },
  {
    icon: <User className="w-6 h-6 text-primary" />,
    title: "Programming Languages",
    items: [
      { name: "C++", icon: "/assets/icon/c++.png" },
      { name: "Java (Fundamental)", icon: "/assets/icon/java.png" },
      { name: "Javacript", icon: "/assets/icon/javascript.png" },
      { name: "Python (Fundamental)", icon: "/assets/icon/python.png" },
    ],
  },
  {
    icon: <User className="w-6 h-6 text-primary" />,
    title: "Non-Tech Skills",
    items: [
      { name: "Canva", icon: "/assets/icon/canva.png" },
      { name: "Google Workspace", icon: "/assets/icon/google.png" },
      { name: "Microsoft Office", icon: "/assets/icon/office.png" },
      { name: "Data Analyst Basic", icon: "/assets/icon/data.png" },
    ],
  },
];
export const smallIconStyle = "w-4 h-4 text-primary";