import React from "react";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className={s.header_field}>
          <div className={s.header_elements}>
            <div className={s.header_elements_title}>
              <p>Скидка на заказ 300 ₽ по промокоду</p>
            </div>
            <div className={s.header_elements_btns}>
              <button>REFERAT300</button>
              <button>
                Применить <span>промокод</span>
              </button>
            </div>
            <div className={s.header_elements_emoji_title}>
              <p>успей до 1 мая 🔥</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
