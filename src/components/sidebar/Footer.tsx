'use client'
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DoorOpen, User } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import { Skeleton } from '../ui/skeleton';

const Footer = () => {

    const { status, data } = useSession()

    const handleSignOut = async () => {
        await signOut()
    }

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

            <div className='py-2 px-4 border-t border-border '>
                {status == 'unauthenticated' &&
                    <div className='py-2 px-4 flex justify-start  items-center  hover:bg-muted transition-colors gap-2 rounded cursor-pointer'>
                        <div className='h-8 flex  items-center ' >
                            <p className='text-sm font-medium text-muted-foreground'>
                                Faça login para ter acesso.
                            </p>
                        </div>
                    </div>
                }

                {status == 'loading' && (
                    <div className="flex items-center space-x-4">
                        <Skeleton className="h-8 w-8 rounded-full" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                        </div>
                    </div>
                )}

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        {status == 'authenticated' && <div className='py-2 px-4  hover:bg-muted transition-colors flex items-center gap-2 rounded cursor-pointer'>
                            <Avatar >
                                <AvatarImage src={data.user?.image!} />
                                <AvatarFallback>MA</AvatarFallback>
                            </Avatar>
                            <p className='text-sm font-medium text-muted-foreground'>
                                {data.user?.name}
                            </p>
                        </div>
                        }
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        <DropdownMenuItem onClick={handleSignOut} className='flex items-center justify-between '>
                            Sair <DoorOpen size={20} />

                        </DropdownMenuItem>
                        <DropdownMenuItem className='flex items-center justify-between '>

                            Perfil <User size={20} />
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>


            </div>
        </footer>
    );
};

export default Footer;
