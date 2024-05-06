import Container from "@/components/content/Container";
import Header from "@/components/content/Header";
import { Badge } from "@/components/ui/badge";
import { CheckIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import BuyPlan from "./components/BuyPlan";
import CancelPlan from "./components/CancelPlan";

const Plans = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/");
  }

  const finances = await prismaClient.finances.findMany({
    where: {
      userId: session?.user.id,
    },
  });

  const currentFinancesQuantity = finances.length;
  const total = 10;
  const percentage = (currentFinancesQuantity * 100) / total;

  const user = await prismaClient.user.findFirst({
    where: {
      id: session?.user.id,
    },
  });

  const isPlanActive = user?.isPlanActive;

  return (
    <Header name="Planos">
      <Container>
        <div className="w-full space-y-4">
          <Card className="space-y-4 border-0 p-0 shadow-none ">
            <CardHeader className="p-0">
              <CardTitle> Preços simples. Possibilidades ilimitadas.</CardTitle>
              <CardDescription className="max-w-[500px] ">
                Precisa de recursos avançados para expandir seus negócios, nós
                temos para você. Coberto com preços transparentes e sem taxas
                ocultas.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="">
                <div className="flex flex-col space-y-2 rounded border border-border p-8">
                  <div className="space-y-2">
                    <div className="flex flex-col items-start gap-1 ">
                      <Badge variant="secondary">
                        {isPlanActive ? "Atual" : "Recomendado"}
                      </Badge>
                      <h3 className="text-xl font-bold">Profissional</h3>
                    </div>
                  </div>
                  <ul className="grid gap-2 py-2">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Finanças Ilimitadas
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Contato para suporte
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Participar das futuras atualizações
                    </li>
                  </ul>
                  <div className="flex items-center justify-between gap-4">
                    <div className="self-start">
                      <div className="text-2xl font-semibold">R$ 9,90</div>
                      <p className="text-xs text-muted-foreground">Por mês</p>
                    </div>
                  </div>

                  {isPlanActive ? <CancelPlan /> : <BuyPlan />}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className={`space-y-4 border-0 p-0 shadow-none ${isPlanActive && "hidden"}`}
          >
            <CardContent className="p-0">
              <div className="space-y-4">
                <div className="flex flex-col space-y-2 rounded border border-border p-8">
                  <div className="space-y-2">
                    <div className="flex flex-col items-start gap-1 ">
                      <Badge variant="secondary">Atual</Badge>
                      <h3 className="text-xl font-bold">Gratuito</h3>
                    </div>
                  </div>

                  <div>
                    <div className="h-2 w-full rounded-full bg-border">
                      <div
                        style={{ width: `${percentage}%` }}
                        className={`h-2  rounded-full bg-sky-400`}
                      />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground ">
                      {" "}
                      <span className="font-medium text-primary ">
                        {currentFinancesQuantity}
                      </span>{" "}
                      de{" "}
                      <span className="font-medium text-primary  ">
                        {" "}
                        {total}
                      </span>{" "}
                      finaças utilizadas
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="self-start">
                      <div className="text-2xl font-semibold">R$ 0,00</div>
                      <p className="text-xs text-muted-foreground">Por mês</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Header>
  );
};

export default Plans;
