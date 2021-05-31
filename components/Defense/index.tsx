import { motion } from "framer-motion";
import React from "react";
import { InView } from "react-intersection-observer";
import DefenseCard, { IDefenseCard } from "./DefenseCard";

export interface IDefense {
  defenses: IDefenseCard[];
}

const DefenseSection = ({ defenses }: IDefense) => {
  return (
    <InView>
      {({ inView, entry, ref }) => {
        return (
          <div className="py-10 flex flex-col gap-10">
            <div className="text-primary-main text-xl md:text-2xl text-center">
              Qualifique no Instituto Gnosis
            </div>

            <div
              ref={ref}
              className="grid grid-flow-row grid-cols-2 md:grid-cols-4 place-items-center gap-5"
            >
              {defenses.map((defense, index) => {
                return (
                  <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={{
                      visible: {
                        opacity: 1,
                        y: 0,
                      },
                      hidden: {
                        opacity: 0,
                        y: 100,
                      },
                    }}
                    transition={{
                      delay: 0.1 + index * 0.25,
                      duration: 1,
                    }}
                  >
                    <DefenseCard
                      icon={defense.icon}
                      label={defense.label}
                      key={index}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        );
      }}
    </InView>
  );
};

export default DefenseSection;
