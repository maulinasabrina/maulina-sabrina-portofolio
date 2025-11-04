import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Hero() {
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
    <>
    <div  className='w-full py-4 md:py-12 px-6 md:px-10 lg:px-20 xl:px-36  mx-auto'>
        <div className='flex flex-col md:flex-row-reverse lg:flex-row-reverse gap-8 items-center '>
        {/* <div className='w-full py-4 md:py-16 px-6 md:px-10 lg:px-20 xl:px-36 gap-8 mx-auto flex flex-col md:flex-row-reverse lg:flex-row-reverse items-center '> */}
        {/* <div className='w-full '> */}
            <div className='w-30 sm:w-30 md:w-fit lg:w-fit flex justify-center' >
                <img src="/assets/images/globe.svg" alt="" className=' bg-primary border-1 border-background rounded-full w-60' />
            </div>

            {/* <div className='w-full flex gap-4 item-center'> */}
                <div className='w-full flex flex-col gap-4'>
                    <div className='w-full flex flex-col md:flex-row-reverse gap-6 items-center justify-end'>
                        <h3 className='text-primary-foreground text-md md:text-lg font-semibold bg-primary px-6 py-2 rounded-full'> OPEN TO WORK</h3>
                        <h1 className='text-primary font-extrabold text-4xl md:text-5xl font-heading'>Hi, I&apos;m Maulina</h1>
                    </div>
                    <p className='text-black text-md md:text-lg text-center md:text-left'>
                        Fresh graduate in Informatics Engineering, eager to grow in software engineering — especially in web and mobile development.
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-4 mt-2 justify-center md:justify-start">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-110 shadow-sm"
                        aria-label="GitHub"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-110 shadow-sm"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-110 shadow-sm"
                        aria-label="Instagram"
                    >
                        <Instagram className="w-6 h-6" />
                    </a>
                    <a
                        href="mailto:maulina@example.com"
                        className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-110 shadow-sm"
                        aria-label="Email"
                    >
                        <Mail className="w-6 h-6" />
                    </a>
                    </div>
                {/* </div>   */}
            </div>
        
        </div>

        {/* Tech Stack */}

        {/* <div className='w-fit mx-20 md:mx-20 lg:mx-20 xl:mx-30 mt-8 flex flex-row items-center gap-1 border-2 bg-[var(--secondary)] rounded-full '> */}
        <div className='w-full lg:w-5xl mt-2 md:mt-10 xl:mt-4 py-5 flex flex-col md:flex-row justify-start  gap-3 md:gap-10  items-center '>
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


    </div>

    </>

  )
}
