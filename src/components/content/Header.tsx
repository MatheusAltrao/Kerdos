import { ReactNode } from "react";

interface HeaderProps {
  name: string;
  children: ReactNode;
}

const Header = ({ name, children }: HeaderProps) => {
  return (
    <div className=" flex h-screen  flex-1 flex-col bg-background ">
      <header className="h-[60px] border-b border-border px-8 py-4 text-lg">
        <p className=" font-medium uppercase text-muted-foreground"> {name} </p>
      </header>

      {children}
    </div>
  );
};

export default Header;
