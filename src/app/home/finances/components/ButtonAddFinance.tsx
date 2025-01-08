'use client'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { FinancesProps } from '@/utils/finances.type'
import { Plus } from 'lucide-react'
import Alert from './Alert'
import AddTransaction from './addTransaction'

interface ButtonAddFinanceProps {
  userId: string
  isPlanActive: boolean
  finances: FinancesProps[]
}

const ButtonAddFinance = ({
  userId,
  isPlanActive,
  finances,
}: ButtonAddFinanceProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex h-10 items-center gap-2 rounded-md border border-input bg-background px-4 py-2 hover:bg-accent hover:text-accent-foreground ">
          <span className="hidden xl:block">Adicionar</span> <Plus size={20} />
        </div>
      </DialogTrigger>

      {isPlanActive ? (
        <AddTransaction userId={userId} />
      ) : finances.length < 10 ? (
        <AddTransaction userId={userId} />
      ) : (
        finances.length >= 10 && <Alert />
      )}
    </Dialog>
  )
}

export default ButtonAddFinance
