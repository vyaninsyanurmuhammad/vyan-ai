"use client";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { DetailedHTMLProps, useRef } from "react";

interface PinnedGsaplayoutProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const PinnedGsapLayout = ({ children, ...props }: PinnedGsaplayoutProps) => {
  const ref = useRef(null);

  useGSAP(
    () => {
      if (ref.current)
        ScrollTrigger.create({
          trigger: ref.current,
          start: "top bottom",
          end: "bottom center",
          markers: true,
          onEnter: () => {
            
          },
          onEnterBack: () => {
           
          },
          onLeave: () => {
           
          },
          onLeaveBack: () => {
            
          },
        });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
};

export default PinnedGsapLayout;
