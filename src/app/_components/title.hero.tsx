"use client";

import React from "react";
import { motion } from "framer-motion";

const TitleHero = () => {
  const titleText = "Plan Execute Evolve";

  const durations = [1.0, 1.2, 1.1, 1.3];

  return (
    <motion.h1 className="font-wixmadefordisplay relative flex w-full flex-wrap text-6xl md:text-7xl font-extrabold uppercase tracking-wide text-white xl:text-8xl">
      {titleText.split(" ").map((text, index) => (
        <span key={`${text}-${index}`} className="inline-flex h-fit w-full">
          {text.split("").map((chara, indexChara) => {
            const duration = durations[indexChara % durations.length];

            return (
              <span
                key={`${chara}-${indexChara}`}
                className="flex h-fit w-fit overflow-hidden"
              >
                <motion.span
                  className="h-full"
                  initial={{ translateY: "100%" }}
                  whileInView={{
                    translateY: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.1,
                      duration,
                      ease: "easeInOut",
                    },
                  }}
                  exit={{ translateY: "100%" }}
                  animate={{
                    transition: {
                      type: "spring",
                      bounce: 0.1,
                      duration,
                      ease: "easeInOut",
                    },
                  }}
                >
                  {chara}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </motion.h1>
  );
};

export default TitleHero;
