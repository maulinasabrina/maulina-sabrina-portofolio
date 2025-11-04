"use client";

import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
 title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
}

// const ProjectCard = ({ title, description }: ProjectCardProps) => {
//   return <div>{title}: {description}</div>;

export const ProjectCard = ({ title, description, tags, github, live}: ProjectCardProps) => {
  return (
    <div className="group rounded-xl p-6 bg-background border-1 border-border/30 shadow-md hover:bg-primary/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      
      <h3 className="text-2xl font-semibold text-primary/70 mb-2 group-hover:text-primary transition">
        {title}
      </h3>

      <p className="text-primary mb-4">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-md px-2 py-1 rounded-full  bg-border text-background "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <a
          href={github}
          target="_blank"
          className="px-4 py-2 border border-primary rounded-lg text-sm hover:bg-primary hover:text-white -black transition"
        >
          Code
        </a>

        <a
          href={live}
          target="_blank"
          className="px-4 py-2 rounded-lg bg-primary/80 text-background text-sm hover:bg-primary transition"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}
