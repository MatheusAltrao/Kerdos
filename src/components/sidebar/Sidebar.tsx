"use client";
import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";

interface SidebarProps {
  children: ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  const { data } = useSession();

  return (
    <main className="flex h-screen w-screen  flex-1 overflow-hidden   ">
      <div className=" grid w-full  lg:grid-cols-[1fr_5fr]">
        <div className=" hidden flex-1 flex-col border-r border-border xl:flex ">
          <Header />

          <div className="flex w-full flex-1 flex-col justify-between  ">
            {data?.user && <Navigation />}
            <Footer />
          </div>
        </div>

        <div className="h-screen overflow-y-auto ">{children}</div>
      </div>
    </main>
  );
};

export default Sidebar;
