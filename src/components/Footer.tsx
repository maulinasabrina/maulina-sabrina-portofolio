import Link from "next/link";
import Socials from "./Socials";


export default function Footer() {
     return (
        <footer className="w-full fixed bottom-0 bg-primary left-0 z-50 font-body ">
       
            <div className="w-full sm:max-w-8xl py-1 px-4 flex items-center justify-between text-center text-primary-foreground">
           
                {/* © 2024 Maulina Sabrina. All rights reserved. */}
                 <Link href="/" className="w-60 text-start font-heading text-md xl:text-2xl ">©Maulina Sabrina</Link>
                 <Link href="/" className="w-60 text-center font-heading text-md xl:text-2xl ">maulinasabrina04@gmail.com</Link>
                 <Socials/>
                  {/* className="w-60 text-end font-heading text-md xl:text-2xl " */}
            </div>
      
   
        </footer>
  );
    
}