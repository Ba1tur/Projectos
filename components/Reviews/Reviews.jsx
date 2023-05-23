import React from "react";
import s from "./Reviews.module.scss";

const Reviews = () => {
  return (
    <div className="reviews_background">
      <div className="container">
        <div className={s.reviews}>
          <div className={s.rewievs_title}>
            <h4>Видео-отзывы</h4>
          </div>
          <div className={s.reviews_background_elements}>
            <div className={s.background_left_element}>
              <img src="/Dots.png" alt="dots" />
            </div>
            <div className={s.background_right_element}>
              <img src="/Waves.png" alt="waves" />
            </div>
          </div>
          <div className={s.reviews_videos}>
            <div className={s.reviews_video_elements}>
              <img src="/video.png" alt="video" />
            </div>
            <div className={s.reviews_video_elements}>
              <img src="/video.png" alt="video" />
            </div>
            <div className={s.reviews_video_elements}>
              <img src="/video.png" alt="video" />
            </div>
          </div>
          <div className={s.reviews_small_title}>
            <h3>
              Оставь заявку и выбери лучшего автора на основании отзывов
            </h3>
          </div>
          <div className={s.reviews_btn}>
            <button>Разместить заказ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
