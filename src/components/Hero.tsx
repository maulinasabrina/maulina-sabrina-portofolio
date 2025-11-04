import Image from 'next/image';
import Socials from './Socials';
import TechStack from './TechStack';

export default function Hero() {
  return (
    <>
    {/* Container Padding */}
    <div  className='w-full py-4 md:py-12 px-6 md:px-10 lg:px-20 xl:px-36  mx-auto'>
        {/* Container Img, Text, Tech Stack */}
        <div className='flex flex-col md:flex-row-reverse lg:flex-row-reverse gap-8 items-center '>

            <div className='w-30 sm:w-30 md:w-fit lg:w-fit flex justify-center' >
                <Image src="/assets/images/globe.svg" alt="" className=' bg-primary border-1 border-background rounded-full' width={250} height={250} />
            </div>

            {/* Container Texts and Socials */}
            <div className='w-full flex flex-col gap-4'>
                    <div className='w-full flex flex-col md:flex-row-reverse gap-6 items-center justify-end'>
                        <h3 className='text-primary-foreground text-md md:text-lg fo nt-semibold bg-primary px-6 py-2 rounded-full'> OPEN TO WORK</h3>
                        <h1 className='text-primary font-extrabold text-4xl md:text-5xl font-heading'>Hi, I   &apos;m Maulina</h1>
                    </div>
                    <p className='text-black text-md md:text-lg text-center md:text-left'>
                        Fresh graduate in Informatics Engineering, eager to grow in software engineering — especially in web and mobile development.
                    </p>
                    {/* Social Links */}
                    <Socials/>  
            </div>
        </div>
        {/* Tech Stack */}
        <TechStack/>
    </div>

    </>

  )
}
