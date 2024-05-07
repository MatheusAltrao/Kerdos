import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

interface ActiveLinkProps {
  pathname: string;
  href: string;
  name: string;
  icon: ReactNode;
}

const ActiveLink = ({ pathname, href, name, icon }: ActiveLinkProps) => {
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
