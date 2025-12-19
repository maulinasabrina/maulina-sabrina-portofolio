import { projects } from "@/src/app/data/project";
import { ProjectDetail } from "@/src/app/data/types/project";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!project) {
    return (
      <div className="text-center py-20 text-gray-500">
        <h2 className="text-2xl font-semibold mb-2">Project not found</h2>
        <Link href="/project" className="text-sm underline text-gray-500 hover:text-primary">
          &lt; back to projects
        </Link>
      </div>
    );
  }

  const d: ProjectDetail = project.details ?? {};

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-10">
      
      {/* Back button */}
      <Link href="/project" className="text-sm underline text-gray-500 hover:text-primary">
        &lt; back to projects
      </Link>

      {/* Title */}
      <h1 className="text-lg md:text-4xl font-bold mt-4 text-gray-900">{project.title}</h1>

      {/* Description */}
      {project.description && (
        <p className="text-gray-600 max-w-2xl mt-2 text-justify text-[10px] md:text-base">{project.description}</p>
      )}


      {/* Buttons */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-6">

        {/* ROLE */}
        {d.role && (
          <p className="text-primary text-[12px] md:text-lg font-semibold">
            role: {d.role}
          </p>
        )}

        {/* BUTTON WRAPPER  */}
        <div className="flex flex-row items-start sm:items-center gap-2">

              {/* Live Button */}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2 hover:border hover:border-primary px-4 md:px-6 py-1.5 md:py-2 rounded-md text-[10px] md:text-sm font-semibold bg-primary hover:bg-background text-white hover:text-primary transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  view live
                </a>
              )}

              {/* Code Button */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 hover:border hover:border-primary px-4 md:px-6 py-1.5 md:py-2 rounded-md text-[10px] md:text-sm font-semibold bg-primary hover:bg-background text-white hover:text-primary transition"
                >
                  <Github className="w-4 h-4" />
                  view code
                </a>
              )}
            </div>

      </div>

      {/* Thumbnail */}
      <img
        src={d.thumbnail || project.thumbnail}
        alt={project.title}
        className="rounded-xl shadow-sm mt-8 mb-10"
      />

      {/* KEY FEATURES */}
      {d.key_features && (
        <section className="mb-10">
          <h2 className="text-md md:text-md md:text-xl font-semibold mb-3 text-primary">✦ key_features</h2>

          <div className="grid md:grid-cols-2 gap-3">
            {d.key_features.map((feat, i) => (
              <div
                key={i}
                className="border border-primary/30 hover:border-primary hover:text-primary bg-background px-4 py-2 rounded-md text-gray-700 text-xs md:text-sm"
              >
                {feat}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CHALLENGES */}
      {d.challenges && (
        <section className="mb-10">
          <h2 className="text-md md:text-xl font-semibold mb-3 text-primary">✦ challenges</h2>

          <div className="grid md:grid-cols-2 gap-3">
            {d.challenges.map((ch, i) => (
              <div
                key={i}
                className="border border-primary/30 hover:border-primary hover:text-primary bg-background px-4 py-2 rounded-md text-gray-700 text-xs md:text-sm"
              >
                {ch}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SOLUTIONS */}
      {d.solutions && (
        <section className="mb-10">
          <h2 className="text-md md:text-xl font-semibold mb-3 text-primary">✦ solutions</h2>

          <div className="grid md:grid-cols-2 gap-3">
            {d.solutions.map((s, i) => (
              <div
                key={i}
                className="border border-primary/30 hover:border-primary hover:text-primary bg-background px-4 py-2 rounded-md text-gray-700 text-xs md:text-sm"
              >
                {s}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* TECH STACK */}
      {d.tech_stack && (
        <section className="mb-10">
          <h2 className="text-md md:text-xl font-semibold mb-3 text-primary">✦ tech_stack</h2>

          <div className="flex flex-wrap gap-2">
            {d.tech_stack.backend?.map((t, i) => (
              <span
                key={i}
                className="border border-primary/30 hover:border-primary hover:text-primary bg-background px-4 py-2 rounded-md text-gray-700 text-xs md:text-sm"
              >
                {t}
              </span>
            ))}
            {d.tech_stack.frontend?.map((t, i) => (
              <span
                key={i}
                className="border border-primary/30 hover:border-primary hover:text-primary bg-background px-4 py-2 rounded-md text-gray-700 text-xs md:text-sm"
              >
                {t}
              </span>
            ))}
            {d.tech_stack.tools?.map((t, i) => (
              <span
                key={i}
               className="border border-primary/30 hover:border-primary hover:text-primary bg-background px-4 py-2 rounded-md text-gray-700 text-xs md:text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
