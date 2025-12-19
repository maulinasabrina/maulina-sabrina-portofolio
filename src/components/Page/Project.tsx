import Link from "next/link";
import { ProjectCard } from "../Project/ProjectCard";
import { projects } from "../../app/data/project";

export default function Project() {

  return (
    <>
    {/* Container Padding */}
   <section
    id="project"
    className="w-full min-h-screen flex flex-col justify-center px-6 md:px-10 lg:px-20 xl:px-36 mx-auto pt-22 md:pt-10"
   >
        <div className="flex items-center justify-center gap-6 mb-4 md:mb-10">
  
            {/* Left Divider */}
            <div className="hidden md:block h-[2px] w-24 bg-primary/30 rounded-full"></div>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-heading text-primary font-bold text-center">
                Highlighted Projects
            </h2>

            {/* Right Divider */}
            <div className="hidden md:block h-[2px] w-24 bg-primary/30 rounded-full"></div>

        </div>
        
       <div className="flex flex-col md:flex-row gap-6">
          {projects.slice(0, 3).map((project, i) => (
            <div
              key={i}
              className={`
                transition-all duration-500 ease-out
                ${i === 0 ? "md:flex-[1.4]" : "md:flex-[1]"}
                hover:flex-[1.7]
                md:hover:z-10
              `}
            >
              <div className="h-full">
                <ProjectCard {...project} />
              </div>
            </div>
          ))}
        </div>


      <div className="flex justify-center mt-6">
        <Link href="/project" className="font-semibold text:sm md:text-lg">
          <button className="px-4 md:px-6 py-1 md:py-2 bg-background text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition">
            See All Projects
          </button>
        </Link>
      </div>

    </section>

    </>
    )
}