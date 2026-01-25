"use client";

import { ThreeDCardDemo } from "@/components/3dcard";
import { SidebarDemo } from "@/components/Sidebar";
import { FloatingDock } from "@/components/ui/floating-dock";
import Aos from "aos";
import React, { useEffect } from "react";
import StackIcon from "tech-stack-icons";
import {
  blogDesc,
  ecomDesc,
  eventDesc,
  quizDesc,
  vogueDesc,
  ulsDesc,
  positivusDesc,
  bVntiDesc,
  matteDesc,
} from "../data/data";
import Image from "next/image";

const Projects = () => {
  useEffect(() => {
    Aos.init({
      // disable: function () {
      //   var maxWidth = 430;
      //   return window.innerWidth < maxWidth;
      // },
    });
  });
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
      <div className="flex flex-col p-4   md:p-10 lg:pl-72 overflow-y-auto lg:pt-16 lg:rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900  gap-2 w-full">
        <div className=" lg:w-3/4 lg:mt-8 ">
          <div className="flex  items-center gap-4">
            <Image src="/code.png" width={50} height={50} alt="code image" />
            <h1
              data-aos="fade-left"
              className="text-bold text-3xl  lg:mx-0 py-3 lg:py-0   w-fit text-gray-600"
            >
              Projects
            </h1>
          </div>
          <p data-aos="fade-right" className="text-gray-500 text-justify">
            From dynamic blog platforms to interactive quiz applications, these
            projects represent my journey in web development. Each application
            is crafted with responsiveness and user experience in mind,mostly
            leveraging the power of Next.js, React, and MongoDB to create
            seamless digital experiences.
          </p>
          <div className="flex pt-4 flex-col gap-6 justify-start">
            <ThreeDCardDemo
              title="LikkLe bVnti"
              frontend="Vite"
              backend="TailwindCSS"
              imageSrc="/bVnti.png"
              link="https://github.com/Edojonsnow/bVnti"
              live="https://bvnti.netlify.app/"
              desc={bVntiDesc.desc}
            />
            {/* <ThreeDCardDemo
              title="No Limit Store"
              frontend="NextJS"
              backend="NodeJS"
              database="MongoDB"
              imageSrc="/ecom-pic.png"
              link=""
              live="https://nolimitstores.org/"
              desc={ecomDesc.desc}
            /> */}
            <ThreeDCardDemo
              title="Unique Love Sharity"
              frontend="NextJS"
              backend="Stripe"
              database=""
              imageSrc="/uls.png"
              link=""
              live="https://uniquelovesharity.org/"
              desc={ulsDesc.desc}
            />
            <ThreeDCardDemo
              title="Vogue Boys"
              frontend="NextJS"
              backend="TailwindCSS"
              imageSrc="/vboys.png"
              link="https://github.com/Edojonsnow/vboys"
              live="https://vboys.vercel.app/"
              desc={vogueDesc.desc}
            />


            <ThreeDCardDemo
              title="Positivus"
              frontend="NextJS"
              backend=""
              database=""
              imageSrc="/positivus.png"
              link="https://github.com/Edojonsnow/positivus"
              live="https://positivus-d9h.pages.dev/"
              desc={positivusDesc.desc}
            />
            <ThreeDCardDemo
              title="Matte Engine"
              frontend="NextJS"
              backend=""
              database=""
              imageSrc="/matte-engine.png"
              link="https://github.com/Edojonsnow/gravityteam"
              live="https://gravityteam.pages.dev/"
              desc={
                <>
                  {matteDesc.desc}
                  <span style={{ margin: "0 1px" }}></span>
                  <a
                    className="hover:underline text-black"
                    href="https://the18.design/freebies"
                  >
                    the18.design
                  </a>
                  <span style={{ margin: "0 1px" }}></span>
                  {matteDesc.desc2}
                </>
              }
            />
            <ThreeDCardDemo
              title="Book an Event"
              backend="Go"
              imageSrc="/go-api.png"
              link="https://github.com/Edojonsnow/go-REST-API"
              live="#"
              desc={eventDesc.desc}
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
