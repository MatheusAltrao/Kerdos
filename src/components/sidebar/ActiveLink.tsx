"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface ActiveLinkProps {
  href: string;
  name: string;
  icon: ReactNode;
}

const ActiveLink = ({ href, name, icon }: ActiveLinkProps) => {
  const pathname = usePathname();
  const activeLink = pathname.startsWith(href);

  return (
    <Link href={href}>
      <Button
        size={"sm"}
        className={`flex w-full  items-center justify-start gap-4 bg-transparent xl:w-full ${
          activeLink && "bg-muted"
        }`}
        variant={"ghost"}
      >
        {icon}

        <span> {name}</span>
      </Button>
    </Link>
  );
};

export default ActiveLink;
