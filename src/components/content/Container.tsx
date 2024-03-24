import { ReactNode } from 'react';
import { ScrollArea } from '../ui/scroll-area';

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
    return <div className={`flex  flex-1 py-4 px-8 ${className}`}>
        <ScrollArea className="w-full flex flex-1 h-[90vh] pr-4 pt-4 pb-12 overflow-y-auto  " >
            {children}
        </ScrollArea>
    </div>;
};

export default Container;
