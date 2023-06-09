import React from "react";
import s from "./Answers.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const Answers = () => {
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.1 },
    }),
  };
  const textAnimationBottom = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  const textAnimationTop = {
    hidden: {
      y: -150,
      opacity: 0,
    },
    
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <motion.div initial="hidden" whileInView="visible" className="container">
      <div className={s.answer}>
        <div className={s.answer__card}>
          <motion.h2
            variants={textAnimationTop}
            className={s.answer__card_title}
          >
            Тебе могут быть полезны
          </motion.h2>
        </div>{" "}
        <motion.div custom={2} variants={textAnimationBottom} className={s.answer__del_card}>
          {answers.map((answers) => (
            <div key={answers.id} className={s.answer__del_card__info}>
              <Image
                src={answers.img}
                width={100}
                height={100}
                alt="notebook"
              />
              <h2>{answers.title}</h2>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Answers;
