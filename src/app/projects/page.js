"use client";

import { ThreeDCardDemo } from "@/components/3dcard";
import { SidebarDemo } from "@/components/Sidebar";
import { FloatingDock } from "@/components/ui/floating-dock";
import React from "react";
import StackIcon from "tech-stack-icons";

const Projects = () => {
  const stack = [
    {
      icon: <StackIcon name="nextjs" className="w-12" />,
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
  return (
    <SidebarDemo className="">
      <div className="flex flex-col p-4   md:p-10 lg:pl-96 overflow-y-auto lg:pt-24 lg:rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900  gap-2 w-full">
        <div className=" lg:w-2/3 lg:mt-8 ">
          <h1
            data-aos="fade-left"
            className="text-bold text-3xl mx-auto lg:mx-0 py-3 lg:py-0   w-fit text-gray-600"
          >
            Some of my projects
          </h1>
          <div className="flex flex-col gap-6 justify-start">
            <ThreeDCardDemo
              title="Blog"
              frontend="NextJS"
              backend="NodeJS"
              database="Prisma"
              imageSrc="/blogpic.png"
              link="https://github.com/Edojonsnow/Next-Blog"
              delay="300"
            />
            <ThreeDCardDemo
              title="No Limit store"
              frontend="NextJS"
              backend="NodeJS"
              database="MongoDB"
              imageSrc="/ecom-pic.png"
              link="https://github.com/Edojonsnow/ebuks"
              delay="400"
            />
            <ThreeDCardDemo
              title="Quiz App"
              frontend="React"
              backend="NodeJS"
              database="MongoDB"
              imageSrc="/ecom-pic.png"
              link="https://github.com/Edojonsnow/quiz_app"
              delay="500"
            />
          </div>
        </div>
        <div className="mt-8 lg:mb-16">
          <h3 className="text-bold   w-fit text-gray-600">Tech Stack</h3>
          <div className="flex gap-4 mt-4 ">
            <FloatingDock mobileClassName="translate-y-20" items={stack} />
          </div>
          <div className="lg:hidden grid items-center place-items-center grid-cols-4 gap-2">
            {stack.map((item) => (
              <div key={item.icon} className="   gap-2">
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SidebarDemo>
  );
};

export default Projects;
