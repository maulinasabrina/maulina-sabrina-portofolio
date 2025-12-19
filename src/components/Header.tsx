"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";


export default function Header() {

  {/* Navigasi Link */}
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#", label: "Home" },
    { href: "/#tech-stack", label: "Tech Stack" },
    { href: "/#project", label: "Project" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  {/* Navbar Stick and Scroll */}
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-background/80 backdrop-blur-md shadow-sm' : 'py-6'
      }`}>
     

      <div className="max-w-8xl mx-auto px-8 lg:px-24   flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="font-semibold text-lg">
          <Image
             src="/assets/images/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="w-20 h-10 lg:w-25 lg:h-15 object-contain"
            />
    
      
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex  border-1 border-primary  rounded-full text-lg leading-none  item-center">
          {links.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="px-8 gap-12 py-2 hover:bg-primary hover:text-primary-foreground  hover:rounded-full hover:transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button 
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-background backdrop-blur border-b border-black/5">
          <div className="flex flex-col p-5">
            {links.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-sm pl-4 py-2 hover:bg-primary/10"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
