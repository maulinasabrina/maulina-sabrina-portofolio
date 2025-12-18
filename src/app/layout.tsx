import type { Metadata } from "next";
import { Italianno } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Fonts
const headingFont = Italianno({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

const bodyFont = localFont({
  src: "../../public/assets/fonts/AppleGaramond-Light.ttf",
  variable: "--font-body",
});

// Metadata
export const metadata: Metadata = {
  title: "Portofolio - Maulina Sabrina",
  description: "Portofolio website of Maulina Sabrina, showcasing projects, skills, and contact information.",
};

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} flex flex-col min-h-screen`}>
        <Header />

        <main className="flex-1 px-6 flex flex-col justify-center">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
