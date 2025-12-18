"use client";

import Image from "next/image";

export default function HeroImage({ src }: { src: string }) {
  return (
    <div className="flex justify-center md:justify-start">
      <div
        className="
          bg-primary rounded-2xl flex items-center justify-center
          w-[120px] h-[120px] 
          md:w-[280px] md:h-[320px]
        "
      >
        <Image
          src={src}
          alt="Profile"
          width={400}
          height={400}
          className="
            object-cover rounded-xl
            w-[120px] h-[120px] border-2 border-primary md:border-none
            md:w-[160px] md:h-[160px]
          "
        />
      </div>
    </div>
  );
}
