// pages/api/stripe-webhook.js

import { prismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export async function POST(req: Request) {
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    console.error("Missing Stripe signature");
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  const text = await req.text();

  try {
    const event = stripe.webhooks.constructEvent(
      text,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET_KEY as string,
    );

    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object as Stripe.Checkout.Session;
        await prismaClient.user.update({
          where: {
            id: session.metadata?.id,
          },
          data: {
            isPlanActive: true,
            planStartDate: new Date(),
          },
        });
        break;
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    console.log(event.type);

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error(`Error processing webhook event: ${err}`);
    return NextResponse.json({ error: err }, { status: 400 });
  }
}
