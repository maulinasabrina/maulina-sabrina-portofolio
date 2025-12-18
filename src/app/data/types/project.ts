export type ProjectData = {
  title: string;
  subtitle?: string; // optional subtitle for catchy tagline
  description: string;
  tags: string[];
  github: string;
  live: string;
  thumbnail: string;
  details?: {
    objective?: string[]; // list of project goals
    technologies?: {
      backend?: string[];
      frontend?: string[];
      tools?: string[];
    };
    features?: {
      name: string;
      desc: string;
    }[];
  };
};

