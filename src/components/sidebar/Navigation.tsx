"use client";

import {
  BarChart4,
  DollarSign,
  FileText,
  Settings,
  TrendingUp,
} from "lucide-react";
import ActiveLink from "./ActiveLink";

const Navigation = () => {
  return (
    <nav className="flex w-full flex-col gap-1 px-2 py-4 xl:px-4">
      <ActiveLink
        href="/home/finances"
        name="Finanças"
        icon={<DollarSign size={18} />}
      />
      <ActiveLink
        href="/home/dashboard"
        name="Dashboard"
        icon={<BarChart4 size={18} />}
      />

      <ActiveLink
        href="/home/investment"
        name="Investimento"
        icon={<TrendingUp size={18} />}
      />

      <ActiveLink
        href="/home/plans"
        name="Planos"
        icon={<FileText size={18} />}
      />
      <ActiveLink
        href="/home/settings"
        name="Configuração"
        icon={<Settings size={18} />}
      />
    </nav>
  );
};

export default Navigation;
