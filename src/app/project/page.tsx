// import ProjectCard from "/components/ProjectCard";

// import { ProjectCard } from "@/src/components/Project/ProjectCard";
import { projects } from "../data/project";
import Section from "./component/Section";


const ProjectPage = () => {
  const portfolio = projects.filter((p) => p.type === "portfolio");
  const learning = projects.filter((p) => p.type === "learning");
  const uni = projects.filter((p) => p.type === "uni");

  return (
    <div className="px-6 max-w-7xl mx-auto py-10">
      <div className="flex items-center justify-center gap-6 mb-8">
        <div className="hidden md:block h-[2px] w-24 bg-primary/30 rounded-full"></div>
        <h2 className="text-3xl md:text-5xl font-heading text-primary font-bold text-center">All Project</h2>
        <div className="hidden md:block h-[2px] w-24 bg-primary/30 rounded-full"></div>
      </div>

      {/* Portfolio */}
      <Section title="Portfolio Projects" items={portfolio} />

      {/* Learning */}
      <Section title="Learning Projects" items={learning} />

      {/* Uni */}
      <Section title="University Assignments" items={uni} />
    </div>
  );
};



export default ProjectPage;
