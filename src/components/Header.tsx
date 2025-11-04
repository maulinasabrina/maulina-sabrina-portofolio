"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

//   console.log(headingFont.variable);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 font-body">

      <div className="max-w-8xl mx-auto px-8 lg:px-24  py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="font-semibold text-lg ">
          <Image
             src="/assets/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
            // className="rounded-full"
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
        <div className="md:hidden bg-white/90 backdrop-blur border-b border-black/5">
          <div className="flex flex-col p-5 gap-3">
            {links.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-lg py-2"
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
