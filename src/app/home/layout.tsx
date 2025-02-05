import Sidebar from '@/components/sidebar/Sidebar'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'
interface HomeProps {
  children: ReactNode
}

const Home = async ({ children }: HomeProps) => {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    redirect('/')
  }

  return <Sidebar>{children}</Sidebar>
}

export default Home
