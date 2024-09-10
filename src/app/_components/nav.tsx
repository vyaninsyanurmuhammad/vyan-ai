"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface NavProps {
  navigation: {
    text: string;
    href: string;
    id: string;
  }[];
}

const Nav = ({ navigation }: NavProps) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Update active section based on the section that's currently in view
          setActiveSection(entry.target.id);
        }
      });
    };

    // Create observer with options (threshold 0.6 means 60% of the section is visible)
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.6,
    });

    // Observe all sections
    const sectionElements = navigation.map((id) =>
      document.getElementById(id.id),
    );
    sectionElements.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Cleanup observer on component unmount
    return () => {
      sectionElements.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [navigation]);

  return (
    <nav className="fixed left-1/2 top-4 z-50 flex -translate-x-1/2 flex-row items-center gap-6">
      <Image
        src={"/assets/svg/logo.svg"}
        className="!relative hidden !h-10 !w-auto object-contain sm:block"
        sizes="100%"
        fill
        priority
        alt="iphone-case"
      />
      <div className="flex h-16 items-center justify-center rounded-lg bg-white px-4 shadow-xl">
        {navigation.map((nav, index) => (
          <Link
            key={`${nav.text}-${index}`}
            href={nav.href}
            className={cn(
              "relative flex h-full w-full items-center justify-center px-4 font-outfit font-semibold hover:bg-lime-50/50",
              activeSection === nav.id &&
                "before:absolute before:top-0 before:h-1 before:w-full before:bg-lime-400 before:content-['']",
            )}
          >
            {nav.text}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
