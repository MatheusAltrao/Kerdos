"use client";
import Input from "@/components/form/Input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { UserProps } from "@/utils/user.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { Save, UploadIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Nome obrigatório"),
  phone: z
    .string()
    .min(1, "Celular obrigatório")
    .refine(
      (value) => /^\d+$/.test(value),
      "O campo 'Valor' só permite números",
    ),
});

type IFormProfile = z.infer<typeof schema>;

interface EditProfileProps {
  user: UserProps;
}

const EditProfile = ({ user }: EditProfileProps) => {
  const [imageLink, setImageLink] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<IFormProfile>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (user) {
      setValue("name", user.name!);
      setImageLink(user.image!);
    }
  }, [user]);

  const handleUpdatePerfil = () => {};

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
        <Label htmlFor="profile-picture">Profile Picture</Label>
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage alt="Profile Picture" src={imageLink} />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Button size="sm" variant="outline">
            <UploadIcon className="mr-2 h-4 w-4" />
            Upload
          </Button>
        </div>
      </div>
      <Button className="w-full gap-2 sm:w-auto" type="submit">
        Save <Save size={20} />
      </Button>
    </form>
  );
};

export default EditProfile;
