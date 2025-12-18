import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Socials() {
  return (
<div className="flex items-center gap-4 mt-2 justify-center md:justify-start">
                    <a
                        href="https://github.com/maulinasabrina/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-110 shadow-sm"
                        aria-label="GitHub"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/maulinasabrina/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-110 shadow-sm"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                        href="https://instagram.com/maulinasbrina"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-110 shadow-sm"
                        aria-label="Instagram"
                    >
                        <Instagram className="w-6 h-6" />
                    </a>
                    <a
                        href="mailto:maulinasabrina04@gmail.com"
                        className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-110 shadow-sm"
                        aria-label="Email"
                    >
                        <Mail className="w-6 h-6" />
                    </a>
                </div>
  )
}


