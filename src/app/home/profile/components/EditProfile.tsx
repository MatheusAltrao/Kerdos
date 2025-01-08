'use client'
import Input from '@/components/form/Input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'
import { api } from '@/lib/api'
import { UserProps } from '@/utils/user.type'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { Save } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const profileSchema = z.object({
  name: z.string().min(1, 'Nome obrigatório'),
  phone: z.string().refine(
    (value) => {
      return (
        /^(?:\(\d{2}\)\s?)?\d{9}$/.test(value) ||
        /^\d{2}\s\d{9}$/.test(value) ||
        /^\d{11}$/.test(value)
      )
    },
    {
      message: 'O número do celular deve estar (99) 999999999',
    },
  ),
})

type IProfileSchema = z.infer<typeof profileSchema>

interface EditProfileProps {
  user: UserProps
}

const EditProfile = ({ user }: EditProfileProps) => {
  const [imageLink, setImageLink] = useState('')
  const { toast } = useToast()
  const router = useRouter()

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    reset,
  } = useForm<IProfileSchema>({
    resolver: zodResolver(profileSchema),
  })

  useEffect(() => {
    if (user) {
      setValue('name', user.name!)
      setValue('phone', user.phone!)
      setImageLink(user.image!)
    }
  }, [user])

  const handleUpdatePerfil = async (data: IProfileSchema) => {
    try {
      await api.post('/api/users', {
        id: user?.id,
        name: data.name,
        phone: data.phone,
      })

      const formatDate = format(new Date(), 'dd/MM/yyyy')

      toast({
        title: 'Editado com sucesso',
        description: 'Perfil editado com sucesso. ' + formatDate,
      })

      router.push('/home/finances')
      router.refresh()
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Ocorreu um erro inesperado. ',
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(handleUpdatePerfil)} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Label htmlFor="name">Nome</Label>
          <Input
            name="name"
            register={register}
            error={errors.name?.message}
            placeholder="Matheus"
            type="text"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="phone">Celular</Label>
          <Input
            name="phone"
            register={register}
            error={errors.phone?.message}
            placeholder="(99) 99999-9999"
            type="text"
          />
        </div>
      </div>
      <div className="space-y-1">
        <Label htmlFor="profile-picture">Foto de perfil</Label>
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage alt="Profile Picture" src={imageLink} />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <Button
        variant={'outline'}
        className="w-full gap-2 sm:w-auto"
        type="submit"
      >
        Save <Save size={20} />
      </Button>
    </form>
  )
}

export default EditProfile
