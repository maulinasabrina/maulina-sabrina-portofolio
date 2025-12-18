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
  
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div
      className="
        group 
        rounded-lg md:rounded-xl 
        p-3 md:p-5 
        bg-background 
        border border-border/30 
        shadow-md 
        hover:bg-primary/10 hover:shadow-lg hover:-translate-y-1 
        transition-all duration-300
        h-[300px] md:h-[360px]
        flex flex-col
      "
    >

      {/* Thumbnail */}
      <div className="mb-3 md:mb-4 overflow-hidden rounded-md md:rounded-lg">
        <img
          src={thumbnail}
          alt={title}
          className="
            w-full 
            h-20 md:h-28 
            object-cover 
            rounded-md 
            group-hover:scale-105 
            transition-transform duration-300
          "
        />
      </div>

      {/* Title */}
      <h3
        className="
          text-base md:text-xl 
          font-semibold 
          text-primary/80 
          mb-0.5 md:mb-1 
          group-hover:text-primary 
          transition
        "
      >
        {title}
      </h3>

      {/* Subtitle */}
      {subtitle && (
        <p
          className="
            text-[10px] md:text-xs 
            text-primary/60 
            italic 
            mb-1 md:mb-2 
            line-clamp-1
          "
        >
          {subtitle}
        </p>
      )}

      {/* Description */}
      <p
        className="
          text-[11px] md:text-sm 
          text-primary 
          mb-2 md:mb-3 
          line-clamp-2
        "
      >
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
        {tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="
              text-[10px] md:text-xs 
              px-1.5 md:px-2 
              py-0.5 md:py-1 
              rounded-full 
              bg-border 
              text-background
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-2 md:gap-3 text-[10px] md:text-sm">
        
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-1 
            px-2 md:px-3 
            py-1.5 md:py-2 
            border border-primary 
            rounded-md md:rounded-lg 
            hover:bg-primary hover:text-white 
            transition
          "
        >
          <Github className="w-3 h-3 md:w-4 md:h-4" /> Code
        </a>

        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-1 
            px-2 md:px-3 
            py-1.5 md:py-2 
            rounded-md md:rounded-lg 
            bg-primary/80 
            text-background 
            hover:bg-primary 
            transition
          "
        >
          <ExternalLink className="w-3 h-3 md:w-4 md:h-4" /> Live
        </a>

        <Link
          href={`/project/${slug}`}
          className="
            flex items-center gap-1 
            px-2 md:px-3 
            py-1.5 md:py-2 
            rounded-md md:rounded-lg 
            border border-border 
            hover:bg-primary/10 
            transition
          "
        >
          Details →
        </Link>

      </div>
    </div>
  );
};
