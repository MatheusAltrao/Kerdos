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
    <main className="flex h-screen w-screen flex-1 ">
      <div className="grid h-screen w-full  grid-cols-[60px_5fr] xl:grid-cols-[1fr_5fr]">
        <div className="flex flex-1 flex-col border-r border-border ">
          <Header />

          <div className="  flex h-full  ">
            <div className="flex w-full flex-col justify-between  ">
              {data?.user && <Navigation />}
              <Footer />
            </div>
          </div>
        </div>

        {children}
      </div>
    </main>
  );
};

export default Sidebar;
