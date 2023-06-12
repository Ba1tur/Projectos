import React from "react";
import s from "./Hero.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
const Hero = () => {
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.1 },
    }),
  };
  return (
    <motion.div initial="hidden" whileInView="visible" className="container">
      <div  className={s.hero}>
        <div className={s.hero_background}>
          <Image src="/Hero-oval.png" alt="oval" width={1600} height={1000} />
        </div>
        <motion.div variants={textAnimation} className={s.logo}>
          <motion.div variants={textAnimation} custom={1} className={s.logo_logotip}>
            <p>
              <Image src="/hero-logo.png" alt="logo" width={120} height={30} />
            </p>
            <motion.p variants={textAnimation} custom={2}>— помогаем учиться</motion.p>
          </motion.div>
          <div className={s.logo_btn}>
            <motion.button variants={textAnimation} custom={3}>Регистрация</motion.button>
            <motion.button variants={textAnimation} custom={4}>Войти</motion.button>
          </div>
        </motion.div>
        <motion.div variants={textAnimation} custom={5} className={s.hero_info}>
          <motion.div variants={textAnimation} custom={6} className={s.hero_info__img}>
            <Image
              src="/hero-girl.png"
              alt="girl"
              width={500}
              height={500}
            ></Image>
          </motion.div>
          <div className={s.hero_info__des}>
            <motion.h2 variants={textAnimation} custom={7}>
              Заказать <span>курсовую работу</span>{" "}
            </motion.h2>
            <motion.p variants={textAnimation} custom={8} className={s.hero_info__des_text}>
              У нас можно заказать курсовую работу напрямую у любого
              исполнителя. Все они – преподаватели и эксперты в своем предмете.
            </motion.p>
            <motion.div variants={textAnimation} custom={9} className={s.hero_info__des_set}>
              <p>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.39446 38.0237C8.27223 37.3896 8.46173 36.1747 7.81786 35.3102C5.28421 31.9086 3.94502 27.873 3.94502 23.6397C3.94502 12.7484 12.9417 3.88775 24 3.88775C35.0583 3.88775 44.055 12.7484 44.055 23.6397C44.055 27.873 42.7157 31.9087 40.1821 35.3103C39.5382 36.1748 39.7278 37.3897 40.6055 38.0238C41.485 38.6593 42.718 38.4695 43.3606 37.6068C50.2115 28.4089 49.5249 15.3551 40.9683 6.92786C31.5902 -2.30859 16.4111 -2.30998 7.03169 6.92786C-1.52493 15.3551 -2.21151 28.409 4.6394 37.6068C5.28318 38.4712 6.51668 38.6578 7.39446 38.0237ZM33.6 18.9869C33.6 22.8395 30.4014 25.9738 26.4696 25.9738V25.9739H21.3216V28.0418H25.4464C26.5589 28.0418 27.4608 28.9255 27.4608 30.0156C27.4608 31.1058 26.5589 31.9895 25.4464 31.9895H21.3216V34.0261C21.3216 35.1163 20.4198 36 19.3072 36C18.1947 36 17.2928 35.1163 17.2928 34.0261V31.9895H15.2144C14.1019 31.9895 13.2 31.1058 13.2 30.0156C13.2 28.9255 14.1019 28.0418 15.2144 28.0418H17.2928V25.9739H15.2144C14.1019 25.9739 13.2 25.0901 13.2 24C13.2 22.9099 14.1019 22.0261 15.2144 22.0261H17.2928V13.9739C17.2928 12.8837 18.1947 12 19.3072 12H26.4696C30.4013 12 33.6 15.1343 33.6 18.9869ZM26.4696 22.0259C28.1798 22.0259 29.5712 20.6626 29.5712 18.9868C29.5712 17.3111 28.1798 15.9477 26.4696 15.9476H21.3216V22.0259H26.4696ZM0 46.2C0 45.2059 0.882587 44.4 1.97132 44.4H46.0287C47.1174 44.4 48 45.2059 48 46.2C48 47.1941 47.1174 48 46.0287 48H1.97132C0.882587 48 0 47.1941 0 46.2Z"
                    fill="#7D2AEB"
                  />
                </svg>
                минимальные цены
              </p>
              <p>
                {" "}
                <svg
                  width="41"
                  height="48"
                  viewBox="0 0 41 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M39.8297 7.77243L21.2278 0.143332C20.7619 -0.0477305 20.2381 -0.0478242 19.7722 0.143332L1.1703 7.77243C0.461819 8.06305 0 8.7463 0 9.50408V18.7783C0 31.5483 7.81363 43.0352 19.7827 47.861C20.2424 48.0463 20.7575 48.0463 21.2173 47.861C33.1862 43.0353 41 31.5484 41 18.7783V9.50408C41 8.7463 40.5383 8.06305 39.8297 7.77243ZM37.2037 18.7783C37.2037 29.6341 30.75 39.6276 20.5 44.0884C10.5239 39.7467 3.7963 29.9283 3.7963 18.7783V10.7558L20.5 3.90514L37.2037 10.7558V18.7783ZM18.402 25.0984L26.5606 17.0393C27.3018 16.3071 28.5036 16.3071 29.245 17.0393C29.9863 17.7716 29.9862 18.9588 29.2449 19.691L19.7442 29.0758C19.0027 29.8082 17.8009 29.8079 17.0598 29.0758L11.755 23.8357C11.0137 23.1035 11.0137 21.9163 11.755 21.1841C12.4964 20.4519 13.6982 20.4518 14.4394 21.1841L18.402 25.0984Z"
                    fill="#7D2AEB"
                  />
                </svg>
                Заказы защищены гарантией
              </p>
              <p>
                <svg
                  width="54"
                  height="46"
                  viewBox="0 0 54 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.579 4.84209C15.8991 4.84209 12.1053 8.63588 12.1053 13.3158C12.1053 17.9956 15.8991 21.7894 20.579 21.7894C25.2589 21.7894 29.0527 17.9956 29.0527 13.3158C29.0527 8.63588 25.2589 4.84209 20.579 4.84209ZM7.26324 13.3158C7.26324 5.96167 13.2249 0 20.579 0C27.9331 0 33.8948 5.96167 33.8948 13.3158C33.8948 20.6698 27.9331 26.6315 20.579 26.6315C13.2249 26.6315 7.26324 20.6698 7.26324 13.3158ZM34.1477 2.47607C34.7428 1.27867 36.1959 0.790377 37.3933 1.38543C41.7719 3.56142 44.7895 8.08397 44.7895 13.3158C44.7895 18.5475 41.7719 23.0701 37.3933 25.2461C36.1959 25.8411 34.7428 25.3528 34.1477 24.1554C33.5527 22.958 34.041 21.505 35.2384 20.9099C38.0344 19.5204 39.9474 16.6393 39.9474 13.3158C39.9474 9.99224 38.0344 7.11109 35.2384 5.7216C34.041 5.12654 33.5527 3.67347 34.1477 2.47607ZM20.579 36.3157C14.4325 36.3157 8.68567 39.5244 4.32488 45.0746C3.4988 46.126 1.9768 46.3087 0.925401 45.4826C-0.126002 44.6565 -0.308663 43.1345 0.517416 42.0831C5.58172 35.6374 12.631 31.4736 20.579 31.4736C28.527 31.4736 35.5763 35.6374 40.6406 42.0831C41.4667 43.1345 41.284 44.6565 40.2326 45.4826C39.1812 46.3087 37.6592 46.126 36.8331 45.0746C32.4723 39.5244 26.7255 36.3157 20.579 36.3157ZM38.9522 34.752C39.5034 33.5338 40.9378 32.9931 42.156 33.5444C46.2183 35.3826 49.8109 38.3476 52.7458 42.0831C53.5719 43.1345 53.3892 44.6565 52.3378 45.4826C51.2864 46.3087 49.7644 46.126 48.9384 45.0746C46.4139 41.8616 43.4161 39.4294 40.1598 37.9558C38.9416 37.4046 38.4009 35.9702 38.9522 34.752Z"
                    fill="#7D2AEB"
                  />
                </svg>
                72 000 преподавателей и экспертов
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={textAnimation} custom={10} className={s.hero_form}>
          <motion.div variants={textAnimation} custom={11} className={s.hero_form__inputs}>
            <motion.div variants={textAnimation} custom={12} className={s.hero_form__inp}>
              <button>тема работы</button>
              <input type="text" placeholder="Введи тему работы сюда" />
            </motion.div>
            <motion.div variants={textAnimation} custom={13} className={s.hero_form__inp}>
              <button>твой email</button>
              <input type="text" placeholder="example@mail.com" />
            </motion.div>
            <motion.button variants={textAnimation} custom={14}>% у меня есть промокод</motion.button>
          </motion.div>
          <div className={s.hero_form_description}>
            <motion.div variants={textAnimation} custom={15} className={s.hero_form__inps}>
              <input type="checkbox" />
              <p>
                {" "}
                Согласен с условиями политики конфиденциальности и
                пользовательского соглашения.
              </p>
            </motion.div>
            <motion.div variants={textAnimation} custom={16} className={s.hero_form__btn}>
              <button>Узнать стоимость</button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
