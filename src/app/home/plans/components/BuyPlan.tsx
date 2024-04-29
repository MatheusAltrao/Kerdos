"use client";
import { Button } from "@/components/ui/button";
import { createCheckout } from "@/actions/checkout";
import { loadStripe } from "@stripe/stripe-js";

const BuyPlan = () => {
  const handleSubscriptionPlan = async () => {
    const checkout = await createCheckout();
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
    stripe?.redirectToCheckout({
      sessionId: checkout?.id!,
    });
  };

  return (
    <Button onClick={handleSubscriptionPlan} variant={"outline"}>
      Assinar plano Profissional
    </Button>
  );
};

export default BuyPlan;
