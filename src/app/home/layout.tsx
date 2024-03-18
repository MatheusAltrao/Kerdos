import Sidebar from "@/components/sidebar/Sidebar";
import { ReactNode } from "react";

interface HomeProps {
    children: ReactNode
}

const Home = ({ children }: HomeProps) => {
    return (
        <Sidebar>
            <div className="flex flex-1 h-full overflow-hidden" >
                {children}
            </div>
        </Sidebar>
    );
}

export default Home;