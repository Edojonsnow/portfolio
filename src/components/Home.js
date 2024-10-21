import React from "react";
import { FlipWords } from "./ui/flip-words";
import { ThreeDCardDemo } from "./3dcard";
import StackIcon from "tech-stack-icons";

const Home = () => {
  const words = ["Hello!", "Bonjour!", "Hola!", "Kedu!"];
  return (
    <div className="flex w-full  ">
      <div className="p-4  md:p-10 lg:pl-96 overflow-y-auto lg:pt-24 lg:rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900  gap-2 w-full ">
        <div className="lg:w-2/3 pt-4">
          <h1 className="text-bold text-3xl  w-fit text-gray-600">
            <FlipWords words={words} className="text-gray-600 p-0" /> I'm Osahon
          </h1>
          <p className="text-gray-500">
            I am a full-stack developer specializing in crafting dynamic and
            user-friendly web applications. Let's create something amazing
            together!
          </p>
        </div>
        <div className=" lg:w-2/3 mt-8">
          <h3 className="text-bold   w-fit text-gray-600">
            Some of my projects
          </h3>
          <div className="flex flex-col gap-6 justify-start">
            <ThreeDCardDemo title="Blog" />
            <ThreeDCardDemo title="Quiz App" />
            <ThreeDCardDemo title="No Limit store" />
            <ThreeDCardDemo title="No Limit store" />
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
            <StackIcon name="tailwindcss " className="w-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
