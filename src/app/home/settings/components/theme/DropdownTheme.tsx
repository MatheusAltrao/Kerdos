'use client';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoonIcon, SunIcon } from 'lucide-react';
import ThemeSwitch from '../../components/theme/ThemeSwitch';
import { useTheme } from 'next-themes';

const DropdownTheme = () => {
    const { setTheme, theme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='focus:outline-none' asChild>
                <Button className='focus:outline-none' variant={'outline'}>
                    <ThemeSwitch theme={theme} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuItem
                    className='flex items-center justify-between gap-2'
                    onClick={() => setTheme('light')}
                >
                    Light <SunIcon size={16} />
                </DropdownMenuItem>
                <DropdownMenuItem
                    className='flex items-center justify-between gap-2'
                    onClick={() => setTheme('dark')}
                >
                    Dark <MoonIcon size={16} />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default DropdownTheme;
