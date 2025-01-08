import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { X } from 'lucide-react'
import Link from 'next/link'

const Cancel = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8 md:p-12">
      <div className="flex flex-col items-center gap-4">
        <X className="h-16 w-16 text-red-600" />
        <h1 className="text-3xl font-bold">Algo deu errado!</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Você não assinou o plano, volte para a plataforma e tente mais tarde.
        </p>
      </div>
      <div className="grid w-full max-w-md gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Pedido</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <div className="font-medium ">Produto</div>
              <p className=" text-muted-foreground">Kerdos</p>{' '}
            </div>
            <div className="flex items-center justify-between">
              <div className="font-medium">Quantidade</div>
              <p className=" text-muted-foreground">0</p>{' '}
            </div>
            <Separator />
            <div className="flex items-center justify-between font-medium">
              <div>Total</div>
              <div>R$00,00</div>
            </div>
          </CardContent>
        </Card>
        <Link href="/">
          <Button className="w-full" variant={'default'}>
            {' '}
            Voltar para o Kerdos
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Cancel
