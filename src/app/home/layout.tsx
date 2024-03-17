import Sidebar from "@/components/sidebar/Sidebar";
import { ReactNode } from "react";

interface HomeProps {
    children: ReactNode
}

const Home = ({ children }: HomeProps) => {
    return (
        <Sidebar>
            {children}
        </Sidebar>
    );
}

export default Home;