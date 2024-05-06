"use client";
import { createCheckout } from "@/actions/checkout";
import { Button } from "@/components/ui/button";
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
    <Button onClick={handleSubscriptionPlan} variant={"default"}>
      Assinar plano Profissional
    </Button>
  );
};

export default BuyPlan;
