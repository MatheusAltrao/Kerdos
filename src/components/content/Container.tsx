import { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
    return <div className={`flex  flex-1 py-4 px-8 ${className}`}>{children}</div>;
};

export default Container;
