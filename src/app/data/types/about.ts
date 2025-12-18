export interface EduCardProps {
  title: string;
  subtitle: string;
  items: string[];
}

export interface ExpCardProps {
  title: string;
  subtitle: string;
  items: string[];
  button?: { text: string; link: string };
}

export interface SectionBadgeProps {
  icon: React.ReactNode;
  label: string;
}
