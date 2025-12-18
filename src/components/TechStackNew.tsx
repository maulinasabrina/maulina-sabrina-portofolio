"use client";

import {
  Code2,
  Server,
  Smartphone,
  Boxes,
  Brush,
  User,
} from "lucide-react";

const categories = [
  {
    icon: <Code2 className="w-6 h-6 text-primary" />,
    smallIcon: ( <Code2 className="w-4 h-4 text-primary" /> ),
    title: "Frontend",
    items: ["HTML", "CSS", "Tailwind", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    icon: <Server className="w-6 h-6 text-primary" />,
    smallIcon: ( <Server className="w-4 h-4 text-primary" /> ),
    title: "Backend",
    items: ["Node.js", "Express.js", "REST API", "Prisma", "PostgreSQL", "MongoDB"],
  },
  {
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    smallIcon: ( <Smartphone className="w-4 h-4 text-primary" /> ),
    title: "Mobile",
    items: ["React Native", "Expo", "Firebase Auth"],
  },
  {
    icon: <Boxes className="w-6 h-6 text-primary" />,
    smallIcon: ( <Boxes className="w-4 h-4 text-primary" /> ),
    title: "Tools",
    items: ["Git", "Docker", "Postman", "Swagger", "CI/CD", "Vercel"],
  },
  {
    icon: <Brush className="w-6 h-6 text-primary" />,
    smallIcon: ( <Brush className="w-4 h-4 text-primary" /> ),
    title: "Design / PM",
    items: ["Figma", "Miro", "Whimsical", "Wireframe", "Notion"],
  },
  {
    icon: <User className="w-6 h-6 text-primary" />,
    smallIcon: ( <User className="w-4 h-4 text-primary" /> ),
    title: "Soft Skills",
    items: ["Communication", "Teamwork", "Problem Solving"],
  },
  {
    icon: <User className="w-6 h-6 text-primary" />,
    smallIcon: <User className="w-4 h-4 text-primary" />,
    title: "Non-Tech Skills",
    items: [
      "Canva",
      "Google Workspace",
      "Microsoft Office",
      "Google Analytics",
      "Content Writing",
      "Documentation",
    ],
  },
];

export default function TechStackLine() {
  return (
    <section id="tech-stack" className="px-6 max-w-7xl mx-auto pt-32">
      
      <div className="flex items-center justify-center gap-6 mb-14">
  
        {/* Left Divider */}
        <div className="hidden md:block h-[2px] w-24 bg-primary/30 rounded-full"></div>

        {/* Title */}
        <h2 className="text-5xl font-heading text-primary font-bold text-center">
            Tech Stack
        </h2>

        {/* Right Divider */}
        <div className="hidden md:block h-[2px] w-24 bg-primary/30 rounded-full"></div>

        </div>


      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        
        {categories.map((category) => (
          <div
            key={category.title}
            className="
              min-w-[80px] 
              bg-white 
              shadow-sm 
              border border-primary/10 
              rounded-3xl 
              p-4 
              flex flex-col 
              gap-3
              transition-all 
              duration-300 
              hover:shadow-xl 
              hover:border-primary/30 
              hover:scale-[1.04]
              overflow-visible   
            "
          >
            {/* Title */}
            <div className="flex items-center gap-2">
              {category.icon}
              <span className="text-lg font-semibold text-primary">
                {category.title}
              </span>
            </div>

            {/* Items - LIST MODE */}
            <div className="flex flex-col gap-2 mt-1">
              {category.items.map((item) => (
                <div
                  key={item}
                  className="
                    flex items-center gap-3 
                    pl-2 pr-3 py-1.5 
                    bg-white 
                    border border-primary/20 
                    rounded-full 
                    shadow-sm 
                    hover:border-primary 
                    hover:shadow-md 
                    transition-all 
                    duration-200
                  "
                >
                  <div className="
                    w-6 h-6 
                    rounded-full 
                    bg-primary/10 
                    flex items-center 
                    justify-center
                  ">
                    {category.smallIcon}
                  </div>

                  <span className="text-sm font-medium text-black/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
