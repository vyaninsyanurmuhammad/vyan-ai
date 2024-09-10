"use client";

import React from "react";
import Button from "./button";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const ButtonContactHero = () => {
  return (
    <motion.div
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
      exit={{ opacity: 0 }}
      animate={{
        transition: {
          type: "spring",
          bounce: 0.1,
          duration: 3.5,
          ease: "easeInOut",
        },
      }}
    >
      <Button className="flex w-fit items-center justify-center gap-4 rounded-full px-10 py-4 font-suse font-medium italic">
        <span className="text-2xl">Contact Us</span>
        <MoveRight className="h-9 w-9" />
      </Button>
    </motion.div>
  );
};

export default ButtonContactHero;
