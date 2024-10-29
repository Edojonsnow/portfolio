"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { IconBrandGithub, IconCode } from "@tabler/icons-react";

export function ThreeDCardDemo(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      data-aos="fade-right"
      data-aos-delay={props.delay}
      data-aos-offset={props.offset}
    >
      <CardContainer className="inter-var mobile-card-shadow  rounded-3xl w-[300px] lg:w-auto mx-auto lg:mx-0   p-3 ">
        <CardBody className=" lg:hover:shadow flex flex-col lg:flex-row relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-fit rounded-xl  lg:p-3   ">
          <CardItem translateZ="10" className="w-fit  lg:mr-4 ">
            <Image
              src={props.imageSrc}
              height="500"
              width="500"
              className=" w-96 lg:pb-2  h-32 lg:w-32 object-cover lg:border-2 border-gray-200 rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>

          <div>
            <CardItem
              translateZ="10"
              className="text-lg p-0.5 font-bold mx-auto lg:mx-0  text-neutral-600 dark:text-white"
            >
              {props.title}
            </CardItem>
            <div
              className={`overflow-hidden lg:overflow-visible transition-all duration-500 ${
                isExpanded ? "max-h-96 lg:h-fit" : "max-h-0 lg:h-fit"
              }`}
            >
              <CardItem
                as="p"
                translateZ="10"
                className="text-neutral-500 text-center lg:text-start text-sm max-w-md lg:mt-2 dark:text-neutral-300"
              >
                Hover over this card to unleash the power of CSS perspective
                testing 12 testing 12
              </CardItem>
              <div className="flex justify-between items-center mt-4 px-2 ">
                <CardItem
                  translateZ="10"
                  as={Link}
                  href={props.live}
                  target="__blank"
                  className="rounded-xl text-xs font-normal hover:text-purple-400  dark:text-white"
                >
                  Live
                </CardItem>
                <Link href={props.link}>
                  <IconCode className="text-neutral-500 purple-icon hover:text-purple-400  h-5 w-5 flex-shrink-0" />
                </Link>
                <div className="flex items-center space-x-2">
                  <CardItem
                    translateZ="10"
                    as="button"
                    className="px-2  py-0.5 lg:py-2 rounded-xl bg-gray-100 dark:bg-white dark:text-black text-gray-500 text-xs font-light"
                  >
                    {props.frontend}
                  </CardItem>
                  <CardItem
                    translateZ="10"
                    as="button"
                    className="px-2 py-0.5 lg:py-2 rounded-xl bg-gray-100 dark:bg-white dark:text-black text-gray-500 text-xs font-light"
                  >
                    {props.backend}
                  </CardItem>
                  <CardItem
                    translateZ="10"
                    as="button"
                    className="px-2 py-0.5 lg:py-2 rounded-xl bg-gray-100 dark:bg-white dark:text-black text-gray-500 text-xs font-light"
                  >
                    {props.database}
                  </CardItem>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
