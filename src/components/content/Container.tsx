import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`flex  min-h-screen flex-1    px-4 py-4 xl:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
