"use client";

import React from "react";
import { motion } from "framer-motion";

const DescriptionHero = () => {
  return (
    <motion.p
      className="font-outfit text-2xl font-normal text-white"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.1,
          duration: 3.5,
          ease: "easeInOut",
        },
      }}
      exit={{ opacity: 0.2 }}
      animate={{
        transition: {
          type: "spring",
          bounce: 0.1,
          duration: 3.5,
          ease: "easeInOut",
        },
      }}
    >
      We strive to transform your business by streamlining every development
      phase, ensuring seamless integration across all platforms.
    </motion.p>
  );
};

export default DescriptionHero;
