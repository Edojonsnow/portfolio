import Home from "@/components/Home";
import { SidebarDemo } from "@/components/Sidebar";

import { Sidebar } from "@/components/ui/sidebar";

import Image from "next/image";

export default function App() {
  return (
    <>
      <SidebarDemo>
        <Home />
      </SidebarDemo>
    </>
  );
}
