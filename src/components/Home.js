"use client";
import React from "react";
import { FlipWords } from "./ui/flip-words";
import { ThreeDCardDemo } from "./3dcard";
import StackIcon from "tech-stack-icons";
import { FloatingDock } from "./ui/floating-dock";

const Home = () => {
  const words = ["Hello!", "Bonjour!", "Hola!", "Nnọọ!"];

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
    <div className="flex w-full  ">
      <div className="p-4  md:p-10 lg:pl-96 overflow-y-auto lg:pt-24 lg:rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900  gap-2 w-full ">
        <div className="lg:w-2/3 pt-4">
          <h1 className="text-bold text-3xl  w-fit text-gray-600">
            <FlipWords words={words} className=" text-purple-500   p-0" />
            I'm Osahon
          </h1>
          <p className="text-gray-500 text-justify">
            I am a full-stack developer specializing in crafting dynamic and
            user-friendly web applications. Let's create something amazing
            together!
          </p>
        </div>
        <div className=" lg:w-2/3 mt-8">
          <h3 className="text-bold lg:pl-4 py-2 lg:py-0 mx-auto lg:mx-0   w-fit text-gray-600">
            Some of my projects
          </h3>
          <div className="flex flex-col gap-2 justify-start">
            <ThreeDCardDemo
              title="Blog"
              frontend="NextJS"
              backend="NodeJS"
              database="Prisma"
              imageSrc="/blogpic.png"
              link="https://github.com/Edojonsnow/Next-Blog"
            />
            <ThreeDCardDemo
              title="No Limit store"
              frontend="NextJS"
              backend="NodeJS"
              database="MongoDB"
              imageSrc="/ecom-pic.png"
              link="https://github.com/Edojonsnow/ebuks"
            />
            <ThreeDCardDemo
              title="Quiz App"
              frontend="React"
              backend="NodeJS"
              database="MongoDB"
              imageSrc="/ecom-pic.png"
              link="https://github.com/Edojonsnow/quiz_app"
            />
          </div>
        </div>
        <div className="mt-8 lg:mb-16">
          <h3 className="text-bold  pl-4   w-fit text-gray-600">Tech Stack</h3>
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
    </div>
  );
};

export default Home;
