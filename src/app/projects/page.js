"use client";

import { ThreeDCardDemo } from "@/components/3dcard";
import { SidebarDemo } from "@/components/Sidebar";
import Aos from "aos";
import React, { useEffect } from "react";
import {
  bVntiDesc,
  eventDesc,
  matteDesc,
  positivusDesc,
  ulsDesc,
  vogueDesc,
} from "../data/data";

const Projects = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });

  return (
    <SidebarDemo>
      <div className="flex flex-col w-full h-full bg-white dark:bg-neutral-900 overflow-y-auto">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-10 py-10 lg:pt-16">
          
          {/* Header Section */}
          <div className="flex flex-col gap-4 mb-12 items-center text-center">
            <h1
              data-aos="fade-down"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-800 dark:text-neutral-100"
            >
              My <span className="text-purple-500">Work</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed"
            >
Some of my web applications developed using React, Python, Go, and Docker.
            </p>
          </div>

          {/* Projects List */}
          <div className="flex flex-col items-center gap-12 pb-20">
            <ThreeDCardDemo
              title="LikkLe bVnti"
              frontend="Vite"
              backend="TailwindCSS"
              imageSrc="/bVnti.png"
              link="https://github.com/Edojonsnow/bVnti"
              live="https://bvnti.netlify.app/"
              desc={bVntiDesc.desc}
            />
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
                    className="hover:underline text-black dark:text-white"
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
      </div>
    </SidebarDemo>
  );
};

export default Projects;
