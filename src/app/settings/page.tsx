'use client';
import Container from '@/components/content/Container';
import Header from '@/components/content/Header';
import Sidebar from '@/components/sidebar/Sidebar';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoonIcon, SunIcon } from 'lucide-react';
import ThemeSwitch from './theme/ThemeSwitch';

const Settings = () => {
    const { setTheme, theme } = useTheme();

    return (
        <Sidebar>
            <Header name='Configurações'>
                <Container>
                    <div className='flex items-start  '>
                        <div className='flex items-center gap-4'>
                            <p>Selecionar Tema</p>
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
                        </div>
                    </div>
                </Container>
            </Header>
        </Sidebar>
    );
};

export default Settings;
