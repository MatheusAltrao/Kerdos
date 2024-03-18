import { TrendingUp } from "lucide-react";

interface CardProps {
    name: string;
    variation: number;
    buy: string;
}

const Card = ({ name, variation, buy }: CardProps) => {

    const isPositive = variation > 0

    return (

        <div className="bg-muted rounded-md flex gap-2 p-8  " >

            <div className={` ${isPositive ? 'bg-green-300' : ' bg-red-300'}  rounded-full flex items-center justify-center size-[70px]`} >
                <TrendingUp className={` ${isPositive ? 'text-green-900' : 'text-red-900 '} `} size={32} />
            </div>

            <div className="flex flex-col" >
                <div className="flex items-center gap-2" >
                    <h2 className="font-bold text-2xl" >{name}</h2>
                    <p className={`text-xs  p-1 rounded ${isPositive ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'} `} >{variation}</p>
                </div>
                <p className="opacity-60" >{buy}</p>
            </div>


        </div>
    );
}

export default Card;