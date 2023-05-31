import { Swiper, SwiperSlide } from "swiper/react";
import s from "./Coursework.module.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper";
import { coursework } from "../../constans/Coursework";
import Image from "next/image";
import shield from "../../public/shield.png";
import calendar from "../../public/Calendar.png";
import leftCloud from "../../public/leftCloud.png";
import rightCloud from "../../public/rightCloud.png";

const Coursework = () => {
  return (
    <div className="container">
      <div className={s.course_work}>
        <div className={s.course_work_title}>
          <h4>
            Последние выполненые <span>курсовые работы</span> по{" "}
            <span>праву и юриспреденции</span>
          </h4>
        </div>
        <div className={s.course_work_cards}>
          <Swiper
            style={{
              "--swiper-pagination-color": "#93A1C8",
            }}
            grabCursor
            loop
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
                slidesPerView: 2,
              },
              1065: {
                slidesPerView: 2,
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
              420: {
                slidesPerView: 1,
              },
              320: {
                slidesPerView: 1,
              },
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="course_work_swiper"
            contextMenu=""
          >
            {" "}
            {coursework.map((item) => (
              <SwiperSlide>
                <div key={coursework.id} className={s.course_work_card}>
                  <div className={s.course_card_titles}>
                    <p>Сегодня, 17:45</p>
                    <h3>
                      Управление персоналом в условиях неподчинения сотрудников
                    </h3>
                    <p>Дипломная работа, Управление персоналом, 15 страниц</p>
                  </div>
                  <div className={s.card_general_info}>
                    <div className={s.card_general_conditions}>
                      <div className={s.card_unique}>
                        <div>
                          <Image src={shield} alt="shield" />
                        </div>
                        <div>
                          <p>Уникальность</p>
                          <p>97%</p>
                        </div>
                      </div>
                      <div className={s.card_calendar}>
                        <div>
                          <Image src={calendar} alt="Calendar" />
                        </div>
                        <div>
                          <p>Срок выполнения</p>
                          <p>3 дня</p>
                        </div>
                      </div>
                    </div>
                    <div className={s.card_author_price}>
                      <div className={s.card_author_name}>
                        <div>
                          <Image
                            src={item.img}
                            width={35}
                            height={35}
                            alt="author"
                          />
                        </div>
                        <div>
                          <p>Эксперт</p>
                          <p>{item.name}</p>
                        </div>
                      </div>
                      <div className={s.card_price}>
                        <h4>{item.price} ₽</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={s.course_work_clouds}>
          <div className={s.course_left_cloud}>
            <Image src={leftCloud} alt="leftCloud" />
          </div>
          <div className={s.course_right_cloud}>
            <Image src={rightCloud} alt="rightCloud" />
          </div>
        </div>
        <div className={s.course_work_btn}>
          <button>Узнать стоимость своей работы</button>
        </div>
      </div>
    </div>
  );
};

export default Coursework;
