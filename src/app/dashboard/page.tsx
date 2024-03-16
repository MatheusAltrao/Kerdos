import Container from '@/components/content/Container';
import Header from '@/components/content/Header';
import Sidebar from '@/components/sidebar/Sidebar';

const Dashboard = () => {
    return (
        <Sidebar>
            <Header name='Dashboard'>
                <Container>Dashboard</Container>
            </Header>
        </Sidebar>
    );
};

export default Dashboard;
