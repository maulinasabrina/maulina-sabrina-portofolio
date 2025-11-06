import Image from "next/image";
import Hero from "../components/Hero";
import Project from "../components/Project";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
    <Hero/>
    <Project/>
    <About/>
    <Contact/>
    </>
  );
}
