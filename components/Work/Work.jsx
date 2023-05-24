import React from "react";
import s from "./Work.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

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
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                grabCursor
                style={{
                  "--swiper-pagination-color": "#93A1C8",
                }}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  1520: {
                    slidesPerView: 3,
                  },
                  1420: {
                    slidesPerView: 3,
                  },
                  1320: {
                    slidesPerView: 3,
                  },
                  1220: {
                    slidesPerView: 3,
                  },
                  1166: {
                    slidesPerView: 3,
                  },

                  1165: {
                    slidesPerView: 3,
                  },
                  1065: {
                    slidesPerView: 3,
                  },
                  950: {
                    slidesPerView: 3,
                  },
                  900: {
                    slidesPerView: 3,
                  },
                  850: {
                    slidesPerView: 3,
                  },
                  750: {
                    slidesPerView: 3,
                  },
                  726: {
                    slidesPerView: 3,
                  },
                  680: {
                    slidesPerView: 3,
                  },
                  520: {
                    slidesPerView: 2,
                  },
                  420: {
                    slidesPerView: 1,
                  },
                  320: {
                    slidesPerView: 1,
                  },
                }}
                modules={[FreeMode, Pagination]}
              >
                {" "}
                <SwiperSlide>
                  <div>
                    <img src="/login.png" alt="login" />
                    <p>Регистрируешься и описываешь, в чем нужна помощь</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src="/people.png" alt="people" />
                    <p>Выбираешь эксперта</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src="/signs.png" alt="signs" />
                    <p>Получаешь готовую работу и 20-дневную гарантию</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className={s.work_img_info}>
          <img src="/arrow.png" alt="your image" />
        </div>
      </div>
    </div>
  );
};

export default Work;
