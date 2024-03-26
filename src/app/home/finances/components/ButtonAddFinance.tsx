'use client'
import { Dialog, DialogContent, DialogOverlay, DialogPortal, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import AddTransaction from "./addTransaction";

interface ButtonAddFinanceProps {
    userId: string;
}

const ButtonAddFinance = ({ userId }: ButtonAddFinanceProps) => {
    return (
        <Dialog>
            <DialogTrigger>
                <div className='flex items-center rounded-md gap-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 ' >
                    <Plus size={20} /> Adicionar
                </div>
            </DialogTrigger>
            <AddTransaction userId={userId} />
        </Dialog>
    );
}

export default ButtonAddFinance;