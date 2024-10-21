"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo(props) {
  return (
    <CardContainer className="inter-var ">
      <CardBody className=" hover:shadow flex relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-fit rounded-xl p-3   ">
        <CardItem translateZ="10" className="w-fit mr-4 ">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="500"
            width="500"
            className="h-32 w-32 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <div>
          <CardItem
            translateZ="10"
            className="text-lg font-bold text-neutral-600 dark:text-white"
          >
            {props.title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="10"
            className="text-neutral-500 text-sm max-w-md mt-2 dark:text-neutral-300"
          >
            Hover over this card to unleash the power of CSS perspective testing
            12 testing 12
          </CardItem>
          <div className="flex justify-between items-center mt-4 ">
            <CardItem
              translateZ="10"
              as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Live →
            </CardItem>
            <div className="flex items-center space-x-2">
              <CardItem
                translateZ="10"
                as="button"
                className="px-2 py-2 rounded-xl bg-gray-100 dark:bg-white dark:text-black text-gray-500 text-xs font-light"
              >
                {props.frontend}
              </CardItem>
              <CardItem
                translateZ="10"
                as="button"
                className="px-2 py-2 rounded-xl bg-gray-100 dark:bg-white dark:text-black text-gray-500 text-xs font-light"
              >
                {props.backend}
              </CardItem>
              <CardItem
                translateZ="10"
                as="button"
                className="px-2 py-2 rounded-xl bg-gray-100 dark:bg-white dark:text-black text-gray-500 text-xs font-light"
              >
                {props.database}
              </CardItem>
              <CardItem
                translateZ="10"
                as="button"
                className="px-2 py-2 rounded-xl bg-gray-100 dark:bg-white dark:text-black text-gray-500 text-xs font-light"
              >
                {props.style}
              </CardItem>
            </div>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
