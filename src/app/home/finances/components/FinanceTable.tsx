'use client'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { FinancesProps } from '@/utils/finances.type'
import formatAmount from '@/utils/formatAmout'
import { formatDate } from 'date-fns'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator'
import { useState } from 'react'
import ActionsButtons from './ActionsButton'
import Ball from './Ball'
import ButtonAddFinance from './ButtonAddFinance'
interface FinanceTableProps {
  finances: FinancesProps[]
  isPlanActive: boolean
  userId: string
}

type ColumnVisibility = {
  Nome: boolean
  MétodoDePagamento: boolean
  Categoria: boolean
  Valor: boolean
  Data: boolean
  Banco: boolean
  Ações: boolean
}

const FinanceTable = ({
  finances,
  isPlanActive,
  userId,
}: FinanceTableProps) => {
  const [first, setFirst] = useState<number>(0)
  const [rows, setRows] = useState<number>(5)

  const [columnVisibility, setColumnVisibility] = useState<ColumnVisibility>({
    Nome: true,
    MétodoDePagamento: true,
    Categoria: true,
    Valor: true,
    Data: true,
    Banco: true,
    Ações: true,
  })

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first)
    setRows(event.rows)
  }

  return (
    <div className="w-full space-y-8">
      <header>
        <div className="flex items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Pesquise aqui"
            className="h-10 w-full rounded-md bg-muted p-2 focus:outline-none "
          />

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger
                className="hidden outline-none ring-0 xl:flex"
                asChild
              >
                <Button className="gap-2 outline-none" variant="outline">
                  Colunas <ChevronDown size={20} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Selecione as colunas</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {Object.keys(columnVisibility).map((column) => (
                  <DropdownMenuCheckboxItem
                    key={column}
                    checked={columnVisibility[column as keyof ColumnVisibility]}
                    onCheckedChange={(checked: boolean) =>
                      setColumnVisibility((prev) => ({
                        ...prev,
                        [column as keyof ColumnVisibility]: checked,
                      }))
                    }
                  >
                    {column}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <ButtonAddFinance
              finances={finances}
              isPlanActive={isPlanActive}
              userId={userId}
            />
          </div>
        </div>
      </header>
      <div className="flex w-full flex-col items-center justify-center gap-4 overflow-x-auto">
        <div className="hidden w-full  xl:flex   ">
          <Table className=" w-full ">
            <TableHeader className="w-full">
              <TableRow className="w-full">
                {columnVisibility.Nome && <TableHead>Nome</TableHead>}
                {columnVisibility.MétodoDePagamento && (
                  <TableHead>Método de Pagamento</TableHead>
                )}
                {columnVisibility.Categoria && <TableHead>Categoria</TableHead>}
                {columnVisibility.Valor && <TableHead>Valor</TableHead>}
                {columnVisibility.Data && <TableHead>Data</TableHead>}
                {columnVisibility.Banco && <TableHead>Banco</TableHead>}
                {columnVisibility.Ações && (
                  <TableHead className="text-right">Ações</TableHead>
                )}
              </TableRow>
            </TableHeader>

            <TableBody>
              {finances.slice(first, first + rows).map((finance) => (
                <TableRow key={finance.id}>
                  {columnVisibility.Nome && (
                    <TableCell className="relative gap-1 pl-8 font-medium">
                      <Ball status={finance.transactionType} />
                      {finance.name}
                    </TableCell>
                  )}
                  {columnVisibility.MétodoDePagamento && (
                    <TableCell>{finance.paymentMethod}</TableCell>
                  )}
                  {columnVisibility.Categoria && (
                    <TableCell>{finance.category}</TableCell>
                  )}
                  {columnVisibility.Valor && (
                    <TableCell>
                      {formatAmount(Number(finance.amount))}
                    </TableCell>
                  )}
                  {columnVisibility.Data && (
                    <TableCell>
                      {formatDate(finance.date, 'dd/MM/yyyy')}
                    </TableCell>
                  )}
                  {columnVisibility.Banco && (
                    <TableCell>{finance.bank}</TableCell>
                  )}
                  {columnVisibility.Ações && (
                    <TableCell className="space-x-2 text-right">
                      <ActionsButtons financeID={finance.id} />
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex w-full  xl:hidden    ">
          <Table className=" w-full overflow-hidden">
            <TableHeader className="w-full">
              <TableRow className="w-full">
                <TableHead>Nome</TableHead>

                <TableHead>Valor</TableHead>

                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <AnimatePresence>
                {finances.slice(first, first + rows).map((finance) => (
                  <motion.tr
                    key={finance.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <TableCell className="relative gap-1 pl-8 font-medium">
                      <Ball status={finance.transactionType} />
                      {finance.name}
                    </TableCell>

                    <TableCell>
                      {formatAmount(Number(finance.amount))}
                    </TableCell>

                    <TableCell className="space-x-2 text-right">
                      <ActionsButtons financeID={finance.id} />
                    </TableCell>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </TableBody>
          </Table>
        </div>

        {finances.length === 0 && (
          <div>
            <p className="mt-4 text-sm text-muted-foreground">
              Você ainda não tem nenhuma transação, clique em adicionar para
              criar novas transações.
            </p>
          </div>
        )}

        {finances.length > 0 && (
          <Paginator
            first={first}
            rows={rows}
            totalRecords={finances.length}
            onPageChange={onPageChange}
          />
        )}
      </div>
    </div>
  )
}

export default FinanceTable
