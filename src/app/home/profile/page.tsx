import Container from "@/components/content/Container";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import EditProfile from "./components/EditProfile";

const Profile = async () => {
  const session = await getServerSession(authOptions);

  const user = await prismaClient.user.findFirst({
    where: {
      id: session?.user.id,
    },
  });

  return (
    <Container>
      <EditProfile user={user} />
    </Container>
  );
};

export default Profile;
