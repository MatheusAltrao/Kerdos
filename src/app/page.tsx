import Container from '@/components/content/Container';
import Header from '@/components/content/Header';
import Sidebar from '@/components/sidebar/Sidebar';
import { Button } from '@/components/ui/button';

export default function Home() {
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

                        <Button variant={'outline'}>Entrar com o Google</Button>
                    </div>
                </Container>
            </Header>
        </Sidebar>
    );
}
