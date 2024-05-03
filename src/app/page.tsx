"use client";
import Container from "@/components/content/Container";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { status } = useSession();

  async function handleSignIn() {
    await signIn("google");
  }

  return (
    <Container>
      {status == "unauthenticated" && (
        <div className="flex h-[80vh] w-full flex-col  items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center space-y-1">
            <h2 className="text-2xl">
              Seja bem-vindo ao <span className="font-bold">Kerdos</span>
            </h2>
            <p className="text-sm text-muted-foreground">
              Faça login para ter controle financeiro
            </p>
          </div>
          <Button onClick={handleSignIn} variant={"outline"}>
            Entrar com o Google
          </Button>
        </div>
      )}

      {status == "authenticated" && (
        <div className="flex h-[80vh] w-full flex-col  items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center space-y-1">
            <h2 className="text-2xl">
              Seja bem-vindo ao <span className="font-bold">Kerdos</span>
            </h2>
            <p className="text-sm text-muted-foreground">
              Faça login para ter controle financeiro
            </p>
          </div>
          <Link href={"/home/dashboard"}>
            <Button variant={"outline"}>Acessar Kerdos</Button>
          </Link>
        </div>
      )}

      {status == "loading" && (
        <div className="flex h-[80vh] w-full flex-col  items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center space-y-1">
            <h2 className="text-2xl">
              Seja bem-vindo ao <span className="font-bold">Kerdos</span>
            </h2>
            <p className="text-sm text-muted-foreground">
              Faça login para ter controle financeiro
            </p>
          </div>
          <Button variant={"outline"}>
            <LoaderCircle className="animate-spin" size={20} />
          </Button>
        </div>
      )}
    </Container>
  );
}
