import Container from '@/components/content/Container';
import Header from '@/components/content/Header';
import Sidebar from '@/components/sidebar/Sidebar';
import Card from './components/Card';
import { DollarSign } from 'lucide-react';

const Dashboard = () => {
    return (
        <Header name='Dashboard'>
            <Container>
                <div className='w-full'>
                    <div className='grid grid-cols-4 w-full gap-4'>
                        <Card
                            amount={7200}
                            description='Soma de todas as finanças feitas'
                            icon={<DollarSign size={16} />}
                            title='Valor Total'
                        />
                        <Card
                            amount={7200}
                            description='Soma de todas as finanças feitas'
                            icon={<DollarSign size={16} />}
                            title='Valor Total'
                        />
                        <Card
                            amount={7200}
                            description='Soma de todas as finanças feitas'
                            icon={<DollarSign size={16} />}
                            title='Valor Total'
                        />
                        <Card
                            amount={7200}
                            description='Soma de todas as finanças feitas'
                            icon={<DollarSign size={16} />}
                            title='Valor Total'
                        />
                    </div>
                </div>
            </Container>
        </Header>
    );
};

export default Dashboard;
