import Image from 'next/image'
import Socials from './Socials'
// import TechStack from './TechStack'

export default function Hero() {
  return (
    <>
     <div className="min-h-[calc(100vh-180px)] flex flex-col justify-center mx-auto">


        <div className="flex flex-col md:flex-row items-center gap-12">

         {/* FOTO */}
        <div className="flex justify-center md:justify-start">
        <div
            className="
            bg-primary 
            rounded-2xl 
            flex items-center justify-center
            
            /* MOBILE */
            w-[160px] h-[160px] border-2 border-primary md:border-none
            
            /* DESKTOP RECTANGLE */
            md:w-[280px] md:h-[320px]
            "
        >
            <Image
            src="/assets/images/profil.jpeg"
            alt="Maulina Sabrina"
            width={400}
            height={400}
            className="
                object-cover rounded-xl
                
                /* MOBILE FOTO */
                w-[120px] h-[120px]
                
                /* DESKTOP FOTO KECIL DI TENGAH */
                md:w-[160px] md:h-[160px]
            "
            />
        </div>
        </div>

          {/* TEXT AREA */}
          <div className="flex flex-col gap-4 w-full 
                md:items-start items-center 
                text-center md:text-left
                md:pl-14
            ">


            {/* TITLE + BADGE */}
            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              <h1 className="text-primary font-extrabold text-5xl md:text-6xl font-heading">
                Hi, I&apos;m Maulina
              </h1>

              <span className="bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                Kediri, Indonesia
              </span>
            </div>

            {/* DESKRIPSI */}
            <p className="text-lg text-black/80 max-w-xl leading-relaxed">
              Fresh graduate in Informatics Engineering, eager to grow in software engineering —
              especially in web and mobile development.
            </p>

            {/* BUTTON
            <button className="mt-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition">
              Get in Touch
            </button> */}

            {/* SOSIAL MEDIA */}
            <div className="mt-2">
              <Socials />
            </div>
          </div>
        </div>

        {/* <div className="mt-10">
          <TechStack />
        </div> */}

      </div>
    </>
  )
}
