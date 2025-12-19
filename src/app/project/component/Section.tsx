import { SmallLandscapeCard } from "./CardLandscape";
import { ProjectData } from "../../data/types/project";


interface SectionProps {
  title: string;
  items: ProjectData[];
}

const Section = ({ title, items }: SectionProps) => (
  <div className="mb-16">
    <h2 className="text-xl md:text-2xl font-semibold mb-6">{title}</h2>

    <div className="grid md:grid-cols-2 gap-6">
      {items.map((project, i) => (
        <SmallLandscapeCard key={i} {...project} />
      ))}
    </div>
  </div>
);

export default Section;