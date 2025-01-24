"use client";
import Home from "@/components/Home";
import { SidebarDemo } from "@/components/Sidebar";

import { Sidebar } from "@/components/ui/sidebar";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    if (window.innerWidth > 768) {
      // Check if the window width is greater than 768px
      AOS.init({});
    }
  });
  return (
    <>
      <SidebarDemo>
        <Home />
      </SidebarDemo>
    </>
  );
}
