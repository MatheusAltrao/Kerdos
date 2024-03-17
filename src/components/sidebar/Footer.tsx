import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DoorOpen, User } from 'lucide-react';

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

            <DropdownMenu>
                <DropdownMenuTrigger className=' ' asChild>
                    <div className='py-2 px-4 border-t border-border '>
                        <div className='py-2 px-4  hover:bg-muted transition-colors flex items-center gap-2 rounded cursor-pointer'>
                            <Avatar>
                                <AvatarImage src='https://github.com/shadcn.png' />
                                <AvatarFallback>MA</AvatarFallback>
                            </Avatar>
                            <p className='text-sm font-medium text-muted-foreground'>
                                matheusaltrao2@gmail.com
                            </p>
                        </div>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                    <DropdownMenuItem className='flex items-center justify-between '>
                        Sair <DoorOpen size={20} />

                    </DropdownMenuItem>
                    <DropdownMenuItem className='flex items-center justify-between '>

                        Perfil <User size={20} />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </footer>
    );
};

export default Footer;
