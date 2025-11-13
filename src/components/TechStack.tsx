import { techStack } from "../app/data/data";


export default function TechStack() {
  

  return (
  <div  id="projects" className='w-full lg:w-5xl mt-2 md:mt-10 xl:mt-4 py-5 flex flex-col md:flex-row justify-start  gap-3 md:gap-10  items-center '>
                <h1 className='w-fit text-primary text-2xl font-extrabold text-center'>Tech Stack</h1>
                <div className='w-fit lg:w-fit justify-start rounded-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2'>
                     {techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="group flex items-center gap-1 px-2 py-1 bg-primary/10 rounded-full hover:bg-primary/20 transition-all duration-300 cursor-default"
                      title={tech.name}
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              className="w-8 h-8 rounded-full object-cover group-hover:scale-105 transition-transform"
                            />
                      </span>
                      <span className="text-md text-primary font-medium">{tech.name}</span>
                    </div>
                  ))}
                  
                </div>       
        </div>

  )
}


