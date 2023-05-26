import React from "react";
import s from "./Azer.module.scss";
import { azer } from "@/constans/Azer";
import Image from "next/image";

const Azer = () => {
  return (
    <div className="azer_section">
      <section className="container">
        <div className={s.azer}>
          <h1 className={s.azer__title}>Другие виды работ</h1>

          <div className={s.azer__card}>
            {azer.map((azer) => (
              <div className={s.azer__card_desc}>
                <div>
                  <div className={s.azer__card_md}>
                    <p>{azer.avatar}</p>
                  </div>
                  <h1>{azer.title}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Azer;
