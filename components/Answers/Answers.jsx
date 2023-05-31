import React from "react";
import s from "./Answers.module.scss";
import { answers } from "@/constans/Answers";
import Image from "next/image";

const Answers = () => {
  return (
    <div className="container">
      <div className={s.answer}>
        <div className={s.answer__card}>
          <h1 className={s.answer__card_title}>Тебе могут быть полезны</h1>
        </div>{" "}
        <div className={s.answer__del_card}>
          {answers.map((answer) => (
            <div key={answer.id} className={s.answer__del_card__info}>
              <Image src={answer.img} width={100} height={100} alt="notebook" />
              <h1>{answer.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Answers;
