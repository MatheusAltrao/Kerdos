"use server";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Stripe from "stripe";

export const createCheckout = async () => {
  const session = await getServerSession(authOptions);

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
  });

  if (session) {
    const checkout = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
      metadata: {
        id: session.user.id,
      },
      line_items: [
        {
          quantity: 1,
          price: "price_1Oz8qLHGpco14sBwIrI2ehWu",
        },
      ],
    });
    return checkout;
  }
};
