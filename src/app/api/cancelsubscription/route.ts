import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: "Not Authorized" }, { status: 401 });
  }

  console.log("Sessão obtida:", session);

  const user = await prismaClient.user.findUnique({
    where: { id: session.user.id },
  });

  console.log("Usuário encontrado:", user);

  try {
    if (!user?.stripeSubscriptionId) {
      console.error("ID da assinatura não encontrada para o usuário.");
      return NextResponse.json(
        { error: "No active subscription found" },
        { status: 404 },
      );
    }

    const cancelledSubscription = await stripe.subscriptions.cancel(
      user?.stripeSubscriptionId,
    );
    console.log("Assinatura cancelada:", cancelledSubscription);

    await prismaClient.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        isPlanActive: false,
        planStartDate: null,
        stripeSubscriptionId: null,
      },
    });

    return NextResponse.json({ message: "Plan updated successfully" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
