export type ProjectData = {
  type: "uni" | "portfolio" | "learning"; // kategori utama project
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  thumbnail: string;

  details?: ProjectDetail;
};

// DETAIL OBJECT
export type ProjectDetail = {
  role?: string;                  // ex: "Fullstack Developer"             
  thumbnail?: string;               // banner khusus halaman detail

  github?: string;                  // override link kalau perlu
  live?: string;                    // override link kalau perlu

  key_features?: string[];          // list fitur singkat
  challenges?: string[];            // list kendala
  solutions?: string[];             // list solusi untuk kendala
  tech_stack?: TechStack;           // tech stack dipisah rapi
};

// TECH STACK DETAIL
export type TechStack = {
  backend?: string[];
  frontend?: string[];
  tools?: string[];
};
