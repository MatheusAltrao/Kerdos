import Container from '@/components/content/Container';
import Header from '@/components/content/Header';
import FinanceTable from './components/FinanceTable';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import ButtonAddFinance from './components/ButtonAddFinance';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prismaClient } from '@/lib/prisma';


const Finance = async () => {
    const session = await getServerSession(authOptions);

    const finances = await prismaClient.finances.findMany({
        where: {
            userId: session?.user.id
        }
    })

    return (
        <Header name='Finanças'>
            <Container>
                <div className='w-full space-y-8' >
                    <header>
                        <div className='flex items-center gap-4 justify-between' >
                            <input type="text" placeholder='Pesquise aqui' className='h-10 bg-muted rounded-md focus:outline-none p-2 w-full ' />

                            <div className='flex items-center gap-2' >
                                <Button variant={'outline'} className='gap-2' ><ChevronDown size={20} />Colunas</Button>
                                <ButtonAddFinance userId={session!.user.id} />
                            </div>

                        </div>
                    </header>
                    <FinanceTable finances={finances} />
                </div>
            </Container>
        </Header>
    );
};

export default Finance;
