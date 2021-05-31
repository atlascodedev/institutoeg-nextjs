import React from "react";

export interface IDefenseCard {
  icon: React.FC<React.HTMLAttributes<HTMLDivElement | any>>;
  label: string;
}

const DefenseCard = ({ label, icon: Icon }: IDefenseCard) => {
  return (
    <div className="flex flex-col h-28 w-44 gap-2 bg-white shadow-customAlt rounded-md justify-center items-center px-2 ">
      <Icon className="text-primary-main text-2xl md:text-3xl" />
      <div className="text-gray-800 text-xs  text-center">{label}</div>
    </div>
  );
};

export default DefenseCard;
