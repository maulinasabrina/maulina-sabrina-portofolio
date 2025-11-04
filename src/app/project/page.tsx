// import ProjectCard from "/components/ProjectCard";

import { ProjectCard } from "@/src/components/ProjectCard";

interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  thumbnail: string;
}

const projects: ProjectData[] = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack store with cart, auth, & payments.",
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
     thumbnail: "https://via.placeholder.com/400x300.png?text=E-Commerce"
  },
  {
    title: "Task Manager App",
    description: "Task app with real-time sync & offline mode.",
    tags: ["React Native", "Firebase"],
    github: "https://github.com",
    live: "https://example.com",
     thumbnail: "https://via.placeholder.com/400x300.png?text=E-Commerce"
  },
  {
    title: "Weather Dashboard",
    description: "Weather forecast & analytics UI.",
    tags: ["Next.js", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
     thumbnail: "https://via.placeholder.com/400x300.png?text=E-Commerce"
  }
];

const ProjectPage = () => {
  return (
    <div className="px-6  max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">All Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;