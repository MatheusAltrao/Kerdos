import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: "Not Authorized" }, { status: 401 });
  }

  try {
    const {
      name,
      transactionType,
      category,
      paymentMethod,
      bank,
      amount,
      date,
      userId,
    } = await req.json();

    await prismaClient.finances.create({
      data: {
        name,
        transactionType,
        category,
        paymentMethod,
        bank,
        amount,
        date,
        userId,
      },
    });
    return NextResponse.json({ message: "Plan created successfully" });
  } catch (error) {
    console.error("Failed to create new plan:", error);
    return NextResponse.json(
      { error: "Failed to create new plan" },
      { status: 500 },
    );
  }
}

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: "Not Authorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);

  const finaceID = searchParams.get("id");

  if (!finaceID) {
    return NextResponse.json(
      { error: "Finace ID is required" },
      { status: 400 },
    );
  }

  try {
    const existFinance = await prismaClient.finances.findUnique({
      where: { id: finaceID },
    });

    if (!existFinance) {
      return NextResponse.json({ error: "Finance not found" }, { status: 404 });
    }

    await prismaClient.finances.delete({
      where: {
        id: finaceID,
      },
    });

    return NextResponse.json({ message: "Finace deleted successfully!" });
  } catch (error) {
    console.error("Failed to delete finance:", error);
    return NextResponse.json(
      { error: "Failed to delete finance" },
      { status: 500 },
    );
  }
}

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: "Not Authorized" }, { status: 401 });
  }

  try {
    const finances = await prismaClient.finances.findMany({
      where: {
        userId: session?.user.id,
      },
    });

    return NextResponse.json(finances);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
