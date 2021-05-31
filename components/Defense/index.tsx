import React from "react";
import DefenseCard, { IDefenseCard } from "./DefenseCard";

export interface IDefense {
  defenses: IDefenseCard[];
}

const DefenseSection = ({ defenses }: IDefense) => {
  return (
    <div className="py-10 flex flex-col gap-10">
      <div className="text-primary-main text-xl md:text-2xl text-center">
        Qualifique no Instituto Gnosis
      </div>

      <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 place-items-center gap-5">
        {defenses.map((defense, index) => {
          return (
            <DefenseCard
              icon={defense.icon}
              label={defense.label}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DefenseSection;
