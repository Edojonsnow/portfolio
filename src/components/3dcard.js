"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";

export function ThreeDCardDemo(props) {
  return (
    <div className="group cursor-default">
      <div className="inter-var overflow-hidden rounded-3xl w-full max-w-[350px] lg:max-w-4xl mx-auto lg:mx-0 p-1">
        <div className="relative flex flex-col lg:flex-row lg:gap-6 w-full h-fit lg:h-52 rounded-2xl p-4 lg:p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10">
          
          <div className="w-full lg:w-48 flex-shrink-0">
            <div className="relative group/image overflow-hidden rounded-xl border border-white/10 shadow-lg">
              <Image
                src={props.imageSrc}
                height="600"
                width="600"
                className="w-full h-40 lg:h-40 object-cover transform group-hover/image:scale-110 transition-transform duration-500"
                alt={props.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 z-50">
                <Link
                  href={props.live}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="px-6 py-2 rounded-full bg-white text-black text-xs font-bold shadow-xl hover:scale-105 transition-all duration-200"
                >
                  VIEW PROJECT
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-grow mt-4 lg:mt-0 justify-between">
            <div className="flex flex-col">
              <div className="flex justify-between items-start">
                <h3
                  className="text-xl lg:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-neutral-500 dark:from-white dark:to-neutral-400"
                >
                  {props.title}
                </h3>
                <Link href={props.link} target="_blank" rel="noreferrer noopener" className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-purple-500 hover:text-white transition-colors duration-300">
                  <IconBrandGithub className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-3">
                <p
                  className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed text-start line-clamp-2 lg:line-clamp-none"
                >
                  {props.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {props.frontend && (
                    <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] font-bold uppercase tracking-widest border border-purple-500/20">
                      {props.frontend}
                    </span>
                  )}
                  {props.backend && (
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest border border-blue-500/20">
                      {props.backend}
                    </span>
                  )}
                  {props.database && (
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest border border-emerald-500/20">
                      {props.database}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
