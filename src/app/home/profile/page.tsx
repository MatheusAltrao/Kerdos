import Container from '@/components/content/Container'
import Header from '@/components/content/Header'
import { authOptions } from '@/lib/auth'
import { prismaClient } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import EditProfile from './components/EditProfile'

const Profile = async () => {
  const session = await getServerSession(authOptions)

  const user = await prismaClient.user.findFirst({
    where: {
      id: session?.user.id,
    },
  })

  return (
    <Header name="Perfil">
      <Container>
        <EditProfile user={user} />
      </Container>
    </Header>
  )
}

export default Profile
