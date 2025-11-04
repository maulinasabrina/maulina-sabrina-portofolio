

export default function TechStack() {
   const techStack = [
    { name: 'HTML5', icon: '🌐' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'React', icon: '⚛️' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'Python', icon: '🐍' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Git', icon: '📊' },
    { name: 'HTML5 2', icon: '🌐' },
    { name: 'Tailwind2', icon: '🎨' },
    { name: 'SQL2', icon: '🗄️' },
    { name: 'React2', icon: '⚛️' },
    { name: 'Git2', icon: '📊' },
    { name: 'HTML', icon: '🌐' },
    { name: 'Tailwind1', icon: '🎨' },
    { name: 'SQL1', icon: '🗄️' },
    { name: 'React1', icon: '⚛️' },

  ];

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
                      <span className="text-2xl group-hover:scale-110 transition-transform">{tech.icon}</span>
                      <span className="text-md text-primary font-medium">{tech.name}</span>
                    </div>
                  ))}
                  
                </div>       
        </div>

  )
}


