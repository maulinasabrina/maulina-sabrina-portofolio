import Link from "next/link";
import { ProjectCard } from "./ProjectCard";

export default function Project() {
interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
}

const projects: ProjectData[] = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack store with cart, auth, & payments.",
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Task Manager App",
    description: "Task app with real-time sync & offline mode.",
    tags: ["React Native", "Firebase"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Weather Dashboard",
    description: "Weather forecast & analytics UI.",
    tags: ["Next.js", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com"
  }
];

  return (
    <>
    {/* Container Padding */}
    <div  className='w-full py-4 md:py-12 px-6 md:px-10 lg:px-20 xl:px-36  mx-auto'>
        <div className="flex flex-row gap-6 items-center">
          <h1 className='w-fit text-primary text-5xl font-extrabold text-center font-heading'>Project</h1>
          <p className=""> This is a few project i have done</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
    </div>
   <Link href="/" className="font-semibold text-lg flex justify-center">
     <button className="px-6 py-2 bg-primary text-background rounded-full hover:bg-primary/80 transition"> See More </button>
    </Link>
        <div  className='w-full py-4 md:py-12 px-6 md:px-10 lg:px-20 xl:px-36  mx-auto'>
        <div className="flex flex-row gap-6 items-center">
          <h1 className='w-fit text-primary text-5xl font-extrabold text-center font-heading'>Project</h1>
          <p className=""> This is a few project i have done</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
    </div>
    </>
    )
}