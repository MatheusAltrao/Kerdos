import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { CheckCircleIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const Success = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/");
  }

  const user = await prismaClient.user.findUnique({
    where: { id: session.user.id },
  });

  if (user?.isPlanActive) {
    return (
      <div className="flex flex-col items-center justify-center gap-8 p-8 md:p-12">
        <div className="flex flex-col items-center gap-4">
          <CheckCircleIcon className="h-16 w-16 text-green-500" />
          <h1 className="text-3xl font-bold">Parabéns!</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Você esta assinando o plano Profissional.
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
                <p className=" text-muted-foreground">Kerdos</p>{" "}
              </div>
              <div className="flex items-center justify-between">
                <div className="font-medium">Quantidade</div>
                <p className=" text-muted-foreground">1</p>{" "}
              </div>
              <Separator />
              <div className="flex items-center justify-between font-medium">
                <div>Total</div>
                <div>R$9,90</div>
              </div>
            </CardContent>
          </Card>
          <Link href="/">
            <Button className="w-full" variant={"default"}>
              {" "}
              Voltar para o Kerdos
            </Button>
          </Link>
        </div>
      </div>
    );
  } else {
    redirect("/");
  }
};

export default Success;
