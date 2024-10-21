"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { TracingBeam } from "./ui/tracing-beam";
import { FlipWords } from "./ui/flip-words";

import { ThreeDCardDemo } from "./3dcard";
import Home from "./Home";
import { SocialIcon } from "react-social-icons";

export function SidebarDemo() {
  const links = [
    {
      label: "Home",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 purple-icon  dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Projects",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-700 purple-icon  dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "About",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-700 purple-icon  dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Contact",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 purple-icon  dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const socials = [
    {
      label: "X",
      href: "#",
      icon: (
        <SocialIcon
          network="x"
          style={{ height: 25, width: 25 }}
          className="social"
        />
      ),
    },
    {
      label: "Instagram",
      href: "#",
      icon: (
        <SocialIcon
          network="instagram"
          style={{ height: 25, width: 25 }}
          className="social"
        />
      ),
    },
    {
      label: "Email",
      href: "#",
      icon: (
        <SocialIcon
          network="email"
          style={{ height: 25, width: 25 }}
          className="social"
        />
      ),
    },
    {
      label: "Github",
      href: "#",
      icon: (
        <SocialIcon
          network="github"
          style={{ height: 25, width: 25 }}
          className="social"
        />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md pt-4 flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1  mx-auto border border-neutral-200 dark:border-neutral-700 overflow-y-auto",
        // for your use case, use `h-screen` instead of `h-[60vh]`
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1  overflow-y-auto overflow-x-hidden">
            {/* {open ? <Logo /> : <LogoIcon />} */}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  className="hover:bg-white hover:shadow p-2 rounded"
                />
              ))}
            </div>
            {open ? <h2 className="mt-8 text-neutral-700">Socials</h2> : ""}
            <div className="mt-2 flex flex-col gap-2">
              {socials.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  className=" hover:bg-white hover:shadow p-2 rounded"
                />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Alexander Oronsaye",
                href: "#",
                icon: (
                  <Image
                    src=""
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>

      <Home />
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

// Dummy dashboard component with content
