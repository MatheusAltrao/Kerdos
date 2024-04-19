import { ReactNode } from "react";
import { ScrollArea } from "../ui/scroll-area";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`flex  flex-1 px-8 py-4 ${className}`}>
      <ScrollArea className="flex h-[90vh] w-full flex-1 overflow-y-auto   pr-4  ">
        {children}
      </ScrollArea>
    </div>
  );
};

export default Container;
