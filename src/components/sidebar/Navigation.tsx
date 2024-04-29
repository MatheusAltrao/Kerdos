"use client";

import {
  BarChart4,
  DollarSign,
  FileText,
  Settings,
  TrendingUp,
} from "lucide-react";
import { usePathname } from "next/navigation";
import ActiveLink from "./ActiveLink";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex w-full flex-col gap-1 px-2 py-4 lg:px-4">
      <ActiveLink
        href="/home/finances"
        name="Finanças"
        pathname={pathname}
        icon={<DollarSign size={18} />}
      />
      <ActiveLink
        href="/home/dashboard"
        name="Dashboard"
        pathname={pathname}
        icon={<BarChart4 size={18} />}
      />

      <ActiveLink
        href="/home/investment"
        name="Investimento"
        pathname={pathname}
        icon={<TrendingUp size={18} />}
      />
      {/* <ActiveLink
        href="/home/notices"
        name="Notícias"
        pathname={pathname}
        icon={<Bell size={18} />}
      /> */}
      <ActiveLink
        href="/home/plans"
        name="Planos"
        pathname={pathname}
        icon={<FileText size={18} />}
      />
      <ActiveLink
        href="/home/settings"
        name="Configuração"
        pathname={pathname}
        icon={<Settings size={18} />}
      />
    </nav>
  );
};

export default Navigation;
