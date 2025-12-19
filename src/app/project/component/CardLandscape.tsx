import { ExternalLink, Github} from "lucide-react";
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
    <div className="flex gap-4 border rounded-xl p-4 hover:shadow-md transition-all bg-white">
      
      {/* Thumbnail */}
      <img
        src={thumbnail}
        alt={title}
        className="w-28 h-20 object-cover rounded-lg flex-shrink-0"
      />

      {/* Text Section */}
      <div className="flex flex-col justify-between flex-1">
        
        <div>
          <h3 className="text-lg font-semibold leading-tight">
            {title}
          </h3>

          <div className="flex flex-wrap gap-1 mt-1">
            {tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] bg-gray-100 px-2 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-xs text-gray-600 mt-2 line-clamp-2">
            {description}
          </p>
        </div>





        {/* Buttons */}
        <div className="flex gap-2 md:gap-2 text-[10px] md:text-sm pt-3">
        
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-1 
            px-2 md:px-3 
            py-1.5 md:py-1 
            rounded-md md:rounded-lg 
            bg-primary/80 
            text-background 
            hover:bg-primary 
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
            py-1.5 md:py-1 
            rounded-md md:rounded-lg 
            bg-primary/80 
            text-background 
            hover:bg-primary 
            transition
          "
        >
          <ExternalLink className="w-3 h-3 md:w-4 md:h-4" /> Live
        </a>
        <a
            href={`/project/${slug}`}
            target="_blank"
            className="
                flex items-center gap-1 
                px-2 md:px-3 
                py-1.5 md:py-1 
                rounded-md md:rounded-lg
                border border-primary 
                hover:bg-primary hover:text-white 
                transition
                "
        >
          View Project →
        </a>

      </div>
        
      </div>
    </div>
  );
};
