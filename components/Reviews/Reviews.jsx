import React from "react";
import s from "./Reviews.module.scss";

const Reviews = () => {
  return (
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
      </div>
    </div>
  );
};

export default Reviews;
