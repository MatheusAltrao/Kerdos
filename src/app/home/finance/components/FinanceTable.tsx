import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Eye, Trash } from 'lucide-react';
import ActionsButtons from './ActionsButton';
import Ball from './Ball';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const FinanceTable = () => {

    const object = [
        {
            name: 'Escola',
            method: 'Dinheiro',
            status: 'Saída',
            category: 'Educação',
            amount: '250,00',
            date: '17/03/2024',
            bank: 'Nubank'
        },
        {
            name: 'Supermercado',
            method: 'Cartão de Débito',
            status: 'Saída',
            category: 'Alimentação',
            amount: '450,00',
            date: '20/03/2024',
            bank: 'Banco do Brasil'
        },
        {
            name: 'Website',
            method: 'Transferência Bancária',
            status: 'Entrada',
            category: 'Trabalho',
            amount: '1200,00',
            date: '25/03/2024',
            bank: 'Caixa Econômica'
        },
        {
            name: 'Assinatura Netflix',
            method: 'Cartão de Crédito',
            status: 'Saída',
            category: 'Lazer',
            amount: '45,90',
            date: '01/03/2024',
            bank: 'Santander'
        },
        {
            name: 'Website',
            method: 'Transferência Bancária',
            status: 'Entrada',
            category: 'Trabalho',
            amount: '1200,00',
            date: '25/03/2024',
            bank: 'Caixa Econômica'
        },
        {
            name: 'Mensalidade Academia',
            method: 'Dinheiro',
            status: 'Saída',
            category: 'Saúde',
            amount: '89,99',
            date: '10/03/2024',
            bank: 'Nubank'
        },
    ];


    return (
        <div className='flex items-center justify-center gap-4 flex-col' >
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>Método de Pagamento</TableHead>
                        <TableHead>Categoria</TableHead>
                        <TableHead>Valor</TableHead>
                        <TableHead>Data</TableHead>
                        <TableHead>Conta</TableHead>
                        <TableHead className='text-right'>Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {object.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className='font-medium   gap-1 relative pl-8'>
                                <Ball status={item.status} />{item.name}</TableCell>
                            <TableCell >{item.method}</TableCell>
                            <TableCell>{item.category}</TableCell>
                            <TableCell>{item.amount}</TableCell>
                            <TableCell>{item.date}</TableCell>
                            <TableCell>{item.bank}</TableCell>

                            <TableCell className='text-right space-x-2' >
                                <ActionsButtons />
                            </TableCell>
                        </TableRow>
                    ))}

                </TableBody>


            </Table>

            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                        <PaginationLink href="#">2</PaginationLink>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
};

export default FinanceTable;
