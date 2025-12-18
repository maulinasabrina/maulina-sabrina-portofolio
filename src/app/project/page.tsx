// import ProjectCard from "/components/ProjectCard";

import { ProjectCard } from "@/src/components/Project/ProjectCard";
import { projects } from "../data/project";


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