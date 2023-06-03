import React from "react";
import s from "./Reviews.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";
import { reviews } from "@/constans/Reviews";
import Image from "next/image";

const Reviews = () => {
  return (
      <div className="container">
        <div className={s.reviews}>
          <div className={s.reviews_background}>
            <Image src="/rewievsBackground.png" width={1924} height={752} alt="" />
          </div>
          <div className={s.rewievs_title}>
            <h4>Видео-отзывы</h4>
          </div>
          <div className={s.reviews_background_elements}>
            <div className={s.background_left_element}>
              <Image src="/dots.png" width={250} height={250} alt="dots" />
            </div>
            <div className={s.background_right_element}>
              <Image src="/waves.png" width={250} height={150} alt="waves" />
            </div>
          </div>
          <div className={s.reviews_swiper}>
            <Swiper
              style={{
              "--swiper-pagination-color": "#93A1C8",
            }}
            grabCursor
            speed={100}
            slidesPerView={3}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            spaceBetween={20}
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
                1000: {
                  slidesPerView: 3,
                },
                950: {
                  slidesPerView: 2,
                },
                900: {
                  slidesPerView: 2,
                },
                850: {
                  slidesPerView: 2,
                },
                750: {
                  slidesPerView: 2,
                },
                726: {
                  slidesPerView: 2,
                },
                700: {
                  slidesPerView: 2,
                },
                620: {
                  slidesPerView: 2,
                },
                550: {
                  slidesPerView: 2,
                },
                520: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 1,
                },
                420: {
                  slidesPerView: 1,
                },
                320: {
                  slidesPerView: 1,
                },
              }}
              modules={[Navigation, Pagination, Autoplay]}
              className="reviews_swiper"
            >
              {" "}
              {reviews.map((item) => (
              <SwiperSlide>
                <div key={item.id} className={s.reviews_video}>
                  <Image src={item.generalImg} width={300} height={300} alt="video" />
                  <div className={s.reviews_pause_video}>
                    <Image src={item.pauseImg} width={40} height={40} alt="pauseBtn" />
                    <p>{item.title}</p>
                  </div>
                </div>
              </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={s.reviews_second_title}>
            <h3>Оставь заявку и выбери лучшего автора на основании отзывов</h3>
          </div>
          <div className={s.reviews_btn}>
            <button>Разместить заказ</button>
          </div>
        </div>
      </div>
  );
};

export default Reviews;
