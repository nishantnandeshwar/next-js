"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Link from 'next/link';

export function HoverBorderGradientDemo({ name,link }: { name: string,link?: string }) {
  return (
    <Link href={`${link}`} target={name !== "Explore git" ? "_self" : "_blank"} className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className=" text-black dark:text-white flex items-center space-x-2"   //dark:bg-black bg-white
      >
        {name}
      </HoverBorderGradient>
    </Link>
  );
}


export function HoverBorderGradientButton({ name }: { name: string }) {
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className=" text-black dark:text-white flex items-center space-x-2"   //dark:bg-black bg-white
      >
        {name}
      </HoverBorderGradient>
    </div>
  );
}
