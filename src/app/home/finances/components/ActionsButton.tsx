"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { api } from "@/lib/api";
import { format } from "date-fns";
import { Eye, Trash } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ActionsButtonsProps {
  financeID: string;
}

const ActionsButtons = ({ financeID }: ActionsButtonsProps) => {
  const router = useRouter();
  const { toast } = useToast();

  const handleDeleteFinance = async () => {
    try {
      await api.delete("/api/finances", {
        params: {
          id: financeID,
        },
      });

      const formatDate = format(new Date(), "dd/MM/yyyy");

      toast({
        title: "Transação deletada ",
        description: "Transação deletada com sucesso " + formatDate,
      });

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Link href={`/home/finances/${financeID}`}>
        {" "}
        <Button
          title="Ver"
          className="hover:text-blue-500"
          variant={"outline"}
          size={"icon"}
        >
          <Eye size={16} />
        </Button>
      </Link>
      <Button
        onClick={handleDeleteFinance}
        title="Apagar"
        className="hover:text-red-500"
        variant={"outline"}
        size={"icon"}
      >
        <Trash size={16} />
      </Button>
    </>
  );
};

export default ActionsButtons;
