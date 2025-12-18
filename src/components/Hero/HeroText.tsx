"use client";

import Socials from "../Contact/Socials";
import { HeroTextProps } from "@/src/app/data/types/hero";

export default function HeroText({ name, location, description }: HeroTextProps) {
  return (
    <div
      className="
        flex flex-col gap-4 w-full
        items-center md:items-start 
        text-center md:text-left 
        md:pl-14
      "
    >
      {/* Title + Location Badge */}
      <div className="flex flex-col gap-2 md:gap-8 md:flex-row md:items-center">
        <h1 className="text-primary font-extrabold text-3xl md:text-6xl font-heading">
          Hi, I&apos;m {name}
        </h1>

        <span className="bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
          {location}
        </span>
      </div>

      <p className="text-sm md:text-lg text-black/80 max-w-xl leading-relaxed">
        {description}
      </p>

      <div className="mt-2">
        <Socials />
      </div>
    </div>
  );
}
