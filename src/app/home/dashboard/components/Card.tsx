'use client';
import { ReactNode } from 'react';
import CountUp from 'react-countup';

interface CardProps {
    title: string;
    icon: ReactNode;
    amount: number;
    description: string;
}

const Card = ({ title, amount, description, icon }: CardProps) => {
    return (
        <div className=' bg-muted rounded-lg p-8'>
            <div className='flex flex-row items-center justify-between pb-2 space-y-0'>
                <div className='text-sm font-medium'>{title}</div>
                {icon}
            </div>
            <div>
                <div className='flex gap-1 items-center'>
                    <p className='text-2xl font-bold'>
                        R${' '}
                        <CountUp
                            start={0}
                            end={amount}
                            duration={2}
                            decimals={2} // Número de casas decimais desejado
                            decimal=',' // Caractere decimal desejado
                            useGrouping={true} // Habilita agrupamento com separador
                            separator='.' // Caractere de separação de milhares
                            useEasing={true} // Habilita easing para uma transição mais suave
                            // Texto estático antes do valor
                        />{' '}
                    </p>
                </div>
                <p className='text-xs   opacity-60 '>{description}</p>
            </div>
        </div>
    );
};

export default Card;
