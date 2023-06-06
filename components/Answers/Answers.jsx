import React from "react";
import s from "./Answers.module.scss";
import { answers } from "@/constans/answers";
import Image from "next/image";

const Answers = () => {
  return (
    <div className="container">
      <div className={s.answer}>
        <div className={s.answer__card}>
          <h2 className={s.answer__card_title}>Тебе могут быть полезны</h2>
        </div>{" "}
        <div className={s.answer__del_card}>
          {answers.map((answers) => (
            <div key={answers.id} className={s.answer__del_card__info}>
              <Image src={answers.img} width={100} height={100} alt="notebook" />
              <h2>{answers.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Answers;
