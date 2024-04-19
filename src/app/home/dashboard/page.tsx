"use client";
import Container from "@/components/content/Container";
import Header from "@/components/content/Header";
import Card from "./components/Card";
import { ArrowDown, ArrowUp, CalendarIcon, DollarSign } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { useEffect, useMemo, useState } from "react";
import useDateRange from "@/hooks/useDateRange";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FinancesProps } from "@/utils/finances.type";
import Pie from "@/components/charts/Pie";

const Dashboard = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  useDateRange(startDate, endDate, setEndDate);
  const router = useRouter();
  const [finances, setFinances] = useState<FinancesProps[]>([]);

  useEffect(() => {
    const handleReadFinances = async () => {
      try {
        const response = await axios.get("/api/finances");
        setFinances(response.data);
        router.refresh();
      } catch (error) {
        console.log(error);
      }
    };

    handleReadFinances();
  }, []);

  const withdrawAmount = useMemo(() => {
    return finances
      .filter((finance) => finance.transactionType === "Saída")
      .reduce((total, finance) => total + Number(finance.amount), 0);
  }, [finances]);

  const depositAmount = useMemo(() => {
    return finances
      .filter((finance) => finance.transactionType == "Entrada")
      .reduce((total, finance) => total + Number(finance.amount), 0);
  }, [finances]);

  const total = depositAmount - withdrawAmount;

  const pix = useMemo(() => {
    return finances.filter((finance) => finance.paymentMethod == "PIX").length;
  }, [finances]);

  const money = useMemo(() => {
    return finances.filter((finance) => finance.paymentMethod == "Dinheiro")
      .length;
  }, [finances]);

  const bankSlip = useMemo(() => {
    return finances.filter((finance) => finance.paymentMethod == "Boleto")
      .length;
  }, [finances]);

  const credit = useMemo(() => {
    return finances.filter((finance) => finance.paymentMethod == "Crédito")
      .length;
  }, [finances]);

  const debit = useMemo(() => {
    return finances.filter((finance) => finance.paymentMethod == "Débito")
      .length;
  }, [finances]);

  const withdraw = useMemo(() => {
    return finances.filter((finance) => finance.transactionType == "Saída")
      .length;
  }, [finances]);

  const deposit = useMemo(() => {
    return finances.filter((finance) => finance.transactionType == "Entrada")
      .length;
  }, [finances]);

  return (
    <Header name="Dashboard">
      <Container>
        <div className="w-full space-y-8">
          {/* <div className="flex items-center justify-end gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[150px] justify-start text-left font-normal",
                    !startDate && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? (
                    format(startDate, "dd/MM/yyyy")
                  ) : (
                    <span>Selecione uma data</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  required
                  mode="single"
                  showOutsideDays={false}
                  selected={startDate}
                  onSelect={setStartDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            -
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[150px] justify-start text-left font-normal",
                    !endDate && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {endDate ? (
                    format(endDate, "dd/MM/yyyy")
                  ) : (
                    <span>Escolha uma data</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  required
                  mode="single"
                  showOutsideDays={false}
                  selected={endDate}
                  onSelect={setEndDate}
                  className="rounded-md "
                  fromDate={startDate}
                />
              </PopoverContent>
            </Popover>
          </div> */}

          <div className="grid w-full grid-cols-3 gap-6">
            <Card
              amount={depositAmount}
              title="Entradas"
              description="Soma de todas as entradas"
              icon={<ArrowUp size={16} />}
            />
            <Card
              amount={withdrawAmount}
              title="Saídas"
              description="Soma de todas as saídas"
              icon={<ArrowDown size={16} />}
            />

            <Card
              amount={total}
              title="Valor Total"
              description="Soma de todas as finanças"
              icon={<DollarSign size={16} />}
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex h-[400px]  items-center justify-center rounded-lg bg-muted p-8">
              <Pie
                colors={["#38bdf8", "#0ea5e9", "#0284c7", "#0369a1", "#075985"]}
                labels={["PIX", "Dinheiro", "Boleto", "Crédito", "Débito"]}
                values={[pix, money, bankSlip, credit, debit]}
              />
            </div>

            <div className="flex h-[400px] items-center justify-center rounded-lg bg-muted p-8">
              <Pie
                colors={["#16a34a", "#dc2626"]}
                labels={["Entrada", "Saída"]}
                values={[deposit, withdraw]}
              />
            </div>
          </div>
        </div>
      </Container>
    </Header>
  );
};

export default Dashboard;
