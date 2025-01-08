import formatAmount from '@/utils/formatAmout'
import { TrendingDown, TrendingUp } from 'lucide-react'

interface CoinsCardProps {
  name: string
  variation: number
  buy: string
}

const CoinsCard = ({ name, variation, buy }: CoinsCardProps) => {
  const isPositive = variation > 0
  return (
    <div className="flex items-center justify-between gap-3 rounded-md  bg-muted p-4  ">
      <div className="flex items-center gap-3 ">
        <div
          className={` ${isPositive ? 'bg-green-300' : ' bg-red-300'}  flex size-10 min-w-10 items-center justify-center rounded-full`}
        >
          {isPositive ? (
            <TrendingUp className="text-green-900" size={16} />
          ) : (
            <TrendingDown className="text-red-900" size={16} />
          )}
        </div>

        <div className="flex flex-col ">
          <h2 className="text-base font-semibold">{name.slice(0, 40)}</h2>
          <p className="text-sm font-medium  opacity-60">
            {formatAmount(Number(buy))}
          </p>
        </div>
      </div>

      <div>
        <p
          className={`rounded  px-1 py-px text-xs font-medium ${isPositive ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'} `}
        >
          {variation}
        </p>
      </div>
    </div>
  )
}

export default CoinsCard
