'use client'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
} from '@/components/ui/dialog'
import { useToast } from '@/components/ui/use-toast'
import { api } from '@/lib/api'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { ChevronLeft, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

const CancelPlan = () => {
  const { toast } = useToast()
  const router = useRouter()

  const handleCancelPlan = async () => {
    try {
      await api.post('/api/cancelsubscription')

      toast({
        title: 'Plano Cancelado',
        description: 'Você está no plano gratuito ',
      })

      router.refresh()
    } catch (error: any) {
      console.log('Erro ao cancelar plano:', error.message)
      toast({
        title: 'Erro',
        description: 'Ocorreu um erro inesperado: ' + error.message,
      })
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'destructive'}>Cancelar plano</Button>
      </DialogTrigger>
      <DialogOverlay className="DialogOverlay">
        <DialogContent className="z-20 w-full max-w-[700px] border border-border bg-background  p-8">
          <div className="rounded   ">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-red-600">
                  Espere! Antes de Cancelar, Considere Isso:
                </h2>

                <div className="space-y-1">
                  <h2 className="text-lg font-bold ">
                    Tem certeza que deseja cancelar?
                  </h2>
                  <p className="text-base  text-muted-foreground">
                    Antes de cancelar, lembre-se de que ao fazê-lo, você perderá
                    acesso aos benefícios exclusivos que nosso plano oferece.
                    Não deixe que essa oportunidade escape! Mantenha-se
                    conectado aos recursos avançados que impulsionam seus
                    negócios. Estamos aqui para ajudá-lo a alcançar seus
                    objetivos. Vamos continuar juntos!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <DialogClose type="button" className="w-full">
              <div className="flex h-9 w-full items-center justify-center gap-2 rounded-md bg-muted px-4 text-sm font-medium transition-opacity hover:opacity-80   ">
                <ChevronLeft size={16} /> Voltar{' '}
              </div>
            </DialogClose>
            <DialogClose
              onClick={handleCancelPlan}
              className="w-full"
              type="submit"
            >
              <div className="flex h-9 w-full items-center justify-center gap-2 rounded-md bg-red-600 px-4 text-sm font-medium text-zinc-50 transition-colors hover:bg-red-700 ">
                Cancelar Plano <X size={16} />
              </div>
            </DialogClose>
          </div>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  )
}

export default CancelPlan
