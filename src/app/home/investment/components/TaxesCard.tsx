import { Coins, Landmark } from "lucide-react";

interface TaxesCardProps {
    name: string;
    amount: number;
}

const TaxesCard = ({ name, amount }: TaxesCardProps) => {
    return (
        <div className="bg-muted rounded-md flex items-start justify-start gap-3 p-4  " >



            <div className={` bg-muted-foreground text-secondary  rounded-full flex items-center justify-center size-10 min-w-10`} >
                <Landmark size={16} />
            </div>

            <div className="flex flex-col -mt-1 " >
                <h2 className="font-semibold text-base" >{name}</h2>
                <p className="opacity-60 font-medium  text-sm" >{amount}%</p>
            </div>


        </div>
    );
}

export default TaxesCard;