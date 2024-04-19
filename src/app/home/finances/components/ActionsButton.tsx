"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/api";
import { Eye, Trash } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ActionsButtonsProps {
  financeID: number;
}

const ActionsButtons = ({ financeID }: ActionsButtonsProps) => {
  const router = useRouter();

  const handleDeleteFinance = async () => {
    try {
      await api.delete("/api/finances", {
        params: {
          id: financeID,
        },
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
