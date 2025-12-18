import { GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col justify-center px-6 md:px-10 lg:px-20 xl:px-36 mx-auto pt-32"
    >

      
      <div className="flex items-center justify-center gap-6 mb-16">
  
            {/* Left Divider */}
            <div className="hidden md:block h-[2px] w-24 bg-primary/30 rounded-full"></div>

            {/* Title */}
            <h2 className="text-5xl font-heading text-primary font-bold text-center">
                About
            </h2>

            {/* Right Divider */}
            <div className="hidden md:block h-[2px] w-24 bg-primary/30 rounded-full"></div>

        </div>

    {/* ─────────────────────────────── */}
    {/* TOP 2-COLUMN SECTION */}
    {/* ─────────────────────────────── */}

    <div className="grid grid-cols-1 md:grid-cols-[4fr_2fr] gap-30 items-start">

      {/* LEFT COLUMN — INTRO TEXT */}
      <div className="space-y-4 text-justify">
        <p className="text-lg leading-relaxed">
          Hi, I’m Maol — an Informatics Engineering graduate who enjoys building
          thoughtful, intentional systems that feel reliable and made to last.
        </p>

        <p className="text-lg leading-relaxed">
          I love the process of learning — slowly, consistently, and meaningfully.
          Whether it’s exploring new technologies or organizing ideas, I find joy in turning 
          thoughts into something structured.
        </p>

        <p className="text-lg leading-relaxed">
          Still growing, still learning — quietly, but consistently.
        </p>
      </div>

      {/* RIGHT COLUMN — PERSONAL SPACE (Alert-style) */}
      <div className="w-full bg-primary/5 border border-primary/20 p-6 rounded-xl shadow-sm 
                      flex flex-col md:items-start text-center md:text-left transition-all">

        <p className="text-base text-primary font-semibold leading-relaxed">
          If you’d like to know me beyond the code — the things I love, watch, and write about —
          you can visit my personal space below 🌿
        </p>

        <a
          href="https://maulina-life-repo-production-3143.up.railway.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-2 rounded-full border border-primary 
                    text-primary hover:bg-primary hover:text-background transition-all duration-300"
        >
          Visit My Personal Space
        </a>

      </div>

    </div>

      {/* Divider */}
      <div className="w-full h-[1px]  my-12"></div>

      {/* ─────────────────────────────── */}
      {/* EDUCATION SECTION */}
      {/* ─────────────────────────────── */}

      <div className="relative bg-background border border-border/30 rounded-3xl p-8 pt-14 shadow-sm mb-14">

        {/* Floating Badge Title */}
          <div className="absolute -top-3 left-6 bg-primary text-background 
              text-sm font-semibold px-4 py-1.5 rounded-full shadow-md 
              flex items-center gap-2"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Education</span>
          </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">

          {/* EDUCATION CARD */}
          <div className="p-5 border border-border/30 rounded-xl bg-white/70 backdrop-blur-sm">
            <h3 className="font-semibold text-lg">Universitas Dummy Indonesia</h3>
            <p className="text-sm text-primary/70 italic">
              Informatics Engineering — GPA 3.79 / 4.00
            </p>

            <ul className="mt-3 text-sm text-primary/90 space-y-1 list-disc list-inside">
              <li>Member of Software Engineering Club</li>
              <li>Lead developer for campus projects</li>
              <li>Event organizer for tech workshops</li>
            </ul>
          </div>

          {/* ORGANIZATION CARD */}
          <div className="p-5 border border-border/30 rounded-xl bg-white/70 backdrop-blur-sm">
            <h3 className="font-semibold text-lg">Himpunan Informatika</h3>
            <p className="text-sm text-primary/70 italic">Organizational Experience</p>

            <ul className="mt-3 text-sm space-y-1 list-disc list-inside">
              <li>Staff of Creative Media Division</li>
              <li>Handled branding and documentation</li>
              <li>Supported large-scale campus events</li>
            </ul>
          </div>

          {/* ASLAB CARD */}
          <div className="p-5 border border-border/30 rounded-xl bg-white/70 backdrop-blur-sm">
            <h3 className="font-semibold text-lg">Assistant Laboratory</h3>
            <p className="text-sm text-primary/70 italic">Teaching Support</p>

            <ul className="mt-3 text-sm space-y-1 list-disc list-inside">
              <li>Assisted practical classes</li>
              <li>Guided debugging and exercises</li>
              <li>Helped prepare learning materials</li>
            </ul>
          </div>

        </div>
      </div>


      {/* ─────────────────────────────── */}
      {/* EXPERIENCE SECTION */}
      {/* ─────────────────────────────── */}

      <div className="relative bg-background border border-border/30 rounded-3xl p-8 shadow-sm">

        {/* Title */}
        <div className="absolute -top-3 left-6 bg-primary text-background 
              text-sm font-semibold px-4 py-1.5 rounded-full shadow-md 
              flex items-center gap-2"
        >
            <Briefcase className="w-4 h-4" />
            <span>Experience</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          {/* INTERNSHIP */}
          <div className="p-5 border border-border/30 rounded-xl bg-white/70 backdrop-blur-sm">
            <h3 className="font-semibold text-lg">Backend Intern</h3>
            <p className="text-sm text-primary/70 italic">Tech Startup A — 2023</p>

            <ul className="mt-3 text-sm space-y-1 list-disc list-inside">
              <li>Developed REST API</li>
              <li>Improved DB performance</li>
              <li>Maintained code quality</li>
            </ul>
          </div>

          {/* INDEPENDENT STUDY */}
          <div className="p-5 border border-border/30 rounded-xl bg-white/70 backdrop-blur-sm">
            <h3 className="font-semibold text-lg">Independent Study</h3>
            <p className="text-sm text-primary/70 italic">MSIB — 2022</p>

            <ul className="mt-3 text-sm space-y-1 list-disc list-inside">
              <li>Learned fullstack development</li>
              <li>Worked in squad-based workflow</li>
              <li>Delivered final technical project</li>
            </ul>
          </div>

          {/* FULL-TIME LEARNER */}
          <div className="p-5 border border-border/30 rounded-xl bg-white/70 backdrop-blur-sm">
            <h3 className="font-semibold text-lg">Full-Time Learner</h3>
            <p className="text-sm text-primary/70 italic">Ongoing</p>

            <ul className="mt-3 text-sm space-y-1 list-disc list-inside">
              <li>Building portfolio projects</li>
              <li>Learning Web & Machine Learning</li>
              <li>Documenting progress in Learning Journal</li>
            </ul>

            <a
              href="https://www.notion.so/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-4 py-1.5 rounded-full border border-primary text-primary text-sm hover:bg-primary hover:text-background transition-all"
            >
              View Learning Journal →
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}
