"use client";

import Socials from "../Contact/Socials";
import ContactDescription from "../Contact/ContactDescription";
import WhatsAppButton from "../Contact/WhatsappButton";
import DownloadCV from "../Contact/DownloadCV";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen flex flex-col justify-center
                 px-6 md:px-10 lg:px-20 xl:px-36 mx-auto text-center md:text-left pt-10 md:pt-20"
    >
       <div className="flex items-center justify-center gap-6 mb-4 md:mb-16">
          <div className="hidden md:block h-[2px] w-24 bg-primary/30 rounded-full"></div>

          <h2 className="text-3xl md:text-5xl font-heading text-primary font-bold text-center">
            Contact
          </h2>

          <div className="hidden md:block h-[2px] w-24 bg-primary/30 rounded-full"></div>
        </div>

      <ContactDescription />

      <WhatsAppButton />

      <div className="flex flex-col md:flex-row justify-center md:justify-between 
                      items-center gap-8 mt-10 border-t border-border pt-10">
        <Socials />

        <DownloadCV />
      </div>
    </section>
  );
}
