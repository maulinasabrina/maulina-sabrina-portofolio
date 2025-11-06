import { Github, Linkedin, Mail, Instagram, FileDown } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="w-full py-12 px-6 md:px-10 lg:px-20 xl:px-36 mx-auto text-center md:text-left">
      {/* Heading */}
      <h1 className="text-primary text-5xl font-extrabold font-heading text-start mb-6">
        Contact Me
      </h1>

      {/* Description */}
      <p className="text-lg leading-relaxed mb-8 text-muted-foreground text-center max-w-2xl mx-auto">
        I’m always open to connecting! Whether you have a question, a project idea,
        or just want to say hello — feel free to reach out 💌 You can email me at{" "}
        <a
          href="mailto:maulinasabrina04@gmail.com"
          className="text-primary underline hover:text-primary/80 transition-colors"
        >
          maulinasabrina04@gmail.com
        </a>.
      </p>

      {/* Socials & CV */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 mt-10 border-t border-border pt-10">
        {/* Social Links */}
        <div className="flex gap-6">
          <Link
            href="https://github.com/maolinasabrina"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-1"
          >
            <Github className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
              Github
            </span>
          </Link>

          <Link
            href="https://www.linkedin.com/in/maulinasabrina"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-1"
          >
            <Linkedin className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
              LinkedIn
            </span>
          </Link>

          <Link
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-1"
          >
            <Instagram className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
              Instagram
            </span>
          </Link>

          <Link
            href="mailto:maulinasabrina04@gmail.com"
            className="group flex flex-col items-center gap-1"
          >
            <Mail className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
              Email
            </span>
          </Link>
        </div>

        {/* Download CV */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-muted-foreground">Want to see more about my experience?</p>
          <a
            href="/files/MaulinaSabrina_CV.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300"
          >
            <FileDown className="w-5 h-5" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
