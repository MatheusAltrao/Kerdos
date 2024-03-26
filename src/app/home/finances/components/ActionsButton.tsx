import { Button } from "@/components/ui/button";
import { Eye, Trash } from "lucide-react";

const ActionsButtons = () => {
    return (
        <>
            <Button title="Ver" className="hover:text-blue-500" variant={'outline'} size={'icon'} ><Eye size={16} /></Button>
            <Button title="Apagar" className="hover:text-red-500" variant={'outline'} size={'icon'} ><Trash size={16} /></Button>
        </>
    );
}

export default ActionsButtons;