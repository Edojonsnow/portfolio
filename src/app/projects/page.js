import { ThreeDCardDemo } from "@/components/3dcard";
import { SidebarDemo } from "@/components/Sidebar";
import React from "react";
import StackIcon from "tech-stack-icons";

const Projects = () => {
  return (
    <SidebarDemo className="">
      <div className="flex flex-col p-4   md:p-10 lg:pl-96 overflow-y-auto lg:pt-24 lg:rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900  gap-2 w-full">
        <div className=" lg:w-2/3 mt-8 ">
          <h1 className="text-bold text-3xl   w-fit text-gray-600">
            Some of my projects
          </h1>
          <div className="flex flex-col gap-6 justify-start">
            <ThreeDCardDemo
              title="Blog"
              frontend="NextJS"
              backend="NodeJS"
              database="Prisma"
            />
            <ThreeDCardDemo
              title="Quiz App"
              frontend="React"
              backend="NodeJS"
              database="MongoDB"
            />
            <ThreeDCardDemo
              title="No Limit store"
              frontend="NextJS"
              backend="NodeJS"
              database="MongoDB"
            />
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-bold   w-fit text-gray-600">Tech Stack</h3>
          <div className="flex gap-4 mt-4 ">
            <StackIcon name="figma" className="w-10" />
            <StackIcon name="aws" className="w-10" />
            <StackIcon name="docker" className="w-10" />
            <StackIcon name="go" className="w-10" />
            <StackIcon name="js" className="w-10" />
            <StackIcon name="mongodb" className="w-10" />
            <StackIcon name="nextjs" className="w-20" />
            <StackIcon name="nodejs" className="w-10" />
            <StackIcon name="postgresql" className="w-10" />
            <StackIcon name="tailwindcss" className="w-10" />
          </div>
        </div>
      </div>
    </SidebarDemo>
  );
};

export default Projects;
