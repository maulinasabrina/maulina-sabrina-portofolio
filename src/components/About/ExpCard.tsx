"use client";

import { ExpCardProps } from "@/src/app/data/types/about";
export default function ExpCard({ title, subtitle, items, button }: ExpCardProps) {
  return (
    <div className="p-3 md:p-5 border border-border/30 rounded-lg md:rounded-xl bg-white/60 backdrop-blur-sm">

      <h3 className="font-semibold text-base md:text-lg">{title}</h3>
      <p className="text-xs md:text-sm text-primary/70 italic">{subtitle}</p>

      <ul className="mt-2 md:mt-3 text-xs md:text-sm space-y-0.5 md:space-y-1 list-disc list-disc pl-6 marker:text-primary space-y-2">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {button && (
        <a
          href={button.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block 
            mt-2 md:mt-3 
            px-3 py-1 md:px-4 md:py-1.5 
            rounded-full 
            border border-primary 
            text-primary 
            text-xs md:text-sm 
            hover:bg-primary hover:text-background 
            transition-all
          "
        >
          {button.text}
        </a>
      )}
    </div>
  );
}
