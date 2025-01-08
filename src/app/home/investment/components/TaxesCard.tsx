import { Coins, Landmark } from 'lucide-react'

interface TaxesCardProps {
  name: string
  amount: number
}

const TaxesCard = ({ name, amount }: TaxesCardProps) => {
  return (
    <div className="flex items-start justify-start gap-3 rounded-md bg-muted p-4  ">
      <div
        className={` flex size-10  min-w-10 items-center justify-center rounded-full bg-muted-foreground text-secondary`}
      >
        <Landmark size={16} />
      </div>

      <div className="-mt-1 flex flex-col ">
        <h2 className="text-base font-semibold">{name}</h2>
        <p className="text-sm font-medium  opacity-60">{amount}%</p>
      </div>
    </div>
  )
}

export default TaxesCard
