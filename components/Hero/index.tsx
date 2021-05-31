import { motion } from "framer-motion";
import React from "react";
import TextRevealAnimation from "../Utility/TextRevealAnimation";

export interface IHero {
  imageURL: string;
  CTAAction: (...args: any[]) => void;
}

const Hero = ({ imageURL }: IHero) => {
  const [initialTextComplete, setInitialTextComplete] =
    React.useState<boolean>(false);

  return (
    <div className="w-full h-96 md:h-screen flex relative">
      <img
        className="object-cover bg-no-repeat object-top w-full h-full absolute z-50"
        src={imageURL}
        alt="Médico de braços cruzados olhando confiantemente para a câmera"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 z-250 w-full place-items-center">
        <div></div>
        <div className="absolute md:relative"></div>

        <div className="grid grid-flow-row place-items-center gap-8 mr-3 md:pr-8 ">
          <TextRevealAnimation
            animationCompleteCallback={() => setInitialTextComplete(true)}
            className="font-bold text-sm text-primary-dark md:text-4xl  3xl:text-6xl leading-5 3xl:leading-snug"
            text="Invista no seu futuro e qualifique-se para o mercado de trabalho"
          />

          <motion.div
            initial="hidden"
            animate={initialTextComplete ? "visible" : "hidden"}
            transition={{ duration: 0.75 }}
            variants={{
              visible: {
                opacity: [0, 0.25, 0.5, 1],
                y: 0,
              },
              hidden: {
                opacity: 0,
                y: 75,
              },
            }}
            className="text-xs md:text-base xl:text-2xl 3xl:text-3xl font-bold 3xl:leading-normal"
          >
            Conheça os nossos cursos de pós-graduação a distância na área da
            medicina
          </motion.div>

          <motion.button
            initial="hidden"
            animate={initialTextComplete ? "visible" : "hidden"}
            transition={{ duration: 0.75 }}
            variants={{
              visible: {
                opacity: [0, 0.25, 0.5, 1],
                y: 0,
              },
              hidden: {
                opacity: 0,
                y: 75,
              },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-primary-main justify-self-start rounded-md p-2 3xl:text-xl text-sm md:text-base text-white flex justify-center items-center "
          >
            Saiba mais
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
