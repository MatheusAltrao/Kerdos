'use client';

import { usePathname } from 'next/navigation';
import ActiveLink from './ActiveLink';
import { BarChart4, Bell, DollarSign, FileText, Settings, TrendingUp } from 'lucide-react';

const Navigation = () => {
    const pathname = usePathname();

    return (
        <nav className='w-full flex flex-col gap-1 py-4 px-4'>
            <ActiveLink
                href='/finance'
                name='Finanças'
                pathname={pathname}
                icon={<DollarSign size={18} />}
            />
            <ActiveLink
                href='/dashboard'
                name='Dashboard'
                pathname={pathname}
                icon={<BarChart4 size={18} />}
            />

            <ActiveLink
                href='/convertion'
                name='Conversão'
                pathname={pathname}
                icon={<FileText size={18} />}
            />
            <ActiveLink
                href='/investment'
                name='Investimento'
                pathname={pathname}
                icon={<TrendingUp size={18} />}
            />
            <ActiveLink
                href='/notices'
                name='Notícias'
                pathname={pathname}
                icon={<Bell size={18} />}
            />
            <ActiveLink
                href='/settings'
                name='Configuração'
                pathname={pathname}
                icon={<Settings size={18} />}
            />
        </nav>
    );
};

export default Navigation;
