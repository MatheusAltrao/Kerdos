import { ReactNode } from "react";
import SheetMenu from "./SheetMenu";

interface HeaderProps {
  name: string;
  children: ReactNode;
}

const Header = ({ name, children }: HeaderProps) => {
  return (
    <div className=" flex  flex-1 flex-col bg-background ">
      <header className="flex h-[60px] items-center justify-between border-b border-border   px-4 py-4 text-lg xl:px-8">
        <p className=" font-medium uppercase text-muted-foreground"> {name} </p>
        <SheetMenu />
      </header>

      {children}
    </div>
  );
};

export default Header;
