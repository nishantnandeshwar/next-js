"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function HoverBorderGradientDemo() {
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className=" text-black dark:text-white flex items-center space-x-2"   //dark:bg-black bg-white
      >
       sdfsdfd
      </HoverBorderGradient>
    </div>
  );
}
