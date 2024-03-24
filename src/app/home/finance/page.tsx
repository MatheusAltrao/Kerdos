'use client'
import Container from '@/components/content/Container';
import Header from '@/components/content/Header';
import FinanceTable from './components/FinanceTable';
import { Button } from '@/components/ui/button';
import { Calendar, Plus } from 'lucide-react';
import { Dialog, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DialogContent } from '@radix-ui/react-dialog';
import AddTransaction from './components/addTransaction';

const Finance = () => {
    return (
        <Header name='Finanças'>
            <Container>
                <div className='w-full space-y-8' >
                    <header>
                        <div className='flex items-center gap-4 justify-between' >
                            <input type="text" placeholder='Pesquise aqui' className='h-10 bg-muted rounded focus:outline-none p-2 w-full ' />

                            <div className='flex items-center gap-2' >
                                <Button variant={'outline'} className='gap-2' ><Calendar size={20} />Data</Button>


                                <Dialog>
                                    <DialogTrigger>
                                        <div className='flex items-center rounded-md gap-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 ' >
                                            <Plus size={20} /> Adicionar
                                        </div>
                                    </DialogTrigger>
                                    <AddTransaction />
                                </Dialog>
                            </div>

                        </div>
                    </header>
                    <FinanceTable />
                </div>
            </Container>
        </Header>
    );
};

export default Finance;
