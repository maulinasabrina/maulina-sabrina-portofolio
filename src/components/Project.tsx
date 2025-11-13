import Link from "next/link";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../app/data/data";

export default function Project() {

  return (
    <>
    {/* Container Padding */}
    <section  className='w-full py-4 md:py-12 px-6 md:px-10 lg:px-20 xl:px-36  mx-auto'>
        <div className="flex flex-row gap-6 items-center">
          <h1 className='w-fit text-primary text-5xl font-extrabold text-center font-heading'>Project</h1>
          <p className=""> This is a few project i have done</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
    </section>
   <Link href="/project" className="font-semibold text-lg flex justify-center">
     <button className="px-6 py-2 bg-primary text-background rounded-full hover:bg-primary/80 transition mb-10"> See More </button>
    </Link>

    </>
    )
}