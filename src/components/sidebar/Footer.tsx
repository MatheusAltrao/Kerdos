import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const Footer = () => {
    return (
        <footer className='flex flex-col gap-8'>
            <div className='flex flex-col gap-4 py-4 px-8'>
                <p className=' uppercase font-medium text-sm text-muted-foreground'>Links Extras</p>
                <div className='flex flex-col gap-2 text-sm'>
                    <Link className='font-medium hover:underline underline-offset-4' href={'/'}>
                        Precisa de Ajuda?
                    </Link>
                    <Link className='font-medium hover:underline underline-offset-4' href={'/'}>
                        Site
                    </Link>
                </div>
            </div>

            <div className='py-4 px-8 border-t border-border flex items-center gap-2'>
                <Avatar>
                    <AvatarImage src='https://github.com/shadcn.png' />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className='text-sm font-medium text-muted-foreground'>
                    matheusaltrao2@gmail.com
                </p>
            </div>
        </footer>
    );
};

export default Footer;
