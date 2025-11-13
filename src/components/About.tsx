import { tools } from "../app/data/data";

export default function About() {

  return (
    <section className="w-full py-12 px-6 md:px-10 lg:px-20 xl:px-36 mx-auto">
      <h1 className="text-primary text-5xl font-extrabold font-heading text-start mb-10">
        About Me
      </h1>

      {/* 2 Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 items-start">
        {/* Left Column — About Text */}
        <div className="space-y-4">
          <p className="text-lg leading-relaxed">
            Hi, I’m Maol — an Informatics Engineering graduate who finds joy in learning,
            building, and refining ideas into systems that feel reliable and thoughtfully made.
            I enjoy creating things that not only work well, but are maintainable and built to
            last — clean in structure, clear in logic, and grounded in intention.
          </p>
          <p className="text-lg leading-relaxed">
            Outside of code, I’m someone who finds comfort in small things — playlists,
            quiet mornings, or observing how people think and create. I love learning new
            languages and cultures, organizing my thoughts through notes and dashboards,
            and turning everyday moments into something meaningful.
          </p>    
          <p className="text-lg leading-relaxed">
           Learning as I go, growing as I build — everything else will follow.
          </p>    
        </div>

        {/* Right Column — Visit Site + Tools */}
        <div className="flex flex-col items-center md:items-start gap-6">
          {/* Tools Section */}
          <div className="w-full">
            <h2 className="text-xl font-semibold mb-4 text-primary">
              Tools I Use
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-2 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool.icon}
                  className="flex flex-col items-center gap-2 group"
                >
                  {/* Placeholder (bisa diganti logo nanti) */}
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-10 h-10 rounded-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center text-center md:text-left mt-10">
            <p className="text-lg text-center text-primary font-semibold leading-relaxed">
              If you’d like to know me beyond the code — the things I love, watch, and write about — <br></br>
              you can visit my personal space below 🌿
            </p>
            <a
              href="https://yourpersonalwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300"
            >
              Visit My Personal Space
            </a>
        </div>
    </section>
  );
}
