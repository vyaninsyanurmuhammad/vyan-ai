import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import GsapLayout from "./_components/gsap.layout";
import LenisLayout from "./_components/lenis.layout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const wixMadeforDisplay = localFont({
  src: "./fonts/WixMadeforDisplayVF.ttf",
  variable: "--font-wixmadefordisplay-sans",
  weight: "400 500 600 700 800",
});
const outfitSans = localFont({
  src: "./fonts/OutfitVF.ttf",
  variable: "--font-outfit-sans",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Vyan AI",
  description: "Created by vyaninsyanurmuhammad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          wixMadeforDisplay.variable,
          outfitSans.variable,
          `antialiased`,
        )}
        suppressHydrationWarning
      >
        <GsapLayout>
          <LenisLayout>{children}</LenisLayout>
        </GsapLayout>
      </body>
    </html>
  );
}
