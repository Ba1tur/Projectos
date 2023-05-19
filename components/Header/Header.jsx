import React from "react";
import s from "./Header.module.scss";
const Header = () => {
  return (
    <div>
      <header className={s.header}>
        <div className={s.header_intro}>
          <span>Скидка на заказ 300 ₽ по промокоду</span>
          <button className={s.promo}>REFERAT300</button>
          <button className={s.btn}>Применить промокод</button>
          <span>успей до 1 мая 🔥</span>
        </div>
      </header>
    </div>
  );
};

export default Header;
