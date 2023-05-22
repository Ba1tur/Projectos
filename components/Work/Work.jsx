import React from "react";
import s from "./Work.module.scss";

const Work = () => {
  return (
    <div className="container">
      <div className={s.work}>
        <div className={s.work_how_title}>
          <h3>Как это работает</h3>
        </div>
        <div className={s.work_img_title}>
          <div className={s.work_images}>
            <div className={s.work_info_img}>
              <div>
                <img src="/login.png" alt="login" />
              </div>
              <div>
                <img src="/people.png" alt="people" />
              </div>
              <div>
                <img src="/signs.png" alt="signs" />
              </div>
            </div>
          </div>
          <div className={s.work_images_title}>
            <p>Регистрируешься и описываешь, в чем нужна помощь</p>
            <p>Выбираешь эксперта</p>
            <p>Получаешь готовую работу и 20-дневную гарантию</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
