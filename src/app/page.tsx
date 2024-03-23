'use client'
import Container from '@/components/content/Container';
import Header from '@/components/content/Header';
import Sidebar from '@/components/sidebar/Sidebar';
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';
import { signIn, useSession } from 'next-auth/react'
import { redirect, useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function Home() {

    const { status } = useSession()
    const router = useRouter()

    async function handleSignIn() {
        await signIn('google')
    }

    useEffect(() => {
        if (status == 'authenticated') {
            router.replace('/home/finance')
        }
    }, [status, router])


    return (
        <Sidebar>
            <Header name='Login'>
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

                        {status == 'unauthenticated' &&
                            <Button onClick={handleSignIn} variant={'outline'}>Entrar com o Google</Button>
                        }

                        {status == 'loading' && <Button variant={'outline'}><LoaderCircle className='animate-spin' size={20} /></Button>}
                    </div>
                </Container>
            </Header>
        </Sidebar>
    );
}
