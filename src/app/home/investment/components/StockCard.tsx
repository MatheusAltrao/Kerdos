import { TrendingDown, TrendingUp } from 'lucide-react'

interface StockCardProps {
  name: string
  variation: number
}

const StockCard = ({ name, variation }: StockCardProps) => {
  const isPositive = variation > 0

  return (
    <div className="flex items-center justify-between gap-3 rounded-md bg-muted p-4  ">
      <div className="flex items-center gap-3">
        <div
          className={` ${isPositive ? 'bg-green-300' : ' bg-red-300'}  flex size-7 min-w-7 items-center justify-center rounded-full`}
        >
          {isPositive ? (
            <TrendingUp className="text-green-900" size={16} />
          ) : (
            <TrendingDown className="text-red-900" size={16} />
          )}
        </div>

        <h2 className="text-base font-semibold">{name.slice(0, 40)}</h2>
      </div>

      <div className="flex items-center gap-2">
        <p
          className={`rounded  px-1 py-px text-xs font-medium ${isPositive ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'} `}
        >
          {variation}
        </p>
      </div>
    </div>
  )
}

export default StockCard
