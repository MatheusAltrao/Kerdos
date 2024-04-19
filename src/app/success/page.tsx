import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircleIcon } from "lucide-react";
import Link from "next/link";

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8 md:p-12">
      <div className="flex flex-col items-center gap-4">
        <CheckCircleIcon className="h-16 w-16 text-green-500" />
        <h1 className="text-3xl font-bold">Congratulations!</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Your order has been placed successfully.
        </p>
      </div>
      <div className="grid w-full max-w-md gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <div className="font-medium ">Product</div>
              <p className=" text-muted-foreground">Kerdos</p>{" "}
            </div>
            <div className="flex items-center justify-between">
              <div className="font-medium">Quantity</div>
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
};

export default Success;
