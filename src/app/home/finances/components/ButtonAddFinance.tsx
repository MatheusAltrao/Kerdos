'use client'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { FinancesProps } from '@/utils/finances.type'
import { Plus } from 'lucide-react'
import Alert from './Alert'
import AddTransaction from './addTransaction'
import { useState } from 'react'

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
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <div className="flex h-10 items-center gap-2 rounded-md border border-input bg-background px-4 py-2 hover:bg-accent hover:text-accent-foreground ">
          <span className="hidden xl:block">Adicionar</span> <Plus size={20} />
        </div>
      </DialogTrigger>

      {isPlanActive ? (
        <AddTransaction setIsOpen={setIsOpen} userId={userId} />
      ) : finances.length < 10 ? (
        <AddTransaction setIsOpen={setIsOpen} userId={userId} />
      ) : (
        finances.length >= 10 && <Alert />
      )}
    </Dialog>
  )
}

export default ButtonAddFinance
