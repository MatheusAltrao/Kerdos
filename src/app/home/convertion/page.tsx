import Container from "@/components/content/Container";
import Header from "@/components/content/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { Button } from "@/components/ui/button";

const Convertion = () => {
    return (
        <Header name='Conversão'>
            <Container>
                <div className='w-full flex flex-col gap-2'>
                    <div className="flex items-center gap-2" >
                        <p> Converter a tabela para PDF</p>
                        <Button variant={'outline'} size={'sm'} >PDF</Button>
                    </div>
                    <div className="flex items-center gap-2" >
                        <p> Converter a tabela para PDF</p>
                        <Button variant={'outline'} size={'sm'} >PDF</Button>
                    </div>
                    <div className="flex items-center gap-2" >
                        <p> Converter a tabela para PDF</p>
                        <Button variant={'outline'} size={'sm'} >PDF</Button>
                    </div>
                </div>
            </Container>
        </Header>
    );
}

export default Convertion;