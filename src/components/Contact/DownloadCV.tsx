import { FileDown } from "lucide-react";
import { cvFile } from "@/src/app/data/contact";

export default function DownloadCV() {
  return (
    <div className="flex flex-col items-center md:items-end gap-2">
      <p className="text-muted-foreground">
        Want to see more about my experience?
      </p>

      <a
        href={cvFile}
        download
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary 
                   text-primary hover:bg-primary hover:text-background transition-all duration-300"
      >
        <FileDown className="w-5 h-5" />
        Download CV
      </a>
    </div>
  );
}
