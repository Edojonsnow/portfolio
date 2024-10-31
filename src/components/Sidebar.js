"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  IconAddressBook,
  IconArrowLeft,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTabler,
  IconBrandX,
  IconCode,
  IconLayoutDashboard,
  IconMail,
  IconSettings,
  IconUser,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function SidebarDemo({ children }) {
  const [isDownloading, setIsDownloading] = React.useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // Replace this URL with your actual resume file URL
      const resumeUrl = "/resume.pdf";

      // Create a temporary link element
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.setAttribute("download", "Alexander-Oronsaye-Resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      // Reset the button state after a brief delay
      setTimeout(() => setIsDownloading(false), 1000);
    }
  };
  const links = [
    {
      label: "Home",
      href: "/",
      icon: (
        <IconLayoutDashboard className="text-neutral-500 purple-icon  dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Projects",
      href: "/projects",
      icon: (
        <IconCode className="text-neutral-500 purple-icon  dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "About",
      href: "/about",
      icon: (
        <IconUser className="text-neutral-500 purple-icon  dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Contact",
      href: "/contact",
      icon: (
        <IconAddressBook className="text-neutral-500 purple-icon  dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const socials = [
    {
      label: "X",
      href: "https://x.com/edojonsnow",
      icon: (
        <IconBrandX className="text-neutral-500 purple-icon  dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/edojonsnow/",
      icon: (
        <IconBrandInstagram className="text-neutral-500 purple-icon  dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Email",
      href: "mailto:osahonoronsaye@yahoo.com",
      icon: (
        <IconMail className="text-neutral-500 purple-icon  dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Github",
      href: "https://github.com/Edojonsnow",
      icon: (
        <IconBrandGithub className="text-neutral-500 purple-icon  dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/alexanderoronsaye?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiMSDI%2BPkQU2C1%2BjhHN4JLA%3D%3D",
      icon: (
        <IconBrandLinkedin className="text-neutral-500 purple-icon  dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md lg:pt-4 flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1  mx-auto border border-neutral-200 dark:border-neutral-700 overflow-y-auto",
        // for your use case, use `h-screen` instead of `h-[60vh]`
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-5">
          <div>
            <Image
              src="/profile-pic.jpeg"
              className={` w-20 object-cover object-bottom flex-shrink-0 rounded-full mx-auto  ${
                open ? "h-24" : "h-8"
              }`}
              width={50}
              height={50}
              alt="Avatar"
            />
            <SidebarLink
              link={{
                label: (
                  <div className="py-1.5 mx-auto ">
                    <p> Alexander O. Oronsaye</p>
                    <p className="text-sm text-gray-400"> Software Developer</p>
                  </div>
                ),
                href: "#",
              }}
              className="p-0 text-black justify-center"
            />
          </div>
          <div className="flex flex-col flex-1  overflow-y-auto overflow-x-hidden">
            {/* {open ? <Logo /> : <LogoIcon />} */}
            <div className=" flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  className="hover:bg-white hover:shadow p-2 rounded justify-start"
                />
              ))}
            </div>
            {/* {open ? <h2 className="mt-8 text-neutral-700">Socials</h2> : ""} */}
          </div>
          {open ? (
            <button
              disabled={isDownloading}
              onClick={handleDownload}
              value="Send Message"
              className="p-[3px] relative lg:mb-6"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
              <div
                id="send"
                className="px-8 py-2  bg-white rounded-full  relative group transition duration-200 text-black hover:text-white hover:bg-transparent"
              >
                Resume
              </div>
            </button>
          ) : (
            ""
          )}
        </SidebarBody>
      </Sidebar>
      {children}
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
