import Container from '@/components/content/Container';
import Header from '@/components/content/Header';
import Sidebar from '@/components/sidebar/Sidebar';
import { useTheme } from 'next-themes';
import DropdownTheme from './components/theme/DropdownTheme';

const Settings = () => {
    return (
        <Header name='Configurações'>
            <Container>
                <div className='flex items-start  '>
                    <div className='flex items-center gap-4'>
                        <p>Tema</p>
                        <DropdownTheme />
                    </div>
                </div>
            </Container>
        </Header>
    );
};

export default Settings;
