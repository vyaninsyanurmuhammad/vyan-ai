"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

const LenisLayout = ({ children }: { children: React.ReactNode }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default LenisLayout;
