"use client";

import { categories } from "@/src/app/data/techstack";
import TechStackMobileCard from "../TechStack/TechStackMobileCard";
import TechStackDesktopCard from "../TechStack/TechStackDesktopCard";

export default function TechStackLine() {
  return (
    <section id="tech-stack" className="px-6 max-w-7xl mx-auto pt-20 md:pt-32">

      <div className="flex items-center justify-center gap-6 mb-6 md:mb-14">
        <div className="hidden md:block h-[2px] w-24 bg-primary/30 rounded-full"></div>

        <h2 className="text-3xl md:text-5xl font-heading text-primary font-bold text-center">
          Tech Stack
        </h2>

        <div className="hidden md:block h-[2px] w-24 bg-primary/30 rounded-full"></div>
      </div>  

      {/* MOBILE */}
      <div className="grid grid-cols-2 gap-6 md:hidden">
        {categories.map((category, index) => (
          <TechStackMobileCard 
            key={category.title}
            category={category}
            highlight={index === categories.length - 1}
          />
        ))}
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        {categories.map((category) => (
          <TechStackDesktopCard key={category.title} category={category} />
        ))}
      </div>

    </section>
  );
}
