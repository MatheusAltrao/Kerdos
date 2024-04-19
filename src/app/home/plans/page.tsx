"use client";

import Container from "@/components/content/Container";
import Header from "@/components/content/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createCheckout } from "@/actions/checkout";

const Plans = () => {
  const handleSubscriptionPlan = async () => {
    const checkout = await createCheckout();
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
    stripe?.redirectToCheckout({
      sessionId: checkout.id,
    });
  };

  return (
    <Header name="Planos">
      <Container>
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
                  <div className="flex items-center justify-between ">
                    <h3 className="text-xl font-bold">Profissional</h3>
                    <Badge variant="secondary">Recomendado</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Perfect for personal projects and small teams looking to get
                    started with CI/CD.
                  </p>
                </div>
                <ul className="grid gap-2 py-2">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Unlimited public & private projects
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Email support
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    2,000 build minutes/month
                  </li>
                </ul>
                <div className="flex items-center justify-between gap-4">
                  <div className="self-start">
                    <div className="text-2xl font-semibold">R$ 9,90</div>
                    <p className="text-xs text-muted-foreground">Por mês</p>
                  </div>

                  <Button onClick={handleSubscriptionPlan} variant={"outline"}>
                    Investir
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Container>
    </Header>
  );
};

export default Plans;
