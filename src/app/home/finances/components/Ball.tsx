import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface BallProps {
    status: string;
}

const Ball = ({ status }: BallProps) => {
    return (

        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger> <div className={`w-[10px] h-[10px] cursor-default ${status == 'Entrada' ? 'bg-green-600' : 'bg-red-600 '} rounded-full absolute left-4 top-7`} /></TooltipTrigger>
                <TooltipContent>
                    <p>{status}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    );
}

export default Ball;