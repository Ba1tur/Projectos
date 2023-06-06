import React from "react";
import s from "./Azer.module.scss";
import {  azers } from "@/constans/azer";


const Azer = () => {
  return (
    <div className="azer_section">
      <div className="container">
        <div className={s.azer}>
          <h2 className={s.azer__title}>Другие виды работ</h2>
          <div className={s.azer__card}>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Azer;
