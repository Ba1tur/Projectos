import React from "react";
import s from "./Description.module.scss";
import { descriptions, ovals } from "@/constans/description";
import Image from "next/image";
import { motion } from "framer-motion";

const Description = () => {
  
  const textAnimationTop = {
    hidden: {
      y: -150,
      opacity: 0,
    },

    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.3 },
    }),
  };
  return (
    <motion.div initial="hidden" whileInView="visible" className="container">
      <div className={s.description}>
        <div className={s.description_card}>
          <motion.h2 custom={1} variants={textAnimationTop}>
            Выполнение курсовых на заказ – качественные услуги опытных авторов
            по выгодным ценам
          </motion.h2>
        </div>
        <div className={s.description__del_card}>
          <motion.p custom={2} variants={textAnimationTop}>
            Курсовые работы – большинство студентов боятся их, как огня. Ведь,
            не сдав вовремя курсовую работу или получив неудовлетворительную
            оценку, вы рискуете не попасть на следующий курс обучения. Никому не
            хочется проходить через всю эту волокиту с беготней за
            преподавателем, бесконечными правками, пересдачами и т.д. Чтобы
            написать качественную курсовую, необходимо перелопатить уйму
            теоретического материала, провести собственное исследование, да еще
            и оформить все это грамотно, с учетом действующих нормативов. И
            хорошо, если подготовкой курсовой вы начали заниматься
            заблаговременно и с данной дисциплиной у вас все ладится. А если
            нет? Если вы по болезни или по другим причинам пропустили много
            занятий? Если вам приходится совмещать учебу и работу, так что
            свободного времени и сил катастрофически не хватает? Отличное
            решение для таких случаев – заказать курсовую работу у
            профессионалов в данной сфере. На этом сайте вас ждет штат опытных
            исполнителей, каждый из которых имеет как минимум одно высшее
            образование. В большинстве своем наши авторы – это преподаватели
            колледжей и вузов с многолетним стажем. Заказать курсовую работу у
            них – значит получить гарантированно грамотный, уникальный (что
            немаловажно) материал с максимальным раскрытием темы, с опорой на
            актуальные источники, правильно оформленный. Стоимость услуг будет
            оправдана тем, что вы сэкономите собственное время и нервы на
            посиделки в библиотеке или дома за учебниками, конспектами,
            интернет-ресурсами, чертежами и т.д. Словом, если вас интересует
            выполнение курсовых на заказ, лучшие авторы и профессиональный
            сервис ждут именно здесь!
          </motion.p>
        </div>
        <motion.div custom={3} variants={textAnimationTop}  className={s.description__set_card}>
          <div className={s.description__set_card__box}>
            <h2>Маркированный список</h2>
            {descriptions.map((descriptions) => (
              <div key={descriptions.id} className={s.description__set_info}>
                <Image
                  src={descriptions.img}
                  width={30}
                  height={30}
                  alt="oval"
                />
                <p>{descriptions.title}</p>
              </div>
            ))}
          </div>

          <div className={s.description__set_card__tag}>
            <h2>Нумерованный список</h2>
            {ovals.map((ovals) => (
              <div key={ovals.id} className={s.description__set_card__info}>
                <Image src={ovals.img} width={30} height={30} alt="sercal" />
                <p>{ovals.title}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Description;
