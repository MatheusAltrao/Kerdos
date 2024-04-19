"use client";
import { ReactNode } from "react";
import CountUp from "react-countup";

interface CardProps {
  title: string;
  icon: ReactNode;
  amount: number;
  description: string;
}

const Card = ({ title, amount, description, icon }: CardProps) => {
  return (
    <div className=" rounded-lg bg-muted p-8">
      <div className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="text-sm font-medium">{title}</div>
        {icon}
      </div>
      <div>
        <div className="flex items-center gap-1">
          <p className="text-2xl font-bold">
            R${" "}
            <CountUp
              start={0}
              end={amount}
              duration={2}
              decimals={2}
              decimal=","
              useGrouping={true}
              separator="."
              useEasing={true}
            />{" "}
          </p>
        </div>
        <p className="text-xs   opacity-60 ">{description}</p>
      </div>
    </div>
  );
};

export default Card;
