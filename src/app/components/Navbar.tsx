"use client";


import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/app/components/ui/navbar-menu";
import { cn } from "@/app/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div  className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item={"Home"}></MenuItem></Link>
        <MenuItem setActive={setActive} active={active} item={"About Us"}>
        <div className="flex flex-col space-y-5 text-sm"><HoveredLink href="/skills">My skills
        </HoveredLink></div>
        <div className="flex flex-col space-y-5 text-sm"><HoveredLink href="/dscience">Datascience
        </HoveredLink></div>
        <div className="flex flex-col space-y-5 text-sm"><HoveredLink href="/type">TypeScript
        </HoveredLink></div>
        <div className="flex flex-col space-y-5 text-sm"><HoveredLink href="/net">Html
        </HoveredLink></div>
        <div className="flex flex-col space-y-5 text-sm"><HoveredLink href="./web">Webs
        </HoveredLink></div>
        </MenuItem>
        <Link href="/contact">
        <MenuItem setActive={setActive} active={active} item={"contact"}></MenuItem>
        </Link>
      </Menu>
      
    </div>
  )
}

export default Navbar