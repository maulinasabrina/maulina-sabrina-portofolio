import React from "react";

export interface TechItem {
  name: string;
  icon?: React.ReactNode; // <img> atau lucide icon
}

export interface TechCategory {
  icon: React.ReactNode;   // Icon kategori besar
  title: string;
  items: TechItem[];       // Item sekarang object, bukan string
}
