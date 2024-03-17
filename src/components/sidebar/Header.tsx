import { SlidersHorizontal } from 'lucide-react';
import Image from 'next/image';
import LogoSvg from '../../../public/logoSvg.svg';

const Header = () => {
    return (
        <header className=' px-8 h-[61px] flex items-cente border-b border-border'>
            <div className='flex items-center gap-2'>
                <Image
                    src={LogoSvg}
                    className='rounded-lg object-cover'
                    width={32}
                    height={32}
                    alt='Kerdos'
                />
                <h1 className='font-bold text-lg'>Kerdos</h1>
            </div>
        </header>
    );
};

export default Header;
