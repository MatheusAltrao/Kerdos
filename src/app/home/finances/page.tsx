import Container from "@/components/content/Container";
import Header from "@/components/content/Header";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import FinanceTable from "./components/FinanceTable";

const Finance = async () => {
  const session = await getServerSession(authOptions);

  const finances = await prismaClient.finances.findMany({
    where: {
      userId: session?.user.id,
    },
  });

  const user = await prismaClient.user.findFirst({
    where: {
      id: session?.user.id,
    },
  });

  const isPlanActive = user?.isPlanActive!;

  return (
    <Header name="Finanças">
      <Container>
        <FinanceTable
          finances={finances}
          isPlanActive={isPlanActive}
          userId={session?.user.id as string}
        />
      </Container>
    </Header>
  );
};

export default Finance;
