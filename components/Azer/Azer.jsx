import React from "react";
import s from "./Azer.module.scss";
import {  azers } from "@/constans/azer";
import { motion } from "framer-motion";


const Azer = () => {
  
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

  return (
    <motion.div initial="hidden" whileInView="visible" className={s.azer_section}>
      <div className="container">
        <div className={s.azer}>
          <motion.h2 custom={1} variants={textAnimationBottom} className={s.azer__title}>Другие виды работ</motion.h2>
          <motion.div custom={2} variants={textAnimationBottom}  className={s.azer__card}>
            {azers.map((azers) => (
              <div key={azers.id} className={s.azer__card_desc}>
                <div>
                  <div className={s.azer__card_set}>
                    <p>{azers.avatar}</p>
                  </div>
                  <h2>{azers.title}</h2>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Azer;
