import { projects } from "@/src/app/data/data";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // karena params adalah Promise, perlu di-await
  const { slug } = await params;

  // cari project berdasarkan slug (case-insensitive)
  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!project) {
    return (
      <div className="text-center py-20 text-gray-500">
        <h2 className="text-2xl font-semibold mb-2">Project not found</h2>
        <a href="/projects" className="text-blue-500 underline">
          Back to Projects
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      {project.subtitle && (
        <p className="text-gray-600 mb-6">{project.subtitle}</p>
      )}

      <img
        src={project.thumbnail}
        alt={project.title}
        className="rounded-xl shadow-md mb-8"
      />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">💡 Deskripsi Singkat</h2>
        <p className="text-gray-700 leading-relaxed">{project.description}</p>
      </section>

      {project.details?.objective && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">🎯 Tujuan Proyek</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {project.details.objective.map((obj, i) => (
              <li key={i}>{obj}</li>
            ))}
          </ul>
        </section>
      )}

      {project.details?.technologies && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">⚙️ Teknologi yang Digunakan</h2>
          <div className="space-y-4">
            {project.details.technologies.backend && (
              <div>
                <h3 className="font-semibold">🔸 Backend</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  {project.details.technologies.backend.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.details.technologies.frontend && (
              <div>
                <h3 className="font-semibold">🔸 Frontend / Mobile</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  {project.details.technologies.frontend.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.details.technologies.tools && (
              <div>
                <h3 className="font-semibold">🔸 Tools</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  {project.details.technologies.tools.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {project.details?.features && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">🧩 Fitur Utama</h2>
          <div className="space-y-2">
            {project.details.features.map((f, i) => (
              <div key={i}>
                <p className="font-medium">{f.name}</p>
                <p className="text-gray-700 ml-2">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">🧠 Tags</h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-100 border text-gray-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="flex gap-4 mt-8">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          GitHub
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Live Demo
        </a>
      </section>
    </div>
  );
}
