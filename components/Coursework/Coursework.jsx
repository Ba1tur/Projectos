import { Swiper, SwiperSlide } from "swiper/react";
import s from "./Coursework.module.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper";
import { coursework } from "../../constans/Coursework";

const Coursework = ({ name, price, img }) => {
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
                slidesPerView: 3
              },
              1420: {
                slidesPerView: 3
              },
              1320: {
                slidesPerView: 3
              },
              1220: {
                slidesPerView: 3
              },
              1166: {
                slidesPerView: 3
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
              }
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="course_work_swiper"
            contextMenu=""
          >
            {" "}
            {coursework.map((item) => (
              <SwiperSlide>
                <div className={s.course_work_card}>
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
                          <img src="/shield.png" alt="shield" />
                        </div>
                        <div className={s.card_unique_titles}>
                          <p>Уникальность</p>
                          <p>97%</p>
                        </div>
                      </div>
                      <div className={s.card_calendar}>
                        <div>
                          <img src="/Calendar.png" alt="Calendar" />
                        </div>
                        <div className={s.card_calendar_titles}>
                          <p>Срок выполнения</p>
                          <p>3 дня</p>
                        </div>
                      </div>
                    </div>
                    <div className={s.card_author_price}>
                      <div className={s.card_author_name}>
                        <div>
                          <img src={item.img} alt="author" />
                        </div>
                        <div className={s.card_name}>
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
            <img src="/leftCloud.png" alt="leftCloud" />
          </div>
          <div className={s.course_right_cloud}>
            <img src="/rightCloud.png" alt="rightCloud" />
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
