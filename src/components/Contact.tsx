import { Github, Linkedin, Mail, Instagram, FileDown } from "lucide-react";
import Link from "next/link";
import Socials from "./Socials";

export default function Contact() {
  return (
    <section
  id="contact"
  className="w-full min-h-screen flex flex-col justify-center
             px-6 md:px-10 lg:px-20 xl:px-36 mx-auto text-center md:text-left pt-20"
>
  {/* Heading */}
  <div className="flex items-center justify-center gap-6 mb-16">
  
            {/* Left Divider */}
            <div className="hidden md:block h-[2px] w-24 bg-primary/30 rounded-full"></div>

            {/* Title */}
            <h2 className="text-5xl font-heading text-primary font-bold text-center">
                Contact
            </h2>

            {/* Right Divider */}
            <div className="hidden md:block h-[2px] w-24 bg-primary/30 rounded-full"></div>

        </div>

  {/* Description */}
  <p className="text-lg leading-relaxed mb-8 text-muted-foreground text-center max-w-2xl mx-auto">
    I’m always open to connecting! Whether you have a question, a project idea,
    or just want to say hello — feel free to reach out 💌 You can email me at{" "}
    <a
      href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=maulinasabrina04@gmail.com"
      className="text-primary underline hover:text-primary/80 transition-colors"
    >
      maulinasabrina04@gmail.com
    </a>. 
  </p>
  <p className="text-lg leading-relaxed mb-8 text-muted-foreground text-center max-w-2xl mx-auto">
      or text me personally on link below :D
  </p>
  {/* WhatsApp CTA */}
  <a
    href={`https://wa.me/6282331598307?text=${encodeURIComponent(
      "Hi Maol 🤍\nJust wanted to say I came across your portfolio and I'd love to get to know you a bit.\nCan I ask you something? ✨"
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="mx-auto w-fit flex items-center justify-center px-5 py-2 rounded-full 
              border border-primary text-primary text-sm font-medium
              hover:bg-primary hover:text-background 
              transition-all duration-300 hover:scale-[1.03]"
  >
    Let’s talk on WhatsApp 💌
  </a>



  {/* Socials & CV */}
  <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 mt-10 border-t border-border pt-10">
    {/* Social Links */}
    <div className="flex gap-6">
      <Socials/>
    </div>

    {/* Download CV */}
    <div className="flex flex-col items-center md:items-end gap-2">
      <p className="text-muted-foreground">Want to see more about my experience?</p>
      <a
        href="/assets/files/MaulinaSabrina_CV.pdf"
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
