import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button className={cn(className, "group relative bg-lime-400 overflow-hidden")} {...props}>
      <div className="absolute -left-full z-10 !aspect-square h-auto w-full shrink-0 mix-blend-screen -translate-x-1/2 rotate-45 rounded-2xl bg-[#2f98d0] transition-all duration-1000 ease-in-out group-hover:left-0 group-hover:translate-x-0"></div>
      <div className="z-20 flex gap-4 mix-blend-multiply">{children}</div>
    </button>
  );
};

export default Button;
