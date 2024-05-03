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
    const { id } = await req.json();

    const updatedUser = await prismaClient.user.update({
      where: {
        id: id,
      },
      data: {
        isPlanActive: false,
        planStartDate: null,
      },
    });

    return NextResponse.json({
      message: "Plan updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 },
    );
  }
}
