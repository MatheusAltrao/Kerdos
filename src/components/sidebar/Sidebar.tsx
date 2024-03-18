import { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';

interface SidebarProps {
    children: ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
    return (
        <main className='h-screen w-screen flex flex-1'>
            <div className='grid grid-cols-[1fr_5fr] w-full'>
                <div className='border-r flex flex-1 flex-col border-border '>
                    <Header />

                    <div className='  flex flex-1 h-full '>
                        <div className='flex flex-col justify-between w-full  '>
                            <Navigation />
                            <Footer />
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </main>
    );
};

export default Sidebar;
