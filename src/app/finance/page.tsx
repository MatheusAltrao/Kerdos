import Container from '@/components/content/Container';
import Header from '@/components/content/Header';
import Sidebar from '@/components/sidebar/Sidebar';
import FinanceTable from './components/FinanceTable';

const Finance = () => {
    return (
        <Sidebar>
            <Header name='Finanças'>
                <Container>
                    <FinanceTable />
                </Container>
            </Header>
        </Sidebar>
    );
};

export default Finance;
