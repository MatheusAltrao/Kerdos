'use client'
import Container from '@/components/content/Container';
import Header from '@/components/content/Header';
import Card from './components/Card';
import { CalendarIcon, DollarSign } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
import useDateRange from '@/hooks/useDateRange';

const Dashboard = () => {
    const [startDate, setStartDate] = useState<Date | undefined>(new Date())
    const [endDate, setEndDate] = useState<Date | undefined>(undefined);
    useDateRange(startDate, endDate, setEndDate)

    return (
        <Header name='Dashboard'>
            <Container>
                <div className='w-full space-y-8'>

                    <div className='flex items-center justify-end gap-4' >
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[150px] justify-start text-left font-normal",
                                        !startDate && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {startDate ? format(startDate, "dd/MM/yyyy") : <span>Selecione uma data</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    required
                                    mode="single"
                                    showOutsideDays={false}
                                    selected={startDate}
                                    onSelect={setStartDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                        -
                        <Popover  >
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[150px] justify-start text-left font-normal",
                                        !endDate && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {endDate ? format(endDate, "dd/MM/yyyy") : <span>Escolha uma data</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    required
                                    mode='single'
                                    showOutsideDays={false}
                                    selected={endDate}
                                    onSelect={setEndDate}
                                    className='rounded-md '
                                    fromDate={startDate}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className='grid grid-cols-3 w-full gap-4'>

                        <Card
                            amount={5000}
                            title='Entradas'
                            description='Soma de todas as entradas'
                            icon={<DollarSign size={16} />}

                        />
                        <Card
                            amount={5000}
                            title='Saídas'
                            description='Soma de todas as saídas'
                            icon={<DollarSign size={16} />}
                        />

                        <Card
                            amount={10000}
                            title='Valor Total'
                            description='Soma de todas as finanças'
                            icon={<DollarSign size={16} />}

                        />

                    </div>
                </div>
            </Container>
        </Header>
    );
};

export default Dashboard;
