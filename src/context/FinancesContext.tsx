"use client";
import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  ReactNode,
} from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export type FinancesProps = {
  // Defina suas propriedades aqui
  transactionType: string;
  amount: number;
  description: string;
};

type FinancesContextValues = {
  finances: FinancesProps[];
  withdrawAmount: number;
  depositAmount: number;
  total: number;
};

const FinancesContext = createContext({} as FinancesContextValues);

export const FinancesProvider = ({ children }: { children: ReactNode }) => {
  const [finances, setFinances] = useState<FinancesProps[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchFinances = async () => {
      try {
        const response = await axios.get("/api/finances");
        setFinances(response.data);
        router.refresh();
      } catch (error) {
        console.error("Error fetching finances:", error);
      }
    };

    fetchFinances();
  }, []);

  const withdrawAmount = useMemo(
    () =>
      finances
        .filter((finance) => finance.transactionType === "withdraw")
        .reduce((total, finance) => total + Number(finance.amount), 0),
    [finances],
  );

  const depositAmount = useMemo(
    () =>
      finances
        .filter((finance) => finance.transactionType === "deposit")
        .reduce((total, finance) => total + Number(finance.amount), 0),
    [finances],
  );

  const total = depositAmount - withdrawAmount;

  return (
    <FinancesContext.Provider
      value={{ finances, withdrawAmount, depositAmount, total }}
    >
      {children}
    </FinancesContext.Provider>
  );
};

export default FinancesContext;
