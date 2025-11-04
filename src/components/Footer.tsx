import Link from "next/link";


export default function Footer() {
     return (
        <footer className="w-full fixed bottom-0 bg-primary left-0 z-50 font-body">
       
            <div className="max-w-8xl mx-auto px-8 lg:px-4  py-1 flex items-center justify-between text-center text-primary-foreground">
           
                {/* © 2024 Maulina Sabrina. All rights reserved. */}
                 <Link href="/" className="font-heading text-xl lg:text-2xl ">©Maulina Sabrina</Link>
                 <Link href="/" className="font-heading text-xl lg:text-2xl ">maulinasabrina04@gmail.com</Link>
                 <Link href="/" className="font-heading text-xl lg:text-2xl ">2025</Link>
            </div>
      
   
        </footer>
  );
    
}