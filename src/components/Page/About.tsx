"use client";

import { GraduationCap, Briefcase } from "lucide-react";
import { aboutIntro, personalSpace, education, experience } from "@/src/app/data/about";

import EduCard from "../About/EduCard";
import ExpCard from "../About/ExpCard";
import SectionBadge from "../About/SectionBadge";

export default function About() {
  return (
    <section id="about" className="w-full min-h-screen px-6 md:px-10 lg:px-20 xl:px-36 mx-auto pt-28 md:pt-32">

      {/* Title */}
      <div className="flex items-center justify-center gap-6 mb-8 md:mb-16">
        <div className="hidden md:block h-[2px] w-24 bg-primary/30 rounded-full"></div>
        <h2 className="text-3xl md:text-5xl font-heading text-primary font-bold text-center">About</h2>
        <div className="hidden md:block h-[2px] w-24 bg-primary/30 rounded-full"></div>
      </div>

      {/* TOP 2 COLUMN */}
      <div className="grid grid-cols-1 md:grid-cols-[4fr_2fr] gap-10 md:gap-30 items-start">

        {/* INTRO TEXT */}
        <div className="space-y-4 text-justify">
          {aboutIntro.map((text) => (
            <p key={text} className="text-sm md:text-lg leading-relaxed">
              {text}
            </p>
          ))}
        </div>

        {/* PERSONAL SPACE */}
        <div className="w-full bg-primary/5 border border-primary/20 p-6 rounded-xl shadow-sm flex flex-col md:items-start text-center md:text-left transition-all">
          <p className="text-sm md:text-base text-primary font-semibold leading-relaxed">
            {personalSpace.text}
          </p>

          <a
            href={personalSpace.link}
            target="_blank"
            className="inline-block mt-4 px-6 py-2 rounded-full border border-primary 
                       text-sm md:text-lg text-primary hover:bg-primary hover:text-background transition-all duration-300"
          >
            Visit My Personal Space
          </a>
        </div>

      </div>

      {/* Divider */}
      <div className="w-full h-[1px] my-12"></div>

      {/* EDUCATION */}
      <div className="relative bg-background border border-border/30 rounded-2xl md:rounded-3xl p-5 md:p-8 pt-12 md:pt-14 shadow-sm mb-14">
        <SectionBadge
          icon={<GraduationCap className="w-3 h-3 md:w-4 md:h-4" />}
          label="Education"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 md:mt-6">
          {education.map((edu) => (
            <EduCard
              key={edu.title}
              title={edu.title}
              subtitle={edu.subtitle}
              items={edu.items}
            />
          ))}
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="relative bg-background border border-border/30 rounded-2xl md:rounded-3xl p-5 md:p-8 pt-12 md:pt-14 shadow-sm">
        
        <SectionBadge
          icon={<Briefcase className="w-3 h-3 md:w-4 md:h-4" />}
          label="Experience"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          {experience.map((exp) => (
            <ExpCard
              key={exp.title}
              title={exp.title}
              subtitle={exp.subtitle}
              items={exp.items}
              button={exp.button}
            />
          ))}
        </div>

      </div>

    </section>
  );
}
