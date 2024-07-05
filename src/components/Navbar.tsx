'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { HoverBorderGradientDemo } from "./HoverBoard";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="About">
                    </MenuItem>
                </Link>
                <Link href={"/projects"}>
                    <MenuItem setActive={setActive} active={active} item="My Projects">
                    </MenuItem>
                </Link>
                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Connect with me">
                    </MenuItem>
                </Link>
                <HoverBorderGradientDemo name="Explore projects" link="/projects" />
                <HoverBorderGradientDemo name="Explore github" link="https://github.com/nishantnandeshwar" />
            </Menu>
        </div>
    )
}

export default Navbar