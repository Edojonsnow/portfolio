import { SidebarDemo } from "@/components/Sidebar";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <SidebarDemo className="relative">
      <div className="flex flex-col p-4   md:p-10 lg:pl-72 overflow-y-auto lg:pt-24 lg:rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 h-screen  gap-2 w-full">
        <div className="flex  items-center gap-4">
          <Image src="/coding.png" width={50} height={50} />
          <h1
            data-aos="fade-left"
            className="text-gray-600 text-3xl  text-bold"
          >
            About Me
          </h1>
        </div>
        <p className=" w-full lg:w-2/3 text-justify  text-gray-600">
          Hello. I&apos;m Osahon, a 23 year old graduate of Computer Science
          from the Bells University of Technology. I possess roughly 4 years of
          personal experience in software development. As such,I have honed my
          skills in various programming languages, frameworks and development
          methodologies. My unending curiosity and enthusiasm about software
          development enables me to stay up to date with the latest trends and
          technologies in order to deliver appealing and cutting edge solutions.
          For me, software development is a means through which I can ideate
          solutions to problems around me subsequently leaving a positive
          imprint on the world through technology.
        </p>
      </div>
    </SidebarDemo>
  );
};

export default About;
