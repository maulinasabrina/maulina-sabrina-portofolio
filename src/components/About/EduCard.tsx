"use client";

import { EduCardProps } from "@/src/app/data/types/about";
export default function EduCard({ title, subtitle, items }: EduCardProps) {
  return (
    <div className="p-3 md:p-5 border border-border/30 rounded-lg md:rounded-xl bg-white/60 backdrop-blur-sm">
      <h3 className="font-semibold text-base md:text-lg">{title}</h3>
      <p className="text-xs md:text-sm text-primary/70 italic">{subtitle}</p>

      <ul className="mt-2 md:mt-3 text-xs md:text-sm text-primary/90 space-y-0.5 md:space-y-1 list-disc pl-6 marker:text-primary space-y-2">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
