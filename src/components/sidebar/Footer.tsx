"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DoorOpen, User } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Skeleton } from "../ui/skeleton";

const Footer = () => {
  const { status, data } = useSession();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <footer className="flex flex-col gap-8">
      {/*   <div className=" hidden flex-col gap-4 px-8 py-4 lg:flex">
        <p className=" text-sm font-medium uppercase text-muted-foreground">
          Links Extras
        </p>
        <div className="flex flex-col gap-2 text-sm">
          <Link
            className="font-medium underline-offset-4 hover:underline"
            href={"/"}
          >
            Precisa de Ajuda?
          </Link>
          <Link
            className="font-medium underline-offset-4 hover:underline"
            href={"/"}
          >
            Site
          </Link>
        </div>
      </div> */}

      <div className="flex items-center justify-center border-t border-border py-2 lg:justify-start lg:px-4 ">
        {status == "unauthenticated" && (
          <div className="flex cursor-pointer items-center justify-start  gap-2  rounded px-4 py-2 transition-colors hover:bg-muted">
            <div className="flex h-8  items-center ">
              <p className="text-sm font-medium text-muted-foreground">
                Faça login para ter acesso.
              </p>
            </div>
          </div>
        )}

        {status == "loading" && (
          <div className="flex items-center space-x-4">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
            </div>
          </div>
        )}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {status == "authenticated" && (
              <div className="flex cursor-pointer  items-center gap-2 rounded px-4 py-2 transition-colors hover:bg-muted">
                <Avatar>
                  <AvatarImage src={data.user?.image!} />
                  <AvatarFallback>MA</AvatarFallback>
                </Avatar>
                <p className="hidden truncate text-sm font-medium text-muted-foreground lg:block">
                  {data.user?.name}
                </p>
              </div>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={handleSignOut}
              className="flex items-center justify-between "
            >
              Sair <DoorOpen size={20} />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="flex w-full items-center justify-between "
                href={"/home/profile"}
              >
                Perfil <User size={20} />
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </footer>
  );
};

export default Footer;
