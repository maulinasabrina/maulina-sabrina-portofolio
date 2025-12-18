import Image from "next/image";
import Hero from "../components/Hero";
import Project from "../components/Project";
import About from "../components/About";
import Contact from "../components/Contact";
import TechStackNew from "../components/TechStackNew";

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
