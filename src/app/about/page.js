"use client";
import { SidebarDemo } from "@/components/Sidebar";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import {
  IconBrandAws,
  IconBrandDocker,
  IconBrandGolang,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandReact,
  IconBrandTailwind,
  IconCloudComputing,
  IconMapPin,
} from "@tabler/icons-react";

const About = () => {
  const words = [
    {
      text: "About",
      className: "text-neutral-500 dark:text-neutral-300",
    },
    {
      text: "Me",
      className: "text-purple-500 dark:text-purple-500",
    },
  ];

  return (
    <SidebarDemo>
      <div className="flex flex-col p-4 md:p-10  w-full h-full bg-white dark:bg-neutral-900 overflow-y-auto">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col gap-10">
            {/* Header Section */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <TypewriterEffect words={words} />
              <p className="text-neutral-600 dark:text-neutral-400 text-center max-w-2xl text-lg">
                Full-Stack Developer & AWS Certified Solutions Architect.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-8">
              {/* Left Column: 3D Profile Card */}
              <div className="flex justify-center items-start">
                <CardContainer className="inter-var w-full">
                  <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      Alexander Osahon Oronsaye
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      Tech Enthusiast • Problem Solver • Builder
                    </CardItem>
                    <CardItem
                      translateZ="20"
                      rotateX={5}
                      rotateZ={-2}
                      className="w-full mt-4"
                    >
                      <div className="relative w-full h-80 rounded-xl group-hover/card:shadow-xl overflow-hidden">
                        <Image
                          src="/about.jpg" // changed from /coding.png to profile-pic based on sidebar usage, or maybe stick to coding.png if user prefers abstract. Let's use profile-pic for 'About Me'
                          height="1000"
                          width="1000"
                          className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                          alt="thumbnail"
                        />
                      </div>
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                      <CardItem
                        translateZ={10}
                        translateX={-10}
                        as="button"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white flex items-center gap-2"
                      >
                       <IconMapPin className="h-4 w-4 text-neutral-500 dark:text-neutral-300" />
                       Lagos, Nigeria
                      </CardItem>
                      <CardItem
                        translateZ={10}
                        translateX={10}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                         Open to Work
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </div>

              {/* Right Column: Content */}
              <div className="space-y-8 mt-10">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
                    My Journey
                  </h2>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-left md:text-justify">
                    I graduated from Bells University of Technology with a degree in Computer Science. 
                    Despite deciding to become a software engineer, my journey in tech is fueled by an unending curiosity which has led me to explore multiple domains including UI/UX 
                    design and cloud engineering. This drive helps me push the boundaries of what I can build.
                  </p>
                </div>

                 <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
                    Current Focus
                  </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-left md:text-justify">
                    Currently, I work as a Python Developer and Cloud Engineer for MaxGood.work, specializing 
                    in backend optimization and system architecture. I take pride in troubleshooting complex 
                    production environments and implementing seamless bidirectional API integrations.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
                    Tech Stack & Tools
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    {[
                      { icon: IconBrandPython, label: "Python" },
                      { icon: IconBrandGolang, label: "Go" },
                      { icon: IconBrandAws, label: "AWS" },
                      { icon: IconBrandDocker, label: "Docker" },
                       { icon: IconBrandReact, label: "React" },
                      { icon: IconBrandNextjs, label: "Next.js" },
                      { icon: IconBrandNodejs, label: "Node.js" },
                      { icon: IconBrandTailwind, label: "Tailwind" },
                       { icon: IconCloudComputing, label: "Cloud Arch" },
                    ].map((idx, index) => (
                         <div key={index} className="flex items-center gap-2 bg-gray-100 dark:bg-neutral-800 px-3 py-2 rounded-full">
                            <idx.icon className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
                            <span className="text-sm text-neutral-600 dark:text-neutral-300">{idx.label}</span>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 md:mt-12 p-6 md:p-8 bg-gray-50 dark:bg-neutral-800 rounded-3xl border border-neutral-200 dark:border-neutral-700">
                <p className="text-center text-base md:text-lg italic text-neutral-600 dark:text-neutral-300">
                    "I believe technology is a tool for empowerment and I pride myself in the ability to bring ideas to life."
                </p>
            </div>

          </div>
        </div>
      </div>
    </SidebarDemo>
  );
};

export default About;
