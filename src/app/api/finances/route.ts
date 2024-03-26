import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import prismaClient from '@/lib/prisma';

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        return NextResponse.json({ error: 'Not Authorized' }, { status: 401 });
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
            userId
        } = await req.json()

        await prismaClient.finances.create({
            data: {
                name,
                transactionType,
                category,
                paymentMethod,
                bank,
                amount,
                date,
                userId
            }
        })
        return NextResponse.json({ message: 'Plan created successfully' });

    } catch (error) {
        console.error('Failed to create new plan:', error);
        return NextResponse.json({ error: 'Failed to create new plan' }, { status: 500 });
    }
} 