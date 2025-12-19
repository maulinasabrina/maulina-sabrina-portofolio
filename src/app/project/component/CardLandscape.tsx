import { ExternalLink, Github } from "lucide-react";
import { ProjectData } from "../../data/types/project";

export const SmallLandscapeCard = ({
  title,
  description,
  tags,
  github,
  live,
  thumbnail,
}: ProjectData & { slug?: string }) => {
  
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="
      flex flex-col md:flex-row gap-3 
      border border-gray-200 
      rounded-xl 
      p-3 md:p-4 
      bg-white 
      hover:shadow-md 
      transition-all
    ">
      
      {/* Thumbnail */}
      <img
        src={thumbnail}
        alt={title}
        className="
          w-24 h-20 
          md:w-28 md:h-20 
          object-cover 
          rounded-lg 
          flex-shrink-0
        "
      />

      {/* Text */}
      <div className="flex flex-col justify-between flex-1">
        
        {/* Title + tags + desc */}
        <div>
          <h3 className="text-sm md:text-base font-semibold leading-tight text-gray-900">
            {title}
          </h3>

          <div className="flex flex-wrap gap-1 mt-1">
            {tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="text-[9px] md:text-[10px] bg-gray-100 px-2 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-[10px] md:text-xs text-gray-600 mt-2 line-clamp-2">
            {description}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2 pt-3">

          {/* Code */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-1 
              px-2 md:px-3 
              py-1.5 md:py-1 
              rounded-md 
              bg-primary/80 
              text-white 
              hover:bg-primary 
              text-[10px] md:text-sm
              transition
            "
          >
            <Github className="w-3 h-3 md:w-4 md:h-4" /> Code
          </a>

          {/* Live */}
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-1 
              px-2 md:px-3 
              py-1.5 md:py-1 
              rounded-md 
              bg-primary/80 
              text-white 
              hover:bg-primary 
              text-[10px] md:text-sm
              transition
            "
          >
            <ExternalLink className="w-3 h-3 md:w-4 md:h-4" /> Live
          </a>

          {/* Detail Page */}
          <a
            href={`/project/${slug}`}
            className="
              flex items-center gap-1 
              px-2 md:px-3 
              py-1.5 md:py-1 
              rounded-md 
              border border-primary 
              hover:bg-primary 
              hover:text-white 
              text-[10px] md:text-sm
              transition
            "
          >
            View →
          </a>

        </div>

      </div>
    </div>
  );
};
