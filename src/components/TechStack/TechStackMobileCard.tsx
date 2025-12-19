"use client";

import type { TechCategory } from "@/src/app/data/types/tech-stack";

interface TechStackMobileCardProps {
  category: TechCategory;
}

export default function TechStackMobileCard({ category }: TechStackMobileCardProps) {
  return (
    <div
      className={`
        bg-white shadow-sm border border-primary/10 rounded-2xl p-2 
        flex flex-col gap-2 transition-all duration-300 hover:shadow-md
        hover:border-primary/30 hover:scale-[1.02]
      `}
    >
      {/* Title */}
      <div className="flex items-center gap-1">
        <div className="w-4 h-4 flex items-center justify-center">
          {category.icon}
        </div>

        <span className="text-[11px] font-semibold text-primary">
          {category.title}
        </span>
      </div>

      {/* Items */}
      <div className="flex flex-col gap-1">
        {category.items.map((item) => (
          <div
            key={item.name}
            className={`
              flex items-center gap-1.5 pl-1.5 pr-14 bg-white 
              border border-primary/20 rounded-full shadow-sm 
              hover:border-primary transition-all duration-200
            `}
          >

            
            <span className="text-[10px] font-medium text-black/80">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
