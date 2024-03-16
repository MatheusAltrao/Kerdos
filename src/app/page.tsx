import Container from '@/components/content/Container';
import Header from '@/components/content/Header';
import Sidebar from '@/components/sidebar/Sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { BarChart4, DollarSign, Settings, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
    return (
        <Sidebar>
            <Header name='Finanças'>
                <Container className='items-center justify-center'>
                    <div className='items-center flex justify-center flex-col gap-4'>
                        <div className='items-center flex justify-center flex-col space-y-1'>
                            <h2 className='text-2xl'>
                                Seja bem-vindo ao <span className='font-bold'>Kerdos</span>
                            </h2>
                            <p className='text-sm text-muted-foreground'>
                                Faça login para ter controle financeiro
                            </p>
                        </div>

                        <Button variant={'outline'}>Entrar com o Google</Button>
                    </div>
                </Container>
            </Header>
        </Sidebar>
    );
}
