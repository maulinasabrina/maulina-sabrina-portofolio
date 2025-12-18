"use client";

import HeroImage from "../Hero/HeroImage";
import HeroText from "../Hero/HeroText";
import { heroData } from "@/src/app/data/hero";

export default function Hero() {
  return (
    <div className="min-h-[calc(100vh-180px)] flex flex-col justify-center mx-auto">

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        <HeroImage src={heroData.image} />

        <HeroText
          name={heroData.name}
          location={heroData.location}
          description={heroData.description}
        />

      </div>

    </div>
  );
}
