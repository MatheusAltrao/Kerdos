import { ChevronLeft } from "lucide-react";
import Link from "next/link";

interface BackProps {
  href: string;
}

const Back = ({ href }: BackProps) => {
  return (
    <div className="mb-5">
      <Link
        className=" text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
        href={href}
      >
        <div className="flex items-center gap-2">
          <ChevronLeft size={18} /> <p>Voltar</p>
        </div>
      </Link>
    </div>
  );
};

export default Back;
