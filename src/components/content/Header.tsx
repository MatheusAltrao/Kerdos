import { ReactNode } from 'react';

interface HeaderProps {
    name: string;
    children: ReactNode;
}

const Header = ({ name, children }: HeaderProps) => {
    return (
        <div className=' bg-background flex flex-1 flex-col '>
            <header className='py-4 px-8 border-b border-border text-lg'>
                <p className=' uppercase font-medium text-muted-foreground'> {name} </p>
            </header>

            {children}
        </div>
    );
};

export default Header;
