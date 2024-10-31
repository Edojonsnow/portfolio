"use client";
import React, { useState } from "react";
import { FlipWords } from "./ui/flip-words";
import { ThreeDCardDemo } from "./3dcard";
import StackIcon from "tech-stack-icons";
import { FloatingDock } from "./ui/floating-dock";
import { blogDesc, ecomDesc, quizDesc } from "@/app/data/data";
import Image from "next/image";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
  IconFileDescription,
  IconBrandWhatsapp,
  IconBubbleText,
} from "@tabler/icons-react";
import { SidebarLink } from "./ui/sidebar";
import Link from "next/link";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "./ui/typewriter-effect";

const Home = () => {
  const words = ["Hello!", "Bonjour!", "Hola!", "Nnọọ!"];
  const [isDownloading, setIsDownloading] = useState(false);

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

  const stack = [
    {
      icon: <StackIcon name="nextjs" className="w-15" />,
    },
    {
      icon: <StackIcon name="js" className="w-10" />,
    },
    {
      icon: <StackIcon name="nodejs" className="w-10" />,
    },
    {
      icon: <StackIcon name="figma" className="w-10" />,
    },
    {
      icon: <StackIcon name="aws" className="w-12" />,
    },
    {
      icon: <StackIcon name="docker" className="w-10" />,
    },
    {
      icon: <StackIcon name="go" className="w-10" />,
    },
    {
      icon: <StackIcon name="mongodb" className="w-10" />,
    },
    {
      icon: <StackIcon name="tailwindcss" className="w-10" />,
    },
  ];
  const intro = [
    {
      text: "I'm",
    },
    {
      text: "Osahon",
    },
  ];

  const socials = [
    {
      label: "X",
      href: "https://x.com/edojonsnow",
      icon: (
        <IconBrandX className="text-neutral-500 purple-icon hover:text-purple-500   dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/edojonsnow/",
      icon: (
        <IconBrandInstagram className="text-neutral-500 purple-icon hover:text-purple-500  dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Email",
      href: "mailto:osahonoronsaye@yahoo.com",
      icon: (
        <IconMail className="text-neutral-500 purple-icon hover:text-purple-500   dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Github",
      href: "https://github.com/Edojonsnow",
      icon: (
        <IconBrandGithub className="text-neutral-500 purple-icon hover:text-purple-500   dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "What'sApp",
      href: "#",
      icon: (
        <IconBrandWhatsapp className="text-neutral-500 purple-icon hover:text-purple-500   dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/alexanderoronsaye?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiMSDI%2BPkQU2C1%2BjhHN4JLA%3D%3D",
      icon: (
        <IconBrandLinkedin className="text-neutral-500 purple-icon hover:text-purple-500  dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  return (
    <div className="flex w-full  ">
      <div className="p-4  md:p-10  overflow-y-auto  lg:rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 h-screen  gap-2 w-full ">
        <div className="lg:w-fit flex flex-col lg:flex-row lg:gap-72 items-center pt-16 lg:pt-24 lg:ml-48">
          <div>
            <div className="flex items-center text-bold text-[40px] gap-4">
              <Image src="/hello.png" width={50} height={50} />
              <FlipWords words={words} className=" text-purple-500   p-0" />
            </div>

            <TypewriterEffect
              className="text-bold text-[50px] lg:pt-4 lg:text-[120px]  w-fit text-gray-600"
              words={intro}
            />

            <h3 className="text-md w-fit "></h3>
            <div className="flex flex-col gap-4 lg:flex-row  lg:gap-40">
              <p
                data-aos="fade-right"
                className=" w-[300px] lg:w-[350px] pt-4 lg:pt-10 text-gray-500 text-justify"
              >
                I am a full-stack developer specializing in crafting dynamic and
                user-friendly web applications. I am open to freelance gigs and
                internships.
                <br /> Let&apos;s create something amazing together!
              </p>

              <div
                class=" lg:pt-10 relative mx-auto w-fit cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <span
                  onClick={handleDownload}
                  className="text-gray-500 group hidden lg:block   relative"
                >
                  <div className="flex">
                    Download my resume
                    <IconFileDescription
                      stroke={2}
                      className="text-purple-400"
                    />
                  </div>
                  <div class="absolute rounded-xl bottom-0 left-0 h-0.5 w-0 py-2 bg-purple-500 opacity-20 transition-all duration-300 group-hover:w-full"></div>
                </span>
                <Link href="/contact">
                  <span className="text-gray-500 group hidden lg:block pt-4   relative">
                    <div className="flex">
                      Let's chat
                      <IconBubbleText stroke={2} className="text-purple-400" />
                    </div>
                    <div class="absolute rounded-xl bottom-0 left-0 h-0.5 w-0 py-2 bg-purple-500 opacity-20 transition-all duration-300 group-hover:w-1/2"></div>
                  </span>
                </Link>
                <div className="flex justify-around gap-4 w-full mx-auto ">
                  <button
                    disabled={isDownloading}
                    onClick={handleDownload}
                    value="Send Message"
                    className="p-[2px] relative lg:mb-6 lg:hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                    <div
                      id="send"
                      className="px-4 py-1  bg-white rounded-full  relative group transition duration-200 text-gray-600 hover:text-white hover:bg-transparent"
                    >
                      View resume
                    </div>
                  </button>
                  <Link href="/contact">
                    <button
                      disabled={isDownloading}
                      className="p-[2px] relative lg:mb-6 lg:hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                      <div
                        id="send"
                        className="px-4 py-1  bg-white rounded-full  relative group transition duration-200 text-gray-600 hover:text-white hover:bg-transparent"
                      >
                        Let's Chat
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="1000"
            className="mt-2 flex pt-4 justify-between w-[300px] lg:w-fit flex-row lg:flex-col gap-2"
          >
            {socials.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="social  text-black hover:bg-purple-600 hover:bg-opacity-30 w-fit p-2 rounded-2xl"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="900"
          className="mt-8 w-fit lg:ml-48 lg:mb-16"
        >
          {/* <h3 className="text-bold  pl-4   w-fit text-gray-600">Tech Stack</h3> */}
          <div className="flex gap-4 mt-4 ">
            <FloatingDock mobileClassName="translate-y-20" items={stack} />
          </div>
          {/* <div className="lg:hidden grid items-center place-items-center grid-cols-4 gap-2">
            {stack.map((item, index) => (
              <div key={index} className="gap-2">
                {item.icon}
              </div>
            ))}
          </div> */}
        </div>
        {/* <a
          href="https://www.flaticon.com/free-icons/development"
          title="development icons"
        >
          Development icons created by Bharat Icons - Flaticon
        </a>
        <a href="https://www.flaticon.com/free-icons/hello" title="hello icons">
          Hello icons created by Freepik - Flaticon
        </a> */}
      </div>
    </div>
  );
};

export default Home;
