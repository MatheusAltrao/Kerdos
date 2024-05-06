"use client";
import Pie from "@/components/charts/Pie";
import Container from "@/components/content/Container";
import useDateRange from "@/hooks/useDateRange";
import { FinancesProps } from "@/utils/finances.type";
import axios from "axios";
import { ArrowDown, ArrowUp, DollarSign } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Card from "./components/Card";

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

  const verifyPaymentMethods =
    pix === 0 && credit === 0 && bankSlip === 0 && debit === 0 && money === 0;

  const verifyPaymentType = withdraw === 0 && deposit === 0;

  return (
    <Container>
      <div className="grid w-full gap-8 ">
        <div className="grid w-full grid-cols-1 gap-6 xl:grid-cols-3">
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

        <div className="grid  grid-cols-1 gap-6 xl:grid-cols-2">
          <div className="flex h-[400px]  items-center justify-center rounded-lg bg-muted p-8">
            {verifyPaymentMethods ? (
              <div className="flex flex-col items-center justify-center gap-1">
                <h2 className="text-lg font-medium">
                  Nenhuma Transação Encontrada
                </h2>
                <p className="text-sm opacity-80">
                  Atualmente não há dados de transações para exibir.
                </p>
              </div>
            ) : (
              <Pie
                colors={["#38bdf8", "#0ea5e9", "#0284c7", "#0369a1", "#075985"]}
                labels={["PIX", "Dinheiro", "Boleto", "Crédito", "Débito"]}
                values={[pix, money, bankSlip, credit, debit]}
              />
            )}
          </div>

          <div className="flex h-[400px] items-center justify-center rounded-lg bg-muted p-8">
            {verifyPaymentType ? (
              <div className="flex flex-col items-center justify-center gap-1">
                <h2 className="text-lg font-medium">
                  Nenhuma Transação Encontrada
                </h2>
                <p className="text-sm opacity-80">
                  Atualmente não há dados de transações para exibir.
                </p>
              </div>
            ) : (
              <Pie
                colors={["#16a34a", "#dc2626"]}
                labels={["Entrada", "Saída"]}
                values={[deposit, withdraw]}
              />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
