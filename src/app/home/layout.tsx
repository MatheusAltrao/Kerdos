import Sidebar from "@/components/sidebar/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface HomeProps {
    children: ReactNode
}

const Home = async ({ children }: HomeProps) => {

    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        redirect('/');
    }

    return (
        <Sidebar>
            <div className="flex flex-1 h-full overflow-hidden" >
                {children}
            </div>
        </Sidebar>
    );
}

export default Home;