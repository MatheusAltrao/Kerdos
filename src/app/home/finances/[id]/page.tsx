import Back from "@/components/content/Back";
import Container from "@/components/content/Container";
import Header from "@/components/content/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import formatAmount from "@/utils/formatAmout";
import { formatDate } from "date-fns";
import { getServerSession } from "next-auth";

interface FinanceIDProps {
  params: {
    id: string;
  };
}

const FinanceID = async ({ params }: FinanceIDProps) => {
  const session = await getServerSession(authOptions);

  const finance = await prismaClient.finances.findFirst({
    where: {
      userId: session?.user.id,
      id: params.id,
    },
  });

  console.log(finance);

  return (
    <Header name="Finanças">
      <Container>
        <Back href="/home/finances" />
        <Card className="border-0 ">
          <CardHeader className="px-0 pt-0">
            <CardTitle>Detalhes </CardTitle>
            <CardDescription>
              Aqui estão todos os detalhes da transação.
            </CardDescription>
          </CardHeader>
          <CardContent className=" p-0">
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3 ">
              <div className="grid gap-3">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  defaultValue={finance?.name}
                  readOnly
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="paymentMethod">Metodo de pagamento</Label>
                <Input
                  id="paymentMethod"
                  type="text"
                  className="w-full"
                  defaultValue={finance?.paymentMethod}
                  readOnly
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="category">Categoria</Label>
                <Input
                  id="category"
                  type="text"
                  className="w-full"
                  defaultValue={finance?.category}
                  readOnly
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="amount">Valor</Label>
                <Input
                  id="amount"
                  type="text"
                  className="w-full"
                  defaultValue={formatAmount(Number(finance?.amount))}
                  readOnly
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="date">Data</Label>
                <Input
                  id="date"
                  type="text"
                  className="w-full"
                  defaultValue={String(
                    formatDate(finance?.date!, "dd/MM/yyyy"),
                  )}
                  readOnly
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="bank">Banco</Label>
                <Input
                  id="bank"
                  type="text"
                  className="w-full"
                  defaultValue={finance?.bank}
                  readOnly
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="transactionType">Tipo</Label>
                <Input
                  id="transactionType"
                  type="text"
                  className="w-full"
                  defaultValue={finance?.transactionType}
                  readOnly
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </Container>
    </Header>
  );
};

export default FinanceID;
