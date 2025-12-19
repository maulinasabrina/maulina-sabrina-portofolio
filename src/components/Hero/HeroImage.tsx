"use client";

import Image from "next/image";

export default function HeroImage({ src }: { src: string }) {
  return (
    <div className="flex justify-center md:justify-start">
      <div
        className="
          bg-primary rounded-sm flex items-center justify-center
          w-[120px] h-[160px] 
          md:w-[248px] md:h-[340px]
        "
      >
        <Image
          src={src}
          alt="Profile"
          width={400}
          height={600}
          className="
            object-cover rounded-sm
            w-[120px] h-[160px] border-2 border-primary md:border-none
            md:w-[238px] md:h-[330px]
          "
        />
      </div>
    </div>
  );
}
