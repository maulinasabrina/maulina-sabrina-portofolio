"use client";

import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { ProjectData } from "../app/data/definitions";

export const ProjectCard = ({
  title,
  subtitle,
  description,
  tags,
  github,
  live,
  thumbnail,
}: ProjectData & { slug?: string }) => {
  // auto-generate slug dari title
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  return (
  <div className="group rounded-xl p-5 bg-background border border-border/30 shadow-md 
  hover:bg-primary/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 
  h-[360px] flex flex-col">

      {/* Thumbnail */}
      <div className="mb-4 overflow-hidden rounded-lg">
       <img
          src={thumbnail}
          alt={title}
          className="w-full h-28 object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
        />

      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-primary/80 mb-1 group-hover:text-primary transition">
        {title}
      </h3>

      {/* Subtitle (optional) */}
      {subtitle && (
        <p className="text-xs text-primary/60 italic mb-2 line-clamp-1">
        {subtitle}
        </p>
      )}

      {/* Short description */}
      <p className="text-primary text-sm mb-3 line-clamp-2">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-full bg-border text-background"
          >
            {tag}
          </span>
        ))}
      </div>


      {/* Buttons */}
      <div className="flex gap-3 text-sm">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-3 py-2 border border-primary rounded-lg hover:bg-primary hover:text-white transition"
        >
          <Github className="w-4 h-4" /> Code
        </a>

        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-3 py-2 rounded-lg bg-primary/80 text-background hover:bg-primary transition"
        >
          <ExternalLink className="w-4 h-4" /> Live
        </a>

        {/* Link ke halaman detail */}
        <Link
          href={`/project/${slug}`}
          className="flex items-center gap-1 px-3 py-2 rounded-lg border border-border hover:bg-primary/10 transition"
        >
          Details →
        </Link>
      </div>
    </div>
  );
};
