"use client";

import type { TechCategory } from "@/src/app/data/types/tech-stack";
import Image from "next/image";

interface TechStackDesktopCardProps {
  category: TechCategory;
}

export default function TechStackDesktopCard({ category }: TechStackDesktopCardProps) {
  return (
    <div
      className="
        min-w-[80px] bg-white shadow-sm border border-primary/10 
        rounded-3xl p-4 flex flex-col gap-3 transition-all duration-300 
        hover:shadow-xl hover:border-primary/30 hover:scale-[1.04]
      "
    >
      {/* Title */}
      <div className="flex items-center gap-2">
        {category.icon}
        <span className="text-md font-semibold text-primary">
          {category.title}
        </span>
      </div>

      {/* Items */}
      <div className="grid grid-cols-2 gap-1 mt-1">
        {category.items.map((item) => (
          <div
            key={item.name}
            className="
              flex items-center gap-3 pl-2 pr-3 py-1.5 bg-white 
              border border-primary/20 rounded-full shadow-sm 
              hover:border-primary hover:shadow-md transition-all duration-200
            "
          >
            {/* Item Icon */}
           <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
            {typeof item.icon === "string" ? (
              <Image
                src={item.icon}
                alt={item.name}
                width={16}
                height={16}
                className="object-contain"
              />
            ) : (
              item.icon || category.icon
            )}
          </div>



            {/* Item Name */}
            <span className="text-sm font-medium text-black/80">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
