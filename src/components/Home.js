"use client";
import React, { useState } from "react";
import { FlipWords } from "./ui/flip-words";
import Image from "next/image";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
  IconBrandWhatsapp,
  IconDownload,
  IconMessageCircle,
} from "@tabler/icons-react";
import Link from "next/link";
import { TypewriterEffect } from "./ui/typewriter-effect";

const Home = () => {
  const words = ["Hello!", "Bonjour!", "Hola!", "Nnọọ!"];
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const resumeUrl = "/resume.pdf";
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.setAttribute("download", "Alexander-Oronsaye-Resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setTimeout(() => setIsDownloading(false), 1000);
    }
  };

  const intro = [
    {
      text: "I'm",
      className: "text-4xl lg:text-6xl",
    },
    {
      text: "Osahon.",
      className: "text-purple-500 dark:text-purple-500 text-4xl lg:text-6xl",
    },
  ];

  const socials = [
    {
      label: "X",
      href: "https://x.com/edojonsnow",
      icon: <IconBrandX className="text-neutral-500 hover:text-purple-500 dark:text-neutral-400 h-6 w-6" />,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/edojonsnow/",
      icon: <IconBrandInstagram className="text-neutral-500 hover:text-purple-500 dark:text-neutral-400 h-6 w-6" />,
    },
    {
      label: "Email",
      href: "mailto:osahonoronsaye@yahoo.com",
      icon: <IconMail className="text-neutral-500 hover:text-purple-500 dark:text-neutral-400 h-6 w-6" />,
    },
    {
      label: "Github",
      href: "https://github.com/Edojonsnow",
      icon: <IconBrandGithub className="text-neutral-500 hover:text-purple-500 dark:text-neutral-400 h-6 w-6" />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/alexanderoronsaye?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiMSDI%2BPkQU2C1%2BjhHN4JLA%3D%3D",
      icon: <IconBrandLinkedin className="text-neutral-500 hover:text-purple-500 dark:text-neutral-400 h-6 w-6" />,
    },
     {
      label: "What'sApp",
      href: "https://wa.link/lgb6ji",
      icon: <IconBrandWhatsapp className="text-neutral-500 hover:text-purple-500 dark:text-neutral-400 h-6 w-6" />,
    },
  ];

  return (
    <div className="h-screen w-full bg-white dark:bg-neutral-900 flex flex-col items-center justify-center overflow-y-auto ">
      <div className="max-w-4xl w-full px-4 md:px-10 flex flex-col items-center text-center space-y-8">
        
        {/* Intro Section */}
        <div className="flex flex-col items-center gap-4">
             <div className="flex items-center gap-2 mb-2">
                 <Image src="/hello.png" width={40} height={40} alt="hello" className="animate-pulse" />
                 <div className="text-2xl md:text-4xl text-neutral-600 dark:text-neutral-300 font-normal">
                    <FlipWords words={words} className="text-purple-500 font-semibold" />
                 </div>
            </div>
            
             <TypewriterEffect
              words={intro}
              className="text-center"
              cursorClassName="bg-purple-500"
            />
            
            <p className="max-w-2xl text-base md:text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed mt-4">
I&apos;m a full-stack developer crafting modern, scalable web applications with clean design, powerful backend logic, and exceptional user experience. <br /> Let&apos;s build something amazing together
            </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
             <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950 px-8 font-medium text-neutral-200 transition-all duration-300 hover:bg-neutral-800 hover:text-white hover:ring-2 hover:ring-purple-500 hover:ring-offset-2 hover:ring-offset-white dark:hover:ring-offset-black"
                >
                <span className="mr-2">Download Resume</span>
                 <IconDownload className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
            </button>

             <Link href="/contact">
                 <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-white px-8 font-medium text-neutral-600 transition-all duration-300 hover:bg-neutral-50 hover:text-purple-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700">
                    <span className="mr-2">Let&apos;s Chat</span>
                     <IconMessageCircle className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                 </button>
            </Link>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 mt-12">
           {socials.map((link, idx) => (
             <Link
               key={idx}
               href={link.href}
               target="_blank"
               className="transform hover:scale-110 transition-transform duration-200"
             >
               {link.icon}
             </Link>
           ))}
        </div>

      </div>
    </div>
  );
};

export default Home;
