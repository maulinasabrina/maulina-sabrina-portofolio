"use client";

import { SectionBadgeProps } from "@/src/app/data/types/about";
export default function SectionBadge({ icon, label }: SectionBadgeProps) {
  return (
    <div
      className="
        absolute -top-3 
        left-4 md:left-6 
        bg-primary text-background 
        text-[10px] md:text-sm 
        font-semibold 
        px-2.5 py-1 md:px-4 md:py-1.5 
        rounded-full 
        shadow-md 
        flex items-center 
        gap-1.5 md:gap-2
      "
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}
