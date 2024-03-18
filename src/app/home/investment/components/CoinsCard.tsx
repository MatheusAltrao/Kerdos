import formatAmount from "@/utils/formatAmout";
import { TrendingDown, TrendingUp } from "lucide-react";

interface CoinsCardProps {
    name: string;
    variation: number;
    buy: string;
}

const CoinsCard = ({ name, variation, buy }: CoinsCardProps) => {

    const isPositive = variation > 0
    return (

        <div className="bg-muted rounded-md flex items-center justify-between  gap-3 p-4  " >

            <div className="flex items-center gap-3 " >
                <div className={` ${isPositive ? 'bg-green-300' : ' bg-red-300'}  rounded-full flex items-center justify-center size-10 min-w-10`} >
                    {isPositive ? <TrendingUp className='text-green-900' size={16} /> : <TrendingDown className='text-red-900' size={16} />}
                </div>

                <div className="flex flex-col " >
                    <h2 className="font-semibold text-lg" >{name.slice(0, 40)}</h2>
                    <p className="opacity-60 font-medium  text-sm" >{formatAmount(Number(buy))}</p>
                </div>
            </div>

            <div>
                <p className={`text-xs  py-px px-1 font-medium rounded ${isPositive ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'} `} >{variation}</p>

            </div>
        </div>
    );
}

export default CoinsCard;