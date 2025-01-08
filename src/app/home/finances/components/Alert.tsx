'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { DialogClose } from '@radix-ui/react-dialog'
import { Plus, X } from 'lucide-react'
import Link from 'next/link'

const Alert = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex h-10 cursor-pointer items-center gap-2 rounded-md border border-input bg-background px-4 py-2 hover:bg-accent hover:text-accent-foreground ">
          Adicionar <Plus size={20} />
        </div>
      </DialogTrigger>

      <DialogOverlay className="DialogOverlay">
        <DialogContent className="z-20 w-full max-w-[500px]">
          <div className=" space-y-8">
            <DialogHeader className="space-y-4">
              <DialogTitle>Limite do Plano Gratuito Atingido</DialogTitle>
              <DialogDescription>
                Você alcançou o limite máximo de finanças permitidas no seu
                Plano Gratuito. Para continuar adicionando novas finanças e
                aproveitar recursos adicionais, faça um upgrade para um de
                nossos planos pagos.
              </DialogDescription>
            </DialogHeader>

            <div className="flex items-center gap-4">
              <DialogClose type="button" className="w-full">
                <div className="flex h-9 w-full items-center justify-center gap-2 rounded-md bg-red-700 px-4 text-sm font-medium text-zinc-50 transition-colors hover:bg-red-800 ">
                  Cancelar <X size={16} />{' '}
                </div>
              </DialogClose>

              <DialogClose className="w-full" type="submit">
                <Link href={'/home/plans'}>
                  <div className="flex h-9 w-full items-center justify-center gap-2 rounded-md bg-sky-500 px-4 text-sm font-medium text-zinc-50 transition-colors hover:bg-sky-600 ">
                    Ver Planos <Plus size={16} />{' '}
                  </div>
                </Link>
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  )
}

export default Alert
