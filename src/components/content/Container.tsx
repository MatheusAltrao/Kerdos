import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`flex h-screen flex-1   px-4 py-4 lg:px-8 ${className}`}>
      <div className="  h-[85vh] w-full   overflow-y-auto pr-2    ">
        {children}
      </div>
    </div>
  );
};

export default Container;
