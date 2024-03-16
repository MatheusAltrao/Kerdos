import { SlidersHorizontal } from 'lucide-react';

const Header = () => {
    return (
        <header className='py-4 px-8 border-b border-border'>
            <div className='flex items-center gap-2'>
                <SlidersHorizontal size={20} /> <h1 className='font-bold text-lg'>Kerdos</h1>
            </div>
        </header>
    );
};

export default Header;
