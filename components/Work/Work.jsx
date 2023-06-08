import React from "react";
import s from "./Work.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper";
import { work } from "@/constans/Work";

const Work = () => {
  return (
    <div className="container">
      <div className={s.work}>
        <div className={s.work_how_title}>
          <h3>Как это работает</h3>
        </div>
        <div className={s.work_all}>
          <div className={s.work_all_swiper}>
            <div className={s.all_swiper_titles_img}>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop
                style={{
                  "--swiper-pagination-color": "#93A1C8",
                }}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
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
                modules={[Navigation, Pagination, Autoplay]}
                className="work_swiper"
              >
                {" "}
                {work.map((item) => (
                  <SwiperSlide>
                    <div key={item.id}>
                      <Image
                        src={item.img}
                        width={120}
                        height={120}
                        alt="login"
                      />
                      <p>{item.title}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className={s.work_backround_img}>
          <Image src="/arrowpage.png" width={1924} height={126} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Work;
