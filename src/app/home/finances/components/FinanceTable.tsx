"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ActionsButtons from "./ActionsButton";
import Ball from "./Ball";
import { useState } from "react";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import { FinancesProps } from "@/utils/finances.type";
import formatAmount from "@/utils/formatAmout";
import { formatDate } from "date-fns";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface FinanceTableProps {
  finances: FinancesProps[];
}

const FinanceTable = ({ finances }: FinanceTableProps) => {
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(5);
  const [parent] = useAutoAnimate();

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  //min-h-[23.3125rem]
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex  w-full   ">
        <Table className=" w-full overflow-hidden">
          <TableHeader className="w-full">
            <TableRow className="w-full">
              <TableHead>Nome</TableHead>
              <TableHead>Método de Pagamento</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Banco</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {finances.slice(first, first + rows).map((finance, index) => (
              <TableRow key={index}>
                <TableCell className="relative   gap-1 pl-8 font-medium">
                  <Ball status={finance.transactionType} />
                  {finance.name}
                </TableCell>
                <TableCell>{finance.paymentMethod}</TableCell>
                <TableCell>{finance.category}</TableCell>
                <TableCell>{formatAmount(Number(finance.amount))}</TableCell>
                <TableCell>{formatDate(finance.date, "dd/MM/yyyy")}</TableCell>
                <TableCell>{finance.bank}</TableCell>
                <TableCell className="space-x-2 text-right">
                  <ActionsButtons financeID={finance.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Paginator
        first={first}
        rows={rows}
        totalRecords={finances.length}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default FinanceTable;
