import Image from "next/image";
import Hero from "../components/Page/Hero";
import Project from "../components/Page/Project";
import About from "../components/Page/About";
import Contact from "../components/Page/Contact";
import TechStackNew from "../components/Page/TechStackNew";

export default function Home() {
  return (
    <>
    <Hero/>
    <TechStackNew/>
    <Project/>
    <About/>
    <Contact/>
    </>
  );
}
