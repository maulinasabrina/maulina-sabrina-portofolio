import type { Metadata } from "next";
import { Italianno } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";




{/* Fonts  */}
const headingFont = Italianno({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

const bodyFont = localFont({
  src : "../../../public/assets/fonts/AppleGaramond-Light.ttf",
  variable: "--font-body",
});

{/* Metadata */}
export const metadata: Metadata = {
  title: "Portofolio - Maulina Sabrina",
  description: "Portofolio website of Maulina Sabrina, showcasing projects, skills, and contact information.",
};

{/* Root Layout */}
export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div> 
      <main className="px-6  max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  );
}